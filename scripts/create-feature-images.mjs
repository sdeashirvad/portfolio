import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, "../public/projects");

const WIDTH = 1920;
const HEIGHT = 1080;

/** Play Store–style feature cards — prefer AI generation with reference SS; use optimize:images after. */
const featureCards = [
  {
    output: "pnlGaurd-1.png",
    screenshot: "pnlGaurd-2.png",
    name: "PnLGuard AI",
    tagline: "Financial Anomaly Monitor",
    bullets: [
      "Rule + AI hybrid break detection",
      "Human-in-the-loop Accept / Reject",
      "PostgreSQL audit trail",
    ],
  },
  {
    output: "chatloom-1.png",
    screenshot: "chatloom-2.png",
    name: "ChatLoom",
    tagline: "Multi-Tenant GenAI Platform",
    bullets: [
      "RAG with configurable grounding",
      "Telegram + Web orchestration",
      "Persona-driven prompt templates",
    ],
  },
  {
    output: "sentryAi-1.png",
    screenshot: "sentryAi-2.png",
    name: "AirflowSentry AI",
    tagline: "ETL Failure Diagnosis",
    bullets: [
      "AI root-cause classification",
      "Retry-safe remediation steps",
      "Exportable SRE incident summaries",
    ],
  },
  {
    output: "transactionGaurd-1.png",
    screenshot: "transactionGaurd-1.png",
    name: "Transaction Guard",
    tagline: "Exactly-Once Execution",
    bullets: [
      "Redis idempotency middleware",
      "Lua-based distributed locking",
      "Fail-open / fail-closed modes",
    ],
    inPlace: true,
  },
  {
    output: "veera-1.png",
    screenshot: "veera-1.png",
    name: "Veera",
    tagline: "Fitness Intelligence",
    bullets: [
      "Adaptive body composition tracking",
      "Daily personalized actions",
      "Plans that evolve with progress",
    ],
    inPlace: true,
  },
  {
    output: "goforge-1.png",
    screenshot: "goforge-2.png",
    name: "GoForge",
    tagline: "Workflow Orchestration Platform",
    bullets: [
      "Real-time worker pool observatory",
      "Queue depth & job lifecycle tracking",
      "Configurable retries & scheduling",
    ],
  },
  {
    output: "specsentinel-1.png",
    screenshot: "specsentinel-2.png",
    name: "SpecSentinel",
    tagline: "API Contract Governance",
    bullets: [
      "Breaking OpenAPI change detection",
      "Deployment risk scoring",
      "CLI + GitHub Actions + PR comments",
    ],
  },
];

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function createBackgroundSvg() {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f1418"/>
          <stop offset="100%" stop-color="#141a1f"/>
        </linearGradient>
        <radialGradient id="glow" cx="30%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#20b2a6" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#20b2a6" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <rect width="100%" height="100%" fill="url(#glow)"/>
    </svg>
  `);
}

function createLaptopFrameSvg() {
  const lx = 72;
  const ly = 88;
  const lw = 1040;
  const lidH = 628;
  const chin = 52;
  const bezel = 16;
  const screenX = lx + bezel;
  const screenY = ly + bezel + 26;
  const screenW = lw - bezel * 2;
  const screenH = lidH - bezel * 2 - 26;
  const lidBottom = ly + lidH;

  return {
    svg: Buffer.from(`
      <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="body" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2a333c"/>
            <stop offset="100%" stop-color="#1a2329"/>
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="24" flood-color="#000" flood-opacity="0.45"/>
          </filter>
        </defs>
        <g filter="url(#shadow)">
          <path fill="url(#body)" fill-rule="evenodd" d="
            M ${lx} ${ly} h ${lw} v ${lidH} h ${-lw} Z
            M ${screenX} ${screenY} h ${screenW} v ${screenH} h ${-screenW} Z
          "/>
          <rect x="${screenX - 4}" y="${screenY - 4}" width="${screenW + 8}" height="${screenH + 8}" rx="10" fill="none" stroke="#252e37" stroke-width="4"/>
          <rect x="${lx + lw / 2 - 36}" y="${ly + 10}" width="72" height="6" rx="3" fill="#252e37"/>
          <path d="M ${lx + 80} ${lidBottom} L ${lx + lw - 80} ${lidBottom} L ${lx + lw} ${lidBottom + chin} L ${lx} ${lidBottom + chin} Z" fill="#252e37"/>
          <ellipse cx="${lx + lw / 2}" cy="${lidBottom + chin - 8}" rx="120" ry="6" fill="#141a1f"/>
        </g>
      </svg>
    `),
    screen: { x: screenX, y: screenY, width: screenW, height: screenH },
  };
}

function createTextPanelSvg(name, tagline, bullets) {
  const bulletLines = bullets
    .map(
      (b, i) => `
        <circle cx="1120" cy="${340 + i * 72}" r="5" fill="#20b2a6"/>
        <text x="1148" y="${346 + i * 72}" fill="#c8d0d8" font-family="Segoe UI, Arial, sans-serif" font-size="28">${escapeXml(b)}</text>
      `
    )
    .join("");

  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <text x="1100" y="200" fill="#20b2a6" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="3">SDEAshirvad Labs</text>
      <text x="1100" y="268" fill="#f0f2f5" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="700">${escapeXml(name)}</text>
      <text x="1100" y="318" fill="#7a8491" font-family="Segoe UI, Arial, sans-serif" font-size="30">${escapeXml(tagline)}</text>
      <line x1="1100" y1="340" x2="1280" y2="340" stroke="#20b2a6" stroke-width="2" stroke-opacity="0.5"/>
      ${bulletLines}
    </svg>
  `);
}

async function createFeatureImage({ output, screenshot, name, tagline, bullets, inPlace }) {
  const screenshotPath = path.join(projectsDir, screenshot);
  const outputPath = path.join(
    projectsDir,
    inPlace ? `${output}.tmp.png` : output
  );

  const { svg: laptopSvg, screen } = createLaptopFrameSvg();

  const screenImage = await sharp(screenshotPath)
    .resize(screen.width, screen.height, { fit: "cover", position: "top" })
    .toBuffer();

  await sharp(createBackgroundSvg())
    .composite([
      { input: screenImage, top: screen.y, left: screen.x },
      { input: laptopSvg, top: 0, left: 0 },
      { input: createTextPanelSvg(name, tagline, bullets), top: 0, left: 0 },
    ])
    .png()
    .toFile(outputPath);

  if (inPlace) {
    const finalPath = path.join(projectsDir, output);
    const { rename, unlink } = await import("fs/promises");
    await unlink(finalPath);
    await rename(outputPath, finalPath);
  }

  console.log(`${screenshot} → ${output} (feature card)`);
}

for (const card of featureCards) {
  try {
    await createFeatureImage(card);
  } catch (err) {
    console.error(`Failed ${card.output}:`, err.message);
    process.exitCode = 1;
  }
}

console.log("Done. Run npm run optimize:images next.");
