# Direção De Design — Museu TJSC

Registro das decisões visuais e de produto vigentes para o projeto `museu-tjsc`. Atualizado em: 2026-05-20.

## Direção Aceita

O site deve operar como miolo museológico/editorial do portal do Poder Judiciário de Santa Catarina, com clareza editorial, imagens em primeiro plano, navegação objetiva, baixa ornamentação e linguagem institucional não-metalinguística.

## Referências Superadas

- Estética de galeria privada escura: descartada.
- Serifas editoriais nos títulos: descartadas em favor da homogeneidade com o portal TJSC.
- CTAs públicos de fonte (`Ver no TJSC`, `SourceLink`): removidos.
- Rodapé próprio e blocos redundantes de contato/visitação: removidos para não competir com o portal oficial.
- Kit shadcn genérico (sonner, next-themes, react-hook-form, recharts, cmdk, vaul, etc.): removido por falta de uso real.
- Tema alternável (`ThemeProvider`/`TooltipProvider`/`Toaster`): removidos por não existirem no produto.

## Linguagem Visual

- Fonte global: `Open Sans` em todo o site, inclusive títulos.
- Fundo claro com sensação de papel institucional.
- Texto principal em grafite escuro (`#1f1e1c`, `#23211f`).
- Bordô institucional (`#8b1d2c`) como acento de navegação, divisórias, estados ativos e foco.
- Imagens com moldura discreta, sem efeitos decorativos pesados.
- Layout com respiros generosos, grade editorial e cartões de leitura.

## Home

- Hero com obra/documento de forte presença visual; atualmente "Nas ruínas de Curitibanos".
- Bloco de sala permanente com `ZoomableImageDialog`.
- Faixa horizontal com quatro percursos editoriais como principal distribuição.
- Não duplicar abaixo da faixa conteúdos já representados pelos cartões de percurso.

Percursos atuais:

- `História do Tribunal` → `/historia`.
- `História escrita` → `/historia-escrita`.
- `Vozes da Justiça` → `/historia-oral`.
- `Arquivo, AtoM e Pesquisa` → `/acervo-digital`.

## Cards E Imagens

- Exposições devem mostrar imagens/cartazes sem corte agressivo: usar `object-contain` em moldura homogênea.
- História Oral usa miniaturas remotas pequenas (`200x134`); não ampliar além do tamanho nativo.
- Imagens editoriais locais substituem assets oficiais quebrados quando não forem apresentadas como documento histórico.
- Modal de imagem usa Radix Dialog portaled com wrapper `.museu-tjsc-app`, lazy/async loading no trigger, foco preso e fechamento por overlay/`Escape`/botão.
- AtoM permanece externo, plataforma própria de pesquisa.

## Acessibilidade

- Skip link `Ir para o conteúdo principal` é compatível com hash routing: usa `preventDefault`, foca `<main>` e rola até o conteúdo.
- `<main id="museu-tjsc-main" tabIndex={-1}>` é destino programático.
- Páginas com seleção entre muitos itens (composição) usam padrão `radiogroup` com setas, `Home`/`End` e painel `aria-live`.
- Imagens ampliáveis aceitam props `loading`, `decoding` e `fetchPriority`; default `lazy`/`async`.
- Alts descrevem o conteúdo, sem metalinguagem `oficial`.
- `aria-current="page"` em links ativos da navegação.

## Publicação Em Portal/Liferay

- Vite com `base: "./"`, Wouter com `useHashLocation`, mount em `#museu-tjsc-root`, estilos escopados em `.museu-tjsc-app`.
- `scripts/scope-liferay-css.mjs` escopa o CSS final em `.museu-tjsc-app`. Não confiar apenas no wrapper React, porque Tailwind/reset podem ter regras globais.
- `VITE_PUBLIC_ASSET_BASE` deve apontar para a base real que contém `images/`, não para a URL da página Liferay.
- `ZoomableImageDialog` envolve `Dialog.Portal` em wrapper `.museu-tjsc-app` para que estilos escopados continuem aplicando no portal.
- `ErrorBoundary` permanece dentro de `.museu-tjsc-app` para que o fallback de erro também seja estilizado.

## Copy Pública

- Tom curatorial, direto e institucional.
- Não usar metalinguagem técnica: `protótipo`, termos de coleta de dados, `fonte oficial`, `dados verificados`, `página oficial`, `Ver no TJSC`.
- Evitar repetir informações administrativas já disponíveis no portal global.
- Evitar `Miniatura oficial` em alts; usar descrição direta.
- Para vídeos abrindo em nova aba, considerar `sr-only` `em nova aba` quando o texto visível for genérico.

## Dados E Governança

- Cada exposição/publicação tem `sourceUrl` interno; nenhum rótulo público de fonte.
- Não acessar dados por índice (`exhibitions[N]`). Use `findExhibitionByTitle` ou seletores nomeados.
- Evitar duplicação de listas (não reintroduzir `managementTerms`, `officialSections`).
- Não afirmar fato histórico sem fonte oficial registrada.
- Datas históricas antigas e slugs suspeitos exigem validação na fonte antes de mexer.

## Segurança E Operação

- `package.json` é `private`.
- Dev e preview escutam `127.0.0.1` por padrão.
- Express opcional escuta `127.0.0.1`, sem `X-Powered-By`, com `X-Content-Type-Options: nosniff` e `Referrer-Policy: strict-origin-when-cross-origin`.
- Nenhum analytics, tracker ou fonte externa carregado em runtime.
- `check` usa `tsc --noEmit --incremental false` para evitar escrita em `node_modules`.

## Manutenção

- Antes de acrescentar nova seção à home, verificar se não duplica um percurso existente.
- Antes de alterar fonte ou navegação, comparar com o portal TJSC.
- Antes de adicionar dado histórico, verificar se há fonte oficial em `client/src/data/memoria.ts` ou em nova coleta revisada a partir de página institucional.
- Antes de reintroduzir biblioteca/dependência grande, revisar se há uso real e se cabe na proposta enxuta atual.

## Pendências Conhecidas (Sem Fonte Para Mexer Sozinho)

- Datas históricas antigas com possível sobreposição ou lacuna em `compositionTerms`.
- Slugs das exposições 2025 com hífen líder (`-2025-...`).
- Imagens de exposições antigas reutilizadas (2002, 2003, 2004 com o mesmo `img_id`).
- Card de publicação `Tribunal de Justiça de Santa Catarina: Desembargadores e Desembargadoras` apontando para vídeo do lançamento (YouTube) em vez de PDF/landing.

Resolver depende de validação contra fonte oficial TJSC antes de alterar dado público.
