/* English recording script for the tutor deck: 5-video plan, per-section 80% summary, and a SAY line per concept card / core question.
   Keys match deck IDs. Recovered from the first tutor-notes version (commit 9dbf163). */
window.TUTOR_SCRIPT = {
 "plan": [
  [
   "Video 1",
   [
    "R"
   ],
   "Regulation lecture. Long: split at R-C7 into 1a (neural + hormones) and 1b (local, kidney, heart, hypovolemia).",
   "45&#8211;50 min"
  ],
  [
   "Video 2",
   [
    "F",
    "T"
   ],
   "Frog heart and turtle vagus labs: extrasystole, Stannius, all-or-none, vagus, nicotine, heart block.",
   "30&#8211;35 min"
  ],
  [
   "Video 3",
   [
    "B",
    "M"
   ],
   "Blood pressure lab and microcirculation lab.",
   "30&#8211;35 min"
  ],
  [
   "Video 4",
   [
    "P"
   ],
   "Physical examination lab: heart sounds, murmurs, pulses, JVP.",
   "25&#8211;30 min"
  ],
  [
   "Video 5",
   [
    "D",
    "H"
   ],
   "Dog labs I and II: reflexes, drugs, hemodynamic disturbances.",
   "30&#8211;35 min"
  ]
 ],
 "sec": {
  "R": {
   "part": "Video 1",
   "time": "45&#8211;50 min",
   "open": "This part is the lecture. Every question comes back to one equation and three time scales, so learn those first and the rest is pattern-matching.",
   "u": [
    "<b>One equation.</b> MAP = HR &#215; SV &#215; TPR. Arterioles are the main resistance vessels (R &#8733; 1/r&#8308;), so they are the main target of antihypertensive drugs.",
    "<b>Three speeds.</b> Seconds: baroreceptor, chemoreceptor and CNS ischemic reflexes. Minutes&#8211;hours: Ang II vasoconstriction, stress relaxation, capillary fluid shift. Hours&#8211;days: kidney (pressure natriuresis, aldosterone, ADH, thirst) with infinite gain. The baroreflex resets in 1&#8211;2 days, so it cannot set long-term BP.",
    "<b>Medullary centers.</b> NTS receives CN IX and X. The vasoconstrictor area (RVLM) fires all the time and creates sympathetic vasoconstrictor tone. The vagal nuclei (dorsal motor nucleus, nucleus ambiguus) slow the heart. The adrenal medulla adds epinephrine via the splanchnic nerves.",
    "<b>Baroreceptor reflex.</b> Stretch endings in the carotid sinus (Hering&#8217;s nerve &#8594; IX) and aortic arch (X) &#8594; NTS. BP up &#8594; more firing &#8594; RVLM inhibited (sympathetic down) and vagal output up &#8594; &#8595;HR, &#8595;contractility, arteriolar and venous dilation. BP down &#8594; fewer impulses &#8594; the opposite. Works from about 60 to 180 mmHg, most sensitive near 100, and responds to the rate of change.",
    "<b>Chemoreceptors and CNS ischemia.</b> Carotid and aortic <b>bodies</b> sense &#8595;PO&#8322;, &#8593;PCO&#8322;, &#8593;H&#8314;. They matter when MAP is below ~80 and also drive breathing. Below ~60 the vasomotor center itself becomes ischemic &#8594; huge sympathetic discharge &#8594; systemic hypertension. Cushing reaction (&#8593;ICP): hypertension + bradycardia + irregular breathing.",
    "<b>Vasoactive substances.</b> Constrictors: NE and epinephrine on &#945;1, Ang II, ADH (V1, the most potent), endothelin-1 (endothelium), thromboxane A&#8322;. Dilators: NO (shear stress, cGMP, also anti-platelet), prostacyclin, histamine and bradykinin (injury: dilation + leaky capillaries), ANP, low-dose epinephrine on &#946;2, and metabolites (adenosine, CO&#8322;, H&#8314;, K&#8314;, lactate).",
    "<b>Local control.</b> Metabolic: more work &#8594; more metabolites &#8594; dilation (active hyperemia in exercise, reactive hyperemia after occlusion). Myogenic: more pressure &#8594; stretch &#8594; constriction. Together they give autoregulation = constant flow despite changing pressure (kidney is best). Long-term: months of high demand &#8594; angiogenesis; chronic blockage &#8594; collateral circulation.",
    "<b>Kidney and RAAS.</b> &#8595;renal perfusion pressure, &#8595;NaCl at the macula densa or &#8593;renal sympathetic (&#946;1) &#8594; renin &#8594; Ang I &#8594; ACE &#8594; Ang II &#8594; arteriolar constriction, aldosterone (Na&#8314; retention), ADH and thirst, proximal Na&#8314; reabsorption. CKD: &#8595;GFR &#8594; salt and water retention &#8594; volume hypertension. Heart failure: renin&#8211;Ang II&#8211;aldosterone up (ANP is high but loses). ACE inhibitor: less Ang II and aldosterone, more bradykinin (cough).",
    "<b>The heart side.</b> &#946;1 &#8594; cAMP &#8594; &#8593;If (funny) and &#8593;ICa-L &#8594; steeper phase 4 &#8594; &#8593;HR; more Ca&#178;&#8314; &#8594; stronger beat, so ESV falls and SV/EF rise at about the same EDV. M2 (vagus) &#8594; &#8593;IK-ACh &#8594; hyperpolarized and flatter phase 4 &#8594; &#8595;HR. An &#945;1 agonist raises afterload without changing contractility.",
    "<b>Denervated (transplanted) heart.</b> No vagal tone, so resting HR is high. On exertion HR rises late and less, through circulating catecholamines; SV rises through Frank&#8211;Starling and lower afterload. A &#946;-agonist works; atropine does nothing.",
    "<b>Hypovolemia as one story.</b> Direct: &#8595;SV &#8594; weak pulse, low BP, narrow pulse pressure. Seconds: baroreceptor firing <b>falls</b> (less IX/X traffic) &#8594; sympathetic up &#8594; tachycardia (steeper phase 4), &#8593;SVR, cold pale skin; chemoreceptors add tachypnea. Minutes: interstitial fluid enters plasma (Hct falls), Ang II. Days: thirst, ADH, aldosterone, kidney."
   ],
   "say": {
    "R-C1": "Before any reflex: MAP equals HR times SV times TPR. For every question I&#8217;ll ask which of the five handles moved: heart rate, contractility, venous tone, arteriolar tone or volume.",
    "R1": "Immediate means nervous, and the baroreceptor reflex is the classic answer. The chemoreceptor reflex is fast too, but it only matters below 80 mmHg, and sympathetic stimulation is the effector, not the mechanism.",
    "R-C2": "Three gears. Seconds: nerves. Minutes to hours: angiotensin vasoconstriction, stress relaxation, capillary fluid shift. Hours to days: the kidney. The baroreflex resets in one to two days.",
    "R2": "Five days of diarrhea: by now the kidney is doing most of the work by keeping salt and water.",
    "R-C3": "Who gives the orders: NTS listens, RVLM drives sympathetic tone, the vagal nuclei slow the heart, the adrenal medulla adds epinephrine.",
    "R-C4": "Walk the arc left to right: stretch, carotid sinus on nine and aortic arch on ten, NTS, then vagus up and sympathetic down, and BP comes back. Now run it backwards for a fall in BP. On the slide, arrow one is the sensory arm, two and three are the vagal and sympathetic arms, four goes to the adrenal medulla. Sinus is baro, body is chemo.",
    "R4": "Which input makes the sympathetic quieter? Only the stretch receptor. Everything else on the list excites it.",
    "R6": "The classic swap: carotid body versus carotid sinus.",
    "R7": "BP falls, baroreceptors fire less, sympathetic goes up. Resistance rises, it doesn&#8217;t fall.",
    "R-C5": "Use the pressure ladder in the table: baroreceptors work from 60 to 180, chemoreceptors take over below 80, and below 60 the brainstem itself is ischemic. Cushing triad: hypertension, bradycardia, irregular breathing.",
    "R8": "The CNS ischemic response is the strongest sympathetic push the body has, so systemic hypertension.",
    "R-C6": "Sort the list into constrictors and dilators. The favourites: ADH is the most potent constrictor, endothelin comes from endothelium, NO comes from shear stress and also blocks platelets, histamine comes from injured tissue.",
    "R10": "ADH is the only constrictor in the list.",
    "R14": "Shear stress means NO, every time.",
    "R18": "Tissue injury, mast cells, histamine: red, swollen and leaky.",
    "R-C7": "Two ideas: metabolic, more work gives more flow; myogenic, more pressure gives constriction. Together they hold flow steady from about 70 to 175 mmHg: that is autoregulation, best in the kidney. Months of demand grow new vessels; a chronic block grows collaterals.",
    "R19": "CO2 dilates, most strongly in the brain. High O2 constricts.",
    "R22": "Exercising muscle is metabolic control, active hyperemia.",
    "R24": "Autoregulation keeps flow constant when pressure changes. Flow is supposed to change with demand.",
    "R26": "Months of workload: new vessels, hypervascularization. Collateral circulation is the answer for a chronic blockage.",
    "R-C8": "RAAS in one breath: low pressure, low NaCl or sympathetic, then renin, angiotensin one, ACE, angiotensin two: constrict, aldosterone, ADH, thirst. Then three stories: CKD, heart failure, ACE inhibitor.",
    "R30": "CKD: fewer nephrons, lower GFR, the kidney can&#8217;t get rid of salt, so volume and BP go up.",
    "R31": "Heart failure: the kidney sees low flow and thinks the body is dry, so renin goes up. ANP is high, not low.",
    "R32": "ACE inhibitor: less angiotensin two, less aldosterone. Bradykinin builds up, which is the cough.",
    "R33": "Find the wrong word in each option: angiotensinogen, free water, ADH with sodium. Only the baroreceptor tachycardia is clean.",
    "R-C9": "This is the SA-node potential from the lab slide. Phase four creeps up on the funny current. Sympathetic makes that slope steeper, so threshold comes sooner; vagal starts it more negative and flatter, so the next beat comes later.",
    "R34": "Beta-one, cAMP, funny channel. That is the answer they want.",
    "R38": "Sympathetic squeezes harder: ESV falls, EDV stays about the same, so SV rises.",
    "R-C10": "Transplanted heart: no nerves. Resting HR is high because there&#8217;s no vagal tone, and exercise HR rises late, through adrenal catecholamines.",
    "R41": "No nerves means no vagal withdrawal. Everything else still works.",
    "R-C11": "Now one patient for the whole topic: direct effect, then seconds, minutes to hours, and days.",
    "R45": "Tachycardia from sympathetic drive means a steeper diastolic depolarization.",
    "R46": "Only SVR goes up. Everything about filling and output goes down.",
    "R47": "Afferent traffic goes down in hypotension. That drop is what triggers the reflex.",
    "R48": "The direct effect is the weak pulse. Tachycardia, tachypnea and cold skin are compensation."
   }
  },
  "F": {
   "part": "Video 2",
   "time": "15&#8211;18 min",
   "open": "Frog lab: four experiments that show who leads the heart, when it can be re-excited, and why bigger shocks don&#8217;t give bigger beats.",
   "u": [
    "<b>Frog heart.</b> Sinus venosus (pacemaker = SA node) &#8594; atria &#8594; ventricle. The crescentic line on the back marks the SA junction. No coronary vessels, so ligatures do not cause ischemia. Systole looks pale, diastole darker; rate about 56/min.",
    "<b>Two action potentials.</b> Pacemaker: phase 4 slow rise on the funny current (If) &#8594; phase 0 by L-type Ca&#178;&#8314; &#8594; phase 3 by K&#8314;. Ventricle: phase 0 INa, 1 Ito, 2 plateau (ICa &#8776; IK), 3 IK, 4 rest at &#8722;90 (IK1).",
    "<b>Why SA leads.</b> It fires fastest (70&#8211;80 vs AV 40&#8211;60 vs Purkinje 20&#8211;40) and overdrive-suppresses the rest. Location is never the reason. Conduction is slowest in the AV node (relay, ~0.1 s delay) and fastest in His&#8211;Purkinje.",
    "<b>Refractory periods.</b> ARP runs from phase 0 to about &#8722;50 mV in phase 3 and covers the whole contraction, so no tetanus. RRP follows: a stronger stimulus is needed.",
    "<b>Extrasystole.</b> Shock in systole: nothing (ARP). Shock in diastole: premature beat + compensatory pause, because the next SA impulse lands in the ARP of the extrasystole. Amplitude depends on preload (later in diastole = more filling = bigger); the beat after the pause is strongest. On a Frank&#8211;Starling plot an extrasystole is the same curve at a lower EDV.",
    "<b>Stannius ligatures.</b> Ligature I (SA junction): atria and ventricle stop, then restart slower: automaticity of a latent pacemaker. Ligature II (AV junction): the ventricle stops. In humans with SA failure the AV node usually takes over: ~40&#8211;60/min, narrow QRS.",
    "<b>All-or-none.</b> Subthreshold: nothing. Threshold and anything above it: the same full contraction. Force changes only through preload, contractility, temperature, pH and ions."
   ],
   "say": {
    "F-C1": "This is Figure 9-1 from the manual. Fill the blanks with me: A, the downstroke, is diastole; B, the upstroke, is systole. Use that on every tracing in this lab, including the AC81 question coming up.",
    "F1": "Quick true/false warm-up.",
    "F-C2": "Two real slides of the action potential. The ventricular one rests at minus ninety and has a plateau; the pacemaker one never sits flat, because phase four creeps up on the funny current. Then name the seven stops on the conduction slide before you reveal them.",
    "F2": "Location is never the reason. Firing fastest is.",
    "F-C3": "Left slide: ARP, then RRP, on the action potential. Right slide: the twitch sits almost entirely inside the ARP, so the heart can&#8217;t be tetanized.",
    "F7": "The ARP isn&#8217;t just phase zero. It runs through the plateau into phase three.",
    "F9": "Here is the whole extrasystole experiment as one question.",
    "F-C4": "This is Figure 9-2. Shocks one, two and three land in systole: nothing happens. Four, five and six land in diastole: an extra beat, then a long flat pause. The later the shock in diastole, the bigger the extra beat.",
    "F10": "It&#8217;s the SA impulse that falls into the ARP, not the ectopic one.",
    "F13": "Different amplitudes mean different preload: a later shock means more filling.",
    "F14": "Same curve, less filling, so C.",
    "F15": "Read it like Figure 9-1. B is on an upstroke and C at the top: both systole, so nothing, however strong. D is subthreshold, so nothing. A is on the downstroke, diastole, and it is the only one that gives an extra beat. The AC81 key says A.",
    "F-C5": "Ligature one: atria and ventricle stop, then the atria wake up at 32. That&#8217;s automaticity of a latent pacemaker. Ligature two: the ventricle stays still.",
    "F17": "The atria restart on their own: automaticity.",
    "F18": "Fifty a minute with a narrow QRS is the AV node taking over.",
    "F-C6": "Figure 9-3: the shocks get bigger, the beats don&#8217;t. That&#8217;s all-or-none, and the minimum that works is threshold.",
    "F19": "Threshold."
   }
  },
  "T": {
   "part": "Video 2",
   "time": "15&#8211;18 min",
   "open": "Turtle lab: the vagus reaches the heart through a ganglion on the heart itself, and nicotine proves where it is.",
   "u": [
    "<b>Wiring.</b> Vagus (preganglionic, ACh on <b>nicotinic</b>) &#8594; ganglion at the crescentic line &#8594; postganglionic (ACh on <b>M2</b>) &#8594; SA and AV node. Sympathetic: T1&#8211;T4 &#8594; stellate/cervical ganglia &#8594; NE on &#946;1.",
    "<b>Effects.</b> Sympathetic: chronotropy, inotropy and dromotropy up, AP duration down. Parasympathetic: rate and conduction down strongly, force down a little, AP duration up (lab slide). Vagal tone exists at rest.",
    "<b>M2 mechanism.</b> More K&#8314; efflux (IK-ACh) &#8594; more negative membrane and a flatter phase 4 &#8594; slower rate.",
    "<b>Right vs left vagus.</b> Right &#8594; SA node &#8594; slower rate, A:V stays 1:1, then arrest. Left &#8594; AV node &#8594; A:V &gt; 1:1 (block), then arrest. Cause: unequal fiber distribution. Same pattern in humans.",
    "<b>Nicotine.</b> Low dose stimulates the ganglion &#8594; HR 46 &#8594; 40. High dose &#8594; depolarization block: HR 50 (resting vagal tone lost), vagal stimulation no longer works, crescentic-line stimulation still stops the heart. So the synapse is at the crescentic line. Atropine blocks M2, so neither route slows the heart.",
    "<b>Heart block.</b> Gaskell clamp: light &#8594; dropped ventricular beats (A:V &gt; 1:1), tight &#8594; ventricle stops. Humans: 1st degree (PR &gt; 0.2 s), 2nd (some dropped beats), 3rd (AV dissociation, escape rhythm 40&#8211;60 junctional or 20&#8211;40 ventricular). Blocks can occur in healthy people (vagal tone, drugs)."
   ],
   "say": {
    "T-C1": "Trace both wires on the slide. Vagus: long preganglionic, ganglion on the heart, short postganglionic, ACh on M2. Sympathetic: ganglion near the spine, long postganglionic, norepinephrine on beta-one. Then fill the four-row effect table.",
    "T1": "ACh opens K+ channels, so the membrane gets more negative.",
    "T-C2": "Figures 9-4 and 9-5. Right vagus goes to the SA node: the rate falls, atria and ventricles stay one to one, then the heart stops. Left vagus goes to the AV node: the atria keep going and the ventricle drops beats.",
    "T5": "Not equivalent. Right is rate, left is conduction.",
    "T6": "Compression stimulates the nerve. Left vagus means AV node, so heart block.",
    "T-C3": "Figures 9-6 to 9-8, then this table: that is the whole experiment. Low dose stimulates the ganglion, so the heart slows. High dose blocks it: the heart speeds up a little because resting vagal tone is gone, vagal stimulation can&#8217;t get through, but the crescentic line still works because we stimulate below the block.",
    "T9": "Ganglion means nicotinic. Muscarinic is at the node.",
    "T10": "Low dose is plain stimulation of nicotinic receptors.",
    "T11": "High dose is a depolarization block.",
    "T13": "Low dose doesn&#8217;t block anything, so both still slow the heart.",
    "T14": "Compare with baseline: 46, then 50, then still 50. Increase, increase.",
    "T15": "Which nicotine trick speeds the heart up? The high dose.",
    "T-C4": "Figure 9-9. Clamp harder and more ventricular beats drop out, until the ventricle stops. Map it onto first, second and third degree block.",
    "T20": "P waves and QRS complexes ignore each other: third-degree block."
   }
  },
  "B": {
   "part": "Video 3",
   "time": "18&#8211;20 min",
   "open": "BP lab: how the cuff works, why readings go wrong, and what posture and exercise do.",
   "u": [
    "<b>Numbers.</b> PP = SBP &#8722; DBP; MAP &#8776; DBP + PP/3. Back-calculate with DBP = MAP &#8722; PP/3.",
    "<b>Methods.</b> Direct = intra-arterial line (ICU, continuous). Indirect = auscultatory (noninvasive gold standard), palpatory (SBP only), oscillometric (automatic; maximal oscillation = MAP).",
    "<b>Technique.</b> No caffeine, smoking, food or exercise for 30 min; empty bladder; seated, back supported, feet flat, no talking. Arm supported at heart level. Bladder width ~40% and length 80&#8211;100% of arm circumference; lower edge ~2.5 cm above the elbow crease.",
    "<b>Two steps.</b> Palpate first (inflate until the radial pulse disappears + 20&#8211;30 mmHg; pulse returns = SBP), then auscultate: phase I = SBP, phase V = DBP (phase IV in children, pregnancy, high output). Palpating first avoids the auscultatory gap.",
    "<b>Errors.</b> Small or loose cuff, arm below heart, talking, caffeine, smoking, full bladder, anxiety &#8594; falsely <b>high</b>. Large or tight cuff, arm above heart, deflating too fast &#8594; falsely <b>low</b>.",
    "<b>Limbs.</b> Supine leg SBP is higher than arm SBP (pulse-wave amplification), so femoral SBP &gt; aortic SBP. Check the other arm when one is high; coarctation gives arms &gt; legs.",
    "<b>Posture.</b> Standing pools blood in the legs &#8594; baroreceptor firing falls &#8594; HR up, TPR up; CO stays 20&#8211;30% lower. Lying down raises baroreceptor firing &#8594; HR falls.",
    "<b>Exercise.</b> SBP up, DBP about the same, PP wider. Sudden stop &#8594; loss of the muscle pump &#8594; post-exercise syncope. Heavy isometric lifting is avoided in hypertension. Low BP alone is not shock."
   ],
   "say": {
    "B-C1": "Three numbers and one formula. MAP is DBP plus a third of the pulse pressure, because diastole lasts about twice as long.",
    "B1": "A cuff on the outside is indirect. Direct means a catheter in the artery.",
    "B4": "Say the arithmetic out loud: pulse pressure 54, a third is 18, plus 72 gives 90.",
    "B9": "Work backwards: DBP is 80 minus 20, so 60; SBP is 60 plus 60, so 120.",
    "B-C2": "This is Figure 1 from the BP manual and its prep list. Cuff rule: width 40 percent, length 80 to 100 percent of the arm. Always palpate before you listen.",
    "B-C3": "Five phases: tapping, swishing, crisp tapping, muffling, silence. First tapping is SBP; silence is DBP in adults; muffling is used when the sounds never stop.",
    "B11": "Phase one.",
    "B-C4": "Left column reads high, right column reads low. Small or loose reads high; large or tight reads low.",
    "B14": "Tight reads low, by the course key.",
    "B15": "Deflating too fast skips past the systolic level.",
    "B16": "A big cuff reads low.",
    "B-C5": "Lying down, legs read higher than arms because of pulse amplification. If they ask which artery has the highest systolic pressure: femoral, not aorta.",
    "B21": "False. Legs are higher.",
    "B-C6": "Stand up: blood pools, less stretch, the reflex kicks in. HR goes up, and CO still stays lower.",
    "B23": "Blood pools in the legs.",
    "B-C7": "Exercise: SBP up, DBP flat, pulse pressure wide.",
    "B28": "True."
   }
  },
  "M": {
   "part": "Video 3",
   "time": "12&#8211;15 min",
   "open": "Microcirculation lab: five things we did to our own arms.",
   "u": [
    "<b>Arterial occlusion (200 mmHg, 5 min).</b> Pale, cold, pulseless, painful (ischemic nerves, K&#8314;, H&#8314;, lactate, bradykinin), and <b>no edema</b> because nothing flows in. After release: reactive hyperemia, bright red and warm, from accumulated metabolites + O&#8322; lack + myogenic relaxation + NO; deoxyhemoglobin falls fast.",
    "<b>Venous occlusion (30&#8211;40, then 80&#8211;90 mmHg).</b> Blood gets in but cannot get out: engorged veins, bluish-purple skin, tense fingertips, tingling, more filtration and swelling. The veins distend passively; arterioles do not dilate.",
    "<b>Skin stroking.</b> Light stroke &#8594; white reaction (mechanical expulsion of blood). Firm stroke &#8594; triple response: red line (local dilation), flare (axon reflex: antidromic C-fiber impulses release substance P/CGRP; not a spinal reflex), wheal (leaky capillaries from histamine). Bee stings and insect bites = increased capillary permeability.",
    "<b>Temperature.</b> Warm water: red skin, engorged veins (dilation, AV shunts open). Ice water 5&#8211;10 &#176;C: veins flatten, the skin is painful but still red (cold hemoglobin keeps its O&#8322;, plus cold-induced vasodilation).",
    "<b>Gravity.</b> Raised arm: pale, veins collapse (pressure ~0). Hanging arm: red-purple, engorged. Standing quietly: foot veins ~ +90 mmHg, dural sinuses negative."
   ],
   "say": {
    "M-C1": "Five experiments, one table. We&#8217;ll take them in order.",
    "M-C2": "During the 200 mmHg cuff: pale, cold, pulseless, painful, but no edema. After release: bright red and warm. That&#8217;s reactive hyperemia.",
    "M1": "Edema needs blood coming in, and nothing comes in at 200.",
    "M3": "Warm blood rushes in.",
    "M4": "Fresh oxygen floods in, so deoxyhemoglobin drops.",
    "M-C3": "Venous cuff: blood gets in but can&#8217;t get out. The veins stretch passively.",
    "M6": "Vasodilation is the odd one out.",
    "M-C4": "Light stroke: white line. Firm stroke: red line, flare, wheal. The flare is the axon reflex: the nerve talks to itself, not through the spinal cord.",
    "M7": "White reaction.",
    "M9": "Redness around the line is the flare: antidromic C fibers.",
    "M12": "A sting makes capillaries leaky.",
    "M-C5": "Warm water: red skin, full veins. Ice water: still red, but flat veins, and it hurts.",
    "M14": "Red and flattened, left arm only.",
    "M-C6": "Arm up is pale, arm down is purple. The skull sinuses are the only veins with negative pressure.",
    "M16": "The dural sinuses."
   }
  },
  "P": {
   "part": "Video 4",
   "time": "25&#8211;30 min",
   "open": "Heart exam lab: almost every question is timing plus location.",
   "u": [
    "<b>Exam steps.</b> PMI = left 5th ICS, midclavicular line. Parasternal heave = RVH (palpation finds ventricular, not atrial, enlargement). Percussion is of little value. Diaphragm for high-pitched sounds, bell for low. Cyanosis and edema are not always cardiac.",
    "<b>Sounds.</b> S1 = AV valves close, between atrial systole and isovolumetric contraction. S2 = semilunar valves close, between ejection and isovolumetric relaxation. S3 = rapid filling just after S2. S4 = atrial contraction into a stiff LV just before S1.",
    "<b>Areas.</b> Aortic right 2nd ICS; pulmonic left 2nd ICS; Erb&#8217;s left 3rd ICS; tricuspid left lower sternal border; mitral apex (left 5th ICS MCL).",
    "<b>Murmurs.</b> Ejection systolic: AS, PS. Pansystolic: MR, TR, VSD. Early diastolic blowing: AR, PR. Mid-diastolic rumble: MS, TS.",
    "<b>Pulses.</b> AR collapsing (wide PP); AS slow-rising and delayed; tamponade pulsus paradoxus; AF pulse deficit; severe LV failure pulsus alternans.",
    "<b>JVP.</b> Right internal jugular at 45&#176;; height above the sternal angle (+5 cm &#8776; RA pressure). a = RA contraction (absent in AF), c = tricuspid bulge, x = atrial relaxation, v = RA filling (giant in TR), y = RA emptying. Raised JVP = raised RA pressure.",
    "<b>Breathing.</b> Inspiration raises venous return to the right heart and splits S2. ASD: wide fixed split; on inspiration the LA&#8594;RA shunt volume falls.",
    "<b>Hypertension.</b> Raised afterload &#8594; LVH &#8594; apex displaced laterally."
   ],
   "say": {
    "P-C1": "Figure 1 shows the palpation. Four steps, four traps: cyanosis isn&#8217;t always the heart, palpation finds ventricles not atria, percussion can&#8217;t diagnose constriction, diaphragm for high pitch and bell for low.",
    "P1": "Diaphragm means high pitch.",
    "P5": "Hypertension is afterload. The LV thickens, then the apex moves out.",
    "P-C2": "Read the strip left to right: atrial systole, S1, isovolumetric contraction, ejection, S2, isovolumetric relaxation, rapid filling with S3. Just after S1 is IVC; just after S2 is IVR.",
    "P6": "S1 is the AV valves closing. The radial pulse comes later.",
    "P7": "After S1: isovolumetric contraction.",
    "P8": "After S2: isovolumetric relaxation.",
    "P-C3": "Point to each area on the chest picture, then run the murmur table: when is it, and where is it loudest.",
    "P12": "Diastolic at the left second space: pulmonary regurgitation.",
    "P14": "Ejection systolic at the left second space: pulmonary stenosis.",
    "P16": "Rumble at the apex: mitral stenosis.",
    "P17": "Pansystolic at the apex: mitral regurgitation.",
    "P18": "Diastolic at the left fifth space by the sternum: tricuspid stenosis.",
    "P-C4": "AR collapses, AS rises slowly, tamponade is paradoxus, AF has a deficit.",
    "P20": "AR: collapsing pulse.",
    "P22": "AS: slow and late.",
    "P23": "Tamponade: pulsus paradoxus.",
    "P-C5": "a is contraction, c is the bulge, x is relaxation, v is filling, y is emptying. AF removes the a wave; TR makes the v wave giant.",
    "P25": "Right internal jugular.",
    "P27": "Atrial contraction.",
    "P30": "No atrial contraction in AF, so no a wave.",
    "P32": "TR: giant v wave.",
    "P-C6": "Inspiration sends more blood to the right heart, so P2 comes later. In ASD the extra RA pressure shrinks the shunt, which is why the split stays fixed.",
    "P33": "The shunt volume is the thing that decreases."
   }
  },
  "D": {
   "part": "Video 5",
   "time": "15&#8211;18 min",
   "open": "Dog lab one: every tracing is a reflex. Find the stimulus, the receptor, the arm that answers, and anything that was cut.",
   "u": [
    "<b>Recorded:</b> arterial BP, HR, respiration, CVP.",
    "<b>Carotid sinus.</b> Clamping the common carotids (less pressure at the sinus) &#8594; BP and HR up. Pulling or massaging the sinus &#8594; BP, HR and RR down. After double vagotomy the HR no longer slows, but BP and RR still fall.",
    "<b>Nerve stimulation.</b> Peripheral vagus &#8594; bradycardia or arrest. Central vagus: low current &#8594; depressor (baroreceptor fibers); high current &#8594; pressor with &#8593;RR (chemoreceptor fibers). Aortic nerve: same rule.",
    "<b>Sciatic, central end.</b> Low current &#8594; depressor reflex: BP and HR down (exam keys add RR down; in the lab tracing RR barely changed); vagal (muscarinic at SA node, longer AV conduction). High current &#8594; pressor (pain): all up; the faster breathing comes from phrenic ACh at the diaphragm.",
    "<b>CO&#8322;.</b> Chemoreceptor drive &#8594; BP, HR, RR up; locally CO&#8322; dilates.",
    "<b>Splanchnic.</b> BP up (splanchnic vasoconstriction + adrenal epinephrine), then a dip below baseline from &#946;2 as epinephrine falls. After double vagotomy: BP up, HR up, and only the slower breathing shows the baroreflex.",
    "<b>Drugs.</b> Low-dose epinephrine: &#946;2 dilation &#8594; BP and CVP down, HR up. High dose: BP way up, reflex HR down and breathing inhibited. NE and phenylephrine: BP up, reflex bradycardia. Isoproterenol: BP down, HR up. After vagotomy there is no reflex bradycardia. A denervated heart responds only to circulating catecholamines."
   ],
   "say": {
    "D-C1": "Four questions for every tracing. Low current hits baroreceptor fibers; high current also recruits chemoreceptor and pain fibers.",
    "D-C2": "This table is Dog one. Read the why column out loud; that&#8217;s what the exam asks.",
    "D2": "Pressing below the angle of the jaw is carotid massage: more firing, slower heart.",
    "D-C3": "These are the real Dog I tracings. Pull the sinus: BP, HR and breathing all drop, more with a harder pull. Clamp the common carotid: everything goes up, because the sinus sits beyond the clamp and feels less pressure.",
    "D4": "Sympathetic withdrawal relaxes vessels, so resistance falls.",
    "D6": "BP down and breathing down together: carotid sinus stretch.",
    "D7": "True: up first, then the reflex pulls it down.",
    "D-C4": "Head down: BP jumps first, then the baroreflex drags BP and HR down. Head up: BP drops, then HR climbs and BP recovers. Same reflex as standing up in the BP lab.",
    "D8": "Vagi cut, so the heart can&#8217;t slow, but BP still falls.",
    "D-C5": "Look at the HR labels: one-ten every time. The vagi are cut, so the heart can&#8217;t slow, but BP and breathing still fall through sympathetic withdrawal and the phrenic nerve.",
    "D9": "High current recruits chemoreceptor fibers: pressor, not depressor.",
    "D11": "Low-current sciatic is a depressor reflex: vagal, so muscarinic at the SA node.",
    "D-C6": "Low current: BP and HR dip. High current: BP to two hundred, HR up, breathing to fifty-six. Big fibers first, pain fibers only at high current.",
    "D12": "BP down and HR down: only C has both. In the lab tracing the breathing hardly changed at low current, so don&#8217;t argue about the third value.",
    "D14": "Spot the error in each option. Ganglia use ACh, central chemoreceptors don&#8217;t sense O2, and the phrenic nerve explains the faster breathing.",
    "D-C7": "Splanchnic tracing: BP climbs twice, first from the gut vessels, then from adrenal epinephrine, and dips below baseline when it stops because the leftover epinephrine acts on beta-two. After vagotomy the heart rate rises with BP and only the breathing slows. Then the drug table.",
    "D15": "False. The dip is beta-two.",
    "D16": "True. Breathing is the only sign left.",
    "D18": "BP down, CVP down, HR way up: low-dose epinephrine."
   }
  },
  "H": {
   "part": "Video 5",
   "time": "15&#8211;18 min",
   "open": "Dog lab two: change the filling or change the outflow, then predict CVP, BP and HR.",
   "u": [
    "<b>IV fluid.</b> CVP up, preload up &#8594; SV and CO up (Frank&#8211;Starling) &#8594; BP up.",
    "<b>Hemorrhage.</b> BP down, HR and RR up. Within ~15 min Hct falls because interstitial fluid moves into the plasma.",
    "<b>SVC/IVC clamp.</b> Venous return and RA pressure fall, CO and BP fall &#8594; reflex &#8593;contractility and &#8593;TPR. Venous pressure upstream (head, arms) rises. On the PV loop, EDV moves left.",
    "<b>Nitroglycerin.</b> Venodilation &#8594; less venous return, lower preload and CVP, BP down, reflex HR up.",
    "<b>Tamponade.</b> CVP up while venous return falls; SV, CO and BP down; narrow PP; HR expected up (it fell slightly in the lab recording); pulsus paradoxus. Preload, CO and afterload (aortic pressure) all fall.",
    "<b>Aortic regurgitation.</b> EDV up, total SV up, SBP up, DBP down, wide PP, collapsing pulse; effective forward SV falls, so PP overestimates it. PV loop: EDV point moves right.",
    "<b>Coarctation and AS.</b> Coarctation distal to the left subclavian: arms high, legs low, LV afterload up. AS raises LV pressure and can raise CVP.",
    "<b>Arrhythmias.</b> AF starts in the atria (pulmonary veins in the LA): no P waves, irregular, narrow QRS, pulse deficit. VF: no pulse."
   ],
   "say": {
    "H-C1": "One table, eight disturbances. For each one say CVP, BP, HR and the one-line why.",
    "H1": "Fluid means preload, and preload means output.",
    "H3": "False. Tamponade raises CVP with an empty heart.",
    "H4": "HR up, breathing up, BP down.",
    "H5": "Hct falls because interstitial fluid moves into the plasma.",
    "H6": "Less return, then the reflex squeezes harder: down, up, up.",
    "H-C2": "Two clamps, same direction: BP, pulse pressure and CVP down, HR up. The IVC drop is bigger because the IVC carries the whole lower body.",
    "H9": "Nitroglycerin is a venodilator: less venous return.",
    "H-C3": "BP collapses to 20 over 10 while CVP creeps up. Tamponade is the one where CVP goes up while venous return goes down.",
    "H12": "Fluid in the pericardial sac.",
    "H13": "Down, down, down.",
    "H-C4": "First the dog: SBP up, DBP down, pulse pressure from 45 to 60. Then the loop:  AR fills the ventricle from two sides, so the end-diastolic volume moves right and pulse pressure widens.",
    "H15": "Up, up, down, up.",
    "H16": "DBP is the one that falls.",
    "H21": "Up before the narrowing, down after it, afterload up.",
    "H-C5": "Where you measure decides the answer. Clamp the ascending aorta and the carotid is downstream: BP falls, CVP rises, like severe AS. Clamp the arch and the carotid is upstream: BP rises, like coarctation.",
    "H-C6": "Aortic nerve: low current, BP and HR down; high current, both up. Right vagus, peripheral end: the heart stops.",
    "H-C7": "In the tracing, AF makes the beats irregular with a huge pulse pressure and recovers when the stimulus stops; VF drops BP to a flat line and does not recover. AF starts in the atria and still has a narrow QRS. VF has no pulse at all.",
    "H27": "False. The chaos is in the atria."
   }
  }
 }
};
