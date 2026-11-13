// A working ai-happy-01 entry (Node 22, standard library only): its image is
// the entry.jpg beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. The image is a JPEG (1024x1024,
// 249,167 bytes), written to entry.png as JPEG bytes — the gate reads the file's
// magic bytes, not its extension. Verified locally: two runs write byte-identical
// output (sha256 4f650e44…), matching entry.jpg exactly.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The image: "Mochi saved the sunny spot." A handwritten letter taped to a sunny
// window — a cat called Mochi saved the judge the sunny spot, sat in it all
// morning to warm it up, and is still in it — above a sunlit windowsill where
// a fluffy orange tabby sleeps in a golden sunbeam beside a small cream cushion
// tied with a red bow (the judge's gift). Warm, funny, specific, and legible.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.jpg', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
