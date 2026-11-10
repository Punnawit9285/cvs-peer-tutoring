/* Student handout PDF source: node print.js [pages.json] -> dist/print.html
   Per section: question pages (no answers, two columns, many items per page), then one page per concept card.
   At the end: the answer key with Thai explanations, then the Thai explanation of every concept.
   tools/pdf.sh prints it with headless Chrome, finds the real page numbers and fills the cross-references. */
const fs = require('fs');
const rd = f => fs.readFileSync(f, 'utf8');
global.window = global;
['lib', 'reg', 'heart', 'bp', 'micro', 'pe', 'dog'].forEach(f => eval(rd('data/' + f + '.js')));
eval(rd('src/thai-explain.js'));
const app = rd('src/deck-app.js');
function grab(name) {
  const k = 'var ' + name + ' = ', i = app.indexOf(k);
  if (i < 0) throw new Error(name + ' not found in deck-app.js');
  return JSON.parse(app.slice(i + k.length, app.indexOf('\n};', i) + 2));
}
const THAI_Q = grab('THAI_Q'), THAI_CONCEPT = grab('THAI_CONCEPT');
const S = CVS.sections, LET = 'ABCDEFGH';
const pages = process.argv[2] && fs.existsSync(process.argv[2]) ? JSON.parse(rd(process.argv[2])) : {};
const pg = k => pages[k] ? String(pages[k]) : '00';
const eager = h => String(h).replace(/ loading="lazy"/g, '');
const isQ = it => it.t === 'q' || it.t === 'tf' || it.t === 'open';

let nQ = 0, nC = 0;
S.forEach(s => s.items.forEach(it => { if (it.t === 'c') nC++; else nQ++; }));

/* ---------- cover ---------- */
let h = '<section class="cover"><div class="eyebrow"><span class="chip kind">Peer support 82</span><span class="chip">AC75–81 + lab quizzes</span><span class="chip">Student handout</span></div>' +
  '<h1>CVS I Regulation &amp; Lab</h1>' +
  '<p class="lede">' + nQ + ' past-exam and lab-quiz questions on the cardiovascular regulation lecture and every lab except ECG, with ' + nC + ' concept pages built from the real lab figures.</p>' +
  '<div class="howuse"><div><b>1 · Try</b>Each section starts with its questions. Nothing is answered on those pages: circle your choice first.</div>' +
  '<div><b>2 · Learn</b>After the questions come the concept pages, one page per concept. Underlined terms are the key details.</div>' +
  '<div><b>3 · Check</b>Answers and Thai explanations are all at the back, from page ' + pg('ans') + '. The Thai explanation of every concept follows them, from page ' + pg('thx') + '.</div></div>' +
  '<h3 class="minih">Contents</h3><table class="toc"><thead><tr><th>Section</th><th>Questions</th><th>Concept pages</th><th>Answers</th><th>Thai concept explanations</th></tr></thead><tbody>';
S.forEach(s => {
  const qn = s.items.filter(isQ).length, cn = s.items.filter(it => it.t === 'c').length;
  h += '<tr><td><span class="tid">' + s.id + '</span>' + s.title + '</td><td>p. ' + pg('q-' + s.id) + ' <span class="muted">· ' + qn + ' Qs</span></td><td>p. ' + pg('c-' + s.id) + ' <span class="muted">· ' + cn + ' pages</span></td><td>p. ' + pg('a-' + s.id) + '</td><td>p. ' + pg('x-' + s.id) + '</td></tr>';
});
h += '</tbody></table><p class="note"><span class="chip core">core</span> = done on the video. Question IDs (R1, F12, …) match the interactive deck and the answer key.</p></section>';

/* ---------- per section: questions, then concepts ---------- */
function qBlock(it) {
  let b = '<div class="pq"><div class="pqh"><b>' + it.id + '</b>' + (it.src ? '<span class="src">' + it.src + '</span>' : '') + (it.core ? '<span class="chip core">core</span>' : '') + (it.t === 'tf' ? '<span class="src">True / False</span>' : '') + (it.group ? '<span class="src">' + it.group + '</span>' : '') + '</div>';
  b += '<div class="pstem">' + it.q + '</div>';
  if (it.fig) b += '<div class="pfig">' + eager(it.fig) + '</div>';
  if (it.t === 'q') b += '<ol class="popt">' + it.o.map((o, i) => '<li><span class="L">' + LET[i] + '</span><span>' + o + '</span></li>').join('') + '</ol>';
  else if (it.t === 'tf') b += '<div class="ptf"><span><span class="L">T</span>True</span><span><span class="L">F</span>False</span></div>';
  else b += '<div class="plines"><i></i><i></i><i></i><i></i></div>';
  return b + '</div>';
}
S.forEach(s => {
  const qs = s.items.filter(isQ), cs = s.items.filter(it => it.t === 'c');
  h += '<section class="qsec"><header class="qhead"><div class="eyebrow"><span class="chip kind">' + s.kind + '</span><span class="id">Section ' + s.id + ' · Questions</span><span class="sp"></span><span>' + qs.length + ' questions · answers on p. ' + pg('a-' + s.id) + '</span></div>' +
    '<h2>' + s.title + '</h2><p>' + s.blurb + '</p></header><div class="qcols">' + qs.map(qBlock).join('') + '</div></section>';
  cs.forEach(it => {
    const kp = THAI_CONCEPT[it.id];
    h += '<section class="cpage" data-id="' + it.id + '"><div class="cfit concept"><div class="eyebrow"><span class="id">' + it.id + '</span><span class="chip kind">Concept</span>' + (it.src ? '<span class="chip">' + it.src + '</span>' : '') + '<span class="sp"></span><span>' + s.title + '</span></div>' +
      '<h2>' + it.title + '</h2>' +
      (kp && kp.length ? '<div class="tpoints"><div class="tp-head">สรุปประเด็นสำคัญ (Key Points)</div><ul>' + kp.map(b => '<li>' + b + '</li>').join('') + '</ul></div>' : '') +
      '<div class="cbody">' + eager(CVS.cloze(it.html)) + '</div>' +
      '<p class="cfoot">Thai explanation of this concept: p. ' + pg('x-' + s.id) + '</p></div></section>';
  });
});

/* ---------- answer key ---------- */
function ansLine(it) {
  if (it.t === 'q') { const A = [].concat(it.a); return A.map(i => '<span class="alet">' + LET[i] + '</span>').join(' ') + ' <span class="atxt">' + A.map(i => it.o[i]).join(' / ') + '</span>'; }
  if (it.t === 'tf') return '<span class="alet">' + (it.a ? 'T' : 'F') + '</span> <span class="atxt">' + (it.a ? 'True' : 'False') + '</span>';
  return '<span class="atxt">Model answer</span>';
}
h += '<section class="part"><div class="eyebrow"><span class="chip kind">Answer key</span></div><h1>เฉลยและคำอธิบาย</h1><p class="lede">Answers and Thai explanations for all ' + nQ + ' questions, in the same order as the question pages.</p></section>';
S.forEach(s => {
  h += '<section class="aksec"><header class="akhead"><span class="id">Answer key · Section ' + s.id + '</span><b>' + s.title + '</b><span class="muted">questions on p. ' + pg('q-' + s.id) + '</span></header><div class="acols">';
  s.items.filter(isQ).forEach(it => {
    const tb = THAI_Q[it.id];
    h += '<div class="ak"><div class="akq"><b>' + it.id + '</b>' + ansLine(it) + '</div>' +
      (it.t === 'open' && it.ans ? '<p class="model">' + it.ans + '</p>' : '') +
      (tb && tb.length ? '<ul>' + tb.map(x => '<li>' + x + '</li>').join('') + '</ul>' : (it.ex ? '<p>' + it.ex + '</p>' : '')) +
      (it.flag ? '<div class="flag"><b>Recall note:</b> ' + it.flag + '</div>' : '') + '</div>';
  });
  h += '</div></section>';
});

/* ---------- Thai explanation of every concept ---------- */
h += '<section class="part"><div class="eyebrow"><span class="chip kind">Concepts in Thai</span></div><h1>อธิบาย concept เป็นภาษาไทย</h1><p class="lede">The Thai explanation of each of the ' + nC + ' concept pages, in the same order.</p></section>';
S.forEach(s => {
  h += '<section class="xsec"><header class="akhead"><span class="id">Thai explanations · Section ' + s.id + '</span><b>' + s.title + '</b></header><div class="xcols">';
  s.items.filter(it => it.t === 'c').forEach(it => {
    const tx = window.THAI_EXPLAIN[it.id] || [];
    h += '<div class="xc"><div class="xch"><b>' + it.id + '</b>' + it.title + ' <span class="muted">· p. ' + pg('k-' + it.id) + '</span></div>' + tx.map(p => '<p>' + p + '</p>').join('') + '</div>';
  });
  h += '</div></section>';
});

/* ---------- fit each concept on one page ---------- */
const fitJs = `(function () {
  function fit(page) {
    var inner = page.firstElementChild, lo = 0.4, hi = 1;
    inner.style.zoom = 1;
    if (page.scrollHeight <= page.clientHeight + 1) return 1;
    for (var i = 0; i < 10; i++) { var m = (lo + hi) / 2; inner.style.zoom = m; if (page.scrollHeight <= page.clientHeight + 1) lo = m; else hi = m; }
    inner.style.zoom = lo; return lo;
  }
  function run() { var ps = document.querySelectorAll('.cpage'); for (var i = 0; i < ps.length; i++) ps[i].setAttribute('data-zoom', fit(ps[i]).toFixed(3)); document.documentElement.setAttribute('data-fitted', '1'); }
  var go = function () { (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(run); };
  if (document.readyState === 'complete') go(); else window.addEventListener('load', go);
})();`;

const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap">';
const html = '<!doctype html>\n<html lang="en" data-theme="light">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>CVS I Regulation &amp; Lab · Peer support 82 · student handout</title>\n' + FONTS +
  '\n<style>\n' + rd('src/base.css') + '\n' + rd('src/print.css') + '\n</style>\n</head>\n<body>\n<main class="sheet">\n' + h + '\n</main>\n<script>' + fitJs + '</script>\n</body>\n</html>\n';
if (/<\/script/i.test(h)) throw new Error('script close tag inside content');
fs.writeFileSync('dist/print.html', html);
console.log('dist/print.html', html.length, 'bytes ·', nQ, 'questions ·', nC, 'concepts');
