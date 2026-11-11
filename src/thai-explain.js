/* Thai explanation of every concept card, shared by both decks and the PDF.
   One short line per idea: a bold topic, then the cause → effect chain. 4–5 lines per card. */
window.THAI_EXPLAIN = {
  /* ---------- R · Regulation ---------- */
  "R-C1": [
    "<b>สมการหลัก</b> MAP = CO × TPR = HR × SV × TPR → BP เปลี่ยน = ตัวใดตัวหนึ่งในสมการเปลี่ยน",
    "<b>HR</b> SA node กำหนด: sympathetic (β₁) เร่ง · vagus (M2) ชะลอ",
    "<b>SV</b> preload (Frank–Starling) + contractility − afterload",
    "<b>TPR</b> arteriole คุม (R ∝ 1/r⁴) → รัศมีเปลี่ยนนิดเดียว แรงต้านเปลี่ยนมาก → เป้าของยาลดความดัน",
    "<b>วิธีคิด</b> stimulus → ขยับตัวปรับไหน (HR, contractility, venous tone, arteriolar tone, blood volume) → MAP ขึ้นหรือลง"
  ],
  "R-C2": [
    "<b>วินาที</b> ระบบประสาท: baroreflex → chemoreflex (MAP &lt; 80) → CNS ischemic (MAP &lt; 60)",
    "<b>นาที–ชั่วโมง</b> Ang II หดหลอดเลือด · stress relaxation · น้ำย้ายเข้าออก capillary",
    "<b>ชั่วโมง–วัน</b> ไต: pressure natriuresis, aldosterone, ADH, กระหายน้ำ → ปรับปริมาตรเลือด",
    "<b>ทำไมไตชนะระยะยาว</b> baroreflex reset ใน 1–2 วัน · ไตมี infinite gain → แก้จนกลับค่าเดิม",
    "<b>คำใบ้โจทย์</b> “ลุกยืน” → baroreflex · “ท้องเสีย 5 วัน” → ไต"
  ],
  "R-C3": [
    "<b>RVLM (C-1)</b> ยิงตลอดเวลา → sympathetic tone พื้นฐานของหลอดเลือด",
    "<b>CVLM (A-1)</b> ไม่ได้สั่งขยายเอง → ไปกด C-1 → sympathetic ↓",
    "<b>NTS (A-2)</b> รับ CN IX, X จาก baro/chemoreceptor → สั่งศูนย์อื่นต่อ",
    "<b>Vagus center</b> nucleus ambiguus, DMNX → HR ↓, AV conduction ↓",
    "<b>Adrenal medulla</b> preganglionic ใน splanchnic → หลั่ง epinephrine (~80%) เข้าเลือด · อารมณ์ → vasovagal syncope"
  ],
  "R-C4": [
    "<b>ตัวรับ</b> carotid sinus (CN IX) + aortic arch (CN X) → NTS · ไวทั้งระดับความดันและความเร็วที่เปลี่ยน",
    "<b>BP สูง</b> ยิงมากขึ้น → vagus ↑ (HR ↓) + RVLM ถูกกด (sympathetic ↓) → TPR ↓, venodilation → BP ลง",
    "<b>BP ตก</b> ยิงน้อยลง → sympathetic ↑, vagus ↓ → HR ↑, หลอดเลือดหด",
    "<b>ช่วงทำงาน</b> ~60–180 mmHg ไวสุดใกล้ MAP ปกติ",
    "<b>กับดัก</b> carotid sinus = baroreceptor · carotid body = chemoreceptor"
  ],
  "R-C5": [
    "<b>เกณฑ์ MAP</b> baroreflex 60–180 · chemoreflex &lt; 80 · CNS ischemic &lt; 60",
    "<b>Chemoreceptor</b> MAP ต่ำ → เลือดไป carotid/aortic body น้อย → เซลล์ขาด O₂ → ยิง → BP ↑ + หายใจ ↑",
    "<b>CNS ischemic</b> vasomotor center ขาดเลือด, CO₂ คั่ง → sympathetic แรงสุด → BP พุ่ง",
    "<b>Cushing</b> ICP ↑ → กลไกเดียวกัน → hypertension + bradycardia (baroreflex) + หายใจผิดจังหวะ"
  ],
  "R-C6": [
    "<b>หดหลอดเลือด</b> NE/Epi (α₁), Ang II, ADH (V1 แรงสุด), endothelin-1, TXA₂",
    "<b>NO</b> shear stress → endothelium หลั่ง NO → cGMP → ขยาย + ต้านเกล็ดเลือด",
    "<b>Histamine</b> เนื้อเยื่อบาดเจ็บ → mast cell → ขยาย + permeability ↑ → บวม",
    "<b>ขยายอื่น</b> prostacyclin, ANP, Epi ขนาดต่ำ (β₂), metabolite: adenosine, CO₂, H⁺, K⁺"
  ],
  "R-C7": [
    "<b>Metabolic</b> ทำงานหนัก → adenosine, CO₂, H⁺, K⁺ ↑, O₂ ↓ → ขยาย → flow ↑ (active hyperemia)",
    "<b>Myogenic</b> ความดัน ↑ → ผนังยืด → Ca²⁺ เข้า → หด → flow กลับเท่าเดิม",
    "<b>Autoregulation</b> ความดันเปลี่ยน แต่ flow คงที่ (เด่นที่ไต) · ต่างจาก active hyperemia ที่ flow เพิ่มตามงาน",
    "<b>ระยะยาว</b> ทำงานหนักเป็นเดือน → angiogenesis · หลอดเลือดอุดเรื้อรัง → collateral"
  ],
  "R-C8": [
    "<b>Renin ออก</b> เลือดไปไตน้อย, NaCl ที่ macula densa น้อย, sympathetic ↑",
    "<b>RAAS</b> angiotensinogen → Ang I → (ACE ที่ปอด) → Ang II → หดหลอดเลือด + aldosterone + ADH + กระหาย",
    "<b>ACE inhibitor</b> Ang II ↓ → aldosterone ↓ · bradykinin คั่ง → ไอแห้ง",
    "<b>CKD</b> GFR ↓ → เกลือ น้ำคั่ง → ความดันสูง · <b>HF</b> เลือดไปไตน้อย → RAAS ทำงาน → บวม",
    "<b>Pressure natriuresis</b> BP ↑ → ขับ Na⁺, น้ำ → BP ↓ (infinite gain)"
  ],
  "R-C9": [
    "<b>SA node</b> phase 4 ไต่ขึ้นด้วย funny current (Na⁺ เข้า) → ชันมาก = HR เร็ว",
    "<b>Sympathetic (β₁)</b> cAMP ↑ → I_f, I_Ca ↑ → phase 4 ชัน → HR ↑ · Ca²⁺ ↑ → บีบแรง",
    "<b>Vagus (M2)</b> K⁺ ออก → hyperpolarize + phase 4 แบน → HR ↓, AV ช้า",
    "<b>ปริมาตร</b> sympathetic: EDV เท่าเดิม, ESV ↓, SV ↑, EF ↑",
    "<b>α₁ agonist</b> afterload ↑ แต่ไม่เพิ่ม contractility"
  ],
  "R-C10": [
    "<b>ไม่มีเส้นประสาท</b> ไม่มี vagal tone → HR พักสูงกว่าปกติ (~100)",
    "<b>ออกกำลังกาย</b> HR ขึ้นช้าและน้อย → อาศัย catecholamine จาก adrenal ในเลือด",
    "<b>SV</b> ยังเพิ่มได้ผ่าน Frank–Starling + afterload ลด",
    "<b>ยา</b> β-agonist ได้ผล · atropine ไม่มีผล (ไม่มี vagal tone ให้ block)"
  ],
  "R-C11": [
    "<b>ผลตรง</b> เลือดน้อย → venous return ↓ → SV ↓ → BP ↓ → ชีพจรเบา, pulse pressure แคบ",
    "<b>วินาที</b> baroreceptor ยิงน้อย → sympathetic ↑ → HR ↑, SVR ↑, ตัวเย็นซีด",
    "<b>นาที–ชั่วโมง</b> Ang II · น้ำจาก interstitium เข้าหลอดเลือด → Hct ลด",
    "<b>ชั่วโมง–วัน</b> aldosterone, ADH, กระหายน้ำ → ไตเก็บเกลือ น้ำ · EPO สร้างเม็ดเลือดใหม่"
  ],

  /* ---------- F · Frog heart ---------- */
  "F-C1": [
    "<b>อ่านกราฟ</b> เส้นขาลง (A) = diastole · เส้นขาขึ้น (B) = systole",
    "<b>ลำดับ</b> sinus venosus (≈ SA node) → atria → ventricle",
    "<b>4 การทดลอง</b> สังเกต · extrasystole · Stannius ligature · all-or-none",
    "<b>ไม่มี coronary</b> หัวใจกบได้ O₂ จากเลือดในห้อง → ผูกแล้วไม่ ischemia"
  ],
  "F-C2": [
    "<b>เซลล์ 3 แบบ</b> pacemaker (automaticity) · นำไฟฟ้า · กล้ามเนื้อหดตัว (gap junction → syncytium)",
    "<b>ทางไฟ</b> SA → AV node (หน่วงให้ atria บีบก่อน) → His → bundle branches → Purkinje",
    "<b>ความเร็ว</b> ตามความชัน phase 0: Purkinje เร็วสุด · AV node ช้าสุด",
    "<b>SA เป็นผู้นำ</b> เพราะยิงเร็วที่สุด ไม่ใช่เพราะตำแหน่ง · สำรอง AV 40–60, ventricle 20–40"
  ],
  "F-C3": [
    "<b>ARP</b> Na⁺ channel inactivated → กระตุ้นแรงแค่ไหนก็ไม่ยิง",
    "<b>RRP</b> ยิงได้แต่ต้องใช้กระแสมากขึ้น",
    "<b>ไม่มี tetanus</b> ARP ยาวเกือบเท่าการหดตัว → หัวใจคลายและเติมเลือดทุกรอบ",
    "<b>กับดัก</b> ARP ไม่ได้มีแค่ช่วง depolarization แต่ยาวถึงกลาง repolarization"
  ],
  "F-C4": [
    "<b>ช็อตช่วง systole</b> ตกใน ARP → ไม่เกิด extrasystole",
    "<b>ช็อตช่วง diastole</b> เกิด extrasystole + compensatory pause",
    "<b>Pause</b> สัญญาณปกติรอบถัดไปตกใน refractory ของ extra beat → หายไป → รอรอบถัดไป",
    "<b>ขนาดต่างกัน</b> ช็อตยิ่งช้าใน diastole → เติมมาก (preload) → beat ใหญ่ · beat หลัง pause แรงสุด"
  ],
  "F-C5": [
    "<b>Ligature I</b> กั้น SV–atria → atria, ventricle หยุด แล้วกลับมาเต้นช้าลง → automaticity",
    "<b>Ligature II</b> กั้น AV → ventricle หยุด · atria ยังเต้น",
    "<b>หลัก</b> ligature = heart block · pacemaker สำรองที่เร็วที่สุดใต้จุด block ชนะ",
    "<b>ในคน</b> SA เสีย → AV node รับแทน (40–60, QRS แคบ) · block ต่ำ → Purkinje (20–40)"
  ],
  "F-C6": [
    "<b>ผล</b> ต่ำกว่า threshold ไม่หด · ถึง threshold หดเต็มที่ · แรงขึ้นก็ขนาดเท่าเดิม",
    "<b>ทำไม</b> AP แบบ all-or-none + ทั้งก้อนเป็น syncytium → ยิงพร้อมกันทั้งก้อน",
    "<b>เพิ่มแรงได้ทางอื่น</b> preload (Frank–Starling) หรือ contractility (catecholamine, Ca²⁺, digitalis)"
  ],

  /* ---------- T · Turtle vagus ---------- */
  "T-C1": [
    "<b>Vagus</b> preganglionic ยาว → ganglion บนหัวใจ (nicotinic, ในเต่า = crescentic line) → postganglionic สั้น → M2",
    "<b>Sympathetic</b> T1–T4 → stellate ganglion → postganglionic ยาว → β₁ (nodes + ventricle)",
    "<b>Vagal tone</b> vagus ทำงานตลอดแม้ขณะพัก → intrinsic ~100 เหลือ ~70",
    "<b>ACh</b> K⁺ ออก → hyperpolarize + phase 4 แบน → ช้าลง · vagus ไป ventricle น้อย"
  ],
  "T-C2": [
    "<b>Right vagus</b> → SA node → rate ↓ → หัวใจหยุด",
    "<b>Left vagus</b> → AV node → นำไฟฟ้าช้า → atria เร็วกว่า ventricle = AV block",
    "<b>ทำไม</b> vagus สองข้างส่งเส้นใยไป SA กับ AV ไม่เท่ากัน (คนก็เหมือนกัน)",
    "<b>ตัดเส้นประสาท</b> ไม่เปลี่ยนอะไร · หยุดกระตุ้นแล้วหัวใจฟื้น"
  ],
  "T-C3": [
    "<b>วงจร</b> vagus → ganglion ที่ crescentic line (nicotinic) → postganglionic → M2 → HR ↓",
    "<b>Nicotine ขนาดต่ำ</b> กระตุ้น ganglion → ACh มากขึ้น → HR ↓",
    "<b>ขนาดสูง</b> depolarization block → เสีย vagal tone (HR ↑ เล็กน้อย) · กระตุ้น vagus ไม่ผ่าน",
    "<b>สรุปตำแหน่ง synapse</b> กระตุ้น crescentic line ยังหยุดหัวใจได้ → อยู่ใต้ block → synapse อยู่ที่นั่น",
    "<b>Atropine</b> block M2 → กระตุ้นทางไหนก็ไม่ช้าลง"
  ],
  "T-C4": [
    "<b>Gaskell’s clamp</b> หนีบ AV แน่นขึ้นทีละขั้น → ventricle ช้าลงจนหยุด · atria 60 ตลอด",
    "<b>1st degree</b> ผ่านทุกตัวแต่ช้า PR &gt; 0.20 s",
    "<b>2nd degree</b> Mobitz I: PR ยาวขึ้นแล้วหลุด · Mobitz II: หลุดทันที",
    "<b>3rd degree</b> ไม่ผ่านเลย → AV dissociation → ventricle เต้นช้า 30–40 → หมดสติ",
    "<b>คนปกติ</b> vagal tone สูง (นักกีฬา, หลับ), β-blocker, digoxin"
  ],

  /* ---------- B · Blood pressure ---------- */
  "B-C1": [
    "<b>SBP</b> stroke volume + ความแข็งหลอดเลือด · <b>DBP</b> peripheral resistance",
    "<b>Pulse pressure</b> กว้าง: AR, หลอดเลือดแข็ง, ออกกำลังกาย · แคบ: AS, tamponade, hypovolemia",
    "<b>MAP</b> ≈ DBP + ⅓ PP เพราะ diastole ยาวราวสองเท่าของ systole",
    "<b>วิธีวัด</b> direct (invasive) · sphygmomanometer (indirect gold standard) · palpatory (SBP เท่านั้น) · oscillometric (จุดสั่นสูงสุด = MAP)"
  ],
  "B-C2": [
    "<b>เตรียม</b> งดบุหรี่ กาแฟ อาหาร ออกกำลังกาย 30 นาที · พัก 5 นาที · ไม่พูด",
    "<b>แขน</b> วางระดับหัวใจ · cuff เหนือข้อพับ ~2.5 cm",
    "<b>ขนาด cuff</b> bladder กว้าง ~40%, ยาว 80–100% ของรอบแขน",
    "<b>คลำก่อน</b> หา palpatory SBP → แล้วฟัง: เสียงแรก = SBP, เสียงหาย = DBP → กัน auscultatory gap"
  ],
  "B-C3": [
    "<b>ที่มาของเสียง</b> เลือดพุ่งแบบ turbulent ผ่านหลอดเลือดที่ถูกกดบางส่วน",
    "<b>Phase I</b> เสียงเคาะแรก = SBP",
    "<b>Phase IV</b> อู้อี้ → ใช้เป็น DBP ในเด็ก หญิงตั้งครรภ์ AR",
    "<b>Phase V</b> เสียงหาย = DBP ในผู้ใหญ่ · cuff สูงกว่า SBP หลอดปิด, ต่ำกว่า DBP ไหล laminar → เงียบ"
  ],
  "B-C4": [
    "<b>อ่านสูงเกิน</b> cuff เล็ก/แคบ/หลวม, แขนต่ำกว่าหัวใจ, พูด, ปวดปัสสาวะ, กาแฟ, white coat",
    "<b>อ่านต่ำเกิน</b> cuff ใหญ่/แน่น (ตามเฉลยวิชา), แขนสูงกว่าหัวใจ, ปล่อยลมเร็ว",
    "<b>ทำไม cuff แคบอ่านสูง</b> ต้องใช้แรงกดมากกว่าจะปิดหลอดเลือด",
    "<b>ไม่คลำก่อน</b> อาจพลาด auscultatory gap → อ่าน SBP ต่ำ"
  ],
  "B-C5": [
    "<b>ท่านอน</b> SBP ที่ขาสูงกว่าแขน → คลื่นความดันสะท้อนและสูงขึ้นตามทาง",
    "<b>SBP สูงสุด</b> femoral artery (เทียบ aorta, arteriole, หลอดเลือดดำ)",
    "<b>แขนข้างหนึ่งสูง</b> วัดอีกข้างเสมอ (ต่าง &gt; 10–15 → subclavian stenosis, dissection)",
    "<b>Coarctation</b> แขนสูง ขาต่ำ femoral pulse เบาและช้า · ABI &lt; 0.9 → PAD"
  ],
  "B-C6": [
    "<b>ลุกยืน</b> เลือด 500–800 mL ค้างที่ขา → venous return ↓ → SV ↓ → BP ที่ carotid sinus ตก",
    "<b>Reflex</b> baroreceptor ยิงน้อย → sympathetic ↑ → HR ↑, หลอดเลือดหด → BP กลับในไม่กี่วินาที",
    "<b>CO</b> ยังต่ำกว่าท่านอนแม้มี reflex",
    "<b>นอนลง</b> venous return ↑ → baroreceptor ยิงมาก → HR ↓ · ตัด right vagus แล้วยืน HR ยังเพิ่ม (sympathetic)"
  ],
  "B-C7": [
    "<b>ออกกำลังกาย</b> sympathetic → HR, SV, CO ↑ → SBP ↑",
    "<b>DBP ไม่ขึ้น</b> กล้ามเนื้อหลั่ง metabolite → TPR ↓ → pulse pressure กว้าง",
    "<b>หยุดแล้วยืนนิ่ง</b> ขาด muscle pump → venous return ตก → หน้ามืด",
    "<b>ยกของหนัก + กลั้นหายใจ</b> SBP และ DBP พุ่ง → เลี่ยงในความดันสูงที่คุมไม่ได้"
  ],

  /* ---------- M · Microcirculation ---------- */
  "M-C1": [
    "<b>กั้นเลือดแดง</b> ซีด เย็น ไม่มีชีพจร → ปล่อยแล้วแดงร้อน (reactive hyperemia)",
    "<b>กั้นเลือดดำ</b> เลือดเข้าได้ ออกไม่ได้ → หลอดเลือดดำโป่ง ผิวคล้ำ",
    "<b>ขูดผิว</b> เบา → เส้นขาว · แรง → red line, flare, wheal (triple response)",
    "<b>น้ำอุ่น/เย็น และยกแขน</b> หลอดเลือดผิวคุมอุณหภูมิ · แรงโน้มถ่วง (hydrostatic)"
  ],
  "M-C2": [
    "<b>Cuff 200 mmHg</b> สูงกว่า SBP → เลือดไม่เข้าไม่ออก → ซีด เย็น ปวด",
    "<b>ไม่บวม</b> ไม่มีเลือดเข้า → ความดัน capillary ต่ำ → ไม่กรองน้ำออก",
    "<b>ปล่อย cuff</b> metabolite ที่คั่งทำให้ขยาย → เลือดอุ่นทะลักเข้า → deoxyHb ลดเร็ว",
    "<b>ระยะเวลา</b> นานตามเวลาที่รัด (ชดใช้ O₂ debt)"
  ],
  "M-C3": [
    "<b>Cuff 30–40</b> เลือดแดงเข้าได้ เลือดดำออกไม่ได้ → หลอดเลือดดำโป่ง ผิวแดงม่วง",
    "<b>Cuff 80–90</b> เลือดเข้าเฉพาะยอด systole → ผิวคล้ำเขียว, petechiae",
    "<b>บวม</b> ความดันหลอดเลือดดำ ↑ → capillary ↑ → กรองน้ำออก",
    "<b>Passive</b> หลอดเลือดดำโป่งเพราะเลือดคั่ง arteriole ไม่ได้ขยาย · tourniquet test ในไข้เลือดออก"
  ],
  "M-C4": [
    "<b>White reaction</b> ขูดเบา → รีดเลือดออกเชิงกล",
    "<b>Red line</b> histamine เฉพาะที่ → หลอดเลือดเล็กขยาย",
    "<b>Flare</b> axon reflex: C fiber ส่งย้อน (antidromic) → substance P, CGRP → ขยายเป็นวง",
    "<b>Wheal</b> permeability ↑ → บวม · แมลงกัดก็กลไกเดียวกัน"
  ],
  "M-C5": [
    "<b>น้ำอุ่น</b> sympathetic ↓ + ความร้อน → หลอดเลือดขยาย → ผิวแดง หลอดเลือดดำเต็ม",
    "<b>น้ำเย็นจัด</b> หลอดเลือดดำหดแบน แต่ผิวยังแดง",
    "<b>ทำไมยังแดง</b> Hb เย็นจับ O₂ แน่น (left shift) + hunting reaction"
  ],
  "M-C6": [
    "<b>ยกแขน</b> ซีด หลอดเลือดดำแฟบ → ความดันหลอดเลือดดำที่มือ ≈ 0",
    "<b>ห้อยแขน</b> แดงม่วง หลอดเลือดดำเต็ม → hydrostatic เพิ่ม → กรองน้ำมากขึ้น",
    "<b>ยืน</b> dural sinus ในกะโหลกยุบไม่ได้ → ความดันติดลบ → เสี่ยง air embolism",
    "<b>หายใจเข้า</b> ความดันช่องอก ↓ → venous return ↑"
  ],

  /* ---------- P · Physical examination ---------- */
  "P-C1": [
    "<b>ดู</b> เขียว/บวม อาจไม่ใช่จากหัวใจ (ปอด ไต ตับ)",
    "<b>คลำ</b> PMI ที่ left 5th ICS MCL · เลื่อน → LV dilation · heave → LVH · parasternal heave → RVH",
    "<b>ฟัง</b> diaphragm = เสียงสูง · bell = เสียงต่ำ (S3, S4, MS)",
    "<b>HF</b> ซ้าย → ปอด (หอบ นอนราบไม่ได้) · ขวา → หลอดเลือดดำ (JVP ↑ ตับโต ขาบวม)"
  ],
  "P-C2": [
    "<b>ลำดับ</b> atrial systole → S1 → isovolumetric contraction → ejection → S2 → isovolumetric relaxation → filling",
    "<b>S1</b> mitral + tricuspid ปิด · มาก่อน carotid upstroke",
    "<b>S2</b> aortic + pulmonic ปิด · แยกตอนหายใจเข้า · wide fixed split = ASD",
    "<b>S3/S4</b> S3 = เติมเร็ว (HF ในผู้ใหญ่) · S4 = atrium บีบใส่ ventricle แข็ง (ไม่มีใน AF)"
  ],
  "P-C3": [
    "<b>ตำแหน่ง</b> aortic = right 2nd ICS · pulmonic = left 2nd ICS · tricuspid = LLSB · mitral = apex",
    "<b>Systolic หรือ diastolic</b> พร้อม carotid pulse = systolic · หลัง S2 = diastolic",
    "<b>Systolic</b> ejection: AS, PS · pansystolic: MR, TR",
    "<b>Diastolic</b> early (blowing): AR, PR · mid rumble: MS, TS (ฟังด้วย bell)"
  ],
  "P-C4": [
    "<b>Collapsing</b> ขึ้นเร็วตกเร็ว → AR",
    "<b>Parvus et tardus</b> เล็ก ช้า → AS",
    "<b>Paradoxus</b> SBP ตก &gt; 10 ตอนหายใจเข้า → tamponade",
    "<b>Deficit</b> apex มากกว่า radial → AF · Beck’s triad = BP ต่ำ, JVP ↑, เสียงหัวใจเบา"
  ],
  "P-C5": [
    "<b>วิธีดู</b> เอน 45° ดู right internal jugular vein",
    "<b>วัด</b> ความสูงเหนือ sternal angle + 5 cm ≈ ความดัน RA",
    "<b>a wave</b> RA บีบ → หายใน AF · cannon a ใน complete heart block",
    "<b>v wave</b> RA เติมเลือด → ใหญ่ใน TR"
  ],
  "P-C6": [
    "<b>หายใจเข้าปกติ</b> venous return ↑ → RV บีบนานขึ้น → P2 ช้า → S2 แยก",
    "<b>Deep inspiration</b> เพิ่ม venous return ได้เร็วที่สุด",
    "<b>ASD</b> LA → RA ตลอด → RV รับเลือดเกิน → wide split",
    "<b>Fixed</b> หายใจเข้า RA ↑ → shunt ↓ → RV ได้เท่าเดิม → split คงที่ (shunt volume คือค่าที่ลด)"
  ],

  /* ---------- D · Dog lab I ---------- */
  "D-C1": [
    "<b>บันทึก</b> BP, HR, การหายใจ, CVP ในสุนัขที่ดมยาสลบ",
    "<b>4 คำถาม</b> อะไรเปลี่ยนก่อน → ตัวรับไหน → ขาไหนตอบ → มีขาไหนถูกตัด",
    "<b>ปลาย peripheral</b> ทดสอบ efferent · <b>ปลาย central</b> ทดสอบ afferent + reflex",
    "<b>กระแสต่ำ</b> เส้นใยใหญ่ (baro) · <b>กระแสสูง</b> เพิ่มเส้นใยเล็ก (chemo, ปวด)"
  ],
  "D-C2": [
    "<b>หนีบ common carotid</b> ความดันใน sinus ตก → unload → BP, HR, RR ↑",
    "<b>ดึง/นวด sinus</b> ยิงมากขึ้น → BP, HR, RR ↓",
    "<b>ตัด vagus สองข้าง</b> HR ไม่ช้าลง (ขา effector ถูกตัด) แต่ BP, RR ยังลด",
    "<b>Sciatic ปลาย central</b> กระแสต่ำ depressor · สูง pressor (ปวด)",
    "<b>CO₂</b> ทั่วร่างกระตุ้น chemoreceptor → BP ↑ · เฉพาะที่ CO₂ ขยายหลอดเลือด"
  ],
  "D-C3": [
    "<b>ดึงหรือกระตุ้น sinus</b> baroreceptor ยิงมาก → BP, HR, RR ↓ (ดึงแรงยิ่งลดมาก)",
    "<b>หนีบ common carotid</b> sinus อยู่เลยจุดหนีบ → ความดันใน sinus ตก → BP, HR, RR ↑",
    "<b>Carotid massage</b> vagal tone ↑ → HR ↓ AV ช้า → หยุด SVT บางชนิด"
  ],
  "D-C4": [
    "<b>2 ช่วง</b> (A) แรงโน้มถ่วงย้ายเลือด · (B) reflex แก้กลับ",
    "<b>Head down</b> venous return ↑ → BP ↑ ก่อน → baroreflex ดึง BP, HR ลง",
    "<b>Head up</b> เลือดค้างส่วนล่าง → BP ↓ ก่อน → HR ↑, หลอดเลือดหด → BP กลับ",
    "<b>เหมือนลุกยืน</b> carotid sinus รับรู้ก่อน"
  ],
  "D-C5": [
    "<b>หลังตัด vagus</b> ดึง sinus → BP ↓, RR ↓ แต่ HR ไม่ลด",
    "<b>ทำไม HR ไม่ลด</b> vagus คือ efferent ที่ทำให้หัวใจช้า → ถูกตัดแล้ว",
    "<b>ทำไม BP ยังลด</b> sympathetic ถอนตัว · หายใจช้าลงจาก phrenic ถูกกด",
    "<b>ตัด vagus เอง</b> หายใจช้าลึก → เสีย lung stretch afferent"
  ],
  "D-C6": [
    "<b>กระแสต่ำ</b> เส้นใยใหญ่ → depressor: vagus ↑ (M2 ที่ SA, AV ช้า) → BP, HR ↓",
    "<b>กระแสสูง</b> เพิ่มเส้นใยปวด → pressor: sympathetic + phrenic → BP, HR, RR ↑",
    "<b>เฉลยข้อสอบ</b> กระแสต่ำ BP, HR, RR ลดทั้งหมด (กราฟจริง RR แทบไม่เปลี่ยน)"
  ],
  "D-C7": [
    "<b>Splanchnic</b> BP ขึ้นสองจังหวะ: หลอดเลือดช่องท้องหด → epinephrine จาก adrenal",
    "<b>หยุดกระตุ้น</b> BP ต่ำกว่า baseline → epinephrine ที่เหลือขนาดต่ำออกฤทธิ์ β₂ ขยาย",
    "<b>หลังตัด vagus</b> ไม่มี reflex bradycardia → HR ↑ · เหลือแค่หายใจช้าลง",
    "<b>ยา</b> Epi ต่ำ: BP ↓ HR ↑ · Epi สูง: BP ↑↑, RR ↓ · phenylephrine: BP ↑ HR ↓ · isoproterenol: BP ↓ HR ↑↑ · NTG: venodilation, CVP ↓"
  ],

  /* ---------- H · Dog lab II ---------- */
  "H-C1": [
    "<b>ให้น้ำเกลือ</b> venous return ↑ → SV, CO ↑ (Frank–Starling)",
    "<b>เสียเลือด</b> CVP, BP ↓ HR, RR ↑ · น้ำเข้าหลอดเลือด → Hct ลด",
    "<b>หนีบ cava / NTG</b> preload ↓ → CVP, BP ↓ → reflex HR ↑",
    "<b>Tamponade</b> CVP ↑ แต่ venous return ↓ → CVP สูงไม่ได้แปลว่าเลือดเต็ม",
    "<b>ทางออกผิดปกติ</b> AR: SBP ↑ DBP ↓ · AS/หนีบ aorta: ก่อนจุดตีบสูง หลังต่ำ"
  ],
  "H-C2": [
    "<b>หนีบ SVC/IVC</b> เลือดถึง RA น้อย → CVP, preload, SV, CO ↓ → BP ↓",
    "<b>Reflex</b> HR, contractility, TPR ↑",
    "<b>IVC แรงกว่า</b> IVC นำเลือดกลับส่วนใหญ่",
    "<b>PV loop</b> จุด EDV เลื่อนซ้าย · หลอดเลือดดำเหนือจุดหนีบความดันสูงขึ้น"
  ],
  "H-C3": [
    "<b>Tamponade</b> น้ำในถุงบีบหัวใจช่วง diastole → เติมเลือดไม่ได้",
    "<b>CVP ↑ แต่ venous return ↓</b> เลือดค้างรอเข้าหัวใจ",
    "<b>ผล</b> preload, CO, afterload ↓ ทั้งหมด → BP ↓ pulse pressure แคบ",
    "<b>Pulsus paradoxus</b> หายใจเข้า → หัวใจขวาเติม → septum ดันซ้าย → SBP ตก &gt; 10 · รักษา: เจาะระบาย"
  ],
  "H-C4": [
    "<b>AR</b> เลือดไหลย้อนช่วง diastole → LV เติมสองทาง",
    "<b>ผล</b> EDV ↑ (จุด I เลื่อนขวา), SV ↑, SBP ↑, DBP ↓ → pulse pressure กว้าง, collapsing pulse",
    "<b>Effective SV ต่ำกว่าที่เห็น</b> ส่วนหนึ่งไหลกลับ → pulse pressure ประเมินสูงเกิน",
    "<b>AS</b> ความดันคั่งย้อน → CVP สูงได้"
  ],
  "H-C5": [
    "<b>หนีบ ascending aorta</b> carotid แยกหลังจุดหนีบ → BP ที่ carotid ตกมาก → เหมือน severe AS",
    "<b>หนีบ aortic arch</b> carotid แยกก่อนจุดหนีบ → BP ที่ carotid สูง → เหมือน coarctation",
    "<b>Coarctation</b> หลัง left subclavian → แขนสูง ขาต่ำ, afterload ↑",
    "<b>ข้อสังเกต</b> หนีบ ascending แล้ว HR กลับลด ใบแล็บถามให้อธิบาย"
  ],
  "H-C6": [
    "<b>Aortic nerve กระแสต่ำ</b> เส้นใย baroreceptor → depressor (BP, HR ↓)",
    "<b>กระแสสูง</b> เส้นใย chemoreceptor ร่วม → pressor (BP, HR ↑)",
    "<b>Right vagus ปลาย peripheral</b> ACh ที่ SA node → หัวใจหยุด",
    "<b>สรุป</b> right vagus คุม rate · left vagus คุม AV conduction"
  ],
  "H-C7": [
    "<b>AF</b> เริ่มที่ atria (รอบ pulmonary vein, LA) → AV node ส่งต่อไม่สม่ำเสมอ",
    "<b>ECG AF</b> ไม่มี P wave · ไม่สม่ำเสมอ · QRS แคบ",
    "<b>ตรวจ AF</b> ชีพจรไม่สม่ำเสมอ, pulse deficit, ไม่มี a wave, ไม่มี S4",
    "<b>VF</b> ventricle สั่นพลิ้ว → ไม่มี SV → คลำชีพจรไม่ได้ → defibrillation ทันที · ไม่หยุดเองเหมือน AF"
  ]
};
