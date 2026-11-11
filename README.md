# CVS I Regulation & Lab — Peer support 82 deck

Interactive question-first Peer support 82 deck and tutor guide for **CVS I Regulation & Lab (except ECG)**.

## Open it

| | Link |
|---|---|
| **Student deck** (present to the audience) | https://punnawit9285.github.io/cvs-peer-tutoring/student.html |
| **Tutor deck** (second screen: answers, Thai explanations, tutor notes, script) | https://punnawit9285.github.io/cvs-peer-tutoring/tutor.html |
| **Student handout PDF** | https://punnawit9285.github.io/cvs-peer-tutoring/student.pdf?v=ebaa364b |

Open the student and tutor decks in the same browser and tick *Follow student* in the tutor deck: it jumps to whatever card the student deck shows.

## Sections

- **R · Regulation**: Cardiovascular regulation lecture (baroreflex, chemoreceptors, CNS ischemic response, RAAS, local autoregulation, denervated heart, hypovolemia)
- **F · Frog Heart Lab**: Cardiac action potentials, conduction velocity, refractory periods, extrasystole & compensatory pause, Stannius ligatures, all-or-none law
- **T · Turtle Vagus Lab**: Autonomic heart control, right vs. left vagus stimulation, crescentic line & nicotine block, Gaskell's clamp & heart block
- **B · Blood Pressure Lab**: Indirect BP measurement, cuff sizing & errors, Korotkoff phases, arm vs. leg BP, posture & exercise responses
- **M · Microcirculation Lab**: Reactive hyperemia, venous congestion, Lewis triple response, temperature & posture effects on skin vessels
- **P · Physical Examination Lab**: Precordial palpation, heart sounds & splitting, auscultation areas & murmurs, arterial pulse waveforms, JVP waves
- **D · Dog Lab I**: Baroreflex & carotid maneuvers, tilt table, double vagotomy, sciatic nerve stimulation, splanchnic nerve & vasoactive drugs
- **H · Dog Lab II**: Caval occlusion (SVC/IVC), cardiac tamponade, aortic regurgitation & PV loops, ascending aorta & arch clamping, aortic nerve, AF & VF

## Pages

- **[`dist/deck.html`](dist/deck.html)** — Present & Browse modes, **Core only** filter (106 core questions out of 223 total), 54 concept cards with **531 click-to-reveal cloze blanks**, keyboard navigation (`←`/`→`, `Space` to reveal next blank/answer, `Enter` to reveal all blanks, `A`–`F` / `T` / `F` to answer, `R` to reset, `L` to open the Thai explanation, `B` to toggle Browse), and click-to-zoom course figures. Clicking an option shows the answer at once. Every concept card has a collapsible Thai explanation (labelled **Explanation**) under it; it starts closed because it gives away the blanks.
- **[`dist/notes.html`](dist/notes.html)** (also `tutor.html`): the tutor deck. Same cards and order as the student deck, with every answer and blank revealed, concise Thai bullet explanations, and the English recording script: the 5-video plan on the start card, an opening line and an "Understand it: the 80%" summary on each section card, and a **SAY** line on every concept card and core question. Each concept card also carries **tutor notes** in Thai (knowledge beyond the slide: short bullets, A → B chains, small text diagrams) and the Thai explanation, open.
- **[`student.pdf`](student.pdf)**: the student handout (A4, 106 pages). Each concept gets one page with its cloze blanks left empty and numbered, followed by the quiz on that concept (no answers, two columns; a short quiz sits under its concept when it fits). At the back: the quiz answer key with Thai explanations (grouped by concept), the answers to every numbered blank, and each concept's Thai key points and explanation. Cross-references give real page numbers.
- **Follow student**: open `student.html` and `tutor.html` in the same browser (two tabs or windows). With *Follow student* ticked, the tutor deck jumps to whatever card the student deck shows.

## Building

```bash
node gen.js       # Apply patch.js (real figures + cloze markup) to old/ -> data/*.js
node check.js     # Validate all IDs, answer keys, and templates
node build.js all # Bundle dist/deck.html + student.html/index.html and dist/notes.html + tutor.html
tools/pdf.sh      # Build student.pdf (print.js -> dist/print.html -> headless Chrome; set CHROME=... if Chrome is not in /Applications)
```

`tools/pdf.sh` prints twice: the first pass finds where each part landed, the second fills in the page numbers. It stops if a cross-reference moved or a concept page looks clipped.

`data/lite.js` holds the short form of every concept card (arrow chains and brief bullets, 3–8 blanks); it loads after the section files and keeps each card's figures. `gen.js` does not touch it.

`src/tutor-script.js` holds the English recording script (plan, 80% summaries, SAY lines keyed by card ID). The Thai bullets live in `src/notes-app.js` and `src/deck-app.js` (`THAI_Q`, `THAI_CONCEPT`, `THAI_SEC`; keep both copies in step). `src/thai-explain.js` holds the full Thai explanation of every concept card (both decks and the PDF). `src/tutor-notes.js` holds the tutor-only notes.
