/* Tutor-only teaching notes for each concept card: knowledge beyond the slide that helps explain it.
   b = terse bullets (HTML allowed; write < as &lt;), d = optional plain-text diagram (lines, shown in monospace).
   Items marked "possible" are candidate explanations, not settled answers. */
window.TUTOR_NOTES = {
  /* ---------------- R · Regulation ---------------- */
  "R-C1": {
    b: [
      "Ohm's law for blood: ΔP = Q × R → (MAP − RAP) = CO × TPR; RAP ≈ 0 → MAP ≈ CO × TPR",
      "Poiseuille: R = 8ηL / πr⁴ → radius halves → R × 16",
      "Viscosity counts too: Hct ↑ (polycythemia) → η ↑ → TPR ↑",
      "Starling = moving <i>along</i> the curve (preload); contractility = shifting the curve up",
      "Teaching move: stimulus → which handle? → which term? → MAP ↑ or ↓"
    ],
    d: [
      "              MAP",
      "             /   \\",
      "           CO  x  TPR <- arteriole radius (r^4)",
      "          /  \\",
      "        HR  x  SV",
      "             / | \\",
      "   preload  contractility  afterload",
      "  (venous tone)          (TPR, aortic P)"
    ]
  },
  "R-C2": {
    b: [
      "Analogy: baroreflex = cruise control (fast, forgets in 1–2 days); kidney = sets the speed limit",
      "Gain = correction ÷ error left: baroreflex ≈ 2 (fixes ~2/3); kidney ≈ ∞ (fixes all, given time)",
      "Pressure natriuresis: BP ↑ → urine Na⁺ & H₂O ↑ → volume ↓ → BP back to set point",
      "Chronic hypertension: baroreceptors reset upward → defend the high BP",
      "Exam cue words: “standing up” → baroreflex · “minutes after bleeding” → Ang II, fluid shift · “5 days” → kidney"
    ],
    d: [
      "seconds  --> baroreflex | chemoreflex (<80) | CNS ischemic (<60)",
      "minutes  --> Ang II constriction | stress relaxation | fluid shift",
      "days     --> kidney: Na/H2O out  <->  volume  <->  BP"
    ]
  },
  "R-C3": {
    b: [
      "RVLM = gas pedal (always pressed); CVLM = brake on RVLM; NTS = reception desk that decides",
      "CVLM inhibits RVLM with GABA",
      "RVLM → IML cell column (T1–L2) = spinal sympathetic preganglionic neurons",
      "Adrenal medulla = a sympathetic ganglion whose “postganglionic neurons” are chromaffin cells secreting into blood",
      "Vasovagal syncope: emotion/pain → cortex, hypothalamus → vagus ↑ + sympathetic ↓ → bradycardia + vasodilation → faint"
    ],
    d: [
      "baro/chemo --IX, X--> NTS --+--> CVLM --(-)--> RVLM --> IML --> heart, vessels, adrenal",
      "                            |",
      "                            +--> nucleus ambiguus / DMNX --> vagus --> SA, AV"
    ]
  },
  "R-C4": {
    b: [
      "Mnemonic: carotid <b>S</b>inus = <b>S</b>tretch (baro) · carotid <b>B</b>ody = <b>B</b>lood gases (chemo)",
      "Nerves: neck = IX (Hering's), arch = X (aortic nerve)",
      "Fires to pressure AND to its rate of rise → pulsatile pressure drives it more than steady pressure",
      "Buffer, not setter: after denervation, mean BP is about the same but swings widely",
      "Clinic: carotid massage stops some SVTs · carotid sinus hypersensitivity in the elderly → syncope with a tight collar or head turn",
      "Blunted reflex: diabetic autonomic neuropathy, old age, drugs → orthostatic hypotension"
    ],
    d: [
      "BP up -> wall stretch up -> firing up -> NTS",
      "   -> vagus up    -> HR down",
      "   -> SNS down    -> HR, contractility, TPR, venous tone down",
      "   -> BP back down          (negative feedback loop)"
    ]
  },
  "R-C5": {
    b: [
      "Carotid body flow ≈ 2,000 mL/100 g/min (body's highest) → it samples arterial blood, so it fires only when flow itself falls",
      "Senses PaO₂, not O₂ content → anemia and CO poisoning barely stimulate it",
      "Cerebral perfusion pressure: CPP = MAP − ICP → ICP ↑ → CPP ↓ → medulla ischemic",
      "Cushing: the BP surge is the brain buying back CPP; the bradycardia is the baroreflex answering that surge",
      "Irregular breathing in Cushing = brainstem compression → herniation warning"
    ],
    d: [
      "MAP (mmHg)",
      "180 +",
      "    |  baroreflex only",
      " 80 +  + chemoreflex",
      " 60 +  + CNS ischemic response",
      " 20 +  CNS ischemic response at its strongest (last stand)"
    ]
  },
  "R-C6": {
    b: [
      "Constrictors mostly use Gq → IP₃ → Ca²⁺ ↑: α₁, AT1 (Ang II), V1 (ADH), ETA (endothelin)",
      "β₂ uses Gs → cAMP ↑ → smooth muscle relaxes",
      "Epinephrine dose switch: low → β₂ wins (muscle beds dilate, DBP ↓) · high → α₁ wins",
      "ADH at normal levels acts on V2 (kidney); constrictor levels need a big stimulus such as severe hemorrhage",
      "Low-dose aspirin blocks platelet TXA₂ for the platelet's life (no nucleus, no new COX) → antithrombotic",
      "Drug links: nitrates = NO donors · sildenafil blocks PDE5 → cGMP ↑ · bosentan blocks endothelin (pulmonary HTN)"
    ],
    d: [
      "ACh, bradykinin, shear -> eNOS -> NO -> guanylyl cyclase -> cGMP -> relax",
      "                                         nitrates --^    sildenafil keeps cGMP up"
    ]
  },
  "R-C7": {
    b: [
      "Myogenic response = Bayliss effect; metabolic = demand signal",
      "Brain: CO₂ rules → hyperventilation (PaCO₂ ↓) → cerebral constriction → ICP ↓ (short-term trick)",
      "Heart: already extracts ~70–75% of O₂ at rest → only way to get more O₂ is more flow (adenosine)",
      "Kidney TGF: GFR ↑ → NaCl ↑ at macula densa → afferent arteriole constricts → GFR back",
      "Chronic hypertension shifts the autoregulation plateau right → lowering BP too fast → brain ischemia"
    ],
    d: [
      "pressure up -> stretch -> Ca2+ in -> constrict -> flow back to normal   (myogenic)",
      "work up -> adenosine, CO2, H+, K+ up, O2 down -> dilate -> flow up      (metabolic)"
    ]
  },
  "R-C8": {
    b: [
      "Aldosterone: principal cells → ENaC + Na⁺/K⁺-ATPase → Na⁺ kept, K⁺ lost → hyperaldosteronism = HTN + hypokalemia",
      "Ang II constricts the efferent > afferent arteriole → props up GFR when renal flow is low",
      "So ACE inhibitor in bilateral renal artery stenosis → GFR collapses (AKI)",
      "ADH triggers: osmolality ~1–2% change vs blood volume ~5–10% loss",
      "Heart failure drugs block this axis: ACEi/ARB, spironolactone, sacubitril–valsartan → longer survival"
    ],
    d: [
      "angiotensinogen --renin--> Ang I --ACE--> Ang II --AT1--> constrict, aldosterone, ADH, thirst",
      "                  ^aliskiren       ^ACEi           ^ARB",
      "bradykinin --ACE--> inactive   (ACEi -> bradykinin up -> dry cough, angioedema)"
    ]
  },
  "R-C9": {
    b: [
      "Funny current = HCN channels: open on hyperpolarization, cAMP makes them open more",
      "→ β₁ (cAMP ↑) speeds the SA node; ACh (cAMP ↓) slows it · ivabradine blocks I<sub>f</sub> → HR ↓ only",
      "Three ways to change rate: phase-4 slope, threshold, starting (most negative) potential; the vagus changes slope AND start",
      "Phospholamban brakes SERCA; PKA phosphorylation releases the brake → faster relaxation (lusitropy) + more Ca²⁺ stored for the next beat",
      "β-blocker: HR ↓ + contractility ↓ → myocardial O₂ demand ↓ → angina relief"
    ],
    d: [
      "sympathetic: steeper phase 4  -> reaches threshold sooner -> HR up",
      "vagus:       lower start + flatter phase 4 -> reaches threshold later -> HR down"
    ]
  },
  "R-C10": {
    b: [
      "Resting HR 90–110 = what you see in a normal person after full atropine (vagal brake removed)",
      "Exercise order: SV rises first (Starling, minutes 0–2), HR rises later as adrenal catecholamines arrive",
      "→ transplant patients need longer warm-up and cool-down",
      "Ischemia is often painless (sensory afferents cut too) → silent ischemia",
      "Drugs acting through nerves fail (atropine, digoxin's vagal AV effect); drugs acting on receptors work (epinephrine, isoproterenol)"
    ],
    d: [
      "normal:     vagus --(-)--> SA (intrinsic ~100) -> rests at ~70",
      "transplant: no nerves      SA (intrinsic ~100) -> rests at ~100",
      "            adrenal Epi --(slow, via blood)--> HR up during exercise"
    ]
  },
  "R-C11": {
    b: [
      "ATLS classes: I &lt;15% ~normal · II 15–30% HR ↑, PP narrow · III 30–40% BP falls, confused · IV >40% life-threatening",
      "Narrow PP = SV ↓ (SBP ↓) with TPR ↑ holding DBP",
      "Early Hct is normal: whole blood is lost → Hct falls only after fluid shifts in",
      "Shock index = HR / SBP; > 1 suggests major loss",
      "Past ~30–40%: compensation fails → coronary ischemia → heart weakens → BP falls more (vicious cycle)"
    ],
    d: [
      "0 s   --> baroreflex: HR up, TPR up, veins constrict",
      "min   --> Ang II, ADH (V1), fluid shift in -> Hct down",
      "h-d   --> aldosterone, ADH (V2), thirst -> volume back",
      "weeks --> EPO -> red cells back"
    ]
  },

  /* ---------------- F · Frog heart ---------------- */
  "F-C1": {
    b: [
      "Frog heart = 2 atria + 1 ventricle; sinus venosus = the frog's SA node",
      "Spongy ventricle gets O₂ from blood inside the chamber → no coronaries → ligatures cause no ischemia",
      "History: Sydney Ringer found the heart needs Ca²⁺ using frog hearts → Ringer's solution",
      "Cold-blooded: rate depends on temperature, so rates differ between groups"
    ],
    d: [
      "Exp 1 observe     -> pacemaker order: SV -> A -> V",
      "Exp 2 shocks      -> refractory period, extrasystole",
      "Exp 3 ligatures   -> automaticity, latent pacemakers",
      "Exp 4 currents    -> all-or-none law"
    ]
  },
  "F-C2": {
    b: [
      "AV node is slow on purpose: small cells, few gap junctions, Ca²⁺ upstroke → atria finish filling the ventricles first",
      "Atrial kick ≈ 15–25% of ventricular filling at rest",
      "Purkinje is fast: wide fibers, many gap junctions, Na⁺ upstroke → ventricles contract together",
      "Long plateau → ventricular AP ~250–300 ms vs nerve ~1–2 ms",
      "Drug links: class I antiarrhythmics block Na⁺ (fast tissue) · verapamil, adenosine slow the AV node"
    ],
    d: [
      "fast response (Na+):   steep phase 0  -> fast conduction  (muscle, Purkinje)",
      "slow response (Ca2+):  gentle phase 0 -> slow conduction  (SA, AV node)"
    ]
  },
  "F-C3": {
    b: [
      "Na⁺ channel has 2 gates: activation (m) opens fast; inactivation (h) shuts and reopens only after repolarization → ARP",
      "Skeletal muscle: AP ~2–5 ms vs twitch ~10–100 ms → twitches can sum → tetanus",
      "R-on-T: a stimulus in the vulnerable period (end of T wave ≈ RRP) can trigger VF",
      "Defibrillation works by making every cell refractory at once → organized rhythm can restart"
    ],
    d: [
      "AP      |~~~~~~~~\\__",
      "ARP     [=======]",
      "RRP             [==]",
      "twitch    /~~~~~\\__     -> ARP covers almost the whole twitch: no tetanus"
    ]
  },
  "F-C4": {
    b: [
      "Human version: PVC → full compensatory pause (SA node not reset) · PAC → usually not compensatory (SA node reset)",
      "Patients feel the pause and the strong beat after it (“skipped beat, then a thump”), not the PVC itself",
      "Post-extrasystolic potentiation: longer filling (Starling) + more Ca²⁺ in the SR",
      "An early beat with little filling may not reach the wrist → pulse deficit"
    ],
    d: [
      "normal: |----|----|----|----|",
      "PVC:    |----|--X-|---------|----|",
      "                  ^ next normal impulse lost (refractory)",
      "        interval around the PVC = 2 x normal interval"
    ]
  },
  "F-C5": {
    b: [
      "Overdrive suppression: a fast driver loads latent pacemakers with Na⁺ → Na⁺/K⁺ pump hyperpolarizes them → pause before escape",
      "Same in patients: pause after a tachycardia stops or after cardioversion; sick sinus syndrome → junctional escape",
      "Rule: the fastest surviving pacemaker below the block wins",
      "Ventricle stayed at 0 after ligature II: its own escape was too slow or absent within the observation time",
      "Slow escape in complete heart block → artificial pacemaker"
    ],
    d: [
      "SV --X-- A ------ V     ligature I:  SV 60 | A, V 0 -> 32 (escape)",
      "SV --X-- A --X--- V     ligature II: SV 60 | A 32  | V 0"
    ]
  },
  "F-C6": {
    b: [
      "Skeletal muscle grades force by recruiting motor units + summation; the heart cannot (every cell fires every beat)",
      "So the heart grades force by Ca²⁺ and stretch instead",
      "Treppe (Bowditch staircase): faster rate → stronger beats",
      "Digoxin: blocks Na⁺/K⁺-ATPase → Na⁺ in ↑ → Na⁺/Ca²⁺ exchanger removes less Ca²⁺ → contractility ↑"
    ],
    d: [
      "stimulus:  sub   threshold   x2    x4",
      "force:      0      ###       ###   ###    (same height)"
    ]
  },

  /* ---------------- T · Turtle vagus ---------------- */
  "T-C1": {
    b: [
      "Parasympathetic: long pre, short post (ganglion on the organ) · sympathetic: short pre, long post",
      "Every autonomic ganglion is nicotinic (Nn); the targets differ: M2 vs β₁",
      "Proof of vagal tone: atropine in a young adult → HR rises to ~100–120",
      "Sinus arrhythmia: HR ↑ on inspiration (vagal withdrawal), normal in the young",
      "Right-side nerves favour the SA node, left-side the AV node (both vagus and sympathetic)"
    ],
    d: [
      "PARA: medulla ==========(N)= M2  heart    long pre, short post",
      "SYMP: T1-T4 ==(N)=========== b1  heart    short pre, long post",
      "      adrenal medulla -> Epi -> blood -> b1"
    ]
  },
  "T-C2": {
    b: [
      "SA node sits in the right atrium near the SVC → right vagus; it is a preference, not exclusive",
      "Vagal escape: keep stimulating and the ventricle restarts with escape beats",
      "Vagal maneuvers (Valsalva, carotid massage) slow AV conduction → stop SVT or reveal flutter waves"
    ],
    d: [
      "right vagus -> SA node -> rate down -> arrest       (chronotropic)",
      "left vagus  -> AV node -> A:V > 1:1 -> AV block     (dromotropic)"
    ]
  },
  "T-C3": {
    b: [
      "Logic to locate a synapse: block a site; stimulating above fails, stimulating below works → the synapse is in between",
      "Two-phase nicotine (stimulate, then depolarization block) = same idea as succinylcholine phase I block at the NMJ",
      "Hexamethonium = ganglion blocker (old antihypertensive): blocks BOTH sympathetic and parasympathetic ganglia",
      "Smokers: nicotine excites sympathetic ganglia + adrenal medulla → HR and BP ↑"
    ],
    d: [
      "vagus ==> [ganglion: Nn] ==> postganglionic ==> [SA node: M2]",
      "               ^ nicotine                           ^ atropine",
      "stimulate vagus:      must cross ganglion -> fails after high nicotine",
      "stimulate crescentic: below the ganglion  -> still works (until atropine)"
    ]
  },
  "T-C4": {
    b: [
      "Mobitz I (Wenckebach): usually in the AV node, often vagal, usually benign",
      "Mobitz II: below the AV node (His–Purkinje) → can jump to complete block → pacemaker",
      "Complete block signs: cannon a waves in the JVP, S1 loudness varies beat to beat",
      "Rhyme: “If R is far from P → 1st degree · longer, longer, drop → Wenckebach · some P's don't get through → Mobitz II · P's and Q's don't agree → 3rd degree”"
    ],
    d: [
      "1st:   P--[long PR]--QRS   P--[long PR]--QRS",
      "M-I:   PR 0.20 -> 0.28 -> 0.36 -> P (no QRS)",
      "M-II:  PR fixed ... P (no QRS)   -> dangerous",
      "3rd:   P  P  P  P  P   (regular)",
      "        QRS     QRS    (regular, slow, unrelated)"
    ]
  },

  /* ---------------- B · Blood pressure ---------------- */
  "B-C1": {
    b: [
      "Windkessel: elastic aorta stores energy in systole, recoils in diastole → keeps DBP up",
      "Stiff aorta (elderly) → SBP ↑, DBP ↓ → isolated systolic hypertension",
      "Fast HR: diastole shortens more than systole → MAP moves toward the simple average",
      "Worked example: 120/80 → PP 40 → MAP ≈ 80 + 13 ≈ 93",
      "Hypertension: ≥140/90 (Thai and ESC guidelines) · ACC/AHA uses ≥130/80",
      "Oscillometric SBP/DBP come from an algorithm → unreliable in AF and other arrhythmias"
    ],
    d: [
      "SBP --+   <- stroke volume, aortic stiffness",
      "      | PP",
      "DBP --+   <- TPR (run-off), heart rate",
      "MAP ~ DBP + PP/3"
    ]
  },
  "B-C2": {
    b: [
      "Narrow bladder → cuff pressure does not reach the artery fully → overestimates",
      "Every 10 cm the arm hangs below the heart → about +8 mmHg",
      "Auscultatory gap is common in hypertension with stiff arteries → pump only to 140 and you may call 180 “130”",
      "Good practice: ≥2 readings 1–2 min apart; first visit measure both arms and use the higher arm"
    ],
    d: [
      "step 1  palpate: inflate until pulse gone, +20-30 -> deflate -> pulse back = palpatory SBP",
      "step 2  listen:  inflate to palpatory SBP +20-30 -> deflate slowly",
      "                 first tap = SBP (I)      silence = DBP (V)"
    ]
  },
  "B-C3": {
    b: [
      "Turbulence ↑ with velocity ↑ and viscosity ↓ (Reynolds number) → flow murmurs in anemia, fever, pregnancy",
      "Phase IV to V gap is normally ~5–10 mmHg; in high-output states sounds can run to 0",
      "Phase memory: tap → swish → crisp tap → muffle → silence",
      "History: Nikolai Korotkoff described the sounds in 1905"
    ],
    d: [
      "cuff > SBP       : artery shut all cycle      -> silent",
      "SBP > cuff > DBP : opens at each peak -> jet  -> sounds I-IV",
      "cuff < DBP       : open all cycle, laminar    -> silent (V)"
    ]
  },
  "B-C4": {
    b: [
      "Rule 1: the cuff transmits poorly (small, narrow, loose) → reads HIGH",
      "Rule 2: anything that truly raises BP for a moment (talking, pain, cold, full bladder, white coat) → HIGH",
      "Rule 3: deflating too fast → the needle passes the first sound before you hear it → SBP LOW",
      "White-coat HTN: high in clinic, normal at home · masked HTN: the opposite → confirm with home or 24-h BP"
    ]
  },
  "B-C5": {
    b: [
      "Why SBP grows downstream: reflected waves add to the forward wave + arteries get smaller and stiffer",
      "Coarctation clues: radio-femoral delay, rib notching (intercostal collaterals), hypertension in a young patient → check leg BP",
      "ABI > 1.4 = calcified, non-compressible arteries (diabetes, CKD); the reading is unreliable",
      "Hill's sign: in severe AR, leg SBP exceeds arm SBP by far more than normal"
    ],
    d: [
      "aorta     peak  e.g. 120/80",
      "femoral   taller, narrower peak  e.g. 130/78",
      "foot      taller still           e.g. 140/75",
      "mean pressure falls slightly along the way (flow needs a gradient)"
    ]
  },
  "B-C6": {
    b: [
      "Muscle pump + respiratory pump also push blood back up",
      "SBP ↓ with SV ↓, DBP ↑ with TPR ↑ → PP narrows",
      "Orthostatic hypotension causes: hypovolemia, drugs (α-blockers, diuretics, nitrates), autonomic failure (diabetes, Parkinson's), long bed rest",
      "POTS: HR rises ≥30 bpm within 10 min of standing without hypotension"
    ],
    d: [
      "stand -> 500-800 mL to legs -> VR down -> SV down -> carotid BP down",
      "      -> baro firing down -> SNS up, vagus down",
      "      -> HR up, TPR up, veins constrict -> BP back in seconds"
    ]
  },
  "B-C7": {
    b: [
      "Dynamic (running): muscle beds dilate → TPR ↓ → SBP ↑, DBP ≈",
      "Static (isometric): contracted muscle squeezes its vessels → TPR ↑ → SBP and DBP ↑ (pressor response)",
      "Lifting with breath-holding = Valsalva → intrathoracic pressure ↑ → BP spikes",
      "CO 5 → 20–25 L/min in trained people; muscle flow up ~15–20×",
      "Heart rate recovery &lt;12 bpm in the first minute after exercise = poor prognosis"
    ],
    d: [
      "exercise -> SNS up -> HR up, SV up -> CO up -> SBP up",
      "         -> metabolites -> muscle arterioles dilate -> TPR down -> DBP ~ same"
    ]
  },

  /* ---------------- M · Microcirculation ---------------- */
  "M-C1": {
    b: [
      "Starling: filtration = Kf × [(Pc − Pi) − σ(πc − πi)] → most experiments change Pc",
      "Arterial occlusion: Pc ↓ → no filtration · venous occlusion: Pc ↑ → filtration → swelling",
      "AV anastomoses (glomus bodies) in fingers, toes, ears, nose → heat dump"
    ],
    d: [
      "experiment      what changes     principle",
      "art occlusion   inflow 0         metabolites -> reactive hyperemia",
      "ven occlusion   outflow 0        Pc up -> filtration, stagnant hypoxia",
      "skin stroke     mast cell, axon  triple response",
      "water temp      SNS, local temp  thermoregulation, AV shunts",
      "arm up/down     rho x g x h      hydrostatic pressure"
    ]
  },
  "M-C2": {
    b: [
      "Same pain mediators as angina and claudication → ischemic pain",
      "Bigger O₂ debt → bigger and longer hyperemia",
      "Clinic: flow-mediated dilation test (5-min brachial cuff, then ultrasound) measures endothelial NO function"
    ],
    d: [
      "flow",
      "base ----+          +^^\\",
      "         |  0 flow  |   \\____ base",
      "         +----------+",
      "       cuff on    cuff off -> reactive hyperemia"
    ]
  },
  "M-C3": {
    b: [
      "Visible cyanosis needs ~5 g/dL deoxyhemoglobin in the capillaries",
      "Venous occlusion plethysmography (cuff ~40–50 mmHg) measures limb arterial inflow in research",
      "DVT looks the same: outflow blocked → swollen, warm, dusky limb",
      "Dengue tourniquet test: cuff at the midpoint of SBP and DBP for 5 min; positive ≥10 petechiae per square inch"
    ],
    d: [
      "cuff 30-40 : art in yes   vein out no -> engorged, reddish",
      "cuff 80-90 : art in peaks vein out no -> blue, swollen, petechiae",
      "cuff > SBP : art in no    vein out no -> pale (arterial occlusion)"
    ]
  },
  "M-C4": {
    b: [
      "Named the Lewis triple response (Thomas Lewis, 1927)",
      "Antihistamine shrinks wheal and flare; local anesthetic abolishes only the flare (nerve-dependent)",
      "Dermographism: an exaggerated wheal after light stroking → a form of urticaria",
      "Capsaicin depletes substance P → smaller flare"
    ],
    d: [
      "firm stroke -> mast cells -> histamine",
      "   -> local dilation                        -> RED LINE (seconds)",
      "   -> C fiber -> antidromic -> SP, CGRP     -> FLARE (spreads 1-2 cm)",
      "   -> venule permeability up                -> WHEAL (minutes)"
    ]
  },
  "M-C5": {
    b: [
      "Cold sensitizes α₂-adrenoceptors in skin vessels → stronger constriction",
      "Hunting reaction protects fingers, ears and nose from cold injury",
      "Raynaud's: exaggerated cold constriction → white → blue → red",
      "Same left shift explains red ears and nose in the cold"
    ],
    d: [
      "warm -> SNS down + local heat -> arterioles, AV shunts, veins dilate -> heat out",
      "cold -> SNS up + a2 sensitized -> constrict -> veins flat -> heat kept",
      "       below ~10-15 C -> cold-induced dilation in waves -> protects tissue"
    ]
  },
  "M-C6": {
    b: [
      "Hydrostatic pressure = ρgh; 1 cmH₂O ≈ 0.74 mmHg",
      "Varicose veins: leaky valves → long hydrostatic column → venous hypertension → edema, ulcers",
      "JVP works because neck veins collapse above the blood column → the top of the column shows RA pressure",
      "Central line insertion: head-down + Valsalva prevents air embolism (same negative-pressure risk)",
      "Passive leg raise ≈ 150–300 mL autotransfusion → bedside fluid-responsiveness test"
    ],
    d: [
      "skull sinuses  ~ -10   rigid walls, cannot collapse",
      "neck veins     ~ 0     collapse",
      "heart (RA)     ~ 0     reference level",
      "foot veins     ~ +90   standing still"
    ]
  },

  /* ---------------- P · Physical examination ---------------- */
  "P-C1": {
    b: [
      "Displaced apex = volume overload (MR, AR, dilated cardiomyopathy) · sustained heave = pressure overload (AS, hypertension)",
      "Central cyanosis (lips, tongue: lung or shunt) vs peripheral (fingers: low flow, cold)",
      "Edema causes: heart, liver, kidney, low albumin, veins, lymph",
      "Commonest cause of right heart failure = left heart failure"
    ],
    d: [
      "LV fails -> LA P up -> pulmonary veins up -> lung: dyspnea, orthopnea, PND, crackles",
      "RV fails -> RA P up -> systemic veins up  -> JVP up, liver up, leg edema"
    ]
  },
  "P-C2": {
    b: [
      "S1 loudest at the apex, S2 at the base",
      "Rhythm words: S3 = “Ken-TUCK-y” (S1-S2-S3) · S4 = “TEN-nes-see” (S4-S1-S2)",
      "Loud S1 in MS: valve still wide open when the ventricle contracts → slams shut",
      "Soft S1: MR, first-degree AV block (leaflets already drifting closed)",
      "Time it with the carotid: the sound just before the upstroke is S1"
    ],
    d: [
      "         S4  S1               S2   S3",
      "atria    a   |                |",
      "valves   AV open | all shut | SL open | all shut | AV open",
      "LV       fill    | IVC      | eject   | IVR      | fill"
    ]
  },
  "P-C3": {
    b: [
      "Area order: “All Physicians Take Money” → right 2nd ICS → left 2nd → left lower sternal border → apex",
      "RILE: Right-sided murmurs louder on Inspiration, Left-sided on Expiration",
      "Handgrip (afterload ↑) → MR and AR louder, AS softer",
      "Valsalva softens most murmurs except HOCM and MVP",
      "Levine grade 1–6; a palpable thrill means grade ≥4"
    ],
    d: [
      "         S1                S2",
      "AS/PS    |   <crescendo>   |          ejection",
      "MR/TR    |=================|          pansystolic",
      "AR/PR    |                 |>====---  early diastolic",
      "MS       |                 | OS ~~~rumble~~~  mid-diastolic"
    ]
  },
  "P-C4": {
    b: [
      "Pulsus paradoxus: fixed pericardial volume → RV fills on inspiration → septum bulges left → LV SV ↓",
      "AR eponyms: Corrigan (water-hammer), de Musset (head bob), Quincke (nail-bed pulsation), Traube (pistol-shot femoral)",
      "AS symptoms: angina, syncope, dyspnea (“SAD”)",
      "Count a pulse deficit with two people over 1 min (apex and radial together)"
    ],
    d: [
      "normal        /\\__",
      "water-hammer  |\\___     sharp rise, sudden fall",
      "parvus-tardus  /~\\      small, late peak",
      "alternans     /\\ /~~\\ /\\ /~~\\   weak-strong-weak-strong"
    ]
  },
  "P-C5": {
    b: [
      "RA pressure ≈ CVP ≈ RV end-diastolic pressure (if no tricuspid stenosis)",
      "JVP ↑: right heart failure, fluid overload, tamponade, constriction (Kussmaul: JVP rises on inspiration), SVC obstruction (non-pulsatile)",
      "Giant a wave: TS, pulmonary hypertension · cannon a: AV dissociation",
      "Steep y descent: constrictive pericarditis · blunted y: tamponade",
      "Wave memory: a = atrial contraction · c = closing tricuspid bulges · x = atrial relaxation · v = venous filling · y = emptying"
    ],
    d: [
      "   a  c        v",
      "  /\\ /\\       /\\",
      " /  V  \\_x__/  \\_y_/",
      "   S1         S2"
    ]
  },
  "P-C6": {
    b: [
      "On inspiration A2 also comes slightly earlier (less blood returns from the lungs to the LV for a moment)",
      "ASD murmur = ejection systolic at the pulmonic area from extra flow across a normal pulmonary valve, not from the hole",
      "Untreated large ASD → pulmonary hypertension → shunt reverses → cyanosis (Eisenmenger)"
    ],
    d: [
      "             expiration     inspiration",
      "normal       A2P2 single    A2 . P2 split",
      "wide         A2 . P2        A2 .  . P2      RBBB, PS",
      "fixed        A2 .. P2       A2 .. P2        ASD",
      "paradoxical  P2 . A2        single          LBBB, AS"
    ]
  },

  /* ---------------- D · Dog lab I ---------------- */
  "D-C1": {
    b: [
      "Pressor = BP ↑ · depressor = BP ↓",
      "Large myelinated (A) fibers fire at low current; small (Aδ, C) need high current",
      "Anesthesia blunts reflexes → lab traces can differ from textbook values",
      "Habit: read the control values first, then the size and direction of each change"
    ],
    d: [
      "brain <-- central end --X-- peripheral end --> organ",
      "stimulate central end    = fake sensory signal -> reflex",
      "stimulate peripheral end = fake motor command  -> direct effect"
    ]
  },
  "D-C2": {
    b: [
      "Always ask: is the sensor loaded or unloaded? The common carotid clamp sits BELOW the sinus",
      "Hering–Breuer reflex: lung stretch afferents in the vagus stop inspiration → after vagotomy breaths are slow and deep",
      "Asphyxia HR: first sympathetic surge (chemoreflex), then hypoxic heart + vagal → bradycardia",
      "Vagal escape: keep stimulating the vagus and the ventricles restart with escape beats"
    ],
    d: [
      "clamp common carotid -> sinus pressure down -> firing down -> BP up, HR up",
      "pull carotid sinus   -> stretch up          -> firing up   -> BP down, HR down"
    ]
  },
  "D-C3": {
    b: [
      "Stronger pull → more stretch → more fibers recruited and faster firing → bigger fall",
      "Electrical stimulation skips the stretch step → proves the nerve pathway, not the receptor",
      "Clamping both carotids gives a bigger pressor response (no opposite-side buffer)",
      "Carotid massage: avoid with a carotid bruit or recent stroke (plaque emboli)"
    ]
  },
  "D-C4": {
    b: [
      "Two phases on every tilt trace: (A) physics = gravity moves blood · (B) physiology = reflex corrects",
      "Clinical tilt-table test diagnoses vasovagal syncope and POTS",
      "A dog's hydrostatic column is shorter than a standing human's → smaller swings"
    ],
    d: [
      "head-down: VR up   -> BP up (A)   -> baro up   -> HR down, TPR down -> BP settles (B)",
      "head-up:   VR down -> BP down (A) -> baro down -> HR up, TPR up     -> BP recovers (B)"
    ]
  },
  "D-C5": {
    b: [
      "General rule: cut an efferent arm → only that output disappears; the other arms still answer",
      "Slow deep breathing after vagotomy = Hering–Breuer reflex lost"
    ],
    d: [
      "sinus --IX--> NTS --+--> vagus  X (cut)  -> HR cannot fall",
      "                    +--> SNS down        -> BP still falls",
      "                    +--> phrenic down    -> RR still falls"
    ]
  },
  "D-C6": {
    b: [
      "Somatosympathetic reflex: surgical pain under light anesthesia → hypertension, tachycardia",
      "Pain can go either way in people: pressor response, or a vasovagal faint at a needle",
      "Phrenic → diaphragm is a skeletal-muscle synapse (nicotinic ACh)"
    ],
    d: [
      "low current  -> large afferents        -> depressor: vagus up, SNS down -> BP down, HR down",
      "high current -> + small pain fibers    -> pressor: SNS up, phrenic up   -> BP up, HR up, RR up"
    ]
  },
  "D-C7": {
    b: [
      "The splanchnic bed holds ~20–25% of blood volume → constricting it is an autotransfusion",
      "Epinephrine reversal: after an α-blocker, epinephrine lowers BP (β₂ unmasked)",
      "Clinic: norepinephrine = first vasopressor in septic shock · phenylephrine = anesthesia hypotension · isoproterenol = bridge for bradycardia or heart block",
      "Nitroglycerin: preload ↓ → wall stress and O₂ demand ↓ → angina relief; headache from meningeal dilation; never with PDE5 inhibitors"
    ],
    d: [
      "            a1    b1    b2",
      "NE          +++   ++    +/-   BP up up, reflex HR down",
      "Epi low     +     ++    +++   DBP down",
      "Epi high    +++   ++    ++    BP up up",
      "phenyl      +++   -     -     BP up, reflex HR down",
      "iso         -     +++   +++   BP down, HR up up"
    ]
  },

  /* ---------------- H · Dog lab II ---------------- */
  "H-C1": {
    b: [
      "Sort every maneuver: a filling problem (saline, bleeding, caval clamp, NTG, tamponade) or an outflow problem (AR, AS, coarctation)",
      "Venous return = (mean systemic filling pressure − RA pressure) ÷ venous resistance",
      "Bainbridge reflex: atrial stretch → HR ↑ (opposes the baroreflex after a fluid load)"
    ],
    d: [
      "             CVP down              CVP up",
      "BP down      hypovolemia,          tamponade, RV failure",
      "             caval clamp, NTG      (heart cannot fill or pump)",
      "BP up                              fluid load"
    ]
  },
  "H-C2": {
    b: [
      "IVC brings ~2/3 of venous return, SVC ~1/3",
      "Late pregnancy lying supine: uterus compresses the IVC → supine hypotension → tilt to the left",
      "SVC syndrome (lung cancer, lymphoma): swollen face and arms, distended neck veins",
      "PV loop: the end-diastolic corner moves left → narrower loop (SV ↓) → lower peak pressure"
    ]
  },
  "H-C3": {
    b: [
      "Diastolic pressures in all four chambers equalize ≈ pericardial pressure",
      "Speed matters: 100–200 mL suddenly can kill; a slow effusion can reach >1 L",
      "Also look for electrical alternans on the ECG",
      "Temporize with IV fluid (raise filling pressure); avoid diuretics and vasodilators",
      "HR fell in the lab, possible reasons: lower coronary perfusion pressure → ischemic bradycardia, an inhibitory cardiac reflex, anesthesia"
    ],
    d: [
      "fluid in sac -> pericardial P up -> diastolic filling blocked",
      "   -> VR down, but CVP up (blood waits outside)",
      "   -> EDV down -> SV down -> BP down, PP narrow",
      "inspiration: RV fills -> septum shifts left -> LV fills less -> SBP down >10"
    ]
  },
  "H-C4": {
    b: [
      "Chronic AR: LV dilates slowly (eccentric hypertrophy) → huge SV, wide PP, well tolerated for years",
      "Acute AR (endocarditis, dissection): no time to dilate → pulmonary edema, shock",
      "Low DBP → poor coronary filling (coronaries fill in diastole) → angina",
      "Austin Flint murmur: the regurgitant jet hits the mitral leaflet → mid-diastolic rumble at the apex"
    ],
    d: [
      "normal loop: B (EDV) -> C -> D -> E -> A -> back to B",
      "AR: B moves right (EDV up), C lower (DBP down), loop wider (SV up)",
      "    E -> A no longer vertical: filling from the aorta starts at once"
    ]
  },
  "H-C5": {
    b: [
      "Teaching key: where is the sensor relative to the block? That decides the reflex",
      "Coarctation clues: radio-femoral delay, rib notching, “3 sign” on CXR; associated with bicuspid aortic valve and Turner syndrome",
      "AS → concentric LV hypertrophy → angina, syncope, dyspnea",
      "HR fell with the ascending clamp, possible reasons: LV pressure overload triggering an inhibitory ventricular reflex, or a failing LV"
    ],
    d: [
      "LV -> [clamp] -> arch -> carotids             carotid sees LOW   (AS model)",
      "LV -> ascending -> carotids -> [clamp] -> desc  carotid sees HIGH  (coarctation model)"
    ]
  },
  "H-C6": {
    b: [
      "In the rabbit the aortic depressor nerve runs on its own (Ludwig and Cyon's nerve); in the dog it joins the vagosympathetic trunk",
      "Same principle as the sciatic experiment: low current = big fibers, high current = small fibers",
      "Prolonged right-vagus stimulation → vagal escape after a few seconds"
    ],
    d: [
      "aortic nerve  low current  -> baro fibers         -> depressor (BP down, HR down)",
      "aortic nerve  high current -> + chemo fibers      -> pressor (BP up, HR up)",
      "right vagus (peripheral)   -> ACh at SA node      -> arrest (BP -> 20/0)"
    ]
  },
  "H-C7": {
    b: [
      "AF: atria fire ~350–600/min; the AV node filters → irregular ventricular rate",
      "Atrial kick lost (~15–25% of filling) → CO ↓, worse with a stiff ventricle",
      "Stasis in the left atrial appendage → clot → embolic stroke → anticoagulate by CHA₂DS₂-VASc",
      "Wide PP in the dog's AF, possible reason: long pauses → more filling (bigger SV) and more aortic run-off (DBP ↓)",
      "VF: no output = cardiac arrest → CPR + unsynchronized shock; AF gets synchronized cardioversion"
    ],
    d: [
      "AF: ~~v~~|~~v~|~~~~v~~~|~|   no P waves, irregular narrow QRS",
      "VF: vvvvvvvvvvvvvvvvvvvvvv   chaotic, no QRS, no pulse"
    ]
  }
};
