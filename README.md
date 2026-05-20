# Museu TJSC

Site React/Vite para reformular a área de Memória do Poder Judiciário de Santa Catarina como experiência museológica/editorial integrada ao portal institucional do TJSC.

O projeto não é um backend de acervo. É uma aplicação pública estática, com dados estruturados no código, páginas curatoriais e links controlados para plataformas oficiais quando necessário.

## Estado Atual

- Repositório privado: `https://github.com/guilhermespamplona-prog/museu-tjsc`.
- Ramo principal: `main`.
- Fase: aplicação editorial funcional com conteúdo oficial estruturado, rotas internas completas, adaptação para publicação em Liferay e compilação validada.
- Validação corrente: `npx pnpm@10.4.1 check` e `npx pnpm@10.4.1 build` passam.

## Documentação De Arquitetura E UML

- A documentação técnica detalhada para produzir diagramas UML está em [`docs/arquitetura-uml.md`](docs/arquitetura-uml.md).
- O documento descreve atores, fronteiras do sistema, pacotes, componentes React, entidades de dados, rotas, fluxos de execução, publicação Liferay e blocos PlantUML prontos para adaptar.
- Use esse arquivo como fonte principal para diagramas de casos de uso, componentes, classes, sequência, implantação e atividade.

## Direção Do Produto

- Funcionar como miolo do portal oficial do TJSC, sem competir com cabeçalho/rodapé institucionais.
- Priorizar experiência de museu público: imagem, acervo, história institucional e percursos de leitura.
- Evitar metalinguagem pública: não usar `protótipo`, termos técnicos de coleta de dados, `fonte oficial`, `dados verificados`, `Ver no TJSC` ou equivalentes na interface.
- Manter AtoM como plataforma externa de pesquisa avançada, não como experiência principal.
- Reconstruir as páginas principais dentro do app em vez de apenas redirecionar para o portal antigo.

## Pilha Técnica

- React `19.2`.
- Vite `7.1`.
- TypeScript `5.6`.
- Tailwind CSS `4`.
- Wouter para roteamento.
- Express apenas para servir a compilação em produção.
- Fonte global: `Open Sans`, alinhada ao portal TJSC.

## Comandos

Neste ambiente, `pnpm` e `corepack` podem não estar disponíveis diretamente. Use `npx pnpm@10.4.1`.

```bash
npx pnpm@10.4.1 install
npx pnpm@10.4.1 dev
npx pnpm@10.4.1 check
npx pnpm@10.4.1 build
npx pnpm@10.4.1 preview
npx pnpm@10.4.1 start
```

Notas:

- `dev` usa Vite com porta preferencial `3000`.
- `preview` usa a pré-visualização do Vite, normalmente em `4173`.
- `build` gera `dist/public` e empacota `server/index.ts` em `dist/index.js`.
- Os scripts Vite usam `NODE_OPTIONS=--disable-warning=DEP0205` para suprimir aviso conhecido da cadeia de ferramentas.

## Conteúdo Implementado

- Home enxuta com hero, sala permanente e quatro percursos editoriais.
- Museu e visitação com dados oficiais de horário, endereço, e-mail e telefones.
- Exposições com 32 registros e imagens/cartazes em cartões homogêneos.
- Acervo digital com ligação para AtoM.
- História do Tribunal com panorama e timeline institucional.
- História escrita com 2 publicações principais e 9 volumes oficiais em PDF.
- História oral com 16 entrevistas e miniaturas oficiais remotas em tamanho controlado.
- Composição do Tribunal por Gestão com 57 gestões, 57 fotos locais e composição integral por gestão.
- Páginas complementares: Arquivo, Biblioteca, Capela, Vídeos, Visitações, Pesquisa, Atribuições, Eventos e Publicações.

## Rotas

- `/`
- `/museu`
- `/acervo-digital`
- `/historia`
- `/historia-oral`
- `/historia-escrita`
- `/capela`
- `/videos`
- `/publicacoes`
- `/arquivo`
- `/biblioteca`
- `/composicao`
- `/exposicoes`
- `/visitacoes`
- `/pesquisa`
- `/atribuicoes`
- `/eventos`

## Estrutura Principal

```text
client/
  index.html
  public/
    images/composicao/          57 fotos oficiais locais de gestões
    images/*.svg                ilustrações editoriais locais para assets quebrados
  src/
    App.tsx                     rotas Wouter
    main.tsx                    entrada React e métricas condicionais
    index.css                   tokens globais e Open Sans
    components/
      Layout.tsx                navegação integrada ao portal
      PageIntro.tsx             cabeçalho padrão de páginas
      ExhibitionCard.tsx        card visual de exposição
      ZoomableImageDialog.tsx   imagem ampliável com legenda
    data/
      memoria.ts                dados curatoriais e oficiais do site Memória TJSC
      composicao.ts             gestões, fotos e composições integrais
      types.ts                  tipos compartilhados
    pages/                      páginas públicas
server/
  index.ts                      servidor Express para produção
shared/
  const.ts                      compatibilidade do template base
```

## Dados E Fontes

- A base estrutural veio de páginas oficiais sob `https://www.tjsc.jus.br/web/memoria`.
- A coleta dos dados deve partir das páginas institucionais listadas e ser revisada antes de entrar nos arquivos estruturados.
- `client/src/data/memoria.ts` mantém `sourceUrl` e dados de origem como governança interna.
- A interface pública não expõe botões genéricos de fonte nem chama o conteúdo de verificado.
- Imagens oficiais remotas continuam remotas quando o download servidor-servidor retorna bloqueio.
- Ilustrações locais são usadas apenas quando o asset oficial não pôde ser usado como imagem documental.

## Publicação Estática E Liferay

- A publicação estática mínima deve gerar um `index.html` pequeno e referências relativas para CSS e JavaScript em `./assets/...`.
- Em fragment/snippet Liferay, CSS e JS podem apontar para `{{URL_BASE_DOS_ARQUIVOS}}/assets/...` quando os arquivos são publicados fora da própria página.
- Três requisitos técnicos sustentam essa publicação: `base: "./"` no Vite, roteamento por hash com `useHashLocation` e resolução configurável de assets públicos.
- A implementação atual cobre esses pontos: `vite.config.ts` define `base: "./"`, `client/src/App.tsx` usa Wouter com `useHashLocation`, `client/src/lib/publicAssetUrl.ts` resolve imagens/arquivos públicos via `VITE_PUBLIC_ASSET_BASE` ou caminho relativo, e `ThemeContext`/`index.css` escopam tema e estilos em `.museu-tjsc-app` para reduzir colisões com o portal hospedeiro.
- `VITE_PUBLIC_ASSET_BASE` deve apontar para a base real dos arquivos de imagem/estáticos quando `images/` não for servido no mesmo contexto de diretório do `index.html`. Isso é especialmente importante na publicação como fragment/snippet Liferay, em que o HTML pode residir em uma página e os arquivos podem estar em Documentos e Mídia, Client Extension ou CDN interno.
- Não apontar `VITE_PUBLIC_ASSET_BASE` para a URL da página Liferay. Aponte para a pasta/base que contém `images/` e demais arquivos públicos esperados pelo app.

Exemplo de build com base externa de imagens/estáticos:

```bash
VITE_PUBLIC_ASSET_BASE="https://www.tjsc.jus.br/documents/d/memoria-museu/museu-static" npx pnpm@10.4.1 build
```

## Decisões Visuais

- Referência vigente: Art Institute of Chicago, por ser museu público editorial, claro e imagem-first.
- Referências anteriores como Van de Weghe não são mais diretriz principal.
- Paleta clara com fundo de papel, texto grafite e bordô institucional.
- Tipografia integral em `Open Sans`, inclusive títulos.
- Cards de exposição usam moldura homogênea e `object-contain` para evitar corte de cartazes/banners.
- Miniaturas de História Oral são pequenas (`200x134`) e não devem ser ampliadas para cartões largos.

## Métricas E Segredos

- `client/src/main.tsx` injeta Umami apenas quando variáveis de ambiente estão definidas.
- Não commitar `.project-config.json`, `.env*`, logs, credenciais ou artefatos locais de desenvolvimento.
- `.gitignore` deve continuar excluindo configurações locais, dependências, builds e arquivos temporários.

## Regras De Manutenção

- Não reintroduzir `SourceLink`, `Ver no TJSC` ou CTAs públicos equivalentes.
- Não adicionar afirmação histórica sem fonte oficial nos dados estruturados.
- Não transformar a home em índice administrativo; manter foco em acervo e percursos.
- Não duplicar na home conteúdos que já aparecem na faixa de percursos.
- Não ampliar miniaturas oficiais de baixa resolução além do tamanho nativo aproximado.
- Ao atualizar dados a partir de novas páginas, registrar origem nos dados, mas manter o texto público natural.

## Próximos Pontos Naturais

- Revisão visual em navegador para `/`, `/historia-oral`, `/exposicoes`, `/historia-escrita` e `/composicao`.
- Ajuste fino de responsividade após validação visual real.
- Revisão editorial dos textos finais antes de publicação institucional.
- Eventual registro Git separado para documentação, se esta atualização for aprovada.
