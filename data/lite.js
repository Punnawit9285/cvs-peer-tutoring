/* Short concept cards: each card's body is written here as arrow chains and brief bullets.
   Loaded last (data/sections.json), so it rebuilds the html of every card listed below.
   The card's figures and flow widgets are taken from its original html in the section file;
   the text there is superseded. Block syntax (one string per block):
     '> A → B → C'      cause → effect chain          '- text'   bullet (consecutive bullets form one list)
     '## Heading'        small group label            '! text'   exam trap / past-paper note
     '| a | b |'         table row (first row = head)  '= text'   centered equation
     '@F1' '@F2'         place that figure here; figures not placed go to a column beside the text
     '@X1'               place that flow widget        {{...}}    cloze blank (keep 3–8 per card, key ideas only)
     '---'               what follows goes full width under the text and figure columns */
(function () {
  var C = window.CVS, byId = {};
  C.sections.forEach(function (s) { s.items.forEach(function (it) { byId[it.id] = it; }); });
  function inl(t) { return C.cloze(String(t)).replace(/(→|↔|⇄)/g, '<span class="lt-ar">$1</span>'); }
  function render(blocks, F, X) {
    var out = [], main = out, below = null, ul = null, tb = null, used = {};
    function flush() {
      if (ul) { out.push('<ul class="lt-pts">' + ul.join('') + '</ul>'); ul = null; }
      if (tb) {
        out.push('<div class="tblwrap"><table class="lt-tbl"><thead><tr>' + tb[0].map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead><tbody>' +
          tb.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + inl(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>');
        tb = null;
      }
    }
    blocks.forEach(function (b) {
      b = b.replace(/<(?![A-Za-z\/!])/g, '&lt;');  /* a bare < (as in "< 80") is text, not a tag */
      var k = b.slice(0, 2), t = b.slice(2);
      if (k === '- ') { if (tb) flush(); (ul = ul || []).push('<li>' + inl(t) + '</li>'); return; }
      if (b[0] === '|') { if (ul) flush(); (tb = tb || []).push(b.replace(/^\|\s*|\s*\|\s*$/g, '').split(/\s*\|\s*/)); return; }
      flush();
      if (b === '---') { below = []; out = below; return; }
      if (k === '> ') out.push('<p class="lt-chain">' + inl(t) + '</p>');
      else if (b.slice(0, 3) === '## ') out.push('<h4 class="lt-h">' + b.slice(3) + '</h4>');
      else if (k === '! ') out.push('<p class="lt-trap">' + inl(t) + '</p>');
      else if (k === '= ') out.push('<div class="eqn">' + inl(t) + '</div>');
      else if (/^@F\d+$/.test(b)) { var i = +b.slice(2) - 1; if (!F[i]) throw new Error('no figure ' + b); used[i] = 1; out.push(F[i]); }
      else if (/^@X\d+$/.test(b)) { var j = +b.slice(2) - 1; if (!X[j]) throw new Error('no flow ' + b); out.push(X[j]); }
      else out.push('<p class="lt-p">' + inl(b) + '</p>');
    });
    flush();
    var rest = F.filter(function (f, i) { return !used[i]; });
    var text = '<div class="lt">' + main.join('') + '</div>';
    var top = rest.length ? '<div class="two lt-two">' + text + '<div class="lt-figs">' + rest.join('') + '</div></div>' : text;
    return below ? '<div class="lt">' + top + below.join('') + '</div>' : top;
  }
  C.short = function (id, blocks, opt) {
    var it = byId[id];
    if (!it || it.t !== 'c') throw new Error('short(): no concept ' + id);
    var F = [], X = [];
    /* figures in document order; a collapsed <details> that holds a figure (answers, extra slides) is kept whole */
    String(it.html).replace(/<details\b[\s\S]*?<\/details>|<figure\b[\s\S]*?<\/figure>/g, function (m) { if (/^<figure/.test(m) || /<figure\b/.test(m)) F.push(m); return m; });
    String(it.html).replace(/<div class="flowx"[^>]*><\/div>/g, function (m) { X.push(m); return m; });
    if (opt && opt.drop) F = F.filter(function (f, i) { return opt.drop.indexOf(i + 1) < 0; });
    it.html = render(blocks, F, X);
  };
})();
var S_ = CVS.short;

/* ---------- R · Regulation ---------- */
S_('R-C1', [
  '= MAP = CO × TPR = HR × SV × TPR',
  '- HR ← SA node: sympathetic ({{β1}}) speeds it · vagus (M2) slows it',
  '- SV ← preload ({{Frank–Starling}}), contractility, afterload',
  '> TPR set by {{arterioles}} (R ∝ 1/r⁴) → main target of BP drugs',
  '! Every stimulus moves one of 5 handles: HR, contractility, venous tone, arteriolar tone, blood volume ({{kidney}})'
]);
S_('R-C2', [
  '| Speed | Mechanism |',
  '| Seconds (nervous) | baroreflex · chemoreflex (MAP < 80) · CNS ischemic (< 60) |',
  '| Minutes–hours | Ang II · {{stress relaxation}} · capillary fluid shift |',
  '| Hours–days | {{pressure natriuresis}} · aldosterone · ADH, thirst |',
  '> Baroreflex resets in 1–2 days → can’t set long-term BP',
  '> Long-term BP → {{kidney}} ({{infinite gain}})'
]);
S_('R-C3', [
  '| Center | Where | Job |',
  '| Vasoconstrictor (C-1) | {{RVLM}} | fires nonstop → sympathetic tone |',
  '| Vasodilator (A-1) | caudal VLM | inhibits C-1 |',
  '| Sensory (A-2) | {{NTS}} | receives CN IX, X |',
  '| Cardioinhibitory | nucleus ambiguus, DMNX | vagus → HR ↓ |',
  '> Splanchnic preganglionic → adrenal medulla → {{epinephrine}} (~80%) into blood',
  '> Emotion → cortex → {{vasovagal syncope}}'
]);
S_('R-C4', [
  '> BP ↑ → wall stretch → carotid sinus ({{CN IX}}) + aortic arch (CN X) → {{NTS}}',
  '> Then: vagus ↑ → HR ↓ · RVLM inhibited → sympathetic ↓ → TPR ↓, venodilation → BP back down',
  '> BP ↓ → {{fewer}} impulses → sympathetic ↑, vagus ↓ → tachycardia, vasoconstriction',
  '- Spray-type endings sense pressure and its rate of change · range ~60–180 mmHg',
  '! Carotid sinus = {{baroreceptor}} · carotid body = chemoreceptor (exams swap them)'
]);
S_('R-C5', [
  '| Reflex | Works when MAP is |',
  '| Baroreceptor | 60–180 |',
  '| Chemoreceptor | below {{80}} |',
  '| CNS ischemic | below {{60}} |',
  '> MAP < 80 → carotid and aortic body flow ↓ → cells hypoxic → fire → BP ↑ + breathing ↑ ({{phrenic}})',
  '> MAP < 60 → vasomotor center ischemic, CO<sub>2</sub> ↑ → massive sympathetic → {{systemic hypertension}}',
  '> ICP ↑ → same response = Cushing: hypertension + {{bradycardia}} + irregular breathing'
]);
S_('R-C6', [
  '| Constrict | Dilate |',
  '| NE, Epi (α1), Ang II | {{NO}} (shear stress → cGMP) |',
  '| {{ADH}} (V1, most potent) | prostacyclin |',
  '| {{Endothelin-1}} (from endothelium) | {{histamine}} (tissue injury) + bradykinin |',
  '| thromboxane A<sub>2</sub>, serotonin | low-dose Epi (β2), ANP |',
  '> Working tissue → adenosine, CO<sub>2</sub>, H<sup>+</sup>, K<sup>+</sup>, lactate → dilation'
]);
S_('R-C7', [
  '> Work ↑ → {{adenosine}}, CO<sub>2</sub>, H<sup>+</sup>, K<sup>+</sup> ↑, O<sub>2</sub> ↓ → dilate → flow ↑ (active hyperemia)',
  '> Pressure ↑ → stretch → Ca<sup>2+</sup> in → {{constriction}} → flow back to normal (myogenic)',
  '> {{Autoregulation}} = constant flow despite changing pressure (best in the kidney)',
  '> Months of high demand → {{angiogenesis}} · chronic blockage → {{collateral circulation}}',
  '- Arterioles = resistance vessels → target of BP drugs · β1 block → coronary flow ↓'
]);
S_('R-C8', [
  '> ↓ Renal perfusion, ↓ NaCl at {{macula densa}}, ↑ sympathetic → {{renin}}',
  '> Angiotensinogen → Ang I → (lung enzyme) → Ang II → constriction + aldosterone + ADH + thirst',
  '- That enzyme also breaks down bradykinin → its inhibitor (enalapril) → aldosterone ↓ + {{dry cough}}',
  '> Pressure natriuresis: BP ↑ → Na<sup>+</sup>, water out → BP ↓ (infinite gain)',
  '> CKD → {{GFR}} ↓ → salt, water kept → volume hypertension',
  '> Heart failure → renal flow ↓ → RAAS on → Ang II, aldosterone → edema',
  '- ADH: V2 → water reabsorption · V1 → vasoconstriction'
]);
S_('R-C9', [
  '| | Sympathetic (β1) | Vagus (M2) |',
  '| SA node | I<sub>f</sub>, I<sub>Ca</sub> ↑ → {{steeper}} phase 4 → HR ↑ | K<sup>+</sup> out → hyperpolarized, flatter → HR ↓ |',
  '| AV node | faster | slower, can block |',
  '| Force | {{Ca<sup>2+</sup>}} ↑ → stronger, faster relaxation | small ↓ (atria) |',
  '- I<sub>f</sub> = funny current ({{Na<sup>+</sup>}} in) · cAMP opens it more',
  '> Sympathetic: EDV ≈ same, ESV {{falls}}, SV ↑, EF ↑',
  '> α1 agonist → afterload ↑ but contractility {{unchanged}}'
]);
S_('R-C10', [
  '> No nerves → resting HR {{higher}} than normal (intrinsic SA rate ~100) · no vagal tone',
  '> Exercise → HR rises {{slowly and less}} → driven by {{circulating catecholamines}}',
  '> SV ↑ via Frank–Starling + lower afterload',
  '- β-agonist {{works}} · atropine does nothing'
]);
S_('R-C11', [
  '> Volume ↓ → venous return ↓ → SV ↓ → BP ↓ → {{weak pulse}}, narrow pulse pressure',
  '> Seconds: baroreceptors fire {{less}} → sympathetic ↑ → HR ↑ (phase-4 slope ↑), {{SVR}} ↑, cold pale skin',
  '> Minutes–hours: Ang II · fluid shifts into vessels → {{Hct falls}}',
  '> Hours–days: aldosterone, ADH, {{thirst}} → salt and water kept · EPO → red cells (weeks)'
]);

/* ---------- F · Frog heart ---------- */
S_('F-C1', [
  '> Read every tracing: downstroke (A) = {{diastole}} · upstroke (B) = {{systole}}',
  '> Beat order: {{sinus venosus}} → atria → ventricle (≈ human SA node first)',
  '- Exp 1 observe · Exp 2 extrasystole · Exp 3 Stannius ligatures · Exp 4 all-or-none',
  '> No {{coronary circulation}} → ligatures cause no ischemia'
]);
S_('F-C2', [
  '- Pacemaker cells (SA, AV) → {{automaticity}}',
  '- Contractile cells + gap junctions → functional {{syncytium}}',
  '> SA → internodal → AV node ({{delay}}) → His → {{bundle branches}} → Purkinje → ventricles',
  '> Speed follows the phase-0 slope: fastest {{His–Purkinje}} · slowest AV node',
  '> SA node leads because it {{fires fastest}}, not because of where it sits',
  '- Backup rates: AV 40–60 · ventricle 20–40'
]);
S_('F-C3', [
  '> ARP: Na<sup>+</sup> channels {{inactivated}} → no stimulus can fire the cell',
  '> RRP: AP possible but needs {{more current}} · then a short supranormal period',
  '> ARP lasts about {{as long as}} the contraction → no {{tetanus}} → heart always relaxes and refills',
  '- ARP covers depolarization and most of repolarization, not only phase 0'
]);
S_('F-C4', [
  '| Shock during | Extrasystole | Pause |',
  '| Systole (1, 2, 3) | {{none}} | – |',
  '| Diastole (4, 5, 6) | yes | yes |',
  '> Systole → stimulus falls in the {{ARP}} → nothing',
  '> Next sinus impulse hits the extra beat’s refractory period → lost → {{compensatory pause}}',
  '> Later in diastole → more filling ({{preload}}) → bigger extrasystole · beat after the pause is strongest',
  '- Happens in healthy people too (caffeine, stress, no sleep)'
]);
S_('F-C5', [
  '| | Sinus venosus | Atria | Ventricle |',
  '| Ligature I, just after | 60 | 0 | 0 |',
  '| Ligature I, later | 60 | 32 | 32 |',
  '| Ligature II | 60 | 32 | 0 |',
  '> Ligature = {{heart block}} → atria stop, then restart slower → latent pacemaker shows {{automaticity}} once overdrive suppression ends',
  '> SA node fails in a patient → {{AV node}} takes over (40–60, narrow QRS) · lower block → Purkinje (20–40)'
]);
S_('F-C6', [
  '| Stimulus | Contraction |',
  '| Subthreshold | none |',
  '| {{Threshold}} | full |',
  '| Bigger | {{same size}} |',
  '> Cardiac AP is all-or-none + whole syncytium fires → bigger shock ≠ bigger beat',
  '> Force changes only via {{preload}} or contractility (catecholamines, Ca<sup>2+</sup>, digitalis)'
]);

/* ---------- T · Turtle vagus ---------- */
S_('T-C1', [
  '> Vagus: medulla → long preganglionic → {{nicotinic}} ganglion on the heart (turtle: crescentic line) → short postganglionic → M2',
  '- Right vagus → mostly {{SA node}} · left → mostly AV node',
  '> Sympathetic: T1–T4 → stellate ganglion → long postganglionic → NE on {{β1}} (nodes + ventricles)',
  '> Vagus is active {{at rest}} (vagal tone): intrinsic SA rate ~100 → resting HR ~70',
  '- Vagal fibres mainly to atria and nodes, few to ventricles',
  '> ACh → K<sup>+</sup> out → {{hyperpolarized}} + flatter phase 4 → slower'
]);
S_('T-C2', [
  '| Stimulus | Right vagus | Left vagus |',
  '| Weak | rate ↓, A:V 1:1 | rate ↓, A:V > 1:1 (dropped beats) |',
  '| Moderate | heart {{stops}} | marked ↓, A:V > 1:1 |',
  '| Strong | arrest | arrest |',
  '> Right vagus → {{SA node}} → rate ↓ → bradycardia, arrest',
  '> Left vagus → {{AV node}} → conduction ↓ → atria faster than ventricle = {{AV block}}',
  '- Cutting the nerve changes nothing · heart recovers after stimulation ends'
]);
S_('T-C3', [
  '> Vagus (preganglionic) → ganglion at the {{crescentic line}} ({{nicotinic}}) → postganglionic → M2 → HR ↓',
  '| Condition | HR |',
  '| Baseline | 46 |',
  '| Vagus or ganglion site stimulated | 0 |',
  '| Low-dose nicotine | 40 |',
  '| High-dose nicotine | 50 |',
  '| Then vagus | 50 |',
  '| Then ganglion site | 0 |',
  '> Low dose → {{stimulates}} the ganglion → more ACh → HR ↓',
  '> High dose → {{depolarization block}} → vagal tone lost (HR ↑ a little) · vagal stimulation can’t pass',
  '> Ganglion site still stops the heart → fires postganglionic cells below the block',
  '- Atropine blocks M2 → neither works'
]);
S_('T-C4', [
  '| Clamp | Atria | Ventricle |',
  '| Light | 60 | ↓ (A:V > 1:1) |',
  '| Moderate | 60 | ↓↓ |',
  '| Tight | 60 | 0 |',
  '- 1st degree: PR {{> 0.20 s}}, every beat conducts',
  '- 2nd: Mobitz I → PR {{lengthens}}, then a beat drops · Mobitz II → sudden drops',
  '> 3rd degree: none conduct → {{AV dissociation}} → ventricles at escape rate (30–40) → syncope',
  '- Also in healthy people: high {{vagal tone}} (athletes, sleep), β-blockers, digoxin'
]);

/* ---------- B · Blood pressure ---------- */
S_('B-C1', [
  '= MAP ≈ DBP + ⅓ (SBP − DBP)',
  '- SBP ← stroke volume, arterial stiffness · DBP ← {{peripheral resistance}}',
  '- Pulse pressure wide: AR, stiff arteries, exercise · narrow: AS, tamponade, {{hypovolemia}}',
  '> ⅓ because diastole lasts about {{twice}} as long as systole',
  '| Method | Gives |',
  '| Direct (arterial line) | beat to beat, invasive |',
  '| {{Sphygmomanometer}} + stethoscope | SBP, DBP · noninvasive gold standard |',
  '| Palpatory | SBP only |',
  '| {{Oscillometric}} | max oscillation = MAP · ICU, home |'
]);
S_('B-C2', [
  '- Before: no smoking, caffeine, food, exercise 30 min · empty bladder · rest 5 min · {{no talking}}',
  '- Arm bare, supported, cuff at {{heart level}}, lower edge ~2.5 cm above the elbow crease',
  '- Bladder width ≈ {{40%}}, length 80–100% of arm circumference',
  '> Palpate first: inflate until the radial pulse goes + 20–30 → deflate → pulse returns = {{palpatory SBP}}',
  '> Then listen: inflate 20–30 above that → deflate slowly → first tap = SBP, silence = DBP',
  '! Palpating first avoids the {{auscultatory gap}}'
]);
S_('B-C3', [
  '| Phase | Sound | Meaning |',
  '| I | first clear tapping | {{SBP}} |',
  '| II | softer swishing | |',
  '| III | crisper tapping | |',
  '| IV | sudden muffling | DBP in children, pregnancy, AR |',
  '| V | {{silence}} | DBP in adults |',
  '> Sounds = {{turbulent}} flow through a partly squeezed artery · cuff above systolic → shut · below diastolic → laminar → silent'
]);
S_('B-C4', [
  '| Falsely HIGH | Falsely LOW |',
  '| cuff too {{small}} or loose | cuff too {{large}} or tight (course key) |',
  '| arm below heart level | arm above heart level |',
  '| talking, full bladder, caffeine, anxiety | deflating {{too fast}} |',
  '| back unsupported, legs crossed | auscultatory gap missed |',
  '> Narrow bladder → needs extra pressure to close the artery → reads high'
]);
S_('B-C5', [
  '> Lying down: leg SBP {{higher}} than arm → pressure wave reflects and grows downstream',
  '- Highest systolic: {{femoral artery}} (vs aorta, arteriole, veins)',
  '> One arm high → always measure the {{other arm}} (> 10–15 difference → subclavian stenosis, dissection)',
  '> Coarctation → arm BP high, leg BP {{low}}, femoral pulse weak and late',
  '- ABI = ankle ÷ arm SBP · below 0.9 → peripheral arterial disease'
]);
S_('B-C6', [
  '> Stand → 500–800 mL pools in leg veins → venous return ↓ → SV, CO ↓ → BP ↓ at the carotid sinus',
  '> Baroreceptors fire {{less}} → sympathetic ↑ → HR ↑, vasoconstriction, venoconstriction → BP back in seconds',
  '- CO stays {{lower}} than lying despite the reflex',
  '> Lie down → venous return ↑ → baroreceptors fire {{more}} → HR ↓',
  '> Right vagus cut, then stand → HR still {{increases}} (sympathetic)',
  '- Orthostatic hypotension: SBP ↓ ≥ 20 or DBP ↓ ≥ 10 within 3 min'
]);
S_('B-C7', [
  '| | Right after | 6 min |',
  '| HR, SBP | ↑↑ | near baseline |',
  '| DBP | ≈ or slightly ↓ | ≈ |',
  '| Pulse pressure | {{wide}} | baseline |',
  '> Sympathetic → HR, SV, CO ↑ → SBP ↑ · muscle dilation → {{TPR}} ↓ → DBP ≈',
  '> Stop suddenly and stand still → no {{muscle pump}} → venous return ↓ → faint',
  '> Heavy lifting + breath-hold → SBP and DBP ↑↑ → avoid in uncontrolled {{hypertension}}'
]);

/* ---------- M · Microcirculation ---------- */
S_('M-C1', [
  '| Experiment | What you see | Why |',
  '| Arterial occlusion (200 mmHg) | pale, cold, pulseless → then red, warm | ischemia → {{reactive hyperemia}} |',
  '| Venous occlusion (30–90) | engorged veins, dusky blue | outflow blocked, {{inflow continues}} |',
  '| Skin stroking | white line · red line → flare → wheal | emptying · {{triple response}} |',
  '| Warm or cold water | warm: red, veins full · cold: red, veins flat | temperature control |',
  '| Arm up or down | pale, empty · red-purple, full | {{hydrostatic pressure}} |',
  '- Skin AV anastomoses (fingers, ears, nose): open when warm, shut when cold'
]);
S_('M-C2', [
  '> Cuff 200 > {{SBP}} → nothing in, nothing out → pale, cold, no pulse, pain',
  '> No inflow → capillary pressure low → {{no edema}}',
  '> Release → piled-up metabolites (adenosine, K<sup>+</sup>, CO<sub>2</sub>) → dilation → {{bright red, warm}} flow',
  '> O<sub>2</sub>-rich blood floods in → {{deoxyhemoglobin}} falls fast',
  '- Lasts about as long as the occlusion (repays the O<sub>2</sub> debt)'
]);
S_('M-C3', [
  '| | Cuff 30–40 | Cuff 80–90 |',
  '| Flow | arteries in, veins {{blocked}} | in only at systolic peaks |',
  '| Skin | reddish-purple, warm | {{dusky blue}}, petechiae |',
  '> Venous pressure ↑ → capillary pressure ↑ → filtration → swelling',
  '> Veins distend {{passively}} · arterioles do NOT dilate (local veno-arteriolar constriction)',
  '- Dengue {{tourniquet test}}: cuff between SBP and DBP for 5 min → count petechiae'
]);
S_('M-C4', [
  '| Response | Stimulus | Mechanism |',
  '| White reaction | light stroke | {{mechanical expulsion}} of blood |',
  '| Red line | firm stroke, on the line | local histamine → small vessels {{dilate}} |',
  '| Flare | spreads 1–2 cm | {{axon reflex}}: antidromic C-fibre → substance P, CGRP |',
  '| Wheal | 1–3 min | {{permeability}} ↑ → local edema |',
  '- Flare survives spinal cord section but not local anesthesia',
  '> Bee sting, insect bite → histamine, bradykinin → leaky capillaries → swelling, redness, pain'
]);
S_('M-C5', [
  '| Water | Skin | Superficial veins |',
  '| 40–45 °C | flushed, warm | {{engorged}} |',
  '| 20 °C | slightly pale | less visible |',
  '| 5–10 °C | {{red}}, painful | {{flattened}} |',
  '> Warm → sympathetic ↓ + local heat → arterioles, veins, AV shunts dilate → heat out',
  '> Cold → veins, arterioles constrict, yet cold Hb holds O<sub>2</sub> ({{left shift}}) + hunting reaction → skin keeps its colour'
]);
S_('M-C6', [
  '> Arm raised → {{pale}}, veins empty and collapse → hand venous pressure ≈ 0',
  '> Arm hanging → red-purple, veins full → hydrostatic pressure adds → more filtration',
  '> Standing: foot veins high · neck veins collapse · skull sinuses can’t collapse → pressure {{negative}}',
  '> So sitting-position neurosurgery → risk of {{air embolism}}',
  '> Inspiration → intrathoracic pressure ↓ → venous return {{rises}}'
]);

/* ---------- P · Physical examination ---------- */
S_('P-C1', [
  '- Cyanosis, edema → may not be cardiac ({{lung, kidney, liver}} disease)',
  '> Apex (PMI) = left 5th ICS, midclavicular · displaced → {{LV dilation}} · sustained heave → LVH',
  '- Parasternal heave → RV hypertrophy · palpation finds {{ventricular}}, not atrial, enlargement',
  '- Percussion: little value',
  '- Diaphragm → {{high}}-pitched (S1, S2, AR, MR) · bell → low (S3, S4, MS)',
  '> Left HF → lungs: dyspnea, orthopnea, crackles · right HF → veins: JVP ↑, liver ↑, ankle edema'
]);
S_('P-C2', [
  '> Atrial systole → S1 → {{isovolumetric contraction}} → ejection → S2 → {{isovolumetric relaxation}} → rapid filling',
  '- S1 = {{mitral + tricuspid}} close · just before the carotid upstroke',
  '- S2 = aortic + pulmonic close · splits on inspiration · wide fixed split = {{ASD}}',
  '- S3 = rapid filling (normal when young, heart failure in adults) · S4 = atrium into a {{stiff ventricle}} (absent in AF)'
]);
S_('P-C3', [
  '| Area | Site | Murmurs |',
  '| Aortic | {{right 2nd ICS}} | AS (to carotids), AR |',
  '| Pulmonic | {{left 2nd ICS}} | PS, PR |',
  '| Erb’s point | left 3rd ICS | AR often loudest |',
  '| Tricuspid | left lower sternal border | TR (↑ on inspiration), TS |',
  '| Mitral | apex, left 5th ICS MCL | MR (to axilla), MS ({{rumble}}, bell) |',
  '> With the carotid pulse → {{systolic}} · after S2 → diastolic',
  '- Ejection: AS, PS · pansystolic: MR, TR · early diastolic: AR, PR · mid-diastolic: MS, TS',
  '! The exam uses the classic areas strictly'
]);
S_('P-C4', [
  '| Pulse | Cause |',
  '| Collapsing (water-hammer) | {{aortic regurgitation}} |',
  '| Small, late (parvus et tardus) | {{aortic stenosis}} |',
  '| Paradoxus: SBP falls > 10 on inspiration | {{cardiac tamponade}} |',
  '| Deficit: apex rate > radial | atrial fibrillation |',
  '| Alternans | severe LV failure |',
  '> Tamponade: Beck’s triad → hypotension, JVP ↑, muffled heart sounds'
]);
S_('P-C5', [
  '- Patient at 45°, look at the {{right internal jugular}} vein',
  '> Height above the sternal angle + 5 cm ≈ RA pressure (normal ≤ 3–4 cm)',
  '- Venous: two peaks, not palpable, rises with abdominal press (hepatojugular reflux)',
  '| Wave | Event |',
  '| a | {{RA contraction}} · absent in {{AF}} |',
  '| c | tricuspid bulges into RA |',
  '| x | atrial relaxation |',
  '| v | RA filling · giant in {{TR}} |',
  '| y | tricuspid opens, RA empties |'
]);
S_('P-C6', [
  '> Inspiration → venous return ↑ → RV ejects longer → P2 {{later}} → S2 splits',
  '- {{Deep inspiration}} = strongest quick boost to venous return',
  '> ASD: LA → RA shunt always → RV overloaded → {{wide}} split',
  '> Inspiration → RA pressure ↑ → LA → RA {{shunt volume}} ↓ → RV volume same → split {{fixed}}'
]);

/* ---------- D · Dog lab I ---------- */
S_('D-C1', [
  '- Recorded in the anesthetized dog: arterial BP, HR, breathing, CVP',
  '> Ask: what changed first → which receptor → which arm answers → any arm cut or blocked?',
  '> Peripheral (heart-side) end stimulated → tests {{efferent}} fibres',
  '> Central (brain-side) end → tests {{afferent}} fibres + their reflex',
  '> Low current → {{large}} fibres (baroreceptor) · high current → + small fibres (chemo, pain)'
]);
S_('D-C2', [
  '| Maneuver | BP, HR, RR | Why |',
  '| Compress common carotid | ↑ ↑ ↑ | sinus pressure falls → baroreceptors {{unloaded}} |',
  '| Pull or press the sinus | ↓ ↓ ↓ | baroreceptors fire {{more}} |',
  '| Same after double vagotomy | ↓, HR same, ↓ | vagus (HR effector) {{cut}} |',
  '| Vagus, peripheral end | ↓, HR ↓↓ or arrest | ACh on SA/AV node |',
  '| Vagus or aortic nerve, central end | low current ↓ · high current ↑ | baro vs chemo fibres |',
  '| Sciatic, central end | low ↓ (depressor) · high ↑ | high = pain, {{pressor}} |',
  '| CO<sub>2</sub> breathed | ↑ ↑ ↑ | chemoreceptors · locally CO<sub>2</sub> {{dilates}} |',
  '- Baroreceptors sit between tunica media and adventitia'
]);
S_('D-C3', [
  '> Pull or stimulate the carotid sinus → {{more}} baroreceptor firing → BP, HR, RR all ↓ (stronger pull → bigger fall)',
  '> Compress the common carotid → sinus lies beyond the clamp → its pressure {{falls}} → baroreceptors unloaded → BP, HR, RR ↑',
  '> Carotid massage in patients → {{vagal tone}} ↑ → HR ↓, AV conduction ↓ → stops some SVTs',
  '- Breathing slows with strong baroreceptor stimulation (anesthetized dog)'
]);
S_('D-C4', [
  '| Tilt | (A) first | (B) after the reflex |',
  '| Head down | BP ↑ | BP, HR {{pulled down}} |',
  '| Head up | BP ↓ | HR, vessel tone {{rise}} |',
  '> Head down → venous return ↑ → BP ↑ → baroreceptors fire more → reflex brings it back',
  '> Head up → blood pools low → venous return ↓ → BP ↓ → baroreceptors unloaded → HR ↑',
  '- Same reflex as standing up: the {{carotid sinus}} senses first · RR can’t be read during the tilt'
]);
S_('D-C5', [
  '> Both vagi cut → sinus pulled → BP ↓, RR ↓, HR {{unchanged}}',
  '> Vagi carry the {{efferent}} fibres that slow the heart',
  '> BP still falls → {{sympathetic withdrawal}} · breathing still slows → phrenic inhibition',
  '> Vagotomy alone → slow, deep breaths → {{lung stretch afferents}} gone'
]);
S_('D-C6', [
  '| Central end of sciatic | BP | HR | RR | Reflex |',
  '| Low current | ↓ | ↓ | ≈ | {{depressor}}: vagus ↑ (M2 at SA node, slower AV) |',
  '| High current | ↑ | ↑ | ↑↑ | {{pressor}} (pain): sympathetic + phrenic ACh |',
  '> Low current → large low-threshold fibres · high → + small {{pain fibres}}',
  '! Exam key: low current → BP, HR, RR all ↓ (the trace shows RR barely changes)'
]);
S_('D-C7', [
  '> Splanchnic stimulation → BP ↑ in two steps: gut vessels {{constrict}}, then {{adrenal epinephrine}}',
  '> Baroreflex answers → HR ↓, RR ↓',
  '> Stop → BP dips {{below baseline}} → leftover low-dose epinephrine on β2 → dilation',
  '> After double vagotomy → no reflex bradycardia → HR ↑ · slower breathing is the only reflex sign',
  '| Drug | Receptors | BP | HR |',
  '| Epi low dose | β2 > α, β1 | ↓ (DBP ↓, CVP ↓) | ↑ |',
  '| Epi high dose | α1 + β1 | ↑↑ | ↑ then reflex ↓ · RR ↓ (adrenaline apnea) |',
  '| Norepinephrine | α1, β1 | ↑↑ | reflex ↓ |',
  '| Phenylephrine | α1 | ↑ | reflex ↓ |',
  '| Isoproterenol | β1, β2 | ↓ | ↑↑ |',
  '| Nitroglycerin | NO donor, {{veins}} | ↓ (CVP ↓) | reflex ↑ |'
]);

/* ---------- H · Dog lab II ---------- */
S_('H-C1', [
  '| Disturbance | CVP | BP | Key idea |',
  '| IV saline | ↑ | ↑ | venous return ↑ → SV, CO ↑ ({{Frank–Starling}}) |',
  '| Hemorrhage | ↓ | ↓ | HR, RR ↑ · fluid shifts in → {{Hct falls}} |',
  '| Clamp SVC or IVC | ↓ | ↓ | reflex HR, contractility, TPR ↑ |',
  '| Nitroglycerin | ↓ | ↓ | venodilation → {{preload}} ↓ |',
  '| Pericardial fluid | {{rises}} | ↓ | heart can’t fill → venous return ↓ |',
  '| Aortic valve destroyed (AR) | – | SBP ↑, DBP ↓ | wide pulse pressure |',
  '| Clamp aorta / stenosis | may ↑ | ↑ before, ↓ after | LV afterload ↑ |',
  '! High CVP ≠ full circulation (tamponade)'
]);
S_('H-C2', [
  '> Clamp a vena cava → {{venous return}} ↓ → CVP, preload, SV, CO ↓ → BP and pulse pressure ↓',
  '> Baroreflex → HR, {{contractility}}, TPR ↑',
  '> IVC clamp hits harder → IVC carries {{most}} of the blood coming back',
  '- Veins upstream of the clamp (head, arms for SVC) → pressure ↑',
  '> PV loop: end-diastolic point moves {{left}}',
  '- Nitroglycerin, venodilation → same direction: preload ↓, CVP ↓'
]);
S_('H-C3', [
  '> Fluid in the sac squeezes the heart in {{diastole}} → can’t fill → venous return ↓ but CVP {{rises}}',
  '> Preload, SV, CO ↓ → BP ↓, pulse pressure {{narrows}} · afterload (aortic pressure) ↓',
  '- Reflex tachycardia expected, yet HR fell slightly in this trace (the lab sheet asks why)',
  '> Inspiration → right heart fills → septum shifts left → SBP ↓ > 10 = {{pulsus paradoxus}}',
  '- Treat: remove the fluid (pericardiocentesis)'
]);
S_('H-C4', [
  '> Valve destroyed → blood leaks back in diastole → LV fills from two sides',
  '> {{EDV}} ↑ (I moves right) · total SV ↑ · SBP ↑ · DBP {{falls}} → pulse pressure {{widens}} → collapsing pulse',
  '- PV loop: B end-diastole → C aortic valve opens → D peak → E closes → A mitral opens',
  '> Part of each stroke runs back → {{effective}} forward SV lower than the pulse pressure suggests',
  '- Aortic stenosis can back up and raise CVP'
]);
S_('H-C5', [
  '| Clamp | Carotid BP | Models |',
  '| Ascending aorta (carotid after the block) | ↓↓ | severe {{aortic stenosis}} → pressure backs up, CVP ↑ |',
  '| Aortic arch (carotid before the block) | ↑ | {{coarctation}} → pressure before ↑, after ↓ |',
  '> Narrowing past the left subclavian → arms and carotids {{high}} · legs low, femoral pulse late · LV afterload ↑',
  '- Ascending clamp: HR fell even though carotid BP fell (the lab sheet asks why)'
]);
S_('H-C6', [
  '| Stimulus | BP, HR | Why |',
  '| Aortic nerve, low current | ↓ | {{baroreceptor}} fibres → depressor |',
  '| Aortic nerve, high current | ↑ | {{chemoreceptor}} fibres join → pressor |',
  '| Right vagus, peripheral end | → 0 | ACh on the {{SA node}} → arrest |',
  '> Aortic nerve can push BP and RR {{either way}} depending on the current',
  '- Right vagus → rate · left vagus → AV conduction'
]);
S_('H-C7', [
  '## Atrial fibrillation',
  '> Starts in the {{atria}} (around the pulmonary veins, left atrium) → AV node passes irregular impulses',
  '- ECG: no P waves, irregularly irregular, {{narrow}} QRS',
  '- Exam: irregular pulse, {{pulse deficit}}, no a wave, no S4',
  '- Dog: HR ↓ and irregular; back to normal when the stimulus stops',
  '## Ventricular fibrillation',
  '> Ventricles quiver → no stroke volume → {{no palpable pulse}}, BP → 0 → needs {{defibrillation}}',
  '- Unlike AF, it does not stop when the stimulus stops'
]);
