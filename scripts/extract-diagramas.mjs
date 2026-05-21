#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");
const sourcePath = resolve(repoRoot, "docs/arquitetura-uml.md");
const outDir = resolve(repoRoot, "docs/diagramas");

mkdirSync(outDir, { recursive: true });

const md = readFileSync(sourcePath, "utf8");
const blockRegex = /##\s+(?:PlantUML\s+—\s+)?(.+?)\n+```plantuml\n([\s\S]*?)```/g;

const slugify = (label) => label
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

let count = 0;
const generated = [];

for (const match of md.matchAll(blockRegex)) {
  const label = match[1].trim();
  const body = match[2].trim();
  if (!body.startsWith("@startuml")) continue;
  const slug = slugify(label);
  const filename = `${String(++count).padStart(2, "0")}-${slug}.puml`;
  const target = resolve(outDir, filename);
  writeFileSync(target, `${body}\n`, "utf8");
  generated.push({ label, filename });
}

const indexLines = [
  "# Diagramas UML — Arquivos PlantUML",
  "",
  "Esta pasta contém os diagramas do projeto exportados a partir de `docs/arquitetura-uml.md`. Cada arquivo `.puml` pode ser aberto direto no VS Code (extensão PlantUML), em `https://www.plantuml.com/plantuml/uml` ou via Java/`plantuml.jar`.",
  "",
  "Para regenerar a pasta, rode:",
  "",
  "```bash",
  "node scripts/extract-diagramas.mjs",
  "```",
  "",
  "Para gerar SVG/PNG de todos os diagramas, veja [`scripts/gerar-diagramas.sh`](../../scripts/gerar-diagramas.sh).",
  "",
  "## Diagramas",
  "",
];

for (const { label, filename } of generated) {
  indexLines.push(`- ${label}: [\`${filename}\`](${filename})`);
}

writeFileSync(resolve(outDir, "README.md"), `${indexLines.join("\n")}\n`, "utf8");

console.log(`Gerados ${generated.length} diagramas em ${outDir}`);
for (const { filename } of generated) {
  console.log(`  - ${filename}`);
}
