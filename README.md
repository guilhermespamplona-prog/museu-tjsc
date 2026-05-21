# Museu TJSC

Aplicação React/Vite para reformular a área de Memória do Poder Judiciário de Santa Catarina como experiência museológica/editorial integrada ao portal institucional do TJSC.

O projeto não é gestor de acervo, não é API de metadados nem substitui o AtoM. É uma aplicação pública estática, com dados estruturados em código, páginas curatoriais e links controlados para plataformas oficiais quando necessário.

## Estado Atual

- Repositório público: `https://github.com/guilhermespamplona-prog/museu-tjsc`.
- Ramo principal: `main`.
- Fase: aplicação editorial funcional, dados oficiais estruturados, rotas internas completas, adaptação para publicação em Liferay, dependências enxutas, revisão adversarial aplicada e compilação validada.
- Build atual (`dist/public/assets/`): JS ~`368 KiB`, CSS ~`36 KiB`.
- Validação corrente: `npx pnpm@10.4.1 check` e `npx pnpm@10.4.1 build` passam.

## Direção Do Produto

- Funcionar como miolo do portal oficial do TJSC, sem competir com cabeçalho/rodapé institucionais.
- Priorizar experiência de museu público: imagem, acervo, história institucional e percursos de leitura.
- Não usar metalinguagem pública: nada de `protótipo`, `fonte oficial`, `dados verificados`, `Ver no TJSC` ou equivalentes na interface.
- AtoM permanece como plataforma externa de pesquisa arquivística avançada.
- Páginas principais reconstruídas dentro do app, não redirecionadas para o portal antigo.
- Tipografia integral em `Open Sans`, com paleta clara e bordô institucional como acento.

## Pilha Técnica

- React `19.2`.
- Vite `7.1`.
- TypeScript `5.6`.
- Tailwind CSS `4`.
- Wouter para roteamento por hash.
- Radix UI Dialog para imagem ampliável acessível.
- Lucide React para ícones.
- Express apenas para servir a compilação opcionalmente em produção.
- Fonte global: `Open Sans`, alinhada ao portal TJSC.
- Sem kit genérico de componentes: nenhum componente UI permanece sem uso real.

## Como Executar Em Outro Computador

Passo a passo completo, com foco em Windows, está em [`docs/guia-execucao-local.md`](docs/guia-execucao-local.md). Em resumo:

```bash
git clone https://github.com/guilhermespamplona-prog/museu-tjsc.git
cd museu-tjsc
npx pnpm@10.4.1 install
npx pnpm@10.4.1 dev            # http://127.0.0.1:3000/#/
```

Para reuniões e demonstrações ao cliente, ver [`docs/guia-apresentacao.md`](docs/guia-apresentacao.md).

## Comandos

`pnpm` e `corepack` podem não estar disponíveis diretamente. Use `npx pnpm@10.4.1`.

```bash
npx pnpm@10.4.1 install           # instala dependências
npx pnpm@10.4.1 dev               # dev server (127.0.0.1:3000)
npx pnpm@10.4.1 check             # typecheck (tsc --noEmit --incremental false)
npx pnpm@10.4.1 build             # build + escopo Liferay + bundle servidor
npx pnpm@10.4.1 preview            # preview do build (127.0.0.1:4173)
npx pnpm@10.4.1 start              # serve dist/public via Express opcional
npx pnpm@10.4.1 format             # Prettier sobre todo o repositório
```

Notas:

- `dev` e `preview` escutam apenas em `127.0.0.1` por padrão.
- `build` gera `dist/public` e empacota `server/index.ts` em `dist/index.js`.
- Build executa `scripts/scope-liferay-css.mjs` para escopar o CSS final em `.museu-tjsc-app`.
- Scripts usam `NODE_OPTIONS=--disable-warning=DEP0205` para suprimir aviso conhecido da cadeia de ferramentas.

## Mapa Do Site

A hierarquia completa, com URL, descrição editorial e dependências de dados, está em [`docs/mapa-do-site.md`](docs/mapa-do-site.md).

Resumo das rotas internas:

| Rota | URL no navegador | Componente | Foco |
|---|---|---|---|
| `/` | `#/` | `Home` | Hero, sala permanente, quatro percursos |
| `/museu` | `#/museu` | `Museu` | Apresentação e visitação |
| `/exposicoes` | `#/exposicoes` | `Exposicoes` | 32 exposições |
| `/historia` | `#/historia` | `Historia` | Panorama e timeline |
| `/historia-escrita` | `#/historia-escrita` | `HistoriaEscrita` | Publicações e 9 volumes |
| `/historia-oral` | `#/historia-oral` | `HistoriaOral` | 16 vídeos, incluindo teaser |
| `/composicao` | `#/composicao` | `Composicao` | 57 gestões e composição integral |
| `/acervo-digital` | `#/acervo-digital` | `AcervoDigital` | Núcleos do acervo e AtoM |
| `/arquivo` | `#/arquivo` | `Arquivo` | Arquivo e guarda permanente |
| `/biblioteca` | `#/biblioteca` | `Biblioteca` | Biblioteca Desembargador Marcílio Medeiros |
| `/capela` | `#/capela` | `Capela` | Capela Ecumênica |
| `/videos` | `#/videos` | `Videos` | Vídeos do TJSC |
| `/eventos` | `#/eventos` | `Eventos` | Vídeos de eventos |
| `/visitacoes` | `#/visitacoes` | `Visitacoes` | Horário, endereço e contatos |
| `/pesquisa` | `#/pesquisa` | `Pesquisa` | Orientação de pesquisa |
| `/atribuicoes` | `#/atribuicoes` | `Atribuicoes` | Atribuições institucionais |
| `/404` | `#/404` | `NotFound` | Erro de rota |

## Conteúdo Implementado

- Home enxuta com hero, bloco de sala permanente e quatro percursos editoriais.
- Museu e visitação com dados oficiais de horário, endereço, e-mail e telefones.
- Exposições com 32 registros, cartões homogêneos, imagem ampliável e link para a página oficial da exposição.
- Acervo digital com ligação para AtoM, com busca textual e atalhos públicos AtoM.
- História do Tribunal com panorama e 16 entradas de timeline institucional.
- História escrita com 2 publicações principais e 9 volumes oficiais em PDF.
- História oral com 16 vídeos, incluindo teaser, e miniaturas remotas em tamanho controlado (`200x134`).
- Composição do Tribunal por Gestão com 57 gestões, 57 fotos locais e composição integral por gestão.
- Páginas complementares: Arquivo, Biblioteca, Capela, Vídeos, Visitações, Pesquisa, Atribuições, Eventos.
- Modal de imagem acessível por teclado e foco, com `Dialog.Portal` preservando o escopo `.museu-tjsc-app`.
- Composição com padrão `radiogroup`: setas, Home/End, roving `tabIndex` e painel `aria-live`.
- Skip link compatível com hash routing: move foco para o `main` sem trocar rota.

## Estrutura De Arquivos

```text
client/
  index.html
  public/
    images/composicao/          57 fotos oficiais locais de gestões (gestao-YYYY-YYYY.jpg)
    images/*.svg                ilustrações editoriais locais para assets quebrados
    images/santa-catarina-alexandria.jpg
  src/
    main.tsx                    entrada React no mount #museu-tjsc-root
    index.css                   tokens visuais e estilos escopados em .museu-tjsc-app
    App.tsx                     ErrorBoundary, Router por hash, ScrollToTop, rotas
    components/
      Layout.tsx                navegação integrada ao portal, skip link, AtoM externo
      PageIntro.tsx             cabeçalho padrão de páginas com retorno "Memória TJSC"
      ExhibitionCard.tsx        card visual com link oficial da exposição
      ZoomableImageDialog.tsx   modal Radix portaled com lazy loading
      ErrorBoundary.tsx         fallback PT-BR, recarregar página
    data/
      memoria.ts                fontes, percursos, dados curatoriais, dados oficiais
      composicao.ts             57 gestões, composição integral, fotos locais
      types.ts                  Source, Exhibition, Publication, TimelineEvent,
                                 OralHistoryInterview, CompositionTerm
    lib/
      publicAssetUrl.ts         resolve assets locais por VITE_PUBLIC_ASSET_BASE
    pages/                      17 páginas públicas (inclui NotFound)
docs/
  arquitetura-uml.md            arquitetura, UML completo, decisões técnicas
  mapa-do-site.md               mapa do site com rotas, dados e dependências
scripts/
  scope-liferay-css.mjs         pós-processa CSS final para escopo .museu-tjsc-app
server/
  index.ts                      Express opcional para servir dist/public localmente
ideas.md                        direção de design vigente
README.md                       este arquivo
```

## Dados Estruturados

- `client/src/data/memoria.ts` exporta:
  - `VERIFIED_AT`: data de verificação interna da coleta (governança, não exibida).
  - `sources`: mapa de fontes por seção.
  - `museumFacts`: 5 fatos resumidos do museu.
  - `visitInfo`: endereço, horário, e-mail, telefones, limite de grupo e regra de agendamento.
  - `acervoCategories`: núcleos do acervo histórico.
  - `publications`: 2 publicações principais (livro/lançamento).
  - `writtenHistoryVolumes`: 9 volumes oficiais em PDF.
  - `exhibitions`: 32 exposições com `year`, `title`, `url`, `imageUrl`, `imageAlt`, `sourceUrl`.
  - `timeline`: 16 eventos da história institucional.
  - `videos`: 2 vídeos principais.
  - `eventVideos`: 4 vídeos de eventos.
  - `oralHistoryInterviews`: 16 vídeos de história oral, incluindo teaser.
  - `atribuicoes`: 12 atribuições institucionais formais.
  - `findExhibitionByTitle`: seletor por título para evitar dependência de índice.
  - `curatedPaths`: 4 percursos editoriais da home.
- `client/src/data/composicao.ts` exporta `compositionTerms`: 57 gestões com presidência, intervalo administrativo, foto local e lista de membros.
- `client/src/data/types.ts` exporta 6 tipos compartilhados: `Source`, `Exhibition`, `Publication`, `TimelineEvent`, `OralHistoryInterview`, `CompositionTerm`.

## Dados E Fontes

- A base estrutural veio de páginas oficiais sob `https://www.tjsc.jus.br/web/memoria` e `https://www.tjsc.jus.br/web/biblioteca`.
- Cada item de exposição/publicação mantém `sourceUrl` como governança interna.
- A interface pública não expõe rótulos de fonte nem usa expressões como `dados verificados`.
- Imagens oficiais remotas continuam remotas. SVGs editoriais locais cobrem assets quebrados onde a imagem oficial não pôde ser usada.

## Publicação Estática E Liferay

A publicação estática mínima gera `index.html` pequeno com referências relativas a `./assets/...`. Em fragment/snippet Liferay, CSS e JS podem apontar para `{{URL_BASE_DOS_ARQUIVOS}}/assets/...` quando os arquivos são publicados fora da própria página.

Pilares técnicos da compatibilidade Liferay:

- `vite.config.ts` define `base: "./"`.
- `client/src/App.tsx` usa Wouter com `useHashLocation`.
- `client/src/main.tsx` monta no elemento `#museu-tjsc-root`.
- `client/src/lib/publicAssetUrl.ts` resolve imagens/arquivos públicos via `VITE_PUBLIC_ASSET_BASE` ou caminho relativo.
- `client/src/index.css` ancora estilos em `.museu-tjsc-app`.
- `scripts/scope-liferay-css.mjs` escopa o CSS final em `.museu-tjsc-app` após o build do Vite.
- `ZoomableImageDialog` usa `Dialog.Portal` envolvendo o conteúdo portaled em um wrapper `.museu-tjsc-app` para que os estilos escopados continuem aplicando.

Variável `VITE_PUBLIC_ASSET_BASE` aponta para a base real dos arquivos quando `images/` não é servido no mesmo contexto do `index.html`. Não aponte para a URL da página Liferay.

Exemplo:

```bash
VITE_PUBLIC_ASSET_BASE="https://www.tjsc.jus.br/documents/d/memoria-museu/museu-static" npx pnpm@10.4.1 build
```

## Acessibilidade

- Skip link `Ir para o conteúdo principal` que move foco para `<main id="museu-tjsc-main" tabIndex={-1}>` sem alterar a rota.
- Links de navegação usam `aria-current="page"` quando ativos.
- Modal de imagem usa Radix Dialog: foco preso, fechamento por `Escape`, sobreposição clicável, botão de fechar com `aria-label`.
- Página de composição usa padrão `radiogroup` com `role="radio"`, `aria-checked`, navegação por setas/`Home`/`End` e painel lateral `aria-live="polite"`.
- Imagens ampliáveis usam `loading="lazy"` e `decoding="async"` por padrão.
- Texto alternativo descreve conteúdo, não metalinguagem.
- Erros usam mensagem em PT-BR sem expor stack trace em produção.

## Segurança E Governança

- Aplicação pública não injeta analytics nem fontes externas em runtime.
- `package.json` é marcado `"private": true` apenas para impedir publicação acidental no registro npm. Não tem relação com a visibilidade do repositório GitHub, que é público.
- Dev server e preview escutam em `127.0.0.1` por padrão.
- Servidor Express opcional escuta em `127.0.0.1` por padrão e desativa `X-Powered-By`. Adiciona `X-Content-Type-Options: nosniff` e `Referrer-Policy: strict-origin-when-cross-origin`. Para expor na rede, definir `HOST=0.0.0.0` explicitamente.
- `.gitignore` exclui `.project-config.json`, `.env*`, `node_modules/`, `dist/`, logs e artefatos locais.
- Não commitar credenciais, tokens, configurações locais nem chaves de API.

## Regras De Manutenção

- Não reintroduzir CTAs públicos genéricos tipo `Ver no TJSC` ou `SourceLink`.
- Não adicionar fato histórico sem fonte oficial registrada nos dados estruturados.
- Não transformar a home em índice administrativo; manter foco em acervo e percursos.
- Não duplicar na home conteúdos já presentes na faixa de percursos.
- Não ampliar miniaturas oficiais de baixa resolução além do tamanho nativo aproximado (`200x134` em História Oral).
- Não acessar dados por índice (`exhibitions[2]`, etc.). Use `findExhibitionByTitle` ou seletores nomeados.
- Não reintroduzir UI kit genérico (sonner, next-themes, react-hook-form, recharts, cmdk, etc.).
- Ao atualizar dados de novas páginas oficiais, registrar origem em `sourceUrl`/`sources`, mas manter o texto público natural.

## Diretrizes De Design

A direção de design vigente está em [`ideas.md`](ideas.md). Resumo:

- Fundo claro de papel institucional, texto grafite, bordô como acento.
- `Open Sans` em todo o site, inclusive títulos.
- Cards de exposição com moldura homogênea e `object-contain`.
- Miniaturas pequenas de História Oral mantêm tamanho nativo.
- Modal de imagem ocupa quase a viewport inteira com legenda discreta.

## Documentação Detalhada

- Arquitetura e UML: [`docs/arquitetura-uml.md`](docs/arquitetura-uml.md).
- Mapa do site: [`docs/mapa-do-site.md`](docs/mapa-do-site.md).
- Guia de execução local (Windows/macOS/Linux): [`docs/guia-execucao-local.md`](docs/guia-execucao-local.md).
- Guia de apresentação e geração de documentação para clientes: [`docs/guia-apresentacao.md`](docs/guia-apresentacao.md).
- Direção de design: [`ideas.md`](ideas.md).

## Próximos Pontos Naturais

- Revisão visual em navegador após qualquer alteração de dados.
- Validação contra fonte oficial para datas históricas antigas e slugs de exposições 2025.
- Validação editorial dos textos finais antes de publicação institucional.
- Eventual ajuste fino de responsividade após validação real em ambiente Liferay.
