#!/usr/bin/env bash
# Converte docs/apresentacao-leigos.html em docs/apresentacao-leigos.pdf.
#
# Tenta automaticamente, nesta ordem:
#   1) Chromium / Google Chrome / Vivaldi em modo headless
#   2) wkhtmltopdf, se instalado
#   3) Mostra instrução manual (abrir no navegador → imprimir → Salvar como PDF)

set -euo pipefail

cd "$(dirname "$0")/.."

INPUT="${1:-docs/apresentacao-leigos.html}"
OUTPUT="${2:-${INPUT%.html}.pdf}"

if [ ! -f "$INPUT" ]; then
  echo "[pdf] Arquivo $INPUT não encontrado." >&2
  exit 1
fi

ABSOLUTE_INPUT="$(realpath "$INPUT")"
ABSOLUTE_OUTPUT="$(realpath -m "$OUTPUT")"

print_with_chromium() {
  local bin="$1"
  echo "[pdf] Usando $bin em modo headless"
  "$bin" --headless --disable-gpu --no-sandbox \
    --no-pdf-header-footer \
    --print-to-pdf="$ABSOLUTE_OUTPUT" \
    "file://$ABSOLUTE_INPUT"
}

print_with_headless_shell() {
  local bin="$1"
  echo "[pdf] Usando $bin (chrome-headless-shell)"
  "$bin" --disable-gpu --no-sandbox \
    --no-pdf-header-footer \
    --print-to-pdf="$ABSOLUTE_OUTPUT" \
    "file://$ABSOLUTE_INPUT"
}

# 1) chrome-headless-shell (mais leve, recomendado para PDF)
if [ -n "${CHROME_HEADLESS_SHELL:-}" ] && [ -x "$CHROME_HEADLESS_SHELL" ]; then
  print_with_headless_shell "$CHROME_HEADLESS_SHELL"
  echo "[pdf] OK: $OUTPUT gerado."
  exit 0
fi

PLAYWRIGHT_SHELL=$(find "${HOME}/.cache/ms-playwright" -name 'chrome-headless-shell' -type f 2>/dev/null | head -1 || true)
if [ -n "$PLAYWRIGHT_SHELL" ] && [ -x "$PLAYWRIGHT_SHELL" ]; then
  print_with_headless_shell "$PLAYWRIGHT_SHELL"
  echo "[pdf] OK: $OUTPUT gerado."
  exit 0
fi

# 2) Chromium/Chrome instalado no sistema
for candidate in chromium google-chrome google-chrome-stable brave-browser chrome microsoft-edge edge; do
  if command -v "$candidate" >/dev/null 2>&1; then
    print_with_chromium "$candidate"
    if [ -s "$ABSOLUTE_OUTPUT" ]; then
      echo "[pdf] OK: $OUTPUT gerado."
      exit 0
    fi
    echo "[pdf] $candidate retornou sem PDF; tentando próximo..." >&2
  fi
done

if command -v wkhtmltopdf >/dev/null 2>&1; then
  echo "[pdf] Usando wkhtmltopdf"
  wkhtmltopdf --enable-local-file-access "$ABSOLUTE_INPUT" "$ABSOLUTE_OUTPUT"
  echo "[pdf] OK: $OUTPUT gerado."
  exit 0
fi

cat >&2 <<EOM
[pdf] Nenhum gerador automático encontrado (Chromium, Chrome, Brave, Vivaldi ou wkhtmltopdf).

Para gerar manualmente:
  1) Abra docs/apresentacao-leigos.html no seu navegador.
  2) Pressione Ctrl + P (ou Command + P no macOS).
  3) Em "Destino", escolha "Salvar como PDF".
  4) Salve em docs/apresentacao-leigos.pdf.
EOM
exit 1
