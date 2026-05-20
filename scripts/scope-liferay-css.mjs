import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";

const buildAssetsDir = path.resolve("dist/public/assets");
const scope = ".museu-tjsc-app";

function hasKeyframesParent(rule) {
  let node = rule.parent;

  while (node) {
    if (node.type === "atrule" && /keyframes$/i.test(node.name)) {
      return true;
    }
    node = node.parent;
  }

  return false;
}

function scopeSelector(selector) {
  const trimmed = selector.trim();

  if (!trimmed || trimmed.startsWith(scope)) {
    return trimmed;
  }

  if (trimmed === "html" || trimmed === "body" || trimmed === ":root" || trimmed === ":host") {
    return scope;
  }

  if (trimmed.startsWith("html ") || trimmed.startsWith("body ") || trimmed.startsWith(":host ")) {
    return `${scope} ${trimmed.replace(/^(html|body|:host)\s+/, "")}`;
  }

  if (trimmed.startsWith(".dark")) {
    return `${scope}.dark${trimmed.slice(".dark".length)}`;
  }

  return `${scope} ${trimmed}`;
}

function scopeCss(css, filePath) {
  const root = postcss.parse(css, { from: filePath });

  root.walkRules((rule) => {
    if (hasKeyframesParent(rule)) {
      return;
    }

    rule.selectors = rule.selectors.map(scopeSelector);
  });

  return root.toString();
}

if (!fs.existsSync(buildAssetsDir)) {
  console.warn(`[liferay-css] Diretório não encontrado: ${buildAssetsDir}`);
  process.exit(0);
}

for (const fileName of fs.readdirSync(buildAssetsDir)) {
  if (!fileName.endsWith(".css")) {
    continue;
  }

  const filePath = path.join(buildAssetsDir, fileName);
  const css = fs.readFileSync(filePath, "utf8");
  fs.writeFileSync(filePath, scopeCss(css, filePath));
  console.log(`[liferay-css] CSS escopado: ${path.relative(process.cwd(), filePath)}`);
}
