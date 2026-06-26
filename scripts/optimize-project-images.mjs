import sharp from "sharp";
import { stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, "../public/projects");
const ogDir = path.join(__dirname, "../public/og");

const projectTargets = [
  "pnlGaurd-1.png",
  "pnlGaurd-2.png",
  "pnlGaurd-3.png",
  "sentryAi-1.png",
  "sentryAi-2.png",
  "sentryAi-3.png",
  "chatloom-1.png",
  "chatloom-2.png",
  "chatloom-3.png",
  "bloom-1.png",
  "bloom-2.png",
  "bloom-3.png",
  "veera-1.png",
  "transactionGaurd-1.png",
  "goforge-1.png",
  "goforge-2.png",
  "goforge-3.png",
  "goforge-4.png",
  "specsentinel-1.png",
  "specsentinel-2.png",
  "specsentinel-3.png",
  "specsentinel-4.png",
  "specsentinel-0.png",
];

const ogTargets = [{ dir: ogDir, file: "main.png", width: 1200, height: 630 }];

const formatKB = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function optimizePng(inputPath, { width, height } = {}) {
  const tempPath = `${inputPath}.tmp`;
  const before = (await stat(inputPath)).size;

  let pipeline = sharp(inputPath);
  if (width && height) {
    pipeline = pipeline.resize(width, height, { fit: "cover" });
  } else {
    pipeline = pipeline.resize(1920, 1080, { fit: "inside", withoutEnlargement: true });
  }

  await pipeline
    .png({ compressionLevel: 9, palette: true, quality: 82, effort: 10 })
    .toFile(tempPath);

  const { rename, unlink } = await import("fs/promises");
  await unlink(inputPath);
  await rename(tempPath, inputPath);

  const after = (await stat(inputPath)).size;
  return { before, after };
}

for (const file of projectTargets) {
  const inputPath = path.join(projectsDir, file);

  try {
    const { before, after } = await optimizePng(inputPath);
    console.log(`${file}: ${formatKB(before)} → ${formatKB(after)}`);
  } catch (err) {
    console.error(`Skipped ${file}:`, err.message);
  }
}

for (const { dir, file, width, height } of ogTargets) {
  const inputPath = path.join(dir, file);

  try {
    const { before, after } = await optimizePng(inputPath, { width, height });
    console.log(`og/${file}: ${formatKB(before)} → ${formatKB(after)}`);
  } catch (err) {
    console.error(`Skipped og/${file}:`, err.message);
  }
}
