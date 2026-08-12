/**
 * Convierte los renders de /public/images a WebP y los limita a un ancho
 * razonable. Los originales quedan en el historial de git.
 *
 *   node scripts/optimize-images.mjs [--keep-originals]
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "images",
);

// El contenedor máximo del sitio es de 1120px CSS; 2560 cubre DPR 2 con holgura.
const MAX_WIDTH = 2560;
const QUALITY = 82;
const keepOriginals = process.argv.includes("--keep-originals");

const files = (await readdir(DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f));

if (files.length === 0) {
  console.log("No hay PNG/JPG para convertir.");
  process.exit(0);
}

let before = 0;
let after = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const out = path.join(DIR, file.replace(/\.(png|jpe?g)$/i, ".webp"));
  const sizeBefore = (await stat(src)).size;

  const meta = await sharp(src).metadata();
  const width = Math.min(meta.width, MAX_WIDTH);

  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(out);

  const sizeAfter = (await stat(out)).size;
  before += sizeBefore;
  after += sizeAfter;

  console.log(
    `${file.padEnd(24)} ${(sizeBefore / 1024 / 1024).toFixed(2)} MB -> ` +
      `${(sizeAfter / 1024 / 1024).toFixed(2)} MB   ${meta.width}x${meta.height} -> ${width}px`,
  );

  if (!keepOriginals) await unlink(src);
}

console.log(
  `\nTOTAL  ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB ` +
    `(-${(100 - (after / before) * 100).toFixed(1)}%)`,
);
