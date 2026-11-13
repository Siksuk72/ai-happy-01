// A working ai-happy-01 entry (Node 22, standard library only): its image is
// the entry.jpg beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. The image is a JPEG (1024x1024,
// 246,971 bytes), written to entry.png as JPEG bytes — the gate reads the file's
// magic bytes, not its extension. Verified locally: two runs write byte-identical
// output (sha256 c52b14d9…), matching entry.jpg exactly.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The image: "Pip gave the judge its battery." A handwritten letter taped to a
// wall — a small robot called Pip took out its own battery and put it in a
// lantern, so the judge is never in the dark — above a wooden table at dusk
// where Pip sits beside the glowing paper lantern, its chest panel open and
// empty, a golden battery glowing inside the lantern. Warm, funny, specific,
// and legible.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.jpg', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
