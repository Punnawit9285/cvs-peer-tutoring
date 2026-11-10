/* Thai explanation of every concept card, shared by the student deck and the tutor deck.
   One array of paragraphs per concept-card ID. Each paragraph opens with a bold lead.
   Faithful to the English card: it explains the same content, it does not add new exam facts. */
window.THAI_EXPLAIN = {
  /* ---------------- R · Regulation ---------------- */
  "R-C1": [
    "<b>สมการตั้งต้น</b> ความดันเลือดแดงเฉลี่ย (MAP) เท่ากับปริมาณเลือดที่หัวใจบีบออกต่อนาที (CO) คูณแรงต้านของหลอดเลือดทั้งระบบ (TPR) และ CO = HR × SV ดังนั้นอะไรก็ตามที่เปลี่ยน BP ต้องไปเปลี่ยนตัวใดตัวหนึ่งในสมการนี้",
    "<b>Heart rate</b> ถูกกำหนดโดยอัตราการยิงสัญญาณของ SA node: sympathetic ผ่าน β₁ เร่งให้เร็วขึ้น ส่วน vagus ผ่าน M2 ทำให้ช้าลง",
    "<b>Stroke volume</b> ขึ้นกับสามอย่าง คือ preload (EDV ซึ่งมาจาก venous return ตามกลไก Frank–Starling: ยิ่งเติมเลือดมาก ยิ่งบีบออกมาก), contractility (แรงบีบของกล้ามเนื้อหัวใจเอง) และ afterload (แรงต้านที่หัวใจต้องบีบสู้)",
    "<b>TPR</b> ถูกกำหนดที่ arterioles เป็นหลัก เพราะแรงต้านแปรผกผันกับรัศมียกกำลังสี่ (R ∝ 1/r⁴) รัศมีเปลี่ยนนิดเดียวแรงต้านก็เปลี่ยนมาก arterioles จึงเป็นเป้าหมายหลักของยาลดความดัน",
    "<b>ตัวปรับ 5 ตัว</b> ทุกกลไกในบทนี้ออกฤทธิ์ผ่าน heart rate, contractility, venous tone (preload), arteriolar tone (TPR) หรือ blood volume (ไต) เวลาเจอโจทย์ ให้ถามว่า stimulus นี้ขยับตัวปรับตัวไหน แล้วจะรู้ว่า BP ไปทางไหน"
  ],
  "R-C2": [
    "<b>ระดับวินาที (ระบบประสาท)</b> baroreceptor reflex คุมอยู่ตลอดในช่วงความดันปกติ chemoreceptor reflex เข้ามาช่วยเมื่อ MAP ต่ำกว่า 80 mmHg และ CNS ischemic response เป็นด่านสุดท้ายเมื่อ MAP ต่ำกว่า 60 mmHg ทั้งหมดเร็วเพราะสั่งการผ่านเส้นประสาทโดยตรง",
    "<b>ระดับนาที–ชั่วโมง (ระยะกลาง)</b> renin–angiotensin ทำให้หลอดเลือดหดตัว (เต็มที่ในราว 20 นาที), stress relaxation ของหลอดเลือด (ผนังค่อยๆ ปรับตัวตามปริมาตรที่เปลี่ยน) และ capillary fluid shift (น้ำในช่องว่างระหว่างเซลล์ไหลเข้าหรือออกจากหลอดเลือดตามความดันใน capillary)",
    "<b>ระดับชั่วโมง–วัน (ระยะยาว โดยไต)</b> renal–body fluid control ผ่าน pressure natriuresis, aldosterone, ADH และความกระหาย ปรับปริมาตรเลือดของร่างกาย ระบบนี้มี infinite gain คือทำงานไปเรื่อยๆ จนความดันกลับมาเท่าค่าตั้งต้นพอดี",
    "<b>ทำไม baroreflex คุมระยะยาวไม่ได้</b> baroreceptor จะ reset ภายใน 1–2 วัน และถือว่าความดันใหม่เป็นค่าปกติ จึงเหมาะกับการเกลี่ยความดันที่แกว่งจากนาทีต่อนาที (เปลี่ยนท่า ออกแรง) ส่วนความดันระยะยาวถูกกำหนดโดยไต"
  ],
  "R-C3": [
    "<b>Vasoconstrictor area (C-1) ที่ RVLM</b> ยิงสัญญาณต่อเนื่องตลอดเวลา (ประมาณ 0.5–2 Hz) ไปยัง sympathetic neurons เกิดเป็น sympathetic vasoconstrictor tone ซึ่งเป็นแรงตึงพื้นฐานของหลอดเลือด และยังกระตุ้นหัวใจ (cardioaccelerator) ด้วย",
    "<b>Vasodilator area (A-1) ที่ caudal ventrolateral medulla</b> ไม่ได้สั่งหลอดเลือดให้ขยายโดยตรง แต่ทำงานโดยยับยั้ง C-1 ทำให้ sympathetic tone ลดลง",
    "<b>Sensory area (A-2) คือ NTS</b> เป็นสถานีรับข้อมูลจาก baroreceptor และ chemoreceptor ผ่าน CN IX และ X แล้วสั่งการศูนย์อื่นต่อ เช่น เมื่อ BP สูง NTS จะลด sympathetic และเพิ่ม vagus",
    "<b>Cardioinhibitory center</b> คือ dorsal motor nucleus of vagus และ nucleus ambiguus ส่งสัญญาณผ่าน vagus ไปที่ SA และ AV node ทำให้ HR ช้าลงและการนำไฟฟ้าผ่าน AV node ช้าลง",
    "<b>Adrenal medulla</b> รับ sympathetic preganglionic fibers ผ่าน splanchnic nerves แล้วหลั่ง epinephrine (~80%) และ norepinephrine เข้ากระแสเลือด",
    "<b>ศูนย์ที่สูงกว่า</b> hypothalamus (defense reaction, การคุมอุณหภูมิ) และ cortex (เช่น เป็นลมจากอารมณ์หรือ vasovagal syncope) ปรับการทำงานของ medulla ได้"
  ],
  "R-C4": [
    "<b>ตัวรับและทางขาเข้า</b> baroreceptor เป็น stretch receptor ปลายประสาทแตกแขนง (spray-type) อยู่ระหว่างชั้น tunica media กับ adventitia ของ carotid sinus (ส่งผ่าน Hering’s nerve → CN IX) และ aortic arch (ผ่าน aortic nerve → CN X) ไปที่ NTS ใน medulla มันตอบสนองทั้งระดับความดันและความเร็วที่ความดันเปลี่ยน",
    "<b>เมื่อ BP สูง</b> ผนังหลอดเลือดถูกยืดมากขึ้น → baroreceptor ยิงมากขึ้น → NTS กระตุ้นศูนย์ vagus (HR ลด, AV conduction ช้าลง) และกด RVLM (sympathetic ลด) → HR และ contractility ลด, arteriole ขยาย (TPR ลด), หลอดเลือดดำขยาย (venous return ลด), catecholamines จาก adrenal และ renin ลด → BP กลับลงหาค่าปกติ",
    "<b>เมื่อ BP ตก</b> ทุกอย่างกลับทิศ: baroreceptor ยิงน้อยลง → sympathetic เพิ่ม vagus ลด → tachycardia, vasoconstriction และ venoconstriction",
    "<b>ช่วงทำงาน</b> carotid sinus ทำงานในช่วงประมาณ 60–180 mmHg และไวที่สุดใกล้ MAP ปกติ ส่วน aortic arch มี threshold สูงกว่า",
    "<b>วงจรตามสไลด์แล็บ</b> (1) sensory fibers จาก baroreceptor และ chemoreceptor ไป medulla (2) parasympathetic fibers ไปหัวใจ (3) sympathetic fibers ไปหัวใจ (4) sympathetic fibers ไป adrenal medulla",
    "<b>จุดหลอกข้อสอบ</b> carotid sinus = baroreceptor ส่วน carotid body = chemoreceptor ทั้งสองอยู่ตรงจุดแยกของ carotid เหมือนกัน ข้อสอบจึงชอบสลับกัน และในสุนัขที่ดมยาสลบ การกระตุ้น baroreceptor แรงๆ ทำให้หายใจช้าลงด้วย"
  ],
  "R-C5": [
    "<b>สามด่านตามระดับ MAP</b> baroreceptor reflex ทำงานที่ 60–180 mmHg (ไวที่สุดราว 100 mmHg), chemoreceptor reflex เด่นเมื่อ MAP ต่ำกว่า 80 mmHg และ CNS ischemic response เมื่อ MAP ต่ำกว่า 60 mmHg โดยแรงที่สุดที่ 15–20 mmHg",
    "<b>Peripheral chemoreceptor</b> คือ carotid bodies (CN IX ผ่าน Hering’s nerve) และ aortic bodies (CN X) รับรู้ PaO₂ เป็นหลัก รวมถึง PaCO₂ และ H⁺ ปกติมีเลือดไหลผ่านมากจึงไม่ขาด O₂ แต่เมื่อ MAP ต่ำกว่า ~80 mmHg เลือดที่ไปเลี้ยงลดลง เซลล์จึงขาด O₂ เองและยิงสัญญาณ → กระตุ้น vasomotor center ให้ BP สูงขึ้น และกระตุ้นการหายใจ",
    "<b>เส้นทาง</b> carotid/aortic body → CN IX/X → NTS → vasomotor และ respiratory centers → sympathetic (หัวใจ หลอดเลือด adrenal medulla) และ phrenic nerve (กะบังลม)",
    "<b>CNS ischemic response</b> เมื่อ MAP ต่ำกว่า 60 mmHg ตัว vasomotor center เองขาดเลือดและมี CO₂ คั่ง → sympathetic discharge รุนแรงมาก ความดันพุ่งได้ถึงราว 250 mmHg",
    "<b>Cushing reaction</b> ความดันในกะโหลก (ICP) สูงจนกดหลอดเลือดสมอง → เกิดกลไกเดียวกัน Cushing triad คือ hypertension, bradycardia และหายใจไม่สม่ำเสมอ",
    "<b>Central chemoreceptor</b> อยู่ใน medulla ตอบสนองต่อ CO₂/H⁺ ใน CSF และคุมการหายใจเป็นหลัก CO₂ กระตุ้น vasomotor center ได้ แต่ที่เนื้อเยื่อเฉพาะที่ CO₂ ทำให้หลอดเลือดขยาย (ชัดมากในสมอง)"
  ],
  "R-C6": [
    "<b>Norepinephrine / epinephrine ผ่าน α₁</b> ทำให้หลอดเลือดหด (epinephrine จะเด่นที่ α₁ เมื่อขนาดสูงเท่านั้น)",
    "<b>Angiotensin II</b> หด arteriole อย่างแรง ส่วน <b>ADH (vasopressin) ผ่าน V1</b> เป็นตัวหดหลอดเลือดที่แรงที่สุด และมีบทบาทเมื่อเสียเลือดรุนแรง",
    "<b>Endothelin-1</b> หลั่งจาก endothelium โดยเฉพาะเมื่อ endothelium ถูกทำลาย เพิ่ม tone ของหลอดเลือดแดงและ resistance vessels ตัวหดอื่นๆ ได้แก่ thromboxane A₂ (จากเกล็ดเลือด), serotonin (ส่วนใหญ่), PGF2α และ Ca²⁺",
    "<b>NO (EDRF)</b> หลั่งจาก endothelium เมื่อมี shear stress, ACh หรือ bradykinin ออกฤทธิ์ผ่าน cGMP ใน smooth muscle ทำให้หลอดเลือดขยาย และยังยับยั้งการเกาะกลุ่มของเกล็ดเลือด <b>Prostacyclin (PGI₂)</b> ก็ขยายหลอดเลือดและต้านเกล็ดเลือดเช่นกัน",
    "<b>Histamine และ bradykinin</b> histamine มาจาก mast cell เมื่อเนื้อเยื่อบาดเจ็บหรือแพ้ ทั้งสองตัวทำให้ arteriole ขยายและเพิ่ม capillary permeability จึงเกิดบวม",
    "<b>ตัวขยายอื่นๆ</b> ANP/BNP, epinephrine ขนาดต่ำผ่าน β₂ (กล้ามเนื้อลาย ตับ หลอดเลือดหัวใจ) และ metabolites ได้แก่ adenosine, CO₂, H⁺, K⁺, lactate, osmolality ที่สูงขึ้น และ O₂ ที่ลดลง"
  ],
  "R-C7": [
    "<b>Metabolic (vasodilator) theory</b> เนื้อเยื่อที่ทำงานหนักปล่อย adenosine, CO₂, H⁺, K⁺, lactate และ histamine ส่วนการขาด O₂ ทำให้ precapillary sphincter คลาย เลือดจึงไหลเพิ่มตามความต้องการ เกิดเป็น active hyperemia (ขณะออกกำลังกาย) และ reactive hyperemia (หลังปล่อยการกั้นเลือดซึ่ง metabolites คั่งไว้)",
    "<b>Myogenic theory</b> เมื่อความดันสูงขึ้น smooth muscle ของ arteriole ถูกยืด → stretch-activated channels เปิด → depolarize → Ca²⁺ ไหลเข้า → หดตัว flow จึงกลับมาใกล้ปกติ และ capillaries ได้รับการปกป้องจากความดันสูง",
    "<b>Autoregulation</b> คือการรักษา flow ให้เกือบคงที่แม้ความดันเลือดแดงจะเปลี่ยน (ประมาณ 70–175 mmHg) ทำได้ดีที่สุดที่ไต (myogenic ร่วมกับ tubuloglomerular feedback) รองลงมาคือสมองและหัวใจ",
    "<b>การปรับตัวระยะยาว</b> ถ้าความต้องการสูงหรือขาด O₂ เรื้อรัง → angiogenesis ผ่าน VEGF (มีหลอดเลือดมากขึ้น) ถ้าหลอดเลือดแดงอุดตันเรื้อรัง → collateral circulation",
    "<b>แยกให้ออก</b> autoregulation คือความดันเปลี่ยนแต่ flow คงที่ ส่วนเมื่อความต้องการเพิ่มแล้ว flow เพิ่มตาม นั่นคือ active hyperemia (metabolic control) ไม่ใช่ autoregulation"
  ],
  "R-C8": [
    "<b>ตัวกระตุ้นการหลั่ง renin</b> renal perfusion pressure ลดลง, NaCl ที่ macula densa ลดลง และ renal sympathetic เพิ่มขึ้น (ผ่าน β₁ บน JG cells)",
    "<b>ลำดับของ RAAS</b> renin จาก juxtaglomerular cells ตัด angiotensinogen (สร้างจากตับ) เป็น angiotensin I → ACE (ส่วนใหญ่ที่ endothelium ของปอด) เปลี่ยนเป็น angiotensin II ซึ่ง ACE ตัวเดียวกันนี้ก็สลาย bradykinin ด้วย",
    "<b>ฤทธิ์ของ angiotensin II</b> หด arteriole ทำให้ TPR เพิ่ม (ระดับนาที), กระตุ้น aldosterone ให้เก็บ Na⁺ และน้ำ (ระดับชั่วโมง–วัน), เพิ่มการดูดกลับ Na⁺ ที่ proximal tubule โดยตรง และกระตุ้น ADH กับความกระหาย",
    "<b>Pressure natriuresis</b> เมื่อ BP สูง ไตขับ Na⁺ และน้ำมากขึ้น ปริมาตรและ BP จึงลดลง วงจรนี้มี infinite gain จึงเป็นตัวกำหนด BP ระยะยาว",
    "<b>CKD และ heart failure</b> ใน CKD nephron น้อยลง GFR ลด ไตขับเกลือและน้ำไม่ได้ → volume-loading hypertension ใน heart failure CO ลด ไตได้เลือดน้อย → renin, Ang II, aldosterone (รวมทั้ง sympathetic และ ADH) เพิ่ม → คั่งเกลือและน้ำ บวม แม้ ANP จะสูงในภาวะนี้ก็สู้ไม่ได้",
    "<b>ADH</b> หลั่งจาก plasma osmolality ที่สูงเป็นหลัก และเมื่อเสียปริมาตรหรือความดันมาก V2 ทำให้ดูดกลับน้ำ (aquaporin-2) ส่วน V1 ทำให้หลอดเลือดหด",
    "<b>ACE inhibitor (enalapril)</b> ลด Ang II จึงลด aldosterone และ vasoconstriction แต่ bradykinin คั่งเพราะไม่ถูกสลาย ทำให้ไอแห้ง"
  ],
  "R-C9": [
    "<b>Action potential ของ SA node</b> phase 4 คือ slow diastolic depolarization จาก funny current (I<sub>f</sub>) ที่ค่อยๆ ไต่ขึ้นจนถึง threshold แล้ว phase 0 เป็น upstroke จาก Ca²⁺ ยิ่ง phase 4 ชัน ยิ่งถึง threshold เร็ว HR ก็ยิ่งเร็ว",
    "<b>Sympathetic (NE → β₁ → Gs → cAMP)</b> เพิ่ม I<sub>f</sub> และ I<sub>Ca-L</sub> → phase 4 ชันขึ้น → HR เพิ่ม; AV conduction เร็วขึ้น (PR สั้นลง); Ca²⁺ ไหลเข้าและปล่อยจาก SR มากขึ้น → แรงบีบเพิ่ม; phospholamban ถูก phosphorylate → คลายตัวเร็วขึ้น",
    "<b>Vagus (ACh → M2 → Gi)</b> เปิด K⁺ channel (I<sub>K-ACh</sub>) ให้ K⁺ ออก → membrane hyperpolarized ร่วมกับลด I<sub>f</sub> และ I<sub>Ca</sub> → phase 4 แบนลง → HR ลด; AV conduction ช้าลง และถ้ากระตุ้นแรงอาจ block ได้; contractility ลดเล็กน้อย (ส่วนใหญ่ที่ atria)",
    "<b>ผลต่อปริมาตรเมื่อกระตุ้น sympathetic</b> EDV แทบไม่เปลี่ยน แต่ ESV ลด SV และ EF เพิ่ม เพราะหัวใจบีบแรงขึ้นจนเลือดเหลือค้างน้อยลง",
    "<b>α₁ agonist</b> หด arteriole ทำให้ TPR และ afterload เพิ่ม แต่ไม่ได้เปลี่ยน contractility โดยตรง"
  ],
  "R-C10": [
    "<b>ไม่มีเส้นประสาทมาเลี้ยง</b> หัวใจที่ปลูกถ่ายไม่มีทั้ง sympathetic และ vagus resting HR จึงเท่ากับ intrinsic rate ของ SA node (~90–110 bpm) ซึ่งสูงกว่าคนปกติ เพราะไม่มี vagal tone คอยกดไว้",
    "<b>ขณะออกกำลังกาย HR ยังเพิ่มได้</b> แต่เพิ่มช้าและน้อยกว่าปกติ (blunted) เพราะต้องรอ catecholamines ที่หลั่งจาก adrenal medulla มาตามกระแสเลือด",
    "<b>SV ยังเพิ่มได้</b> ผ่าน Frank–Starling (muscle pump ส่งเลือดกลับมากขึ้น EDV เพิ่ม) และ afterload ที่ลดลง (หลอดเลือดในกล้ามเนื้อขยาย) EF จึงยังเพิ่มและ ESV ยังลดได้",
    "<b>ยา</b> β-agonist ที่ออกฤทธิ์ตรงที่หัวใจยังได้ผล แต่ atropine ไม่มีผล เพราะไม่มี vagal tone ให้ block"
  ],
  "R-C11": [
    "<b>ผลโดยตรง</b> ปริมาตรเลือดลด → venous return ลด → EDV, SV และ CO ลด → BP ตก อาการคือความดันต่ำ ชีพจรเบา (thready), pulse pressure แคบ และ CVP ต่ำ",
    "<b>ระดับวินาที</b> baroreceptor ยิงน้อยลง → สัญญาณผ่าน CN IX/X ไป NTS ลดลง → vasomotor center ถูกปลดการยับยั้ง → sympathetic เพิ่ม vagus ลด chemoreceptor เข้าร่วมเมื่อ MAP ต่ำกว่า 80 และ CNS ischemic response เมื่อต่ำกว่า 60 อาการที่เห็นคือ tachycardia (phase 4 ชันขึ้น), contractility เพิ่ม, SVR เพิ่ม, venoconstriction, ผิวเย็นซีด, capillary refill ช้า และหายใจเร็ว",
    "<b>ระดับนาที–ชั่วโมง</b> Ang II หดหลอดเลือด; capillary fluid shift คือความดันใน capillary ลด น้ำจาก interstitium จึงไหลเข้าหลอดเลือด เลือดเจือจางลง Hct ลดเล็กน้อยใน 15–30 นาที; และ reverse stress relaxation คือหลอดเลือดหดกระชับรอบปริมาตรที่น้อยลง",
    "<b>ระดับชั่วโมง–วัน</b> aldosterone, ADH และความกระหาย ทำให้ไตเก็บเกลือและน้ำ ผู้ป่วยกระหายน้ำและปัสสาวะน้อย (oliguria) ส่วน erythropoietin ค่อยๆ ฟื้นเม็ดเลือดแดงในหลายสัปดาห์",
    "<b>วิธีคิด</b> ไล่ตามเวลาเสมอ ถามว่าโจทย์อยู่ที่วินาที นาที–ชั่วโมง หรือวัน แล้วเลือกกลไกที่เด่นในช่วงนั้น"
  ],

  /* ---------------- F · Frog heart ---------------- */
  "F-C1": [
    "<b>วิธีอ่านกราฟในแล็บนี้</b> เส้นขาลง (A) = diastole และเส้นขาขึ้น (B) = systole ส่วนฐานราบด้านล่างคือ ventricle ที่คลายตัวและเติมเลือดเต็มแล้ว (Fig 9-2 ระบุ early systole ที่ฐานของขาขึ้น และ early diastole ที่ยอด) อ่านทุกกราฟในแล็บนี้แบบเดียวกัน",
    "<b>Exp 1 สังเกตการเต้น</b> อัตรา 56 ครั้งต่อนาที ช่วง systole หัวใจดูซีดเพราะบีบเลือดออก ช่วง diastole ดูเข้มขึ้นเพราะเลือดเติมกลับ ลำดับการเต้นคือ sinus venosus → atria → ventricle",
    "<b>Exp 2 extrasystole</b> ช็อตไฟฟ้าที่ ventricle ในจังหวะต่างๆ ของการเต้น ดูว่าจังหวะไหนเกิด beat แทรก",
    "<b>Exp 3 Stannius ligatures</b> ผูกที่รอยต่อ sinus venosus กับ atria (crescentic line) ก่อน แล้วผูกที่รอยต่อ atria กับ ventricle",
    "<b>Exp 4 all-or-none</b> กระตุ้น ventricle ที่หยุดเต้นด้วยกระแสที่เพิ่มขึ้นเรื่อยๆ",
    "<b>ทำไมผูกได้โดยไม่ขาดเลือด</b> หัวใจกบและเต่าไม่มี coronary circulation การผูกจึงไม่ทำให้เกิด ischemia"
  ],
  "F-C2": [
    "<b>เซลล์สามชนิด</b> pacemaker cells (SA node, AV node) สร้างสัญญาณได้เอง (automaticity); conducting cells (internodal pathways, bundle of His, bundle branches, Purkinje) ส่งสัญญาณ; contractile cells (กล้ามเนื้อ atria และ ventricle) เชื่อมกันด้วย intercalated discs ที่มี gap junctions จึงทำงานเป็น functional syncytium กระตุ้นจุดเดียวแล้วไฟฟ้าลามไปทั้งก้อน",
    "<b>Fast response AP</b> (กล้ามเนื้อ atria/ventricle และ Purkinje) resting ใกล้ −90 mV; phase 0 คือ Na⁺ ไหลเข้าอย่างรวดเร็ว; phase 2 เป็น plateau ที่ K⁺ ไหลออกสมดุลกับ Ca²⁺ ไหลเข้า",
    "<b>Slow response AP</b> (SA และ AV node) ไม่มี resting potential ที่คงที่ phase 4 ค่อยๆ ไต่ขึ้นด้วย funny current และ phase 0 อาศัย Ca²⁺",
    "<b>เส้นทางการนำไฟฟ้า</b> SA node → internodal/interatrial pathway → AV node → bundle of His → right และ left bundle branches → Purkinje fibers → ventricles",
    "<b>ความเร็วการนำ</b> ขึ้นกับความชันของ phase 0 เร็วที่สุดคือ His–Purkinje ช้าที่สุดคือ AV node (และ SA node) ค่าตามสไลด์แล็บ: SA node 0.05 m/s, atrial muscle 1.0, AV node 0.1 m/s (หน่วงไว้ 0.1 s), bundle branches/Purkinje 2.0/1.0 (ตำราว่า Purkinje 2–4) และ ventricular muscle 0.4 m/s",
    "<b>ทำไม SA node เป็น primary pacemaker</b> เพราะยิงเร็วที่สุด (70–80 ครั้งต่อนาที = sinus rhythm) ไม่ใช่เพราะตำแหน่ง ถ้า SA node หยุด ตัวสำรองคือ AV node 40–60 ครั้งต่อนาที (nodal rhythm) และ ventricle 20–40 ครั้งต่อนาที (ventricular rhythm)"
  ],
  "F-C3": [
    "<b>Excitability</b> คือความสามารถของเซลล์ในการสร้าง action potential เมื่อได้รับกระแส depolarizing",
    "<b>Absolute refractory period (ARP)</b> ตั้งแต่ phase 0 ถึงกลาง phase 3 (ราว −50 mV) Na⁺ channels อยู่ในสภาพ inactivated กระตุ้นแรงแค่ไหนก็สร้าง AP ใหม่ไม่ได้",
    "<b>Relative refractory period (RRP)</b> สร้าง AP ได้แล้ว แต่ต้องใช้กระแสมากกว่าปกติ ต่อด้วย supranormal period (SNP) สั้นๆ",
    "<b>เทียบกับการหดตัว</b> ARP ยาวเกือบเท่าช่วงที่กล้ามเนื้อหดตัว กว่าจะกระตุ้นใหม่ได้ กล้ามเนื้อก็เกือบคลายตัวแล้ว การหดตัวครั้งที่สองจึงซ้อนกับครั้งแรกไม่ได้ ไม่เกิด tetanus หัวใจจึงได้คลายตัวและเติมเลือดทุกรอบ"
  ],
  "F-C4": [
    "<b>การทดลอง</b> ช็อต ventricle ใน 6 จังหวะตาม Fig 9-2: (1) early systole (2) late systole (3) mid systole (4) late diastole (5) early diastole (6) mid diastole",
    "<b>ช็อตช่วง systole (1, 2, 3)</b> ไม่เกิด extrasystole ไม่ว่าแรงแค่ไหน เพราะตกอยู่ใน ARP ของ myocyte",
    "<b>ช็อตช่วง diastole (4, 5, 6)</b> เกิด extrasystole ตามด้วย compensatory pause",
    "<b>ทำไมมี compensatory pause</b> สัญญาณปกติรอบถัดไปจาก sinus venosus มาถึง ventricle ตอนที่ยังอยู่ใน refractory period ของ extrasystole จึงสูญหายไป ventricle ต้องรอสัญญาณรอบถัดไปอีกรอบ อัตราโดยรวมจึงไม่เปลี่ยน บนกราฟเห็นเป็นเส้นราบยาวหลัง extra beat แต่ละครั้ง",
    "<b>ทำไมขนาดต่างกัน</b> เพราะ preload ต่างกัน ยิ่งช็อตช้าใน diastole เลือดยิ่งเติมมาก extrasystole ยิ่งใหญ่ และ beat แรกหลัง pause แรงที่สุด",
    "<b>ทางคลินิก</b> extrasystole พบได้ทั้งในโรคหัวใจ (เช่น myocardial infarction) และในคนปกติ (อดนอน สูบบุหรี่จัด เครียด คาเฟอีน)"
  ],
  "F-C5": [
    "<b>Ligature I ที่รอยต่อ sinus venosus กับ atria</b> ก่อนผูกทุกส่วนเต้น 60 ทันทีหลังผูก sinus venosus ยังเต้น 60 แต่ atria และ ventricle หยุด (0) เพราะสัญญาณข้ามจุดผูกไม่ได้ ต่อมา atria และ ventricle กลับมาเต้นเองที่ 32",
    "<b>ทำไมหยุดก่อนแล้วค่อยเต้น</b> latent pacemaker ที่อยู่ใต้จุด block ถูก pacemaker ที่เร็วกว่ากดไว้ตลอด (overdrive suppression) เมื่อหลุดจากการกด ต้องใช้เวลาสักพักก่อนจะแสดง automaticity ของตัวเองในอัตราที่ช้ากว่า",
    "<b>Ligature II ที่รอยต่อ atria กับ ventricle</b> sinus venosus 60 และ atria 32 เท่าเดิม แต่ ventricle หยุด (0) และในการทดลองนี้ยังคงเป็น 0",
    "<b>หลักการ</b> ligature แต่ละเส้นคือ heart block สัญญาณข้ามไม่ได้ และ latent pacemaker ที่ยิงเร็วที่สุดจะเป็นผู้ชนะ",
    "<b>ในคน</b> ถ้า SA node เสีย AV node มักรับหน้าที่แทน (junctional rhythm 40–60 ครั้งต่อนาที, QRS แคบ) ถ้า block อยู่ต่ำกว่านั้น Purkinje fibers จะรับหน้าที่แทน (20–40 ครั้งต่อนาที)"
  ],
  "F-C6": [
    "<b>การทดลอง (Fig 9-3)</b> กระตุ้น ventricle ที่หยุดเต้นด้วยกระแสที่เพิ่มขึ้นทีละขั้น",
    "<b>ผล</b> ต่ำกว่า threshold ไม่หดตัว ถึง threshold หดตัวเต็มที่ทันที และ submaximal, maximal, supramaximal ได้การหดตัวขนาดเท่ากับที่ threshold",
    "<b>ทำไม</b> AP ของหัวใจเป็นแบบ all-or-none และกล้ามเนื้อหัวใจทั้งก้อนเป็น syncytium เมื่อเซลล์หนึ่งยิง ทั้งก้อนก็ยิงพร้อมกัน ช็อตแรงขึ้นจึงไม่ได้ beat ที่ใหญ่ขึ้น",
    "<b>Stimulus ที่เล็กที่สุดที่ได้ผล</b> คือกระแสที่ทำให้ membrane ถึง threshold potential พอดี",
    "<b>แรงบีบเปลี่ยนได้ทางอื่น</b> ผ่าน preload (Frank–Starling), contractility (catecholamines, Ca²⁺, digitalis), อุณหภูมิ, pH และ ions ไม่ใช่ผ่านความแรงของ stimulus"
  ],

  /* ---------------- T · Turtle vagus ---------------- */
  "T-C1": [
    "<b>Parasympathetic</b> เริ่มจาก dorsal motor nucleus of vagus / nucleus ambiguus → preganglionic fiber ยาวใน vagus → หลั่ง ACh จับ nicotinic receptor ที่ปมประสาทบนหัวใจ (ในเต่าคือที่ crescentic line) → postganglionic fiber สั้น → หลั่ง ACh จับ M2 ที่ SA node (ส่วนใหญ่จาก right vagus) และ AV node (ส่วนใหญ่จาก left vagus)",
    "<b>Sympathetic</b> เริ่มจาก RVLM (cardioaccelerator) → spinal cord T1–T4 → ไซแนปส์แบบ nicotinic ที่ cervical/stellate ganglia → postganglionic fiber ยาว → NE จับ β₁ ที่ SA node, AV node และ ventricles ส่วน adrenal medulla เสริมด้วย epinephrine ในกระแสเลือด",
    "<b>ผลต่อหัวใจ</b> sympathetic เพิ่ม rate (chronotropic), แรงบีบ (inotropic) และการนำไฟฟ้า (dromotropic) และทำให้ AP สั้นลง ส่วน parasympathetic ลด rate และการนำไฟฟ้าอย่างชัดเจน แต่ลดแรงบีบเพียงเล็กน้อย",
    "<b>Vagal tone</b> vagus ทำงานอยู่แม้ขณะพัก intrinsic rate ของ SA node ราว 100 ครั้งต่อนาที แต่ HR ขณะพักราว 70 เพราะ vagus กดไว้",
    "<b>การกระจายของเส้นใย</b> vagus ไปเลี้ยง atria และ nodes เป็นหลัก ส่วน ventricles ได้ sympathetic เป็นส่วนใหญ่",
    "<b>กลไกของ ACh</b> K⁺ ออกจากเซลล์มากขึ้น → membrane ติดลบมากขึ้น (hyperpolarized) และ phase 4 แบนลง → rate ช้าลง"
  ],
  "T-C2": [
    "<b>การทดลอง</b> กระตุ้นปลาย peripheral (ด้านหัวใจ) ของ vagus แต่ละข้างด้วยกระแสอ่อน ปานกลาง และแรง ก่อนกระตุ้น หลังผูก และหลังตัดเส้นประสาท หัวใจเต้น 60 แรงปกติ A:V 1:1 การตัดเส้นประสาทไม่เปลี่ยนอะไรในเต่า",
    "<b>Right vagus → SA node (chronotropic)</b> กระแสอ่อน rate และแรงบีบลดลงแต่ A:V ยัง 1:1 กระแสปานกลางขึ้นไปหัวใจหยุด (arrest) เพราะ right vagus ส่งเส้นใยไปที่ SA node เป็นหลัก จึงลดอัตราการสร้างสัญญาณของทั้งหัวใจ",
    "<b>Left vagus → AV node (dromotropic)</b> กระแสอ่อน rate และแรงลดลง และ A:V มากกว่า 1:1 (ventricle เต้นตกหล่น) กระแสปานกลางลดลงมากและ A:V ยังมากกว่า 1:1 คือ atria ยังเต้นเร็วกว่า ventricle = AV block กระแสแรงจึงหยุดทั้งหมด",
    "<b>ทำไมต่างกัน</b> vagus สองข้างส่งเส้นใยไปที่ SA node และ AV node ในจำนวนไม่เท่ากัน ในคนก็เป็นแบบเดียวกัน",
    "<b>หลังหยุดกระตุ้น</b> หัวใจฟื้นกลับมาเต้นได้เอง"
  ],
  "T-C3": [
    "<b>วงจร</b> กระตุ้น vagus trunk = กระตุ้น preganglionic fibers → ปมประสาทที่ crescentic line (ACh → nicotinic receptor) → postganglionic fiber → ACh → M2 ที่ SA/AV node → HR ลด หรือหยุดเต้น",
    "<b>ก่อนให้ยา</b> HR 46 ครั้งต่อนาที กระตุ้น vagus หรือ crescentic line ก็หยุดหัวใจได้ทั้งคู่ (HR 0)",
    "<b>Nicotine ขนาดต่ำ (HR 40)</b> กระตุ้น nicotinic receptor ที่ปมประสาท → ปล่อย ACh ที่ SA node มากขึ้น → หัวใจช้าลง",
    "<b>Nicotine ขนาดสูง (HR 50)</b> ทำให้ postganglionic neuron ถูก depolarize ค้าง Na⁺ channels จึง inactivated (depolarization block) ปมประสาทหยุดส่งต่อสัญญาณ → เสีย resting vagal tone หัวใจจึงเร็วขึ้นเล็กน้อย และกระตุ้น vagus 2–3 นาทีหลังให้ nicotine ก็ส่งผ่านไม่ได้แล้ว (HR ยัง 50)",
    "<b>แต่กระตุ้น crescentic line ยังหยุดหัวใจได้ (HR 0)</b> เพราะเป็นการกระตุ้น postganglionic neurons ที่อยู่ใต้จุด block โดยตรง จึงสรุปได้ว่าไซแนปส์อยู่ที่ crescentic line",
    "<b>เทียบกับ atropine</b> atropine block ที่ M2 ปลายทาง จึงกระตุ้นทั้ง vagus และ crescentic line ก็ทำให้หัวใจช้าลงไม่ได้"
  ],
  "T-C4": [
    "<b>การทดลอง</b> ขัน Gaskell’s clamp ที่รอยต่อ atria กับ ventricle ให้แน่นขึ้นทีละขั้น atria เต้น 60 ตลอดเพราะ pacemaker อยู่เหนือ clamp",
    "<b>ผล</b> หนีบเบา ventricle เต้นช้าลงและ A:V มากกว่า 1:1 หนีบปานกลาง ventricle ช้าลงอีก หนีบแน่น ventricle หยุด (0) clamp จึงสร้าง AV block ที่รุนแรงขึ้นตามแรงหนีบ",
    "<b>1st degree AV block</b> ทุกสัญญาณผ่านแต่ช้า PR มากกว่า 0.20 s และ A:V 1:1",
    "<b>2nd degree AV block</b> บางสัญญาณผ่านไม่ได้ QRS หายเป็นช่วง (2:1, 3:1) Mobitz I คือ PR ค่อยๆ ยาวขึ้นแล้ว beat หลุด ส่วน Mobitz II คือ beat หลุดทันทีโดยไม่มีสัญญาณเตือน",
    "<b>3rd degree (complete) AV block</b> ไม่มีสัญญาณผ่านเลย เกิด AV dissociation: atria เต้นตาม sinus rate ส่วน ventricle เต้นด้วย escape rhythm (junctional 40–60 QRS แคบ หรือ ventricular 20–40 QRS กว้าง) ผู้ป่วยอาจหมดสติ (syncope)",
    "<b>Block ในคนปกติและระดับของ block</b> vagal tone สูง (นักกีฬา ขณะหลับ) และยาเช่น β-blockers, calcium-channel blockers, digoxin ทำให้เกิด block ได้ ส่วนระดับของ block มี SA exit, intra-atrial, AV, bundle branch และ intraventricular"
  ],

  /* ---------------- B · Blood pressure ---------------- */
  "B-C1": [
    "<b>SBP</b> คือความดันสูงสุดขณะบีบเลือดออก ขึ้นกับ stroke volume และความแข็งของหลอดเลือดแดงเป็นหลัก",
    "<b>DBP</b> คือความดันต่ำสุดช่วงคลายตัว ขึ้นกับ peripheral resistance เป็นหลัก แรงต้านสูงทำให้เลือดไหลออกจากหลอดเลือดแดงช้า ความดันจึงค้างสูง",
    "<b>Pulse pressure = SBP − DBP</b> ในคนปกติสะท้อน stroke volume กว้างใน AR, หลอดเลือดแข็ง และขณะออกกำลังกาย แคบใน AS, tamponade และ hypovolemia",
    "<b>MAP ≈ DBP + ⅓(SBP − DBP)</b> ทำไมหนึ่งในสาม ขณะพักช่วง diastole ยาวประมาณสองเท่าของ systole ค่าเฉลี่ยตามเวลาจึงอยู่ใกล้ DBP โดยสูงขึ้นมาแค่หนึ่งในสามของ pulse pressure",
    "<b>วิธีวัดแบบ direct และ auscultatory</b> direct ใช้สายในหลอดเลือดแดงต่อ transducer ได้ SBP, DBP และ MAP ทุก beat ใช้ใน ICU ห้องผ่าตัด และแล็บสัตว์ แต่ invasive ส่วน auscultatory ใช้ sphygmomanometer กับ stethoscope ฟังเสียง Korotkoff ได้ SBP และ DBP เป็นวิธีอ้างอิงแบบ noninvasive",
    "<b>วิธี palpatory และ oscillometric</b> palpatory คลำ radial pulse ที่กลับมาขณะปล่อยลม ได้ SBP อย่างเดียว ใช้ประมาณก่อนฟัง ส่วน oscillometric เป็นเครื่องอัตโนมัติที่จับการสั่นของผนังหลอดเลือด จุดที่สั่นแรงที่สุดคือ MAP แล้วคำนวณ SBP และ DBP ออกมา วิธี indirect ทั้งหมดต่างจาก direct ได้ราว ±10 mmHg"
  ],
  "B-C2": [
    "<b>เตรียมผู้ถูกวัด</b> งดบุหรี่ คาเฟอีน อาหาร และการออกกำลังกาย 30 นาที ปัสสาวะก่อน พัก 5 นาทีในห้องเงียบ นั่งพิงหลัง เท้าวางราบ ไม่ไขว่ห้าง และไม่พูด เพราะสิ่งเหล่านี้ทำให้ BP สูงขึ้นชั่วคราว",
    "<b>แขนและ cuff</b> แขนเปลือย วางบนที่รองรับ หงายมือ cuff อยู่ระดับหัวใจ ขอบล่างของ cuff สูงกว่าข้อพับศอกราว 2.5 cm (1 นิ้ว) กึ่งกลาง bladder ทับ brachial artery และพันให้กระชับ ระดับ 0 ของปรอทอยู่ระดับหัวใจ และอ่าน meniscus ในระดับสายตา",
    "<b>ขนาด cuff</b> ความกว้างของ bladder ควรเป็นราว 40% ของรอบต้นแขน และความยาว 80–100% ของรอบต้นแขน ตารางในการ์ดมีตั้งแต่ newborn ถึง adult thigh",
    "<b>ขั้นที่ 1 คลำก่อน</b> คลำ radial pulse บีบลมจนชีพจรหาย แล้วบีบต่ออีก 20–30 mmHg ปล่อยลมราว 2 mmHg ต่อ beat ความดันที่ชีพจรกลับมาคือ palpatory SBP (DBP ประเมินจากการคลำไม่ได้)",
    "<b>ขั้นที่ 2 ฟัง</b> วาง bell หรือ diaphragm บน brachial artery ที่ข้อพับศอก (ไม่สอดไว้ใต้ cuff) บีบลมเร็วๆ ให้สูงกว่า palpatory SBP 20–30 mmHg แล้วปล่อยช้าๆ (ราว 1 mmHg ต่อวินาทีตามคู่มือ) เสียงเคาะแรก = SBP และเสียงหาย = DBP",
    "<b>ทำไมต้องคลำก่อน</b> เพื่อไม่ให้หลงกับ auscultatory gap ซึ่งเป็นช่วงเงียบใต้ SBP ในผู้ป่วยความดันสูงบางคน และเพื่อไม่ต้องบีบลมสูงเกินจำเป็น"
  ],
  "B-C3": [
    "<b>ที่มาของเสียง</b> เสียง Korotkoff เกิดจากเลือดไหลแบบ turbulent พุ่งเป็นลำผ่านหลอดเลือดแดงที่ถูกกดไว้บางส่วน เมื่อ cuff สูงกว่า SBP หลอดเลือดปิดสนิทจึงเงียบ เมื่อต่ำกว่า DBP เลือดไหลแบบ laminar ก็เงียบเช่นกัน",
    "<b>Phase I</b> เสียงเคาะชัดครั้งแรก = SBP ความดัน cuff เพิ่งต่ำกว่ายอดความดัน เลือดจึงพุ่งผ่านได้เป็นจังหวะ",
    "<b>Phase II และ III</b> phase II เป็นเสียงฟู่ที่เบาลง phase III กลับเป็นเสียงเคาะที่คมและดังขึ้น",
    "<b>Phase IV</b> เสียงอู้อี้ลงทันที ใช้เป็น DBP ในเด็ก หญิงตั้งครรภ์ ภาวะ high-output และ AR เพราะในกลุ่มนี้เสียงอาจดังต่อไปจนถึง 0",
    "<b>Phase V</b> เสียงหายไป = DBP ในผู้ใหญ่ หลอดเลือดเปิดตลอดรอบการเต้น เลือดกลับมาไหลราบเรียบ"
  ],
  "B-C4": [
    "<b>Cuff เล็กหรือหลวมเกินไป → สูงเกินจริง</b> bladder ที่แคบต้องใช้ความดันมากกว่าจะกดหลอดเลือดให้ปิด ส่วน cuff ที่หลวมจะพองออกจนทำตัวเหมือน bladder แคบลง",
    "<b>Cuff ใหญ่หรือแน่นเกินไป → ต่ำเกินจริง</b> พันแน่นเกินไปอ่านได้ต่ำ ตามเฉลยของรายวิชา",
    "<b>ระดับแขน</b> แขนต่ำกว่าระดับหัวใจอ่านได้สูงเกินจริงจาก hydrostatic pressure (ราว +0.8 mmHg ต่อ cm) แขนสูงกว่าหัวใจอ่านได้ต่ำเกินจริง",
    "<b>ปัจจัยอื่นที่ทำให้สูงเกินจริง</b> แขนไม่มีที่รองหรือกำมือ (กล้ามเนื้อเกร็ง), พูด, ปัสสาวะเต็ม, คาเฟอีน, บุหรี่, เพิ่งออกกำลังกาย, วิตกกังวลหรือ white-coat effect, หลังไม่พิง, ไขว่ห้าง และพัน cuff ทับแขนเสื้อ",
    "<b>ปัจจัยอื่นที่ทำให้ต่ำเกินจริง</b> ปล่อยลมเร็วเกินไป (พลาด SBP จึงอ่านต่ำ ส่วน DBP อาจอ่านสูง), พลาด auscultatory gap เพราะไม่ได้คลำก่อน และกด stethoscope แรงเกิน (เสียงดังต่อลงไป DBP จึงอ่านต่ำ)",
    "<b>ผิดได้ทั้งสองทิศ</b> ปรอทไม่อยู่ที่ 0, เครื่อง aneroid ไม่ได้ calibrate หรือปล่อย cuff ค้างสูงกว่า DBP นานเกินไป (เลือดดำคั่งและสาร mediators เฉพาะที่เปลี่ยนสภาพหลอดเลือด)"
  ],
  "B-C5": [
    "<b>การทดลอง</b> นอนราบ 5 นาที แล้ววัดที่แขนทั้งสองข้าง (brachial) และขาทั้งสองข้าง (popliteal โดยใช้ thigh cuff)",
    "<b>ปกติขาสูงกว่าแขน</b> ในท่านอน SBP ที่ขาสูงกว่าแขนราว 10–20 mmHg เพราะคลื่นความดันเดินทางเร็วกว่าตัวเลือดและสะท้อนกลับที่จุดแตกแขนง SBP และ pulse pressure จึงเพิ่มขึ้นเมื่อไกลจากหัวใจ ขณะที่ DBP และ MAP ลดลงเล็กน้อย เลือดจึงยังไหลจาก MAP สูงไปต่ำตามปกติ",
    "<b>คำถามที่พบบ่อย</b> ระหว่าง aorta, arteriole, femoral artery, central vein และ pulmonary artery ตัวที่มี systolic pressure สูงที่สุดคือ femoral artery",
    "<b>แขนสองข้างต่างกัน</b> ถ้าข้างหนึ่งสูงให้วัดอีกข้างเสมอ ต่างกันเกิน 10–15 mmHg ให้นึกถึง subclavian stenosis, aortic dissection, Takayasu arteritis หรือ coarctation",
    "<b>Coarctation of the aorta</b> BP ที่แขนสูง ที่ขาต่ำ femoral pulse เบาและมาช้า",
    "<b>Ankle–brachial index</b> = ankle SBP / arm SBP ปกติ 1.0–1.4 ถ้าต่ำกว่า 0.9 สงสัย peripheral arterial disease"
  ],
  "B-C6": [
    "<b>ลุกจากนอนเป็นยืน</b> เลือดราว 500–800 mL ไปค้างในหลอดเลือดดำที่ขา → venous return ลด → SV และ CO ลด → BP ที่ carotid sinus ตก",
    "<b>Baroreflex ตอบสนอง</b> baroreceptor ยิงน้อยลง → sympathetic เพิ่ม vagus ลด → HR เพิ่ม (+10–20), หลอดเลือดแดงหด (TPR เพิ่ม) และหลอดเลือดดำหด → BP กลับมาในไม่กี่วินาที",
    "<b>ค่าที่วัดได้ตอนยืน</b> HR เพิ่ม DBP เพิ่มเล็กน้อย SBP ลดเล็กน้อยหรือเท่าเดิม pulse pressure แคบลง และ CO ยังต่ำกว่าท่านอน 20–30% แม้จะมี reflex เพราะ reflex คืน venous return ได้ไม่หมด BP ที่กลับมาส่วนหนึ่งจึงมาจาก TPR ที่เพิ่ม",
    "<b>Orthostatic hypotension</b> คือ SBP ลด ≥ 20 หรือ DBP ลด ≥ 10 mmHg ภายใน 3 นาทีหลังลุกยืน",
    "<b>ยืนแล้วนอนลง</b> venous return เพิ่ม BP เพิ่ม baroreceptor ยิงมากขึ้น → HR ลด ในสุนัข BP ขึ้นก่อนแล้วค่อยลดกลับเมื่อ reflex ทำงาน",
    "<b>ขั้นตอนในแล็บ</b> นอน 5 นาที แล้วยืน วัดทันที ที่ 3 นาที และที่ 6 นาที"
  ],
  "B-C7": [
    "<b>ผลทันทีหลังออกกำลังกาย</b> HR และ SBP เพิ่มมาก DBP เท่าเดิมหรือลดเล็กน้อย pulse pressure จึงกว้างขึ้น ที่ 3 นาทีค่าค่อยๆ ลดลง และที่ 6 นาทีใกล้ baseline",
    "<b>ทำไม SBP ขึ้น</b> sympathetic เพิ่ม HR, contractility, SV และ CO",
    "<b>ทำไม DBP ไม่ขึ้น</b> metabolites ในกล้ามเนื้อที่ทำงานทำให้ arteriole ขยาย TPR ลด หักล้างกับ CO ที่เพิ่ม",
    "<b>ช่วงฟื้นตัว</b> คนที่ฟิตกว่าฟื้นกลับเร็วกว่า ถ้าหยุดวิ่งกะทันหันแล้วยืนนิ่ง จะขาด muscle pump → venous return ตก → หน้ามืดหรือเป็นลมได้",
    "<b>Isometric exercise</b> การยกของหนักร่วมกับกลั้นหายใจทำให้ทั้ง SBP และ DBP พุ่งขึ้นมาก จึงควรเลี่ยงในผู้ป่วยความดันสูงที่คุมไม่ได้และโรคหลอดเลือดหัวใจ"
  ],

  /* ---------------- M · Microcirculation ---------------- */
  "M-C1": [
    "<b>Microcirculation คืออะไร</b> arterioles → metarterioles → precapillary sphincters → capillaries → postcapillary venules → venules รวมทั้ง lymphatics ผิวหนังที่นิ้วมือ นิ้วเท้า ฝ่ามือ ฝ่าเท้า หู จมูก และริมฝีปากยังมี arteriovenous anastomoses ที่ sympathetic ควบคุม: เปิดเมื่ออุ่น ปิดเมื่อเย็น",
    "<b>1. Arterial occlusion</b> ยกแขน กำมือ บีบ cuff 200 mmHg นาน 5 นาทีแล้วปล่อย ระหว่างรัดแขนซีด เย็น คลำชีพจรไม่ได้ และปวด หลังปล่อยแดงสดและอุ่น คือ ischemia ตามด้วย reactive hyperemia",
    "<b>2. Venous occlusion</b> cuff 30–40 แล้ว 80–90 mmHg อย่างละ 5 นาที หลอดเลือดดำโป่ง ผิวคล้ำม่วงน้ำเงิน ปลายนิ้วตึง และเสียวซ่า เพราะทางออกของเลือดถูกปิดแต่เลือดยังไหลเข้า",
    "<b>3. Skin stroking</b> ขูดผิวด้วยวัตถุทู่ เบาแล้วแรง ได้เส้นขาว หรือ red line → flare → wheal ซึ่งเกิดจากการรีดเลือดออกเชิงกล หรือ triple response",
    "<b>4. Temperature</b> แช่แขนในน้ำ 40–45, 20 และ 5–10 °C อย่างละ 5 นาที น้ำอุ่นทำให้แดงและหลอดเลือดดำเต็ม น้ำเย็นจัดทำให้แดงแต่หลอดเลือดดำแบนและปวด เพราะหลอดเลือดผิวหนังทำหน้าที่คุมอุณหภูมิ",
    "<b>5. Gravity</b> ยกแขนข้างหนึ่งขึ้น อีกข้างห้อยลง 1 นาที ข้างที่ยกซีดและหลอดเลือดดำว่าง ข้างที่ห้อยแดงม่วงและหลอดเลือดดำเต็ม เป็นผลของ hydrostatic pressure"
  ],
  "M-C2": [
    "<b>ระหว่างรัด cuff 200 mmHg นาน 5 นาที</b> ความดัน cuff สูงกว่า SBP เลือดจึงเข้าไม่ได้และออกไม่ได้",
    "<b>อาการ</b> ซีด (ยกแขนและกำมือรีดเลือดออกก่อน) เย็น คลำ radial pulse ไม่ได้ ปวด เสียวซ่า และชา เพราะเส้นประสาทขาดเลือด และ K⁺, H⁺, lactate กับ bradykinin คั่งไปกระตุ้น nociceptors",
    "<b>ทำไมไม่บวม</b> ไม่มีเลือดไหลเข้า ความดันใน capillary จึงต่ำ ไม่มีการกรองน้ำออก",
    "<b>หลังปล่อย: reactive hyperemia</b> ผิวแดงสดและอุ่น เลือดไหลเพิ่มหลายเท่า สาเหตุคือ vasodilator metabolites ที่คั่งไว้ (adenosine, K⁺, H⁺, CO₂, lactate), การขาด O₂ และ myogenic relaxation ของ arteriole ตามด้วย NO จากเลือดที่ไหลแรง",
    "<b>Deoxyhemoglobin ลดลงเร็ว</b> เพราะเลือดที่มี O₂ ทะลักเข้ามาแทนที่",
    "<b>ระยะเวลา</b> hyperemia นานโดยประมาณตามระยะเวลาที่รัด และหยุดเมื่อ metabolites ถูกชะล้างออกและชดใช้ O₂ debt ครบ"
  ],
  "M-C3": [
    "<b>Cuff 30–40 mmHg</b> สูงกว่าความดันหลอดเลือดดำแต่ต่ำกว่า DBP มาก เลือดแดงยังไหลเข้าได้แต่เลือดดำออกไม่ได้ หลอดเลือดดำโป่ง ผิวแดงม่วง อุ่น ปลายนิ้วตึง รู้สึกแน่นและเสียวซ่าเล็กน้อย ชีพจรยังคลำได้",
    "<b>Cuff 80–90 mmHg</b> ใกล้ DBP เลือดแดงเข้าได้เฉพาะตอนยอด systole และเลือดดำออกไม่ได้ หลอดเลือดดำโป่งมากขึ้น ผิวคล้ำน้ำเงิน (cyanotic) ปลายนิ้วบวม อาจมี petechiae มีอาการเสียวซ่าและปวดจาก stagnant hypoxia และชีพจรเบาลง",
    "<b>ทำไมบวม</b> ความดันหลอดเลือดดำสูง → capillary hydrostatic pressure สูง → กรองน้ำออกมากขึ้น",
    "<b>หลอดเลือดดำโป่งแบบ passive</b> เพราะเลือดคั่ง ไม่ใช่ vasodilation และ arteriole ก็ไม่ได้ขยาย ตรงกันข้าม ความดันหลอดเลือดดำที่สูงกระตุ้น veno-arteriolar constriction เฉพาะที่ เพื่อจำกัดความดันใน capillary",
    "<b>Tourniquet test ในไข้เลือดออก</b> ใช้หลักเดียวกัน คือรัด cuff ไว้ระหว่าง SBP กับ DBP 5 นาที แล้วนับ petechiae"
  ],
  "M-C4": [
    "<b>White reaction (ขูดเบา)</b> เกิดเส้นซีดภายในราว 15–20 วินาที เพราะเลือดถูกรีดออกจาก capillaries และ venules ผิวตื้นเชิงกล (mechanical expulsion) ร่วมกับ precapillary sphincter หดตัว",
    "<b>1. Red line (ขูดแรง, 3–15 วินาที ตรงแนวขูดพอดี)</b> หลอดเลือดเล็กขยายเฉพาะที่โดยตรง จาก histamine ที่ mast cell ปล่อยออกมาตรงนั้น",
    "<b>2. Flare (15–30 วินาที แผ่ออกรอบแนว 1–2 cm)</b> เป็น axon reflex สัญญาณใน sensory C fiber วิ่งย้อนลงแขนงอื่นของตัวเอง (antidromic) แล้วปล่อย substance P และ CGRP ทำให้ arteriole ขยายเป็นวงกว้าง ไม่ใช่ spinal reflex: ยังเกิดได้แม้ตัดไขสันหลัง แต่หายไปเมื่อฉีดยาชาเฉพาะที่หรือเมื่อเส้นประสาทรับความรู้สึกเสื่อม",
    "<b>3. Wheal (1–3 นาที นูนตามแนวขูด)</b> histamine เพิ่ม permeability ของ capillaries และ postcapillary venules → บวมเฉพาะที่",
    "<b>แมลงกัดต่อย</b> ใช้ mediators เดียวกัน (histamine, bradykinin) อาการแดง บวม และปวด มาจาก capillary permeability ที่เพิ่มขึ้นเป็นหลัก"
  ],
  "M-C5": [
    "<b>น้ำอุ่น 40–45 °C</b> ผิวแดงและอุ่น หลอดเลือดดำผิวตื้นโป่ง เพราะความร้อนเฉพาะที่และ sympathetic tone ที่ลดลง ทำให้ arterioles, veins และ AV shunts ขยายเพื่อระบายความร้อน",
    "<b>น้ำ 20 °C</b> ผิวซีดเล็กน้อย หลอดเลือดดำเห็นไม่ชัด เพราะหลอดเลือดหดตัวเล็กน้อย",
    "<b>น้ำเย็นจัด 5–10 °C</b> ผิวแดง (และปวด) แต่หลอดเลือดดำแบน เพราะความเย็นทำให้ veins และ arterioles หด (sympathetic ร่วมกับ α-receptors ที่ไวขึ้นเมื่อเย็น)",
    "<b>ทำไมยังแดงทั้งที่หลอดเลือดหด</b> hemoglobin ที่เย็นจับ O₂ แน่นขึ้น (left shift) เลือดในผิวจึงยังมี O₂ สูงและสีแดง และเมื่อต่ำกว่าราว 10–15 °C จะเกิด cold-induced vasodilation (hunting reaction) หลอดเลือดเปิดเป็นระลอก",
    "<b>แขนอีกข้างเป็น control</b> การเปลี่ยนแปลงเกิดเฉพาะแขนที่แช่น้ำ"
  ],
  "M-C6": [
    "<b>ยกแขนเหนือศีรษะ</b> ซีด หลอดเลือดดำแฟบและยุบ เพราะ hydrostatic pressure ลดลง เลือดไหลกลับหัวใจ หลอดเลือดดำที่ยุบได้คงแรงดันลบไว้ไม่ได้ ความดันหลอดเลือดดำที่มือจึงอยู่ใกล้ 0",
    "<b>ห้อยแขนลง</b> แดงม่วงและหลอดเลือดดำโป่ง เพราะ hydrostatic pressure บวกเข้าไปในความดันหลอดเลือดดำและ capillary จึงกรองน้ำออกมากขึ้น",
    "<b>ยืนนิ่ง</b> หลอดเลือดดำที่เท้าราว +90 mmHg หลอดเลือดดำที่คอยุบ (ราว 0) ส่วน dural venous sinuses อยู่ในกะโหลกที่แข็ง ยุบตัวไม่ได้ ความดันจึงติดลบ (ราว −10 mmHg)",
    "<b>ความสำคัญทางคลินิก</b> แรงดันลบนี้ทำให้การผ่าตัดสมองในท่านั่งเสี่ยงต่อ air embolism",
    "<b>การหายใจเข้า</b> ความดันในช่องอกลด ความดันในหลอดเลือดดำใหญ่ในช่องอกจึงลด venous return เพิ่มขึ้น"
  ],

  /* ---------------- P · Physical examination ---------------- */
  "P-C1": [
    "<b>Inspection</b> ดู cyanosis, edema, หอบเหนื่อย, JVP และ apex ที่มองเห็น ระวัง: เขียวและบวมอาจไม่ได้มาจากหัวใจ เช่น โรคปอด nephrotic syndrome โรคตับ หรือหลอดเลือดดำและท่อน้ำเหลืองอุดตัน",
    "<b>Palpation</b> apex beat (PMI) อยู่ที่ left 5th ICS แนว midclavicular line (ไม่ใช่ mid-axillary line) ถ้าเลื่อนออกไปแปลว่า LV dilation ถ้าเป็น heave ที่ค้างนานแปลว่า LVH ถ้าเป็น parasternal heave แปลว่า RVH และคลำหา thrill ด้วย การคลำบอกการโตของ ventricle ได้ แต่บอก atrium ไม่ได้",
    "<b>Percussion</b> เคาะหาขอบเขต cardiac dullness มีประโยชน์น้อย และใช้วินิจฉัย constrictive pericarditis ไม่ได้",
    "<b>Auscultation</b> diaphragm ฟังเสียงสูง (S1, S2, AR, MR, rub) ส่วน bell ที่วางเบาๆ ฟังเสียงต่ำ (S3, S4, MS rumble) และ murmur ไม่ได้แปลว่าเป็นโรคเสมอไป (innocent flow murmur)",
    "<b>Heart failure แยกข้าง</b> ข้างซ้ายเลือดคั่งย้อนเข้าปอด: dyspnea, orthopnea, PND และ crackles ข้างขวาเลือดคั่งย้อนเข้าหลอดเลือดดำทั่วร่างกาย: JVP สูง, hepatojugular reflux, hepatomegaly และบวมที่ข้อเท้าและก้นกบ"
  ],
  "P-C2": [
    "<b>ลำดับรอบการเต้น</b> atrial systole (S4 ถ้า LV แข็ง; JVP a) → S1 → isovolumetric contraction ลิ้นปิดหมด (JVP c) → ejection เร็วแล้วช้า (carotid pulse, systolic murmurs; JVP x) → S2 → isovolumetric relaxation ลิ้นปิดหมด (ยอด JVP v) → rapid filling (S3; JVP y) → diastasis เติมช้า",
    "<b>S1</b> เกิดจาก mitral และ tricuspid ปิด อยู่ระหว่าง atrial systole กับ isovolumetric contraction มาก่อน carotid upstroke เล็กน้อย ส่วน radial pulse มาช้ากว่านั้น S1 ดังใน MS",
    "<b>S2</b> เกิดจาก aortic และ pulmonic ปิด อยู่ระหว่าง ejection กับ isovolumetric relaxation แยกเป็นสองเสียงขณะหายใจเข้า (P2 มาช้า) ถ้าเป็น wide fixed split ให้นึกถึง ASD",
    "<b>S3</b> เกิดจากเลือดเติม ventricle อย่างรวดเร็วในต้น diastole หลัง S2 ปกติในคนอายุน้อยและหญิงตั้งครรภ์ แต่ในผู้ใหญ่บ่งถึง heart failure หรือ volume overload",
    "<b>S4</b> เกิดจาก atrium บีบเลือดเข้า ventricle ที่แข็ง ในปลาย diastole ก่อน S1 พบใน LVH, hypertension และ ischemia และไม่มีใน AF"
  ],
  "P-C3": [
    "<b>Aortic และ pulmonic area</b> aortic = right 2nd ICS ข้างกระดูกอก ฟัง AS (ejection systolic ร้าวไป carotid) และ AR ส่วน pulmonic = left 2nd ICS ฟัง PS (ejection systolic) และ PR (early diastolic)",
    "<b>Erb’s point และ tricuspid area</b> Erb’s point = left 3rd ICS ซึ่ง AR มักดังที่สุด ส่วน tricuspid = left lower sternal border ที่ 4th–5th ICS ฟัง TR (pansystolic ดังขึ้นตอนหายใจเข้า), TS (diastolic) และ VSD",
    "<b>Mitral area (apex, PMI)</b> left 5th ICS แนว midclavicular line ฟัง MR (pansystolic ร้าวไป axilla) และ MS (mid-diastolic rumble ใช้ bell ในท่านอนตะแคงซ้าย)",
    "<b>Ejection systolic (AS/PS)</b> crescendo–decrescendo เริ่มหลัง S1 เพราะต้องผ่านช่วง isovolumetric contraction ก่อนลิ้นจะเปิด ฟังที่ aortic area และร้าวไป carotid (PS ฟังที่ pulmonic area)",
    "<b>Pansystolic (MR/TR)</b> เสียงเรียบตั้งแต่ S1 ถึง S2 เพราะเลือดรั่วย้อนตลอด systole MR ร้าวไป axilla ส่วน TR ฟังที่ lower left sternal border และดังขึ้นตอนหายใจเข้า",
    "<b>Early diastolic (AR/PR) และ MS</b> AR/PR เป็น decrescendo เสียงเป่าที่เริ่มที่ S2 ฟังที่ Erb’s point หรือ right 2nd ICS โดยให้ผู้ป่วยนั่งโน้มตัวไปข้างหน้าและหายใจออกกลั้นไว้ ส่วน MS เป็น mid-diastolic rumble หลัง opening snap ฟังที่ apex ด้วย bell ในท่านอนตะแคงซ้าย",
    "<b>สองคำถามแก้โจทย์ murmur</b> เกิดเมื่อไร (พร้อม carotid pulse = systolic, หลัง S2 = diastolic) และดังที่สุดที่ไหน (ชื่อ area บอกลิ้น) ข้อสอบใช้ตำแหน่ง classic อย่างเคร่งครัด: left 2nd ICS = pulmonic"
  ],
  "P-C4": [
    "<b>Collapsing (water-hammer) pulse</b> ขึ้นเร็วแรงแล้วตกฮวบ pulse pressure กว้าง DBP ต่ำ พบใน aortic regurgitation",
    "<b>Pulsus parvus et tardus</b> ชีพจรเล็ก ยอดมาช้า carotid pulse delayed และ pulse pressure แคบ พบใน aortic stenosis",
    "<b>Pulsus paradoxus</b> SBP ตกมากกว่า 10 mmHg ตอนหายใจเข้า พบใน cardiac tamponade (และหอบหืดรุนแรง, constriction)",
    "<b>Pulse deficit</b> อัตราที่ apex มากกว่าที่ radial พบใน atrial fibrillation เพราะ beat ที่สั้นส่งคลื่นไปไม่ถึงข้อมือ",
    "<b>Pulsus alternans และหลอดเลือดแข็ง</b> pulsus alternans คือแรงกับเบาสลับกัน พบใน LV failure รุนแรง ส่วนหลอดเลือดแข็ง (อายุมาก, atherosclerosis) ทำให้คลื่นชีพจรเร็ว SBP สูง และ pulse pressure กว้าง",
    "<b>Beck’s triad ใน tamponade</b> hypotension, JVP สูง และ heart sounds เบา ร่วมกับ tachycardia และ pulse pressure แคบ"
  ],
  "P-C5": [
    "<b>วิธีดู</b> ให้ผู้ป่วยเอน 45° หันหน้าไปทางซ้ายเล็กน้อย ดู right internal jugular vein เพราะเป็นเส้นตรงไม่มีลิ้น ต่อเข้า RA โดยตรง",
    "<b>การวัด</b> วัดความสูงแนวดิ่งของจุดที่เต้นเหนือ sternal angle (บวก 5 cm จะได้ RA pressure) ปกติ 3–4 cm",
    "<b>แยกจากชีพจรหลอดเลือดแดง</b> JVP มีสองยอดต่อหนึ่งการเต้น คลำไม่ได้ กดให้หายได้ ลดลงตอนหายใจเข้า และสูงขึ้นเมื่อกดท้อง (hepatojugular reflux)",
    "<b>a wave</b> = RA บีบตัว หายไปใน AF และกลายเป็น cannon a wave ใน AV dissociation (complete heart block)",
    "<b>c wave และ x descent</b> c = ลิ้น tricuspid โป่งเข้า RA ตอน RV บีบ ส่วน x = atria คลายตัว และวงลิ้น tricuspid ถูกดึงลงระหว่าง ejection",
    "<b>v wave และ y descent</b> v = เลือดเติม RA ขณะ tricuspid ปิด กลายเป็น giant v (cv) wave ใน TR ส่วน y = tricuspid เปิด RA เทเลือดลง RV"
  ],
  "P-C6": [
    "<b>หายใจเข้าปกติ</b> ความดันในช่องอกลด → เลือดดำไหลเข้าหัวใจขวามากขึ้น → RV บีบเลือดนานขึ้นเล็กน้อย → P2 มาช้า → S2 แยกเป็นสองเสียง การหายใจเข้าลึกคือวิธีเพิ่ม venous return ได้เร็วที่สุด",
    "<b>ASD ทำให้ wide split</b> เลือดลัดจาก LA ไป RA ตลอดเวลา RV จึงรับปริมาตรเกินเสมอ P2 มาช้าตลอด",
    "<b>ทำไม split คงที่ (fixed)</b> ตอนหายใจเข้า venous return จากร่างกายที่เพิ่มขึ้นทำให้ความดัน RA สูงขึ้น shunt จาก LA ไป RA จึงลดลง ปริมาตรที่ RV ได้รับจึงพอๆ เดิมทั้งหายใจเข้าและออก",
    "<b>คำถามที่พบบ่อย</b> ใน ASD ค่าที่ลดลงตอนหายใจเข้าคือ shunt volume ส่วน RA preload และ venous return เพิ่มขึ้น"
  ],

  /* ---------------- D · Dog lab I ---------------- */
  "D-C1": [
    "<b>สิ่งที่บันทึก</b> ในสุนัขที่ดมยาสลบ บันทึก arterial BP (cannula ต่อ transducer), HR, การหายใจ และ CVP บางครั้งมี ECG แต่ละ maneuver เปลี่ยนกราฟเหล่านี้ในรูปแบบเฉพาะตัว",
    "<b>คำถามที่ 1–2</b> อะไรเปลี่ยนก่อน: ความดัน ปริมาตร ก๊าซ หรือเส้นประสาท และตัวรับไหนรับรู้: carotid sinus, aortic arch, carotid/aortic bodies หรือ atria",
    "<b>คำถามที่ 3</b> ขาไหนตอบสนอง: vagus ไปหัวใจ, sympathetic ไปหัวใจและหลอดเลือด, catecholamines จาก adrenal หรือ phrenic ไปกะบังลม",
    "<b>คำถามที่ 4</b> มีขาไหนถูกตัดหรือ block (vagotomy, atropine, หัวใจที่ไม่มีเส้นประสาท) ถ้ามี ส่วนนั้นของการตอบสนองจะหายไป",
    "<b>กระตุ้นปลายไหน</b> ตัดเส้นประสาทแล้วกระตุ้นปลาย peripheral (ด้านหัวใจ) = ทดสอบ efferent fibers ส่วนกระตุ้นปลาย central (ด้านสมอง) = ทดสอบ afferent fibers และ reflex ที่มันก่อ",
    "<b>กระแสต่ำกับกระแสสูง</b> กระแสต่ำกระตุ้นเส้นใยใหญ่ที่ threshold ต่ำ (baroreceptor afferents) กระแสสูงดึงเส้นใยเล็กที่ threshold สูงเข้ามาด้วย (chemoreceptor และ pain afferents)"
  ],
  "D-C2": [
    "<b>Baroreceptor ถูก unload</b> หนีบ common carotid → ความดันใน carotid sinus ตก → baroreceptor ยิงน้อยลง → BP, HR และ RR เพิ่ม",
    "<b>Baroreceptor ถูกกระตุ้น</b> ดึงหรือกด carotid sinus (carotid massage) → ยิงมากขึ้น → vagus เพิ่ม sympathetic ลด และยับยั้งการหายใจ → BP, HR และ RR ลด",
    "<b>หลัง double vagotomy</b> กระตุ้น sinus แล้ว BP และ RR ยังลด แต่ HR ไม่ช้าลง เพราะ vagus ซึ่งเป็น effector ที่ลด HR ถูกตัด เหลือ sympathetic withdrawal และการยับยั้ง phrenic ส่วนการตัด vagus สองข้างเองทำให้ HR เพิ่ม (เสีย vagal tone) BP เท่าเดิมหรือเพิ่ม และหายใจช้าลงแต่ลึกขึ้น (เสีย lung stretch afferents)",
    "<b>กระตุ้น vagus</b> ปลาย peripheral → ACh ที่ SA/AV node → HR ลดมากหรือหยุด (ถ้ากระตุ้นนานเกิด vagal escape) ปลาย central กระแสต่ำ → aortic baroreceptor afferents → BP, HR, RR ลด กระแสสูง → chemoreceptor afferents (aortic bodies) → BP, HR, RR เพิ่ม aortic (depressor) nerve ก็เช่นกัน: กระแสต่ำลด กระแสสูงเพิ่ม",
    "<b>Sciatic nerve ปลาย central</b> กระแสต่ำ → depressor reflex (vagus เพิ่มผ่าน muscarinic ที่ SA node และ AV conduction ช้าลง, sympathetic ลด) BP และ HR ลด RR แทบไม่เปลี่ยนในกราฟแล็บ กระแสสูง → pressor (pain) reflex ผ่าน sympathetic และ phrenic ทุกค่าเพิ่ม",
    "<b>ก๊าซและ tilt</b> หายใจ CO₂ → central และ peripheral chemoreceptors → BP, HR, RR เพิ่ม (แม้ CO₂ จะขยายหลอดเลือดเฉพาะที่) อุด trachea (asphyxia) → hypoxia ร่วมกับ hypercapnia → BP เพิ่ม HR เพิ่มแล้วลด และหายใจแบบ gasping ส่วน head-down/head-up tilt เปลี่ยน venous return ก่อน BP จึงขึ้นหรือลด แล้ว baroreflex ดึง BP กลับ"
  ],
  "D-C3": [
    "<b>ค่า control</b> BP 160/120, HR 110, RR 14",
    "<b>ดึง carotid sinus (เบา → แรง)</b> BP 150/110 → 140/100, HR 105 → 90, RR 12 → 10 การยืดทำให้ baroreceptor ยิงมากขึ้น ยิ่งดึงแรง BP ยิ่งตกมาก",
    "<b>กระตุ้นไฟฟ้าที่ sinus</b> BP 120/80, HR 100, RR 10 เพราะกระตุ้น afferents ชุดเดียวกันโดยตรง",
    "<b>หนีบ common carotid</b> BP 190/150, HR 140, RR 18 เพราะ sinus อยู่เลยจุดหนีบไป ความดันใน sinus จึงตก baroreceptor ถูก unload → sympathetic เพิ่ม vagus ลด จุดหลอกคือหนีบหลอดเลือดแต่ BP ทั้งระบบกลับสูงขึ้น",
    "<b>การหายใจ</b> ในสุนัขที่ดมยาสลบ การกระตุ้น baroreceptor ทำให้หายใจช้าลง",
    "<b>ในผู้ป่วย</b> carotid massage เพิ่ม vagal tone ทำให้หัวใจช้าลงและ AV conduction ช้าลง ใช้หยุด supraventricular tachycardia บางชนิด"
  ],
  "D-C4": [
    "<b>ค่า control</b> BP 170/120, HR 108",
    "<b>Head-down tilt</b> เลือดไหลกลับหัวใจ venous return เพิ่ม → BP ขึ้นก่อนเป็น 185/135 → baroreceptor ยิงมากขึ้น → BP และ HR ถูกดึงลงเป็น 130/90, HR 95",
    "<b>Head-up tilt</b> เลือดค้างที่ร่างกายส่วนล่าง venous return ลด → BP ตกก่อนเป็น 100/60 → baroreceptor ถูก unload → HR และ vascular tone เพิ่ม BP กลับเป็น 150/95, HR 120",
    "<b>การหายใจ</b> กราฟการหายใจอ่านไม่ได้ระหว่าง tilt จึงประเมิน RR ไม่ได้",
    "<b>เชื่อมกับแล็บ BP</b> เป็น reflex เดียวกับการลุกยืน carotid sinus รับรู้การเปลี่ยนแปลงก่อน"
  ],
  "D-C5": [
    "<b>หลัง double vagotomy</b> control คือ BP 160/120, HR 110, RR 8",
    "<b>ผล</b> ดึง carotid sinus ได้ BP 120/80, HR 110 (ไม่เปลี่ยน), RR 6 และกระตุ้นไฟฟ้าได้ BP 100/60, HR 110, RR 6",
    "<b>ทำไม HR ไม่ลด</b> vagus เป็นทางของ efferent fibers ที่ทำให้หัวใจช้า ตัดแล้ว HR จึงไม่ตก",
    "<b>ทำไม BP ยังลด</b> sympathetic withdrawal ยังทำงาน (arteriole และหลอดเลือดดำขยาย) และการหายใจยังช้าลงจากการยับยั้ง phrenic",
    "<b>ผลของ vagotomy เอง</b> RR ตอน control เหลือแค่ 8 (เดิม 14) และหายใจลึกขึ้น เพราะ lung stretch afferents ที่วิ่งใน vagus หายไป"
  ],
  "D-C6": [
    "<b>การทดลอง</b> ตัด sciatic nerve แล้วกระตุ้นปลาย central ด้วยกระแสต่ำแล้วกระแสสูง control คือ BP 150/110, HR 100, RR 12",
    "<b>กระแสต่ำ → depressor reflex</b> BP 130/90, HR 96, RR 12 (แทบเท่าเดิม) เพราะ vagus เพิ่ม (M2 ที่ SA node, AV conduction ช้าลง) และ sympathetic ลด",
    "<b>กระแสสูง → pressor (pain) reflex</b> BP 200/170, HR 120, RR 56 เพราะ sympathetic drive เพิ่ม ร่วมกับ phrenic nerve ปล่อย ACh ที่กะบังลมทำให้หายใจเร็ว",
    "<b>ทำไมต่างกัน</b> กระแสต่ำกระตุ้นเส้นใย afferent ขนาดใหญ่ที่ threshold ต่ำ กระแสสูงดึงเส้นใยเจ็บปวดขนาดเล็กเข้ามาด้วย",
    "<b>ระวังเฉลย</b> เฉลยข้อสอบเขียนว่ากระแสต่ำทำให้ BP, HR และ RR ลดทั้งหมด แต่ในกราฟนี้การหายใจแทบไม่เปลี่ยน"
  ],
  "D-C7": [
    "<b>กระตุ้น splanchnic nerve</b> control BP 150/110, HR 104, RR 12 กระตุ้นแล้ว BP ขึ้นเป็น 180/150 และ 220/160 ที่กระแสสูง HR 112 → 80 เมื่อ baroreflex ตอบโต้ และ RR ลด 6 → 4",
    "<b>BP ขึ้นสองจังหวะ</b> จังหวะแรกคือ α₁ หดหลอดเลือดในช่องท้อง จังหวะที่สองซึ่งช้ากว่าคือ epinephrine จาก adrenal",
    "<b>BP ตกต่ำกว่า baseline หลังหยุดกระตุ้น</b> epinephrine ที่เหลือค้างในระดับต่ำออกฤทธิ์ที่ β₂ ทำให้หลอดเลือดขยาย",
    "<b>หลัง double vagotomy</b> BP 200/150 พร้อม HR เพิ่มเป็น 120 ไม่มี reflex bradycardia และการหายใจที่ช้าลงเป็นผลเดียวของ baroreflex ที่ยังเห็นได้",
    "<b>Epinephrine ขนาดต่ำ (β₂ &gt; α; β₁)</b> DBP และ MAP ลด HR เพิ่ม หลอดเลือดในกล้ามเนื้อ ตับ และหัวใจขยาย CVP ลดเพราะหัวใจบีบแรงขึ้น",
    "<b>Epinephrine ขนาดสูง (α₁ + β₁)</b> BP เพิ่มมาก HR เพิ่มแล้วลดจาก reflex หายใจลดลง (adrenaline apnea) และหลอดเลือดไตหดทำให้ปัสสาวะลด",
    "<b>Norepinephrine และ phenylephrine</b> norepinephrine (α₁, β₁) เพิ่ม BP มาก HR ลดจาก reflex และมีผล β₂ น้อย ส่วน phenylephrine (α₁) เพิ่ม BP และ afterload โดยไม่เพิ่ม inotropy โดยตรง HR ลดจาก reflex",
    "<b>Isoproterenol, acetylcholine และ nitroglycerin</b> isoproterenol (β₁, β₂ ล้วน) BP ลด HR เพิ่มมาก acetylcholine (M: หลอดเลือดผ่าน NO, M2 ที่หัวใจ) ลดทั้ง BP และ HR และถูก block ด้วย atropine ส่วน nitroglycerin (NO donor ออกฤทธิ์ที่หลอดเลือดดำเป็นหลัก) ลด venous return, preload และ CVP BP ลด HR เพิ่มจาก reflex",
    "<b>หลัง vagotomy</b> ไม่มี reflex bradycardia ยาที่เพิ่ม BP จึงเพิ่ม HR ด้วย และหัวใจที่ไม่มีเส้นประสาทยังตอบสนองต่อ catecholamines ในกระแสเลือด"
  ],

  /* ---------------- H · Dog lab II ---------------- */
  "H-C1": [
    "<b>เพิ่มการเติมเลือด</b> ให้ saline เข้าหลอดเลือดดำหรือ RA → venous return และ preload เพิ่ม → SV และ CO เพิ่ม (Frank–Starling) CVP และ BP เพิ่ม HR อาจเพิ่ม (atrial stretch, Bainbridge reflex) หรือลด (baroreflex)",
    "<b>เสียเลือด</b> CVP และ BP ลด HR เพิ่มจาก baroreceptor และ chemoreceptor reflexes RR เพิ่ม และใน 15–30 นาทีน้ำจาก interstitium ไหลเข้าหลอดเลือด Hct จึงลด",
    "<b>หนีบ SVC/IVC และ nitroglycerin</b> หนีบ vena cava ทำให้ RA pressure และ BP ลด HR เพิ่ม และ reflex เพิ่ม contractility กับ TPR ความดันในหลอดเลือดดำเหนือจุดหนีบ (ศีรษะ แขน) สูงขึ้น ส่วน nitroglycerin ขยายหลอดเลือดดำ เลือดค้างในหลอดเลือดดำ preload ลด CVP และ BP ลด HR เพิ่มจาก reflex",
    "<b>หัวใจเติมเลือดไม่ได้ (tamponade)</b> ฉีดน้ำเข้าถุงหุ้มหัวใจ CVP เพิ่ม ขณะที่ venous return ลด BP ลด HR เพิ่ม pulse pressure แคบ และมี pulsus paradoxus",
    "<b>ทางออกผิดปกติ</b> ทำลายลิ้น aortic (AR) ทำให้ SBP เพิ่ม DBP ลด เลือดไหลย้อนช่วง diastole EDV และ total SV เพิ่ม pulse pressure กว้าง collapsing pulse ส่วน aortic stenosis หรือหนีบ aorta ทำให้ความดันก่อนจุดตีบเพิ่ม หลังจุดตีบลด LV pressure และ afterload เพิ่ม ความดันอาจคั่งย้อนจน CVP เพิ่ม และ coarctation (เลย left subclavian) ทำให้ BP แขนสูง ขาต่ำ LV afterload เพิ่ม femoral pulse เบาและช้า",
    "<b>บทเรียนสำคัญ</b> CVP สูงไม่ได้แปลว่าเลือดในระบบเต็มเสมอไป tamponade ทำให้ CVP สูงทั้งที่หัวใจเติมเลือดไม่ได้"
  ],
  "H-C2": [
    "<b>ค่า control</b> BP 100/50 (PP 50), HR 88, CVP 2.5 cmH₂O",
    "<b>ผล</b> หนีบ SVC ได้ 60/30 (PP 30), HR 92, CVP 2.0 หนีบ IVC ได้ 40/20 (PP 20), HR 96, CVP 1.5",
    "<b>กลไก</b> เลือดไปถึง RA น้อยลง → venous return, RA pressure (CVP), preload, SV และ CO ลดทั้งหมด → BP และ pulse pressure ลด baroreflex ตอบโต้ด้วยการเพิ่ม HR, contractility และ TPR",
    "<b>ทำไม IVC แรงกว่า</b> IVC นำ venous return ส่วนใหญ่ คือจากร่างกายส่วนล่างทั้งหมด",
    "<b>เหนือจุดหนีบและบน PV loop</b> ความดันหลอดเลือดดำต้นทาง (ศีรษะและแขนสำหรับ SVC) สูงขึ้น และบน PV loop จุด end-diastolic เลื่อนไปทางซ้าย"
  ],
  "H-C3": [
    "<b>การทดลอง</b> เพิ่มความดันในถุงหุ้มหัวใจผ่าน cannula จาก water manometer control 100/50 (PP 50), HR 88, CVP 2 → 20/10 (PP 10), HR 80, CVP 3",
    "<b>กลไก</b> น้ำในถุงหุ้มหัวใจบีบหัวใจช่วง diastole ห้องหัวใจขยายรับเลือดไม่ได้ venous return จึงลด แต่ความดันใน RA และหลอดเลือดดำกลับสูงขึ้น (CVP เพิ่ม)",
    "<b>ผลต่อเนื่อง</b> preload, SV และ CO ลด → BP ลดและ pulse pressure แคบ afterload ซึ่งดูจากความดัน aorta ก็ลดลงด้วย",
    "<b>HR ในกราฟนี้</b> ตามทฤษฎีควรเกิด reflex tachycardia แต่กราฟนี้ HR ลดเล็กน้อย (88 → 80) และใบแล็บถามให้อธิบาย อย่าคิดว่าทุกกราฟจะเป็นไปตามตำรา",
    "<b>Pulsus paradoxus</b> ตอนหายใจเข้า หัวใจขวาเติมเลือดมากขึ้น septum ดันไปทางซ้าย SBP จึงตกมากกว่า 10 mmHg",
    "<b>การรักษา</b> เอาน้ำออก (pericardiocentesis)"
  ],
  "H-C4": [
    "<b>การทดลอง</b> สอด stylet ลงทาง left common carotid ไปทำลายลิ้น aortic control 90/45 (PP 45), HR 110 → 100/40 (PP 60), HR 100 และ CVP ไม่เปลี่ยน",
    "<b>อ่าน PV loop (ข้อสอบ AC80)</b> B = end-diastole (mitral ปิด ปริมาตร I = EDV) → C = aortic valve เปิด → D = ความดันสูงสุด → E = aortic valve ปิดบนเส้น ESPVR → A = mitral เปิด (ปริมาตร H = ESV) → เติมเลือดกลับไปที่ B",
    "<b>ใน AR</b> เลือดรั่วย้อนจาก aorta ช่วง diastole LV จึงเติมจากสองทาง EDV (I) เลื่อนไปทางขวา total SV เพิ่ม SBP เพิ่ม DBP ลด (จุด C เลื่อนลง) pulse pressure กว้าง collapsing pulse และไม่มี isovolumetric relaxation ที่แท้จริง",
    "<b>ระวัง</b> ใน AR pulse pressure ทำให้ประเมิน flow ที่ใช้ได้จริงสูงเกินไป เพราะส่วนหนึ่งของแต่ละ stroke ไหลกลับเข้า LV effective forward SV จึงต่ำกว่าที่เห็น"
  ],
  "H-C5": [
    "<b>หนีบ ascending aorta (carotid แยกออกหลังจุดหนีบ)</b> carotid BP 100/50 → 30/20, HR 90 → 70, CVP 2.5 → 3.5 จำลอง severe aortic stenosis: LV pressure และ afterload เพิ่ม forward flow ลด และความดันคั่งย้อนกลับ",
    "<b>หนีบ aortic arch (carotid แยกออกก่อนจุดหนีบ)</b> 90/40 → 130/80, HR 96 → 90, CVP 2.5 → 3.0 จำลอง coarctation: ความดันสูงก่อนจุดตีบ ต่ำหลังจุดตีบ",
    "<b>Coarctation ในคน</b> ตีบเลย left subclavian ไป BP จึงสูงที่แขนและ carotid ต่ำและมาช้าที่ขา (femoral) และ LV afterload เพิ่ม",
    "<b>Aortic stenosis ในคน</b> LV pressure และ afterload สูง ชีพจรเล็กและช้า (parvus et tardus) และความดันอาจคั่งย้อนจน CVP สูง",
    "<b>กราฟที่ไม่เป็นไปตามตำรา</b> หนีบ ascending aorta แล้ว HR ลด ทั้งที่ carotid BP ตก ใบแล็บถามให้อธิบาย เป็นอีกกราฟที่ไม่เป็นไปตาม baroreflex แบบง่ายๆ"
  ],
  "H-C6": [
    "<b>ค่า control</b> BP 90/40, HR 96",
    "<b>Aortic nerve กระแสต่ำ (A)</b> BP 65/20, HR 80 เพราะกระตุ้นเส้นใย baroreceptor ขนาดใหญ่ → depressor",
    "<b>Aortic nerve กระแสสูง (B)</b> BP 135/85, HR 110 เพราะเส้นใย chemoreceptor ขนาดเล็กเข้าร่วม → pressor",
    "<b>ทำไมไปได้สองทาง</b> ในสุนัข aortic nerve นำ afferents จากทั้ง baroreceptor ที่ aortic arch และ aortic bodies วิ่งใน left vagosympathetic trunk ไปก้านสมอง ผลต่อ BP และ RR จึงขึ้นกับความแรงของกระแส",
    "<b>Right vagus ปลาย peripheral</b> BP 20/0 ไม่มีการเต้น เพราะ ACh ที่ SA node ทำให้หัวใจหยุด",
    "<b>เชื่อมกับแล็บเต่า</b> right vagus คุมอัตราของ SA node ส่วน left vagus คุมการนำไฟฟ้าผ่าน AV node"
  ],
  "H-C7": [
    "<b>AF ในสุนัข</b> control 100/40, HR 100 ระหว่าง AF ได้ BP 125/20 (PP 105), HR 50 ไม่สม่ำเสมอ และกลับเป็น 100/40, HR 100 (สม่ำเสมอ) เมื่อหยุดกระตุ้น CVP คงที่ 2.5",
    "<b>กลไก AF</b> เริ่มใน atria ส่วนใหญ่รอบ pulmonary veins ใน left atrium AV node ทำหน้าที่เพียงส่งต่อสัญญาณที่ไม่สม่ำเสมอ",
    "<b>ECG และการตรวจร่างกายใน AF</b> ไม่มี P wave, RR ไม่สม่ำเสมอแบบไร้รูปแบบ (irregularly irregular), QRS มักแคบ และมักเร็ว ตรวจพบชีพจรไม่สม่ำเสมอ, pulse deficit, ไม่มี a wave ใน JVP และไม่มี S4",
    "<b>VF ในสุนัข</b> กระตุ้น ventricle แล้วกราฟ BP ตกเป็นเส้นราบไม่มีการเต้น และต่างจาก AF ตรงที่ไม่หยุดเองเมื่อหยุดกระตุ้น",
    "<b>กลไก VF</b> ventricle สั่นพลิ้วโดยไม่บีบตัวอย่างประสานกัน ไม่มี stroke volume คลำชีพจรไม่ได้ BP ตกเข้าหา 0 และต้อง defibrillation ทันที"
  ]
};
