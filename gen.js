/* One-off generator: old/ data (with hand-drawn SVGs) + patch.js (real figures, cloze, fixes) -> data/*.js */
const fs = require('fs'), vm = require('vm');
const FILES = { reg: ['R'], heart: ['F', 'T'], bp: ['B'], micro: ['M'], pe: ['P'], dog: ['D', 'H'] };

// 1. old data
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
['lib', 'reg', 'heart', 'bp', 'micro', 'pe', 'dog'].forEach(f => vm.runInContext(fs.readFileSync('old/' + f + '.js', 'utf8'), ctx, { filename: f }));
const S = ctx.CVS.sections, secById = {};
S.forEach(s => { secById[s.id] = s; });

// 2. image helpers
function imgSize(f) {
  const b = fs.readFileSync('dist/img/' + f);
  if (b[0] === 0x89) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xFF) { i++; continue; }
    const m = b[i + 1], len = b.readUInt16BE(i + 2);
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
    i += 2 + len;
  }
  throw new Error('no size for ' + f);
}
const plain = s => String(s).replace(/<[^>]+>/g, '').replace(/\{\{|\}\}/g, '').replace(/"/g, '&quot;');
const used = new Set();
function IMG(f, cap, src, cls) {
  const [w, h] = imgSize(f); used.add(f);
  const k = ['scan'].concat(cls ? [cls] : []).concat(h / w > 0.8 ? ['tall'] : []).join(' ');
  const alt = plain(cap || src || f);
  const fc = (cap || src) ? '<figcaption' + (cap ? '' : ' class="srconly"') + '>' + (cap || '') + (src ? (cap ? ' ' : '') + '<span class="src">' + src + '</span>' : '') + '</figcaption>' : '';
  return '<figure class="' + k + '"><div class="paperimg"><img src="img/' + f + '" width="' + w + '" height="' + h + '" alt="' + alt + '" loading="lazy" decoding="async"></div>' + fc + '</figure>';
}
function ROW() { return '<div class="scanrow">' + Array.prototype.join.call(arguments, '') + '</div>'; }

// 3. collect the patch
const P = { cards: {}, cz: {}, newc: {}, q: {}, order: {} };
const pctx = {
  IMG, ROW,
  card: (id, o) => { if (P.cards[id]) throw new Error('dup card ' + id); P.cards[id] = o; },
  cz: (id, list) => { P.cz[id] = list; },
  newCard: (sec, o) => { (P.newc[sec] = P.newc[sec] || []).push(o); },
  q: (id, o) => { P.q[id] = o; },
  order: (sec, ids) => { P.order[sec] = ids; }
};
vm.createContext(pctx);
vm.runInContext(fs.readFileSync('patch.js', 'utf8'), pctx, { filename: 'patch.js' });

// 4. cloze by fragment
function wrapFrag(html, frag, id) {
  let pre = '', target = frag, post = '';
  const m = frag.match(/^([\s\S]*?)\[([\s\S]+)\]([\s\S]*)$/);
  if (m) { pre = m[1]; target = m[2]; post = m[3]; }
  const needle = pre + target + post;
  let from = 0;
  for (;;) {
    const i = html.indexOf(needle, from);
    if (i < 0) throw new Error('cloze fragment not found in ' + id + ': ' + frag);
    const t0 = i + pre.length, before = html.slice(0, t0);
    const inTag = before.lastIndexOf('<') > before.lastIndexOf('>');
    const open = (before.match(/\{\{/g) || []).length - (before.match(/\}\}/g) || []).length;
    if (inTag || open > 0) { from = i + 1; continue; }
    return before + '{{' + target + '}}' + html.slice(t0 + target.length);
  }
}

// 5. apply
const seenCard = new Set(), seenCz = new Set(), seenQ = new Set();
S.forEach(s => {
  s.items = s.items.map(it => {
    const o = Object.assign({}, it);
    if (o.t === 'c' && P.cards[it.id]) {
      seenCard.add(it.id);
      const pc = P.cards[it.id];
      ['id', 'title', 'src', 'html'].forEach(k => { if (pc[k] !== undefined) o[k] = pc[k]; });
    }
    if (o.t === 'c' && P.cz[it.id]) {
      seenCz.add(it.id);
      P.cz[it.id].forEach(fr => { o.html = wrapFrag(o.html, fr, it.id); });
    }
    if (o.t !== 'c' && P.q[it.id]) {
      seenQ.add(it.id);
      Object.keys(P.q[it.id]).forEach(k => { const v = P.q[it.id][k]; if (v === null) delete o[k]; else o[k] = v; });
    }
    return o;
  });
  (P.newc[s.id] || []).forEach(nc => s.items.push(Object.assign({ t: 'c' }, nc)));
  if (P.order[s.id]) {
    const map = {}; s.items.forEach(it => { if (map[it.id]) throw new Error('dup id ' + it.id); map[it.id] = it; });
    const ord = P.order[s.id];
    if (ord.length !== s.items.length) throw new Error('order length ' + s.id + ': ' + ord.length + ' vs ' + s.items.length);
    s.items = ord.map(id => { if (!map[id]) throw new Error('order: unknown ' + id); const x = map[id]; delete map[id]; return x; });
  }
});
Object.keys(P.cards).forEach(id => { if (!seenCard.has(id)) throw new Error('card not applied ' + id); });
Object.keys(P.cz).forEach(id => { if (!seenCz.has(id)) throw new Error('cz not applied ' + id); });
Object.keys(P.q).forEach(id => { if (!seenQ.has(id)) throw new Error('q not applied ' + id); });

// 6. checks
const ids = new Set(); let blanks = 0, cards = 0;
S.forEach(s => s.items.forEach(it => {
  if (ids.has(it.id)) throw new Error('dup ' + it.id); ids.add(it.id);
  const txt = JSON.stringify(it);
  if (/<svg/i.test(txt)) throw new Error('svg left in ' + it.id);
  if (it.t === 'c') {
    cards++;
    const o = (it.html.match(/\{\{/g) || []).length, c = (it.html.match(/\}\}/g) || []).length;
    if (o !== c) throw new Error('unbalanced cloze ' + it.id);
    blanks += o;
  }
}));
const all = fs.readdirSync('dist/img').filter(f => /\.(png|jpe?g)$/.test(f));
const unused = all.filter(f => !used.has(f));

// 7. write
Object.keys(FILES).forEach(file => {
  let out = '/* ' + FILES[file].map(id => 'Section ' + id + ': ' + secById[id].title).join(' | ') + '\n   Generated by gen.js from old/' + file + '.js + patch.js. {{text}} = cloze blank in concept cards. */\n';
  FILES[file].forEach(id => {
    const s = secById[id];
    const head = Object.assign({}, s); delete head.items;
    const h = JSON.stringify(head);
    out += 'CVS.add(' + h.slice(0, -1) + ',"items":[\n' + s.items.map(it => JSON.stringify(it)).join(',\n') + '\n]});\n';
  });
  fs.writeFileSync('data/' + file + '.js', out);
});
console.log('cards', cards, 'blanks', blanks, 'images used', used.size, '/', all.length, unused.length ? 'UNUSED: ' + unused.join(' ') : '');
