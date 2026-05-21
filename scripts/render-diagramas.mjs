#!/usr/bin/env node
// Renderiza os arquivos .puml em docs/diagramas/ para SVG.
//
// Estratégia:
//   1) Se PLANTUML_JAR estiver definido e existir, usa java local (offline).
//   2) Senão, usa o servidor público https://www.plantuml.com/plantuml (online).
//
// Saída: docs/diagramas/svg/*.svg

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");
const diagramasDir = resolve(repoRoot, "docs/diagramas");
const outDir = resolve(diagramasDir, "svg");

mkdirSync(outDir, { recursive: true });

const pumls = readdirSync(diagramasDir).filter((file) => file.endsWith(".puml")).sort();

if (!pumls.length) {
  console.error("[render] Nenhum .puml encontrado em docs/diagramas/. Rode 'node scripts/extract-diagramas.mjs' antes.");
  process.exit(1);
}

const jar = process.env.PLANTUML_JAR;

if (jar) {
  console.log(`[render] Usando PLANTUML_JAR=${jar}`);
  execFileSync("java", ["-jar", jar, "-tsvg", "-o", outDir, ...pumls.map((file) => join(diagramasDir, file))], {
    cwd: repoRoot,
    stdio: "inherit",
  });
  console.log(`[render] OK. SVGs em ${outDir}`);
  process.exit(0);
}

console.log("[render] PLANTUML_JAR não definido; usando servidor público plantuml.com");

// Encoding compatível com a URL pública do PlantUML.
const PLANTUML_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

function encode6bit(b) {
  return PLANTUML_ALPHABET[b & 0x3f];
}

function append3bytes(b1, b2, b3) {
  const c1 = b1 >> 2;
  const c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
  const c3 = ((b2 & 0xf) << 2) | (b3 >> 6);
  const c4 = b3 & 0x3f;
  return encode6bit(c1) + encode6bit(c2) + encode6bit(c3) + encode6bit(c4);
}

function encodePlantUml(data) {
  let out = "";
  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 === data.length) {
      out += append3bytes(data[i], data[i + 1], 0);
    } else if (i + 1 === data.length) {
      out += append3bytes(data[i], 0, 0);
    } else {
      out += append3bytes(data[i], data[i + 1], data[i + 2]);
    }
  }
  return out;
}

async function renderRemote(filename) {
  const source = readFileSync(join(diagramasDir, filename), "utf8");
  const deflated = zlib.deflateRawSync(Buffer.from(source, "utf8"), { level: 9 });
  const encoded = encodePlantUml(deflated);
  const url = `https://www.plantuml.com/plantuml/svg/${encoded}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} para ${filename}`);
  }
  const svg = await response.text();
  const outPath = join(outDir, filename.replace(/\.puml$/, ".svg"));
  writeFileSync(outPath, svg, "utf8");
  return outPath;
}

(async () => {
  let ok = 0;
  for (const file of pumls) {
    try {
      const out = await renderRemote(file);
      console.log(`[render] ${file} → ${out}`);
      ok++;
    } catch (error) {
      console.error(`[render] Falha em ${file}: ${error.message}`);
    }
  }
  console.log(`[render] Concluído: ${ok}/${pumls.length} SVGs gerados.`);
  if (ok === 0) process.exit(1);
})();
