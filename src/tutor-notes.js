/* Tutor-only teaching notes for each concept card, in Thai: knowledge beyond the slide that helps explain it.
   b = short bullets (HTML allowed; write < as &lt;), d = optional plain-text diagram (lines, shown in monospace; kept in English so the columns line up).
   Items marked "อาจเป็นเพราะ" are candidate explanations, not settled answers. */
window.TUTOR_NOTES = {
  "R-C1": {
    b: [
      "ΔP = Q × R (เหมือนกฎของโอห์ม) → MAP − RAP = CO × TPR; RAP ≈ 0",
      "Poiseuille: R ∝ 1/r⁴ → รัศมีลดครึ่ง → R เพิ่ม 16 เท่า",
      "Hct ↑ → ความหนืด ↑ → TPR ↑",
      "Starling = เลื่อน<i>ไปตาม</i>กราฟ (preload) · contractility = ยกกราฟทั้งเส้น",
      "วิธีสอน: stimulus → ขยับตัวปรับไหน → MAP ขึ้นหรือลง"
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
      "เปรียบ: baroreflex = cruise control (เร็ว แต่ลืมใน 1–2 วัน) · ไต = ตัวตั้งความเร็ว",
      "Gain: baroreflex ≈ 2 (แก้ได้ ~2/3) · ไต ≈ ∞ (แก้หมดถ้าให้เวลา)",
      "Pressure natriuresis: BP ↑ → ขับ Na⁺/น้ำ ↑ → volume ↓ → BP กลับ set point",
      "HTN เรื้อรัง: baroreceptor reset ขึ้น → ปกป้องความดันสูงแทน",
      "คำใบ้โจทย์: “ลุกยืน” → baroreflex · “นาทีหลังเสียเลือด” → Ang II, fluid shift · “5 วัน” → ไต"
    ],
    d: [
      "seconds  --> baroreflex | chemoreflex (<80) | CNS ischemic (<60)",
      "minutes  --> Ang II constriction | stress relaxation | fluid shift",
      "days     --> kidney: Na/H2O out  <->  volume  <->  BP"
    ]
  },
  "R-C3": {
    b: [
      "RVLM = คันเร่ง (เหยียบตลอด) · CVLM = เบรก (GABA) · NTS = โต๊ะรับเรื่อง",
      "RVLM → IML (T1–L2) = sympathetic preganglionic ในไขสันหลัง",
      "Adrenal medulla = sympathetic ganglion ที่หลั่งฮอร์โมนเข้าเลือดแทน postganglionic fiber",
      "Vasovagal syncope: อารมณ์/ปวด → vagus ↑ + sympathetic ↓ → หัวใจช้า + หลอดเลือดขยาย → เป็นลม"
    ],
    d: [
      "baro/chemo --IX, X--> NTS --+--> CVLM --(-)--> RVLM --> IML --> heart, vessels, adrenal",
      "                            |",
      "                            +--> nucleus ambiguus / DMNX --> vagus --> SA, AV"
    ]
  },
  "R-C4": {
    b: [
      "จำ: carotid <b>S</b>inus = <b>S</b>tretch · carotid <b>B</b>ody = <b>B</b>lood gases",
      "ตอบทั้งระดับความดันและความเร็วที่ความดันขึ้น → ความดันเป็นจังหวะกระตุ้นได้มากกว่าความดันคงที่",
      "เป็นตัว buffer ไม่ใช่ตัวตั้งค่า: ตัด baroreceptor แล้ว BP เฉลี่ยเท่าเดิมแต่แกว่งมาก",
      "คลินิก: carotid massage หยุด SVT บางชนิด · carotid sinus hypersensitivity ในผู้สูงอายุ → เป็นลมเมื่อคอเสื้อแน่นหรือหันคอ",
      "Reflex บกพร่อง (เบาหวาน สูงอายุ ยา) → orthostatic hypotension"
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
      "Carotid body ได้เลือด ~2,000 mL/100 g/min (สูงสุดในร่างกาย) → ยิงเมื่อ flow ลดเท่านั้น",
      "รับ PaO₂ ไม่ใช่ O₂ content → anemia, CO poisoning กระตุ้นน้อย",
      "CPP = MAP − ICP → ICP ↑ → CPP ↓ → medulla ขาดเลือด",
      "Cushing: BP พุ่ง = สมองดึง CPP กลับ · หัวใจช้า = baroreflex ตอบ BP ที่พุ่ง",
      "หายใจผิดจังหวะ = ก้านสมองถูกกด → ใกล้ herniation"
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
      "ตัวหดส่วนใหญ่ใช้ Gq → IP₃ → Ca²⁺ ↑ (α₁, AT1, V1, ETA) · β₂ ใช้ Gs → cAMP ↑ → คลาย",
      "Epinephrine: ขนาดต่ำ β₂ ชนะ (DBP ↓) · ขนาดสูง α₁ ชนะ",
      "ADH ระดับปกติทำงานที่ V2 (ไต) · ต้องเสียเลือดมากจึงสูงพอจะหดหลอดเลือด",
      "Aspirin ขนาดต่ำ block TXA₂ ของเกล็ดเลือดตลอดอายุ (ไม่มี nucleus สร้าง COX ใหม่ไม่ได้)",
      "ยา: nitrates = ให้ NO · sildenafil ยับยั้ง PDE5 → cGMP ↑ · bosentan ต้าน endothelin"
    ],
    d: [
      "ACh, bradykinin, shear -> eNOS -> NO -> guanylyl cyclase -> cGMP -> relax",
      "                                         nitrates --^    sildenafil keeps cGMP up"
    ]
  },
  "R-C7": {
    b: [
      "Myogenic = Bayliss effect · metabolic = สัญญาณความต้องการ",
      "สมอง: CO₂ เด่น → hyperventilate (PaCO₂ ↓) → หลอดเลือดสมองหด → ICP ↓ (ใช้ชั่วคราว)",
      "หัวใจ: ดึง O₂ ~70–75% ตั้งแต่ตอนพัก → เพิ่ม O₂ ได้ทางเดียวคือเพิ่ม flow (adenosine)",
      "ไต TGF: GFR ↑ → NaCl ที่ macula densa ↑ → afferent หด → GFR กลับ",
      "HTN เรื้อรัง: plateau เลื่อนขวา → ลด BP เร็วเกิน → สมองขาดเลือด"
    ],
    d: [
      "pressure up -> stretch -> Ca2+ in -> constrict -> flow back to normal   (myogenic)",
      "work up -> adenosine, CO2, H+, K+ up, O2 down -> dilate -> flow up      (metabolic)"
    ]
  },
  "R-C8": {
    b: [
      "Aldosterone → ENaC + Na⁺/K⁺-ATPase ที่ principal cells → เก็บ Na⁺ เสีย K⁺ → hyperaldosteronism = HTN + K⁺ ต่ำ",
      "Ang II หด efferent มากกว่า afferent → พยุง GFR ตอนเลือดไปไตน้อย",
      "ดังนั้น ACEi ใน bilateral renal artery stenosis → GFR ตก (AKI)",
      "ADH ไวต่อ osmolality ~1–2% แต่ต้องเสีย volume ~5–10%",
      "ยา HF ที่ยืดชีวิต: ACEi/ARB, spironolactone, sacubitril–valsartan"
    ],
    d: [
      "angiotensinogen --renin--> Ang I --ACE--> Ang II --AT1--> constrict, aldosterone, ADH, thirst",
      "                  ^aliskiren       ^ACEi           ^ARB",
      "bradykinin --ACE--> inactive   (ACEi -> bradykinin up -> dry cough, angioedema)"
    ]
  },
  "R-C9": {
    b: [
      "Funny current = HCN channel: เปิดเมื่อ hyperpolarize · cAMP ทำให้เปิดมากขึ้น",
      "β₁ (cAMP ↑) เร่ง · ACh (cAMP ↓) ช้า · ivabradine block I<sub>f</sub> → ลด HR อย่างเดียว",
      "เปลี่ยน HR ได้ 3 ทาง: ความชัน phase 4, threshold, จุดเริ่ม · vagus เปลี่ยนทั้งความชันและจุดเริ่ม",
      "Phospholamban เบรก SERCA · PKA ปลดเบรก → คลายเร็ว (lusitropy) + Ca²⁺ ใน SR มากขึ้น",
      "β-blocker: HR ↓ + contractility ↓ → O₂ demand ↓ → รักษา angina"
    ],
    d: [
      "sympathetic: steeper phase 4  -> reaches threshold sooner -> HR up",
      "vagus:       lower start + flatter phase 4 -> reaches threshold later -> HR down"
    ]
  },
  "R-C10": {
    b: [
      "HR พัก 90–110 = HR ของคนปกติหลังให้ atropine เต็มที่",
      "ออกกำลังกาย: SV ขึ้นก่อน (Starling) · HR ขึ้นทีหลังเมื่อ catecholamine มาถึง → ต้อง warm-up/cool-down นานขึ้น",
      "ขาดเลือดมักไม่เจ็บ (afferent ถูกตัดด้วย) → silent ischemia",
      "ยาที่ออกฤทธิ์ผ่านเส้นประสาทไม่ได้ผล (atropine) · ยาที่จับ receptor โดยตรงยังได้ผล (epinephrine, isoproterenol)"
    ],
    d: [
      "normal:     vagus --(-)--> SA (intrinsic ~100) -> rests at ~70",
      "transplant: no nerves      SA (intrinsic ~100) -> rests at ~100",
      "            adrenal Epi --(slow, via blood)--> HR up during exercise"
    ]
  },
  "R-C11": {
    b: [
      "ATLS: I &lt;15% ปกติ · II 15–30% HR ↑ PP แคบ · III 30–40% BP ตก สับสน · IV >40% อันตรายถึงชีวิต",
      "PP แคบ = SV ↓ (SBP ↓) แต่ TPR ↑ พยุง DBP",
      "Hct ช่วงแรกยังปกติ (เสียเลือดทั้งก้อน) → ลดเมื่อน้ำไหลเข้าหลอดเลือดแล้ว",
      "Shock index = HR / SBP > 1 → เสียเลือดมาก",
      "เสียเกิน ~30–40% → compensation ล้ม → หัวใจขาดเลือด → BP ตกต่อ (วงจรอุบาทว์)"
    ],
    d: [
      "0 s   --> baroreflex: HR up, TPR up, veins constrict",
      "min   --> Ang II, ADH (V1), fluid shift in -> Hct down",
      "h-d   --> aldosterone, ADH (V2), thirst -> volume back",
      "weeks --> EPO -> red cells back"
    ]
  },
  "F-C1": {
    b: [
      "หัวใจกบ = 2 atria + 1 ventricle · sinus venosus = SA node ของกบ",
      "Ventricle เป็นฟองน้ำ ได้ O₂ จากเลือดในห้อง → ไม่มี coronary → ผูกแล้วไม่ ischemia",
      "Sydney Ringer พบว่าหัวใจต้องการ Ca²⁺ จากหัวใจกบ → ที่มาของ Ringer’s solution",
      "สัตว์เลือดเย็น: อัตราการเต้นขึ้นกับอุณหภูมิ แต่ละกลุ่มจึงได้ค่าต่างกัน"
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
      "AV node ช้าโดยตั้งใจ: เซลล์เล็ก gap junction น้อย upstroke ด้วย Ca²⁺ → atria เติมเลือดให้เสร็จก่อน",
      "Atrial kick ≈ 15–25% ของการเติมเลือดขณะพัก",
      "Purkinje เร็ว: เส้นใยใหญ่ gap junction มาก upstroke ด้วย Na⁺ → ventricle บีบพร้อมกัน",
      "Plateau ยาว → AP ของ ventricle ~250–300 ms (เส้นประสาท ~1–2 ms)",
      "ยา: class I block Na⁺ · verapamil, adenosine ทำให้ AV node ช้า"
    ],
    d: [
      "fast response (Na+):   steep phase 0  -> fast conduction  (muscle, Purkinje)",
      "slow response (Ca2+):  gentle phase 0 -> slow conduction  (SA, AV node)"
    ]
  },
  "F-C3": {
    b: [
      "Na⁺ channel มี 2 gate: activation (m) เปิดเร็ว · inactivation (h) ปิดและเปิดใหม่หลัง repolarize เท่านั้น → ARP",
      "กล้ามเนื้อลาย: AP ~2–5 ms แต่ twitch ~10–100 ms → รวมกันได้ → tetanus",
      "R-on-T: กระตุ้นใน vulnerable period (ปลาย T ≈ RRP) → VF ได้",
      "Defibrillation: ทำให้ทุกเซลล์ refractory พร้อมกัน → จังหวะปกติเริ่มใหม่ได้"
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
      "ในคน: PVC → compensatory pause เต็ม (SA ไม่ถูก reset) · PAC → มักไม่เต็ม (SA ถูก reset)",
      "ผู้ป่วยรู้สึก “ใจหาย แล้วตุบแรง” = pause + beat ถัดไป ไม่ใช่ตัว PVC",
      "Post-extrasystolic potentiation: เติมเลือดนานขึ้น (Starling) + Ca²⁺ ใน SR มากขึ้น",
      "Beat ที่มาเร็ว เติมเลือดน้อย → ไปไม่ถึงข้อมือ → pulse deficit"
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
      "Overdrive suppression: ตัวเร็วขับนาน → latent pacemaker มี Na⁺ สะสม → Na⁺/K⁺ pump ทำให้ hyperpolarize → หยุดก่อน escape",
      "ในคน: pause หลัง tachycardia หยุดหรือหลัง cardioversion · sick sinus → junctional escape",
      "กฎ: pacemaker ที่เร็วที่สุดใต้จุด block ชนะ",
      "Ventricle ยัง 0 หลัง ligature II: escape ช้าเกินหรือไม่เกิดในเวลาที่สังเกต",
      "Complete heart block ที่ escape ช้า → ใส่ pacemaker"
    ],
    d: [
      "SV --X-- A ------ V     ligature I:  SV 60 | A, V 0 -> 32 (escape)",
      "SV --X-- A --X--- V     ligature II: SV 60 | A 32  | V 0"
    ]
  },
  "F-C6": {
    b: [
      "กล้ามเนื้อลายเพิ่มแรงด้วยการเรียก motor unit + summation · หัวใจทำไม่ได้ (ทุกเซลล์ยิงทุก beat)",
      "หัวใจจึงปรับแรงด้วย Ca²⁺ และการยืดแทน",
      "Treppe (Bowditch): อัตราเร็วขึ้น → แรงบีบเพิ่ม",
      "Digoxin: block Na⁺/K⁺-ATPase → Na⁺ ในเซลล์ ↑ → NCX ขับ Ca²⁺ ออกน้อยลง → contractility ↑"
    ],
    d: [
      "stimulus:  sub   threshold   x2    x4",
      "force:      0      ###       ###   ###    (same height)"
    ]
  },
  "T-C1": {
    b: [
      "Parasympathetic: pre ยาว post สั้น (ganglion อยู่บนอวัยวะ) · sympathetic: pre สั้น post ยาว",
      "ทุก ganglion เป็น nicotinic (Nn) · ปลายทางต่างกัน: M2 vs β₁",
      "หลักฐาน vagal tone: ให้ atropine คนหนุ่มสาว → HR ขึ้นเป็น ~100–120",
      "Sinus arrhythmia: HR ↑ ตอนหายใจเข้า (vagus ลด) ปกติในคนอายุน้อย",
      "ข้างขวาเน้น SA node · ข้างซ้ายเน้น AV node (ทั้ง vagus และ sympathetic)"
    ],
    d: [
      "PARA: medulla ==========(N)= M2  heart    long pre, short post",
      "SYMP: T1-T4 ==(N)=========== b1  heart    short pre, long post",
      "      adrenal medulla -> Epi -> blood -> b1"
    ]
  },
  "T-C2": {
    b: [
      "SA node อยู่ที่ RA ใกล้ SVC → right vagus · เป็นความเด่น ไม่ได้แยกขาด",
      "Vagal escape: กระตุ้นต่อเนื่องแล้ว ventricle กลับมาเต้นด้วย escape beat",
      "Vagal maneuver (Valsalva, carotid massage) → AV ช้า → หยุด SVT หรือเผยให้เห็น flutter wave"
    ],
    d: [
      "right vagus -> SA node -> rate down -> arrest       (chronotropic)",
      "left vagus  -> AV node -> A:V > 1:1 -> AV block     (dromotropic)"
    ]
  },
  "T-C3": {
    b: [
      "หา synapse: block จุดหนึ่ง · กระตุ้นเหนือจุด → ไม่ผ่าน · ใต้จุด → ผ่าน → synapse อยู่ระหว่างนั้น",
      "Nicotine 2 เฟส (กระตุ้นแล้ว block) = หลักเดียวกับ succinylcholine phase I ที่ NMJ",
      "Hexamethonium = ganglion blocker (ยาลดความดันรุ่นเก่า) → block ทั้ง sympathetic และ parasympathetic",
      "คนสูบบุหรี่: nicotine กระตุ้น sympathetic ganglia + adrenal → HR, BP ↑"
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
      "Mobitz I (Wenckebach): มักที่ AV node มาจาก vagus มักไม่อันตราย",
      "Mobitz II: ใต้ AV node (His–Purkinje) → กลายเป็น complete block ได้ → pacemaker",
      "Complete block: cannon a wave ใน JVP · S1 ดังไม่เท่ากันแต่ละ beat",
      "จำ: R ห่าง P = 1st · ยาว ยาว หลุด = Wenckebach · P บางตัวไม่ผ่าน = Mobitz II · P กับ QRS ไม่สัมพันธ์ = 3rd"
    ],
    d: [
      "1st:   P--[long PR]--QRS   P--[long PR]--QRS",
      "M-I:   PR 0.20 -> 0.28 -> 0.36 -> P (no QRS)",
      "M-II:  PR fixed ... P (no QRS)   -> dangerous",
      "3rd:   P  P  P  P  P   (regular)",
      "        QRS     QRS    (regular, slow, unrelated)"
    ]
  },
  "B-C1": {
    b: [
      "Windkessel: aorta ยืดเก็บพลังงานตอน systole แล้วหดคืนตอน diastole → พยุง DBP",
      "Aorta แข็ง (ผู้สูงอายุ) → SBP ↑ DBP ↓ → isolated systolic hypertension",
      "ตัวอย่าง: 120/80 → PP 40 → MAP ≈ 80 + 13 ≈ 93",
      "HTN: ≥140/90 (แนวทางไทย, ESC) · ACC/AHA ใช้ ≥130/80",
      "Oscillometric คำนวณ SBP/DBP ด้วย algorithm → ไม่แม่นใน AF"
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
      "Bladder แคบ → แรงกดส่งไม่ถึงหลอดเลือด → อ่านสูงเกิน",
      "แขนต่ำกว่าหัวใจทุก 10 cm → +~8 mmHg",
      "Auscultatory gap พบบ่อยใน HTN ที่หลอดเลือดแข็ง → บีบแค่ 140 อาจอ่านคนที่ 180 เป็น 130",
      "ควรวัด ≥2 ครั้ง ห่าง 1–2 นาที · ครั้งแรกวัดสองแขน ใช้แขนที่สูงกว่า"
    ],
    d: [
      "step 1  palpate: inflate until pulse gone, +20-30 -> deflate -> pulse back = palpatory SBP",
      "step 2  listen:  inflate to palpatory SBP +20-30 -> deflate slowly",
      "                 first tap = SBP (I)      silence = DBP (V)"
    ]
  },
  "B-C3": {
    b: [
      "Turbulence ↑ เมื่อความเร็ว ↑ ความหนืด ↓ (Reynolds) → flow murmur ใน anemia ไข้ ตั้งครรภ์",
      "Phase IV ถึง V ปกติห่าง ~5–10 mmHg · high output → เสียงลากถึง 0",
      "จำ phase: เคาะ → ฟู่ → เคาะคม → อู้อี้ → เงียบ",
      "Korotkoff บรรยายเสียงนี้ปี 1905"
    ],
    d: [
      "cuff > SBP       : artery shut all cycle      -> silent",
      "SBP > cuff > DBP : opens at each peak -> jet  -> sounds I-IV",
      "cuff < DBP       : open all cycle, laminar    -> silent (V)"
    ]
  },
  "B-C4": {
    b: [
      "กฎ 1: cuff ส่งแรงไม่ดี (เล็ก แคบ หลวม) → อ่าน<b>สูง</b>",
      "กฎ 2: อะไรที่ทำให้ BP สูงจริงชั่วคราว (พูด ปวด หนาว ปวดปัสสาวะ white coat) → <b>สูง</b>",
      "กฎ 3: ปล่อยลมเร็ว → เข็มผ่านเสียงแรกไปก่อนได้ยิน → SBP <b>ต่ำ</b>",
      "White-coat HTN: สูงที่คลินิก ปกติที่บ้าน · masked HTN: ตรงข้าม → ยืนยันด้วย home BP หรือ 24-h BP"
    ]
  },
  "B-C5": {
    b: [
      "SBP สูงขึ้นที่ปลายทาง: คลื่นสะท้อนรวมกับคลื่นขาไป + หลอดเลือดเล็กและแข็งขึ้น",
      "Coarctation: radio-femoral delay, rib notching, HTN ในคนอายุน้อย → วัด BP ที่ขา",
      "ABI > 1.4 = หลอดเลือดมีหินปูน กดไม่ลง (เบาหวาน, CKD) → ค่าเชื่อไม่ได้",
      "Hill’s sign: severe AR → SBP ขาสูงกว่าแขนมากผิดปกติ"
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
      "Muscle pump + respiratory pump ช่วยดันเลือดกลับ",
      "SBP ↓ ตาม SV ↓ · DBP ↑ ตาม TPR ↑ → PP แคบ",
      "สาเหตุ orthostatic hypotension: hypovolemia, ยา (α-blocker, diuretic, nitrate), autonomic failure (เบาหวาน, Parkinson), นอนนาน",
      "POTS: HR ↑ ≥30 bpm ใน 10 นาทีหลังยืน โดย BP ไม่ตก"
    ],
    d: [
      "stand -> 500-800 mL to legs -> VR down -> SV down -> carotid BP down",
      "      -> baro firing down -> SNS up, vagus down",
      "      -> HR up, TPR up, veins constrict -> BP back in seconds"
    ]
  },
  "B-C7": {
    b: [
      "Dynamic (วิ่ง): หลอดเลือดในกล้ามเนื้อขยาย → TPR ↓ → SBP ↑ DBP ≈",
      "Static (isometric): กล้ามเนื้อเกร็งบีบหลอดเลือด → TPR ↑ → SBP และ DBP ↑",
      "ยกของ + กลั้นหายใจ = Valsalva → BP พุ่ง",
      "CO 5 → 20–25 L/min ในคนฟิต · เลือดไปกล้ามเนื้อเพิ่ม ~15–20 เท่า",
      "HR ลด &lt;12 bpm ในนาทีแรกหลังออกกำลังกาย = พยากรณ์โรคไม่ดี"
    ],
    d: [
      "exercise -> SNS up -> HR up, SV up -> CO up -> SBP up",
      "         -> metabolites -> muscle arterioles dilate -> TPR down -> DBP ~ same"
    ]
  },
  "M-C1": {
    b: [
      "Starling: filtration = Kf × [(Pc − Pi) − σ(πc − πi)] → การทดลองส่วนใหญ่เปลี่ยน Pc",
      "กั้นเลือดแดง: Pc ↓ → ไม่กรอง · กั้นเลือดดำ: Pc ↑ → กรองมาก → บวม",
      "AV anastomoses (glomus) ที่นิ้ว หู จมูก → ระบายความร้อน"
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
      "ตัวกลางความเจ็บเดียวกับ angina และ claudication → ischemic pain",
      "O₂ debt มาก → hyperemia ใหญ่และนานขึ้น",
      "คลินิก: flow-mediated dilation test (รัด brachial 5 นาที แล้วดู ultrasound) วัดการทำงาน NO ของ endothelium"
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
      "เห็นเขียวได้เมื่อ deoxyhemoglobin ใน capillary ~5 g/dL",
      "Venous occlusion plethysmography (cuff ~40–50 mmHg) ใช้วัด arterial inflow ในงานวิจัย",
      "DVT หน้าตาเหมือนกัน: ทางออกอุด → ขาบวม อุ่น คล้ำ",
      "Tourniquet test (ไข้เลือดออก): cuff ที่ค่ากลาง SBP–DBP 5 นาที · บวกเมื่อ petechiae ≥10 จุดต่อตารางนิ้ว"
    ],
    d: [
      "cuff 30-40 : art in yes   vein out no -> engorged, reddish",
      "cuff 80-90 : art in peaks vein out no -> blue, swollen, petechiae",
      "cuff > SBP : art in no    vein out no -> pale (arterial occlusion)"
    ]
  },
  "M-C4": {
    b: [
      "ชื่อ Lewis triple response (Thomas Lewis, 1927)",
      "Antihistamine ลดทั้ง wheal และ flare · ยาชาเฉพาะที่ลบได้แค่ flare (ต้องอาศัยเส้นประสาท)",
      "Dermographism: ขูดเบาแล้วเกิด wheal มากเกิน → urticaria ชนิดหนึ่ง",
      "Capsaicin ทำให้ substance P หมด → flare เล็กลง"
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
      "ความเย็นทำให้ α₂-receptor ที่หลอดเลือดผิวหนังไวขึ้น → หดแรงขึ้น",
      "Hunting reaction ปกป้องนิ้ว หู จมูกจาก cold injury",
      "Raynaud: หดตัวมากเกินเมื่อเย็น → ขาว → เขียว → แดง",
      "Left shift เดียวกันอธิบายหูและจมูกแดงตอนหนาว"
    ],
    d: [
      "warm -> SNS down + local heat -> arterioles, AV shunts, veins dilate -> heat out",
      "cold -> SNS up + a2 sensitized -> constrict -> veins flat -> heat kept",
      "       below ~10-15 C -> cold-induced dilation in waves -> protects tissue"
    ]
  },
  "M-C6": {
    b: [
      "Hydrostatic pressure = ρgh · 1 cmH₂O ≈ 0.74 mmHg",
      "Varicose vein: ลิ้นรั่ว → คอลัมน์เลือดยาว → venous HTN → บวม แผล",
      "JVP ใช้หลักนี้: หลอดเลือดดำคอยุบเหนือระดับเลือด → ยอดคอลัมน์ = RA pressure",
      "ใส่ central line: ให้ศีรษะต่ำ + Valsalva กัน air embolism",
      "Passive leg raise ≈ เลือดคืน 150–300 mL → ทดสอบ fluid responsiveness ข้างเตียง"
    ],
    d: [
      "skull sinuses  ~ -10   rigid walls, cannot collapse",
      "neck veins     ~ 0     collapse",
      "heart (RA)     ~ 0     reference level",
      "foot veins     ~ +90   standing still"
    ]
  },
  "P-C1": {
    b: [
      "Apex เลื่อน = volume overload (MR, AR, DCM) · heave ค้าง = pressure overload (AS, HTN)",
      "Central cyanosis (ริมฝีปาก ลิ้น: ปอดหรือ shunt) vs peripheral (นิ้ว: flow ต่ำ เย็น)",
      "บวม: หัวใจ ตับ ไต albumin ต่ำ หลอดเลือดดำ น้ำเหลือง",
      "สาเหตุ right HF ที่พบบ่อยที่สุด = left HF"
    ],
    d: [
      "LV fails -> LA P up -> pulmonary veins up -> lung: dyspnea, orthopnea, PND, crackles",
      "RV fails -> RA P up -> systemic veins up  -> JVP up, liver up, leg edema"
    ]
  },
  "P-C2": {
    b: [
      "S1 ดังสุดที่ apex · S2 ดังสุดที่ base",
      "จังหวะ: S3 = “Ken-TUCK-y” · S4 = “TEN-nes-see”",
      "S1 ดังใน MS: ลิ้นยังเปิดกว้างตอน ventricle บีบ → ปิดกระแทก · S1 เบา: MR, 1st-degree AV block",
      "จับ carotid ไปด้วย: เสียงที่มาก่อน upstroke คือ S1"
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
      "ลำดับ area: “All Physicians Take Money” → right 2nd ICS → left 2nd → LLSB → apex",
      "RILE: Right ดังตอน Inspiration · Left ดังตอน Expiration",
      "Handgrip (afterload ↑) → MR, AR ดังขึ้น · AS เบาลง",
      "Valsalva ทำให้ murmur เบาลง ยกเว้น HOCM และ MVP",
      "Levine grade 1–6 · คลำ thrill ได้ = grade ≥4"
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
      "Pulsus paradoxus: pericardium จำกัดปริมาตร → หายใจเข้า RV เติมมาก → septum ดันซ้าย → LV SV ↓",
      "AR eponyms: Corrigan, de Musset (ผงกหัว), Quincke (เล็บเต้น), Traube (pistol-shot)",
      "AS อาการ: angina, syncope, dyspnea (“SAD”)",
      "นับ pulse deficit: สองคน apex กับ radial พร้อมกัน 1 นาที"
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
      "RA pressure ≈ CVP ≈ RV EDP (ถ้าไม่มี TS)",
      "JVP ↑: right HF, fluid overload, tamponade, constriction (Kussmaul: JVP ขึ้นตอนหายใจเข้า), SVC obstruction (ไม่เต้น)",
      "Giant a: TS, pulmonary HTN · cannon a: AV dissociation",
      "y ลึก: constrictive pericarditis · y หาย: tamponade"
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
      "หายใจเข้า A2 มาเร็วขึ้นเล็กน้อยด้วย (เลือดจากปอดกลับ LV ลดชั่วขณะ)",
      "Murmur ของ ASD = ejection systolic ที่ pulmonic area จาก flow ที่เพิ่ม ไม่ได้มาจากรู",
      "ASD ใหญ่ไม่รักษา → pulmonary HTN → shunt กลับทิศ → เขียว (Eisenmenger)"
    ],
    d: [
      "             expiration     inspiration",
      "normal       A2P2 single    A2 . P2 split",
      "wide         A2 . P2        A2 .  . P2      RBBB, PS",
      "fixed        A2 .. P2       A2 .. P2        ASD",
      "paradoxical  P2 . A2        single          LBBB, AS"
    ]
  },
  "D-C1": {
    b: [
      "Pressor = BP ↑ · depressor = BP ↓",
      "เส้นใยใหญ่มี myelin (A) ยิงที่กระแสต่ำ · เส้นใยเล็ก (Aδ, C) ต้องใช้กระแสสูง",
      "ยาสลบกด reflex → กราฟอาจไม่ตรงตำรา",
      "อ่านกราฟ: ดูค่า control ก่อน แล้วดูขนาดและทิศของการเปลี่ยน"
    ],
    d: [
      "brain <-- central end --X-- peripheral end --> organ",
      "stimulate central end    = fake sensory signal -> reflex",
      "stimulate peripheral end = fake motor command  -> direct effect"
    ]
  },
  "D-C2": {
    b: [
      "ถามเสมอ: sensor ถูก load หรือ unload · จุดหนีบ common carotid อยู่<b>ใต้</b> sinus",
      "Hering–Breuer reflex: stretch receptor ในปอด (ผ่าน vagus) หยุดการหายใจเข้า → ตัด vagus แล้วหายใจช้าและลึก",
      "Asphyxia: HR ขึ้นก่อน (chemoreflex) แล้วตก (หัวใจขาด O₂ + vagus)",
      "Vagal escape: กระตุ้น vagus ต่อเนื่องแล้ว ventricle กลับมาเต้นเอง"
    ],
    d: [
      "clamp common carotid -> sinus pressure down -> firing down -> BP up, HR up",
      "pull carotid sinus   -> stretch up          -> firing up   -> BP down, HR down"
    ]
  },
  "D-C3": {
    b: [
      "ดึงแรงขึ้น → ยืดมาก → เส้นใยถูกเรียกมากและยิงถี่ → BP ตกมาก",
      "กระตุ้นไฟฟ้าข้ามขั้นการยืด → พิสูจน์เส้นทางประสาท ไม่ใช่ตัวรับ",
      "หนีบ carotid สองข้าง → pressor มากขึ้น (ไม่มีอีกข้างช่วย buffer)",
      "Carotid massage: ห้ามถ้ามี carotid bruit หรือเพิ่งเป็น stroke (plaque หลุด)"
    ]
  },
  "D-C4": {
    b: [
      "ทุกกราฟ tilt มี 2 ช่วง: (A) ฟิสิกส์ = แรงโน้มถ่วงย้ายเลือด · (B) สรีรวิทยา = reflex แก้",
      "Tilt-table test ในคลินิกใช้วินิจฉัย vasovagal syncope และ POTS",
      "สุนัขมีคอลัมน์เลือดสั้นกว่าคนยืน → การเปลี่ยนแปลงน้อยกว่า"
    ],
    d: [
      "head-down: VR up   -> BP up (A)   -> baro up   -> HR down, TPR down -> BP settles (B)",
      "head-up:   VR down -> BP down (A) -> baro down -> HR up, TPR up     -> BP recovers (B)"
    ]
  },
  "D-C5": {
    b: [
      "กฎ: ตัดขา efferent ไหน → output นั้นหายไปอย่างเดียว ขาอื่นยังตอบ",
      "หายใจช้าและลึกหลังตัด vagus = เสีย Hering–Breuer reflex"
    ],
    d: [
      "sinus --IX--> NTS --+--> vagus  X (cut)  -> HR cannot fall",
      "                    +--> SNS down        -> BP still falls",
      "                    +--> phrenic down    -> RR still falls"
    ]
  },
  "D-C6": {
    b: [
      "Somatosympathetic reflex: เจ็บระหว่างผ่าตัดที่ยาสลบตื้น → HTN, tachycardia",
      "ในคนความเจ็บไปได้สองทาง: pressor หรือเป็นลมตอนเห็นเข็ม (vasovagal)",
      "Phrenic → กะบังลม = synapse ของกล้ามเนื้อลาย (nicotinic ACh)"
    ],
    d: [
      "low current  -> large afferents        -> depressor: vagus up, SNS down -> BP down, HR down",
      "high current -> + small pain fibers    -> pressor: SNS up, phrenic up   -> BP up, HR up, RR up"
    ]
  },
  "D-C7": {
    b: [
      "Splanchnic bed เก็บเลือด ~20–25% ของ volume → หดตัว = เติมเลือดคืนระบบ",
      "Epinephrine reversal: หลังให้ α-blocker, epinephrine ทำให้ BP ตก (เหลือแต่ β₂)",
      "คลินิก: NE = vasopressor ตัวแรกใน septic shock · phenylephrine = BP ต่ำจากยาสลบ · isoproterenol = ประคอง bradycardia/heart block",
      "Nitroglycerin: preload ↓ → wall stress และ O₂ demand ↓ → angina ดีขึ้น · ปวดหัว · ห้ามใช้กับ PDE5 inhibitor"
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
  "H-C1": {
    b: [
      "แยกทุกการทดลอง: ปัญหาการเติม (saline, เสียเลือด, หนีบ cava, NTG, tamponade) หรือปัญหาทางออก (AR, AS, coarctation)",
      "Venous return = (mean systemic filling pressure − RA pressure) ÷ venous resistance",
      "Bainbridge reflex: atria ถูกยืด → HR ↑ (สู้กับ baroreflex หลังให้น้ำ)"
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
      "IVC นำเลือดกลับ ~2/3 · SVC ~1/3",
      "ตั้งครรภ์ไตรมาสสามนอนหงาย: มดลูกกด IVC → BP ตก → ให้ตะแคงซ้าย",
      "SVC syndrome (มะเร็งปอด, lymphoma): หน้าและแขนบวม หลอดเลือดดำคอโป่ง",
      "PV loop: มุม end-diastolic เลื่อนซ้าย → loop แคบ (SV ↓) → ความดันยอดต่ำลง"
    ]
  },
  "H-C3": {
    b: [
      "ความดัน diastolic ทั้ง 4 ห้องเท่ากัน ≈ ความดันใน pericardium",
      "ความเร็วสำคัญ: 100–200 mL ทันทีถึงตายได้ · สะสมช้าได้ >1 L",
      "ECG อาจเห็น electrical alternans",
      "ประคองด้วย IV fluid (เพิ่ม filling pressure) · ห้าม diuretic, vasodilator",
      "HR ลดในแล็บ อาจเป็นเพราะ: coronary perfusion ↓ → หัวใจช้าจากขาดเลือด, reflex ยับยั้งจากหัวใจ, ยาสลบ"
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
      "AR เรื้อรัง: LV ขยายช้าๆ (eccentric hypertrophy) → SV มาก PP กว้าง ทนได้หลายปี",
      "AR เฉียบพลัน (endocarditis, dissection): ขยายไม่ทัน → pulmonary edema, shock",
      "DBP ต่ำ → coronary เติมเลือดไม่ดี (เติมตอน diastole) → angina",
      "Austin Flint murmur: เลือดที่รั่วกระแทก mitral leaflet → rumble กลาง diastole ที่ apex"
    ],
    d: [
      "normal loop: B (EDV) -> C -> D -> E -> A -> back to B",
      "AR: B moves right (EDV up), C lower (DBP down), loop wider (SV up)",
      "    E -> A no longer vertical: filling from the aorta starts at once"
    ]
  },
  "H-C5": {
    b: [
      "หัวใจของการสอน: sensor อยู่ก่อนหรือหลังจุดอุด → ตัดสินทิศของ reflex",
      "Coarctation: radio-femoral delay, rib notching, “3 sign” บน CXR · สัมพันธ์กับ bicuspid aortic valve และ Turner",
      "AS → LV หนาแบบ concentric → angina, syncope, dyspnea",
      "HR ลดตอนหนีบ ascending aorta อาจเป็นเพราะ: LV pressure overload กระตุ้น reflex ยับยั้งจาก ventricle หรือ LV ล้ม"
    ],
    d: [
      "LV -> [clamp] -> arch -> carotids             carotid sees LOW   (AS model)",
      "LV -> ascending -> carotids -> [clamp] -> desc  carotid sees HIGH  (coarctation model)"
    ]
  },
  "H-C6": {
    b: [
      "ในกระต่าย aortic depressor nerve แยกเป็นเส้นเดี่ยว (Ludwig และ Cyon) · ในสุนัขรวมอยู่ใน vagosympathetic trunk",
      "หลักเดียวกับแล็บ sciatic: กระแสต่ำ = เส้นใยใหญ่ · กระแสสูง = เส้นใยเล็ก",
      "กระตุ้น right vagus นาน → vagal escape ในไม่กี่วินาที"
    ],
    d: [
      "aortic nerve  low current  -> baro fibers         -> depressor (BP down, HR down)",
      "aortic nerve  high current -> + chemo fibers      -> pressor (BP up, HR up)",
      "right vagus (peripheral)   -> ACh at SA node      -> arrest (BP -> 20/0)"
    ]
  },
  "H-C7": {
    b: [
      "AF: atria ยิง ~350–600/min · AV node กรอง → ventricle เต้นไม่สม่ำเสมอ",
      "เสีย atrial kick (~15–25%) → CO ↓ ยิ่งแย่ถ้า ventricle แข็ง",
      "เลือดค้างใน left atrial appendage → clot → embolic stroke → ให้ anticoagulant ตาม CHA₂DS₂-VASc",
      "PP กว้างใน AF ของสุนัข อาจเป็นเพราะ: pause ยาว → เติมมาก (SV ↑) และเลือดไหลออกจาก aorta นาน (DBP ↓)",
      "VF: ไม่มี output = cardiac arrest → CPR + shock แบบ unsynchronized · AF ใช้ synchronized cardioversion"
    ],
    d: [
      "AF: ~~v~~|~~v~|~~~~v~~~|~|   no P waves, irregular narrow QRS",
      "VF: vvvvvvvvvvvvvvvvvvvvvv   chaotic, no QRS, no pulse"
    ]
  }
};
