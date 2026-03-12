/**
 * Generates favicon sizes from portfolio_logo.png (favicon.io format).
 * Run: node scripts/generate-favicons.mjs
 */
import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "public", "portfolio_logo.png");
const outDir = join(root, "public", "favicon_io");

const sizes = [
  { name: "favicon-16x16.png", w: 16, h: 16 },
  { name: "favicon-32x32.png", w: 32, h: 32 },
  { name: "apple-touch-icon.png", w: 180, h: 180 },
  { name: "android-chrome-192x192.png", w: 192, h: 192 },
  { name: "android-chrome-512x512.png", w: 512, h: 512 },
];

if (!existsSync(src)) {
  console.error("Source not found:", src);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const buffer = readFileSync(src);

for (const { name, w, h } of sizes) {
  const outPath = join(outDir, name);
  await sharp(buffer).resize(w, h).png().toFile(outPath);
  console.log("Generated:", name);
}

console.log("Done. Favicons written to public/favicon_io/");
