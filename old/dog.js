/* SECTIONS D (Dog lab I: reflexes and drugs) and H (Dog lab II: hemodynamic disturbances) */
(function () {

/* PV loop for aortic regurgitation question (AC80) */
var SVG_PV = '<svg viewBox="0 0 520 330" role="img" aria-label="Left ventricular pressure-volume loop with labelled points A to I">' +
  '<line x1="60" y1="290" x2="500" y2="290" class="ax"/><line x1="60" y1="290" x2="60" y2="20" class="ax"/>' +
  '<path d="M148,300 L212,24" class="l-mut"/>' +
  '<path d="M150,284 C230,286 300,272 330,258 C360,244 400,224 450,196" class="l-mut"/>' +
  '<path d="M200,196 C205,232 220,256 250,262 C290,266 320,262 330,258 L330,108 C322,70 310,48 288,46 C258,44 226,58 200,74 Z" class="l-art"/>' +
  [[200, 196, 'A', -18, 4], [330, 258, 'B', 8, -6], [330, 108, 'C', 8, 4], [288, 46, 'D', 4, -8], [200, 74, 'E', -18, 2]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" class="dot-ink"/><text x="' + (p[0] + p[3]) + '" y="' + (p[1] + p[4]) + '" class="tb">' + p[2] + '</text>'; }).join('') +
  '<line x1="60" y1="74" x2="200" y2="74" class="grid-l"/><text x="50" y="78" text-anchor="end" class="tb">G</text>' +
  '<line x1="60" y1="196" x2="200" y2="196" class="grid-l"/><text x="50" y="200" text-anchor="end" class="tb">F</text>' +
  '<line x1="200" y1="196" x2="200" y2="290" class="grid-l"/><text x="200" y="308" text-anchor="middle" class="tb">H</text>' +
  '<line x1="330" y1="258" x2="330" y2="290" class="grid-l"/><text x="330" y="308" text-anchor="middle" class="tb">I</text>' +
  '<text x="280" y="326" text-anchor="middle" class="ts">LV volume (mL)</text>' +
  '<text x="18" y="160" text-anchor="middle" class="ts" transform="rotate(-90 18 160)">LV pressure (mmHg)</text>' +
  '<text x="218" y="30" class="tm">ESPVR</text><text x="456" y="192" class="tm">EDPVR</text>' +
  '</svg>';

CVS.add({
  id: 'D', short: 'Dog lab I', title: 'Lab: Disturbance of CVS I (dog): reflexes and drugs', kind: 'Lab',
  blurb: 'Baroreceptor and chemoreceptor reflexes, nerve stimulation (vagus, aortic, sciatic, splanchnic), vagotomy, posture, CO2 and catecholamines.',
  items: [

{ t: 'c', id: 'D-C1', title: 'How to reason through any dog-lab tracing', html:
'<div class="cols2"><div class="mini"><h4>What is recorded</h4><p>In the anesthetized dog: arterial BP (cannula + transducer), heart rate, respiration and central venous pressure, sometimes ECG. Each maneuver changes these traces in a typical way.</p></div>' +
'<div class="mini"><h4>Four questions to ask</h4><ol class="steps tight"><li>What changed first: pressure, volume, gas, or a nerve?</li><li>Which receptor senses it (carotid sinus, aortic arch, carotid/aortic bodies, atria)?</li><li>Which arm carries the answer: vagus to the heart, sympathetic to heart and vessels, adrenal catecholamines, phrenic to the diaphragm?</li><li>Has any arm been cut or blocked (vagotomy, atropine, denervated heart)? Then that part of the response disappears.</li></ol></div></div>' +
'<p class="note">Nerve stimulation: stimulating the <b>peripheral</b> (heart-side) cut end tests the efferent fibers; stimulating the <b>central</b> (brain-side) cut end tests the afferent fibers and the reflex they start. <b>Low current</b> excites the large, low-threshold fibers (baroreceptor afferents); <b>high current</b> also recruits small, high-threshold fibers (chemoreceptor and pain afferents).</p>' },

{ t: 'c', id: 'D-C2', title: 'Dog I: expected responses', src: 'Lab quiz key + physiology', html:
'<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Maneuver</th><th>BP</th><th>HR</th><th>RR</th><th>Why</th></tr></thead><tbody>' +
'<tr><td>Clamp both common carotids</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>&#8212;/&#8593;</td><td>Carotid-sinus pressure falls &#8594; baroreceptors unloaded</td></tr>' +
'<tr><td>Pull / press the carotid sinus (carotid massage)</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>Baroreceptors fire more &#8594; &#8593;vagal, &#8595;sympathetic, respiratory inhibition</td></tr>' +
'<tr><td>Same, after double vagotomy</td><td class="dn">&#8595;</td><td>no slowing</td><td class="dn">&#8595;</td><td>The vagus (HR effector) is cut; sympathetic withdrawal and phrenic inhibition remain</td></tr>' +
'<tr><td>Bilateral vagotomy itself</td><td>&#8212;/&#8593;</td><td class="up">&#8593;</td><td>slower, deeper</td><td>Vagal tone lost; lung stretch afferents lost</td></tr>' +
'<tr><td>Vagus, <b>peripheral</b> end</td><td class="dn">&#8595;</td><td class="dn">&#8595;&#8595; / arrest</td><td>&#8212;</td><td>ACh on SA/AV node (vagal escape if prolonged)</td></tr>' +
'<tr><td>Vagus, central end, <b>low</b> current</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>Aortic baroreceptor afferents</td></tr>' +
'<tr><td>Vagus, central end, <b>high</b> current</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>Chemoreceptor afferents (aortic bodies) recruited</td></tr>' +
'<tr><td>Aortic (depressor) nerve: low / high current</td><td>&#8595; / &#8593;</td><td>&#8595; / &#8212;&#8593;</td><td>&#8595; / &#8593;</td><td>Large baroreceptor fibers / small chemoreceptor fibers</td></tr>' +
'<tr><td>Sciatic nerve, central end, <b>low</b> current</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>Depressor reflex: &#8593;vagal (muscarinic at SA node, slower AV conduction), &#8595;sympathetic</td></tr>' +
'<tr><td>Sciatic nerve, central end, <b>high</b> current</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>Pressor (pain) reflex: sympathetic + phrenic drive</td></tr>' +
'<tr><td>CO&#8322; inhalation</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>Central and peripheral chemoreceptors; local CO&#8322; dilates vessels</td></tr>' +
'<tr><td>Occlude the trachea (asphyxia)</td><td class="up">&#8593;</td><td>&#8593; then &#8595;</td><td>gasping</td><td>Hypoxia + hypercapnia on chemoreceptors</td></tr>' +
'<tr><td>Tilt upright &#8594; supine</td><td>&#8593; then &#8595;</td><td class="dn">&#8595;</td><td>&#8212;</td><td>Venous return rises, then the baroreflex pulls BP back</td></tr>' +
'</tbody></table></div>' },

{ t: 'tf', id: 'D1', src: 'Lab quiz',
  q: 'Baroreceptors can be found at the junction between the tunica media and tunica adventitia.', a: true,
  ex: 'They are spray-type nerve endings in the collagen- and elastin-rich tissue between media and adventitia, where wall stretch deforms them.' },
{ t: 'q', id: 'D2', src: 'AC78', core: true,
  q: 'A woman comes to the ER with a rapid heart rate. The doctor presses below the angle of the mandible. What will most likely happen?',
  o: ['Decreased baroreceptor firing, increased HR', 'Decreased baroreceptor firing, decreased HR', 'Increased baroreceptor firing, decreased HR', 'Increased chemoreceptor firing, increased HR', 'Decreased chemoreceptor firing, decreased HR'], a: 2,
  ex: 'Carotid sinus massage stretches the sinus like a pressure rise: more baroreceptor firing &#8594; more vagal output &#8594; slower SA rate and AV conduction (used to stop supraventricular tachycardia).' },
{ t: 'q', id: 'D3', src: 'AC77',
  q: 'Which of the following is the result of performing carotid massage?',
  o: ['Sends a signal to the medulla oblongata', 'Decreased vagal tone', 'Inhibition of the parasympathetic nervous system', 'Increased heart rate', 'Increased vagal tone'], a: 4,
  ex: 'The end result is more vagal tone (slower heart, slower AV conduction). Option A is a step on the way, not the result.' },
{ t: 'q', id: 'D4', src: 'AC77', core: true,
  q: 'Which of the following is <b>NOT</b> a direct response or consequence of carotid massage?',
  o: ['Increased afferent impulses in the glossopharyngeal nerve', 'Stimulation of baroreceptors in the carotid sinus', 'Increased parasympathetic outflow to the SA and AV nodes', 'Decreased heart rate and AV conduction velocity', 'Increased peripheral vascular resistance due to sympathetic withdrawal'], a: 4,
  ex: 'Sympathetic withdrawal relaxes arterioles, so peripheral resistance <b>falls</b>. Everything else is the normal baroreflex chain.' },
{ t: 'tf', id: 'D5', src: 'Lab quiz',
  q: 'Carotid sinus massage increases parasympathetic outflow to the heart, which can slow the heart rate and conduction velocity.', a: true,
  ex: 'Baroreceptor stimulation &#8594; NTS &#8594; vagal nuclei &#8594; slower SA node and AV node.' },
{ t: 'q', id: 'D6', src: 'AC79', core: true,
  q: 'A tracing shows BP <b>decreased</b> and respiratory rate <b>decreased</b>. Which maneuver caused it?',
  o: ['Stimulating the splanchnic nerve', 'Pulling on the carotid sinus', 'Changing position from supine to upright', 'Clamping the ascending aorta', 'Occluding the trachea'], a: 1,
  ex: 'Stretching the carotid sinus mimics high pressure: BP and HR fall and breathing is inhibited. Splanchnic stimulation raises BP; standing lowers BP but does not slow breathing; asphyxia raises BP and breathing effort.' },
{ t: 'tf', id: 'D7', src: 'Lab quiz', core: true,
  q: 'When changing from an upright to a supine position, blood pressure increases and then decreases because of an increase in the stimulation of the baroreceptors.', a: true,
  ex: 'Lying down returns pooled blood: BP rises first, then the stronger baroreceptor firing brings it back down.' },
{ t: 'tf', id: 'D8', src: 'Lab quiz', core: true,
  q: 'Carotid sinus stimulation after double vagotomy does not slow the heart rate but decreases blood pressure.', a: true,
  ex: 'The cardioinhibitory center acts through the vagi, which are cut, so HR cannot slow. Sympathetic withdrawal still lowers BP, and breathing still slows.' },
{ t: 'tf', id: 'D9', src: 'Lab quiz', core: true,
  q: 'High-current electrical stimulation at the central side of the vagus nerve decreases blood pressure because the afferent fibers from the baroreceptors are mostly stimulated.', a: false,
  ex: 'High current recruits the small chemoreceptor fibers (aortic bodies), so the response resembles chemoreceptor stimulation: BP, HR and RR <b>rise</b>. Low current gives the baroreceptor (depressor) response.' },
{ t: 'tf', id: 'D10', src: 'Lab quiz',
  q: 'CO2 generally causes vasoconstriction.', a: false,
  ex: 'Locally CO2 dilates peripheral vessels (especially in the brain); only pulmonary vessels constrict. Centrally it stimulates chemoreceptors, which raises BP, HR and RR.' },
{ t: 'q', id: 'D11', src: 'AC79', core: true,
  q: 'In an anesthetized dog, the sciatic nerve is cut and its <b>central</b> end is stimulated with <b>low</b> current. Increased activation occurs at which receptor?',
  o: ['Muscarinic receptor at the SA node', 'Nicotinic receptor at the SA node', '&#946;1 receptor at the AV node', '&#946;1 receptor at ventricular cells', 'Nicotinic receptor at the AV node'], a: 0,
  ex: 'Low-current somatic afferent stimulation gives a depressor reflex: vagal output rises (ACh on M2 at the SA node) and sympathetic output falls. Nodal cells carry muscarinic, not nicotinic, receptors.' },
{ t: 'q', id: 'D12', src: 'AC81', core: true,
  q: 'Low-current stimulation of the central cut end of the sciatic nerve changes blood pressure, heart rate and respiratory rate in what way, respectively?',
  o: ['Increased, increased, decreased', 'Increased, decreased, increased', 'Decreased, decreased, decreased', 'Decreased, increased, unchanged', 'Decreased, increased, decreased'], a: 2,
  ex: 'Low current = depressor response: BP, HR and RR all fall. High current = pressor (pain) response: all three rise.' },
{ t: 'q', id: 'D13', src: 'AC80',
  q: 'Low-current stimulation of the central cut end of the sciatic nerve elicits what response?',
  o: ['Decreased stimulation of chemoreceptors', 'Decreased stimulation of baroreceptors', 'Delay of AV conduction time', 'Increased conduction velocity'], a: 2,
  ex: 'The depressor reflex raises vagal output, which slows the AV node (longer AV conduction time).' },
{ t: 'q', id: 'D14', src: 'AC78', core: true,
  q: 'High-current stimulation at the central cut end of the sciatic nerve raises heart rate, blood pressure and respiratory rate. What is the most likely cause of these responses?',
  o: ['Increased epinephrine binding at &#946;2 receptors', 'Increased afferent firing at carotid baroreceptors', 'Increased norepinephrine secretion at sympathetic ganglia', 'Increased firing of central chemoreceptors due to low PO2', 'Increased acetylcholine secretion at the terminal end of the phrenic nerve'], a: 4,
  ex: 'Read each option for its error. &#946;2 binding dilates vessels. More baroreceptor firing would lower BP and HR. Sympathetic <b>ganglia</b> use ACh on nicotinic receptors; NE is released at the postganglionic endings, so C is a trap. Central chemoreceptors sense CO2/H+, not O2. Phrenic motor endings release ACh at the diaphragm, which explains the faster breathing.' },

{ t: 'c', id: 'D-C3', title: 'Splanchnic nerve and drugs', src: 'Lab quiz key + pharmacology', html:
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Stimulus</th><th>Main receptors</th><th>BP</th><th>HR</th><th>Notes</th></tr></thead><tbody>' +
'<tr><td><b>Splanchnic nerve</b> stimulation</td><td>&#945;1 on splanchnic vessels; adrenal medulla releases epinephrine</td><td class="up">&#8593; (second rise from adrenaline)</td><td>&#8593; or reflexly &#8595;</td><td>After stopping, BP dips <b>below baseline</b>: the leftover low epinephrine level acts on &#946;2 (vasodilation). After double vagotomy: BP &#8593;, HR &#8593;, and the only visible baroreflex effect is &#8595;RR</td></tr>' +
'<tr><td><b>Epinephrine, low dose</b></td><td>&#946;2 &gt; &#945;; &#946;1</td><td class="dn">&#8595;DBP, MAP &#8595;</td><td class="up">&#8593;</td><td>Muscle, liver, coronary vessels dilate; CVP falls as the heart pumps harder</td></tr>' +
'<tr><td><b>Epinephrine, high dose</b></td><td>&#945;1 + &#946;1</td><td class="up">&#8593;&#8593;</td><td>&#8593; then reflex &#8595;</td><td>Reflex &#8595;RR (adrenaline apnea); renal vasoconstriction &#8595;urine</td></tr>' +
'<tr><td>Norepinephrine</td><td>&#945;1, &#946;1</td><td class="up">&#8593;&#8593;</td><td class="dn">reflex &#8595;</td><td>Little &#946;2 effect</td></tr>' +
'<tr><td>Phenylephrine</td><td>&#945;1</td><td class="up">&#8593;</td><td class="dn">reflex &#8595;</td><td>Raises afterload without direct inotropy</td></tr>' +
'<tr><td>Isoproterenol</td><td>&#946;1, &#946;2</td><td class="dn">&#8595;</td><td class="up">&#8593;&#8593;</td><td>Pure &#946;</td></tr>' +
'<tr><td>Acetylcholine</td><td>M (vessels via NO; M2 on heart)</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>Blocked by atropine</td></tr>' +
'<tr><td>Nitroglycerin</td><td>NO donor, mainly veins</td><td class="dn">&#8595;</td><td class="up">reflex &#8593;</td><td>&#8595;venous return, &#8595;preload, &#8595;CVP</td></tr></tbody></table></div>' +
'<p class="note">After vagotomy there is no reflex bradycardia: drugs that raise BP now also raise HR. A denervated heart still responds to circulating catecholamines.</p>' },

{ t: 'tf', id: 'D15', src: 'Lab quiz', core: true,
  q: 'After the end of splanchnic nerve stimulation, blood pressure is lower than baseline due to the effect of &#946;1 stimulation at blood vessels.', a: false,
  ex: 'The dip is from &#946;2 vasodilation: as adrenal epinephrine falls to a low concentration, its &#946;2 action outweighs its &#945; action.' },
{ t: 'tf', id: 'D16', src: 'Lab quiz', core: true,
  q: 'In splanchnic nerve stimulation after double vagotomy, decreased respiratory rate is the only visible effect of increased baroreceptor stimulation.', a: true,
  ex: 'BP stays up (circulating catecholamines) and HR cannot slow (vagi cut), so the only sign that the baroreflex fired is slower breathing.' },
{ t: 'tf', id: 'D17', src: 'Lab quiz',
  q: 'Low-dose epinephrine causes vasodilation.', a: true,
  ex: 'At low concentration epinephrine acts mostly on &#946;2 receptors in skeletal muscle, liver and coronary vessels, lowering TPR and DBP.' },
{ t: 'q', id: 'D18', src: 'AC78', core: true,
  q: 'A substance causes a drop in both central venous pressure and blood pressure, while heart rate increases significantly. Which substance is most likely?',
  o: ['Dopamine', 'Low-dose epinephrine', 'Norepinephrine', 'Phenylephrine', 'High-dose epinephrine'], a: 1,
  ex: '&#946;2 vasodilation lowers TPR and BP; &#946;1 raises HR and contractility, so the heart empties the veins and CVP falls. Norepinephrine, phenylephrine and high-dose epinephrine all raise BP.' },
{ t: 'q', id: 'D19', src: 'AC79',
  q: 'Which of the following mechanisms results in an increased heart rate?',
  o: ['Increased stimulation of baroreceptors', 'Increased efferent signals of the glossopharyngeal nerve', 'Increased afferent signals of the aortic nerve', 'Increased epinephrine release from the adrenal medulla', 'Increased acetylcholine release from the vagus nerve'], a: 3,
  ex: 'Circulating epinephrine acts on &#946;1 at the SA node. More baroreceptor or aortic-nerve input and more vagal ACh all slow the heart; CN IX carries afferents from the sinus.' },
{ t: 'q', id: 'D20', src: 'AC77', flag: 'Options b and c were recalled as &#8220;fluctuate&#8221;; BP does rise and then dip below baseline.',
  q: 'Which of the following will occur after injection of <b>high-dose adrenaline</b>?',
  o: ['Decreased respiratory rate', 'Fluctuating blood pressure', 'Fluctuating heart rate', 'Increased central venous pressure', 'Decreased urine flow'], a: 0,
  ex: 'The large pressure rise drives the baroreflex, which inhibits breathing (adrenaline apnea) and slows the heart. Urine flow falls too, but it is not recorded in this lab.' },
{ t: 'q', id: 'D21', src: 'AC77',
  q: 'If adrenaline is injected intravenously after the dog has had a vagotomy, which will occur?',
  o: ['Fluctuating blood pressure', 'Fluctuating heart rate', 'Decreased respiratory rate'], a: 2,
  ex: 'Without the vagi, the rise in BP can no longer slow the heart, so HR simply rises. Carotid-sinus afferents (CN IX) still inhibit breathing, so RR falls.' },
{ t: 'tf', id: 'D22', src: 'Lab quiz',
  q: 'In a denervated heart, increased sympathetic stimulation does not increase its inotropic effect.', a: true,
  ex: 'A transplanted heart has no sympathetic nerves, so nerve stimulation cannot reach it. It still responds to circulating catecholamines from the adrenal medulla.' }
  ]
});

CVS.add({
  id: 'H', short: 'Dog lab II', title: 'Lab: Disturbance of CVS II (dog): hemodynamic disturbances', kind: 'Lab',
  blurb: 'IV fluid, hemorrhage, caval occlusion, nitroglycerin, tamponade, aortic regurgitation, coarctation and arrhythmias.',
  items: [

{ t: 'c', id: 'H-C1', title: 'Dog II: what each disturbance does', html:
'<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Disturbance</th><th>CVP</th><th>BP</th><th>HR</th><th>Key idea</th></tr></thead><tbody>' +
'<tr><td>IV saline into a vein / RA</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>&#8593; or &#8595;</td><td>&#8593;venous return &#8594; &#8593;preload &#8594; &#8593;SV, &#8593;CO (Frank&#8211;Starling). HR may rise (atrial stretch, Bainbridge) or fall (baroreflex)</td></tr>' +
'<tr><td>Hemorrhage</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="up">&#8593;</td><td>Baroreceptor and chemoreceptor reflexes; RR &#8593;. Within 15&#8211;30 min interstitial fluid moves into vessels, so Hct falls</td></tr>' +
'<tr><td>Clamp SVC (or IVC)</td><td class="dn">&#8595; (RA)</td><td class="dn">&#8595;</td><td class="up">&#8593;</td><td>&#8595;venous return; reflex &#8593;contractility and &#8593;TPR. Pressure in the veins upstream (head, arms) rises</td></tr>' +
'<tr><td>Nitroglycerin</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="up">reflex &#8593;</td><td>Venodilation &#8594; blood pools in veins &#8594; &#8595;preload</td></tr>' +
'<tr><td>Fluid into the pericardial sac</td><td class="up">&#8593;</td><td class="dn">&#8595;</td><td class="up">&#8593;</td><td>Tamponade: the heart cannot fill, so CVP rises while venous return falls; narrow pulse pressure; pulsus paradoxus</td></tr>' +
'<tr><td>Aortic valve destroyed (AR)</td><td>&#8212;</td><td>SBP &#8593;, DBP &#8595;</td><td>&#8212;/&#8593;</td><td>Backflow in diastole: &#8593;EDV, &#8593;total SV, wide pulse pressure, collapsing pulse</td></tr>' +
'<tr><td>Aortic stenosis / clamp the aorta</td><td>may &#8593;</td><td>&#8593; proximal, &#8595; distal</td><td>&#8212;</td><td>&#8593;LV pressure and afterload; pressure backs up</td></tr>' +
'<tr><td>Coarctation (distal to left subclavian)</td><td>&#8212;</td><td>&#8593; arms, &#8595; legs</td><td>&#8212;</td><td>&#8593;LV afterload; weak, delayed femoral pulse</td></tr></tbody></table></div>' +
'<p class="note">A high CVP does not always mean a full circulation: tamponade raises CVP while the heart is starved of filling.</p>' },

{ t: 'q', id: 'H1', src: 'AC77', core: true,
  q: 'What is the <b>direct</b> effect of injecting IV fluid into the right atrium?',
  o: ['Increased cardiac output', 'Decreased afterload', 'Increased afterload', 'Increased heart rate', 'Decreased heart rate'], a: 0,
  ex: 'More volume in the RA raises preload, so stroke volume and cardiac output rise (Frank&#8211;Starling). Any HR change is a secondary reflex.' },
{ t: 'q', id: 'H2', src: 'AC75',
  q: 'ฉีด IV fluid เข้า right atrium กับ pulmonary artery อะไรคือ cardiovascular response? <span class="muted">(IV fluid into the RA and pulmonary artery: CV response?)</span>',
  o: ['Decreased arterial pressure', 'Salt and water retention', 'Decreased intrathoracic pressure', 'Increased venous sympathetic tone', 'Increased cardiac output'], a: 4,
  ex: 'Volume loading raises preload and CO. The body then <b>excretes</b> salt and water (ANP, less ADH) and lowers sympathetic tone.' },
{ t: 'tf', id: 'H3', src: 'Lab quiz', core: true,
  q: 'An elevated CVP means that there is a large amount of intravascular volume.', a: false,
  ex: 'CVP also rises when the right heart cannot accept blood (tamponade, right heart failure, tricuspid or pulmonary disease) even with normal or low volume.' },
{ t: 'q', id: 'H4', src: 'AC79', core: true,
  q: 'After a significant venous hemorrhage in the lab dog, with compensatory mechanisms working normally, what is the expected change in vital signs?',
  o: ['&#8595;HR, &#8595;RR, &#8593;BP', '&#8593;HR, &#8595;RR, &#8593;BP', '&#8593;HR, &#8593;RR, &#8595;BP', '&#8595;HR, &#8593;RR, &#8595;BP', 'No significant change'], a: 2,
  ex: 'Blood loss lowers BP. Baroreceptor unloading raises HR; low flow to the carotid bodies (and acidosis) raises breathing. Compensation limits the fall but BP stays below baseline.' },
{ t: 'q', id: 'H5', src: 'AC79', core: true,
  q: 'Hemorrhage: Hct is 42% at 5 min and 40% at 15 min. Explain the mechanism.',
  o: ['Intracellular fluid shifts to the extracellular fluid', 'Aldosterone is induced', 'Interstitial fluid shifts into the intravascular space', 'More erythrocytes are lost than plasma'], a: 2,
  ex: 'Lower arterial and venous pressure lowers capillary hydrostatic pressure, so Starling forces favor reabsorption. Cell-free interstitial fluid enters the plasma and dilutes the red cells. Aldosterone works over hours.' },
{ t: 'q', id: 'H6', src: 'AC80', core: true,
  q: 'A patient has occlusion of the superior vena cava. What happens to venous return, contractility and total systemic resistance compared with baseline?',
  o: ['Decreased, decreased, unchanged', 'Decreased, increased, unchanged', 'Decreased, increased, increased', 'Decreased, decreased, increased', 'Increased, decreased, decreased'], a: 2,
  ex: 'Less venous return &#8594; lower SV and BP &#8594; baroreflex raises sympathetic output: contractility up and TPR up.' },
{ t: 'q', id: 'H7', src: 'AC77',
  q: 'Which hemodynamic change is the most direct and expected consequence of SVC compression?',
  o: ['A significant decrease in right atrial pressure', 'Increased systemic arterial pressure', 'Decreased venous pressure in the head, neck and upper limbs', 'Reduced afterload on the right ventricle', 'Increased cardiac output from compensation'], a: 0,
  ex: 'Less blood reaches the RA, so RA pressure falls. Upstream of the block, venous pressure in the head and arms <b>rises</b>; BP and CO fall.' },
{ t: 'q', id: 'H8', src: 'AC79',
  q: 'A pressure-volume loop shows the LVEDV point shifted to the <b>left</b>. What happened?',
  o: ['IV fluid injection', 'Aortic stenosis', 'SVC occlusion', 'Digoxin injection'], a: 2,
  ex: 'A smaller end-diastolic volume means less preload: SVC occlusion cuts venous return. IV fluid shifts EDV right; AS raises the loop&#8217;s pressure; digoxin increases contractility.' },
{ t: 'q', id: 'H9', src: 'AC75', core: true,
  q: 'Which of the following is most likely the effect of nitroglycerin?',
  o: ['Increased renal perfusion', 'Decreased venous return', 'Decreased aldosterone secretion', 'Increased afterload'], a: 1,
  ex: 'Nitroglycerin releases NO mainly in veins: capacitance rises, blood pools and venous return and preload fall.' },
{ t: 'q', id: 'H10', src: 'AC76',
  q: 'ข้อใดเป็นผลของ nitroglycerin <span class="muted">(Which is an effect of nitroglycerin?)</span>',
  o: ['Decreased preload', 'Increased vasoconstriction', 'Increased venous return', 'Decreased venous capacitance', 'Increased total peripheral resistance'], a: 0,
  ex: 'Venodilation raises venous capacitance and lowers preload; it does not constrict or raise TPR.' },
{ t: 'q', id: 'H11', src: 'AC78',
  q: 'Which would <b>directly</b> (without compensation) decrease CVP?',
  o: ['Increased venodilation', 'Increased cardiac vagal tone', 'Increased blood volume', 'Decreased TPR', 'Exhalation in normal breathing'], a: 0,
  ex: 'Venodilation lets the same volume sit in a bigger space, so pressure falls. Vagal slowing backs blood up (CVP rises), more volume raises CVP, lower TPR speeds venous return toward the heart, and exhalation raises intrathoracic pressure.' },

{ t: 'c', id: 'H-C2', title: 'Cardiac tamponade in the dog', html:
'<ul class="pts"><li>Fluid in the pericardial sac raises intrapericardial pressure, which squeezes the heart during diastole.</li>' +
'<li>The chambers cannot fill: <b>venous return falls</b>, yet the pressure in the RA and veins <b>rises</b> (CVP up).</li>' +
'<li>Preload, SV and CO fall &#8594; BP falls, pulse pressure narrows; the baroreflex raises HR.</li>' +
'<li>Afterload is judged by aortic pressure (and wall stress), which also falls.</li>' +
'<li>Pulsus paradoxus: inspiration fills the right heart, the septum bulges left, LV filling and SBP drop by more than 10 mmHg.</li>' +
'<li>Treatment: remove the fluid (pericardiocentesis).</li></ul>' },

{ t: 'q', id: 'H12', src: 'AC79', core: true,
  q: 'A manipulation makes CVP <b>increase</b> significantly while venous return <b>decreases</b>. Which manipulation most directly produces this?',
  o: ['Rapid IV administration of a large volume of isotonic saline', 'A systemic venodilator such as nitroglycerin', 'Injecting fluid into the pericardial sac', 'A positive inotropic agent', 'High PEEP during mechanical ventilation'], a: 2,
  ex: 'Tamponade blocks filling: blood backs up (CVP up) but less returns into the heart. Saline raises both CVP and VR; nitroglycerin lowers both; an inotrope lowers CVP. High PEEP can do something similar but less directly.' },
{ t: 'q', id: 'H13', src: 'AC78', core: true,
  q: 'A man was stabbed in the heart and has cardiac tamponade. Which set of changes in LV preload, LV cardiac output and LV afterload is correct?',
  o: ['Decreased, decreased, increased', 'Decreased, decreased, decreased', 'Decreased, increased, increased', 'Increased, increased, decreased', 'Increased, increased, increased'], a: 1,
  ex: 'Filling is blocked (preload down), so CO falls and aortic pressure falls; with a small, under-filled LV, afterload (aortic pressure, wall stress) is also lower. If you count only the reflex rise in TPR you would pick A, but afterload follows aortic pressure.' },
{ t: 'tf', id: 'H14', src: 'Lab quiz',
  q: 'Pericardial effusion causes decreased venous return and increased pulse pressure.', a: false,
  ex: 'Venous return falls, and pulse pressure <b>narrows</b> because stroke volume is small.' },

{ t: 'c', id: 'H-C3', title: 'Aortic regurgitation and coarctation', html:
'<div class="two"><figure class="dg">' + SVG_PV + '</figure><ul class="pts">' +
'<li>Loop: B = end-diastole (mitral closes, volume I = EDV) &#8594; C = aortic valve opens &#8594; D = peak pressure &#8594; E = aortic valve closes on the ESPVR &#8594; A = mitral opens (volume H = ESV) &#8594; filling back to B.</li>' +
'<li><b>AR</b>: blood leaks back from the aorta in diastole, so the LV fills from two sides: <b>EDV (I) moves right</b>, total SV rises, SBP rises, DBP falls (C moves down), pulse pressure widens, collapsing pulse. There is no true isovolumetric relaxation.</li>' +
'<li>Pulse pressure overestimates useful flow in AR: part of each stroke runs back into the LV, so <b>effective</b> forward SV is lower.</li>' +
'<li><b>Coarctation</b> distal to the left subclavian: high BP before the narrowing (arms, carotids), low and delayed after it (legs), higher LV afterload.</li>' +
'<li><b>Aortic stenosis</b>: high LV pressure and afterload, small slow pulse; pressure can back up to raise CVP.</li></ul></div>' },

{ t: 'q', id: 'H15', src: 'AC81', core: true,
  q: 'In the dog lab a stylet destroys the aortic valve, causing acute aortic regurgitation. What happens to end-diastolic volume, stroke volume, diastolic BP and pulse pressure, respectively?',
  o: ['Increased, increased, increased, increased', 'Increased, increased, increased, unchanged', 'Decreased, increased, decreased, decreased', 'Decreased, unchanged, increased, increased', 'Increased, increased, decreased, increased'], a: 4,
  ex: 'Backflow adds to filling (EDV up), Frank&#8211;Starling raises total SV, diastolic pressure drains back into the LV (DBP down), and a high SBP with a low DBP gives a wide pulse pressure.' },
{ t: 'q', id: 'H16', src: 'AC78', core: true,
  q: 'A patient has had a diastolic blowing murmur at the right upper parasternal border for many years. Which parameter is <b>decreased</b>?',
  o: ['Stroke volume', 'LV preload', 'Systolic BP', 'Diastolic BP', 'LVEDV'], a: 3,
  ex: 'Right upper parasternal + diastolic = aortic regurgitation. DBP falls; SV, preload, LVEDV and SBP all rise.' },
{ t: 'q', id: 'H17', src: 'AC80', flag: 'Loop redrawn to match the exam labels.',
  q: 'A patient has aortic regurgitation. Which part of the LV pressure-volume loop is expected to shift?',
  fig: '<figure class="dg">' + SVG_PV + '</figure>',
  o: ['I shifts to the right', 'D shifts downward', 'E shifts downward along the line', 'A shifts left', 'B unchanged'], a: 0,
  ex: 'I is the end-diastolic volume. Regurgitant blood adds to filling, so I moves right (and B with it). Peak pressure D rises rather than falls.' },
{ t: 'tf', id: 'H18', src: 'Lab quiz',
  q: 'Aortic regurgitation narrows the pulse pressure.', a: false,
  ex: 'It widens it: DBP falls as blood flows back, and SBP rises with the larger stroke volume.' },
{ t: 'tf', id: 'H19', src: 'Lab quiz',
  q: 'Pulse pressure can be used to estimate the effective stroke volume in all conditions.', a: false,
  ex: 'It works in normal people, but in AR pulse pressure is high while effective forward SV is reduced.' },
{ t: 'tf', id: 'H20', src: 'Lab quiz',
  q: 'Aortic stenosis can cause CVP elevation.', a: true,
  ex: 'Obstructed forward flow raises pressure backward through the LA, lungs and right heart.' },
{ t: 'q', id: 'H21', src: 'AC78', core: true,
  q: 'A 1-month-old baby has coarctation of the aorta distal to the origin of the left subclavian artery. Which is correct for BP proximal to the lesion, BP distal to the lesion and LV afterload?',
  o: ['Decreased, decreased, unchanged', 'Decreased, unchanged, increased', 'Increased, decreased, increased', 'Increased, decreased, unchanged', 'Increased, increased, unchanged'], a: 2,
  ex: 'The narrowing is a resistance in series: pressure builds up before it (arms high), drops after it (legs low), and the LV must pump against more resistance (afterload up).' },
{ t: 'tf', id: 'H22', src: 'Lab quiz',
  q: 'In coarctation of the aorta, blood pressure is increased proximal to the lesion and decreased distal to it.', a: true,
  ex: 'Proximal arteries (arms, head) see the high pressure; distal flow is reduced.' },
{ t: 'tf', id: 'H23', src: 'Lab quiz',
  q: 'Blood pressure and respiratory rate can be increased or decreased by electrical stimulation of the aortic nerve.', a: true,
  ex: 'Low current excites large baroreceptor fibers (BP and RR fall); high current excites small chemoreceptor fibers from the aortic bodies (BP and RR rise).' },
{ t: 'tf', id: 'H24', src: 'Lab quiz',
  q: 'In humans, left vagus stimulation mainly causes bradycardia, while right vagus stimulation mainly causes heart block.', a: false,
  ex: 'It is the other way round: right vagus &#8594; SA node &#8594; bradycardia; left vagus &#8594; AV node &#8594; heart block.' },

{ t: 'c', id: 'H-C4', title: 'Arrhythmias seen in the lab: AF and VF', html:
'<div class="cols2"><div class="mini"><h4>Atrial fibrillation</h4><ul><li>Starts in the <b>atria</b>, most often around the pulmonary veins in the left atrium; the AV node only passes on irregular impulses</li><li>ECG: no P waves, irregularly irregular RR, usually <b>narrow</b> QRS, often fast</li><li>Exam: irregular pulse, <b>pulse deficit</b>, no a wave in the JVP, no S4</li></ul></div>' +
'<div class="mini art"><h4>Ventricular fibrillation</h4><ul><li>Ventricles quiver without a coordinated beat</li><li>No stroke volume: <b>no palpable pulse</b>, BP falls toward zero</li><li>Needs immediate defibrillation</li></ul></div></div>' },

{ t: 'q', id: 'H25', src: 'AC76',
  q: 'What is the most common site of origin of atrial fibrillation?',
  o: ['Right atrium', 'Left atrium', 'Right ventricle', 'Right atrial appendage', 'Left atrial appendage'], a: 1,
  ex: 'Most AF is triggered by ectopic firing around the pulmonary vein openings in the left atrium. The left atrial appendage is where clots form, not where AF starts.' },
{ t: 'q', id: 'H26', src: 'AC77',
  q: 'What is an ECG finding during atrial fibrillation?',
  o: ['Regular rhythm', 'Pulse deficit', 'Tall P wave', 'Narrow QRS complexes', 'Slow ventricular rate'], a: 3,
  ex: 'Conduction below the AV node is normal, so QRS stays narrow. The rhythm is irregular, P waves are absent and the rate is usually fast. A pulse deficit is a bedside finding, not an ECG finding.' },
{ t: 'tf', id: 'H27', src: 'Lab quiz', core: true,
  q: 'In atrial fibrillation, the disorganized electrical activity originates primarily from the AV node, leading to the irregular rhythm.', a: false,
  ex: 'The chaos is in the atria. The AV node passes some of the impulses on at irregular intervals.' },
{ t: 'tf', id: 'H28', src: 'Lab quiz',
  q: 'The radial pulse can still be palpated in ventricular fibrillation, but with less intensity.', a: false,
  ex: 'In VF there is no coordinated contraction and no stroke volume, so there is no pulse at all.' }
  ]
});
})();
