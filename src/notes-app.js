(function () {
  var S = CVS.sections, LET = 'ABCDEFGH';
  var $ = function (id) { return document.getElementById(id); };
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem('cvstutor:' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem('cvstutor:' + k, JSON.stringify(v)); } catch (e) { } }
  };
  var byId = {}, secOf = {};
  S.forEach(function (s, si) { s.items.forEach(function (it) { byId[it.id] = it; secOf[it.id] = si; }); });

  /* English recording script (src/tutor-script.js): plan, 80% summary, one SAY line per card */
  var SCRIPT = window.TUTOR_SCRIPT || { plan: [], sec: {} };
  function sayLine(id) { var s = S[secOf[id]], sc = s && SCRIPT.sec[s.id]; return sc && sc.say ? sc.say[id] || '' : ''; }
  function sayBox(text, label) { return text ? '<div class="saybox"><div class="tp-head">' + (label || 'พูดในวิดีโอ &#183; SAY') + '</div><p>' + text + '</p></div>' : ''; }

  var THAI_Q = {
  "R1": [
    "<b>Baroreceptor reflex</b> เป็น neural control ที่ทำงานเร็วที่สุด (ระดับวินาที) เพื่อประคอง BP ทันที",
    "<b>Chemoreceptor reflex</b> เร็วเหมือนกันแต่จะเด่นเมื่อ MAP &lt; 80 mmHg เท่านั้น",
    "Capillary fluid shift และ Angiotensin II เป็นกลไกระยะกลาง (นาที–ชั่วโมง) ส่วน sympathetic stimulation เป็นเพียงขา effector"
  ],
  "R2": [
    "ท้องเสียมา <b>5 วัน</b> เข้าสู่กลไกระยะยาว (long-term control) ซึ่ง <b>Kidney</b> มีบทบาทสำคัญที่สุด (infinite gain)",
    "อาศัย RAAS (Aldosterone), ADH และ thirst เพิ่มการดูดกลับ Na⁺ และน้ำเพื่อฟื้นฟู blood volume",
    "Baroreceptor reflex เกิดการ reset ไปแล้วภายใน 1–2 วัน"
  ],
  "R3": [
    "<b>Stress relaxation</b> เกิดเมื่อหลอดเลือดถูกยืดจากความดัน/ปริมาตรที่ <b>เพิ่มขึ้น</b> ผนังหลอดเลือดจึงค่อยๆ คลายตัว",
    "ในภาวะ hypotension จะเกิดสิ่งตรงข้ามคือ <b>reverse stress relaxation</b> (หลอดเลือดหดกระชับรอบปริมาตรที่ลดลง)",
    "ส่วน ADH, Aldosterone, sympathetic activity และ HR จะเพิ่มขึ้นทั้งหมดเพื่อชดเชยความดันต่ำ"
  ],
  "R4": [
    "เมื่อความดันเพิ่ม <b>Aortic arch stretch receptor (baroreceptor)</b> จะส่งสัญญาณผ่าน CN X ไปกระตุ้น NTS",
    "NTS ไปยับยั้ง RVLM (vasoconstrictor area) ทำให้ <b>sympathetic vasoconstrictor tone ลดลง</b>",
    "ตัวเลือกอื่น (chemoreceptor, vasomotor center, pain) ล้วนกระตุ้น sympathetic ให้เพิ่มขึ้น"
  ],
  "R5": [
    "การกระตุ้น <b>Aortic arch stretch receptor (baroreceptor)</b> เป็นตัวเดียวที่ไปกด vasomotor center ทำให้ sympathetic tone ลดลง",
    "ตัวเลือกอื่นทั้งหมดกระตุ้น sympathetic outflow"
  ],
  "R6": [
    "<b>Carotid body</b> เป็นที่อยู่ของ <b>chemoreceptor</b> (รับรู้ ↓PO₂, ↑PCO₂, ↑H⁺) ไม่ใช่ baroreceptor",
    "<b>Baroreceptor</b> อยู่ที่ <b>carotid sinus</b> (ผ่าน CN IX) และ aortic arch (ผ่าน CN X)",
    "องค์ประกอบอื่นในตัวเลือก (CN IX/X, vagus, splanchnic nerve, SA node) อยู่ในวงจร baroreflex จริง"
  ],
  "R7": [
    "เมื่อ BP ตก → <b>baroreceptor firing ลดลง</b> (unloading) → ลดการยับยั้ง RVLM",
    "ส่งผลให้ <b>sympathetic action เพิ่มขึ้น</b> (↑HR, ↑contractility, ↑TPR จาก vasoconstriction)"
  ],
  "R8": [
    "<b>CNS ischemic response</b> เกิดเมื่อ MAP &lt; 60 mmHg ทำให้ vasomotor center ขาดเลือดและคั่ง CO₂",
    "กระตุ้น sympathetic vasoconstriction รุนแรงที่สุดในร่างกาย → เกิด <b>systemic hypertension</b>",
    "ถ้าร่วมกับ ↑ICP (Cushing reaction) ความดันที่พุ่งสูงจะกระตุ้น baroreflex ทำให้เกิด reflex <b>bradycardia</b>"
  ],
  "R9": [
    "<b>Cerebellum</b> ไม่ได้อยู่ในวงจร chemoreceptor reflex",
    "วงจรจริง: Carotid/aortic bodies → Hering’s n. (CN IX) / Aortic n. (CN X) → <b>NTS</b> → <b>Adrenal medulla</b> &amp; sympathetic"
  ],
  "R10": [
    "<b>ADH (Vasopressin)</b> จับกับ V1 receptor ที่ vascular smooth muscle ทำให้เกิด <b>vasoconstriction</b>",
    "ตัวเลือกอื่น (Adenosine, Bradykinin, Lactic acid, NO) เป็น vasodilators ทั้งหมด"
  ],
  "R11": [
    "<b>Endothelin-1</b> เป็นสารที่หลั่งจาก endothelium ซึ่งออกฤทธิ์ <b>vasoconstriction</b> อย่างรุนแรงและยาวนาน",
    "สารอื่นในตัวเลือกออกฤทธิ์คลายหลอดเลือด (vasodilation)"
  ],
  "R12": [
    "<b>ADH</b> ออกฤทธิ์ผ่าน V1 receptor ทำให้เกิด vasoconstriction และเพิ่ม BP",
    "ANP, NO, PGE₂ และ Histamine ล้วนทำให้เกิด vasodilation"
  ],
  "R13": [
    "เมื่อ BP ต่ำหรือเสียเลือด &gt;10% ร่างกายจะหลั่ง <b>ADH</b> ออกมากระตุ้น V1 receptor ให้เกิด vasoconstriction (และ V2 ดูดกลับน้ำที่ไต)"
  ],
  "R14": [
    "เมื่อเลือดไหลเร็วขึ้นจะเกิดแรงเสียดทานกับผนังหลอดเลือด (<b>shear stress</b>) กระตุ้นเอนไซม์ eNOS ใน endothelial cell",
    "หลั่ง <b>Nitric oxide (NO)</b> เข้าสู่ smooth muscle → เพิ่ม cGMP → เกิด <b>flow-mediated vasodilation</b>"
  ],
  "R15": [
    "<b>Shear stress</b> บนผนัง endothelium เป็นตัวกระตุ้นหลักในการหลั่ง <b>NO</b>",
    "ส่วน Adenosine, CO₂, H⁺ และ Lactate เป็น metabolic vasodilators จากเนื้อเยื่อที่ทำงานหนัก"
  ],
  "R16": [
    "<b>Nitric oxide (NO)</b> สร้างจาก endothelium มีฤทธิ์เป็น potent vasodilator และช่วยยับยั้ง platelet aggregation",
    "ตัวเลือกอื่น (Endothelin, Ang II, ADH, Thromboxane A₂) เป็น vasoconstrictors ทั้งหมด"
  ],
  "R17": [
    "<b>NO</b> เป็น endothelium-derived vasodilator",
    "Adenosine, CO₂, K⁺ มาจากเนื้อเยื่อ (metabolic) ส่วน Endothelin เป็น endothelial vasoconstrictor"
  ],
  "R18": [
    "เมื่อเกิด <b>tissue injury</b> เซลล์ mast cell จะหลั่ง <b>Histamine</b>",
    "ทำให้เกิด arteriolar dilation (แดง/ร้อน) และเพิ่ม capillary permeability (บวม/wheal)"
  ],
  "R19": [
    "<b>↑PaCO₂</b> เป็น metabolic vasodilator ที่สำคัญ (โดยเฉพาะใน cerebral circulation) จึงช่วยเพิ่ม tissue blood flow",
    "ส่วน ↑O₂ ทำให้เกิด vasoconstriction"
  ],
  "R20": [
    "<b>↑PCO₂</b> กระตุ้น local vasodilation",
    "หากจะเกิด vasodilation ต้องมี ↑osmolality, ↑histamine หรือ ↓PO₂ (ส่วน serotonin มักทำให้หดตัว)"
  ],
  "R21": [
    "<b>Decreased vascular tone</b> ทำให้หลอดเลือดคลายตัว รัศมี (r) กว้างขึ้น → ความต้านทานลดลงตามกฎ Poiseuille (R ∝ 1/r⁴) → blood flow เพิ่มขึ้น"
  ],
  "R22": [
    "ขณะออกกำลังกาย กล้ามเนื้อใช้ออกซิเจนและปล่อย <b>vasodilator metabolites</b> (Adenosine, K⁺, CO₂, H⁺, Lactate)",
    "เกิดการคลายตัวของ arterioles เรียกว่า <b>metabolic control (active hyperemia)</b>",
    "หลีกเลี่ยงการตอบ autoregulation เพราะ autoregulation คือการรักษา flow ให้คงที่เมื่อ <b>pressure</b> เปลี่ยน"
  ],
  "R23": [
    "ตาม <b>Myogenic theory</b>: เมื่อความดันในหลอดเลือดเพิ่ม จะยืดผนัง arteriolar smooth muscle",
    "เปิด stretch-activated cation channels → เกิด depolarization → Ca²⁺ ไหลเข้าผ่าน L-type Ca²⁺ channels",
    "เกิด <b>vasoconstriction</b> เพิ่มความต้านทาน เพื่อรักษาระดับ blood flow ให้คงที่"
  ],
  "R24": [
    "นิยามของ <b>Autoregulation</b> คือการรักษา <b>constant blood flow แม้ว่า perfusion pressure จะเปลี่ยนแปลง</b> (ช่วง MAP ~70–175 mmHg)",
    "หาก metabolic demand เปลี่ยนแปลงแล้ว flow เปลี่ยนตาม จะเรียกว่า metabolic control (active hyperemia)"
  ],
  "R25": [
    "การรักษา blood flow ให้คงที่เมื่อ perfusion pressure เปลี่ยน คือ <b>Autoregulation</b> (อาศัยกลไก myogenic + metabolic)"
  ],
  "R26": [
    "เมื่อเนื้อเยื่อมี <b>increased workload ต่อเนื่องหลายเดือน</b> จะเกิดการปรับตัวระยะยาวด้วยการสร้างหลอดเลือดใหม่ (<b>angiogenesis / hypervascularization</b> ผ่าน VEGF)",
    "Active/reactive hyperemia เป็นการปรับตัวเฉียบพลัน ส่วน collateral circulation เกิดเมื่อมีการอุดตันเรื้อรัง"
  ],
  "R27": [
    "เมื่อเกิด <b>chronic vascular obstruction</b> ร่างกายจะปรับตัวระยะยาวโดยขยายแขนงหลอดเลือดข้างเคียง (<b>collateral circulation</b>) เพื่ออ้อมจุดที่อุดตัน"
  ],
  "R28": [
    "<b>Arteriole</b> เป็น resistance vessel หลักของร่างกาย จึงเป็นเป้าหมายสำคัญของยาลดความดันโลหิตเพื่อลด TPR"
  ],
  "R29": [
    "ยา <b>β₁-blocker</b> ลด HR และ contractility → ลด myocardial O₂ consumption",
    "เมื่อหัวใจใช้พลังงานลดลง <b>coronary blood flow</b> ซึ่งแปรผันตาม local metabolism จึงลดลงมากที่สุด"
  ],
  "R30": [
    "ใน <b>Chronic kidney disease (CKD)</b> จำนวน nephron ที่ทำงานได้ลดลง → <b>↓GFR</b>",
    "ไตขับเกลือและน้ำออกได้น้อยลง → เกิด salt &amp; water retention → volume-loading hypertension"
  ],
  "R31": [
    "ใน <b>Heart failure</b> cardiac output ที่ลดลงทำให้ renal perfusion ลดลง → กระตุ้นการหลั่ง <b>Renin → ↑Angiotensin II → ↑Aldosterone</b>",
    "ส่งผลให้ไตดูดกลับ Na⁺ และน้ำเพิ่มขึ้น (ส่วน ANP และ sympathetic activity ในผู้ป่วยกลุ่มนี้จะสูงขึ้น ไม่ใช่ลดลง)"
  ],
  "R32": [
    "<b>Enalapril (ACE inhibitor)</b> ยับยั้งการเปลี่ยน Ang I เป็น Ang II → ส่งผลให้ <b>ลดการหลั่ง Aldosterone</b> และลด vasoconstriction",
    "นอกจากนี้ ACE ยังทำหน้าที่สลาย bradykinin เมื่อถูกยับยั้งจึงมี bradykinin คั่ง (ทำให้เกิดอาการไอแห้ง)"
  ],
  "R33": [
    "เมื่อ BP ตกจากภาวะขาดน้ำ → <b>baroreceptor stimulation ลดลง</b> → กระตุ้น sympathetic ทำให้ <b>HR เพิ่มขึ้น</b>",
    "จุดผิดในตัวเลือกอื่น: Angiotensinogen ไม่มีฤทธิ์หดหลอดเลือดโดยตรง, Aldosterone ดูดกลับ Na⁺ (ส่วนการดูดกลับ free water เป็นหน้าที่ของ ADH)"
  ],
  "R34": [
    "<b>β₁ agonist</b> เพิ่ม cAMP ใน SA node → ไปเปิด <b>funny channels (HCN)</b> ให้ <b>Na⁺ influx (I<sub>f</sub>) เพิ่มขึ้น</b>",
    "ทำให้ความชันของ phase 4 (diastolic depolarization) ชันขึ้น → ถึง threshold เร็วขึ้น → ↑HR"
  ],
  "R35": [
    "<b>β-agonist</b> เพิ่มระดับ cAMP → กระตุ้น <b>Na⁺ influx ผ่าน funny channels (I<sub>f</sub>)</b> ใน phase 4 ของ SA node ทำให้ HR เร็วขึ้น"
  ],
  "R36": [
    "การเพิ่ม <b>LVEF (contractility)</b> เกิดจาก β₁ กระตุ้น PKA → เปิด L-type Ca²⁺ channels และ RyR2 → <b>↑intracellular Ca²⁺</b> ใน cardiomyocyte",
    "ส่วน funny channels ที่ SA node มีผลเพิ่ม HR เท่านั้น ไม่ได้เพิ่มแรงบีบตัวของ ventricle"
  ],
  "R37": [
    "ยา <b>Sympathomimetic</b> ออกฤทธิ์เลียนแบบระบบ sympathetic โดยจับกับ adrenergic receptors รวมถึง <b>β₁ receptor</b> ที่หัวใจ (เพิ่ม HR และ contractility)"
  ],
  "R38": [
    "การกระตุ้น sympathetic เพิ่ม contractility ทำให้หัวใจบีบไล่เลือดออกได้ดีขึ้น → <b>ESV ลดลง</b> และ <b>SV เพิ่มขึ้น</b>",
    "โดยที่ <b>EDV แทบไม่เปลี่ยนแปลง</b>"
  ],
  "R39": [
    "<b>α₁-agonist</b> ทำให้เกิด arteriolar vasoconstriction → เพิ่ม TPR และ <b>LV afterload</b> โดยไม่มีผลต่อ β₁ ที่หัวใจ จึงไม่เปลี่ยน contractility โดยตรง"
  ],
  "R40": [
    "ขณะออกกำลังกายหนัก (85% max HR) sympathetic จะกระตุ้น β₁ → <b>เพิ่ม Ca²⁺ conductance</b> (ผ่าน L-type Ca²⁺ channels) ทั้งใน nodal และ contractile cells"
  ],
  "R41": [
    "หัวใจที่ขาดเส้นประสาทควบคุม (denervated heart) ไม่มี vagal innervation จึง <b>ไม่สามารถเพิ่ม HR ด้วยการลด parasympathetic tone</b> ได้",
    "แต่ยังเพิ่ม CO ขณะออกกำลังกายได้จาก circulating catecholamines, muscle pump (↑venous return → Frank–Starling) และ ↓afterload"
  ],
  "R42": [
    "ใน <b>Transplanted (denervated) heart</b> เส้นประสาทถูกตัดขาด การเพิ่ม HR ขณะออกกำลังกายจึงต้องอาศัย <b>circulating catecholamines</b> จาก adrenal medulla มาจับกับ β₁ receptor"
  ],
  "R43": [
    "ในหัวใจที่ไร้เส้นประสาท (transplant) ต้องให้ <b>β-adrenergic agonist</b> เพื่อกระตุ้น β₁ receptor ที่ SA node โดยตรง",
    "การให้ Atropine (muscarinic antagonist) จะไม่ได้ผล เพราะหัวใจนี้ไม่มี vagal tone อยู่แล้ว"
  ],
  "R44": [
    "หัวใจที่ไม่มีเส้นประสาทอัตโนมัติมาเลี้ยง เมื่อออกกำลังกาย HR จะขึ้นช้าและน้อยกว่าปกติ (<b>blunt increase</b>) เพราะต้องรอระดับ circulating catecholamines ในเลือด"
  ],
  "R45": [
    "ภาวะขาดน้ำกระตุ้น sympathetic (β₁) ที่ SA node → เพิ่ม I<sub>f</sub> และ I<sub>Ca</sub> → <b>เพิ่มความชันของ diastolic depolarization (phase 4 slope)</b> ทำให้ HR เร็วขึ้น"
  ],
  "R46": [
    "เมื่อสูญเสียน้ำ (hypovolemia) ค่า CVP, EDV, SV, CO และ MAP จะลดลงทั้งหมด",
    "ค่าเดียวที่ <b>เพิ่มขึ้น</b> คือ <b>Systemic vascular resistance (SVR)</b> จากการกระตุ้น sympathetic vasoconstriction เพื่อประคองความดัน"
  ],
  "R47": [
    "เมื่อความดันเลือดตก แรงยืดที่ carotid sinus จะลดลง → <b>afferent signal ผ่าน CN IX (glossopharyngeal n.) ไปยัง NTS ต้องลดลง</b> ไม่ใช่เพิ่มขึ้น"
  ],
  "R48": [
    "<b>ผลโดยตรง (direct effect)</b> ของการเสียเลือดจำนวนมากคือ preload และ stroke volume ลดลง → คลำได้ <b>weak (thready) pulse</b>",
    "ส่วน tachycardia, tachypnea และตัวเย็นชื้น เป็นกลไกชดเชย (compensatory mechanisms) ของร่างกาย"
  ],
  "R49": [
    "ชีพจรเบาและความดันต่ำเป็น <b>direct effect</b> จากการเสียเลือด ส่วนหัวใจเต้นเร็วและหายใจเร็วเป็น <b>immediate (neural) compensation</b>"
  ],
  "R50": [
    "<b>Thirst (ความกระหายน้ำ)</b> ร่วมกับ ADH และ Aldosterone เป็นกลไกชดเชยระยะยาว (<b>long-term compensation</b>) เพื่อดึงปริมาณน้ำในร่างกายกลับมา"
  ],
  "F1": [
    "<b>Sinus venosus</b> ในกบและเต่าทำหน้าที่เป็น primary pacemaker ที่มีอัตราการปล่อยสัญญาณเร็วที่สุด เทียบเท่ากับ <b>SA node</b> ในมนุษย์"
  ],
  "F2": [
    "<b>ตำแหน่งที่อยู่ (location)</b> ไม่ใช่เหตุผลที่ทำให้ SA node เป็น primary pacemaker",
    "SA node เป็นผู้นำจังหวะเพราะมี unstable resting potential (funny channels) และมี <b>อัตราการเกิด depolarization เร็วที่สุด</b> (overdrive suppression)"
  ],
  "F3": [
    "เนื้อเยื่อนำไฟฟ้าหลายส่วนมี automaticity แต่ SA node เป็น primary pacemaker เพราะมี <b>highest rate of firing</b> (70–80 ครั้ง/นาที)"
  ],
  "F4": [
    "เซลล์ใน <b>Bundle of His</b> เป็นเนื้อเยื่อนำไฟฟ้าจำเพาะ (specialized conducting tissue) ของตัวเอง ไม่ได้พัฒนามาจากเซลล์ของ AV node"
  ],
  "F5": [
    "กล้ามเนื้อหัวใจเชื่อมต่อกันด้วย <b>intercalated discs</b> ซึ่งมี <b>gap junctions</b> ให้กระแสไฟฟ้าไหลผ่านถึงกันได้ จึงทำงานเสมือนเป็นหน่วยเดียวกัน (<b>functional syncytium</b>)"
  ],
  "F6": [
    "<b>Cardiomyocytes มีความหนาแน่นของ mitochondria สูงกว่า</b> skeletal muscle เพราะต้องสร้าง ATP แบบ aerobic เพื่อบีบตัวต่อเนื่องตลอดเวลาโดยไม่พัก"
  ],
  "F7": [
    "<b>Absolute refractory period (ARP)</b> ของหัวใจไม่ได้อยู่แค่ช่วง depolarization (phase 0) แต่กินเวลาผ่านช่วง plateau (phase 2) ไปจนถึงครึ่งแรกของ repolarization (phase 3)"
  ],
  "F8": [
    "กล้ามเนื้อหัวใจมี <b>long refractory period</b> ที่ยาวเกือบเท่าช่วงการหดตัว (twitch) จึงไม่สามารถถูกกระตุ้นซ้ำให้รวมกันเป็น <b>tetanic contraction</b> ได้"
  ],
  "F9": [
    "การกระตุ้นในช่วง <b>systole</b> (ทั้ง early และ late) จะตกในระยะ <b>ARP</b> จึงไม่เกิด extrasystole",
    "การกระตุ้นในช่วง <b>diastole (early และ late diastole)</b> พ้นระยะ ARP แล้ว จึงเกิด <b>extrasystole</b> ตามด้วย compensatory pause"
  ],
  "F10": [
    "<b>Compensatory pause</b> เกิดเพราะสัญญาณปกติรอบถัดไปจาก <b>primary pacemaker (SA node/sinus venosus)</b> วิ่งมาถึง ventricle ขณะที่ยังติดอยู่ในระยะ <b>ARP ของ extrasystole</b> จึงไม่เกิดการหดตัว"
  ],
  "F11": [
    "เกิดจาก <b>refractory period ของ extrasystole</b> ทำให้สัญญาณปกติจาก sinus venosus ที่ตามมาตกในระยะดื้อและถูกบล็อกไป 1 จังหวะ"
  ],
  "F12": [
    "<b>Extrasystole</b> เกิดจากสัญญาณไฟฟ้าผิดปกติ (ectopic focus) มากระตุ้นกล้ามเนื้อหัวใจหลังจากพ้นระยะ ARP ไปแล้ว (เช่น ในช่วง <b>relative refractory period</b> หรือ diastole)"
  ],
  "F13": [
    "ความแรง (amplitude) ของ extrasystole ที่ต่างกันเมื่อกระตุ้นคนละเวลา เกิดจากระยะเวลาการเติมเลือดที่ต่างกัน → <b>different preload (EDV)</b> ตามกฎ Frank–Starling",
    "ความแรงของกระแสไฟที่กระตุ้นไม่มีผลต่อขนาดการหดตัว (all-or-none law)"
  ],
  "F14": [
    "จังหวะ <b>Extrasystole</b> เกิดก่อนที่หัวใจจะคลายตัวรับเลือดได้เต็มที่ ทำให้ <b>EDV (preload) ลดลง</b> โดยที่ contractility เท่าเดิม",
    "จึงเลื่อนลงมาทางซ้ายบนเส้น Frank–Starling curve เดิม ไปอยู่ที่จุด <b>C</b>"
  ],
  "F15": [
    "ในกราฟแล็บหัวใจกบ: <b>เส้นขาขึ้น (upstroke) = systole</b>, <b>เส้นขาลง (downstroke) และฐานราบ = diastole</b>",
    "จุด <b>B</b> และ <b>C</b> อยู่ในช่วง systole (ติดระยะ ARP) → กระตุ้นแรงแค่ไหนก็ไม่ตอบสนอง",
    "จุด <b>D</b> อยู่ในช่วง late diastole แต่ใช้ไฟระดับ <b>subthreshold</b> → ไม่เกิดการหดตัว",
    "ดังนั้นมีเพียงจุด <b>A (diastole + threshold stimulus)</b> ที่ทำให้เกิด extrasystole ได้ (ตรงตามเฉลย AC81)"
  ],
  "F16": [
    "<b>Extrasystole</b> สามารถพบได้ในคนปกติที่ไม่มีโรคหัวใจ เช่น จากความเครียด พักผ่อนน้อย คาเฟอีน หรือแอลกอฮอล์"
  ],
  "F17": [
    "การที่ atrium กลับมาเต้นเองได้หลังผูกกั้นสัญญาณจาก sinus venosus (Stannius ligature I) แสดงถึงคุณสมบัติ <b>Automaticity</b> ของ latent pacemaker"
  ],
  "F18": [
    "เมื่อ SA node เสียหน้าที่ แล้วหัวใจเต้นในอัตรา <b>50 bpm</b> ร่วมกับ <b>narrow QRS</b> แสดงว่าจุดกำเนิดสัญญาณอยู่เหนือ His bundle คือ <b>AV node (junctional escape rhythm)</b>",
    "ถ้ามาจาก Purkinje/ventricle จะเต้นช้ากว่า (20–40 bpm) และมี wide QRS"
  ],
  "F19": [
    "ศักย์ไฟฟ้าต่ำสุดที่กระตุ้นให้เกิดการหดตัวเต็มที่ตามกฎ all-or-none คือ <b>Threshold potential</b>"
  ],
  "T1": [
    "การกระตุ้น parasympathetic หลั่ง ACh จับกับ <b>M2 receptor</b> → เปิดช่อง K⁺ (I<sub>K-ACh</sub>) ให้ K⁺ ไหลออก",
    "ทำให้ศักย์ไฟฟ้าในเซลล์ติดลบมากขึ้น (<b>hyperpolarization</b>) และเต้นช้าลง"
  ],
  "T2": [
    "ในขณะพัก (at rest) เส้นประสาท <b>vagus มีการทำงานตลอดเวลา (vagal tone)</b> เพื่อกด HR ปกติ (~70 bpm) ให้ต่ำกว่า intrinsic rate ของ SA node (~100 bpm)"
  ],
  "T3": [
    "แม้ตัดเส้นประสาท sympathetic ที่ไปเลี้ยงหัวใจแล้ว HR ยังเพิ่มขึ้นได้จากการ <b>ลด vagal tone</b> และจาก <b>circulating catecholamines</b> (adrenal medulla)"
  ],
  "T4": [
    "เส้นประสาท <b>Vagus</b> ไปเลี้ยงที่ <b>atria, SA node และ AV node</b> เป็นหลัก ส่วนบริเวณ ventricles มีเส้นใย vagus น้อยมาก (ถูกควบคุมด้วย sympathetic เป็นหลัก)"
  ],
  "T5": [
    "เส้นประสาท vagus ทั้งสองข้างให้ผลไม่เท่ากัน:",
    "<b>Right vagus</b> เลี้ยง <b>SA node</b> เป็นหลัก → ทำให้เกิด sinus bradycardia / arrest",
    "<b>Left vagus</b> เลี้ยง <b>AV node</b> เป็นหลัก → ทำให้เกิด AV conduction block"
  ],
  "T6": [
    "การกดทับ (compression) เส้นประสาทเป็นการกระตุ้นเส้นประสาทนั้น",
    "เมื่อกระตุ้น <b>Left vagus nerve</b> ซึ่งไปเลี้ยง AV node เป็นหลัก จึงทำให้เกิด <b>Heart block (AV block)</b>"
  ],
  "T7": [
    "การกระตุ้น vagus nerve จะหลั่ง ACh ไปจับกับ M2 receptor ที่ SA/AV node ทำให้ <b>heart rate ลดลง</b>"
  ],
  "T8": [
    "การดึงรั้งลำไส้ระหว่างผ่าตัดช่องท้องสามารถกระตุ้น <b>vagal reflex</b> ทำให้เกิด parasympathetic outflow ไปกดหัวใจ → <b>HR ลดลง</b>"
  ],
  "T9": [
    "Preganglionic vagal fibers ที่มาไซแนปส์ที่ cardiac parasympathetic ganglia (บริเวณ crescentic line) จะจับกับ <b>Nicotinic receptor (nAChR)</b> ไม่ใช่ muscarinic receptor",
    "ส่วน Muscarinic (M2) receptor จะอยู่ที่เซลล์หัวใจ (SA/AV node) ซึ่งเป็นจุดสิ้นสุดของ postganglionic fibers"
  ],
  "T10": [
    "<b>Low-dose nicotine</b> ออกฤทธิ์เป็น agonist กระตุ้น <b>nicotinic receptors</b> บน postganglionic parasympathetic neurons ที่ปมประสาทหัวใจ → ทำให้ HR ช้าลง"
  ],
  "T11": [
    "<b>High-dose nicotine</b> กระตุ้น nicotinic receptor ค้างไว้จนเกิด <b>depolarization block</b> (Na⁺ channels เกิด inactivation) ทำให้สัญญาณผ่านปมประสาทที่ crescentic line ไม่ได้"
  ],
  "T12": [
    "ตามเฉลยแล็บ: Nicotine ออกฤทธิ์เป็น <b>stimulating (agonist)</b> ต่อ nicotinic receptor เท่านั้น (ส่วนการหยุดนำสัญญาณที่ขนาดสูงเป็นผลจาก depolarization block หลังถูกกระตุ้นมากเกิน ไม่ใช่ฤทธิ์ยับยั้งตัวรับโดยตรง)"
  ],
  "T13": [
    "หลังหยด <b>low-dose nicotine</b> ปมประสาทถูกกระตุ้นแต่ยัง <b>ไม่ถูกบล็อก</b>",
    "ดังนั้นทั้งการกระตุ้น (1) vagus nerve และ (2) crescentic line จึงยังทำให้ HR <b>ลดลงทั้งคู่ (Decrease, decrease)</b>"
  ],
  "T14": [
    "ข้อมูลจากแล็บ: baseline HR = 46 → หลังหยด <b>high-dose nicotine</b> ปมประสาทถูกบล็อก ทำให้เสีย resting vagal tone → HR เพิ่มเป็น <b>50 bpm (Increase)</b>",
    "เมื่อกระตุ้น vagus ซ้ำ สัญญาณผ่านปมประสาทไม่ได้ HR จึงยังอยู่ที่ <b>50 bpm</b> ซึ่งเมื่อเทียบกับ <b>baseline เดิม (46)</b> จึงถือว่า <b>เพิ่มขึ้นทั้งคู่ (Increase, increase)</b>"
  ],
  "T15": [
    "การหยด <b>high-dose nicotine ที่ crescentic line</b> ทำให้เกิด depolarization block ของปมประสาท vagus → ตัด resting vagal tone → <b>HR เพิ่มขึ้น</b> (จาก 46 เป็น 50 bpm) เหมือนการให้ β₁ agonist"
  ],
  "T16": [
    "หลังให้ <b>high-dose nicotine</b> ปมประสาทที่ crescentic line จะเกิด depolarization block",
    "การกระตุ้นที่ <b>vagus nerve (preganglionic)</b> จึงส่งสัญญาณข้ามปมประสาทไม่ได้ และไม่เกิด bradycardia (แต่ถ้ากระตุ้นที่ crescentic line โดยตรงจะกระตุ้น postganglionic ใต้จุดบล็อก จึงยังเกิดหัวใจเต้นช้าได้)"
  ],
  "T17": [
    "<b>Atropine</b> บล็อก M2 receptor ที่เซลล์หัวใจ (ปลายทางสุด) ดังนั้นแม้จะกระตุ้น vagus หรือ crescentic line หัวใจก็จะไม่เปลี่ยนแปลง (<b>stable</b>)"
  ],
  "T18": [
    "<b>Muscarinic antagonist (เช่น Atropine)</b> ไปบล็อกตัวรับ M2 ที่ SA node จึงเป็นการ <b>ยับยั้งผลของ vagal tone ที่ SA node</b> ทำให้ HR เพิ่มขึ้น"
  ],
  "T19": [
    "<b>AV nodal block</b> เป็นการนำไฟฟ้าผ่าน AV node ช้าลงหรือถูกกั้น ไม่ใช่กลไก depolarization block (ซึ่งเกิดจากศักย์ไฟฟ้าค้างเช่นใน hyperkalemia หรือ high-dose nicotine)"
  ],
  "T20": [
    "การที่อัตราการเต้นของ atrium (70 bpm) และ ventricle (40 bpm) ไม่สัมพันธ์กันเลย (<b>AV dissociation</b>) คือลักษณะจำเพาะของ <b>3rd-degree (complete) AV block</b>"
  ],
  "T21": [
    "ใน <b>Complete heart block</b> สัญญาณจาก atrium ลงมาไม่ได้เลย ventricle จึงต้องพึ่งพา intrinsic pacemaker ของ His–Purkinje ซึ่งเต้นช้าประมาณ <b>30–40 bpm</b>"
  ],
  "T22": [
    "ใน <b>Complete heart block</b> ทั้งสองห้องเต้นแยกกันอย่างอิสระ (<b>AV dissociation</b>) โดย atria เต้นตาม SA node ส่วน ventricles เต้นช้ากว่าตาม escape pacemaker"
  ],
  "T23": [
    "<b>Conduction block</b> พบในคนปกติได้ เช่น ในนักกีฬาหรือขณะหลับที่มี <b>vagal tone สูง</b> หรือจากยาบางชนิด"
  ],
  "B1": [
    "การใช้ <b>sphygmomanometer</b> วัดความดันผ่านการรัด cuff ด้านนอก จัดเป็น <b>indirect method</b>",
    "ส่วน direct method คือการใส่สายสวนเข้าหลอดเลือดแดง (intra-arterial catheter)"
  ],
  "B2": [
    "<b>Sphygmomanometer</b> (auscultatory method) เป็น <b>gold standard ของการวัดความดันแบบ noninvasive</b>"
  ],
  "B3": [
    "เครื่องวัดความดันอัตโนมัติข้างเตียงที่ใช้ติดตามผู้ป่วยต่อเนื่องแบบ noninvasive ใช้หลักการ <b>Oscillometer</b> (ตรวจจับการสั่นของผนังหลอดเลือด ซึ่งจุดที่สั่นแรงสุดคือ MAP)"
  ],
  "B4": [
    "คำนวณ <b>PP</b> = 126 − 72 = 54 mmHg",
    "<b>MAP</b> = DBP + (PP / 3) = 72 + (54 / 3) = 72 + 18 = <b>90 mmHg</b>"
  ],
  "B5": [
    "<b>PP</b> = 160 − 100 = 60 mmHg → <b>MAP</b> = 100 + (60 / 3) = <b>120 mmHg</b>"
  ],
  "B6": [
    "<b>PP</b> = 126 − 60 = 66 mmHg → <b>MAP</b> = 60 + (66 / 3) = 60 + 22 = <b>82 mmHg</b>"
  ],
  "B7": [
    "ที่บ้าน (110/70): MAP = 70 + 40/3 = <b>83.3 mmHg</b>",
    "ที่โรงพยาบาล (140/80): MAP = 80 + 60/3 = <b>100 mmHg</b>",
    "ผลต่าง MAP = 100 − 83.3 ≈ <b>17 mmHg</b>"
  ],
  "B8": [
    "<b>PP</b> = 120 − 60 = 60 mmHg → <b>MAP</b> = 60 + (60 / 3) = <b>80 mmHg</b>"
  ],
  "B9": [
    "หา DBP ย้อนกลับจากสูตร: <b>DBP = MAP − (PP / 3)</b> = 80 − (60 / 3) = <b>60 mmHg</b>",
    "ดังนั้น <b>SBP = DBP + PP</b> = 60 + 60 = <b>120 mmHg</b>"
  ],
  "B10": [
    "ภาวะ <b>Shock</b> นิยามจาก <b>poor tissue perfusion</b> ไม่ใช่ดูจากตัวเลขความดันต่ำเพียงอย่างเดียว ต้องประเมินอาการแสดงของการขาดเลือดร่วมด้วย"
  ],
  "B11": [
    "<b>1st Korotkoff sound (Phase I)</b> คือเสียงตุบแรกที่ได้ยินเมื่อปล่อยลม cuff ลงมา ตรงกับค่า <b>Systolic blood pressure (SBP)</b>",
    "ส่วนเสียงหายไป (Phase V) ตรงกับค่า DBP ในผู้ใหญ่"
  ],
  "B12": [
    "ค่า <b>SBP</b> อ่านจากจังหวะที่เริ่มได้ยินเสียง <b>Korotkoff sound ครั้งแรก (Phase I)</b>"
  ],
  "B13": [
    "การเลือกขนาด cuff ดูจาก <b>เส้นรอบวงแขน (arm circumference)</b> และความยาวแขน (โดยความกว้าง bladder ~40% และความยาว 80–100% ของรอบแขน) ไม่ได้ขึ้นกับส่วนสูง (height)"
  ],
  "B14": [
    "ตามเฉลยของรายวิชา: <b>การรัด cuff แน่นเกินไป (wrapped too tightly)</b> ทำให้ค่า BP ที่อ่านได้ <b>ต่ำกว่าความเป็นจริง (falsely low)</b>",
    "ส่วน cuff เล็กเกินไป, พันหลวมเกินไป, ดื่มคาเฟอีน หรือพูดคุยขณะวัด จะทำให้ค่าสูงเกินจริง (falsely high)"
  ],
  "B15": [
    "การปล่อยลม cuff เร็วเกินไป (<b>reducing cuff pressure too fast</b>) ทำให้ปรอทตกผ่านจุด SBP ไปก่อนที่จะได้ยินเสียงตุบแรก จึงอ่านค่า SBP ได้ <b>ต่ำกว่าความจริง (falsely low)</b>"
  ],
  "B16": [
    "การใช้ <b>Large cuff</b> (ใหญ่เกินไป) จะกระจายแรงกดทับได้มากกว่าปกติ ใช้แรงดันน้อยลงในการกดหลอดเลือด จึงอ่านค่า BP ได้ <b>ต่ำกว่าจริง (falsely low)</b>"
  ],
  "B17": [
    "Bladder width ที่เหมาะสมคือ <b>40%</b> ของรอบแขน หากใช้ขนาดเพียง 20% (แคบเกินไป) ต้องใช้แรงดันมากขึ้นในการกดหลอดเลือด ค่าจึง <b>สูงเกินจริง (falsely high)</b>"
  ],
  "B18": [
    "Cuff ที่ใหญ่หรือยาวเกินไป (เช่น ยาว 2 เท่าของรอบแขน) จะทำให้ค่าที่วัดได้ <b>ต่ำกว่าความเป็นจริง (falsely low)</b> ไม่ใช่สูงเกินจริง"
  ],
  "B19": [
    "ตามเฉลยควิซแล็บ: การพัน cuff <b>แน่นเกินไป (too tightly)</b> ทำให้ค่าความดันอ่านได้ <b>ต่ำกว่าความเป็นจริง (falsely low)</b>"
  ],
  "B20": [
    "เมื่อวัดความดันแขนข้างหนึ่งได้สูง ควรวัดแขนอีกข้างเปรียบเทียบเสมอ เพื่อคัดกรองภาวะเช่น aortic coarctation, Takayasu arteritis หรือ aortic dissection"
  ],
  "B21": [
    "ในท่านอนราบ (supine) ค่า SBP ที่วัดจากขาจะ <b>สูงกว่าแขน</b> จากปรากฏการณ์ <b>pulse-wave amplification</b> และ reflective pressure wave (แม้ว่าค่า MAP ที่ขาจะต่ำกว่าเล็กน้อย)"
  ],
  "B22": [
    "จาก <b>pulse-wave amplification</b> คลื่นความดันที่สะท้อนกลับตามจุดแตกแขนงทำให้หลอดเลือดแดงส่วนปลายอย่าง <b>Femoral artery มีค่า systolic pressure สูงกว่า aorta</b>"
  ],
  "B23": [
    "เมื่อเปลี่ยนท่าจากนอนเป็นยืน (<b>supine to upright</b>) แรงโน้มถ่วงทำให้ <b>เลือดพูลที่ขา (venous pooling)</b> → venous return ลดลง → กระตุ้น baroreceptor reflex ให้เพิ่ม HR และ TPR"
  ],
  "B24": [
    "เมื่อเปลี่ยนท่าจากยืนเป็นนอนราบ (<b>upright to supine</b>) เลือดไหลกลับหัวใจเพิ่มขึ้น → BP เพิ่มขึ้นช่วงแรก → <b>กระตุ้น baroreceptor reflex เพิ่มขึ้น</b>"
  ],
  "B25": [
    "เมื่อลุกยืน เลือดที่พูลที่ขาทำให้ venous return ลดลง แม้จะมี sympathetic มาช่วยชดเชยความดัน แต่ <b>cardiac output ก็ยังคงลดลงประมาณ 20–30%</b> เมื่อเทียบกับท่านอน"
  ],
  "B26": [
    "เมื่อเปลี่ยนจากท่ายืนเป็นท่านอน ความดันที่ carotid sinus จะเพิ่มขึ้น ทำให้การกระตุ้น <b>baroreceptor reflex เพิ่มขึ้น</b> (ไม่ใช่ลดลง)"
  ],
  "B27": [
    "แม้ตัด right vagus ไปแล้ว เมื่อลุกยืนยังมีการส่งสัญญาณจาก carotid sinus (CN IX) และกระตุ้น sympathetic (ร่วมกับถอน left vagus) ทำให้ <b>heart rate เพิ่มขึ้น</b> ได้"
  ],
  "B28": [
    "ขณะออกกำลังกาย Sympathetic เพิ่ม CO ทำให้ <b>SBP สูงขึ้นมาก</b> ขณะที่ metabolic vasodilation ในกล้ามเนื้อช่วยลด TPR ทำให้ DBP คงที่หรือลดลงเล็กน้อย → <b>Pulse pressure กว้างขึ้น</b>"
  ],
  "B29": [
    "การหยุดวิ่งกะทันหันแล้วยืนนิ่งทำให้ขาด <b>skeletal muscle pump</b> ขณะที่หลอดเลือดในขายังขยายตัวอยู่ เลือดจึงค้างที่ขา → <b>venous return ลดลงอย่างรวดเร็ว</b> จนหน้ามืด"
  ],
  "B30": [
    "ผู้ป่วยความดันโลหิตสูงควรหลีกเลี่ยง <b>Heavy weight lifting (isometric exercise)</b> เพราะการเกร็งกล้ามเนื้อร่วมกับกลั้นหายใจ (Valsalva) จะทำให้ทั้ง SBP และ DBP พุ่งสูงขึ้นอย่างอันตราย"
  ],
  "M1": [
    "การรัด cuff ที่ <b>200 mmHg</b> (สูงกว่า SBP) เป็นการกั้นทั้งเลือดแดงและเลือดดำไม่ให้ไหลเข้าแขนเลย (complete arterial occlusion)",
    "เมื่อไม่มีเลือดไหลเข้า capillary hydrostatic pressure จึงไม่สูงขึ้น ทำให้ <b>ไม่เกิดการรั่วของน้ำออกนอกหลอดเลือด (No edema)</b>"
  ],
  "M2": [
    "ที่ความดัน cuff 200 mmHg เลือดไหลเข้าแขนไม่ได้เลย จึงมีอาการซีด เย็น คลำชีพจรไม่ได้ และปวดจากการขาดเลือด แต่ <b>ไม่มีอาการบวม (Edema)</b>"
  ],
  "M3": [
    "ทันทีที่ปล่อยลม cuff จาก 200 mmHg หลอดเลือดที่ขยายตัวรออยู่จาก vasodilator metabolites ที่สะสมไว้จะเปิดรับเลือดอุ่นให้ไหลทะลักเข้ามา (<b>reactive hyperemia → increased warm blood flow</b>)"
  ],
  "M4": [
    "ในช่วง <b>reactive hyperemia</b> เลือดแดงที่มีออกซิเจนสูงจะไหลทะลักเข้ามาแทนที่เลือดเดิมอย่างรวดเร็ว ทำให้ระดับ <b>deoxyhemoglobin ลดลงอย่างรวดเร็ว</b> และผิวหนังเปลี่ยนเป็นสีแดงสด"
  ],
  "M5": [
    "ผลหลักที่เกิดขึ้นในเนื้อเยื่อช่วง reactive hyperemia คือการชะล้างเลือดที่ขาดออกซิเจนออกไป ทำให้ <b>deoxyhemoglobin ลดลงอย่างรวดเร็ว</b>"
  ],
  "M6": [
    "การรัด cuff ที่ <b>80 mmHg</b> (อยู่ระหว่าง DBP และ SBP) ทำให้เกิด <b>venous occlusion</b>: เลือดแดงยังไหลเข้าได้แต่เลือดดำไหลกลับไม่ได้",
    "หลอดเลือดดำจึงโป่งพองออก secara <b>passive distension</b> จากแรงดันที่คั่ง ไม่ได้เกิดจาก active <b>vasodilation</b>"
  ],
  "M7": [
    "การขูดผิวหนังเบาๆ (light stroke) เป็นการรีดเลือดออกจากหลอดเลือดฝอยโดยตรง (mechanical expulsion) ทำให้เห็นเป็นรอยสีขาว เรียกว่า <b>White reaction</b>"
  ],
  "M8": [
    "การขูดผิวหนังเบาๆ ทำให้เกิดรอยขาวจากการรีดเลือดออกจากหลอดเลือดโดยตรง (<b>mechanical expulsion of blood</b>) ยังไม่ถึงขั้นกระตุ้นการหลั่ง histamine"
  ],
  "M9": [
    "เมื่อขูดผิวหนังแรงๆ รอยแดงที่แผ่กระจายรอบๆ (<b>flare</b>) เกิดจาก <b>axon reflex</b>",
    "สัญญาณประสาทวิ่งย้อนกลับ (<b>antidromic impulses</b>) ไปตามแขนงของ <b>C fibers</b> แล้วหลั่งสารกลุ่ม substance P / CGRP ออกมาขยาย arterioles รอบข้าง"
  ],
  "M10": [
    "กลไกของ <b>Flare</b> ใน triple response คือ <b>Axon reflex</b> ของเส้นประสาทรับความรู้สึกส่วนปลาย (ยังเกิดได้แม้ตัดไขสันหลัง แต่หายไปถ้าฉีดยาชาเฉพาะที่)"
  ],
  "M11": [
    "ใน <b>Triple response</b>: รอยแดงตามแนวที่ขูด (<b>red line</b>) เกิดจากหลอดเลือดขยายตัวเฉพาะที่โดยตรง (<b>dilated vessels at the site</b>) จากการหลั่ง histamine",
    "ส่วนรอยแดงที่กระจายออกรอบข้าง (flare) เกิดจาก axon reflex และรอยนูนบวม (wheal) เกิดจาก ↑capillary permeability"
  ],
  "M12": [
    "อาการบวมเฉพาะที่ (wheal/local edema) หลังถูกผึ้งต่อยเกิดจากสาร Histamine และตัวกลางอักเสบไปเพิ่ม <b>capillary permeability</b> ทำให้สารน้ำและโปรตีนรั่วออกนอกหลอดเลือด"
  ],
  "M13": [
    "อาการบวม (edema) หลังถูกแมลงกัดต่อยเกิดจากสารสื่อการอักเสบทำให้เกิด <b>increased capillary permeability</b>"
  ],
  "M14": [
    "การแช่แขนซ้ายในน้ำเย็นจัด (<b>5 °C</b>) ทำให้หลอดเลือดดำส่วนตื้นหดตัวจนแบนราบ (<b>flattened superficial veins</b>)",
    "แต่ผิวหนังที่แขนซ้ายจะมี <b>สีแดง (red)</b> เนื่องจากที่อุณหภูมิต่ำ Hemoglobin จะจับกับ O₂ แน่นขึ้น (left shift ของ O₂-Hb curve) ร่วมกับเกิด cold-induced vasodilation เป็นระยะ"
  ],
  "M15": [
    "การแช่มือในน้ำเย็นจัดจะทำให้หลอดเลือดดำหดตัวแบนราบ (flattened veins) ดังนั้นข้อที่ผิดคือ <b>engorged superficial veins</b>"
  ],
  "M16": [
    "ในท่ายืนนิ่ง <b>Venous sinuses ในกะโหลกศีรษะมีแรงดันเป็นลบ (negative pressure ≈ −10 mmHg)</b> เพราะอยู่เหนือระดับหัวใจและมีโครงสร้างกะโหลกยึดไม่ให้ยุบตัว",
    "ส่วนหลอดเลือดดำที่มือเมื่อยกขึ้นจะยุบตัวที่ความดันประมาณ 0 mmHg และที่เท้าจะสูงถึง ~+90 mmHg"
  ],
  "P1": [
    "ด้าน <b>Diaphragm</b> ของ stethoscope ใช้ฟังเสียงความถี่สูง (<b>high-pitched sounds</b> เช่น S1, S2, AR, MR)",
    "ส่วนด้าน Bell (วางแตะเบาๆ) ใช้ฟังเสียงความถี่ต่ำ (low-pitched เช่น S3, S4, MS rumble)"
  ],
  "P2": [
    "อาการ <b>Edema และ Cyanosis</b> ไม่จำเป็นต้องเกิดจากโรคหัวใจเสมอไป อาจเกิดจากโรคปอด โรคไต โรคตับ หรือการอุดตันของหลอดเลือดดำ/น้ำเหลืองได้"
  ],
  "P3": [
    "การคลำ (palpation) บริเวณ left parasternal border (parasternal heave) สามารถตรวจพบ <b>Right ventricular hypertrophy (RVH)</b> ได้",
    "และด้าน <b>Diaphragm</b> ใช้ฟังเสียง <b>high-pitched sounds</b> (ทั้งข้อ A และ C ถูกต้องตามเนื้อหาแล็บ)"
  ],
  "P4": [
    "<b>Cyanosis และ edema</b> อาจมาจากสาเหตุนอกหัวใจได้",
    "ข้ออื่นผิดเพราะ: murmur พบในคนปกติได้ (innocent murmur), JVD และ hepatojugular reflux บ่งชี้ <b>right-sided</b> heart failure, ส่วน orthopnea บ่งชี้ <b>left-sided</b> heart failure"
  ],
  "P5": [
    "ภาวะ <b>Hypertension</b> ทำให้หัวใจห้องซ้ายต้องบีบตัวสู้กับความดันใน aorta ที่สูงขึ้น คือมี <b>increased afterload</b> → เกิด LV hypertrophy/dilation จนคลำ PMI ได้เลื่อนออกด้านข้าง"
  ],
  "P6": [
    "เสียงหัวใจที่หนึ่ง (<b>S1</b>) เกิดจากการปิดของ <b>mitral และ tricuspid valves (AV valves)</b> เมื่อเริ่มช่วง ventricular systole"
  ],
  "P7": [
    "ทันทีหลังสิ้นสุดเสียง <b>S1</b> (ลิ้น AV ปิด แต่ลิ้น semilunar ยังไม่เปิด) คือระยะ <b>Isovolumic contraction</b>"
  ],
  "P8": [
    "ทันทีหลังสิ้นสุดเสียง <b>S2</b> (ลิ้น aortic/pulmonic ปิด แต่ลิ้น AV ยังไม่เปิด) คือระยะ <b>Isovolumetric relaxation</b>"
  ],
  "P9": [
    "เหตุการณ์ที่เกิดขึ้น <b>ก่อนเสียง S2</b> คือช่วงที่หัวใจบีบเลือดออก (<b>Ventricular ejection</b>) พอสิ้นสุดการบีบเลือด ลิ้น semilunar จึงปิดเกิดเป็นเสียง S2"
  ],
  "P10": [
    "การปิดของ AV valves (<b>S1</b>) เกิดขึ้นที่รอยต่อระหว่างการสิ้นสุดของ <b>Atrial systole</b> และการเริ่มต้นของ <b>Isovolumetric contraction</b>"
  ],
  "P11": [
    "ชีพจรที่คอ (carotid pulse) จะตามหลังเสียง <b>S1</b> เล็กน้อย ดังนั้นเสียงที่ได้ยินนำหน้า carotid pulse ทันทีคือเสียงจาก <b>Atrioventricular valves close (S1)</b>"
  ],
  "P12": [
    "ตำแหน่ง <b>Left 2nd ICS</b> ชิดขอบอก คือ <b>Pulmonic area</b>",
    "เมื่อได้ยินเสียงฟู่ช่วงคลายตัว (<b>diastolic murmur</b>) ที่ตำแหน่งนี้ จึงเข้าได้กับ <b>Pulmonary regurgitation (PR)</b>"
  ],
  "P13": [
    "<b>Diastolic blowing murmur</b> ที่ตำแหน่ง <b>left 2nd ICS (pulmonic area)</b> คือโรคลิ้นหัวใจรั่วช่วงคลายตัวของลิ้นพัลโมนารี (<b>Pulmonary regurgitation</b>)"
  ],
  "P14": [
    "<b>Systolic ejection murmur</b> ที่ตำแหน่ง <b>left 2nd ICS (pulmonic area)</b> คือ <b>Pulmonary stenosis (PS)</b> (ถ้าเป็น Aortic stenosis จะดังชัดที่ right 2nd ICS)"
  ],
  "P15": [
    "เสียง murmur ที่ได้ยิน <b>พร้อมกับ carotid pulse</b> คือ <b>systolic murmur</b>",
    "เมื่อฟังได้ชัดที่ตำแหน่ง <b>left 2nd ICS (pulmonic area)</b> จึงเป็น <b>Pulmonary stenosis</b>"
  ],
  "P16": [
    "เสียง <b>diastolic rumbling murmur</b> ที่ฟังได้ชัดบริเวณยอดหัวใจ (<b>PMI / Mitral area</b>) คือลักษณะจำเพาะของ <b>Mitral stenosis (MS)</b>"
  ],
  "P17": [
    "เสียง <b>pansystolic (holosystolic) murmur</b> ที่ฟังได้ชัดบริเวณ <b>PMI (Mitral area)</b> คือ <b>Mitral regurgitation (MR)</b>"
  ],
  "P18": [
    "ตำแหน่ง <b>Left 5th ICS, parasternal border</b> คือ <b>Tricuspid area</b>",
    "เมื่อฟังได้เสียง <b>diastolic murmur</b> ที่ตำแหน่งนี้ จึงเป็น <b>Tricuspid stenosis (TS)</b>"
  ],
  "P19": [
    "เสียง <b>systolic murmur</b> บริเวณ <b>left (lower) parasternal border (Tricuspid area)</b> เข้าได้กับ <b>Tricuspid valve regurgitation (TR)</b>"
  ],
  "P20": [
    "ใน <b>Aortic regurgitation (AR)</b> ปริมาตรเลือดที่บีบออกมากทำให้ SBP สูง แต่ช่วง diastole เลือดไหลย้อนกลับเข้า LV ทำให้ DBP ตกฮวบ → คลำได้ <b>Collapsing (water-hammer) pulse</b>"
  ],
  "P21": [
    "เสียง <b>diastolic murmur</b> ที่ 2nd ICS (Aortic area) คือภาวะ <b>Aortic regurgitation</b> ซึ่งตรวจพบชีพจรแบบ <b>Collapsing pulse</b>"
  ],
  "P22": [
    "ใน <b>Aortic stenosis (AS)</b> เลือดต้องบีบผ่านลิ้นที่ตีบแคบ ทำให้คลื่นชีพจรขึ้นช้าและเบา เรียกว่า <b>pulsus parvus et tardus (delayed carotid pulse)</b>"
  ],
  "P23": [
    "อาการแสดงสำคัญของ <b>Cardiac tamponade</b> คือ <b>Pulsus paradoxus</b> (ค่า SBP ลดลงมากกว่า 10 mmHg ขณะหายใจเข้า เนื่องจากหลอดเลือดดำไหลเข้าหัวใจขวาเพิ่มขึ้นจนดัน interventricular septum ไปเบียดห้องซ้าย)"
  ],
  "P24": [
    "<b>Massive pericardial effusion</b> ทำให้เกิดภาวะ cardiac tamponade ซึ่งตรวจพบชีพจรแบบ <b>Pulsus paradoxus</b>"
  ],
  "P25": [
    "หลอดเลือดที่เหมาะที่สุดในการวัด JVP คือ <b>Right internal jugular vein (RIJV)</b> เพราะทอดตัวเป็นแนวตรงต่อกับ SVC และ Right atrium โดยไม่มีลิ้นกั้น"
  ],
  "P26": [
    "เมื่อความดันใน Right atrium สูงขึ้น จะตรวจพบ <b>Elevated JVP (jugular venous distension &gt; 3–4 cm เหนือ sternal angle ที่มุม 45°)</b> และตรวจพบ <b>Hepatojugular reflux</b>"
  ],
  "P27": [
    "คลื่น <b>a wave</b> ของ JVP เกิดจากการบีบตัวของหัวใจห้องบนขวา (<b>Right atrial contraction</b>) ในช่วงท้ายของ diastole"
  ],
  "P28": [
    "<b>a wave</b> ของ JVP สัมพันธ์กับจังหวะ <b>Atrial systole (contraction)</b>"
  ],
  "P29": [
    "คลื่นลูกแรก (<b>a wave</b>) ในกราฟ JVP เกิดจาก <b>RA contraction</b> (ส่วน c = RV บีบตัวดันลิ้น tricuspid, x = atrium คลายตัว, v = เลือดไหลเข้า RA ขณะลิ้น tricuspid ปิด)"
  ],
  "P30": [
    "ในผู้ป่วย <b>Atrial fibrillation (AF)</b> หัวใจห้องบนสั่นพลิ้วโดยไม่มีการบีบตัวพร้อมกัน จึงทำให้ <b>ไม่มีคลื่น a wave (absent a wave)</b> ใน JVP"
  ],
  "P31": [
    "การหายไปของ <b>a wave</b> ใน JVP เป็นลักษณะจำเพาะของภาวะ <b>Atrial fibrillation</b>"
  ],
  "P32": [
    "เสียง pansystolic murmur ที่ left lower sternal border และดังขึ้นเมื่อหายใจเข้า (Carvallo’s sign) คือภาวะ <b>Tricuspid regurgitation (TR)</b>",
    "เลือดที่ไหลย้อนกลับเข้า RA ในช่วง ventricular systole จะทำให้เกิด <b>Elevated / giant v wave (c-v wave)</b> ใน JVP"
  ],
  "P33": [
    "ในผู้ป่วย <b>ASD</b> ขณะหายใจเข้า เลือดดำไหลกลับเข้า RA เพิ่มขึ้น ทำให้ความดันใน RA สูงขึ้นชั่วคราว",
    "ผลต่างความดันระหว่าง LA กับ RA จึงลดลง ทำให้ <b>ปริมาตรเลือดที่ไหลลัดจาก LA ไป RA (LA–RA shunt volume) ลดลง</b> ขณะหายใจเข้า"
  ],
  "P34": [
    "ในภาวะ <b>ASD</b> การหายใจเข้าจะเพิ่ม venous return เข้าสู่ RA จึงช่วยลดความต่างของความดันข้ามผนังกั้นห้องบน ส่งผลให้ <b>LA to RA shunting volume ลดลง</b>"
  ],
  "P35": [
    "<b>Deep inspiration</b> ลดความดันในช่องอก (intrathoracic pressure ติดลบมากขึ้น) จึงช่วยดึงเลือดดำกลับเข้าสู่หัวใจห้องบนขวา (<b>↑venous return</b>) ได้อย่างรวดเร็วและชัดเจนที่สุด"
  ],
  "D1": [
    "<b>Baroreceptors</b> เป็นปลายประสาทรับแรงยืด (spray-type nerve endings) ที่แทรกตัวอยู่บริเวณรอยต่อระหว่างชั้น <b>tunica media และ tunica adventitia</b> ของผนังหลอดเลือดแดง"
  ],
  "D2": [
    "การนวดบริเวณใต้ต่อมมุมกรามคือการทำ <b>Carotid sinus massage</b> ซึ่งเพิ่มแรงกดยืดที่ตัวรับความดัน → <b>↑baroreceptor firing</b> → กระตุ้น vagus ให้ <b>HR ลดลง</b>"
  ],
  "D3": [
    "ผลลัพธ์ของการทำ <b>Carotid massage</b> คือการกระตุ้น baroreflex ทำให้เกิด <b>increased vagal tone</b> ไปชะลออัตราการเต้นของหัวใจ"
  ],
  "D4": [
    "เมื่อเกิด <b>sympathetic withdrawal</b> จากการนวด carotid sinus หลอดเลือดแดงเล็กจะคลายตัว ทำให้ <b>peripheral vascular resistance ลดลง</b> (ดังนั้นข้อที่บอกว่า resistance เพิ่มขึ้นจึงผิด)"
  ],
  "D5": [
    "<b>Carotid sinus massage</b> กระตุ้น baroreceptor → เพิ่ม parasympathetic (vagal) outflow ไปยังหัวใจ ทำให้ทั้ง HR และ AV conduction velocity ลดลง"
  ],
  "D6": [
    "ในสุนัขทดลอง การดึงหรือกระตุ้น <b>Carotid sinus (pulling on the carotid sinus)</b> จะจำลองภาวะความดันสูง → กดความดันโลหิต (<b>↓BP</b>), ↓HR และกดศูนย์หายใจทำให้ <b>↓RR</b>"
  ],
  "D7": [
    "เมื่อเปลี่ยนท่าจากยืนเป็นนอนราบ เลือดจะไหลกลับเข้าหัวใจมากขึ้นทำให้ <b>BP สูงขึ้นในช่วงแรก</b> จากนั้นความดันที่สูงขึ้นจะไปกระตุ้น <b>baroreceptors</b> ให้ดึงความดันกลับลงมา"
  ],
  "D8": [
    "หลังตัดเส้นประสาท vagus ทั้งสองข้าง (<b>double vagotomy</b>) ขา efferent ที่ไปชะลอหัวใจถูกตัดขาด เมื่อกระตุ้น carotid sinus จึง <b>ไม่ทำให้ HR ช้าลง</b>",
    "แต่ <b>BP ยังคงลดลงได้</b> จากการถอน sympathetic (sympathetic withdrawal) และ RR ยังลดลงผ่านเส้นประสาท phrenic"
  ],
  "D9": [
    "การกระตุ้นด้าน central end ของ vagus ด้วย <b>กระแสไฟแรงสูง (high current)</b> จะไปกระตุ้นเส้นใยขนาดเล็กจาก <b>aortic body chemoreceptors</b> ทำให้เกิด pressor response (<b>↑BP, ↑HR, ↑RR</b>)",
    "ส่วนกระแสไฟต่ำ (low current) จึงจะกระตุ้นเส้นใยขนาดใหญ่จาก aortic baroreceptors ที่ทำให้ BP ลดลง"
  ],
  "D10": [
    "ก๊าซ <b>CO₂</b> ออกฤทธิ์เฉพาะที่ (local effect) ทำให้เกิด <b>vasodilation</b> ของหลอดเลือดส่วนปลาย (ยกเว้นหลอดเลือดปอด) แม้ว่าจะกระตุ้น chemoreceptor ส่วนกลางให้เพิ่มความดันก็ตาม"
  ],
  "D11": [
    "การกระตุ้นด้าน central end ของ sciatic nerve ด้วย <b>กระแสไฟต่ำ (low current)</b> ทำให้เกิด <b>depressor reflex</b> → เพิ่มการทำงานของ vagus nerve ไปหลั่ง ACh จับกับ <b>Muscarinic receptor (M2) ที่ SA node</b>"
  ],
  "D12": [
    "การกระตุ้นด้าน central end ของ sciatic nerve ด้วย <b>low current</b> กระตุ้น depressor reflex ทำให้ <b>BP และ HR ลดลง</b> ซึ่งมีแค่ข้อ C ที่ BP และ HR ลดทั้งคู่ (เฉลย AC81: Decreased, decreased, decreased)",
    "ในกราฟจริงของแล็บ (D-C6) RR แทบไม่เปลี่ยน (12 → 12) จึงไม่ต้องเถียงค่าที่สาม",
    "ในทางกลับกัน ถ้าใช้ high current จะกระตุ้น pain fibers เกิด pressor reflex ทำให้ทั้งสามค่าเพิ่มขึ้น"
  ],
  "D13": [
    "Low-current sciatic stimulation ทำให้เกิด depressor reflex เพิ่ม vagal tone ไปที่ AV node → เกิด <b>delay of AV conduction time</b>"
  ],
  "D14": [
    "การกระตุ้น sciatic nerve ด้วย <b>high current</b> (pain reflex) ทำให้หายใจเร็วขึ้นผ่านการส่งคำสั่งไปตาม <b>phrenic nerve</b> เพื่อหลั่ง <b>ACh กระตุ้นกล้ามเนื้อกะบังลม (diaphragm)</b>",
    "ตัวเลือกอื่นผิดเพราะ: sympathetic ganglia ใช้ตัวรับ nicotinic (ใช้ ACh ไม่ใช่ NE), และ central chemoreceptors รับรู้ CO₂/H⁺ ไม่ใช่ PO₂"
  ],
  "D15": [
    "หลังหยุดกระตุ้น splanchnic nerve ความดันโลหิตที่ตกลงต่ำกว่า baseline เกิดจากระดับ Epinephrine ที่ลดต่ำลงไปออกฤทธิ์เด่นที่ <b>β₂ receptor (ทำให้เกิด vasodilation)</b> ไม่ใช่ β₁ receptor"
  ],
  "D16": [
    "เมื่อกระตุ้น splanchnic nerve หลังทำ <b>double vagotomy</b> ความดันจะสูงค้างจาก catecholamines และ HR ไม่สามารถช้าลงได้เพราะไม่มี vagus",
    "ดังนั้นผลของ baroreflex ที่ยังสังเกตเห็นได้ชัดเจนเพียงอย่างเดียวคือ <b>อัตราการหายใจที่ลดลง (↓RR)</b>"
  ],
  "D17": [
    "<b>Low-dose epinephrine</b> มีความชอบจับกับ <b>β₂-adrenergic receptor</b> ที่หลอดเลือดกล้ามเนื้อลายและตับมากกว่า α₁ จึงทำให้เกิด <b>vasodilation</b> และลด TPR"
  ],
  "D18": [
    "สารที่ทำให้ทั้ง <b>BP และ CVP ลดลง</b> ขณะที่ <b>HR เพิ่มขึ้นชัดเจน</b> คือ <b>Low-dose epinephrine</b>",
    "เพราะฤทธิ์ <b>β₂ vasodilation</b> ทำให้ TPR และ BP ลดลง ส่วนฤทธิ์ <b>β₁</b> กระตุ้นให้หัวใจเต้นเร็วและบีบตัวแรงขึ้นจนสูบเลือดออกจากหลอดเลือดดำได้ดี (↓CVP)"
  ],
  "D19": [
    "การหลั่ง <b>Epinephrine จาก adrenal medulla</b> เข้าสู่กระแสเลือดจะไปกระตุ้น β₁ receptor ที่ SA node ทำให้ <b>HR เพิ่มขึ้น</b> (ส่วนข้ออื่นเป็นการกระตุ้นขา baroreflex/vagus ที่ทำให้ HR ช้าลง)"
  ],
  "D20": [
    "การฉีด <b>High-dose adrenaline</b> ทำให้ BP พุ่งสูงขึ้นอย่างรวดเร็ว ซึ่งไปกระตุ้น baroreceptor reflex อย่างแรง ส่งผลยับยั้งศูนย์หายใจทำให้เกิด <b>decreased respiratory rate (adrenaline apnea)</b>"
  ],
  "D21": [
    "หลังทำ <b>vagotomy</b> การฉีด Adrenaline จะไม่เกิด reflex bradycardia (ทำให้ HR ยิ่งพุ่งสูงขึ้นจากฤทธิ์ β₁)",
    "แต่สัญญาณ baroreceptor จาก carotid sinus (ผ่าน CN IX) ยังคงไปกดศูนย์หายใจได้ จึงเห็น <b>decreased respiratory rate</b>"
  ],
  "D22": [
    "ใน <b>denervated heart</b> เส้นประสาท sympathetic ที่ไปเลี้ยงหัวใจถูกตัดขาดแล้ว การกระตุ้นเส้นประสาทโดยตรงจึงไม่เพิ่มแรงบีบตัว (แต่หัวใจยังตอบสนองต่อ circulating catecholamines ในเลือดได้)"
  ],
  "H1": [
    "ผลโดยตรง (direct effect) ของการฉีดสารน้ำเข้า Right atrium คือการเพิ่ม venous return และ preload → ทำให้ <b>cardiac output เพิ่มขึ้น</b> ตามกฎ Frank–Starling"
  ],
  "H2": [
    "การให้ IV fluid เข้าสู่หัวใจห้องขวาเป็นการเพิ่ม preload โดยตรง ส่งผลให้เกิด <b>increased cardiac output</b>"
  ],
  "H3": [
    "ค่า <b>CVP ที่สูงขึ้น</b> ไม่ได้แปลว่ามีน้ำในหลอดเลือดมาก (hypervolemia) เสมอไป แต่อาจเกิดจากภาวะที่หัวใจห้องขวารับเลือดไม่ได้ เช่น <b>cardiac tamponade</b> หรือ right heart failure"
  ],
  "H4": [
    "หลังเสียเลือดจากหลอดเลือดดำ (venous hemorrhage) ปริมาตรเลือดที่ลดลงทำให้ <b>↓BP</b> และร่างกายชดเชยผ่าน baroreceptor/chemoreceptor reflexes ทำให้เกิด <b>↑HR และ ↑RR</b>"
  ],
  "H5": [
    "หลังเสียเลือด ความดันใน capillary จะลดลง ทำให้เกิดการดึงสารน้ำจากเนื้อเยื่อเข้ามาในหลอดเลือด (<b>interstitial fluid shift / autotransfusion</b>) มาเจือจางเม็ดเลือดแดง ค่า <b>Hct จึงลดลง</b> ภายใน 15 นาที"
  ],
  "H6": [
    "การหนีบกั้น <b>SVC (SVC occlusion)</b> ทำให้เลือดไหลกลับเข้าหัวใจน้อยลง (<b>↓venous return</b>) → CO และ BP ลดลง",
    "กระตุ้น baroreceptor reflex เพิ่มการทำงานของ sympathetic ทำให้ <b>↑contractility</b> และ <b>↑total systemic resistance (TPR)</b>"
  ],
  "H7": [
    "ผลโดยตรงที่สุดของการกดกั้น SVC คือปริมาณเลือดที่ไหลเข้าสู่ Right atrium ลดลงทันที ทำให้ <b>Right atrial pressure (CVP) ลดลง</b> (แต่ความดันหลอดเลือดดำที่ศีรษะและแขนเหนือจุดหนีบจะสูงขึ้น)"
  ],
  "H8": [
    "การที่จุด LVEDV บนกราฟ PV loop เลื่อนไปทาง <b>ซ้าย (shift left)</b> แปลว่า <b>preload ลดลง</b> ซึ่งเกิดจากการหนีบกั้นหลอดเลือดดำใหญ่ (<b>SVC occlusion</b>)"
  ],
  "H9": [
    "<b>Nitroglycerin</b> ออกฤทธิ์คลายหลอดเลือดดำเป็นหลัก (venodilation) → เพิ่ม venous capacitance → เลือดค้างในหลอดเลือดดำมากขึ้น ส่งผลให้ <b>venous return และ preload ลดลง</b>"
  ],
  "H10": [
    "ฤทธิ์หลักของ <b>Nitroglycerin</b> คือการขยายหลอดเลือดดำ (venodilation) ทำให้เกิด <b>decreased preload</b>"
  ],
  "H11": [
    "<b>Increased venodilation</b> เพิ่มความจุของระบบหลอดเลือดดำ ทำให้ความดันในหลอดเลือดดำส่วนกลาง (<b>CVP</b>) ลดลงโดยตรง"
  ],
  "H12": [
    "การฉีดของเหลวเข้าถุงหุ้มหัวใจ (<b>injecting fluid into the pericardial sac / cardiac tamponade</b>) จะบีบรัดหัวใจจากด้านนอก",
    "ทำให้เลือดดำไหลเข้าหัวใจไม่ได้ (<b>↓venous return</b>) แต่เลือดจะคั่งรออยู่หน้าหัวใจทำให้ <b>↑CVP</b>"
  ],
  "H13": [
    "ในภาวะ <b>Cardiac tamponade</b> หัวใจถูกบีบรัดจนรับเลือดไม่ได้ (<b>↓LV preload</b>) → บีบเลือดออกได้น้อยลง (<b>↓LV cardiac output</b>)",
    "เมื่อ CO และความดันใน aorta ลดลงอย่างมาก แรงต้านที่ LV ต้องบีบสู้ (<b>LV afterload</b> ซึ่งดูจาก aortic pressure/wall stress) จึง <b>ลดลงด้วย (Decreased, decreased, decreased)</b>"
  ],
  "H14": [
    "ใน <b>Pericardial effusion / tamponade</b> เลือดไหลกลับหัวใจลดลง (↓venous return) และ stroke volume ลดลง ทำให้ <b>pulse pressure แคบลง (narrowed)</b> ไม่ใช่เพิ่มขึ้น"
  ],
  "H15": [
    "ในภาวะ <b>Acute aortic regurgitation (AR)</b> เลือดจาก aorta ไหลย้อนกลับเข้า LV ในช่วง diastole:",
    "ทำให้ปริมาตรเลือดในห้องหัวใจเพิ่มขึ้น (<b>↑EDV</b>) → บีบตัวออกมามากขึ้นตามกฎ Frank–Starling (<b>↑total SV</b>)",
    "ขณะเดียวกันเลือดที่ไหลย้อนกลับทำให้ความดันช่วงคลายตัวตกฮวบ (<b>↓DBP</b>) → ผลต่างความดันกว้างขึ้น (<b>↑pulse pressure</b>)"
  ],
  "H16": [
    "เสียง diastolic blowing murmur ที่ right upper parasternal border (Aortic area) คือภาวะ <b>Aortic regurgitation</b> ซึ่งทำให้ค่า <b>Diastolic BP ลดลง</b>"
  ],
  "H17": [
    "ในกราฟ LV PV loop จุด <b>I</b> แทนค่า <b>End-diastolic volume (EDV)</b>",
    "ในผู้ป่วย <b>Aortic regurgitation</b> มีเลือดไหลย้อนกลับมาเติมเพิ่มใน LV ช่วงคลายตัว จึงทำให้จุด <b>I เลื่อนไปทางขวา (shifts to the right)</b>"
  ],
  "H18": [
    "ภาวะ <b>Aortic regurgitation</b> ทำให้ SBP สูงขึ้นและ DBP ลดลง ส่งผลให้ <b>pulse pressure กว้างขึ้น (widened)</b> ไม่ใช่แคบลง"
  ],
  "H19": [
    "ค่า Pulse pressure ไม่สามารถใช้ประเมิน effective stroke volume ได้ในทุกสภาวะ เช่น ใน <b>Aortic regurgitation</b> แม้จะมี pulse pressure กว้างมาก แต่มีเลือดไหลย้อนกลับ ทำให้ <b>effective forward stroke volume จริงๆ ลดลง</b>"
  ],
  "H20": [
    "ภาวะ <b>Aortic stenosis</b> ที่รุนแรงทำให้เลือดบีบออกทางด้านหน้าได้ยาก เกิดความดันคั่งย้อนกลับจาก LV → LA → ปอด → หัวใจห้องขวา จนทำให้ <b>CVP สูงขึ้นได้</b>"
  ],
  "H21": [
    "ใน <b>Coarctation of the aorta</b> (ตีบใต้ต่อจุดแยกของ left subclavian artery):",
    "ความดัน <b>ก่อนจุดตีบ (proximal / แขน) จะสูงขึ้น (Increased)</b>",
    "ความดัน <b>หลังจุดตีบ (distal / ขา) จะลดลง (Decreased)</b> และหัวใจห้องซ้ายต้องบีบตัวสู้กับความต้านทานที่จุดตีบทำให้ <b>LV afterload เพิ่มขึ้น (Increased)</b>"
  ],
  "H22": [
    "ใน <b>Coarctation of the aorta</b> ความดันในหลอดเลือดแดงส่วนต้นก่อนถึงจุดตีบ (proximal) จะสูงขึ้น ส่วนหลังจุดตีบ (distal) จะมีเลือดไปเลี้ยงลดลงและความดันต่ำลง"
  ],
  "H23": [
    "เส้นประสาท <b>Aortic nerve</b> มีทั้งเส้นใยขนาดใหญ่จาก <b>aortic arch baroreceptors</b> (ถูกกระตุ้นเด่นที่ <b>low current → ↓BP, ↓RR</b>) และเส้นใยขนาดเล็กจาก <b>aortic body chemoreceptors</b> (ถูกกระตุ้นเด่นที่ <b>high current → ↑BP, ↑RR</b>)"
  ],
  "H24": [
    "ข้อความนี้สลับข้างกัน: ที่ถูกต้องคือ <b>Right vagus</b> เด่นที่ SA node ทำให้เกิด <b>bradycardia</b> ส่วน <b>Left vagus</b> เด่นที่ AV node ทำให้เกิด <b>heart block</b>"
  ],
  "H25": [
    "จุดกำเนิดไฟฟ้าผิดปกติที่พบบ่อยที่สุดของ <b>Atrial fibrillation (AF)</b> อยู่ใน <b>Left atrium</b> (โดยเฉพาะรอบรูเปิดของ pulmonary veins)"
  ],
  "H26": [
    "ใน <b>Atrial fibrillation</b> แม้จังหวะที่ผ่าน AV node ลงมาจะไม่สม่ำเสมอ (irregularly irregular) และไม่มี P wave แต่การนำไฟฟ้าใน His–Purkinje ยังปกติ จึงเห็นเป็น <b>Narrow QRS complexes</b>"
  ],
  "H27": [
    "คลื่นไฟฟ้าที่สับสนอลหม่านใน <b>Atrial fibrillation</b> มีจุดกำเนิดมาจากใน <b>Atria</b> (ไม่ใช่ AV node โดย AV node เพียงแต่ทำหน้าที่กรองสัญญาณบางส่วนส่งลงไปยัง ventricle)"
  ],
  "H28": [
    "ในภาวะ <b>Ventricular fibrillation (VF)</b> กล้ามเนื้อหัวใจห้องล่างสั่นพลิ้วโดยไม่สามารถบีบตัวส่ง stroke volume ออกไปได้เลย จึง <b>คลำชีพจรไม่ได้เลย (no palpable pulse)</b>"
  ]
};
  var THAI_CONCEPT = {
  "R-C1": [
    "ตั้งต้นทุกข้อจากสมการ <b>MAP = CO × TPR = (HR × SV) × TPR</b>",
    "ตัวปรับหลัก 5 ตัว: <b>HR, contractility, venous tone (preload), arteriolar tone (TPR) และ blood volume (kidney)</b>"
  ],
  "R-C2": [
    "<b>Seconds (ระบบประสาท)</b>: Baroreflex (MAP 60–180), Chemoreflex (&lt;80), CNS ischemic (&lt;60)",
    "<b>Minutes–hours</b>: Ang II vasoconstriction, capillary fluid shift, stress relaxation",
    "<b>Hours–days (Kidney)</b>: Renal–body fluid system (RAAS, ADH, pressure natriuresis) มี <b>infinite gain</b> (ส่วน baroreflex จะ reset ใน 1–2 วัน)"
  ],
  "R-C3": [
    "<b>NTS</b> เป็นจุดรับสัญญาณขาเข้าจาก CN IX และ CN X",
    "<b>RVLM (vasoconstrictor area)</b> ส่งสัญญาณ sympathetic ตลอดเวลาเพื่อสร้าง basal vascular tone"
  ],
  "R-C4": [
    "แยกให้แม่น: <b>Carotid sinus = baroreceptor (CN IX)</b> vs <b>Carotid body = chemoreceptor</b>",
    "เมื่อ BP ตก → <b>afferent firing ใน CN IX/X ลดลง</b> → ปลดล็อก RVLM ให้เพิ่ม sympathetic และลด vagus"
  ],
  "R-C5": [
    "<b>Baroreceptor</b>: 60–180 mmHg | <b>Chemoreceptor</b>: &lt;80 mmHg | <b>CNS ischemic</b>: &lt;60 mmHg",
    "<b>Cushing reaction (↑ICP)</b>: Hypertension + Reflex bradycardia + Irregular breathing"
  ],
  "R-C6": [
    "<b>Vasoconstrictors</b>: ADH (V1, แรงที่สุด), Ang II, Endothelin-1 (จาก endothelium), NE/Epi (α₁)",
    "<b>Vasodilators</b>: NO (หลั่งจาก <b>shear stress</b>, เพิ่ม cGMP), Histamine (หลั่งเมื่อ <b>tissue injury</b> + เพิ่ม permeability), Metabolites"
  ],
  "R-C7": [
    "<b>Metabolic control</b>: เนื้อเยื่อทำงานหนัก → ปล่อย Adenosine, CO₂, K⁺, H⁺ → ขยายหลอดเลือด (<b>active hyperemia</b>)",
    "<b>Autoregulation</b>: รักษา blood flow ให้คงที่เมื่อ <b>perfusion pressure</b> เปลี่ยนแปลง (อาศัย myogenic + metabolic)"
  ],
  "R-C8": [
    "<b>RAAS</b>: ↓Renal perfusion / ↓NaCl ที่ macula densa / ↑β₁ → Renin → Ang I → ACE → Ang II → หดหลอดเลือด + หลั่ง Aldosterone &amp; ADH",
    "<b>ACE inhibitor</b> ลด Ang II และ Aldosterone แต่ทำให้ Bradykinin คั่ง (เกิดอาการไอแห้ง)"
  ],
  "R-C9": [
    "<b>Sympathetic (β₁)</b>: เพิ่ม I<sub>f</sub> (funny channel) และ I<sub>Ca-L</sub> → ความชัน phase 4 เพิ่มขึ้น → ↑HR และเพิ่ม Ca²⁺ → ↓ESV, ↑SV",
    "<b>Parasympathetic (M2)</b>: เปิดช่อง K⁺ (I<sub>K-ACh</sub>) → เกิด hyperpolarization และความชัน phase 4 ลดลง → ↓HR"
  ],
  "R-C10": [
    "<b>Transplanted (denervated) heart</b>: ไม่มี vagal tone จึงมี resting HR สูง (~90–110 bpm)",
    "เมื่อออกกำลังกายต้องอาศัย <b>circulating catecholamines</b> และ <b>Frank–Starling</b> (การให้ Atropine จะไม่ได้ผล)"
  ],
  "R-C11": [
    "เมื่อเสียเลือด/ขาดน้ำ: <b>Direct effect</b> คือ ↓preload, ↓SV, weak pulse และ ↓BP",
    "<b>Compensation</b>: ↓baroreceptor firing → ↑HR, ↑SVR (ตัวเย็น), ดึงน้ำจาก interstitial เข้าหลอดเลือด (↓Hct) และกระตุ้น RAAS/ADH/thirst"
  ],
  "F-C1": [
    "วิธีอ่านกราฟแล็บกบ/เต่าทุกข้อ: <b>เส้นขาลง (A) = diastole</b>, <b>เส้นขาขึ้น (B) = systole</b>",
    "ลำดับการเต้น: <b>Sinus venosus (pacemaker) → Atria → Ventricle</b>"
  ],
  "F-C2": [
    "<b>SA node เป็น primary pacemaker</b> เพราะมี <b>อัตราการปล่อยสัญญาณเร็วที่สุด (fires fastest)</b> ไม่ใช่เพราะตำแหน่งที่อยู่",
    "ความเร็วในการนำไฟฟ้า: เร็วที่สุดที่ <b>His–Purkinje</b> และช้าที่สุดที่ <b>AV node / SA node</b>"
  ],
  "F-C3": [
    "ระยะ <b>ARP</b> กินเวลาตั้งแต่ phase 0 ผ่าน plateau ไปจนถึงครึ่งแรกของ phase 3 (ยาวเกือบเท่าช่วงหดตัว)",
    "ช่วยป้องกันไม่ให้หัวใจเกิด <b>tetanic contraction</b> เพื่อให้มีจังหวะคลายตัวรับเลือดเสมอ"
  ],
  "F-C4": [
    "กระตุ้นช่วง <b>systole (1, 2, 3)</b> → ตกในระยะ ARP ไม่เกิด extrasystole",
    "กระตุ้นช่วง <b>diastole (4, 5, 6)</b> → เกิด <b>extrasystole</b> ตามด้วย <b>compensatory pause</b> (เพราะสัญญาณปกติจาก SA node รอบถัดมาตกใน ARP ของ extrasystole)"
  ],
  "F-C5": [
    "<b>Stannius ligature I</b> (กั้นระหว่าง sinus venosus กับ atria): atria หยุดไปชั่วครู่แล้วกลับมาเต้นเองในอัตราที่ช้าลง แสดงถึงคุณสมบัติ <b>automaticity</b>",
    "ในคนที่ SA node เสีย: <b>AV node</b> จะรับหน้าที่แทน (40–60 bpm, narrow QRS)"
  ],
  "F-C6": [
    "<b>All-or-none law</b>: เมื่อกระตุ้นถึงระดับ <b>threshold</b> หัวใจจะหดตัวเต็มที่ การเพิ่มกระแสไฟให้แรงขึ้นจะไม่เพิ่มความแรงของการบีบตัว"
  ],
  "T-C1": [
    "<b>Parasympathetic (Vagus)</b>: Preganglionic ไซแนปส์ผ่านตัวรับ <b>Nicotinic</b> ที่ปมประสาทหัวใจ (crescentic line) → Postganglionic หลั่ง ACh จับ <b>M2</b> ที่ SA/AV node",
    "ในขณะพักมี <b>vagal tone</b> ทำงานอยู่ตลอดเวลา"
  ],
  "T-C2": [
    "<b>Right vagus → SA node</b> → ลด HR (bradycardia / arrest)",
    "<b>Left vagus → AV node</b> → กั้นการนำไฟฟ้าเกิด <b>AV block</b> (อัตราส่วน A:V &gt; 1:1)"
  ],
  "T-C3": [
    "<b>Low-dose nicotine</b> กระตุ้น nicotinic receptor ที่ปมประสาท → HR ช้าลง และยังกระตุ้น vagus/crescentic line ให้หัวใจหยุดเต้นได้",
    "<b>High-dose nicotine</b> ทำให้ปมประสาทเกิด <b>depolarization block</b> → เสีย resting vagal tone (HR เพิ่มจาก 46 เป็น 50) และกระตุ้น vagus ไม่ผ่าน แต่กระตุ้นที่ <b>crescentic line (postganglionic)</b> ยังหยุดหัวใจได้"
  ],
  "T-C4": [
    "<b>Gaskell’s clamp</b> ที่ AV junction จำลองการเกิด AV block ตั้งแต่ 1st degree, 2nd degree ไปจนถึง <b>3rd degree (complete AV block / AV dissociation)</b>"
  ],
  "B-C1": [
    "สูตรหลัก: <b>PP = SBP − DBP</b> และ <b>MAP = DBP + (PP / 3)</b> (คำนวณย้อนกลับ: <b>DBP = MAP − PP/3</b>)",
    "<b>Sphygmomanometer</b> เป็น <b>indirect</b> gold standard ส่วน <b>Oscillometer</b> วัดจุดที่ผนังหลอดเลือดสั่นแรงสุดเป็นค่า <b>MAP</b>"
  ],
  "B-C2": [
    "ขนาด cuff ที่เหมาะสม: <b>กว้าง 40%</b> และ <b>ยาว 80–100%</b> ของรอบต้นแขน",
    "ต้องคลำ <b>palpatory SBP</b> ก่อนฟังด้วย stethoscope เสมอ เพื่อป้องกันความผิดพลาดจาก <b>auscultatory gap</b>"
  ],
  "B-C3": [
    "<b>Korotkoff Phase I</b> (เสียงตุบแรก) = <b>SBP</b> | <b>Phase V</b> (เสียงหายไป) = <b>DBP</b> ในผู้ใหญ่ (ส่วน Phase IV เสียงอู้อี้ ใช้ในเด็ก/หญิงตั้งครรภ์/AR)"
  ],
  "B-C4": [
    "<b>Falsely HIGH</b>: Cuff เล็ก/แคบเกินไป, พันหลวมเกินไป, แขนต่ำกว่าระดับหัวใจ",
    "<b>Falsely LOW</b>: Cuff ใหญ่เกินไป, <b>พันแน่นเกินไป (ตามเฉลยแล็บ)</b>, แขนสูงกว่าระดับหัวใจ, <b>ปล่อยลมเร็วเกินไป</b>"
  ],
  "B-C5": [
    "ในท่านอนราบ <b>SBP ที่ขาสูงกว่าที่แขน</b> (และ <b>Femoral artery มี SBP สูงกว่า aorta</b>) จากปรากฏการณ์ <b>pulse-wave amplification</b>",
    "แต่ในภาวะ <b>Coarctation of the aorta</b> ความดันที่แขนจะสูงกว่าที่ขาอย่างชัดเจน"
  ],
  "B-C6": [
    "<b>ลุกยืน (Supine → Upright)</b>: เลือดพูลที่ขา → ↓venous return → ↓baroreceptor firing → ↑HR, ↑TPR (แต่ CO ยังต่ำกว่าท่านอน ~20–30%)",
    "<b>ล้มตัวลงนอน (Upright → Supine)</b>: ↑venous return → ↑BP ช่วงแรก → <b>↑baroreceptor stimulation</b> → ดึง HR และ BP ลง"
  ],
  "B-C7": [
    "ขณะออกกำลังกาย: <b>↑↑SBP</b> แต่ <b>DBP คงที่หรือลดลงเล็กน้อย</b> → <b>Pulse pressure กว้างขึ้น</b>",
    "หากหยุดวิ่งกะทันหันแล้วยืนนิ่ง จะขาด <b>muscle pump</b> ทำให้ venous return ตกฮวบจนหน้ามืดได้"
  ],
  "M-C1": [
    "สรุป 5 การทดลองในแล็บ Microcirculation: กั้นเลือดแดง (200 mmHg), กั้นเลือดดำ (80 mmHg), ขูดผิวหนังเบา/แรง, แช่น้ำอุ่น/น้ำเย็นจัด และผลของแรงโน้มถ่วง"
  ],
  "M-C2": [
    "ขณะรัด cuff <b>200 mmHg</b> (กั้นเลือดแดงสมบูรณ์): แขนซีด เย็น ปวด คลำชีพจรไม่ได้ แต่ <b>ไม่บวม (No edema)</b> เพราะไม่มีเลือดไหลเข้า",
    "เมื่อปล่อยลม cuff: เกิด <b>reactive hyperemia</b> เลือดอุ่นไหลทะลักเข้าและระดับ <b>deoxyhemoglobin ลดลงอย่างรวดเร็ว</b>"
  ],
  "M-C3": [
    "ขณะรัด cuff <b>80 mmHg</b> (กั้นเลือดดำ): เลือดแดงเข้าได้แต่เลือดดำออกไม่ได้ → แขนม่วงคล้ำ หลอดเลือดดำโป่งพองแบบ <b>passive distension</b> (ไม่ใช่เกิดจาก vasodilation)"
  ],
  "M-C4": [
    "ขูดผิวหนังเบาๆ → <b>White reaction</b> (รีดเลือดออกจากหลอดเลือดฝอยโดยตรง)",
    "ขูดผิวหนังแรงๆ → <b>Triple response</b>: Red line (หลอดเลือดขยายเฉพาะที่), <b>Flare (เกิดจาก axon reflex / antidromic C-fiber impulse)</b>, และ <b>Wheal (เกิดจาก ↑capillary permeability จาก histamine)</b>"
  ],
  "M-C5": [
    "แช่มือในน้ำเย็นจัด (<b>5 °C</b>): หลอดเลือดดำตื้นหดตัวแบนราบ (<b>flattened veins</b>) แต่ผิวหนังมี <b>สีแดง (red)</b> เพราะ Hb จับ O₂ แน่นขึ้นในที่เย็น ร่วมกับมี cold-induced vasodilation"
  ],
  "M-C6": [
    "ในท่ายืนนิ่ง: <b>Dural venous sinuses ในกะโหลกศีรษะมีแรงดันเป็นลบ (negative pressure)</b> เพราะกะโหลกยึดผนังไว้ไม่ให้ยุบตัว"
  ],
  "P-C1": [
    "<b>Diaphragm</b> ฟังเสียงสูง (high-pitched) | <b>Bell</b> ฟังเสียงต่ำ (low-pitched)",
    "การคลำ (palpation) บอกการโตของ <b>ventricle (เช่น RVH)</b> ได้ แต่บอก atrium ไม่ได้ และอาการบวม/เขียวไม่จำเป็นต้องเกิดจากโรคหัวใจเสมอไป"
  ],
  "P-C2": [
    "<b>S1</b> (AV valves ปิด) → ตามด้วยระยะ <b>Isovolumetric contraction</b>",
    "<b>S2</b> (Semilunar valves ปิด หลังจบ ventricular ejection) → ตามด้วยระยะ <b>Isovolumetric relaxation</b>"
  ],
  "P-C3": [
    "จำตำแหน่งฟังให้แม่น: <b>Right 2nd ICS = Aortic</b> | <b>Left 2nd ICS = Pulmonic</b> | <b>Left 4th–5th ICS ชิดขอบอก = Tricuspid</b> | <b>Left 5th ICS แนว MCL (PMI) = Mitral</b>",
    "เทียบจังหวะ: ดังพร้อม carotid pulse = <b>Systolic</b> (AS/PS, MR/TR) | ดังหลัง S2 = <b>Diastolic</b> (AR/PR blowing, MS/TS rumble)"
  ],
  "P-C4": [
    "<b>AR</b> = Collapsing pulse | <b>AS</b> = Pulsus parvus et tardus (delayed carotid pulse) | <b>Tamponade</b> = Pulsus paradoxus | <b>AF</b> = Pulse deficit"
  ],
  "P-C5": [
    "วัด JVP ที่ <b>Right internal jugular vein</b>: <b>a wave = RA contraction</b> (หายไปใน <b>AF</b>), <b>x = atrial relaxation</b>, <b>v wave = RA filling</b> (สูงใหญ่ขึ้นใน <b>TR</b>)"
  ],
  "P-C6": [
    "ในผู้ป่วย <b>ASD</b> มี wide fixed split S2 และเมื่อ <b>หายใจเข้า</b> เลือดดำไหลเข้า RA เพิ่มขึ้นจนความดัน RA สูงขึ้น ทำให้ <b>LA → RA shunt volume ลดลง</b>"
  ],
  "D-C1": [
    "หลักการอ่านกราฟแล็บสุนัข: กระตุ้นปลาย <b>peripheral end = ทดสอบขา efferent</b> | กระตุ้นปลาย <b>central end = ทดสอบขา afferent</b>",
    "<b>Low current</b> กระตุ้นเส้นใยขนาดใหญ่ (baroreceptor / depressor) | <b>High current</b> ดึงเส้นใยขนาดเล็กเข้าร่วม (chemoreceptor / pain → pressor)"
  ],
  "D-C2": [
    "สรุปตารางผลในแล็บ Dog I: เปรียบเทียบการหนีบ CCA (ความดันใน sinus ตก → ↑BP, ↑HR) กับการดึง/นวด carotid sinus (↑แรงยืด → ↓BP, ↓HR, ↓RR)"
  ],
  "D-C3": [
    "กราฟจริงจากแล็บ Dog I: ดึงหรือกระตุ้นไฟฟ้าที่ <b>carotid sinus → ↓BP, ↓HR, ↓RR</b> | หนีบ <b>common carotid artery (CCA) → ↑BP, ↑HR, ↑RR</b>"
  ],
  "D-C4": [
    "<b>Head-down tilt</b> (เหมือนล้มตัวลงนอน): เลือดไหลเข้าหัวใจมากขึ้นทำให้ <b>BP สูงขึ้นก่อน</b> แล้ว baroreflex จึงดึง BP และ HR ลง",
    "<b>Head-up tilt</b> (เหมือนลุกยืน): เลือดพูลส่วนล่างทำให้ <b>BP ตกก่อน</b> แล้ว baroreflex จึงกระตุ้นให้ HR และ BP กลับขึ้นมา"
  ],
  "D-C5": [
    "หลังทำ <b>double vagotomy</b> การดึงหรือกระตุ้น carotid sinus จะ <b>ไม่ทำให้ HR ช้าลง</b> (เพราะตัดขา efferent ไปหัวใจแล้ว) แต่ <b>BP และ RR ยังคงลดลง</b>"
  ],
  "D-C6": [
    "กระตุ้น central end ของ <b>sciatic nerve</b>: <b>Low current</b> → depressor reflex (กระตุ้น vagus ผ่าน <b>M2 ที่ SA node</b> → ↓BP, ↓HR) | <b>High current</b> → pressor/pain reflex (↑BP, ↑HR และ <b>↑RR ผ่าน ACh จาก phrenic nerve</b>)"
  ],
  "D-C7": [
    "กระตุ้น <b>splanchnic nerve</b>: BP พุ่งขึ้น 2 จังหวะ (หลอดเลือดช่องท้องหดตัว + หลั่ง adrenal epinephrine) และเมื่อหยุดกระตุ้น BP จะลดต่ำกว่า baseline จากฤทธิ์ <b>β₂ vasodilation</b>",
    "<b>Low-dose epinephrine</b>: เด่นที่ β₂ (↓BP, ↓CVP) ร่วมกับ β₁ (↑HR) | <b>High-dose epinephrine</b>: ↑↑BP จนเกิด reflex ↓RR (adrenaline apnea)"
  ],
  "H-C1": [
    "สรุปภาพรวมแล็บ Dog II: เปรียบเทียบผลต่อ CVP, BP, HR และ PP เมื่อเปลี่ยนการเติมเลือด (IV fluid, hemorrhage, caval clamp, nitroglycerin, tamponade) หรือเปลี่ยนทางออก (AR, AS, coarctation)"
  ],
  "H-C2": [
    "การหนีบ <b>SVC หรือ IVC</b> ทำให้ <b>↓venous return, ↓RA pressure (CVP), ↓preload</b> (จุด EDV เลื่อนไปทางซ้ายบน PV loop) และกระตุ้น baroreflex ให้ <b>↑HR, ↑contractility, ↑TPR</b>"
  ],
  "H-C3": [
    "ใน <b>Cardiac tamponade</b> (ฉีดน้ำเข้าถุงหุ้มหัวใจ): หัวใจถูกบีบรัดทำให้ <b>↓venous return แต่ ↑CVP</b>",
    "ส่งผลให้ <b>LV preload, LV cardiac output และ LV afterload (aortic pressure) ลดลงทั้งหมด</b> ร่วมกับมี narrow pulse pressure"
  ],
  "H-C4": [
    "ใน <b>Aortic regurgitation (AR)</b>: เลือดไหลย้อนกลับเข้า LV ช่วงคลายตัว → <b>↑EDV (จุด I บน PV loop เลื่อนไปทางขวา), ↑total SV, ↑SBP, ↓DBP และ ↑pulse pressure</b> (แต่ effective forward SV ลดลง)"
  ],
  "H-C5": [
    "หนีบ <b>ascending aorta</b> (จำลอง severe AS): ความดันคั่งย้อนกลับทำให้ <b>↑CVP</b>",
    "หนีบ <b>aortic arch / coarctation</b>: ความดัน <b>ก่อนจุดตีบ (proximal) สูงขึ้น</b>, ความดัน <b>หลังจุดตีบ (distal) ลดลง</b> และ <b>↑LV afterload</b>"
  ],
  "H-C6": [
    "กระตุ้น <b>aortic nerve</b>: <b>Low current</b> กระตุ้น baroreceptor fibers (↓BP, ↓HR) | <b>High current</b> กระตุ้น chemoreceptor fibers (↑BP, ↑HR)",
    "กระตุ้น <b>right vagus (peripheral end)</b> → หยุดการเต้นของ SA node ทันที"
  ],
  "H-C7": [
    "<b>Atrial fibrillation (AF)</b>: จุดกำเนิดอยู่ใน <b>Atria (โดยเฉพาะ left atrium รอบ pulmonary veins)</b> บน ECG ไม่พบ P wave, จังหวะไม่สม่ำเสมอ แต่ยังมี <b>narrow QRS</b>",
    "<b>Ventricular fibrillation (VF)</b>: หัวใจห้องล่างสั่นพลิ้วไม่มีการบีบตัวส่งเลือด → <b>คลำชีพจรไม่ได้เลย (no palpable pulse)</b>"
  ]
};
  var THAI_SEC = {
  "R": {
    "big": "ทุกกลไกในบทนี้ทำงานเพื่อรักษาสมการ <b>MAP = CO × TPR = (HR × SV) × TPR</b> ผ่านตัวปรับ 5 ตัว (HR, contractility, venous tone, arteriolar tone, blood volume) บน 3 ช่วงเวลา: วินาที (ระบบประสาท), นาที–ชั่วโมง (ฮอร์โมน/fluid shift) และวัน (ไต)",
    "traps": [
      "<b>Carotid sinus</b> = baroreceptor (รับแรงยืด) vs <b>Carotid body</b> = chemoreceptor (รับ O₂/CO₂/H⁺)",
      "ในภาวะความดันต่ำ (hypotension) สัญญาณขาเข้าผ่าน <b>CN IX และ CN X ไปยัง NTS จะลดลง</b> (ข้อที่บอกว่าเพิ่มขึ้นคือข้อที่ผิด)",
      "<b>Autoregulation</b> คือการรักษา blood flow ให้คงที่เมื่อ <b>pressure</b> เปลี่ยน (ถ้าเมแทบอลิซึมเพิ่มแล้วเลือดไหลเพิ่ม เรียกว่า metabolic control / active hyperemia)",
      "<b>β₁ agonist</b> เพิ่ม HR โดยกระตุ้น <b>funny channels (Na⁺ influx)</b> ส่วนการเพิ่มแรงบีบตัว (EF) เกิดจากการเพิ่ม <b>intracellular Ca²⁺</b>",
      "<b>Transplanted heart</b> ไม่มี vagal tone จึงใช้ Atropine ไม่ได้ผล และเพิ่ม HR ตอนออกกำลังกายด้วย <b>circulating catecholamines</b>"
    ]
  },
  "F": {
    "big": "แล็บหัวใจกบแสดงหลักการนำไฟฟ้าและการหดตัวของหัวใจ: จุดกำเนิดจังหวะที่เต้นเร็วที่สุดจะเป็นผู้นำ (sinus venosus/SA node), หัวใจถูกกระตุ้นซ้ำได้เฉพาะช่วงคลายตัว (diastole) เพราะมีระยะ ARP ยาว, และขนาดการหดตัวเป็นไปตามกฎ All-or-none",
    "traps": [
      "ในกราฟแล็บนี้ <b>เส้นขาขึ้น = systole</b> และ <b>เส้นขาลง/ฐานราบ = diastole</b> (ใช้ดูข้อ F15)",
      "SA node เป็น primary pacemaker เพราะ <b>เต้นเร็วที่สุด (fires fastest)</b> ไม่ใช่เพราะตำแหน่งที่อยู่",
      "<b>Compensatory pause</b> เกิดเพราะสัญญาณปกติจาก <b>SA node</b> วิ่งมาชนระยะ ARP ของ extrasystole",
      "ขนาดของ extrasystole ที่ต่างกันเมื่อกระตุ้นคนละเวลาเกิดจาก <b>different preload (EDV)</b> ไม่ใช่ความแรงของกระแสไฟ"
    ]
  },
  "T": {
    "big": "แล็บหัวใจเต่าแสดงการควบคุมของระบบประสาทอัตโนมัติ: เส้นประสาท Vagus ต้องไซแนปส์ผ่านตัวรับ Nicotinic ที่ปมประสาทบริเวณ crescentic line ก่อนส่งเส้นใยสั้นๆ ไปจับกับ M2 receptor ที่ SA/AV node",
    "traps": [
      "<b>Right vagus</b> เด่นที่ <b>SA node (ลด HR)</b> vs <b>Left vagus</b> เด่นที่ <b>AV node (เกิด AV block)</b>",
      "ปมประสาทที่ crescentic line ใช้ตัวรับ <b>Nicotinic</b> ส่วนที่เซลล์หัวใจ (SA/AV node) ใช้ตัวรับ <b>Muscarinic (M2)</b>",
      "<b>Low-dose nicotine</b> กระตุ้นปมประสาท (ยังไม่บล็อก) ส่วน <b>High-dose nicotine</b> ทำให้เกิด <b>depolarization block</b> (เสีย vagal tone → HR เพิ่มขึ้นจาก 46 เป็น 50 bpm และกระตุ้น vagus ไม่ผ่าน)"
    ]
  },
  "B": {
    "big": "แล็บการวัดความดันโลหิต: อาศัยการฟังเสียง Korotkoff จากการไหลแบบปั่นป่วน (turbulent flow) และทดสอบผลของการเปลี่ยนท่าทางและการออกกำลังกายต่อระบบหัวใจและหลอดเลือด",
    "traps": [
      "ตามเฉลยของรายวิชา: <b>พัน cuff แน่นเกินไป (too tight)</b>, <b>ใช้ cuff ใหญ่เกินไป</b> หรือ <b>ปล่อยลมเร็วเกินไป</b> จะอ่านค่าได้ <b>ต่ำกว่าจริง (falsely low)</b>",
      "ในท่านอนราบ <b>ความดันซิสโตลิกที่ขาสูงกว่าที่แขน</b> (และ <b>Femoral artery มี SBP สูงกว่า aorta</b>) จาก pulse-wave amplification",
      "การคำนวณย้อนกลับจาก MAP และ PP: ใช้สูตร <b>DBP = MAP − (PP / 3)</b> แล้วนำ DBP + PP จะได้ SBP"
    ]
  },
  "M": {
    "big": "แล็บการไหลเวียนเลือดฝอยที่ผิวหนัง (Microcirculation): เปรียบเทียบผลของการกั้นเลือดแดงสมบูรณ์ (200 mmHg), การกั้นเฉพาะเลือดดำ (80 mmHg), การขูดผิวหนัง และอุณหภูมิ",
    "traps": [
      "รัดแขนที่ <b>200 mmHg</b> เลือดเข้าไม่ได้เลย จึง <b>ไม่เกิดอาการบวม (No edema)</b> และเมื่อปล่อยลมจะเกิด <b>reactive hyperemia (↓deoxyhemoglobin อย่างรวดเร็ว)</b>",
      "รัดแขนที่ <b>80 mmHg</b> เลือดดำไหลกลับไม่ได้ หลอดเลือดดำโป่งออกเองแบบ <b>passive distension</b> (ไม่ได้เกิดจาก vasodilation)",
      "รอยแดงรอบแนวขูดผิวหนัง (<b>flare</b>) เกิดจาก <b>axon reflex (antidromic C-fiber impulses)</b> ส่วนตุ่มนูน (<b>wheal</b>) เกิดจาก <b>↑capillary permeability</b>",
      "แช่มือในน้ำเย็นจัด <b>5 °C</b>: ผิวหนังมี <b>สีแดง (red)</b> แต่หลอดเลือดดำตื้นจะ <b>แบนราบ (flattened veins)</b>"
    ]
  },
  "P": {
    "big": "แล็บตรวจร่างกายระบบหัวใจและหลอดเลือด: ใช้หลักการ 'จังหวะเวลา (systole vs diastole) + ตำแหน่งที่ฟังชัดที่สุด' ในการแยกเสียงหัวใจและเสียงฟู่ (murmurs) ร่วมกับการตรวจชีพจรและ JVP",
    "traps": [
      "<b>Left 2nd ICS = Pulmonic area</b> (systolic = PS, diastolic = PR) | <b>Right 2nd ICS = Aortic area</b> | <b>Left 5th ICS ชิดขอบอก = Tricuspid area</b> | <b>PMI = Mitral area</b>",
      "<b>S1</b> ตามด้วย <b>Isovolumetric contraction</b> | <b>S2</b> ตามด้วย <b>Isovolumetric relaxation</b>",
      "<b>a wave</b> ของ JVP เกิดจาก <b>RA contraction</b> (หายไปใน <b>AF</b>) ส่วน <b>giant v wave</b> พบใน <b>Tricuspid regurgitation (TR)</b>",
      "ในผู้ป่วย <b>ASD</b> ขณะหายใจเข้า ความดันใน RA ที่เพิ่มขึ้นจะทำให้ <b>LA → RA shunt volume ลดลง</b>"
    ]
  },
  "D": {
    "big": "แล็บสุนัข I (Reflexes &amp; Drugs): ทุกการทดลองคือการไล่วงจรรีเฟล็กซ์ (ตัวกระตุ้น → ตัวรับความดัน/เคมี → ขาออกผ่าน vagus, sympathetic, adrenal หรือ phrenic nerve) และดูผลเมื่อตัดเส้นประสาท vagus ทั้งสองข้าง",
    "traps": [
      "<b>ดึง/นวด Carotid sinus</b> → จำลองความดันสูง (↓BP, ↓HR, ↓RR และ <b>↓TPR</b>) | <b>หนีบ CCA</b> → ความดันใน sinus ตก (↑BP, ↑HR, ↑RR)",
      "หลังทำ <b>double vagotomy</b>: HR จะไม่ลดลงเมื่อกระตุ้น baroreflex แต่ยังเห็น <b>↓BP</b> (จากการถอน sympathetic) และ <b>↓RR</b>",
      "กระตุ้น central end ของ vagus หรือ aortic nerve ด้วย <b>high current</b> จะไปกระตุ้น <b>chemoreceptor fibers</b> ทำให้เกิด <b>↑BP, ↑HR, ↑RR</b>",
      "ความดันที่ตกลงต่ำกว่า baseline หลังหยุดกระตุ้น splanchnic nerve เกิดจากฤทธิ์ของ <b>Low-dose epinephrine บนตัวรับ β₂ (vasodilation)</b>"
    ]
  },
  "H": {
    "big": "แล็บสุนัข II (Hemodynamic Disturbances): ทดลองเปลี่ยน preload (ให้น้ำเกลือ, เสียเลือด, หนีบ SVC/IVC, ให้ nitroglycerin, บีบรัดหัวใจ) หรือเปลี่ยน afterload/ลิ้นหัวใจ (AR, AS, coarctation) แล้วดูการเปลี่ยนแปลงของ CVP, BP และ PV loop",
    "traps": [
      "<b>Cardiac tamponade</b> เป็นภาวะที่ <b>↑CVP แต่ ↓venous return</b> และทำให้ทั้ง <b>LV preload, CO และ afterload (aortic pressure) ลดลงทั้งหมด</b>",
      "<b>SVC occlusion</b> ทำให้ <b>RA pressure (CVP) ลดลง</b> และจุด EDV บน PV loop เลื่อนไปทาง <b>ซ้าย</b>",
      "<b>Aortic regurgitation (AR)</b> ทำให้ <b>↑EDV (จุด I เลื่อนไปทางขวา), ↑SV, ↓DBP และ ↑pulse pressure</b> (แต่ effective forward SV ลดลง)",
      "<b>Atrial fibrillation (AF)</b> มีจุดกำเนิดใน <b>Atria (left atrium)</b> ไม่ใช่ AV node และบน ECG ยังคงเห็นเป็น <b>narrow QRS</b>"
    ]
  }
};

  var state = {}, view = 'present', coreOnly = false, seq = [], idx = 0;

  function isQ(it) { return !!it && (it.t === 'q' || it.t === 'tf' || it.t === 'open'); }
  function secIndex(it) { return it.t === 'intro' ? -1 : (it.t === 'sec' ? it.si : secOf[it.id]); }
  function counts(s) { var c = { c: 0, q: 0, core: 0 }; s.items.forEach(function (it) { if (it.t === 'c') c.c++; else { c.q++; if (it.core) c.core++; } }); return c; }
  function find(id) { for (var i = 0; i < seq.length; i++) { if (seq[i].id === id) return i; } return -1; }

  function buildSeq() {
    seq = [{ t: 'intro', id: 'start' }];
    S.forEach(function (s, si) {
      seq.push({ t: 'sec', id: 'sec-' + s.id, si: si });
      s.items.forEach(function (it) { if (coreOnly && isQ(it) && !it.core) return; seq.push(it); });
    });
  }

  /* ---------- renderers ---------- */
  function eyebrow(it) {
    var s = S[secOf[it.id]];
    var h = '<div class="eyebrow"><span class="id">' + it.id + '</span>';
    h += it.t === 'c' ? '<span class="chip kind">Concept</span>' : '<span class="chip">' + (it.t === 'tf' ? 'True / False' : it.t === 'open' ? 'Think and explain' : 'MCQ') + '</span>';
    if (it.src) h += '<span class="chip">' + it.src + '</span>';
    if (it.core) h += '<span class="chip core">core</span>';
    if (it.group) h += '<span class="chip grp">' + it.group + '</span>';
    return h + '<span class="sp"></span><span>' + s.short + '</span></div>';
  }
  function answerText(it) {
    if (it.t === 'q') {
      var A = [].concat(it.a);
      return 'เฉลย ' + A.map(function (i) { return LET[i]; }).join(' &amp; ') + ' &#183; ' + A.map(function (i) { return it.o[i]; }).join(' / ');
    }
    if (it.t === 'tf') return 'เฉลย: ' + (it.a ? 'True' : 'False');
    return 'แนวคำตอบ (Model Answer)';
  }
  function renderExplainBullets(it) {
    var bullets = THAI_Q[it.id];
    if (bullets && bullets.length) {
      return '<ul class="ex-list">' + bullets.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>';
    }
    return '<p>' + (it.ex || it.ans || '') + '</p>';
  }
  function renderQ(it) {
    var st = state[it.id] || {};
    var h = '<article class="card qcard rev" data-id="' + it.id + '">' + eyebrow(it) + '<div class="stem">' + it.q + '</div>';
    if (it.fig) h += '<div class="qfig">' + it.fig + '</div>';
    if (it.t === 'q') {
      var A = [].concat(it.a);
      h += '<ol class="opts">' + it.o.map(function (o, i) {
        return '<li><button type="button" class="opt' + (A.indexOf(i) >= 0 ? ' isans' : '') + (st.sel === i ? ' sel' : '') + '" data-v="' + i + '"><span class="L">' + LET[i] + '</span><span class="ot">' + o + '</span><span class="mk" aria-hidden="true"></span></button></li>';
      }).join('') + '</ol>';
    } else if (it.t === 'tf') {
      h += '<div class="tfrow">' + [true, false].map(function (v) {
        return '<button type="button" class="opt' + (it.a === v ? ' isans' : '') + (st.sel === v ? ' sel' : '') + '" data-v="' + v + '"><span class="L">' + (v ? 'T' : 'F') + '</span><span class="ot">' + (v ? 'True' : 'False') + '</span><span class="mk" aria-hidden="true"></span></button>';
      }).join('') + '</div>';
    }
    h += '<div class="explain"><div class="ans">' + answerText(it) + '</div>' + renderExplainBullets(it) + (it.flag ? '<div class="flag"><b>Recall note:</b> ' + it.flag + '</div>' : '') + '</div>';
    h += sayBox(sayLine(it.id));
    return h + '</article>';
  }
  function notesHtml(it) {
    var n = window.TUTOR_NOTES && window.TUTOR_NOTES[it.id];
    if (!n) return '';
    var esc = function (x) { return String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
    return '<div class="tnotes"><div class="tn-head">โน้ตผู้สอน &#183; นอกเหนือจากสไลด์</div>' +
      (n.b && n.b.length ? '<ul>' + n.b.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : '') +
      (n.d && n.d.length ? '<pre class="tdiag">' + n.d.map(esc).join('\n') + '</pre>' : '') + '</div>';
  }
  function thxHtml(it) {
    var tx = window.THAI_EXPLAIN && window.THAI_EXPLAIN[it.id];
    if (!tx || !tx.length) return '';
    return '<details class="thx" open><summary><span class="thx-h">Explanation</span><span class="thx-s">ภาษาไทย &#183; ' + tx.length + ' ข้อ</span></summary><ul class="thx-body">' + tx.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></details>';
  }
  function renderC(it) {
    var kp = THAI_CONCEPT[it.id];
    var kpHtml = kp && kp.length ? '<div class="tpoints"><div class="tp-head">สรุปประเด็นสำคัญ (Key Points)</div><ul>' + kp.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul></div>' : '';
    return '<article class="card concept" data-id="' + it.id + '">' + eyebrow(it) + '<h2>' + it.title + '</h2>' + kpHtml + sayBox(sayLine(it.id)) + notesHtml(it) + thxHtml(it) + '<div class="cbody">' + it.html + '</div></article>';
  }
  function renderSec(si) {
    var s = S[si], c = counts(s), ts = THAI_SEC[s.id] || {}, sc = SCRIPT.sec[s.id] || {};
    var u80 = sc.u && sc.u.length ? '<details class="u80"><summary>Understand it: the 80% <span>English summary &#183; ' + sc.u.length + ' points</span></summary><ol>' + sc.u.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol></details>' : '';
    var toc = s.items.filter(function (it) { return it.t === 'c'; }).map(function (it) { return '<li><span class="tid">' + it.id + '</span>' + it.title + '</li>'; }).join('');
    var trapsHtml = ts.traps && ts.traps.length ? '<div class="traps-box"><div class="tp-head">จุดหลอกข้อสอบที่พบบ่อย (Exam Traps)</div><ul>' + ts.traps.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>' : '';
    return '<article class="card secard"><div class="eyebrow"><span class="chip kind">' + s.kind + '</span><span class="id">Section ' + s.id + '</span><span class="chip">' + (si + 1) + ' of ' + S.length + '</span>' + (sc.part ? '<span class="chip core">' + sc.part + ' &#183; ' + sc.time + '</span>' : '') + '</div>' +
      '<h2>' + s.title + '</h2><p class="lede">' + (ts.big || s.blurb) + '</p>' + sayBox(sc.open, 'เปิด Section &#183; SAY') +
      '<div class="stats"><span><b>' + c.c + '</b>concept cards</span><span><b>' + c.q + '</b>questions</span><span><b>' + c.core + '</b>core, for the video</span></div>' +
      trapsHtml + u80 +
      '<h3 class="minih">Concept cards in this section</h3><ol class="toc">' + toc + '</ol></article>';
  }
  function planTable() {
    var bySec = {}; S.forEach(function (s) { bySec[s.id] = s; });
    var rows = (SCRIPT.plan || []).map(function (p) {
      var core = 0, names = [];
      p[1].forEach(function (id) { if (bySec[id]) { core += counts(bySec[id]).core; names.push('<b>' + id + '</b> ' + bySec[id].short); } });
      return '<tr><td>' + p[0] + '</td><td>' + names.join('<br>') + '</td><td class="num">' + core + '</td><td>' + p[2] + '</td><td class="num">' + p[3] + '</td></tr>';
    }).join('');
    return rows ? '<h3 class="minih">แผนการอัดวิดีโอ &#183; Recording plan</h3><div class="tblwrap"><table class="tbl compact plan"><thead><tr><th>Video</th><th>Sections</th><th>Core Qs</th><th>Covers</th><th>Length</th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '';
  }
  function renderIntro() {
    var tot = 0, core = 0;
    S.forEach(function (s) { var c = counts(s); tot += c.q; core += c.core; });
    var st = S.map(function (s, si) {
      var c = counts(s);
      return '<button type="button" class="station" data-sec="' + si + '"><span class="k">' + s.id + ' &#183; ' + s.kind + '</span><b>' + s.short + '</b><span>' + c.q + ' questions &#183; ' + c.core + ' core</span></button>';
    }).join('');
    return '<article class="card secard"><div class="eyebrow"><span class="chip kind">Peer support 82</span><span class="chip">All Answers Revealed &#183; คำอธิบายภาษาไทย</span></div>' +
      '<h2>CVS I Regulation &amp; Lab &#183; หน้าสำหรับผู้สอน (Tutor View)</h2>' +
      '<p class="lede">หน้าตาและลำดับการ์ดตรงกับ Student Deck ทุกข้อ (' + tot + ' คำถาม, ' + core + ' ข้อหลักสำหรับอัดวิดีโอ และ 54 Concept Cards) โดยเปิดเฉลยคำตอบและช่องว่าง Cloze ทั้งหมดไว้ล่วงหน้า พร้อมคำอธิบายแบบกระชับเป็น Bullet ภาษาไทย (คงศัพท์การแพทย์ภาษาอังกฤษ)</p>' +
      '<div class="stations">' + st + '</div>' + planTable() +
      '<div class="traps-box"><div class="tp-head">วิธีใช้งานคู่กับหน้า Student Deck</div><ul>' +
      '<li>เปิด <b>Student Deck</b> ในหน้าจอที่ใช้อัดวิดีโอ และเปิดหน้า <b>Tutor Deck</b> นี้ไว้ดูโพยคำอธิบายควบคู่กัน (รหัสการ์ด เช่น <code>R12</code>, <code>F-C2</code>, <code>D-C3</code> ตรงกันทั้งหมด)</li>' +
      '<li>เปิด Student Deck กับหน้านี้ใน<b>เบราว์เซอร์เดียวกัน</b> (คนละแท็บหรือคนละหน้าต่าง) แล้วเปิด <b>Follow student</b> ไว้ เมื่อเลื่อนการ์ดในหน้า Student หน้านี้จะเลื่อนตามไปการ์ดเดียวกันเอง</li>' +
      '<li>กล่อง <b>SAY</b> คือประโยคภาษาอังกฤษสั้นๆ สำหรับพูดตอนอัด ส่วน bullet ภาษาไทยไว้อ่านทำความเข้าใจก่อนพูด</li>' +
      '<li>กดปุ่ม <kbd>&#8592;</kbd> <kbd>&#8594;</kbd> หรือ <kbd>Space</kbd> เพื่อเลื่อนการ์ดทีละข้อในโหมด <b>Present</b> หรือกด <kbd>B</kbd> เพื่อดูรายการทั้งหมดแบบ <b>Browse</b></li>' +
      '<li>ติ๊ก <b>Core only</b> เพื่อกรองเฉพาะข้อหลัก (' + core + ' ข้อ) ที่คัดมาสำหรับอัดวิดีโอสรุป</li>' +
      '</ul></div></article>';
  }

  /* ---------- figure zoom ---------- */
  var zoom = document.createElement('div');
  zoom.className = 'zoom'; zoom.hidden = true;
  zoom.setAttribute('role', 'dialog'); zoom.setAttribute('aria-label', 'Enlarged figure (click or press Esc to close)');
  zoom.innerHTML = '<div class="zbox"><div class="zpaper"><img alt=""></div><p class="zcap"></p></div>';
  document.body.appendChild(zoom);
  function openZoom(im) {
    var fig = im.closest('figure'), cap = fig ? fig.querySelector('figcaption') : null, zi = zoom.querySelector('img');
    zi.src = im.currentSrc || im.src; zi.alt = im.alt || '';
    zoom.querySelector('.zcap').innerHTML = cap ? cap.innerHTML : '';
    zoom.hidden = false;
  }
  function closeZoom() { zoom.hidden = true; }
  zoom.addEventListener('click', closeZoom);

  /* ---------- present mode ---------- */
  function setTabs(si) {
    var tabs = $('tabs').children;
    for (var i = 0; i < tabs.length; i++) tabs[i].setAttribute('aria-current', i === si ? 'true' : 'false');
  }
  function setHash(id) { try { if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id); } catch (e) { } }
  function renderStage() {
    var it = seq[idx];
    $('stage').innerHTML = it.t === 'intro' ? renderIntro() : it.t === 'sec' ? renderSec(it.si) : it.t === 'c' ? renderC(it) : renderQ(it);
    var si = secIndex(it);
    setTabs(si);
    if (si < 0) { $('pos').innerHTML = 'Start'; }
    else {
      var n = 0, k = 0;
      for (var i = 0; i < seq.length; i++) { if (secIndex(seq[i]) === si && seq[i].t !== 'sec') { n++; if (seq[i] === it) k = n; } }
      $('pos').innerHTML = S[si].short + ' &#183; ' + (it.t === 'sec' ? 'intro' : k + ' / ' + n) + (it.t === 'sec' ? '' : ' &#183; <span>' + it.id + '</span>');
    }
    $('progBar').style.width = (100 * idx / (seq.length - 1)) + '%';
    $('prev').disabled = idx === 0;
    $('next').disabled = idx === seq.length - 1;
    setHash(it.id);
    LS.set('pos', it.id);
  }
  function go(d) {
    var n = Math.max(0, Math.min(seq.length - 1, idx + d));
    if (n === idx) return;
    idx = n; renderStage();
    try { window.scrollTo(0, 0); } catch (e) { }
  }
  function gotoSec(si) {
    if (view === 'present') { var k = find('sec-' + S[si].id); if (k >= 0) { idx = k; renderStage(); try { window.scrollTo(0, 0); } catch (e) { } } }
    else { var h = document.querySelector('#b-' + S[si].id + ' > header'); if (h) h.scrollIntoView({ block: 'start' }); setTabs(si); }
  }
  function selectOpt(it, v, card) {
    var st = state[it.id] = state[it.id] || {};
    st.sel = st.sel === v ? undefined : v;
    var opts = card.querySelectorAll('.opt');
    for (var i = 0; i < opts.length; i++) {
      var ov = opts[i].getAttribute('data-v');
      var match = st.sel !== undefined && (it.t === 'tf' ? (ov === 'true') === st.sel : parseInt(ov, 10) === st.sel);
      opts[i].classList.toggle('sel', match);
    }
  }
  function jumpTo(id) {
    if (!id) return false;
    var k = find(id);
    if (k < 0 && byId[id]) { coreOnly = false; $('coreOnly').checked = false; LS.set('core', false); buildSeq(); k = find(id); }
    if (k < 0) return false;
    idx = k;
    if (view !== 'present') setView('present'); else renderStage();
    return true;
  }

  /* ---------- browse mode ---------- */
  function renderBrowse() {
    var h = '';
    S.forEach(function (s) {
      h += '<section class="bsec" id="b-' + s.id + '"><header><div class="eyebrow"><span class="chip kind">' + s.kind + '</span><span class="id">Section ' + s.id + '</span></div><h2>' + s.title + '</h2><p>' + ((THAI_SEC[s.id] && THAI_SEC[s.id].big) || s.blurb) + '</p></header>';
      s.items.forEach(function (it) { if (coreOnly && isQ(it) && !it.core) return; h += it.t === 'c' ? renderC(it) : renderQ(it); });
      h += '</section>';
    });
    $('blist').innerHTML = h;
    applySearch();
  }
  function applySearch() {
    var q = ($('q').value || '').trim().toLowerCase(), n = 0, tot = 0;
    var cards = $('blist').querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
      tot++;
      var show = !q || cards[i].textContent.toLowerCase().indexOf(q) >= 0;
      cards[i].hidden = !show;
      if (show) n++;
    }
    $('bcount').textContent = q ? n + ' / ' + tot + ' การ์ด' : tot + ' การ์ด';
  }
  function setView(v) {
    view = v; LS.set('view', v);
    $('present').hidden = v !== 'present';
    $('browse').hidden = v !== 'browse';
    $('vPresent').setAttribute('aria-pressed', v === 'present' ? 'true' : 'false');
    $('vBrowse').setAttribute('aria-pressed', v === 'browse' ? 'true' : 'false');
    if (v === 'browse') {
      renderBrowse();
      var it = seq[idx], si = secIndex(it), el = null;
      if (it.t === 'c' || isQ(it)) el = document.querySelector('#blist [data-id="' + it.id + '"]');
      if (!el && si >= 0) el = document.querySelector('#b-' + S[si].id + ' > header');
      if (el) el.scrollIntoView({ block: 'start' });
      setTabs(Math.max(si, 0));
    } else {
      renderStage();
    }
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target : null;
    var im = t ? t.closest('.scan img') : null;
    if (im) { openZoom(im); return; }
    var b = t ? t.closest('button') : null;
    if (!b) return;
    if (b.classList.contains('opt')) {
      var card = b.closest('.qcard'); if (!card) return;
      var it = byId[card.getAttribute('data-id')];
      var raw = b.getAttribute('data-v');
      selectOpt(it, it.t === 'tf' ? raw === 'true' : parseInt(raw, 10), card);
      return;
    }
    if (b.classList.contains('station') || b.classList.contains('tab')) { gotoSec(parseInt(b.getAttribute('data-sec'), 10)); return; }
  });
  $('prev').addEventListener('click', function () { go(-1); });
  $('next').addEventListener('click', function () { go(1); });
  $('vPresent').addEventListener('click', function () { setView('present'); });
  $('vBrowse').addEventListener('click', function () { setView('browse'); });
  $('coreOnly').addEventListener('change', function () {
    var cur = seq[idx];
    coreOnly = this.checked; LS.set('core', coreOnly); buildSeq();
    var k = find(cur.id);
    if (k < 0) { var si = secIndex(cur); k = find('sec-' + S[Math.max(si, 0)].id); }
    idx = Math.max(0, k);
    if (view === 'present') renderStage(); else renderBrowse();
  });
  $('q').addEventListener('input', applySearch);
  $('themeBtn').addEventListener('click', function () {
    var root = document.documentElement, t = root.getAttribute('data-theme');
    var dark = t ? t === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next); LS.set('theme', next);
  });
  $('fsBtn').addEventListener('click', function () {
    try {
      if (document.fullscreenElement) { document.exitFullscreen(); }
      else if (document.documentElement.requestFullscreen) { var p = document.documentElement.requestFullscreen(); if (p && p.catch) p.catch(function () { }); }
    } catch (err) { }
  });
  document.addEventListener('keydown', function (e) {
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (!zoom.hidden) { if (k === 'Escape' || k === ' ' || k === 'Enter') { e.preventDefault(); closeZoom(); } return; }
    if (view !== 'present') { if (k === 'b' || k === 'B') setView('present'); return; }
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter') { go(1); e.preventDefault(); return; }
    if (k === 'ArrowLeft' || k === 'PageUp') { go(-1); e.preventDefault(); return; }
    if (k === 'b' || k === 'B') { setView('browse'); return; }
  });
  var tx = null;
  document.addEventListener('touchstart', function (e) {
    if (view !== 'present' || e.touches.length !== 1) { tx = null; return; }
    var t = e.target; if (t && t.closest && t.closest('.tblwrap, .tabs')) { tx = null; return; }
    tx = [e.touches[0].clientX, e.touches[0].clientY];
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    if (!tx) return;
    var dx = e.changedTouches[0].clientX - tx[0], dy = e.changedTouches[0].clientY - tx[1];
    if (Math.abs(dx) > 70 && Math.abs(dx) > 2 * Math.abs(dy)) go(dx < 0 ? 1 : -1);
    tx = null;
  }, { passive: true });
  window.addEventListener('hashchange', function () { jumpTo(location.hash.slice(1)); });

  /* ---------- follow the student deck (same browser, another tab or window) ---------- */
  var follow = LS.get('follow', true);
  function readDeckPos() { try { var v = localStorage.getItem('cvsdeck:pos'); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function followTo(id) {
    if (!follow || !id || (view === 'present' && seq[idx] && seq[idx].id === id)) return;
    if (view === 'browse') { var el = document.querySelector('#blist [data-id="' + id + '"]'); if (el) { el.scrollIntoView({ block: 'start' }); return; } }
    if (jumpTo(id)) { try { window.scrollTo(0, 0); } catch (e) { } }
  }
  window.addEventListener('storage', function (e) { if (e.key === 'cvsdeck:pos' && e.newValue) { try { followTo(JSON.parse(e.newValue)); } catch (err) { } } });
  try { var bc = new BroadcastChannel('cvs-peer-82'); bc.onmessage = function (e) { if (e.data && e.data.pos) followTo(e.data.pos); }; } catch (e) { }
  $('follow').checked = follow;
  $('follow').addEventListener('change', function () { follow = this.checked; LS.set('follow', follow); if (follow) followTo(readDeckPos()); });

  /* ---------- start ---------- */
  $('tabs').innerHTML = S.map(function (s, si) { return '<button type="button" class="tab" data-sec="' + si + '"><span class="k">' + s.id + '</span>' + s.short + '</button>'; }).join('');
  var th = LS.get('theme', null); if (th === 'dark' || th === 'light') document.documentElement.setAttribute('data-theme', th);

  function start(data) {
    data = data || {};
    if (data.state) state = data.state;
    coreOnly = typeof data.coreOnly === 'boolean' ? data.coreOnly : !!LS.get('core', false);
    $('coreOnly').checked = coreOnly;
    buildSeq();
    var want = location.hash ? location.hash.slice(1) : (data.pos || (follow && readDeckPos()) || LS.get('pos', 'start'));
    var k = find(want); idx = k >= 0 ? k : 0;
    setView(data.view || LS.get('view', 'present'));
  }
  var hot = window.claude && window.claude.hot;
  if (hot && typeof hot.snapshot === 'function') {
    try { hot.snapshot(function () { return { state: state, view: view, coreOnly: coreOnly, pos: seq[idx] && seq[idx].id }; }); } catch (e) { }
  }
  if (hot && typeof hot.ready === 'function') hot.ready(start); else start((hot && hot.data) || {});
})();
