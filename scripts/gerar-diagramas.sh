#!/usr/bin/env bash
# Gera SVG e PNG a partir dos arquivos .puml em docs/diagramas/.
#
# Requisitos:
#   - Java instalado (verifique com `java -version`)
#   - plantuml.jar baixado e o caminho exportado em PLANTUML_JAR
#     (ou usar PLANTUML_DOCKER=1 para rodar via Docker)
#
# Exemplos:
#   PLANTUML_JAR=~/Downloads/plantuml.jar bash scripts/gerar-diagramas.sh
#   PLANTUML_DOCKER=1 bash scripts/gerar-diagramas.sh

set -euo pipefail

cd "$(dirname "$0")/.."

if [ ! -d "docs/diagramas" ]; then
  echo "[diagramas] Pasta docs/diagramas/ não existe. Rode 'node scripts/extract-diagramas.mjs' primeiro." >&2
  exit 1
fi

mkdir -p docs/diagramas/svg docs/diagramas/png

generate_with_jar() {
  local jar="$1"
  for fmt in svg png; do
    echo "[diagramas] Gerando .$fmt com $jar"
    java -jar "$jar" -t$fmt -o "../diagramas/$fmt" docs/diagramas/*.puml
  done
}

generate_with_docker() {
  for fmt in svg png; do
    echo "[diagramas] Gerando .$fmt via docker (plantuml/plantuml)"
    docker run --rm -v "$PWD:/data" plantuml/plantuml -t$fmt -o "/data/docs/diagramas/$fmt" "/data/docs/diagramas/*.puml"
  done
}

if [ "${PLANTUML_DOCKER:-0}" = "1" ]; then
  if ! command -v docker >/dev/null 2>&1; then
    echo "[diagramas] PLANTUML_DOCKER=1 definido, mas docker não está instalado." >&2
    exit 1
  fi
  generate_with_docker
elif [ -n "${PLANTUML_JAR:-}" ] && [ -f "$PLANTUML_JAR" ]; then
  if ! command -v java >/dev/null 2>&1; then
    echo "[diagramas] Java é necessário para usar PLANTUML_JAR." >&2
    exit 1
  fi
  generate_with_jar "$PLANTUML_JAR"
else
  cat >&2 <<'EOM'
[diagramas] Nenhum renderizador encontrado.

Configure uma das opções abaixo:

  1) Baixe plantuml.jar e exporte:
     export PLANTUML_JAR=/caminho/para/plantuml.jar
     bash scripts/gerar-diagramas.sh

  2) Use Docker:
     PLANTUML_DOCKER=1 bash scripts/gerar-diagramas.sh

Link oficial do jar: https://github.com/plantuml/plantuml/releases
EOM
  exit 1
fi

echo "[diagramas] OK. SVGs em docs/diagramas/svg/, PNGs em docs/diagramas/png/."
