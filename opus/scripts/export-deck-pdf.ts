import { chromium } from "playwright";
import path from "node:path";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001";
const OUTPUT_PATH = path.resolve(
  __dirname,
  "../../marketing/deck/deck.pdf",
);

async function exportDeck() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
  });

  console.log(`Loading ${BASE_URL}/deck?print=1 ...`);
  await page.goto(`${BASE_URL}/deck?print=1`, {
    waitUntil: "networkidle",
  });

  await page.pdf({
    path: OUTPUT_PATH,
    printBackground: true,
    preferCSSPageSize: true,
    width: "1920px",
    height: "1080px",
    landscape: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  console.log(`PDF exported to ${OUTPUT_PATH}`);
  await browser.close();
}

exportDeck().catch((err) => {
  console.error(err);
  process.exit(1);
});
