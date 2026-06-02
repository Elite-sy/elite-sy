#!/usr/bin/env node
// Génère dist-o2switch.zip à partir de .output/public/ (build statique Nitro).
// Le ZIP contient tout le contenu prêt à uploader dans public_html/ sur O2switch,
// y compris le fichier .htaccess.

import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import AdmZip from "adm-zip";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const sourceDir = resolve(projectRoot, ".output/public");
const outDir = resolve(projectRoot, "dist-o2switch");
const stamp = new Date().toISOString().replace(/[:T]/g, "-").slice(0, 16);
const outFile = resolve(outDir, `elitesy-o2switch-${stamp}.zip`);

if (!existsSync(sourceDir)) {
  console.error(`\n❌ Dossier introuvable : ${sourceDir}`);
  console.error("   Lance d'abord :  npm run build\n");
  process.exit(1);
}

if (!statSync(sourceDir).isDirectory()) {
  console.error(`❌ ${sourceDir} n'est pas un dossier.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

console.log(`📦 Compression de ${sourceDir} ...`);
const zip = new AdmZip();
// addLocalFolder préserve la structure ET inclut les fichiers cachés (.htaccess).
zip.addLocalFolder(sourceDir);
zip.writeZip(outFile);

const sizeMb = (statSync(outFile).size / (1024 * 1024)).toFixed(2);
console.log(`\n✅ ZIP prêt à uploader sur O2switch :`);
console.log(`   ${outFile}`);
console.log(`   Taille : ${sizeMb} Mo`);
console.log(`\n👉 Upload : extraire le contenu dans public_html/ via cPanel ou FileZilla.\n`);

// Petit garde-fou : prévenir si .htaccess manque dans le ZIP.
const entries = zip.getEntries().map((e) => e.entryName);
if (!entries.includes(".htaccess")) {
  console.warn("⚠️  .htaccess absent du ZIP — vérifie qu'il existe bien dans public/.htaccess avant le build.");
}
writeFileSync(resolve(outDir, "LATEST.txt"), outFile + "\n");