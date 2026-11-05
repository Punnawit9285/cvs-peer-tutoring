# CVS Regulation & Labs — Peer Tutoring Materials

Interactive question-first peer-tutoring deck and read-through tutor notes for **CVS Regulation and CVS I Labs (except ECG)**:

- **R · Regulation**: Cardiovascular regulation lecture (baroreflex, chemoreceptors, CNS ischemic response, RAAS, local autoregulation, denervated heart, hypovolemia)
- **F · Frog Heart Lab**: Cardiac action potentials, conduction velocity, refractory periods, extrasystole & compensatory pause, Stannius ligatures, all-or-none law
- **T · Turtle Vagus Lab**: Autonomic heart control, right vs. left vagus stimulation, crescentic line & nicotine block, Gaskell's clamp & heart block
- **B · Blood Pressure Lab**: Indirect BP measurement, cuff sizing & errors, Korotkoff phases, arm vs. leg BP, posture & exercise responses
- **M · Microcirculation Lab**: Reactive hyperemia, venous congestion, Lewis triple response, temperature & posture effects on skin vessels
- **P · Physical Examination Lab**: Precordial palpation, heart sounds & splitting, auscultation areas & murmurs, arterial pulse waveforms, JVP waves
- **D · Dog Lab I**: Baroreflex & carotid maneuvers, tilt table, double vagotomy, sciatic nerve stimulation, splanchnic nerve & vasoactive drugs
- **H · Dog Lab II**: Caval occlusion (SVC/IVC), cardiac tamponade, aortic regurgitation & PV loops, ascending aorta & arch clamping, aortic nerve, AF & VF

## Pages

- **[`dist/deck.html`](dist/deck.html)** — Present & Browse modes, **Core only** filter (106 core questions out of 223 total), 54 concept cards with **531 click-to-reveal cloze blanks**, keyboard navigation (`←`/`→`, `Space` to reveal next blank/answer, `Enter` to reveal all blanks, `A`–`F` / `T` / `F` to answer, `R` to reset, `B` to toggle Browse), and click-to-zoom course figures.
- **[`dist/notes.html`](dist/notes.html)** — 5-part video recording plan, section summaries, common exam traps, read-through `SAY` scripts synced by card ID, and open cloze concept cards.

## Building

```bash
node gen.js       # Apply patch.js (real figures + cloze markup) to old/ -> data/*.js
node check.js     # Validate all IDs, answer keys, and templates
node build.js all # Bundle dist/deck.html and dist/notes.html
```

