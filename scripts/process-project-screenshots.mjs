import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, "../public/projects");

const WIDTH = 1920;
const HEIGHT = 1080;
const PADDING = 24;
const CHROME_HEIGHT = 48;

const jobs = [
  { input: "pnlgaurd_ref-1.png", output: "pnlGaurd-1.png", mode: "feature" },
  { input: "pnlgaurd_ref-4.png", output: "pnlGaurd-2.png", mode: "slide" },
  { input: "pnlgaurd_ref-3.png", output: "pnlGaurd-3.png", mode: "slide" },
  { input: "chatloom_ref-1.png", output: "chatloom-1.png", mode: "feature" },
  { input: "chatloom_ref-2.png", output: "chatloom-2.png", mode: "slide" },
  { input: "chatloom_ref-3.png", output: "chatloom-3.png", mode: "slide" },
  { input: "sentryAi_ref-2.png", output: "sentryAi-2.png", mode: "slide" },
  { input: "sentryAi_ref-3.png", output: "sentryAi-3.png", mode: "slide" },
];

function createBrowserChromeSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${CHROME_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#141a1f"/>
      <circle cx="20" cy="24" r="6" fill="#ff5f57"/>
      <circle cx="40" cy="24" r="6" fill="#febc2e"/>
      <circle cx="60" cy="24" r="6" fill="#28c840"/>
      <rect x="90" y="14" width="${WIDTH - 180}" height="20" rx="10" fill="#1a2329"/>
    </svg>
  `);
}

function createVignetteSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="v" cx="50%" cy="50%" r="70%">
          <stop offset="55%" stop-color="black" stop-opacity="0"/>
          <stop offset="100%" stop-color="black" stop-opacity="0.35"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#v)"/>
    </svg>
  `);
}

function createBorderSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="${WIDTH - 2}" height="${HEIGHT - 2}"
        fill="none" stroke="#20b2a6" stroke-opacity="0.3" stroke-width="2" rx="4"/>
    </svg>
  `);
}

function createEdgeDarkenSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="e" cx="50%" cy="50%" r="75%">
          <stop offset="70%" stop-color="black" stop-opacity="0"/>
          <stop offset="100%" stop-color="black" stop-opacity="0.12"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#e)"/>
    </svg>
  `);
}

async function processFeatureImage(inputPath, outputPath) {
  const contentHeight = HEIGHT - CHROME_HEIGHT - PADDING * 2;
  const contentWidth = WIDTH - PADDING * 2;

  const screenshot = await sharp(inputPath)
    .resize(contentWidth, contentHeight, {
      fit: "contain",
      background: { r: 15, g: 20, b: 24, alpha: 1 },
    })
    .modulate({ brightness: 0.97, saturation: 0.95 })
    .toBuffer();

  const screenshotMeta = await sharp(screenshot).metadata();
  const left = PADDING + Math.floor((contentWidth - screenshotMeta.width) / 2);
  const top = CHROME_HEIGHT + PADDING + Math.floor((contentHeight - screenshotMeta.height) / 2);

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: { r: 15, g: 20, b: 24, alpha: 1 },
    },
  })
    .composite([
      { input: createBrowserChromeSvg(), top: 0, left: 0 },
      { input: screenshot, top, left },
      { input: createVignetteSvg(), top: 0, left: 0 },
      { input: createBorderSvg(), top: 0, left: 0 },
    ])
    .png()
    .toFile(outputPath);
}

async function processSlideImage(inputPath, outputPath) {
  const base = await sharp(inputPath)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "top" })
    .modulate({ brightness: 0.98 })
    .toBuffer();

  await sharp(base)
    .composite([{ input: createEdgeDarkenSvg(), top: 0, left: 0 }])
    .png()
    .toFile(outputPath);
}

for (const { input, output, mode } of jobs) {
  const inputPath = path.join(projectsDir, input);
  const outputPath = path.join(projectsDir, output);

  try {
    if (mode === "feature") {
      await processFeatureImage(inputPath, outputPath);
    } else {
      await processSlideImage(inputPath, outputPath);
    }
    console.log(`${input} → ${output} (${mode})`);
  } catch (err) {
    console.error(`Failed ${input}:`, err.message);
    process.exitCode = 1;
  }
}

console.log("Done. Run npm run optimize:images next.");
