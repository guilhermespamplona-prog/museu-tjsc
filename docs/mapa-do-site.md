# Mapa Do Site — Museu TJSC

Visão hierárquica das rotas internas, conteúdos, dependências de dados e links externos relevantes.

Atualizado em: 2026-05-20.

## Convenções

- A aplicação usa hash routing (`useHashLocation`). URL interna `/historia` aparece como `#/historia` no navegador.
- Links externos abrem em nova aba (`target="_blank"`, `rel="noopener noreferrer"`).
- Dados estruturados em `client/src/data/memoria.ts` e `client/src/data/composicao.ts`.

## Mapa Hierárquico

```
Memória TJSC (#/)
├─ Home (#/)
│  ├─ Hero (exposição "Nas ruínas de Curitibanos")
│  ├─ Sala permanente (exposição "Nova exposição permanente")
│  └─ Percursos editoriais
│     ├─ História do Tribunal → #/historia
│     ├─ História escrita → #/historia-escrita
│     ├─ Vozes da Justiça → #/historia-oral
│     └─ Arquivo, AtoM e Pesquisa → #/acervo-digital
│
├─ História e memória
│  ├─ Museu (#/museu)
│  ├─ História do Tribunal (#/historia)
│  ├─ História escrita (#/historia-escrita)
│  │  ├─ Publicações principais (2)
│  │  └─ Volumes oficiais em PDF (9)
│  └─ História oral (#/historia-oral) — 16 vídeos
│
├─ Acervos e registros
│  ├─ Arquivo (#/arquivo)
│  ├─ Biblioteca (#/biblioteca)
│  ├─ Vídeos (#/videos) — 2 vídeos
│  └─ Eventos (#/eventos) — 4 vídeos
│
├─ Institucional
│  ├─ Capela (#/capela)
│  ├─ Composição do Tribunal por Gestão (#/composicao) — 57 gestões
│  └─ Atribuições (#/atribuicoes) — 12 itens
│
├─ Áreas principais
│  ├─ Visitar (#/visitacoes)
│  ├─ Exposições (#/exposicoes) — 32 exposições
│  ├─ Acervo (#/acervo-digital)
│  └─ Pesquisa acadêmica (#/pesquisa)
│
├─ Erro
│  └─ Página não encontrada (#/404)
│
└─ Externo
   └─ AtoM → https://atom.tjsc.jus.br/
```

## Rotas Internas

| Rota | URL exibida | Componente | Dados |
|---|---|---|---|
| `/` | `#/` | `Home.tsx` | `findExhibitionByTitle`, `curatedPaths` |
| `/museu` | `#/museu` | `Museu.tsx` | `findExhibitionByTitle`, `museumFacts`, `visitInfo` |
| `/acervo-digital` | `#/acervo-digital` | `AcervoDigital.tsx` | `acervoCategories`, `findExhibitionByTitle`, atalhos AtoM |
| `/historia` | `#/historia` | `Historia.tsx` | `timeline` (16) |
| `/historia-escrita` | `#/historia-escrita` | `HistoriaEscrita.tsx` | `publications` (2), `writtenHistoryVolumes` (9) |
| `/historia-oral` | `#/historia-oral` | `HistoriaOral.tsx` | `oralHistoryInterviews` (16) |
| `/composicao` | `#/composicao` | `Composicao.tsx` | `compositionTerms` (57) |
| `/exposicoes` | `#/exposicoes` | `Exposicoes.tsx` | `exhibitions` (32) |
| `/capela` | `#/capela` | `Capela.tsx` | dados internos da página + galeria local/oficial |
| `/biblioteca` | `#/biblioteca` | `Biblioteca.tsx` | catálogos e bases jurídicas oficiais |
| `/arquivo` | `#/arquivo` | `Arquivo.tsx` | dados internos + link AtoM |
| `/videos` | `#/videos` | `Videos.tsx` | `videos` (2) |
| `/eventos` | `#/eventos` | `Eventos.tsx` | `eventVideos` (4) |
| `/visitacoes` | `#/visitacoes` | `Visitacoes.tsx` | `visitInfo` |
| `/pesquisa` | `#/pesquisa` | `Pesquisa.tsx` | dados internos + AtoM |
| `/atribuicoes` | `#/atribuicoes` | `Atribuicoes.tsx` | `atribuicoes` (12) |
| `/404` | `#/404` | `NotFound.tsx` | — |

## Navegação Global

`Layout.tsx` apresenta o cabeçalho em duas camadas, sem rodapé próprio. Sempre que a aplicação for incorporada ao portal Liferay, cabeçalho/rodapé institucionais permanecem do portal.

### Camada Primária

- `Visitar` → `/visitacoes`
- `Exposições` → `/exposicoes`
- `Acervo` → `/acervo-digital`
- `Pesquisa acadêmica` → `/pesquisa`
- `AtoM` → `https://atom.tjsc.jus.br/` (externo, nova aba)

### Camada De Grupos

| Grupo | Itens |
|---|---|
| História e memória | `Museu` (`/museu`), `História do Tribunal` (`/historia`), `História escrita` (`/historia-escrita`), `História oral` (`/historia-oral`) |
| Acervos e registros | `Arquivo` (`/arquivo`), `Biblioteca` (`/biblioteca`), `Vídeos` (`/videos`), `Eventos` (`/eventos`) |
| Institucional | `Capela` (`/capela`), `Composição` (`/composicao`), `Atribuições` (`/atribuicoes`) |

### Skip Link

`Ir para o conteúdo principal` é o primeiro `Tab`-stop. Ativa `focusMainContent`, que move foco para `<main id="museu-tjsc-main" tabIndex={-1}>` sem alterar o hash da rota.

## Páginas E Componentes Reutilizados

Todas as páginas internas usam:

- `Layout` para cabeçalho, skip link e wrapper visual.
- `PageIntro` para topo de página com link de retorno `Memória TJSC` apontando para `/`.

Páginas com imagem ampliável usam `ZoomableImageDialog` (modal Radix portaled).

`Composicao.tsx` adiciona padrão `radiogroup` com navegação por setas, `Home`, `End` e painel lateral `aria-live="polite"`.

`Exposicoes.tsx` usa `ExhibitionCard` para cada item.

## Dependências De Dados Por Página

| Página | Exportação consumida | Origem |
|---|---|---|
| `Home` | `curatedPaths`, `findExhibitionByTitle` | `memoria.ts` |
| `Museu` | `museumFacts`, `visitInfo`, `findExhibitionByTitle` | `memoria.ts` |
| `Exposicoes` | `exhibitions` | `memoria.ts` |
| `Historia` | `timeline` | `memoria.ts` |
| `HistoriaEscrita` | `publications`, `writtenHistoryVolumes` | `memoria.ts` |
| `HistoriaOral` | `oralHistoryInterviews` | `memoria.ts` |
| `AcervoDigital` | `acervoCategories`, `findExhibitionByTitle` | `memoria.ts` |
| `Arquivo` | conteúdo interno + AtoM | `memoria.ts` (links) |
| `Biblioteca` | dados internos da página | — |
| `Capela` | dados internos da página + galeria local | `publicAssetUrl` |
| `Videos` | `videos` | `memoria.ts` |
| `Eventos` | `eventVideos` | `memoria.ts` |
| `Visitacoes` | `visitInfo` | `memoria.ts` |
| `Pesquisa` | conteúdo interno + AtoM | `memoria.ts` (links) |
| `Atribuicoes` | `atribuicoes` | `memoria.ts` |
| `Composicao` | `compositionTerms` | `composicao.ts` |
| `NotFound` | — | — |

## Links Externos Relevantes

| Página | Destino | Observação |
|---|---|---|
| Home, Acervo Digital, Pesquisa, Arquivo, Layout | `https://atom.tjsc.jus.br/` | Plataforma de pesquisa arquivística |
| Acervo Digital | `https://atom.tjsc.jus.br/index.php/informationobject/browse?...` | Busca textual em HTML público |
| Acervo Digital | `https://atom.tjsc.jus.br/index.php/taxonomy/index/id/35` | Taxonomia de assuntos |
| Acervo Digital | `https://atom.tjsc.jus.br/index.php/taxonomy/index/id/42` | Taxonomia de locais |
| Acervo Digital | `https://atom.tjsc.jus.br/index.php/function/browse` | Taxonomia de funções |
| Biblioteca | `https://www.tjsc.jus.br/web/biblioteca/...` | Páginas institucionais da biblioteca |
| Biblioteca | `https://biblioteca.tjsc.jus.br/...` | Pergamum (catálogo, login) |
| Biblioteca | `https://www.tjsc.jus.br/web/biblioteca/minha-biblioteca-acesso` | Base Minha Biblioteca |
| Biblioteca | `https://www.tjsc.jus.br/web/biblioteca/revista-dos-tribunais-acesso` | Base Revista dos Tribunais |
| Biblioteca | `https://www.tjsc.jus.br/web/biblioteca/heinonline-acesso` | Base HeinOnline |
| Biblioteca | `https://www.tjsc.jus.br/web/biblioteca/forum` | Base Fórum |
| História Escrita | `https://www2.tjsc.jus.br/web/tjsc/memorias/...` | PDFs oficiais dos volumes |
| História Escrita | `https://youtu.be/lUexlYXi3-g` | Lançamento em vídeo |
| História Oral | `https://youtu.be/...` | 16 entrevistas/teaser |
| Vídeos / Eventos | `https://www.youtube.com/watch?...` | Vídeos YouTube |
| Exposições | `https://www.tjsc.jus.br/web/memoria/exposicoes-do-museu/-/asset_publisher/...` | Página oficial da exposição |
| Composição | `https://www.tjsc.jus.br/web/memoria/gestao-YYYY-YYYY` | Página oficial da gestão (`sourceUrl`) |

## Assets Locais Principais

| Caminho | Uso |
|---|---|
| `client/public/images/composicao/gestao-YYYY-YYYY.jpg` | 57 fotos oficiais locais das gestões |
| `client/public/images/santa-catarina-alexandria.jpg` | Imagem do ícone exibida em `Capela` |
| `client/public/images/m-meu-lugar-na-sociedade-editorial.svg` | Ilustração editorial substituta para exposição com asset oficial indisponível |
| `client/public/images/semana-museus-sustentavel-editorial.svg` | Ilustração editorial substituta para exposição com asset oficial indisponível |

Todos os assets locais são resolvidos por `publicAssetUrl`, que respeita `VITE_PUBLIC_ASSET_BASE` quando definido.

## Estados De Erro E Acessibilidade

- Rotas inválidas caem em `NotFound` envolto por `Layout`, mantendo o cabeçalho.
- `ErrorBoundary` renderiza fallback em PT-BR dentro do escopo `.museu-tjsc-app`. Em produção, não mostra stack trace.
- `aria-current="page"` sinaliza link ativo.
- Foco gerenciado em modal de imagem e em radiogroup de composição.
- Imagens ampliáveis carregam de forma `lazy` e decodificação `async` por padrão.

## Política De Mudanças

- Para adicionar nova rota, ver `Pontos De Extensão` em [`arquitetura-uml.md`](arquitetura-uml.md).
- Para mexer em conteúdo público, verificar `ideas.md` e seções de governança no [`README.md`](../README.md).
- Para alterar dado oficial, atualizar `sourceUrl` correspondente em `memoria.ts` ou `composicao.ts`.
- Para reorganizar navegação, mexer em `Layout.tsx` e atualizar este mapa do site.
