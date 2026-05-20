# Direção De Design — Museu TJSC

Registro das decisões visuais vigentes do projeto `museu-tjsc`. Este arquivo deve guiar novas mudanças de interface.

## Direção Aceita

O site deve operar como miolo museológico/editorial do portal do Poder Judiciário de Santa Catarina, com clareza editorial, imagens em primeiro plano, navegação objetiva e baixa ornamentação.

## Referências Superadas

- A estética de galeria privada escura foi descartada.
- Serifas editoriais nos títulos foram descartadas para preservar homogeneidade com o portal TJSC.
- CTAs públicos de fonte, como `Ver no TJSC`, foram removidos.
- Rodapé próprio e blocos redundantes de contato/visitação foram removidos para não competir com o portal oficial.

## Linguagem Visual

- Fonte global: `Open Sans`.
- Fundo claro com sensação de papel institucional.
- Texto principal em grafite escuro.
- Bordô institucional como acento de navegação, divisórias e estados de interação.
- Imagens com moldura discreta, sem efeitos decorativos pesados.
- Layout com grandes respiros, grade editorial e cartões de leitura.

## Home

A home deve permanecer enxuta.

- Hero com documento/obra de forte presença visual.
- Bloco de sala permanente com imagem ampliável.
- Faixa horizontal de percursos como principal distribuição para conteúdos internos.
- Não duplicar abaixo da faixa conteúdos já representados pelos cartões de percurso.

Percursos atuais:

- `História do Tribunal` → `/historia`.
- `História escrita` → `/historia-escrita`.
- `Vozes da Justiça` → `/historia-oral`.
- `Arquivo, AtoM e Pesquisa` → `/acervo-digital`.

## Cartões E Imagens

- Exposições devem mostrar imagens/cartazes sem corte agressivo; usar `object-contain` em moldura homogênea.
- História Oral usa miniaturas oficiais remotas pequenas, em torno de `200x134`; não ampliar além do tamanho nativo aproximado.
- Imagens editoriais locais podem substituir assets oficiais quebrados quando não forem apresentadas como documento histórico.
- AtoM pode continuar externo, porque é plataforma própria de pesquisa.

## Publicação Em Portal/Liferay

- Manter compatibilidade com publicação estática incorporada: Vite com `base: "./"`, Wouter com `useHashLocation`, tema/estilos escopados em `.museu-tjsc-app` e imagens locais resolvidas por `publicAssetUrl`.
- A publicação incorporada espera `index.html` pequeno com `./assets/...` e, quando necessário, snippet Liferay apontando para `{{URL_BASE_DOS_ARQUIVOS}}/assets/...`.
- Em fragment/snippet Liferay, definir `VITE_PUBLIC_ASSET_BASE` quando `images/` e arquivos públicos não forem servidos no mesmo diretório/contexto do `index.html`. A variável deve apontar para a base real dos arquivos, não para a URL da página.
- Não hardcodar bases de publicação nos componentes; ajustar ambiente/build e manter o código chamando `publicAssetUrl` para assets públicos locais.

## Copy Pública

- Tom curatorial, direto e institucional.
- Não usar metalinguagem técnica: `protótipo`, termos técnicos de coleta de dados, `fonte oficial`, `dados verificados`, `página oficial`.
- Evitar termos com alusão criminal em CTAs/copy institucional.
- Evitar repetir informações administrativas já disponíveis no portal global.

## Manutenção

- Antes de acrescentar nova seção à home, verificar se ela não duplica um percurso existente.
- Antes de alterar fonte ou navegação, comparar com o portal TJSC.
- Antes de adicionar dado histórico, verificar se há fonte oficial em `client/src/data/memoria.ts` ou em nova coleta revisada a partir de página institucional.
