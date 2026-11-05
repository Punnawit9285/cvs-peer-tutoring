/* Patch applied by gen.js: real figures from the course material + {{cloze}} blanks.
   IMG(file, caption, source, cls)  ROW(fig, fig, ...)  card(id, {id?, title?, src?, html?})
   cz(id, [fragments])  — fragment 'context [target] context' clozes only the bracketed part
   newCard(sec, {...})  q(id, {...})  order(sec, [ids]) */
var SL = 'Heart contraction &amp; vagus lab slides', HB = 'Heart block lab manual', BPD = 'BP lab manual',
  PED = 'PE lab manual', D1W = 'Dog I lab sheet', D2W = 'Dog II lab sheet';

/* ======================= R · regulation lecture ======================= */
cz('R-C1', ['Sympathetic ([&#946;1])', 'the vagus ([M2])', 'venous return: [Frank&#8211;Starling]', 'Set mainly by <b>[arterioles]</b>', '(R &#8733; [1/r&#8308;])', '<b>venous tone</b> ([preload])', '<b>arteriolar tone</b> ([TPR])', '<b>blood volume</b> ([kidney])']);
cz('R-C2', ['Chemoreceptor reflex (MAP [&lt; 80])', 'CNS ischemic response (MAP [&lt; 60])', '(full in [~20 min])', '[Stress relaxation] of vessels', 'Long-term (kidney, [infinite gain])', 'Renal&#8211;body fluid control ([pressure natriuresis])', 'resets in [1&#8211;2 days]', 'Long-term pressure is set by the [kidney]']);
cz('R-C3', ['[Rostral ventrolateral medulla (RVLM)]', '[Caudal ventrolateral medulla]', '[Nucleus tractus solitarius (NTS)]', '[Dorsal motor nucleus of vagus, nucleus ambiguus]', '<b>[sympathetic vasoconstrictor tone]</b>', '[Inhibits C-1]', 'Releases [epinephrine (~80%)]', 'emotional fainting, [vasovagal syncope]']);
card('R-C4', { html:
  '<div class="flow"><div class="fbox start">&#8593; arterial pressure stretches the wall</div><div class="farrow">&#8594;</div>' +
  '<div class="fbox"><b>Carotid sinus</b> &#8594; Hering&#8217;s n. &#8594; <b>{{CN IX}}</b><br><b>Aortic arch</b> &#8594; aortic n. &#8594; <b>{{CN X}}</b></div><div class="farrow">&#8594;</div>' +
  '<div class="fbox"><b>{{NTS}}</b><br>(medulla)</div><div class="farrow">&#8594;</div>' +
  '<div class="fstack"><div class="fbox ven">(+) vagal center &#8594; <b>vagus</b> &#8594; SA/AV: {{&#8595;HR, &#8595;AV conduction}}</div>' +
  '<div class="fbox art">(&#8722;) RVLM &#8594; <b>&#8595;sympathetic</b>: &#8595;HR, &#8595;contractility, {{arteriolar dilation}} (&#8595;TPR), {{venodilation}} (&#8595;venous return), &#8595;adrenal catecholamines, &#8595;renin</div></div>' +
  '<div class="farrow">&#8594;</div><div class="fbox end">BP falls back toward normal</div></div>' +
  '<div class="two">' + IMG('slide-ans.jpg', 'The reflex arc on the lab slide: (1) sensory fibers from the baroreceptors and chemoreceptors to the medulla, (2) parasympathetic and (3) sympathetic fibers to the heart, (4) sympathetic fibers to the adrenal medulla.', SL + ', p.26') +
  '<ul class="pts"><li>Receptors are spray-type stretch endings between the {{tunica media and adventitia}}. They respond to pressure and to {{how fast it changes}}.</li>' +
  '<li>Carotid sinus range ~{{60&#8211;180}} mmHg, most sensitive near normal MAP. The aortic arch has a {{higher}} threshold.</li>' +
  '<li>BP falls &#8594; {{fewer}} impulses &#8594; sympathetic up, vagus down &#8594; tachycardia, vasoconstriction, venoconstriction.</li>' +
  '<li>Carotid sinus = {{baroreceptor}}. Carotid body = {{chemoreceptor}}. Both sit at the carotid bifurcation on the slide; exams swap them on purpose.</li>' +
  '<li>In the anesthetized dog, strong baroreceptor stimulation also {{slows breathing}}.</li></ul></div>' });
card('R-C5', { html:
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Mechanism</th><th>Works when MAP is</th><th>Note</th></tr></thead><tbody>' +
  '<tr><td><b>Baroreceptor reflex</b></td><td class="num">{{60&#8211;180}} mmHg</td><td>Most sensitive near normal MAP (~{{100}} mmHg)</td></tr>' +
  '<tr><td><b>Chemoreceptor reflex</b></td><td class="num">below {{80}} mmHg</td><td>Carotid and aortic bodies turn hypoxic as their blood flow falls</td></tr>' +
  '<tr><td><b>CNS ischemic response</b></td><td class="num">below {{60}} mmHg</td><td>Strongest at {{15&#8211;20}} mmHg: the last-ditch response</td></tr></tbody></table></div>' +
  '<div class="cols2"><div class="mini"><h4>Peripheral chemoreceptor reflex</h4><ul><li>Carotid bodies (CN IX via Hering&#8217;s n.) and aortic bodies (CN X).</li><li>Sense {{&#8595;PaO&#8322;}} (main), &#8593;PaCO&#8322;, &#8593;H&#8314;.</li><li>They have a {{huge blood flow}}. When MAP drops below ~80 mmHg, flow falls, the cells become hypoxic and fire &#8594; vasomotor center &#8594; &#8593;BP, plus &#8593;breathing.</li><li>Arc: stimulus &#8594; carotid/aortic body &#8594; IX/X &#8594; NTS &#8594; vasomotor &amp; respiratory centers &#8594; sympathetic (heart, vessels, adrenal medulla) and {{phrenic}} (diaphragm).</li></ul></div>' +
  '<div class="mini"><h4>CNS ischemic response</h4><ul><li>MAP &lt; 60: the vasomotor center itself becomes ischemic and {{CO&#8322;}} builds up.</li><li>Result: massive sympathetic discharge, <b>{{systemic hypertension}}</b> up to ~250 mmHg.</li><li><b>Cushing reaction</b>: raised {{intracranial pressure}} compresses cerebral arteries &#8594; same response. Cushing triad = {{hypertension, bradycardia, irregular breathing}}.</li></ul></div></div>' +
  '<p class="note">Central chemoreceptors (medulla) respond to CO&#8322;/H&#8314; in CSF and mainly drive breathing. CO&#8322; also excites the vasomotor center, but locally it {{dilates}} vessels (strongly in the brain).</p>' });
cz('R-C6', ['<b>Angiotensin II</b>: [powerful arteriolar constrictor]', 'V1)</b>: [the most potent constrictor]', '<b>Endothelin-1</b>: [from endothelium]', 'released by <b>[shear stress]</b>', 'acts through [cGMP]', '<b>[Histamine]</b> (mast cells', 'dilation + [&#8593;capillary permeability]', 'low-dose epinephrine on [&#946;2]', 'Metabolic: [adenosine]']);
card('R-C7', { html:
  '<div class="cols2"><div class="mini"><h4>Metabolic (vasodilator) theory</h4><p>Working tissue releases {{adenosine}}, CO&#8322;, H&#8314;, K&#8314;, lactate, histamine; {{O&#8322; lack}} relaxes precapillary sphincters. This gives <b>{{active}} hyperemia</b> (exercise) and <b>{{reactive}} hyperemia</b> (after an occlusion).</p></div>' +
  '<div class="mini"><h4>Myogenic theory</h4><p>Higher pressure stretches arteriolar smooth muscle &#8594; {{stretch-activated channels}} depolarize it &#8594; Ca&#178;&#8314; entry &#8594; <b>{{constriction}}</b>, so flow returns toward normal and the capillaries are protected.</p></div></div>' +
  '<ul class="pts"><li><b>Autoregulation</b> = nearly constant {{flow}} despite changing arterial {{pressure}} (about {{70&#8211;175}} mmHg). Best in the {{kidney}} (myogenic + tubuloglomerular feedback), also brain and heart.</li>' +
  '<li><b>Long-term</b>: chronic high demand or hypoxia &#8594; {{angiogenesis}} (VEGF) = more vessels; chronic arterial blockage &#8594; <b>{{collateral circulation}}</b>.</li></ul>' +
  '<p class="trap">Autoregulation keeps flow steady when <b>pressure</b> changes. When <b>demand</b> rises, flow is meant to rise (active hyperemia).</p>' });
cz('R-C8', ['&#8595;NaCl at the [macula densa]', '<b>Renin</b> from [juxtaglomerular cells]', '&#8595; [ACE] (lung endothelium)', 'which also breaks down [bradykinin]', 'This loop has [infinite gain]', '&#8594; [volume-loading hypertension]', 'ANP is <b>[high]</b>', 'V2 = [water reabsorption (aquaporin-2)]', 'V1 = [vasoconstriction]', 'bradykinin builds up ([dry cough])']);
card('R-C9', { html:
  IMG('slide-pacemaker.png', 'SA-node (pacemaker) action potential: phase 4 is the slow diastolic depolarization carried by the funny current (I<sub>f</sub>); phase 0 is a Ca&#178;&#8314; upstroke.', SL + ', p.4', 'wide') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>Sympathetic: NE &#8594; &#946;1 (G<sub>s</sub>, cAMP)</th><th>Vagus: ACh &#8594; M2 (G<sub>i</sub>)</th></tr></thead><tbody>' +
  '<tr><td>SA node rate</td><td>{{&#8593;I<sub>f</sub> and &#8593;I<sub>Ca-L</sub>}} &#8594; {{steeper}} phase 4 &#8594; &#8593;HR</td><td>{{&#8593;K&#8314; efflux (I<sub>K-ACh</sub>)}} &#8594; hyperpolarized; &#8595;I<sub>f</sub>, &#8595;I<sub>Ca</sub> &#8594; {{flatter}} phase 4 &#8594; &#8595;HR</td></tr>' +
  '<tr><td>AV conduction</td><td>&#8593;I<sub>Ca-L</sub> &#8594; {{faster}} (shorter PR)</td><td>{{Slower}}; strong vagal input can block</td></tr>' +
  '<tr><td>Contractility</td><td>&#8593;Ca&#178;&#8314; entry and SR release &#8594; &#8593;force; {{phospholamban}} phosphorylation &#8594; faster relaxation</td><td>Small decrease (mostly atria)</td></tr>' +
  '<tr><td>Volumes</td><td>EDV {{about unchanged}}, ESV {{&#8595;}}, SV &#8593;, EF &#8593;</td><td>&#8212;</td></tr></tbody></table></div>' +
  '<p class="note">An &#945;1 agonist constricts arterioles: TPR and afterload rise but contractility {{does not change}} directly.</p>' });
cz('R-C10', ['intrinsic SA rate ([~90&#8211;110 bpm])', '<b>[slowly and less]</b>', '<b>[circulating catecholamines]</b>', 'Stroke volume rises through [Frank&#8211;Starling]', 'a direct &#946;-agonist [works]', 'Atropine [does nothing]']);
cz('R-C11', ['Hypotension, weak (thready) pulse, [narrow pulse pressure]', 'Baroreceptors fire <b>[less]</b>', 'Tachycardia ([&#8593;phase-4 slope])', 'Chemoreceptors join when MAP [&lt; 80]', 'so [Hct falls]', 'Hct drops a little within [15&#8211;30 min]', '[Aldosterone, ADH, thirst]', '[erythropoietin]']);

/* ======================= F · frog heart ======================= */
card('F-C1', { html:
  '<div class="two">' + IMG('hb-9-1.png', 'Fig 9-1 asks you to name phases A and B of the ventricular tracing.', HB + ', Fig 9-1') +
  '<div class="mini"><h4>Read every tracing in this lab the same way</h4><p>A, the downstroke = {{diastole}}. B, the upstroke = {{systole}}. The flat bottom is the relaxed, refilled ventricle. (Fig 9-2 marks early systole at the foot of an upstroke and early diastole at the peak.)</p></div></div>' +
  '<ul class="pts"><li><b>Exp 1 &#183; observe</b>: rate &#8776; 56/min. Systole looks {{pale}}, diastole looks {{darker}} (refilled). Order: {{sinus venosus &#8594; atria &#8594; ventricle}}.</li><li><b>Exp 2 &#183; extrasystole</b>: shock the ventricle at different moments of the beat.</li><li><b>Exp 3 &#183; Stannius ligatures</b>: tie the SA junction (crescentic line), then the AV junction.</li><li><b>Exp 4 &#183; all-or-none</b>: stimulate the quiet ventricle with increasing current.</li><li>Frog and turtle hearts have no {{coronary circulation}}, so ligatures do not cause ischemia.</li></ul>' });
card('F-C2', { html:
  '<div class="cols3"><div class="mini"><h4>Pacemaker cells</h4><p>SA node, AV node. Generate the impulse ({{automaticity}}).</p></div><div class="mini"><h4>Conducting cells</h4><p>Internodal pathways, bundle of His, bundle branches, Purkinje network.</p></div><div class="mini"><h4>Contractile cells</h4><p>Atrial and ventricular muscle, joined by intercalated discs ({{gap junctions}}) into a <b>{{functional syncytium}}</b>.</p></div></div>' +
  ROW(IMG('slide-fastap.png', 'Fast response (atrial and ventricular muscle, Purkinje): rests near &#8722;90 mV; phase 0 rapid Na&#8314; influx; phase 2 plateau where K&#8314; efflux &#8776; Ca&#178;&#8314; influx.', SL + ', p.5'),
      IMG('slide-pacemaker.png', 'Slow response (SA and AV node): no stable resting potential; phase 4 rises on the funny current, phase 0 is carried by Ca&#178;&#8314;.', SL + ', p.4')) +
  '<div class="two">' + IMG('slide-conduction.png', 'The pacemaker&#8211;conduction system, numbered as on the slide.', SL + ', p.15') +
  '<div class="stack"><ol class="steps"><li>{{SA node}}</li><li>{{Internodal / interatrial pathway}}</li><li>{{AV node}}</li><li>{{Bundle of His}}</li><li>{{Right and left bundle branches}}</li><li>{{Purkinje fibers}}</li><li>{{Ventricles}}</li></ol>' +
  '<p class="note">Conduction velocity depends on the slope of phase 0. Fastest = {{His&#8211;Purkinje system}}; slowest = {{AV node}} (and SA node). The SA node is the primary pacemaker because it <b>{{fires fastest}}</b>.</p></div></div>' +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Site</th><th>Conduction velocity (lab slide)</th><th>Intrinsic rate</th></tr></thead><tbody>' +
  '<tr><td>SA node</td><td class="num">{{0.05}} m/s</td><td>70&#8211;80/min, sinus rhythm</td></tr>' +
  '<tr><td>Atrial muscle</td><td class="num">{{1.0}} m/s</td><td>&#8212;</td></tr>' +
  '<tr><td>AV node (relay station)</td><td class="num">{{0.1}} m/s, delay &#8776; 0.1 s</td><td>40&#8211;60/min, nodal rhythm</td></tr>' +
  '<tr><td>Bundle branches / Purkinje</td><td class="num">{{2.0 / 1.0}} m/s (textbooks: Purkinje 2&#8211;4)</td><td>20&#8211;40/min, ventricular rhythm</td></tr>' +
  '<tr><td>Ventricular muscle</td><td class="num">{{0.4}} m/s</td><td>&#8212;</td></tr></tbody></table></div>' });
card('F-C3', { html:
  ROW(IMG('slide-arp.png', 'Absolute (ARP) and relative (RRP) refractory periods on the ventricular action potential.', SL + ', p.11'),
      IMG('slide-elecmech.png', 'Action potential (red) against the twitch: the ARP lasts almost until the muscle relaxes. SNP = supranormal period.', SL + ', p.9')) +
  '<ul class="pts"><li><b>Excitability</b> = ability to fire an AP in response to a depolarizing current.</li>' +
  '<li><b>ARP</b> (phase 0 &#8594; mid phase 3, about &#8722;50 mV): {{Na&#8314; channels are inactivated}}; no stimulus of any size can fire the cell.</li>' +
  '<li><b>RRP</b>: an AP is possible, but needs {{more current than usual}}. A short {{supranormal}} period follows.</li>' +
  '<li>Because the ARP lasts about as long as the {{contraction}}, a second beat cannot fuse with the first: {{no tetanus}}, so the heart always relaxes and refills.</li></ul>' });
card('F-C4', { html:
  IMG('hb-9-2.png', 'Fig 9-2: shocks at (1) early systole, (2) late systole, (3) mid systole, (4) late diastole, (5) early diastole and (6) mid diastole.', HB + ', Fig 9-2', 'wide') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Shock (Fig 9-2)</th><th>Extrasystole?</th><th>Compensatory pause?</th></tr></thead><tbody>' +
  '<tr><td>1, 2, 3 &#183; any time in systole</td><td>{{No}}</td><td>{{No}}</td></tr>' +
  '<tr><td>4, 5, 6 &#183; any time in diastole</td><td><b>{{Yes}}</b></td><td><b>{{Yes}}</b></td></tr></tbody></table></div>' +
  '<ul class="pts"><li><b>No extrasystole in systole</b>: the extra stimulus falls in the myocyte&#8217;s {{ARP}}, whatever its strength.</li>' +
  '<li><b>Compensatory pause</b>: the next sinus venosus impulse reaches the ventricle while it is still {{refractory}} from the extrasystole, so it is lost. The ventricle waits for the following impulse, which keeps the overall rate unchanged. On the trace: the long flat stretch after each extra beat.</li>' +
  '<li><b>Different amplitudes</b> = different {{preload}}. The later in diastole, the more filling, the {{bigger}} the extrasystole. The beat after the pause is {{the strongest}}.</li>' +
  '<li>Extrasystoles happen with heart disease (e.g., myocardial infarction) and in healthy people (lack of sleep, heavy smoking, stress, caffeine).</li></ul>' });
card('F-C5', { html:
  '<div class="cols2"><div class="tblwrap"><table class="tbl"><caption>Ligature I at the sino-atrial junction</caption><thead><tr><th></th><th>Sinus venosus</th><th>Atria</th><th>Ventricle</th></tr></thead><tbody>' +
  '<tr><td>Before</td><td class="num">60</td><td class="num">60</td><td class="num">60</td></tr>' +
  '<tr><td>Just after</td><td class="num">60</td><td class="num">{{0}}</td><td class="num">{{0}}</td></tr>' +
  '<tr><td>Later</td><td class="num">60</td><td class="num">{{32}}</td><td class="num">{{32}}</td></tr></tbody></table></div>' +
  '<div class="tblwrap"><table class="tbl"><caption>Ligature II at the AV junction</caption><thead><tr><th></th><th>Sinus venosus</th><th>Atria</th><th>Ventricle</th></tr></thead><tbody>' +
  '<tr><td>Before</td><td class="num">60</td><td class="num">32</td><td class="num">32</td></tr>' +
  '<tr><td>Just after</td><td class="num">60</td><td class="num">32</td><td class="num">{{0}}</td></tr>' +
  '<tr><td>Later</td><td class="num">60</td><td class="num">32</td><td class="num">{{0}}</td></tr></tbody></table></div></div>' +
  '<ul class="pts"><li>Each ligature is a <b>{{heart block}}</b>: the impulse cannot cross.</li>' +
  '<li>After ligature I the atria stop, then restart at a slower rate: a latent pacemaker below the block shows {{automaticity}} once it escapes {{overdrive suppression}}.</li>' +
  '<li>In patients whose SA node fails, the <b>{{AV node}}</b> usually takes over (junctional rhythm {{40&#8211;60}}/min, narrow QRS). If the block is lower, Purkinje fibers take over ({{20&#8211;40}}/min). Whichever latent pacemaker {{fires fastest}} wins.</li></ul>' });
card('F-C6', { html:
  '<div class="two">' + IMG('hb-9-3.png', 'Fig 9-3: the quiet ventricle shocked with increasing current.', HB + ', Fig 9-3') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Stimulus to the quiet ventricle</th><th>Contraction</th></tr></thead><tbody>' +
  '<tr><td>Subthreshold</td><td>{{None}}</td></tr><tr><td>Threshold</td><td>{{Full contraction}}</td></tr><tr><td>Submaximal, maximal, supramaximal</td><td>{{Same size as at threshold}}</td></tr></tbody></table></div></div>' +
  '<ul class="pts"><li>The cardiac AP is {{all-or-none}}, and the whole syncytium fires together, so a bigger shock does not give a bigger beat.</li>' +
  '<li>The smallest effective stimulus is the one that brings the membrane to the <b>{{threshold potential}}</b>.</li>' +
  '<li>Force <b>can</b> change by other routes: {{preload}} (Frank&#8211;Starling), {{contractility}} (catecholamines, Ca&#178;&#8314;, digitalis), temperature, pH, ions.</li></ul>' });

q('F14', { fig: IMG('ac80-starling.png', '', 'AC80 exam figure') });
q('F15', { fig: IMG('ac81-stim.png', '', 'AC81 exam figure'), a: 0, flag: null, core: true,
  ex: 'Read the trace the way the lab manual does (Fig 9-1, 9-2): the upstroke is systole; the downstroke and the flat bottom are diastole. <b>B</b> sits on an upstroke and <b>C</b> at the top, so both fall in systole, inside the ARP: even a maximal shock does nothing. <b>D</b> is late diastole, the best moment for a big beat, but a subthreshold stimulus fires nothing. <b>A</b> is on the downstroke (diastole), so a threshold shock gives an extrasystole. It is the only one on offer, so it is also the biggest. A matches the AC81 answer key.' });

/* ======================= T · turtle vagus ======================= */
card('T-C1', { html:
  '<div class="two">' + IMG('slide-control.jpg', 'Autonomic wiring of the heart: cardioinhibitory (vagal) and cardioacceleratory centers in the medulla, the sympathetic ganglia and the cardiac plexus.', SL + ', p.28') +
  '<div class="stack"><div class="mini ven"><h4>Parasympathetic</h4><p>Dorsal motor nucleus of vagus / nucleus ambiguus &#8594; long preganglionic <b>vagus</b> &#8594; ACh on {{nicotinic}} receptors in a ganglion on the heart (turtle: {{crescentic line}}) &#8594; short postganglionic fiber &#8594; ACh on {{M2}} at the SA node (mostly {{right}} vagus) and AV node (mostly {{left}} vagus).</p></div>' +
  '<div class="mini art"><h4>Sympathetic</h4><p>RVLM (cardioaccelerator) &#8594; spinal cord {{T1&#8211;T4}} &#8594; cervical/stellate ganglia (nicotinic) &#8594; long postganglionic fiber &#8594; NE on {{&#946;1}} at the SA node, AV node and ventricles. The adrenal medulla adds circulating epinephrine.</p></div></div></div>' +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Effect on the heart</th><th>Sympathetic</th><th>Parasympathetic</th></tr></thead><tbody>' +
  '<tr><td>Chronotropic (rate)</td><td class="up">{{&#8593;&#8593;}}</td><td class="dn">{{&#8595;&#8595;}}</td></tr>' +
  '<tr><td>Inotropic (force)</td><td class="up">{{&#8593;&#8593;}}</td><td class="dn">{{&#8595;}}</td></tr>' +
  '<tr><td>Dromotropic (conduction)</td><td class="up">{{&#8593;&#8593;}}</td><td class="dn">{{&#8595;&#8595;}}</td></tr>' +
  '<tr><td>Action potential duration</td><td class="dn">{{&#8595;}}</td><td class="up">{{&#8593;}}</td></tr></tbody></table></div>' +
  '<ul class="pts"><li>The vagus is active {{at rest}} (vagal tone): the intrinsic SA rate is ~{{100}}/min but resting HR is ~70.</li><li>Vagal fibers go mainly to the {{atria and nodes}}; ventricles are mostly sympathetic.</li><li>ACh &#8594; more K&#8314; leaves the cell &#8594; membrane more negative ({{hyperpolarized}}) + flatter phase 4 &#8594; slower rate.</li></ul>' });
card('T-C2', { html:
  ROW(IMG('hb-9-4.png', 'Fig 9-4: stimulating the right vagus.', HB + ', Fig 9-4'), IMG('hb-9-5.png', 'Fig 9-5: tying, cutting, then stimulating the left vagus.', HB + ', Fig 9-5')) +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Peripheral (cardiac) end stimulated</th><th>Right vagus</th><th>Left vagus</th></tr></thead><tbody>' +
  '<tr><td>Before / after tying / after cutting</td><td>60 &#183; normal force &#183; A:V 1:1</td><td>60 &#183; normal force &#183; A:V 1:1</td></tr>' +
  '<tr><td>Weak current</td><td>Rate and force &#8595; &#183; A:V {{1:1}}</td><td>Rate and force &#8595; &#183; A:V {{&gt; 1:1}} (dropped ventricular beats)</td></tr>' +
  '<tr><td>Moderate current</td><td>{{Arrest}} (0)</td><td>Markedly &#8595; &#183; A:V &gt; 1:1</td></tr>' +
  '<tr><td>Strong current</td><td>Arrest</td><td>Arrest</td></tr></tbody></table></div>' +
  '<ul class="pts"><li><b>Right vagus &#8594; {{SA node}} &#8594; {{rate}}</b> (chronotropic): bradycardia, then arrest.</li><li><b>Left vagus &#8594; {{AV node}} &#8594; {{conduction}}</b> (dromotropic): the atria keep beating faster than the ventricle = {{AV block}}.</li><li>Why: the two vagi send unequal numbers of fibers to the SA and AV nodes. Humans show the same pattern.</li><li>Cutting the nerve changed nothing in this turtle preparation, and the heart recovers when stimulation stops.</li></ul>' });
card('T-C3', { html:
  '<div class="flow"><div class="fbox">Stimulate the <b>vagus trunk</b><br><span class="muted">preganglionic fibers</span></div><div class="farrow">&#8594;</div><div class="fbox ven"><b>Ganglion at the crescentic line</b><br>ACh &#8594; <b>{{nicotinic}}</b> receptor</div><div class="farrow">&#8594;</div><div class="fbox">Postganglionic fiber<br>ACh &#8594; <b>{{M2}}</b> at SA/AV node</div><div class="farrow">&#8594;</div><div class="fbox end">&#8595;HR or arrest</div></div>' +
  IMG('hb-9-6.png', 'Fig 9-6: no stimulus (HR 46/min), vagus stimulation, crescentic-line stimulation.', HB + ', Fig 9-6', 'wide') +
  ROW(IMG('hb-9-7.png', 'Fig 9-7: nicotine, low dose then high dose.', HB + ', Fig 9-7'), IMG('hb-9-8.png', 'Fig 9-8: vagus and crescentic-line stimulation after nicotine.', HB + ', Fig 9-8')) +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Condition</th><th>HR, atria = ventricle (bpm)</th></tr></thead><tbody>' +
  '<tr><td>No stimulus</td><td class="num">46</td></tr>' +
  '<tr><td>Stimulate vagus</td><td class="num">{{0}}</td></tr>' +
  '<tr><td>Stimulate crescentic line</td><td class="num">{{0}}</td></tr>' +
  '<tr><td>Nicotine, low dose</td><td class="num">{{40}}</td></tr>' +
  '<tr><td>Nicotine, high dose</td><td class="num">{{50}}</td></tr>' +
  '<tr><td>Stimulate vagus 2&#8211;3 min after nicotine</td><td class="num">{{50}}</td></tr>' +
  '<tr><td>Stimulate crescentic line after nicotine</td><td class="num">{{0}}</td></tr></tbody></table></div>' +
  '<ul class="pts"><li><b>Low dose</b> {{stimulates}} the ganglionic nicotinic receptors &#8594; more ACh at the SA node &#8594; the heart slows.</li>' +
  '<li><b>High dose</b> keeps the postganglionic neuron depolarized; its Na&#8314; channels inactivate ({{depolarization block}}). The ganglion stops transmitting: resting vagal tone is lost (the heart speeds up a little) and vagal stimulation can no longer get through.</li>' +
  '<li>Stimulating the crescentic line still stops the heart because it fires the postganglionic neurons {{below the block}}. So the synapse is at the {{crescentic line}}.</li>' +
  '<li><b>Atropine</b> blocks {{M2}}: neither vagus nor crescentic-line stimulation can slow the heart.</li></ul>' });
card('T-C4', { html:
  IMG('hb-9-9.png', 'Fig 9-9: Gaskell&#8217;s clamp tightened step by step at the atrioventricular junction.', HB + ', Fig 9-9', 'wide') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Clamp at the AV junction</th><th>Atria</th><th>Ventricle</th><th>A : V</th></tr></thead><tbody>' +
  '<tr><td>Before</td><td class="num">60</td><td class="num">60</td><td class="num">1:1</td></tr>' +
  '<tr><td>Light</td><td class="num">60</td><td>{{&#8595;}}</td><td class="num">{{&gt; 1:1}}</td></tr>' +
  '<tr><td>Moderate</td><td class="num">60</td><td>{{&#8595;&#8595;}}</td><td class="num">&gt; 1:1</td></tr>' +
  '<tr><td>Tight</td><td class="num">60</td><td class="num">{{0}}</td><td>&#8212;</td></tr></tbody></table></div>' +
  '<div class="two">' + IMG('slide-block.png', 'Levels of heart block; the clamp makes an AV block.', SL + ', p.31') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Human AV block</th><th>Picture</th></tr></thead><tbody>' +
  '<tr><td>1st degree: every impulse conducts, slowly</td><td>PR {{&gt; 0.20 s}}, A:V 1:1</td></tr>' +
  '<tr><td>2nd degree: some impulses fail</td><td>Dropped QRS (2:1, 3:1). Mobitz I: PR {{lengthens, then a beat drops}}. Mobitz II: sudden drops</td></tr>' +
  '<tr><td>3rd degree (complete): none conduct</td><td>{{AV dissociation}}: atria at sinus rate, ventricles at escape rate (junctional 40&#8211;60 narrow QRS; ventricular 20&#8211;40 wide QRS); syncope</td></tr></tbody></table></div></div>' +
  '<p class="note">Conduction block also occurs in healthy people: high {{vagal tone}} (athletes, sleep) and drugs such as &#946;-blockers, calcium-channel blockers and digoxin. Levels of block: SA exit, intra-atrial, AV, bundle branch, intraventricular.</p>' });

/* ======================= B · blood pressure ======================= */
cz('B-C1', ['DBP + [&#8531;]', 'Mainly set by [stroke volume and arterial stiffness]', 'Mainly set by [peripheral resistance]', 'Tracks [stroke volume]', 'Wide: [AR, stiff arteries, exercise]', 'Narrow: [AS, tamponade, hypovolemia]', 'diastole lasts about [twice as long] as systole', '<td>[SBP only]</td>', 'wall oscillations ([maximum = MAP])', 'by about [&#177;10 mmHg]']);
card('B-C2', { html:
  '<div class="two">' + IMG('bp-prep.png', 'Fig 1 of the BP manual: what to check before and during the measurement.', BPD + ', Fig 1') +
  '<div class="mini"><h4>Prepare the subject</h4><ul><li>No smoking, caffeine, food or exercise for {{30 min}}; empty the bladder; rest {{5 min}} in a quiet room</li><li>Seated, back supported, feet flat, legs uncrossed, {{no talking}}</li><li>Arm bare, supported, palm up, cuff at <b>{{heart level}}</b></li><li>Lower cuff edge {{~2.5 cm (1 inch)}} above the elbow crease; bladder centre over the brachial artery; snug fit</li><li>Mercury zero at heart level; read the meniscus at eye level</li></ul></div></div>' +
  '<div class="cols2"><div class="mini"><h4>Cuff size</h4><p>Bladder <b>width &#8776; {{40%}}</b> of mid-arm circumference; bladder <b>length {{80&#8211;100%}}</b> of it.</p></div>' +
  '<div class="tblwrap"><table class="tbl compact"><thead><tr><th>Cuff</th><th>Bladder (cm)</th><th>Arm (cm)</th></tr></thead><tbody><tr><td>Newborn</td><td class="num">3 &#215; 6</td><td class="num">&#8804; 6</td></tr><tr><td>Infant</td><td class="num">5 &#215; 15</td><td class="num">6&#8211;15</td></tr><tr><td>Child</td><td class="num">8 &#215; 21</td><td class="num">16&#8211;21</td></tr><tr><td>Small adult</td><td class="num">10 &#215; 24</td><td class="num">22&#8211;26</td></tr><tr><td>Adult</td><td class="num">13 &#215; 30</td><td class="num">27&#8211;34</td></tr><tr><td>Large adult</td><td class="num">16 &#215; 38</td><td class="num">35&#8211;44</td></tr><tr><td>Adult thigh</td><td class="num">20 &#215; 42</td><td class="num">45&#8211;52</td></tr></tbody></table></div></div>' +
  '<ol class="steps"><li><b>Palpate first</b>: feel the radial pulse, inflate until it disappears, then {{20&#8211;30 mmHg}} more. Deflate about {{2 mmHg per beat}}; the pressure at which the pulse returns is the {{palpatory SBP}}. DBP cannot be judged reliably by palpation.</li><li><b>Then auscultate</b>: bell or diaphragm over the brachial artery at the elbow (not under the cuff). Inflate quickly to 20&#8211;30 above the palpatory SBP, deflate slowly (about {{1 mmHg per second}} in the manual): first tapping = SBP, disappearance = DBP.</li><li>Palpating first avoids being fooled by an <b>{{auscultatory gap}}</b> (a silent stretch below SBP in some hypertensive patients) and avoids pumping far too high.</li></ol>' });
card('B-C3', { html:
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Phase</th><th>Sound</th><th>Meaning</th></tr></thead><tbody>' +
  '<tr><td class="num">I</td><td>{{First clear tapping}}</td><td><b>{{SBP}}</b>: the cuff has just fallen below the pressure peaks, so blood spurts through</td></tr>' +
  '<tr><td class="num">II</td><td>{{Softer swishing}}</td><td>&#8212;</td></tr>' +
  '<tr><td class="num">III</td><td>{{Crisper, louder tapping}}</td><td>&#8212;</td></tr>' +
  '<tr><td class="num">IV</td><td>{{Sudden muffling}}</td><td>Used as DBP in children, pregnancy, high-output states and AR, where sounds may go on to 0</td></tr>' +
  '<tr><td class="num">V</td><td>{{Silence}}</td><td><b>{{DBP}}</b> in adults: the artery stays open all through the beat and flow is smooth again</td></tr></tbody></table></div>' +
  '<p class="note">The sounds come from {{turbulent}}, jet-like flow through a partly compressed artery. Above SBP the artery is {{shut}} (silent); below DBP flow is {{laminar}} (silent).</p>' });
cz('B-C4', ['Cuff too <b>[small]</b>', 'Cuff too <b>[large]</b>', 'Cuff too <b>[loose]</b>', 'Cuff too <b>[tight]</b>', 'Arm <b>[below]</b>', 'Arm <b>[above]</b>', 'Deflating <b>[too fast]</b>', '(hydrostatic, about [+0.8 mmHg per cm])', 'sounds persist lower, [DBP reads low]']);
cz('B-C5', ['<b>leg SBP is [higher]</b>', '(by [~10&#8211;20 mmHg])', 'SBP and pulse pressure <b>[grow]</b>', 'the <b>[femoral artery]</b> has', 'above [10&#8211;15 mmHg]', '<b>Coarctation</b>: [arm BP high, leg BP low]', 'normal [1.0&#8211;1.4]', 'below [0.9]']);
cz('B-C6', ['[~500&#8211;800 mL] pools', 'Baroreceptors fire <b>[less]</b>', '&#8593;HR ([+10&#8211;20])', '<b>CO stays [20&#8211;30%] lower</b>', 'SBP falls [&#8805; 20]', 'DBP [&#8805; 10] mmHg', 'baroreceptors fire <b>[more]</b>', 'In the dog, BP first [rises, then falls back]']);
card('B-C7', { html:
  '<div class="tblwrap"><table class="tbl"><thead><tr><th></th><th>Before</th><th>Right after</th><th>3 min</th><th>6 min</th></tr></thead><tbody>' +
  '<tr><td>Heart rate</td><td>baseline</td><td class="up">{{&#8593;&#8593;}}</td><td class="up">&#8593;</td><td>near baseline</td></tr>' +
  '<tr><td>Systolic BP</td><td>baseline</td><td class="up">{{&#8593;&#8593;}}</td><td class="up">&#8593;</td><td>near baseline</td></tr>' +
  '<tr><td>Diastolic BP</td><td>baseline</td><td>{{&#8776; or slightly &#8595;}}</td><td>&#8776;</td><td>&#8776;</td></tr>' +
  '<tr><td>Pulse pressure</td><td>baseline</td><td class="up">{{wide}}</td><td>narrowing</td><td>near baseline</td></tr></tbody></table></div>' +
  '<ul class="pts"><li>Sympathetic drive raises HR, contractility, SV and CO &#8594; <b>SBP {{rises}}</b>. Metabolic dilation in muscle lowers {{TPR}} &#8594; <b>DBP stays about the same</b>. So pulse pressure widens.</li><li>Fit people recover {{faster}}. Stopping suddenly and standing still removes the {{muscle pump}} &#8594; venous return falls &#8594; post-exercise light-headedness or fainting.</li><li>Isometric, heavy lifting (with breath-holding) raises SBP <b>and</b> DBP sharply, so it is avoided in uncontrolled hypertension and coronary disease.</li></ul>' });

/* ======================= M · microcirculation (no figures in the manual) ======================= */
cz('M-C1', ['<td>[Ischemia, then reactive hyperemia]</td>', '<td>[Outflow blocked while inflow continues]</td>', '<td>[Mechanical emptying; triple response]</td>', '<td>[Skin vessels serve temperature control]</td>', '<td>[Hydrostatic pressure]</td>', 'also has <b>[arteriovenous anastomoses]</b>', 'sympathetic control: [open when warm, shut when cold]']);
cz('M-C2', ['Cuff pressure is above [SBP]', '<b>[No edema]</b>', 'capillary pressure is [low]', 'Skin flushes <b>[bright red and warm]</b>', 'Cause: [vasodilator metabolites]', '<b>[deoxyhemoglobin falls fast]</b>', 'lasts roughly [in proportion to the occlusion time]']);
cz('M-C3', ['far below DBP: [arterial inflow continues, venous outflow blocked]', 'About DBP: [inflow only at the systolic peaks]', '<td>[Dusky blue (cyanotic)]', 'The veins distend <b>[passively]</b>', 'local [veno-arteriolar constriction]', 'The [tourniquet test] for dengue', 'cuff [between SBP and DBP]']);
cz('M-C4', ['(<b>[mechanical expulsion]</b>)', 'small vessels ([local histamine from mast cells])', '<b>[Axon reflex]</b>', 'release [substance P and CGRP]', 'it [survives spinal cord section]', 'abolished by [local anesthesia]', '<td>[&#8593;permeability of capillaries and postcapillary venules (histamine)]']);
cz('M-C5', ['<td><b>[Engorged]</b></td>', '<td><b>[Red]</b> (and painful)</td>', '<td><b>[Flattened]</b></td>', 'holds on to O&#8322; ([left shift])', '[cold-induced vasodilation (hunting reaction)]', 'veins and [AV shunts]']);
cz('M-C6', ['<p>[Pale]; veins empty', 'hand venous pressure sits [near zero]', '<p>[Red-purple]; veins engorged', 'foot veins [~ +90 mmHg]', 'their pressure is <b>[negative]</b>', '(~ [&#8722;10 mmHg])', 'This is why [air embolism] is a risk', 'great thoracic veins <b>[falls]</b>']);

/* ======================= P · physical examination ======================= */
card('P-C1', { html:
  IMG('pe-palpation.png', 'Fig 1: palpating the apex and the base of the heart.', PED + ', Fig 1', 'wide') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Step</th><th>Look for</th><th>Exam traps</th></tr></thead><tbody>' +
  '<tr><td><b>Inspection</b></td><td>Cyanosis, edema, breathlessness, JVP, visible apex</td><td>Cyanosis and edema may <b>not</b> be cardiac: {{lung disease, nephrotic syndrome, liver disease}}, venous or lymphatic obstruction</td></tr>' +
  '<tr><td><b>Palpation</b></td><td>Apex beat (PMI): left <b>{{5th ICS, midclavicular line}}</b>. Displaced = {{LV dilation}}; sustained heave = {{LV hypertrophy}}; parasternal heave = {{RV hypertrophy}}; thrills</td><td>Palpation detects {{ventricular}}, not atrial, enlargement. The PMI is at the MCL, not the mid-axillary line</td></tr>' +
  '<tr><td><b>Percussion</b></td><td>Area of cardiac dullness</td><td>{{Of little value}}; it cannot diagnose constrictive pericarditis</td></tr>' +
  '<tr><td><b>Auscultation</b></td><td>Diaphragm: <b>{{high}}</b>-pitched (S1, S2, AR, MR, rubs). Bell, held lightly: <b>{{low}}</b>-pitched (S3, S4, MS rumble)</td><td>A murmur is not always disease (innocent flow murmurs)</td></tr></tbody></table></div>' +
  '<p class="note">Heart-failure signs by side: <b>left</b> (backward into the lungs) = {{dyspnea, orthopnea, PND, crackles}}. <b>Right</b> (backward into systemic veins) = {{raised JVP, hepatojugular reflux, hepatomegaly, ankle and sacral edema}}.</p>' });
cz('P-C2', ['<span>[S4] if the LV is stiff', 'JVP <b>[a]</b>', 'JVP <b>[c]</b>', 'JVP <b>[x]</b>', 'JVP <b>[v]</b> peak', '<span>[S3] &#183; JVP', 'JVP <b>[y]</b>', '<td>[Mitral + tricuspid close]</td>', '<td>[Aortic + pulmonic close]</td>', '<td>[Rapid ventricular filling]</td>', '<td>[Atrium contracting into a stiff ventricle]</td>', 'Wide fixed split = [ASD]', 'absent in [AF]']);
card('P-C3', { html:
  '<div class="two">' + IMG('pe-areas.png', 'Classic auscultation areas: P pulmonary, A aortic, M mitral, T tricuspid.', PED) +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Area</th><th>Site</th><th>Typical murmurs</th></tr></thead><tbody>' +
  '<tr><td><b>A</b> aortic</td><td>{{Right 2nd ICS}}, parasternal</td><td>AS (ejection systolic, to the carotids); AR</td></tr>' +
  '<tr><td><b>P</b> pulmonic</td><td>{{Left 2nd ICS}}, parasternal</td><td>PS (ejection systolic); PR (early diastolic)</td></tr>' +
  '<tr><td><b>E</b> Erb&#8217;s point</td><td>{{Left 3rd ICS}}</td><td>AR is often loudest here</td></tr>' +
  '<tr><td><b>T</b> tricuspid</td><td>{{Left lower sternal border}}, 4th&#8211;5th ICS</td><td>TR (pansystolic, louder on inspiration); TS (diastolic); VSD</td></tr>' +
  '<tr><td><b>M</b> mitral (apex, PMI)</td><td>{{Left 5th ICS, midclavicular line}}</td><td>MR (pansystolic, to the axilla); MS (mid-diastolic rumble, bell, left lateral position)</td></tr></tbody></table></div></div>' +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Lesion</th><th>Timing and shape</th><th>Where, and what makes it louder</th></tr></thead><tbody>' +
  '<tr><td><b>AS</b> / PS</td><td>{{Ejection systolic}}: crescendo&#8211;decrescendo, starts after S1</td><td>Aortic area, radiates to the {{carotids}} (PS: pulmonic area)</td></tr>' +
  '<tr><td><b>MR</b> / TR</td><td>{{Pansystolic}}: flat, S1 to S2</td><td>Apex, radiates to the {{axilla}} (TR: lower left sternal border, louder on {{inspiration}})</td></tr>' +
  '<tr><td><b>AR</b> / PR</td><td>{{Early diastolic}}: decrescendo, blowing, starts at S2</td><td>Erb&#8217;s point or right 2nd ICS, patient sitting forward, breath held out</td></tr>' +
  '<tr><td><b>MS</b></td><td>{{Mid-diastolic rumble}} after an opening snap</td><td>Apex with the {{bell}}, left lateral position</td></tr></tbody></table></div>' +
  '<p class="note">Two questions solve most murmur items: <b>when</b> is it (with the carotid pulse = {{systolic}}; after S2 = {{diastolic}}) and <b>where</b> is it loudest (the area names the valve). The exam uses the classic areas strictly: left 2nd ICS = {{pulmonic}}.</p>' });
card('P-C4', { html:
  '<div class="two">' + IMG('pe-carotid.jpg', 'Fig 2: palpating the carotid artery (Bates&#8217; Guide to Physical Examination, 13th ed., as cited in the manual).', PED + ', Fig 2') +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Pulse</th><th>What you feel</th><th>Cause</th></tr></thead><tbody>' +
  '<tr><td><b>Collapsing</b> (water-hammer)</td><td>Sharp rise, sudden fall; wide pulse pressure, low DBP</td><td>{{Aortic regurgitation}}</td></tr>' +
  '<tr><td><b>Pulsus parvus et tardus</b></td><td>Small, late-peaking, delayed carotid pulse; narrow pulse pressure</td><td>{{Aortic stenosis}}</td></tr>' +
  '<tr><td><b>Pulsus paradoxus</b></td><td>SBP falls more than {{10 mmHg}} on inspiration</td><td>{{Cardiac tamponade}} (also severe asthma, constriction)</td></tr>' +
  '<tr><td><b>Pulse deficit</b></td><td>Apical rate higher than radial rate</td><td>{{Atrial fibrillation}}: short beats never reach the wrist</td></tr>' +
  '<tr><td><b>Pulsus alternans</b></td><td>Strong and weak beats alternate</td><td>{{Severe LV failure}}</td></tr>' +
  '<tr><td>Stiff arteries</td><td>Fast pulse wave, high SBP, wide pulse pressure</td><td>{{Aging, atherosclerosis}}</td></tr></tbody></table></div></div>' +
  '<p class="note">Tamponade: Beck&#8217;s triad = {{hypotension, raised JVP, muffled heart sounds}}, plus tachycardia and narrow pulse pressure.</p>' });
card('P-C5', { html:
  '<div class="two">' + IMG('pe-jvp.jpg', 'Measuring the JVP: vertical height of the pulsation above the sternal angle (Assavapokee &amp; Thadanipon, N Engl J Med 2020, as cited in the manual).', PED) +
  '<div class="mini"><h4>How to look</h4><ul><li>Patient at {{45&#176;}}, head turned slightly left; watch the {{right internal jugular vein}} (straight, valveless line to the RA)</li><li>Height of the pulsation above the {{sternal angle}} (+5 cm &#8776; RA pressure). Normal &#8804; {{3&#8211;4 cm}}</li><li>Venous, not arterial: {{two peaks per beat}}, not palpable, can be occluded, falls with inspiration, rises with abdominal pressure ({{hepatojugular reflux}})</li></ul></div></div>' +
  '<div class="mini"><h4>The waves</h4><ul><li><b>a</b> = {{RA contraction}}. Absent in {{AF}}; cannon a waves in {{AV dissociation}} (complete heart block)</li><li><b>c</b> = {{tricuspid valve bulging into the RA}} as the RV contracts</li><li><b>x</b> = {{atrial relaxation}}, tricuspid ring pulled down during ejection</li><li><b>v</b> = {{RA filling}} with the tricuspid valve shut. Giant v (cv) in {{TR}}</li><li><b>y</b> = {{tricuspid opens, RA empties into the RV}}</li></ul></div>' });
cz('P-C6', ['P2 comes [later]', '[Deep inspiration] is the strongest', 'P2 is always late (<b>[wide]</b> split)', 'so the <b>LA &#8594; RA shunt [shrinks]</b>', 'so the split is <b>[fixed]</b>', 'in ASD is the [shunt volume]']);
q('P29', { fig: IMG('ac80-jvp.png', '', 'AC80 exam figure'), q: 'The jugular venous pulse of a patient is shown below. What happens at point <b>a</b>?',
  flag: 'In the recalled figure the arrow lands at the foot of the wave rather than its peak. The label a and the options point to the a wave.' });

/* ======================= D · Dog I ======================= */
cz('D-C1', ['cut end tests the [efferent] fibers', 'cut end tests the [afferent] fibers', 'excites the [large, low-threshold fibers (baroreceptor afferents)]', 'also recruits [small, high-threshold fibers (chemoreceptor and pain afferents)]']);
card('D-C2', { html:
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Maneuver</th><th>BP</th><th>HR</th><th>RR</th><th>Why</th></tr></thead><tbody>' +
  '<tr><td>Compress the common carotid</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>{{Carotid-sinus pressure falls &#8594; baroreceptors unloaded}}</td></tr>' +
  '<tr><td>Pull / press the carotid sinus (carotid massage)</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>{{Baroreceptors fire more}} &#8594; &#8593;vagal, &#8595;sympathetic, respiratory inhibition</td></tr>' +
  '<tr><td>Same, after double vagotomy</td><td class="dn">&#8595;</td><td>no slowing</td><td class="dn">&#8595;</td><td>{{The vagus (HR effector) is cut}}; sympathetic withdrawal and phrenic inhibition remain</td></tr>' +
  '<tr><td>Bilateral vagotomy itself</td><td>&#8212;/&#8593;</td><td class="up">&#8593;</td><td>slower, deeper</td><td>Vagal tone lost; {{lung stretch afferents}} lost</td></tr>' +
  '<tr><td>Vagus, <b>peripheral</b> end</td><td class="dn">&#8595;</td><td class="dn">&#8595;&#8595; / arrest</td><td>&#8212;</td><td>{{ACh on the SA/AV node}} (vagal escape if prolonged)</td></tr>' +
  '<tr><td>Vagus, central end, <b>low</b> current</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>{{Aortic baroreceptor afferents}}</td></tr>' +
  '<tr><td>Vagus, central end, <b>high</b> current</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>{{Chemoreceptor afferents (aortic bodies)}} recruited</td></tr>' +
  '<tr><td>Aortic (depressor) nerve: low / high current</td><td>&#8595; / &#8593;</td><td>&#8595; / &#8593;</td><td>&#8595; / &#8593;</td><td>Large baroreceptor fibers / small chemoreceptor fibers</td></tr>' +
  '<tr><td>Sciatic nerve, central end, <b>low</b> current</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>&#8776; (lab trace)</td><td>{{Depressor reflex}}: &#8593;vagal (muscarinic at the SA node, slower AV conduction), &#8595;sympathetic</td></tr>' +
  '<tr><td>Sciatic nerve, central end, <b>high</b> current</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>{{Pressor (pain) reflex}}: sympathetic + phrenic drive</td></tr>' +
  '<tr><td>CO&#8322; inhalation</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td class="up">&#8593;</td><td>Central and peripheral chemoreceptors; locally CO&#8322; {{dilates}} vessels</td></tr>' +
  '<tr><td>Occlude the trachea (asphyxia)</td><td class="up">&#8593;</td><td>&#8593; then &#8595;</td><td>gasping</td><td>Hypoxia + hypercapnia on chemoreceptors</td></tr>' +
  '<tr><td>Head-down / head-up tilt</td><td>&#8593; / &#8595;, then back</td><td>&#8595; / &#8593;</td><td>&#8212;</td><td>Venous return changes first, then {{the baroreflex}} pulls BP back</td></tr></tbody></table></div>' });
newCard('D', { id: 'D-C3', title: 'Real tracings: carotid sinus and common carotid', src: 'Dog I', html:
  ROW(IMG('dog-carotidsinus.png', 'Exp 3, panel A: pulling the carotid sinus, low then high intensity.', D1W + ', Exp 3A'),
      IMG('dog-carotidsinus-b.png', 'Exp 3, panel B: electrical stimulation of the carotid sinus.', D1W + ', Exp 3B')) +
  IMG('dog-cca.png', 'Exp 4: compressing the common carotid artery.', D1W + ', Exp 4', 'wide') +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Control 160/120, HR 110, RR 14</th><th>BP</th><th>HR</th><th>RR</th><th>Why</th></tr></thead><tbody>' +
  '<tr><td>Pull the sinus, low &#8594; high intensity</td><td>{{&#8595; 150/110 &#8594; 140/100}}</td><td>{{&#8595; 105 &#8594; 90}}</td><td>{{&#8595; 12 &#8594; 10}}</td><td>Stretch = {{more baroreceptor firing}}; a stronger pull gives a bigger fall</td></tr>' +
  '<tr><td>Stimulate the sinus electrically</td><td>{{&#8595; 120/80}}</td><td>{{&#8595; 100}}</td><td>{{&#8595; 10}}</td><td>Fires the same afferents directly</td></tr>' +
  '<tr><td>Compress the common carotid</td><td>{{&#8593; 190/150}}</td><td>{{&#8593; 140}}</td><td>{{&#8593; 18}}</td><td>The sinus lies beyond the clamp, so its pressure {{falls}}: baroreceptors unloaded &#8594; sympathetic up, vagus down</td></tr></tbody></table></div>' +
  '<p class="note">Breathing slows with baroreceptor stimulation in the anesthetized dog. In patients, carotid massage raises {{vagal tone}}, slowing the heart and AV conduction (used to stop some supraventricular tachycardias).</p>' });
newCard('D', { id: 'D-C4', title: 'Real tracings: tilting the dog', src: 'Dog I', html:
  ROW(IMG('dog-headdown.png', 'Exp 1.1: head-down tilt.', D1W + ', Exp 1.1'), IMG('dog-headup.png', 'Exp 1.2: head-up tilt.', D1W + ', Exp 1.2')) +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Control 170/120, HR 108</th><th>(A) first</th><th>(B) after the reflex</th><th>Why</th></tr></thead><tbody>' +
  '<tr><td>Head down</td><td>{{BP &#8593; 185/135}}</td><td>{{BP 130/90, HR &#8595; 95}}</td><td>Blood runs toward the heart: venous return {{&#8593;}} &#8594; BP up &#8594; baroreceptors fire more &#8594; BP and HR pulled down</td></tr>' +
  '<tr><td>Head up</td><td>{{BP &#8595; 100/60}}</td><td>{{BP 150/95, HR &#8593; 120}}</td><td>Blood pools in the lower body: venous return {{&#8595;}} &#8594; BP down &#8594; baroreceptors unloaded &#8594; HR and vascular tone up</td></tr></tbody></table></div>' +
  '<p class="note">The breathing trace cannot be read during the tilt (&#8220;RR cannot be evaluated&#8221;). It is the same reflex as standing up in the BP lab: the {{carotid sinus}} senses the change first.</p>' });
newCard('D', { id: 'D-C5', title: 'Real tracing: carotid sinus after double vagotomy', src: 'Dog I', html:
  IMG('dog-vagotomy-cs.png', 'Exp 7.1: pulling, then electrically stimulating, the carotid sinus after both vagi are cut.', D1W + ', Exp 7.1', 'wide') +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>After double vagotomy: control 160/120, HR 110, RR 8</th><th>BP</th><th>HR</th><th>RR</th></tr></thead><tbody>' +
  '<tr><td>Pull the carotid sinus</td><td>{{&#8595; 120/80}}</td><td>{{110, unchanged}}</td><td>{{&#8595; 6}}</td></tr>' +
  '<tr><td>Stimulate it electrically</td><td>{{&#8595; 100/60}}</td><td>{{110, unchanged}}</td><td>{{&#8595; 6}}</td></tr></tbody></table></div>' +
  '<ul class="pts"><li>The vagi carry the {{efferent}} fibers that slow the heart, so the heart rate {{no longer falls}}.</li><li>BP still falls through {{sympathetic withdrawal}} (arteriolar and venous dilation), and breathing still slows ({{phrenic}} inhibition).</li><li>Vagotomy itself: control RR is only 8 (it was 14) and the breaths are deeper, because the {{lung stretch afferents}} in the vagus are gone.</li></ul>' });
newCard('D', { id: 'D-C6', title: 'Real tracing: central end of the sciatic nerve', src: 'Dog I', html:
  IMG('dog-sciatic.png', 'Exp 5: the sciatic nerve is cut, then its central end is stimulated with low and then high current.', D1W + ', Exp 5', 'wide') +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Control 150/110, HR 100, RR 12</th><th>BP</th><th>HR</th><th>RR</th><th>Reflex</th></tr></thead><tbody>' +
  '<tr><td><b>Low</b> current</td><td>{{&#8595; 130/90}}</td><td>{{&#8595; 96}}</td><td>{{12, about the same}}</td><td>{{Depressor}}: &#8593;vagal (M2 at the SA node, slower AV conduction), &#8595;sympathetic</td></tr>' +
  '<tr><td><b>High</b> current</td><td>{{&#8593; 200/170}}</td><td>{{&#8593; 120}}</td><td>{{&#8593; 56}}</td><td>{{Pressor (pain)}}: sympathetic drive, plus phrenic ACh at the diaphragm for the fast breathing</td></tr></tbody></table></div>' +
  '<p class="note">Low current excites the large, low-threshold afferents; high current recruits the small pain fibers as well. Exam keys write low current as &#8220;BP, HR and RR all decreased&#8221;, but in this recording the breathing hardly changed.</p>' });
card('D-C3', { id: 'D-C7', html:
  ROW(IMG('dog-splanchnic.png', 'Exp 2: splanchnic nerve stimulation, low then high current.', D1W + ', Exp 2'), IMG('dog-vagotomy-spl.png', 'Exp 7.2: splanchnic stimulation after double vagotomy.', D1W + ', Exp 7.2')) +
  '<ul class="pts"><li>Control 150/110, HR 104, RR 12 &#8594; BP {{&#8593; 180/150}}, then {{&#8593; 220/160}} at high current; HR 112 &#8594; {{80}} as the baroreflex answers; RR {{&#8595; 6 &#8594; 4}}.</li><li>Two pressor parts: {{&#945;1 constriction}} of the splanchnic vessels, then {{adrenal epinephrine}} (a second, slower rise).</li><li>When stimulation stops, BP dips <b>{{below baseline}}</b>: the leftover low epinephrine level acts on {{&#946;2}} (vasodilation).</li><li>After double vagotomy: BP 200/150 with HR {{&#8593; 120}}. There is no reflex bradycardia, and {{slower breathing}} is the only visible baroreflex effect.</li></ul>' +
  '<div class="tblwrap"><table class="tbl"><thead><tr><th>Drug</th><th>Main receptors</th><th>BP</th><th>HR</th><th>Notes</th></tr></thead><tbody>' +
  '<tr><td><b>Epinephrine, low dose</b></td><td>{{&#946;2 &gt; &#945;}}; &#946;1</td><td class="dn">&#8595;DBP, MAP &#8595;</td><td class="up">&#8593;</td><td>Muscle, liver, coronary vessels dilate; CVP falls as the heart pumps harder</td></tr>' +
  '<tr><td><b>Epinephrine, high dose</b></td><td>{{&#945;1 + &#946;1}}</td><td class="up">&#8593;&#8593;</td><td>&#8593; then reflex &#8595;</td><td>Reflex &#8595;RR ({{adrenaline apnea}}); renal vasoconstriction &#8595;urine</td></tr>' +
  '<tr><td>Norepinephrine</td><td>&#945;1, &#946;1</td><td class="up">&#8593;&#8593;</td><td class="dn">{{reflex &#8595;}}</td><td>Little &#946;2 effect</td></tr>' +
  '<tr><td>Phenylephrine</td><td>&#945;1</td><td class="up">&#8593;</td><td class="dn">{{reflex &#8595;}}</td><td>Raises afterload without direct inotropy</td></tr>' +
  '<tr><td>Isoproterenol</td><td>&#946;1, &#946;2</td><td class="dn">{{&#8595;}}</td><td class="up">&#8593;&#8593;</td><td>Pure &#946;</td></tr>' +
  '<tr><td>Acetylcholine</td><td>M (vessels via NO; M2 on heart)</td><td class="dn">&#8595;</td><td class="dn">&#8595;</td><td>Blocked by {{atropine}}</td></tr>' +
  '<tr><td>Nitroglycerin</td><td>NO donor, mainly {{veins}}</td><td class="dn">&#8595;</td><td class="up">reflex &#8593;</td><td>&#8595;venous return, &#8595;preload, &#8595;CVP</td></tr></tbody></table></div>' +
  '<p class="note">After vagotomy there is no reflex bradycardia: drugs that raise BP now also raise HR. A denervated heart still responds to {{circulating catecholamines}}.</p>' });
q('D12', { flag: 'The AC81 stem names only BP and HR, yet each option has three values. In the Dog I tracing (D-C6) low current lowered BP and HR while RR stayed about the same. C is the only option with BP and HR both decreased, and it matches the AC81 key.',
  ex: 'Low current = depressor reflex: BP and HR fall (more vagal, less sympathetic output). High current = pressor (pain) reflex: BP, HR and RR all rise.' });
order('D', ['D-C1', 'D-C2', 'D1', 'D2', 'D-C3', 'D3', 'D4', 'D5', 'D6', 'D7', 'D-C4', 'D8', 'D-C5', 'D9', 'D10', 'D11', 'D-C6', 'D12', 'D13', 'D14', 'D15', 'D-C7', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21', 'D22']);

/* ======================= H · Dog II ======================= */
cz('H-C1', ['&#8593;SV, &#8593;CO ([Frank&#8211;Starling])', 'HR may rise ([atrial stretch, Bainbridge])', 'or fall ([baroreflex])', 'so [Hct falls]', 'Pressure in the veins [upstream] (head, arms) rises', 'blood pools in veins &#8594; [&#8595;preload]', 'the heart cannot fill, so [CVP rises while venous return falls]', '&#8593;total SV, [wide pulse pressure, collapsing pulse]', 'afterload; [pressure backs up]', '&#8593;LV afterload; [weak, delayed femoral pulse]', 'does not always mean [a full circulation]']);
newCard('H', { id: 'H-C2', title: 'Real tracings: clamping the venae cavae', src: 'Dog II', html:
  ROW(IMG('dog2-svc.png', 'Exp 2, panel A: superior vena cava occlusion.', D2W + ', Exp 2A'), IMG('dog2-ivc.png', 'Exp 2, panel B: inferior vena cava occlusion.', D2W + ', Exp 2B')) +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Control 100/50 (PP 50), HR 88, CVP 2.5</th><th>BP (PP)</th><th>HR</th><th>CVP (cmH&#8322;O)</th></tr></thead><tbody>' +
  '<tr><td>Clamp the SVC</td><td>{{&#8595; 60/30 (30)}}</td><td>{{&#8593; 92}}</td><td>{{&#8595; 2.0}}</td></tr>' +
  '<tr><td>Clamp the IVC</td><td>{{&#8595;&#8595; 40/20 (20)}}</td><td>{{&#8593; 96}}</td><td>{{&#8595; 1.5}}</td></tr></tbody></table></div>' +
  '<ul class="pts"><li>Less blood reaches the right atrium: {{venous return}}, RA pressure (CVP), preload, SV and CO all fall, so BP and pulse pressure fall.</li><li>The baroreflex answers with &#8593;HR, &#8593;{{contractility}} and &#8593;{{TPR}}.</li><li>The IVC effect is bigger because the IVC carries {{most of the venous return}} (the whole lower body).</li><li>Venous pressure {{upstream}} of the clamp (head and arms for the SVC) rises. On a PV loop, the end-diastolic point moves {{left}}.</li></ul>' });
card('H-C2', { id: 'H-C3', html:
  IMG('dog2-tamponade.png', 'Exp 1: raising intrapericardial pressure through a cannula from a water manometer.', D2W + ', Exp 1', 'wide') +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th></th><th>BP (PP)</th><th>HR</th><th>CVP (cmH&#8322;O)</th></tr></thead><tbody>' +
  '<tr><td>Control</td><td>100/50 (50)</td><td>88</td><td>2</td></tr>' +
  '<tr><td>Intrapericardial pressure raised</td><td>{{&#8595;&#8595; 20/10 (10)}}</td><td>{{80}}</td><td>{{&#8593; 3}}</td></tr></tbody></table></div>' +
  '<ul class="pts"><li>Fluid in the pericardial sac squeezes the heart during {{diastole}}. The chambers cannot fill: <b>venous return {{falls}}</b>, yet the pressure in the RA and veins <b>{{rises}}</b> (CVP up).</li><li>Preload, SV and CO fall &#8594; BP falls and pulse pressure {{narrows}}. Afterload, judged by aortic pressure, also {{falls}}.</li><li>Expected: reflex {{tachycardia}}. In this recording HR fell slightly (88 &#8594; 80), and the lab sheet asks you to explain why, so do not assume every trace follows the textbook.</li><li>Pulsus paradoxus: inspiration fills the right heart, the septum bulges left, and SBP drops by more than {{10 mmHg}}.</li><li>Treatment: remove the fluid ({{pericardiocentesis}}).</li></ul>' });
card('H-C3', { id: 'H-C4', title: 'Aortic regurgitation', html:
  IMG('dog2-ar.png', 'Exp 6: a stylet passed down the left common carotid destroys the aortic valve.', D2W + ', Exp 6', 'wide') +
  '<div class="two">' + IMG('ac80-pvloop.png', 'The LV pressure&#8211;volume loop from the AC80 question.', 'AC80 exam figure') +
  '<ul class="pts"><li>In the dog: control 90/45 (PP 45), HR 110 &#8594; after the valve is destroyed {{100/40 (PP 60)}}, HR 100, CVP {{not changed}}.</li><li>Loop: B = end-diastole (mitral closes, volume I = {{EDV}}) &#8594; C = aortic valve opens &#8594; D = peak pressure &#8594; E = aortic valve closes on the ESPVR &#8594; A = mitral opens (volume H = {{ESV}}) &#8594; filling back to B.</li><li><b>AR</b>: blood leaks back from the aorta in diastole, so the LV fills from two sides: <b>EDV (I) moves {{right}}</b>, total SV {{rises}}, SBP rises, DBP {{falls}} (C moves down), pulse pressure {{widens}}, collapsing pulse. There is no true isovolumetric relaxation.</li><li>Pulse pressure overestimates useful flow in AR: part of each stroke runs back into the LV, so {{effective}} forward SV is lower.</li></ul></div>' });
q('H17', { fig: IMG('ac80-pvloop.png', '', 'AC80 exam figure'), flag: null });
newCard('H', { id: 'H-C5', title: 'Real tracings: clamping the aorta (stenosis and coarctation models)', src: 'Dog II', html:
  ROW(IMG('dog2-ascaorta.png', 'Exp 3.1: occluding the ascending aorta; BP measured at the carotid.', D2W + ', Exp 3.1'), IMG('dog2-aorticarch.png', 'Exp 3.2: occluding the aortic arch; BP measured at the carotid.', D2W + ', Exp 3.2')) +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Occlusion</th><th>Carotid BP</th><th>HR</th><th>CVP</th><th>Models</th></tr></thead><tbody>' +
  '<tr><td>Ascending aorta (the carotid branches off <b>after</b> the block)</td><td>{{&#8595;&#8595; 100/50 &#8594; 30/20}}</td><td>90 &#8594; 70</td><td>{{&#8593; 2.5 &#8594; 3.5}}</td><td>Severe {{aortic stenosis}}: LV pressure and afterload up, forward flow down, pressure backs up</td></tr>' +
  '<tr><td>Aortic arch (the carotid branches off <b>before</b> the block)</td><td>{{&#8593; 90/40 &#8594; 130/80}}</td><td>96 &#8594; 90</td><td>2.5 &#8594; 3.0</td><td>{{Coarctation}}: high before the narrowing, low after it</td></tr></tbody></table></div>' +
  '<ul class="pts"><li><b>Coarctation</b> distal to the left subclavian: BP {{high}} in the arms and carotids, {{low and delayed}} in the legs (femoral), LV afterload {{up}}.</li><li><b>Aortic stenosis</b>: high LV pressure and afterload, a small slow pulse (parvus et tardus); pressure can back up to {{raise CVP}}.</li><li>HR fell with the ascending-aorta clamp even though carotid BP fell; the lab sheet asks why. Another trace that does not follow the simple baroreflex story.</li></ul>' });
newCard('H', { id: 'H-C6', title: 'Real tracings: aortic nerve and right vagus', src: 'Dog II', html:
  ROW(IMG('dog2-aorticnerve.png', 'Exp 4: aortic nerve stimulation, (A) low and (B) high current.', D2W + ', Exp 4'), IMG('dog2-rvagus.png', 'Exp 5: right vagus, peripheral cut end, electrical stimulation.', D2W + ', Exp 5')) +
  '<div class="tblwrap"><table class="tbl dogtbl"><thead><tr><th>Control 90/40, HR 96</th><th>BP</th><th>HR</th><th>Why</th></tr></thead><tbody>' +
  '<tr><td>Aortic nerve, <b>low</b> current (A)</td><td>{{&#8595; 65/20}}</td><td>{{&#8595; 80}}</td><td>Large {{baroreceptor}} fibers: depressor</td></tr>' +
  '<tr><td>Aortic nerve, <b>high</b> current (B)</td><td>{{&#8593; 135/85}}</td><td>{{&#8593; 110}}</td><td>Small {{chemoreceptor}} fibers join in: pressor</td></tr>' +
  '<tr><td>Right vagus, peripheral end</td><td>{{&#8595;&#8595; 20/0}}</td><td>{{no heartbeat}}</td><td>ACh on the {{SA node}}: arrest</td></tr></tbody></table></div>' +
  '<ul class="pts"><li>In the dog the aortic nerve carries afferents from the aortic-arch baroreceptors and the aortic bodies, and runs in the left vagosympathetic trunk to the brainstem.</li><li>So aortic-nerve stimulation can push BP and RR {{either way}}, depending on the current.</li><li>Right vagus &#8594; SA node &#8594; rate; left vagus &#8594; AV node &#8594; conduction. The turtle lab showed the same split.</li></ul>' });
card('H-C4', { id: 'H-C7', html:
  IMG('dog2-afvf.png', 'Exp 7: stimulating the atrium (atrial fibrillation), then the ventricle (ventricular fibrillation).', D2W + ', Exp 7', 'wide') +
  '<div class="cols2"><div class="mini"><h4>Atrial fibrillation</h4><ul><li>In the dog: control 100/40, HR 100 &#8594; during AF BP {{125/20}} (PP 105), HR {{50, irregular}}; back to 100/40, HR 100 (regular) once the stimulus stops. CVP stays 2.5.</li><li>Starts in the <b>{{atria}}</b>, most often around the {{pulmonary veins}} in the left atrium; the AV node only passes on irregular impulses</li><li>ECG: no P waves, irregularly irregular RR, usually <b>{{narrow}}</b> QRS, often fast</li><li>Exam: irregular pulse, <b>{{pulse deficit}}</b>, no a wave in the JVP, no S4</li></ul></div>' +
  '<div class="mini art"><h4>Ventricular fibrillation</h4><ul><li>In the dog: ventricle stimulation &#8594; the BP trace falls to a flat line with {{no heartbeat}}, and unlike AF it does {{not stop}} when the stimulus stops</li><li>Ventricles quiver without a coordinated beat</li><li>No stroke volume: <b>{{no palpable pulse}}</b>, BP falls toward zero</li><li>Needs immediate {{defibrillation}}</li></ul></div></div>' });
order('H', ['H-C1', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H-C2', 'H7', 'H8', 'H9', 'H10', 'H11', 'H12', 'H-C3', 'H13', 'H14', 'H15', 'H16', 'H17', 'H-C4', 'H18', 'H19', 'H20', 'H21', 'H-C5', 'H22', 'H23', 'H-C6', 'H24', 'H25', 'H26', 'H27', 'H-C7', 'H28']);
