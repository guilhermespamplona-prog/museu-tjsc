# Diagramas UML — Arquivos PlantUML

Esta pasta contém os diagramas do projeto exportados a partir de `docs/arquitetura-uml.md`. Cada arquivo `.puml` pode ser aberto direto no VS Code (extensão PlantUML), em `https://www.plantuml.com/plantuml/uml` ou via Java/`plantuml.jar`.

Para regenerar a pasta, rode:

```bash
node scripts/extract-diagramas.mjs
```

Para gerar SVG/PNG de todos os diagramas, veja [`scripts/gerar-diagramas.sh`](../../scripts/gerar-diagramas.sh).

## Diagramas

- Diagrama De Pacotes: [`01-diagrama-de-pacotes.puml`](01-diagrama-de-pacotes.puml)
- Casos De Uso: [`02-casos-de-uso.puml`](02-casos-de-uso.puml)
- Componentes: [`03-componentes.puml`](03-componentes.puml)
- Classes De Dados: [`04-classes-de-dados.puml`](04-classes-de-dados.puml)
- Sequência De Inicialização: [`05-sequencia-de-inicializacao.puml`](05-sequencia-de-inicializacao.puml)
- Sequência De Navegação Hash: [`06-sequencia-de-navegacao-hash.puml`](06-sequencia-de-navegacao-hash.puml)
- Sequência De Skip Link: [`07-sequencia-de-skip-link.puml`](07-sequencia-de-skip-link.puml)
- Sequência De Composição Por Gestão: [`08-sequencia-de-composicao-por-gestao.puml`](08-sequencia-de-composicao-por-gestao.puml)
- Sequência De Imagem Ampliável: [`09-sequencia-de-imagem-ampliavel.puml`](09-sequencia-de-imagem-ampliavel.puml)
- Implantação: [`10-implantacao.puml`](10-implantacao.puml)
- Atividade De Publicação Liferay: [`11-atividade-de-publicacao-liferay.puml`](11-atividade-de-publicacao-liferay.puml)
- Estados Do Diálogo De Imagem: [`12-estados-do-dialogo-de-imagem.puml`](12-estados-do-dialogo-de-imagem.puml)
- Estados Da Grade De Composição: [`13-estados-da-grade-de-composicao.puml`](13-estados-da-grade-de-composicao.puml)
