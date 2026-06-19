import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const vite = await createServer({
  root,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": resolve(root, "./src") },
  },
  ssr: {
    noExternal: ["lucide-react"],
  },
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const { prerender } = await vite.ssrLoadModule("/src/prerender.jsx");
  const { html: appHtml } = await prerender();

  const indexPath = resolve(root, "dist/index.html");
  const template = readFileSync(indexPath, "utf-8");
  const rendered = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );

  if (rendered === template) {
    throw new Error('Could not find empty <div id="root"></div> in dist/index.html');
  }

  writeFileSync(indexPath, rendered);
  console.log("Prerendered 1 page:\n  /");
} finally {
  await vite.close();
}
