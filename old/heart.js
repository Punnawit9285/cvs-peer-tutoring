/* SECTIONS F (frog heart lab) and T (turtle vagus / heart block lab) */
(function () {

var SVG_FROG = '<svg viewBox="0 0 525 300" role="img" aria-label="Frog heart, dorsal view, with the crescentic line and the two Stannius ligature sites">' +
  '<line x1="95" y1="20" x2="118" y2="44" class="l-ven"/><line x1="205" y1="20" x2="182" y2="44" class="l-ven"/><line x1="150" y1="6" x2="150" y2="34" class="l-ven"/>' +
  '<ellipse cx="150" cy="60" rx="65" ry="26" class="f-ven"/>' +
  '<ellipse cx="112" cy="125" rx="46" ry="34" class="f-art"/><ellipse cx="188" cy="125" rx="46" ry="34" class="f-art"/>' +
  '<path d="M76,165 Q82,232 150,288 Q218,232 224,165 Q150,180 76,165 Z" class="f-art"/>' +
  '<path d="M92,82 Q150,104 208,82" class="l-cres"/>' +
  '<path d="M72,160 Q150,178 228,160" class="l-mut"/>' +
  '<text x="150" y="64" text-anchor="middle" class="ts">sinus venosus</text>' +
  '<text x="150" y="130" text-anchor="middle" class="ts">atria</text>' +
  '<text x="150" y="232" text-anchor="middle" class="ts">ventricle</text>' +
  '<line x1="216" y1="56" x2="258" y2="48" class="ax"/><text x="262" y="44" class="tb">Sinus venosus</text><text x="262" y="60" class="ts">pacemaker (&#8776; SA node)</text>' +
  '<line x1="204" y1="88" x2="258" y2="98" class="ax"/><text x="262" y="96" class="tb ta">Crescentic line</text><text x="262" y="112" class="ts">SA junction &#183; Stannius I &#183; vagal ganglion</text>' +
  '<line x1="228" y1="166" x2="258" y2="170" class="ax"/><text x="262" y="166" class="tb">AV junction</text><text x="262" y="182" class="ts">Stannius II &#183; Gaskell clamp</text>' +
  '<line x1="208" y1="236" x2="258" y2="236" class="ax"/><text x="262" y="232" class="tb">Ventricle</text><text x="262" y="248" class="ts">no coronary vessels: fed from chamber blood</text>' +
  '</svg>';

var SVG_AP2 = '<svg viewBox="0 0 600 230" role="img" aria-label="Pacemaker action potential versus fast ventricular action potential">' +
  '<line x1="14" y1="80" x2="590" y2="80" class="grid-l"/><text x="16" y="74" class="tm">0 mV</text>' +
  '<text x="150" y="20" text-anchor="middle" class="tb">SA node (slow response)</text>' +
  '<text x="455" y="20" text-anchor="middle" class="tb">Ventricular myocyte (fast response)</text>' +
  '<line x1="30" y1="140" x2="285" y2="140" class="l-mut"/><text x="32" y="134" class="tm">&#8722;40 threshold</text>' +
  '<path d="M30,170 C70,162 110,150 140,140 C148,120 152,86 160,78 C175,80 200,130 215,168 C220,172 230,172 240,170 C255,165 268,156 284,148" class="l-ven"/>' +
  '<text x="70" y="192" class="ts">4: If (funny Na&#8314;), slow rise</text>' +
  '<text x="166" y="72" class="ts">0: ICa (L-type)</text>' +
  '<text x="214" y="122" class="ts">3: IK</text>' +
  '<text x="32" y="212" class="tm">max diastolic &#8776; &#8722;60 mV</text>' +
  '<path d="M330,196 L352,196 L355,58 C358,58 362,74 370,80 C402,85 452,90 482,98 C502,108 516,178 532,194 C542,196 570,196 590,196" class="l-art"/>' +
  '<text x="362" y="50" class="ts">0: INa</text>' +
  '<text x="378" y="70" class="ts">1: Ito (K&#8314; out)</text>' +
  '<text x="404" y="112" class="ts">2: plateau, ICa &#8776; IK</text>' +
  '<text x="520" y="150" class="ts">3: IK</text>' +
  '<text x="476" y="214" class="ts">4: IK1, RMP &#8722;90</text>' +
  '</svg>';

var SVG_REFRAC = '<svg viewBox="0 0 600 292" role="img" aria-label="Refractory periods compared with the contraction twitch">' +
  '<line x1="30" y1="75" x2="590" y2="75" class="grid-l"/><text x="32" y="70" class="tm">0 mV</text><text x="32" y="225" class="tm">&#8722;90</text>' +
  '<path d="M40,230 L80,230 L83,42 C88,42 92,62 100,68 C140,76 220,86 262,98 C290,110 320,190 345,222 C352,228 362,230 380,230 L580,230" class="l-art"/>' +
  '<path d="M90,230 C150,230 200,60 280,58 C340,56 380,200 470,228 L580,230" class="l-ven" style="stroke-dasharray:7 5"/>' +
  '<line x1="83" y1="252" x2="310" y2="252" class="l-ink"/><line x1="83" y1="246" x2="83" y2="258" class="l-ink"/><line x1="310" y1="246" x2="310" y2="258" class="l-ink"/>' +
  '<line x1="310" y1="266" x2="338" y2="266" class="l-ink"/><line x1="338" y1="260" x2="338" y2="272" class="l-ink"/>' +
  '<text x="196" y="246" text-anchor="middle" class="tb">ARP: no stimulus can fire</text>' +
  '<text x="344" y="270" class="ts">RRP: needs a stronger stimulus</text>' +
  '<line x1="420" y1="30" x2="448" y2="30" class="l-art"/><text x="454" y="34" class="ts">action potential</text>' +
  '<line x1="420" y1="50" x2="448" y2="50" class="l-ven" style="stroke-dasharray:7 5"/><text x="454" y="54" class="ts">contraction (force)</text>' +
  '<text x="300" y="288" text-anchor="middle" class="ts">ARP lasts until the muscle is already relaxing, so cardiac muscle cannot be tetanized</text>' +
  '</svg>';

var beat = function (x0, peak) { return ' C' + (x0 + 5) + ',170 ' + (x0 + 8) + ',' + peak + ' ' + (x0 + 18) + ',' + peak + ' C' + (x0 + 26) + ',' + peak + ' ' + (x0 + 30) + ',170 ' + (x0 + 42) + ',170'; };
var dE = 'M20,170' + beat(20, 70) + ' L100,170' + beat(100, 70) + ' L180,170' + beat(180, 70) + ' L260,170' + beat(260, 70) + ' L318,170' +
  ' C322,170 325,108 333,108 C340,108 344,170 354,170 L420,170' + beat(420, 50) + ' L500,170' + beat(500, 70) + ' L580,170' + beat(580, 70) + ' L632,170';
var saTicks = '';
[20, 100, 180, 260, 340, 420, 500, 580].forEach(function (x) { saTicks += '<line x1="' + x + '" y1="194" x2="' + x + '" y2="206" class="' + (x === 340 ? 'l-art' : 'l-ink') + '"/>'; });
var SVG_EXTRA = '<svg viewBox="0 0 640 256" role="img" aria-label="Ventricular tracing with a stimulus in systole (no response) and a stimulus in diastole (extrasystole and compensatory pause)">' +
  '<path d="M340,170 C345,170 348,70 358,70 C366,70 370,170 382,170" class="l-mut"/>' +
  '<path d="' + dE + '" class="l-art"/>' +
  '<line x1="318" y1="30" x2="420" y2="30" class="l-ink"/><line x1="318" y1="24" x2="318" y2="36" class="l-ink"/><line x1="420" y1="24" x2="420" y2="36" class="l-ink"/>' +
  '<text x="369" y="20" text-anchor="middle" class="tb">compensatory pause</text>' +
  '<text x="452" y="56" class="ts">next beat stronger (longest filling)</text>' +
  saTicks + '<text x="16" y="222" class="tm">SA impulses (regular)</text>' +
  '<text x="344" y="222" class="ts ta">this one lands in the ARP</text>' +
  '<line x1="196" y1="240" x2="196" y2="176" class="l-ven"/><line x1="318" y1="240" x2="318" y2="176" class="l-ven"/>' +
  '<text x="190" y="252" text-anchor="end" class="ts">1 &#183; systole: no response (ARP)</text>' +
  '<text x="324" y="252" class="ts">2 &#183; diastole: extrasystole</text>' +
  '</svg>';

/* Frank-Starling curves for AC80 question */
var FS = function (smax, k) { return function (x) { return [x, 280 - smax * (1 - Math.exp(-(x - 50) / k))]; }; };
var fp = FS(245, 110), fc = FS(200, 150), fn = FS(150, 170);
var dot = function (f, x, lab, dx, dy) { var p = f(x); return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4.5" class="dot-ink"/><text x="' + (p[0] + (dx || -14)).toFixed(1) + '" y="' + (p[1] + (dy || -8)).toFixed(1) + '" class="tb">' + lab + '</text>'; };
var SVG_STARLING = '<svg viewBox="0 0 560 330" role="img" aria-label="Frank-Starling curves for positive inotropy, control and negative inotropy, with points A to F and X">' +
  '<line x1="50" y1="280" x2="500" y2="280" class="ax"/><line x1="50" y1="280" x2="50" y2="24" class="ax"/>' +
  '<line x1="300" y1="36" x2="300" y2="280" class="l-mut"/>' +
  '<path d="' + CVS.path(fp, 50, 480, 40) + '" class="l-art"/>' +
  '<path d="' + CVS.path(fc, 50, 480, 40) + '" class="l-ink"/>' +
  '<path d="' + CVS.path(fn, 50, 480, 40) + '" class="l-ven"/>' +
  '<text x="484" y="' + (fp(480)[1] - 8).toFixed(0) + '" text-anchor="end" class="ts">positive inotropy</text>' +
  '<text x="484" y="' + (fc(480)[1] - 8).toFixed(0) + '" text-anchor="end" class="ts">control</text>' +
  '<text x="484" y="' + (fn(480)[1] + 18).toFixed(0) + '" text-anchor="end" class="ts">negative inotropy</text>' +
  dot(fp, 262, 'E') + dot(fp, 300, 'F', 6, -8) + dot(fc, 262, 'C') + dot(fc, 318, 'X', 6, 18) + dot(fc, 372, 'D', 6, -8) + dot(fn, 262, 'A') + dot(fn, 300, 'B', 6, 18) +
  '<text x="275" y="300" text-anchor="middle" class="ts">ventricular end-diastolic volume (preload)</text>' +
  '<text x="20" y="152" text-anchor="middle" class="ts" transform="rotate(-90 20 152)">stroke volume</text>' +
  '</svg>';
var SVG_XY = '<svg viewBox="0 0 330 120" role="img" aria-label="Tracing: normal beat X followed by a small premature beat Y">' +
  '<path d="M10,95 L30,95 C36,95 40,25 52,25 C64,25 68,95 80,95 L110,95 C116,95 120,25 132,25 C144,25 148,95 160,95 L172,95 C176,95 179,58 187,58 C194,58 197,95 206,95 L262,95 C268,95 272,20 284,20 C296,20 300,95 312,95 L325,95" class="l-art"/>' +
  '<text x="132" y="16" text-anchor="middle" class="tb">X</text><text x="187" y="50" text-anchor="middle" class="tb">Y</text>' +
  '<text x="10" y="114" class="tm">X = normal beat &#183; Y = extrasystole</text>' +
  '</svg>';

/* AC81 point question, redrawn */
var SVG_STIM = '<svg viewBox="0 0 560 196" role="img" aria-label="Tracing with stimulation points A (systole), B (early diastole), C and D (late diastole)">' +
  '<path d="M10,120 L30,120 C36,120 40,30 52,30 C64,30 68,120 80,120 L150,120 C156,120 160,30 172,30 C184,30 188,120 200,120 L270,120 C276,120 280,30 292,30 C304,30 308,120 320,120 L390,120 C396,120 400,30 412,30 C424,30 428,120 440,120 L540,120" class="l-art"/>' +
  [[52, 'A'], [95, 'B'], [262, 'C'], [382, 'D']].map(function (p) { return '<line x1="' + p[0] + '" y1="' + (p[1] === 'A' ? 36 : 124) + '" x2="' + p[0] + '" y2="160" class="l-ven"/><text x="' + p[0] + '" y="180" text-anchor="middle" class="tb">' + p[1] + '</text>'; }).join('') +
  '<text x="545" y="190" text-anchor="end" class="tm">A systole &#183; B early diastole &#183; C, D late diastole</text>' +
  '</svg>';

CVS.add({
  id: 'F', short: 'Frog heart lab', title: 'Lab: Heart Contraction &amp; Extrasystole (frog)', kind: 'Lab',
  blurb: 'Sequence of contraction, refractory periods, extrasystole and compensatory pause, Stannius ligatures and the all-or-none law.',
  items: [

{ t: 'c', id: 'F-C1', title: 'What we did with the frog heart', src: 'Lab direction &#183; lab slide', html:
'<div class="two"><figure class="dg">' + SVG_FROG + '</figure><div><ul class="pts">' +
'<li><b>Exp 1 &#183; observe</b>: rate &#8776; 56/min. Systole looks <b>pale</b>, diastole looks <b>darker</b> (refilled). Order: sinus venosus &#8594; atria &#8594; ventricle.</li>' +
'<li><b>Exp 2 &#183; extrasystole</b>: shock the ventricle at different moments of the beat.</li>' +
'<li><b>Exp 3 &#183; Stannius ligatures</b>: tie the SA junction (crescentic line), then the AV junction.</li>' +
'<li><b>Exp 4 &#183; all-or-none</b>: stimulate the quiet ventricle with increasing current.</li>' +
'<li>Frog and turtle hearts have no coronary circulation, so ligatures do not cause ischemia.</li>' +
'</ul></div></div>' },

{ t: 'tf', id: 'F1', src: 'Lab quiz', core: true,
  q: 'Turtle&#8217;s sinus venosus is comparable to the SA node in humans.', a: true,
  ex: 'The sinus venosus fires fastest and starts every beat, which is the SA node&#8217;s job in humans.' },

{ t: 'c', id: 'F-C2', title: 'Three kinds of cardiac cells and two kinds of action potential', src: 'Lab slide', html:
'<div class="cols3"><div class="mini"><h4>Pacemaker cells</h4><p>SA node, AV node. Generate the impulse (automaticity).</p></div><div class="mini"><h4>Conducting cells</h4><p>Internodal pathways, bundle of His, bundle branches, Purkinje network.</p></div><div class="mini"><h4>Contractile cells</h4><p>Atrial and ventricular muscle. Joined by intercalated discs (gap junctions) into a <b>functional syncytium</b>.</p></div></div>' +
'<figure class="dg wide">' + SVG_AP2 + '</figure>' +
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Site</th><th>Conduction velocity (lab slide)</th><th>Intrinsic rate</th></tr></thead><tbody>' +
'<tr><td>SA node</td><td class="num">0.05 m/s</td><td>70&#8211;80/min, sinus rhythm</td></tr>' +
'<tr><td>Atrial muscle</td><td class="num">1.0 m/s</td><td>&#8212;</td></tr>' +
'<tr><td>AV node (relay station)</td><td class="num">0.1 m/s, delay &#8776; 0.1 s</td><td>40&#8211;60/min, nodal rhythm</td></tr>' +
'<tr><td>Bundle branches / Purkinje</td><td class="num">2.0 / 1.0 m/s (textbooks: Purkinje 2&#8211;4)</td><td>20&#8211;40/min, ventricular rhythm</td></tr>' +
'<tr><td>Ventricular muscle</td><td class="num">0.4 m/s</td><td>&#8212;</td></tr>' +
'</tbody></table></div>' +
'<p class="note">Conduction velocity depends on the slope of phase 0. Fastest = His&#8211;Purkinje system; slowest = AV node (and SA node). The SA node is the primary pacemaker because it <b>fires fastest</b>.</p>' },

{ t: 'q', id: 'F2', src: 'AC75', core: true,
  q: 'Which of the following is <b>NOT</b> an explanation of the SA node as the primary pacemaker?',
  o: ['Located at the superior part of the right atrium', 'Resting membrane potential is unstable', 'Discharges faster', 'Spontaneous depolarization', 'High amount of Na+ funny channels'], a: 0,
  ex: 'Location makes no cell a pacemaker. SA cells lead because phase 4 depolarizes spontaneously (unstable potential, many funny channels), so they reach threshold first and overdrive-suppress the slower pacemakers.' },
{ t: 'q', id: 'F3', src: 'AC76',
  q: 'ข้อไหนอธิบายได้ดีที่สุดว่าทำไม SA node ถึงเป็นตัวหลักในการสร้างจังหวะการเต้นของหัวใจ <span class="muted">(Best explanation of why the SA node sets the rhythm?)</span>',
  o: ['Depolarization can occur spontaneously', 'Unstable resting membrane potential', 'Located at the most superior part', 'Highest rate of firing', 'Numerous funny channels'], a: 3,
  ex: 'AV-node and Purkinje cells also depolarize spontaneously. What makes the SA node the leader is that it fires fastest (70&#8211;80 vs 40&#8211;60 vs 20&#8211;40/min).' },
{ t: 'tf', id: 'F4', src: 'Lab quiz',
  q: 'Cells in the AV node are the origin of cells in the bundle of His.', a: false,
  ex: 'The bundle of His is its own specialized conducting tissue; it is not derived from AV-nodal cells.' },
{ t: 'tf', id: 'F5', src: 'Lab quiz',
  q: 'Cardiac muscle is a functional syncytium as the cardiomyocytes are functionally connected by intercalated discs.', a: true,
  ex: 'Gap junctions in the intercalated discs pass current from cell to cell, so the atria (and the ventricles) contract as one unit.' },
{ t: 'tf', id: 'F6', src: 'Lab quiz',
  q: 'Cardiomyocytes have less density of mitochondria than skeletal muscle cells.', a: false,
  ex: 'Cardiomyocytes have more mitochondria: the heart works aerobically without rest.' },

{ t: 'c', id: 'F-C3', title: 'Refractory periods versus the twitch', src: 'Lab slide', html:
'<figure class="dg wide">' + SVG_REFRAC + '</figure>' +
'<ul class="pts"><li><b>Excitability</b> = ability to fire an AP in response to a depolarizing current.</li>' +
'<li><b>ARP</b> (phase 0 &#8594; mid phase 3, about &#8722;50 mV): Na&#8314; channels are inactivated; no stimulus of any size can fire the cell.</li>' +
'<li><b>RRP</b>: an AP is possible, but needs more current than usual. A short supranormal period follows.</li>' +
'<li>Because the ARP covers the whole contraction, a second beat cannot fuse with the first: <b>no tetanus</b>, so the heart always relaxes and refills.</li></ul>' },

{ t: 'tf', id: 'F7', src: 'Lab quiz', core: true,
  q: 'The absolute refractory period of cardiac muscle occurs only in the depolarization phase of the action potential.', a: false,
  ex: 'The ARP runs from phase 0 through the plateau into early phase 3, which is why it lasts about as long as the contraction.' },
{ t: 'tf', id: 'F8', src: 'Lab quiz',
  q: 'Tetanic contraction is unlikely to occur in cardiac muscle because of a long refractory period of the action potential.', a: true,
  ex: 'The long ARP prevents summation, so each contraction is followed by relaxation.' },

{ t: 'q', id: 'F9', src: 'Lab slide', core: true,
  q: 'In the frog-heart lab a single shock is applied to the ventricle at four different moments: early systole, late systole, early diastole and late diastole. When does it produce an extrasystole?',
  o: ['Early and late systole', 'Early and late diastole', 'Late diastole only', 'All four', 'Never: cardiac muscle cannot be re-excited'], a: 1,
  ex: 'Lab results: systole (early or late) = no extrasystole, because the ventricle is in its ARP. Diastole (early or late) = extrasystole, each followed by a compensatory pause.' },

{ t: 'c', id: 'F-C4', title: 'Extrasystole and compensatory pause', src: 'Lab slide', html:
'<figure class="dg wide">' + SVG_EXTRA + '</figure>' +
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Stimulus during</th><th>Extrasystole?</th><th>Compensatory pause?</th></tr></thead><tbody>' +
'<tr><td>Early systole</td><td>No</td><td>No</td></tr><tr><td>Late systole</td><td>No</td><td>No</td></tr>' +
'<tr><td>Early diastole</td><td><b>Yes</b></td><td><b>Yes</b></td></tr><tr><td>Late diastole</td><td><b>Yes</b></td><td><b>Yes</b></td></tr></tbody></table></div>' +
'<ul class="pts"><li><b>No extrasystole in systole</b>: the extra stimulus falls in the myocyte&#8217;s ARP.</li>' +
'<li><b>Compensatory pause</b>: the next SA (sinus venosus) impulse reaches the ventricle while it is still refractory from the extrasystole, so it is lost. The ventricle waits for the following SA impulse, which keeps the overall rate unchanged.</li>' +
'<li><b>Different amplitudes</b>: different <b>preload</b>. The later in diastole, the more filling, the stronger the extrasystole. The beat after the pause is strongest.</li>' +
'<li>Extrasystoles happen with heart disease (e.g., myocardial infarction) and in healthy people (lack of sleep, heavy smoking, stress, caffeine).</li></ul>' },

{ t: 'q', id: 'F10', src: 'AC75 &#183; AC79', core: true,
  q: 'Which of the following explains the occurrence of the <b>compensatory pause</b> after a ventricular extrasystole?',
  o: ['The ectopic AP stimulates during the relative refractory period of the myocyte', 'The ectopic AP stimulates during the absolute refractory period of the myocyte', 'The primary pacemaker cannot generate an AP to conduct ventricular contraction', 'The primary pacemaker AP stimulates during the relative refractory period of the myocyte', 'The primary pacemaker AP stimulates during the absolute refractory period of the myocyte'], a: 4,
  ex: 'The SA node keeps firing on schedule. Its next impulse meets a ventricle that is still in the ARP of the extrasystole, so nothing happens until the impulse after that.' },
{ t: 'q', id: 'F11', src: 'AC78',
  q: 'What causes a compensatory pause following an extrasystole?',
  o: ['Refractory period of the extrasystole', 'Increased afterload following the extrasystole', 'Increased preload following the extrasystole', 'Increased heart rate', 'Decreased contractility after the extrasystole'], a: 0,
  ex: 'The extrasystole makes the ventricle refractory at the moment the next normal impulse arrives.' },
{ t: 'q', id: 'F12', src: 'AC77', flag: 'Recall listed &#8220;absolute&#8221; in both b and c; one of them must have been &#8220;relative&#8221;. Shown corrected.',
  q: 'Extrasystole can result from&#8230;?',
  o: ['Atrioventricular junction blockage', 'An electrical signal from ectopic foci stimulating myocytes in the absolute refractory period', 'An electrical signal from ectopic foci stimulating myocytes in the relative refractory period', 'Increased automaticity of the AV node', 'Increased automaticity of the SA node'], a: 2,
  ex: 'An extrasystole is a premature beat from an ectopic focus that fires once the ARP is over (relative refractory period or later). A stimulus inside the ARP does nothing. A faster SA node gives sinus tachycardia, not premature beats.' },
{ t: 'q', id: 'F13', src: 'AC78', core: true,
  q: 'In an extrasystole, the amplitude of the contraction varies when stimulated at different times. What is the most likely explanation?',
  o: ['Different preload', 'Different afterload', 'Different contractility', 'Timing of the stimulation', 'Strength of the current'], a: 0,
  ex: 'The lab answer is preload: a later stimulus means a longer filling time, a bigger EDV and a stronger contraction (Frank&#8211;Starling). Timing is what changes the preload; current strength does not matter (all-or-none).' },
{ t: 'q', id: 'F14', src: 'AC80', core: true,
  q: 'In a pressure tracing, a stimulus causes an extrasystole at point Y. Point X (a normal beat) is marked on the Frank&#8211;Starling diagram. Where should Y be?',
  fig: '<div class="cols2 figpair"><figure class="dg">' + SVG_XY + '</figure><figure class="dg">' + SVG_STARLING + '</figure></div>',
  o: ['A', 'B', 'C', 'D', 'E', 'F'], a: 2,
  ex: 'The premature beat comes before the ventricle has filled, so EDV is lower, but contractility has not changed. Slide left along the <b>same</b> control curve: C. A or E would need a change in inotropy; D would need more filling.' },
{ t: 'q', id: 'F15', src: 'AC81', flag: 'Figure redrawn from memory of the exam; the original positions may differ. Apply the three rules.',
  q: 'Stimuli are applied to the frog ventricle at four points on the tracing. Which produces the extrasystole with the <b>highest amplitude</b>?',
  fig: '<figure class="dg wide">' + SVG_STIM + '</figure>',
  o: ['Point A with threshold intensity', 'Point B with maximal intensity', 'Point B with threshold intensity', 'Point C with maximal intensity', 'Point D with subthreshold intensity'], a: 3,
  ex: 'Rule 1: A is in systole (ARP), so it fails at any strength. Rule 2: all-or-none, so threshold and maximal stimuli at B give the same, smaller beat. Rule 3: the later in diastole, the more filling and the bigger the beat, so C wins. D is subthreshold and fires nothing.' },
{ t: 'tf', id: 'F16', src: 'Lab quiz',
  q: 'Extrasystole can occur without pathology in the heart.', a: true,
  ex: 'Stress, caffeine, alcohol, fatigue and smoking can all trigger benign extrasystoles.' },

{ t: 'c', id: 'F-C5', title: 'Stannius ligatures: who takes over as pacemaker?', src: 'Lab slide', html:
'<div class="cols2"><div class="tblwrap"><table class="tbl"><caption>Ligature I at the sino-atrial junction</caption><thead><tr><th></th><th>Sinus venosus</th><th>Atria</th><th>Ventricle</th></tr></thead><tbody>' +
'<tr><td>Before</td><td class="num">60</td><td class="num">60</td><td class="num">60</td></tr><tr><td>Just after</td><td class="num">60</td><td class="num">0</td><td class="num">0</td></tr><tr><td>Later</td><td class="num">60</td><td class="num">32</td><td class="num">32</td></tr></tbody></table></div>' +
'<div class="tblwrap"><table class="tbl"><caption>Ligature II at the AV junction</caption><thead><tr><th></th><th>Sinus venosus</th><th>Atria</th><th>Ventricle</th></tr></thead><tbody>' +
'<tr><td>Before</td><td class="num">60</td><td class="num">32</td><td class="num">32</td></tr><tr><td>Just after</td><td class="num">60</td><td class="num">32</td><td class="num">0</td></tr><tr><td>Later</td><td class="num">60</td><td class="num">32</td><td class="num">0</td></tr></tbody></table></div></div>' +
'<ul class="pts"><li>Each ligature is a <b>heart block</b>: the impulse cannot cross.</li>' +
'<li>After ligature I the atria stop, then restart at a slower rate: a latent pacemaker below the block shows <b>automaticity</b> once it escapes overdrive suppression.</li>' +
'<li>In patients whose SA node fails, the <b>AV node</b> usually takes over (junctional rhythm 40&#8211;60/min, narrow QRS). If the block is lower, Purkinje fibers take over (20&#8211;40/min). Whichever latent pacemaker fires fastest wins.</li></ul>' },

{ t: 'q', id: 'F17', src: 'AC79', core: true,
  q: 'ทำ SA block ในกบ ตอนแรกไม่เต้น แต่ต่อมา atrium เต้น สื่อให้เห็นว่า atrium มีคุณสมบัติอะไร <span class="muted">(After an SA block the frog heart stops, then the atrium beats again. Which property does this show?)</span>',
  o: ['Automaticity', 'Lusitropy', 'Excitability', 'Rhythmicity', 'Conductivity'], a: 0,
  ex: 'Beating again without any input from the sinus venosus means the tissue can generate its own impulses: automaticity.' },
{ t: 'q', id: 'F18', src: 'AC75', core: true,
  q: 'A 70-year-old man has dyspnea. ECG shows 50 bpm with regular narrow QRS complexes, but P waves are abnormal. SA node abnormality is diagnosed. Which structure is the pacemaker in this patient?',
  o: ['AV node', 'Bundle branch', 'Purkinje fiber', 'Atrium', 'Ventricle'], a: 0,
  ex: '50/min with narrow QRS is a junctional (AV nodal) escape rhythm: the impulse starts above the bundle branches, so the ventricles depolarize normally. A ventricular or Purkinje escape would be 20&#8211;40/min with wide QRS.' },

{ t: 'c', id: 'F-C6', title: 'All-or-none law', src: 'Lab slide', html:
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Stimulus to the quiet ventricle</th><th>Contraction</th></tr></thead><tbody>' +
'<tr><td>Subthreshold</td><td>None</td></tr><tr><td>Threshold</td><td>Full contraction</td></tr><tr><td>Submaximal</td><td>Same size</td></tr><tr><td>Maximal</td><td>Same size</td></tr><tr><td>Supramaximal</td><td>Same size</td></tr></tbody></table></div>' +
'<ul class="pts"><li>The cardiac AP is all-or-none, and the whole syncytium fires together, so a bigger shock does not give a bigger beat.</li>' +
'<li>The smallest effective stimulus is the one that brings the membrane to the <b>threshold potential</b>.</li>' +
'<li>Force <b>can</b> change by other routes: preload (Frank&#8211;Starling), contractility (catecholamines, Ca&#178;&#8314;, digitalis), temperature, pH, ions.</li></ul>' },

{ t: 'q', id: 'F19', src: 'AC77', core: true,
  q: 'Which of the following is the lowest potential required for left ventricular contraction?',
  o: ['Subthreshold', 'Threshold', 'Submaximum', 'Maximum', 'Supramaximum'], a: 1,
  ex: 'Threshold is the minimum; anything above it gives the same contraction (all-or-none).' }
  ]
});

/* ===================== TURTLE: vagus, ganglion, heart block ===================== */
CVS.add({
  id: 'T', short: 'Turtle vagus lab', title: 'Lab: Vagus Nerve &amp; Heart Block (turtle)', kind: 'Lab',
  blurb: 'Right versus left vagus, the ganglion at the crescentic line, nicotine and atropine, and graded heart block.',
  items: [

{ t: 'c', id: 'T-C1', title: 'Autonomic wiring of the heart', src: 'Lab slide', html:
'<div class="cols2"><div class="mini ven"><h4>Parasympathetic</h4><p>Dorsal motor nucleus of vagus / nucleus ambiguus &#8594; long preganglionic <b>vagus</b> &#8594; ACh on <b>nicotinic</b> receptors in a ganglion on the heart (turtle: <b>crescentic line</b>) &#8594; short postganglionic fiber &#8594; ACh on <b>M2</b> at the SA node (mostly right vagus) and AV node (mostly left vagus).</p></div>' +
'<div class="mini art"><h4>Sympathetic</h4><p>RVLM (cardioaccelerator) &#8594; spinal cord T1&#8211;T4 &#8594; cervical/stellate ganglia (nicotinic) &#8594; long postganglionic fiber &#8594; NE on <b>&#946;1</b> at SA node, AV node and ventricles. The adrenal medulla adds circulating epinephrine.</p></div></div>' +
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Effect on the heart</th><th>Sympathetic</th><th>Parasympathetic</th></tr></thead><tbody>' +
'<tr><td>Chronotropic (rate)</td><td class="up">&#8593;&#8593;</td><td class="dn">&#8595;&#8595;</td></tr>' +
'<tr><td>Inotropic (force)</td><td class="up">&#8593;&#8593;</td><td class="dn">&#8595;</td></tr>' +
'<tr><td>Dromotropic (conduction)</td><td class="up">&#8593;&#8593;</td><td class="dn">&#8595;&#8595;</td></tr>' +
'<tr><td>Action potential duration</td><td class="dn">&#8595;</td><td class="up">&#8593;</td></tr></tbody></table></div>' +
'<ul class="pts"><li>The vagus is active <b>at rest</b> (vagal tone): the intrinsic SA rate is ~100/min but resting HR is ~70.</li>' +
'<li>Vagal fibers go mainly to the atria and nodes; ventricles are mostly sympathetic.</li>' +
'<li>ACh &#8594; more K&#8314; leaves the cell &#8594; membrane more negative (hyperpolarized) + flatter phase 4 &#8594; slower rate.</li></ul>' },

{ t: 'tf', id: 'T1', src: 'Lab quiz', core: true,
  q: 'Parasympathetic nervous system stimulation makes the cardiac membrane potential more negative.', a: true,
  ex: 'ACh on M2 opens K+ channels (IK-ACh). K+ efflux hyperpolarizes the nodal cell and slows its depolarization.' },
{ t: 'tf', id: 'T2', src: 'Lab quiz',
  q: 'At rest, there is NO activity in the vagus nerve.', a: false,
  ex: 'Vagal tone is continuous; it keeps resting HR below the intrinsic SA rate.' },
{ t: 'tf', id: 'T3', src: 'Lab quiz',
  q: 'If the sympathetic nerves that supply the heart are destroyed, HR could NOT increase following physiologic changes.', a: false,
  ex: 'HR can still rise by withdrawal of vagal tone and by circulating catecholamines from the adrenal medulla.' },
{ t: 'tf', id: 'T4', src: 'Lab quiz',
  q: 'The amount of vagal fibers supplying the ventricles is greater than the other parts of the heart.', a: false,
  ex: 'Vagal fibers are concentrated on the atria, SA node and AV node. The ventricles are dominated by sympathetic fibers.' },

{ t: 'c', id: 'T-C2', title: 'Right vagus versus left vagus', src: 'Lab slide', html:
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Peripheral (cardiac) end stimulated</th><th>Right vagus</th><th>Left vagus</th></tr></thead><tbody>' +
'<tr><td>Before / after tying / after cutting</td><td>60 &#183; normal force &#183; A:V 1:1</td><td>60 &#183; normal force &#183; A:V 1:1</td></tr>' +
'<tr><td>Weak current</td><td>Rate and force &#8595; &#183; <b>A:V 1:1</b></td><td>Rate and force &#8595; &#183; <b>A:V &gt; 1:1</b> (dropped ventricular beats)</td></tr>' +
'<tr><td>Moderate current</td><td><b>Arrest</b> (0)</td><td>Markedly &#8595; &#183; A:V &gt; 1:1</td></tr>' +
'<tr><td>Strong current</td><td>Arrest</td><td>Arrest</td></tr></tbody></table></div>' +
'<ul class="pts"><li><b>Right vagus &#8594; SA node &#8594; rate</b> (chronotropic): bradycardia, then arrest.</li>' +
'<li><b>Left vagus &#8594; AV node &#8594; conduction</b> (dromotropic): atria keep beating faster than ventricles = AV block.</li>' +
'<li>Why: the two vagi send unequal numbers of fibers to the SA and AV nodes. Humans show the same pattern.</li>' +
'<li>Cutting the nerve changed nothing in this turtle preparation, and the heart recovers when stimulation stops.</li></ul>' },

{ t: 'tf', id: 'T5', src: 'Lab quiz', core: true,
  q: 'Stimulating the right vagus nerve produces an equivalent effect to stimulating the left one.', a: false,
  ex: 'Right vagus mainly slows the SA node (bradycardia). Left vagus mainly slows the AV node (AV block).' },
{ t: 'q', id: 'T6', src: 'AC78', core: true,
  q: 'During surgery, a surgeon accidentally compresses the <b>left vagus nerve</b>. What is the most likely consequence?',
  o: ['Heart block', 'Increased heart rate', 'Hypertension', 'Decreased gastrointestinal motility', 'Bronchodilation'], a: 0,
  ex: 'Mechanical compression or traction stimulates the nerve. The left vagus mainly supplies the AV node, so AV conduction slows or blocks.' },
{ t: 'q', id: 'T7', src: 'AC78',
  q: 'What is the effect of stimulating the vagus nerve in a dog?',
  o: ['Increased heart rate', 'Increased blood pressure', 'Decreased heart rate', 'Increased contractility', 'Vasoconstriction'], a: 2,
  ex: 'Vagal ACh on M2 receptors slows the SA node (and the AV node); BP falls with the cardiac output.' },
{ t: 'tf', id: 'T8', src: 'Lab quiz',
  q: 'Manipulation of the intestines during surgery can cause decreased heart rate.', a: true,
  ex: 'Traction on the gut triggers a vagal reflex that slows the heart.' },

{ t: 'c', id: 'T-C3', title: 'Where is the synapse? Nicotine at the crescentic line', src: 'Lab slide', html:
'<div class="flow">' +
'<div class="fbox">Stimulate the <b>vagus trunk</b><br><span class="muted">preganglionic fibers</span></div><div class="farrow">&#8594;</div>' +
'<div class="fbox ven"><b>Ganglion at the crescentic line</b><br>ACh &#8594; <b>nicotinic</b> receptor</div><div class="farrow">&#8594;</div>' +
'<div class="fbox">Postganglionic fiber<br>ACh &#8594; <b>M2</b> at SA/AV node</div><div class="farrow">&#8594;</div>' +
'<div class="fbox end">&#8595;HR or arrest</div></div>' +
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Condition</th><th>Atria (bpm)</th><th>Ventricle (bpm)</th></tr></thead><tbody>' +
'<tr><td>No stimulus</td><td class="num">46</td><td class="num">46</td></tr>' +
'<tr><td>Stimulate vagus</td><td class="num">0</td><td class="num">0</td></tr>' +
'<tr><td>Stimulate crescentic line</td><td class="num">0</td><td class="num">0</td></tr>' +
'<tr><td>Nicotine, low dose</td><td class="num">40</td><td class="num">40</td></tr>' +
'<tr><td>Nicotine, high dose</td><td class="num">50</td><td class="num">50</td></tr>' +
'<tr><td>Stimulate vagus 2&#8211;3 min after nicotine</td><td class="num">50</td><td class="num">50</td></tr>' +
'<tr><td>Stimulate crescentic line after nicotine</td><td class="num">0</td><td class="num">0</td></tr></tbody></table></div>' +
'<ul class="pts"><li><b>Low dose</b> stimulates the ganglionic nicotinic receptors &#8594; more ACh at the SA node &#8594; HR 46 &#8594; 40.</li>' +
'<li><b>High dose</b> keeps the postganglionic neuron depolarized; its Na&#8314; channels inactivate (<b>depolarization block</b>). The ganglion stops transmitting: resting vagal tone is lost (HR 46 &#8594; 50) and vagal stimulation can no longer get through.</li>' +
'<li>Stimulating the crescentic line still stops the heart because it fires the postganglionic neurons <b>below</b> the block. So the synapse is at the crescentic line.</li>' +
'<li><b>Atropine</b> blocks M2: neither vagus nor crescentic-line stimulation can slow the heart.</li></ul>' },

{ t: 'tf', id: 'T9', src: 'Lab quiz', core: true,
  q: 'The vagus nerve contains cholinergic preganglionic fibers that synapse on cardiac parasympathetic ganglia through muscarinic receptors.', a: false,
  ex: 'Ganglionic transmission uses nicotinic receptors. Muscarinic (M2) receptors are on the nodal cells, after the postganglionic fiber.' },
{ t: 'q', id: 'T10', src: 'AC77', core: true,
  q: 'What is the mechanism of action of <b>low-dose nicotine</b>?',
  o: ['Stimulation of adrenergic receptors', 'Stimulation of dopaminergic receptors', 'Stimulation of nicotinic receptors', 'Stimulation of muscarinic receptors', 'None of the above'], a: 2,
  ex: 'Nicotine is an agonist at nicotinic ACh receptors; at the vagal ganglion this fires postganglionic neurons and slows the heart.' },
{ t: 'q', id: 'T11', src: 'AC76 &#183; AC79', core: true,
  q: 'Which is a result of applying <b>high-dose nicotine</b> on the crescentic line?',
  o: ['Depolarization block at nicotinic receptors', 'Inhibition of muscarinic receptors', 'Stimulation of muscarinic receptors', 'Stimulation of nicotinic receptors'], a: 0,
  ex: 'Persistent nicotinic activation holds the postganglionic membrane depolarized, so Na+ channels stay inactivated and the neuron cannot fire.' },
{ t: 'tf', id: 'T12', src: 'Lab quiz',
  q: 'Nicotine has either a stimulating or an inhibitory effect on the nicotinic acetylcholine receptor (nAChR).', a: false,
  ex: 'The answer key says false: nicotine is an agonist and mainly stimulates nAChR. The &#8220;inhibition&#8221; seen at high dose is a depolarization block that results from excessive stimulation, not antagonism at the receptor.' },
{ t: 'q', id: 'T13', src: 'AC79', core: true,
  q: 'In an experiment on a turtle&#8217;s heart after applying a <b>low dose</b> of nicotine, what is the expected change in heart rate from stimulation of (1) the vagus nerve and (2) the crescentic line?',
  o: ['Increase, decrease', 'Decrease, no change', 'No change, no change', 'No change, decrease', 'Decrease, decrease'], a: 4,
  ex: 'A low dose stimulates the ganglion but does not block it, so both vagal and crescentic-line stimulation still slow the heart. Only a high dose blocks the vagal route (then the answer becomes &#8220;no change, decrease&#8221;).' },
{ t: 'q', id: 'T14', src: 'AC80', core: true,
  q: 'High-dose nicotine is applied to the synapse at the crescentic line, then the vagus nerve is stimulated. Compared with the baseline before nicotine, what is the change in heart rate (1) after high-dose nicotine and (2) during vagal stimulation?',
  o: ['Increase, increase', 'Increase, no change', 'Increase, decrease', 'Decrease, increase', 'Decrease, decrease'], a: 0,
  ex: 'Lab data: baseline 46 &#8594; high-dose nicotine 50 (resting vagal tone blocked) &#8594; vagal stimulation still 50. Both values are above the pre-nicotine baseline. Relative to the post-nicotine state the vagal stimulation causes no change, which is why option B is a trap.' },
{ t: 'q', id: 'T15', src: 'AC81', core: true,
  q: 'In a turtle experiment a &#946;1 agonist increases heart rate. Which of the following elicits the same response?',
  o: ['Apply low-dose nicotine on the crescentic line', 'Apply high-dose nicotine on the crescentic line', 'Direct electrical stimulation at the crescentic line'], a: 1,
  ex: 'High-dose nicotine blocks the ganglion, removes resting vagal tone and raises HR (46 &#8594; 50). Low-dose nicotine and direct stimulation both slow the heart.' },
{ t: 'q', id: 'T16', src: 'AC75',
  q: 'In an experiment on autonomic control of the heart, which test <b>cannot</b> demonstrate bradycardia/asystole from parasympathetic stimulation?',
  o: ['Stimulating the vagus after low-dose nicotine', 'Stimulating the vagus after high-dose nicotine', 'Stimulating the crescentic line after low-dose nicotine', 'Stimulating the crescentic line after high-dose nicotine', 'Stimulating the crescentic line after double vagotomy'], a: 1,
  ex: 'After high-dose nicotine the ganglion is blocked, so impulses in the preganglionic vagus never reach the postganglionic neurons. Every route that starts at or below the crescentic line still works, and vagotomy does not matter when you stimulate the heart side.' },
{ t: 'q', id: 'T17', src: 'AC77',
  q: 'What would be the heart-rate response to stimulating the vagus nerve at a crescentic line pre-coated with <b>atropine</b>?',
  o: ['Decreased', 'Stable', 'Increased', 'Irregular', 'None of the above'], a: 1,
  ex: 'Atropine blocks M2 receptors on the nodal cells, so the ACh released by vagal fibers has nothing to act on and the rate does not change.' },
{ t: 'q', id: 'T18', src: 'AC80',
  q: 'A patient with a decreased heart rate is given a <b>muscarinic antagonist</b>. What is the effect of this drug?',
  o: ['Decreases afferent signals in the vagus nerve', 'Decreases efferent signals in the vagus nerve', 'Inhibits vagal tone at the SA node', 'Increases efferent signals in sympathetic nerves', 'Decreases stimulation of baroreceptors'], a: 2,
  ex: 'The nerve still fires; the drug blocks ACh at M2 receptors on the SA node, removing vagal tone, so HR rises.' },
{ t: 'q', id: 'T19', src: 'AC78',
  q: 'Which of the following does <b>NOT</b> cause a depolarization block?',
  o: ['AV nodal block', 'Increased extracellular K+ concentration', 'RMP becoming less negative', 'High-dose nicotine at the ganglion', 'Increased stimulation of nicotinic ACh receptors'], a: 0,
  ex: 'Depolarization block = a membrane held so depolarized that Na+ channels stay inactivated (hyperkalemia, less negative RMP, excess nicotinic agonist). AV nodal block is a failure of conduction through the node, a different idea.' },

{ t: 'c', id: 'T-C4', title: 'Heart block with Gaskell&#8217;s clamp', src: 'Lab slide', html:
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Clamp at the AV junction</th><th>Atria</th><th>Ventricle</th><th>A : V</th></tr></thead><tbody>' +
'<tr><td>Before</td><td class="num">60</td><td class="num">60</td><td class="num">1:1</td></tr>' +
'<tr><td>Light</td><td class="num">60</td><td>&#8595;</td><td class="num">&gt; 1:1</td></tr>' +
'<tr><td>Moderate</td><td class="num">60</td><td>&#8595;&#8595;</td><td class="num">&gt; 1:1</td></tr>' +
'<tr><td>Tight</td><td class="num">60</td><td class="num">0</td><td>&#8212;</td></tr></tbody></table></div>' +
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Human AV block</th><th>What fails</th><th>Picture</th></tr></thead><tbody>' +
'<tr><td>1st degree</td><td>Every impulse conducts, slowly</td><td>PR &gt; 0.20 s, A:V 1:1</td></tr>' +
'<tr><td>2nd degree</td><td>Some impulses fail</td><td>Dropped QRS (2:1, 3:1). Mobitz I: PR lengthens then drops. Mobitz II: sudden drops</td></tr>' +
'<tr><td>3rd degree (complete)</td><td>None conduct</td><td>AV dissociation: atria at sinus rate, ventricles at escape rate (junctional 40&#8211;60 narrow QRS; ventricular 20&#8211;40 wide QRS); syncope</td></tr></tbody></table></div>' +
'<p class="note">Conduction block also occurs in healthy people: high vagal tone (athletes, sleep) and drugs such as &#946;-blockers, calcium-channel blockers and digoxin. Levels of block: SA exit, intra-atrial, AV, bundle branch, intraventricular.</p>' },

{ t: 'q', id: 'T20', src: 'AC75', core: true,
  q: 'An 80-year-old woman has syncope. The 12-lead ECG shows an atrial rate of 70 bpm and a ventricular rate of 40 bpm with no association between sinus P waves and QRS complexes. Which conduction abnormality is most likely?',
  o: ['1st-degree AV block', '2nd-degree AV block', '3rd-degree AV block', 'SA exit block', 'Right bundle branch block'], a: 2,
  ex: 'P waves and QRS complexes march independently (AV dissociation): no atrial impulse reaches the ventricles, which follow their own escape pacemaker at 40/min.' },
{ t: 'tf', id: 'T21', src: 'Lab quiz',
  q: 'In humans, a heart rate of 30&#8211;40 beats per minute can be caused by complete heart block.', a: true,
  ex: 'With complete block the ventricles rely on an escape pacemaker in the His bundle or Purkinje fibers, often 30&#8211;40/min.' },
{ t: 'tf', id: 'T22', src: 'Lab quiz',
  q: 'In patients with complete heart block, the atria and ventricles beat at the same rate.', a: false,
  ex: 'They beat independently at different rates (AV dissociation).' },
{ t: 'tf', id: 'T23', src: 'Lab quiz',
  q: 'Conduction block can occur in normal individuals.', a: true,
  ex: 'Examples: high vagal tone during sleep or in athletes, and drugs that slow AV conduction.' }
  ]
});
})();
