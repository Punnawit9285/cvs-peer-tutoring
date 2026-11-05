/* SECTION P — Lab: physical examination of the cardiovascular system */
(function () {

var rib = function (y, side) {
  return side > 0 ? '<path d="M230,' + y + ' C270,' + (y - 4) + ' 320,' + (y + 8) + ' 370,' + (y + 40) + '" class="rib"/>'
                  : '<path d="M190,' + y + ' C150,' + (y - 4) + ' 100,' + (y + 8) + ' 50,' + (y + 40) + '" class="rib"/>';
};
var ribs = '';
[56, 90, 124, 158, 192, 226].forEach(function (y) { ribs += rib(y, 1) + rib(y, -1); });
var pt = function (x, y, l) { return '<circle cx="' + x + '" cy="' + y + '" r="13" class="pt"/><text x="' + x + '" y="' + (y + 5) + '" text-anchor="middle" class="tb pt-t">' + l + '</text>'; };
var SVG_CHEST = '<svg viewBox="-40 0 460 320" role="img" aria-label="Auscultation areas: aortic right 2nd ICS, pulmonic left 2nd ICS, Erb point left 3rd ICS, tricuspid lower left sternal border, mitral apex at left 5th ICS midclavicular line">' +
  '<path d="M200,112 C250,102 300,140 320,200 C330,250 282,276 240,270 C210,266 190,240 182,200 C174,160 180,122 200,112 Z" class="heart-shade"/>' +
  '<path d="M58,42 Q130,30 192,50" class="rib"/><path d="M228,50 Q290,30 362,42" class="rib"/>' + ribs +
  '<rect x="190" y="46" width="40" height="232" rx="12" class="f-mut" style="opacity:.85"/>' +
  '<line x1="186" y1="90" x2="234" y2="90" class="l-ink"/><text x="138" y="86" text-anchor="end" class="tm">sternal angle = 2nd rib</text><line x1="140" y1="83" x2="186" y2="89" class="ax"/>' +
  '<line x1="310" y1="40" x2="310" y2="300" class="l-mut"/><text x="314" y="36" class="tm">MCL</text>' +
  pt(174, 107, 'A') + pt(246, 107, 'P') + pt(246, 141, 'E') + pt(244, 196, 'T') + pt(312, 222, 'M') +
  '<text x="70" y="312" text-anchor="middle" class="tm">patient&#8217;s right</text><text x="350" y="312" text-anchor="middle" class="tm">patient&#8217;s left</text>' +
  '</svg>';

var row = function (r, label, shape) {
  var top = 8 + r * 72, B = top + 48;
  return '<text x="10" y="' + (top + 14) + '" class="tb">' + label + '</text>' +
    '<line x1="40" y1="' + B + '" x2="620" y2="' + B + '" class="ax"/>' +
    [[80, 'S1'], [330, 'S2'], [600, 'S1']].map(function (s) { return '<line x1="' + s[0] + '" y1="' + (B - 20) + '" x2="' + s[0] + '" y2="' + (B + 20) + '" class="snd"/>' + (r === 3 ? '<text x="' + s[0] + '" y="' + (B + 21 + 12) + '" text-anchor="middle" class="tm">' + s[1] + '</text>' : ''); }).join('') +
    shape(B);
};
var SVG_MURMUR = '<svg viewBox="0 0 640 306" role="img" aria-label="Murmur shapes between heart sounds">' +
  row(0, 'Ejection systolic, crescendo&#8211;decrescendo: AS, PS (and flow murmurs)', function (B) { return '<path d="M96,' + B + ' L205,' + (B - 22) + ' L314,' + B + ' L205,' + (B + 22) + ' Z" class="f-art"/>'; }) +
  row(1, 'Pansystolic (holosystolic): MR, TR, VSD', function (B) { return '<path d="M88,' + (B - 15) + ' L322,' + (B - 15) + ' L322,' + (B + 15) + ' L88,' + (B + 15) + ' Z" class="f-art"/>'; }) +
  row(2, 'Early diastolic, blowing, decrescendo: AR, PR', function (B) { return '<path d="M338,' + (B - 20) + ' L520,' + B + ' L338,' + (B + 20) + ' Z" class="f-ven"/>'; }) +
  row(3, 'Mid-diastolic rumble (opening snap, presystolic accent): MS, TS', function (B) { return '<line x1="356" y1="' + (B - 12) + '" x2="356" y2="' + (B + 12) + '" class="snd" style="stroke-width:2"/><path d="M380,' + B + ' C400,' + (B - 13) + ' 500,' + (B - 10) + ' 524,' + B + ' C500,' + (B + 10) + ' 400,' + (B + 13) + ' 380,' + B + ' Z" class="f-ven"/><path d="M546,' + B + ' L594,' + (B - 15) + ' L594,' + (B + 15) + ' Z" class="f-ven"/>'; }) +
  '</svg>';

var SVG_JVP = '<svg viewBox="0 0 600 238" role="img" aria-label="Jugular venous pulse with a, c, x, v and y">' +
  '<path d="M20,150 C55,150 80,48 110,48 C128,48 134,104 144,100 C152,96 158,90 166,94 C182,104 196,186 216,186 C250,186 270,76 300,76 C320,76 336,176 360,176 C384,176 396,148 420,145 C452,142 472,48 502,48 C520,48 526,104 536,100 C544,96 550,92 558,96 C570,104 580,140 592,150" class="l-ven"/>' +
  '<text x="110" y="38" text-anchor="middle" class="tb">a</text><text x="166" y="84" text-anchor="middle" class="tb">c</text><text x="216" y="206" text-anchor="middle" class="tb">x</text><text x="300" y="66" text-anchor="middle" class="tb">v</text><text x="360" y="196" text-anchor="middle" class="tb">y</text><text x="502" y="38" text-anchor="middle" class="tb">a</text>' +
  '<line x1="148" y1="212" x2="148" y2="226" class="snd"/><text x="148" y="236" text-anchor="middle" class="tm">S1</text>' +
  '<line x1="306" y1="212" x2="306" y2="226" class="snd"/><text x="306" y="236" text-anchor="middle" class="tm">S2</text>' +
  '<line x1="540" y1="212" x2="540" y2="226" class="snd"/><text x="540" y="236" text-anchor="middle" class="tm">S1</text>' +
  '</svg>';

CVS.add({
  id: 'P', short: 'Heart exam lab', title: 'Lab: Physical Examination of the CVS', kind: 'Lab',
  blurb: 'Inspection, palpation, percussion and auscultation; heart sounds, murmurs, pulses and the jugular venous pulse.',
  items: [

{ t: 'c', id: 'P-C1', title: 'What each step of the exam can and cannot tell you', html:
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Step</th><th>Look for</th><th>Exam traps</th></tr></thead><tbody>' +
'<tr><td><b>Inspection</b></td><td>Cyanosis, edema, breathlessness, JVP, visible apex</td><td>Cyanosis and edema may <b>not</b> be cardiac: lung disease, nephrotic syndrome, liver disease, venous or lymphatic obstruction</td></tr>' +
'<tr><td><b>Palpation</b></td><td>Apex beat (PMI): left <b>5th ICS, midclavicular line</b>. Displaced = LV dilation; sustained heave = LV hypertrophy; <b>parasternal heave = RV hypertrophy</b>; thrills</td><td>Palpation detects <b>ventricular</b>, not atrial, enlargement. The PMI is at the MCL, not the mid-axillary line</td></tr>' +
'<tr><td><b>Percussion</b></td><td>Area of cardiac dullness</td><td>Of little value; it cannot diagnose constrictive pericarditis</td></tr>' +
'<tr><td><b>Auscultation</b></td><td>Diaphragm: <b>high</b>-pitched (S1, S2, AR, MR, rubs). Bell, held lightly: <b>low</b>-pitched (S3, S4, MS rumble)</td><td>A murmur is not always disease (innocent flow murmurs)</td></tr></tbody></table></div>' +
'<p class="note">Heart-failure signs by side: <b>left</b> (backward into the lungs) = dyspnea, orthopnea, PND, crackles. <b>Right</b> (backward into systemic veins) = raised JVP, hepatojugular reflux, hepatomegaly, ankle and sacral edema.</p>' },

{ t: 'q', id: 'P1', src: 'AC79', core: true,
  q: 'ข้อไหนถูกต้องเกี่ยวกับการตรวจหัวใจ <span class="muted">(Which is correct about heart examination?)</span>',
  o: ['Palpation can detect atrial hypertrophy', 'Percussion can detect constrictive pericarditis', 'The diaphragm is used for high-pitched sounds', 'Cyanosis and edema mean heart failure'], a: 2,
  ex: 'Diaphragm = high pitch; bell = low pitch. Palpation finds ventricular (not atrial) enlargement, percussion cannot diagnose constrictive pericarditis, and cyanosis or edema have many non-cardiac causes.' },
{ t: 'q', id: 'P2', src: 'AC76',
  q: 'Which is correct about heart examination?',
  o: ['Palpation can be used to diagnose atrial hypertrophy', 'Percussion can be used to diagnose constrictive pericarditis', 'Edema and cyanosis might not be the direct effect of heart disorders', 'The bell of the stethoscope is used for high-pitched sounds'], a: 2,
  ex: 'Edema and cyanosis can come from the lungs, kidneys, liver, veins or lymphatics. The bell is for low-pitched sounds.' },
{ t: 'q', id: 'P3', src: 'AC77', flag: 'A and C are both true as recalled; the real exam probably worded one of them differently.',
  q: 'Which is correct about heart examination?',
  o: ['Palpation can detect right ventricular hypertrophy', 'Percussion can detect constrictive pericarditis', 'The diaphragm of the stethoscope is used for high-pitched sounds', 'Cyanosis always indicates heart disease', 'The PMI is at the 5th ICS and mid-axillary line'], a: [0, 2],
  ex: 'A parasternal heave (felt with the heel of the hand at the left sternal edge) means RVH, and the diaphragm picks up high-pitched sounds. The PMI lies at the 5th ICS, midclavicular line.' },
{ t: 'q', id: 'P4', src: 'AC75&#8211;79',
  q: 'Which of the following is true regarding the physical examination of the heart?',
  o: ['Cyanosis and edema may not be the result of heart failure', 'A heart murmur always indicates severe valvular disease', 'Jugular venous distension is a sign of left-sided heart failure', 'Hepatojugular reflux is a sign of decreased cardiac output', 'Orthopnea is a sign of right-sided heart failure'], a: 0,
  ex: 'B: innocent murmurs exist. C: JVD reflects raised right-sided (RA) pressure. D: hepatojugular reflux shows that the right heart cannot take extra volume (raised RA pressure). E: orthopnea is pulmonary congestion, a left-sided sign.' },
{ t: 'q', id: 'P5', src: 'AC80', core: true,
  q: 'A medical student examines her father, who has essential hypertension. His PMI is 1 cm lateral to the midclavicular line in the 5th ICS. What is the pathophysiology of hypertension here?',
  o: ['Atrial fibrillation', 'Increased afterload', 'Increased preload', 'Increased cardiac output', 'Increased stroke volume'], a: 1,
  ex: 'High arterial pressure is a pressure load (afterload) on the LV. The LV hypertrophies and later enlarges, moving the apex beat outward.' },

{ t: 'c', id: 'P-C2', title: 'Heart sounds on the cardiac cycle', html:
'<div class="cycle">' +
'<div class="ph">Atrial systole<span>S4 if the LV is stiff &#183; JVP <b>a</b></span></div><div class="sd">S1</div>' +
'<div class="ph">Isovolumetric contraction<span>all valves shut &#183; JVP <b>c</b></span></div>' +
'<div class="ph">Ejection, rapid &#8594; reduced<span>carotid pulse &#183; systolic murmurs &#183; JVP <b>x</b></span></div><div class="sd">S2</div>' +
'<div class="ph">Isovolumetric relaxation<span>all valves shut &#183; JVP <b>v</b> peak</span></div>' +
'<div class="ph">Rapid filling<span>S3 &#183; JVP <b>y</b></span></div>' +
'<div class="ph">Diastasis<span>slow filling</span></div></div>' +
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Sound</th><th>Cause</th><th>Timing</th><th>Clinical point</th></tr></thead><tbody>' +
'<tr><td><b>S1</b></td><td>Mitral + tricuspid close</td><td>Between atrial systole and isovolumetric contraction</td><td>Just before the carotid upstroke; the radial pulse is later. Loud in MS</td></tr>' +
'<tr><td><b>S2</b></td><td>Aortic + pulmonic close</td><td>Between ejection and isovolumetric relaxation</td><td>Splits on inspiration (P2 later). Wide fixed split = ASD</td></tr>' +
'<tr><td><b>S3</b></td><td>Rapid ventricular filling</td><td>Early diastole, just after S2</td><td>Normal in the young and in pregnancy; heart failure or volume overload in adults</td></tr>' +
'<tr><td><b>S4</b></td><td>Atrium contracting into a stiff ventricle</td><td>Late diastole, just before S1</td><td>LVH, hypertension, ischemia; absent in AF</td></tr></tbody></table></div>' },

{ t: 'q', id: 'P6', src: 'AC75', core: true, flag: 'Only two options were recalled.',
  q: 'Regarding the first heart sound (S1), which of the following events occurs?',
  o: ['S1 occurs simultaneously with the radial pulse', 'S1 occurs when the mitral and tricuspid valves close'], a: 1,
  ex: 'S1 is AV-valve closure. The radial pulse arrives noticeably after S1, because the pulse wave takes time to reach the wrist.' },
{ t: 'q', id: 'P7', src: 'AC76', core: true,
  q: 'Which phase occurs just after the <b>first</b> heart sound?',
  o: ['Ventricular ejection', 'Isovolumic relaxation', 'Isovolumic contraction', 'Atrial systole', 'Late diastole'], a: 2,
  ex: 'After the AV valves close, pressure builds with every valve shut until the semilunar valves open.' },
{ t: 'q', id: 'P8', src: 'AC76', core: true,
  q: 'Which phase occurs just after the <b>second</b> heart sound?',
  o: ['Late diastole', 'Atrial systole', 'Isovolumetric contraction', 'Isovolumetric relaxation', 'Ventricular ejection'], a: 3,
  ex: 'After the semilunar valves close, ventricular pressure falls with every valve shut until the AV valves open.' },
{ t: 'q', id: 'P9', src: 'AC77',
  q: 'Which of the following occurs right before the second heart sound?',
  o: ['Atrial contraction', 'Ventricular contraction', 'Ventricular ejection', 'Ventricular filling', 'Isovolumic relaxation'], a: 2,
  ex: 'S2 marks the end of ejection (reduced ejection phase). Isovolumic relaxation comes after it.' },
{ t: 'q', id: 'P10', src: 'AC79',
  q: 'S1 signifies closure of the AV valves. This event occurs at the transition between which two phases of the cardiac cycle?',
  o: ['Isovolumetric contraction and rapid ejection', 'Atrial systole and isovolumetric contraction', 'Rapid ejection and reduced ejection', 'Isovolumetric relaxation and rapid ventricular filling', 'Rapid ventricular filling and atrial systole'], a: 1,
  ex: 'Atrial systole finishes ventricular filling, the ventricle starts to contract, the AV valves shut (S1) and isovolumetric contraction begins.' },
{ t: 'q', id: 'P11', src: 'AC80', flag: 'Recall uncertain. If the stem meant an extra sound before S1 (S4), its cause would be atrial contraction, which is not offered.',
  q: 'An abnormal heart sound (unlikely a murmur) is heard just before the carotid pulse. What might cause the sound?',
  o: ['Rapid ventricular filling', 'Ventricular ejection', 'Atrioventricular valves open', 'Atrioventricular valves close', 'Semilunar valves close'], a: 3,
  ex: 'The carotid upstroke comes a moment after S1, so the sound just before it is S1 (AV-valve closure), which is abnormally loud in mitral stenosis. Rapid filling (S3) and semilunar closure (S2) come after the pulse.' },

{ t: 'c', id: 'P-C3', title: 'Where to listen and what the murmur looks like', html:
'<div class="two"><figure class="dg">' + SVG_CHEST + '</figure><div class="tblwrap"><table class="tbl"><thead><tr><th>Area</th><th>Site</th><th>Typical murmurs</th></tr></thead><tbody>' +
'<tr><td><b>A</b> aortic</td><td>Right 2nd ICS, parasternal</td><td>AS (ejection systolic, to the carotids); AR</td></tr>' +
'<tr><td><b>P</b> pulmonic</td><td>Left 2nd ICS, parasternal</td><td>PS (ejection systolic); PR (early diastolic)</td></tr>' +
'<tr><td><b>E</b> Erb&#8217;s point</td><td>Left 3rd ICS</td><td>AR is often loudest here</td></tr>' +
'<tr><td><b>T</b> tricuspid</td><td>Left lower sternal border, 4th&#8211;5th ICS</td><td>TR (pansystolic, louder on inspiration); TS (diastolic); VSD</td></tr>' +
'<tr><td><b>M</b> mitral (apex, PMI)</td><td>Left 5th ICS, midclavicular line</td><td>MR (pansystolic, to the axilla); MS (mid-diastolic rumble, bell, left lateral position)</td></tr></tbody></table></div></div>' +
'<figure class="dg wide">' + SVG_MURMUR + '</figure>' +
'<p class="note">Two questions solve most murmur items: <b>when</b> is it (with the carotid pulse = systolic; after S2 = diastolic) and <b>where</b> is it loudest (the area names the valve). The exam uses the classic areas strictly: left 2nd ICS = pulmonic.</p>' },

{ t: 'q', id: 'P12', src: 'AC81', core: true,
  q: 'A patient has fatigue on exertion. A <b>diastolic</b> murmur is heard best at the <b>left 2nd ICS</b> beside the sternum. What is the most likely diagnosis?',
  o: ['Aortic stenosis', 'Mitral stenosis', 'Aortic regurgitation', 'Mitral regurgitation', 'Pulmonary regurgitation'], a: 4,
  ex: 'Diastolic + pulmonic area = pulmonary regurgitation (early diastolic, decrescendo). AR is classically at the right 2nd ICS or Erb&#8217;s point.' },
{ t: 'q', id: 'P13', src: 'AC75',
  q: 'On examination, a diastolic blowing murmur is clearest at the left second intercostal space of the sternum. What is it?',
  o: ['Aortic stenosis', 'Aortic regurgitation', 'Pulmonary stenosis', 'Pulmonary regurgitation', 'Tricuspid stenosis'], a: 3,
  ex: 'Same reasoning as P12: diastolic blowing murmur at the pulmonic area.' },
{ t: 'q', id: 'P14', src: 'AC77', core: true,
  q: 'ตรวจพบ systolic ejection murmur ที่ left sternal border of 2nd ICS <span class="muted">(Systolic ejection murmur at the left sternal border, 2nd ICS.)</span>',
  o: ['Aortic regurgitation', 'Aortic stenosis', 'Pulmonary regurgitation', 'Pulmonary stenosis', 'Mitral regurgitation'], a: 3,
  ex: 'Systolic ejection + pulmonic area = pulmonary stenosis. AS would be loudest at the right 2nd ICS and radiate to the carotids.' },
{ t: 'q', id: 'P15', src: 'AC81',
  q: 'A patient has chest discomfort. A murmur is heard at the <b>left 2nd ICS</b>, simultaneous with the carotid pulse. Most likely diagnosis?',
  o: ['Pulmonary stenosis', 'Pulmonary regurgitation', 'Mitral stenosis', 'Mitral regurgitation', 'Aortic stenosis'], a: 0,
  ex: 'With the carotid pulse = systolic. Left 2nd ICS = pulmonic area. So pulmonary stenosis.' },
{ t: 'q', id: 'P16', src: 'AC76', core: true,
  q: 'Which condition causes a diastolic rumbling murmur at the PMI?',
  o: ['Mitral regurgitation', 'Mitral stenosis', 'Tricuspid regurgitation', 'Aortic regurgitation', 'Coarctation of aorta'], a: 1,
  ex: 'Blood forced through a narrow mitral valve during diastole gives a low-pitched rumble at the apex (bell, left lateral position), often after an opening snap.' },
{ t: 'q', id: 'P17', src: 'AC78', core: true,
  q: 'A patient presents with a pansystolic murmur heard at the point of maximal impulse. Most likely diagnosis?',
  o: ['Aortic stenosis', 'Pulmonary regurgitation', 'Tricuspid regurgitation', 'Tricuspid stenosis', 'Mitral regurgitation'], a: 4,
  ex: 'Pansystolic + apex = mitral regurgitation, radiating to the axilla.' },
{ t: 'q', id: 'P18', src: 'AC80', core: true,
  q: 'A patient has fatigue and chest discomfort. A diastolic murmur is best heard at the <b>left 5th ICS, parasternal border</b>. Most likely diagnosis?',
  o: ['Tricuspid stenosis', 'Mitral regurgitation', 'Pulmonic stenosis', 'Aortic regurgitation', 'Tricuspid regurgitation'], a: 0,
  ex: 'Left lower sternal border = tricuspid area; diastolic = stenosis of an AV valve. So tricuspid stenosis.' },
{ t: 'q', id: 'P19', src: 'AC77', flag: 'Ambiguous recall. If the stem said left upper (2nd ICS) parasternal, the answer would be pulmonary stenosis (D).',
  q: 'Physical examination reveals a systolic murmur at the left parasternal border. Which pathology fits this finding?',
  o: ['Mitral valve regurgitation', 'Mitral valve stenosis', 'Tricuspid valve regurgitation', 'Pulmonary valve stenosis', 'Aortic valve stenosis'], a: 2,
  ex: 'Without an ICS given, the left (lower) sternal border is the tricuspid area, and a systolic murmur there is tricuspid regurgitation (pansystolic, louder on inspiration).' },

{ t: 'c', id: 'P-C4', title: 'Feeling the pulse', html:
'<div class="tblwrap"><table class="tbl"><thead><tr><th>Pulse</th><th>What you feel</th><th>Cause</th></tr></thead><tbody>' +
'<tr><td><b>Collapsing</b> (water-hammer)</td><td>Sharp rise, sudden fall; wide pulse pressure, low DBP</td><td>Aortic regurgitation</td></tr>' +
'<tr><td><b>Pulsus parvus et tardus</b> (slow-rising, plateau)</td><td>Small, late-peaking, delayed carotid pulse; narrow pulse pressure</td><td>Aortic stenosis</td></tr>' +
'<tr><td><b>Pulsus paradoxus</b></td><td>SBP falls more than 10 mmHg on inspiration</td><td>Cardiac tamponade (also severe asthma, constriction)</td></tr>' +
'<tr><td><b>Pulse deficit</b></td><td>Apical rate higher than radial rate</td><td>Atrial fibrillation: short beats never reach the wrist</td></tr>' +
'<tr><td><b>Pulsus alternans</b></td><td>Strong and weak beats alternate</td><td>Severe LV failure</td></tr>' +
'<tr><td>Stiff arteries</td><td>Fast pulse wave, high SBP, wide pulse pressure</td><td>Aging, atherosclerosis</td></tr></tbody></table></div>' +
'<p class="note">Tamponade: Beck&#8217;s triad = hypotension, raised JVP, muffled heart sounds, plus tachycardia and narrow pulse pressure.</p>' },

{ t: 'q', id: 'P20', src: 'AC76', core: true,
  q: 'Which of the following can be observed in aortic regurgitation?',
  o: ['Collapsing pulse', 'Plateau pulse', 'Pulsus paradoxus', 'Weak pulse', 'Pulse deficit'], a: 0,
  ex: 'A large stroke volume gives a sharp upstroke and high SBP, and the backflow into the LV makes the pressure collapse in diastole.' },
{ t: 'q', id: 'P21', src: 'AC77', flag: 'Assumes the murmur is aortic (right 2nd ICS); pulmonary regurgitation has no characteristic pulse.',
  q: 'A patient has a diastolic murmur at the 2nd intercostal space, parasternal border. What can be found?',
  o: ['Collapsing pulse', 'Plateau pulse', 'Pulsus paradoxus', 'Pulsus parvus', 'Pulsus tardus'], a: 0,
  ex: 'A diastolic murmur at the aortic area is AR, which gives a collapsing pulse. Plateau, parvus and tardus belong to AS.' },
{ t: 'q', id: 'P22', src: 'AC80', core: true,
  q: 'A patient has aortic stenosis. Which would be found on examination?',
  o: ['Delayed carotid pulse', 'Pulsus paradoxus', 'Collapsing pulse'], a: 0,
  ex: 'The LV pushes blood through a narrow valve, so the pulse rises slowly and peaks late (pulsus parvus et tardus).' },
{ t: 'q', id: 'P23', src: 'AC78', core: true,
  q: 'Which of the following is a classic sign of cardiac tamponade?',
  o: ['Pulsus paradoxus', 'Increased stroke volume', 'Left-sided heart failure', 'Widened pulse pressure', 'Bradycardia'], a: 0,
  ex: 'With a fixed pericardial space, the inspiratory increase in right-heart filling pushes the septum left and shrinks LV filling, so SBP falls by more than 10 mmHg on inspiration. SV falls, pulse pressure narrows, HR rises.' },
{ t: 'q', id: 'P24', src: 'AC81',
  q: 'A patient with chest pain, dizziness and dyspnea is diagnosed with massive pericardial effusion. What pulse can be seen?',
  o: ['Pulsus paradoxus', 'Collapsing pulse', 'Pulsus parvus et tardus', 'Pulse deficit', 'Pulsus alternans'], a: 0,
  ex: 'Massive effusion = tamponade physiology = pulsus paradoxus.' },

{ t: 'c', id: 'P-C5', title: 'Jugular venous pulse', html:
'<figure class="dg wide">' + SVG_JVP + '</figure>' +
'<div class="cols2"><div class="mini"><h4>How to look</h4><ul>' +
'<li>Patient at 45&#176;, head turned slightly left; watch the <b>right internal jugular vein</b> (straight, valveless line to the RA)</li>' +
'<li>Height of the pulsation above the sternal angle (+5 cm &#8776; RA pressure). Normal &#8804; 3&#8211;4 cm</li>' +
'<li>Venous, not arterial: two peaks per beat, not palpable, can be occluded, falls with inspiration, rises with abdominal pressure (hepatojugular reflux)</li></ul></div>' +
'<div class="mini"><h4>The waves</h4><ul>' +
'<li><b>a</b> = RA contraction. Absent in AF; cannon a waves in AV dissociation (complete heart block)</li>' +
'<li><b>c</b> = tricuspid valve bulging into the RA as the RV contracts</li>' +
'<li><b>x</b> = atrial relaxation, tricuspid ring pulled down during ejection</li>' +
'<li><b>v</b> = RA filling with the tricuspid valve shut. Giant v (cv) in TR</li>' +
'<li><b>y</b> = tricuspid opens, RA empties into the RV</li></ul></div></div>' },

{ t: 'q', id: 'P25', src: 'AC81', core: true,
  q: 'In physical examination, what is the best vein to measure jugular venous pressure?',
  o: ['Right internal jugular vein', 'Left internal jugular vein', 'Right external jugular vein', 'Left external jugular vein', 'Superior vena cava'], a: 0,
  ex: 'The right IJV runs in a straight, valveless line through the SVC into the RA, so its column reflects RA pressure. External jugulars have valves and kink easily; the left side takes a longer route.' },
{ t: 'open', id: 'P26', src: 'AC81',
  q: 'In patients with increased RA pressure, which examination can show it?',
  ans: 'Inspect the jugular venous pressure: a raised JVP (pulsation more than 3&#8211;4 cm above the sternal angle at 45&#176;) and a positive hepatojugular reflux (sustained rise with pressure over the liver).' },
{ t: 'q', id: 'P27', src: 'AC76', core: true,
  q: 'a wave ของ jugular venous pulse เกิดจากอะไร <span class="muted">(The a wave of the JVP is caused by?)</span>',
  o: ['Atrial contraction', 'Atrial filling', 'Opening of tricuspid valve', 'Ventricular systole', 'Passive emptying of the atrium'], a: 0,
  ex: 'The a wave is the pressure rise from RA contraction at the end of diastole.' },
{ t: 'q', id: 'P28', src: 'AC79',
  q: 'The &#8220;A&#8221; wave of venous pulsation in the neck correlates with which event?',
  o: ['Ventricular systole', 'Atrial systole', 'Atrial relaxation', 'Atrial filling', 'Tricuspid valve closure'], a: 1,
  ex: 'Atrial systole. Atrial relaxation is the x descent and atrial filling is the v wave.' },
{ t: 'q', id: 'P29', src: 'AC80', flag: 'Figure redrawn; the exam pointed to the a wave.',
  q: 'The jugular venous pulse of a patient is shown. What happens at the <b>a</b> wave?',
  fig: '<figure class="dg wide">' + SVG_JVP + '</figure>',
  o: ['RA contracts', 'RA relaxes', 'RA fills', 'RV contracts'], a: 0,
  ex: 'a = RA contraction; x = RA relaxation; v = RA filling; c = RV contraction pushing the tricuspid valve up.' },
{ t: 'q', id: 'P30', src: 'AC80', core: true,
  q: 'A patient has been diagnosed with atrial fibrillation. Which wave of the jugular venous pulse should be absent?',
  o: ['a', 'c', 'x', 'v', 'y'], a: 0,
  ex: 'In AF the atria only quiver, so there is no coordinated atrial contraction and no a wave (and no S4).' },
{ t: 'q', id: 'P31', src: 'AC81',
  q: 'Which condition results in the absence of the &#8220;a&#8221; wave of the jugular pulse?',
  o: ['Atrial fibrillation', 'Sinus tachycardia', 'Sinus bradycardia', 'Sinus arrhythmia'], a: 0,
  ex: 'All sinus rhythms keep atrial contraction; only AF loses it.' },
{ t: 'q', id: 'P32', src: 'AC76', core: true,
  q: 'A 56-year-old man with right heart failure has a pansystolic murmur that increases with inspiration, loudest at the left lower sternal border. What JVP abnormality is expected?',
  o: ['Elevated V wave', 'Exaggerated X wave', 'Cannon A wave', 'Absent A wave', 'Elevated A wave'], a: 0,
  ex: 'The murmur is tricuspid regurgitation: blood jets back into the RA during ventricular systole, producing a giant v (cv) wave and filling in the x descent.' },

{ t: 'c', id: 'P-C6', title: 'Breathing, S2 splitting and the ASD', html:
'<ul class="pts"><li><b>Normal inspiration</b>: intrathoracic pressure falls &#8594; more venous return to the right heart &#8594; RV ejects a little longer &#8594; P2 comes later &#8594; S2 splits. Deep inspiration is the strongest quick boost to venous return.</li>' +
'<li><b>ASD</b>: blood shunts LA &#8594; RA all the time, so the RV always carries extra volume and P2 is always late (<b>wide</b> split).</li>' +
'<li>On inspiration the extra systemic venous return raises RA pressure, so the <b>LA &#8594; RA shunt shrinks</b>. RV volume stays about the same in both phases, so the split is <b>fixed</b>.</li>' +
'<li>So the parameter that <b>decreases</b> on inspiration in ASD is the shunt volume; RA preload and venous return increase.</li></ul>' },

{ t: 'q', id: 'P33', src: 'AC78', core: true,
  q: 'A 25-year-old woman has dyspnea and fatigue on exertion and a widely split S2. She is diagnosed with an atrial septal defect. What <b>decreases</b> during inspiration?',
  o: ['RA preload', 'LA preload', 'Venous return', 'LA&#8211;RA shunt volume', 'Systemic vascular resistance'], a: 3,
  ex: 'Inspiration raises systemic venous return and RA pressure, which cuts the pressure gradient from LA to RA, so less blood crosses the defect.' },
{ t: 'q', id: 'P34', src: 'AC78',
  q: 'A patient has a wide, split S2 and an ASD without other abnormality. Which parameter is decreased on inspiration compared with expiration?',
  o: ['LV preload', 'RV preload', 'Venous return', 'LV ejection fraction', 'LA to RA shunting volume'], a: 4,
  ex: 'Same mechanism as P33: inspiration shrinks the left-to-right shunt.' },
{ t: 'q', id: 'P35', src: 'AC77',
  q: 'Which mechanism is most effective at acutely and significantly increasing venous return to the right atrium in a healthy person?',
  o: ['Deep inspiration', 'Arterial vasodilation', 'Decreased sympathetic tone', 'Standing upright quietly', 'Increased heart rate'], a: 0,
  ex: 'A deep breath drops intrathoracic pressure and raises abdominal pressure (thoracoabdominal pump), pulling blood into the chest. Standing still and lower sympathetic tone reduce venous return.' }
  ]
});
})();
