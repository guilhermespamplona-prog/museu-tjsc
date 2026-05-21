import type { Exhibition, OralHistoryInterview, Publication, Source, TimelineEvent } from "./types";
import { publicAssetUrl } from "../lib/publicAssetUrl";

export const VERIFIED_AT = "2026-05-19";

export const sources = {
  home: {
    label: "Página inicial Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria",
    verifiedAt: VERIFIED_AT,
  },
  museum: {
    label: "Museu - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/museu",
    verifiedAt: VERIFIED_AT,
  },
  acervo: {
    label: "Acervo - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/acervo",
    verifiedAt: VERIFIED_AT,
  },
  exhibitions: {
    label: "Exposições do Museu - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/exposicoes-do-museu",
    verifiedAt: VERIFIED_AT,
  },
  history: {
    label: "História do Tribunal - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/historia-do-tribunal",
    verifiedAt: VERIFIED_AT,
  },
  writtenHistory: {
    label: "História Escrita - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/historia-escrita",
    verifiedAt: VERIFIED_AT,
  },
  oralHistory: {
    label: "História Oral - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/historia-oral",
    verifiedAt: VERIFIED_AT,
  },
  videos: {
    label: "Vídeos - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/videos",
    verifiedAt: VERIFIED_AT,
  },
  visitacoes: {
    label: "Visitações - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/visitacoes",
    verifiedAt: VERIFIED_AT,
  },
  pesquisa: {
    label: "Pesquisa - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/pesquisa",
    verifiedAt: VERIFIED_AT,
  },
  capela: {
    label: "Capela - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/capela",
    verifiedAt: VERIFIED_AT,
  },
  biblioteca: {
    label: "Biblioteca - TJSC",
    url: "https://www.tjsc.jus.br/web/biblioteca",
    verifiedAt: VERIFIED_AT,
  },
  arquivo: {
    label: "Arquivo - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/arquivo",
    verifiedAt: VERIFIED_AT,
  },
  eventos: {
    label: "Eventos - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/eventos",
    verifiedAt: VERIFIED_AT,
  },
  composicao: {
    label: "Composição do Tribunal por Gestão - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/composicao-do-tribunal-por-gestao",
    verifiedAt: VERIFIED_AT,
  },
  atribuicoes: {
    label: "Atribuições - Memória - TJSC",
    url: "https://www.tjsc.jus.br/web/memoria/atribuicoes",
    verifiedAt: VERIFIED_AT,
  },
} satisfies Record<string, Source>;

export const museumFacts = [
  "Processos judiciais são fontes históricas primárias produzidas sob o calor dos acontecimentos e com a fidedignidade exigida pelo aparato da Justiça.",
  "Antes da criação do Museu do Judiciário, documentos relevantes dos séculos XVIII, XIX e XX estavam se perdendo em comarcas e no Tribunal de Justiça de Santa Catarina.",
  "O Museu do Judiciário foi inaugurado em 1º de outubro de 1991, nas comemorações do centenário do Poder Judiciário de Santa Catarina.",
  "Em 2023, o espaço foi renomeado como Museu Desembargador Tycho Brahe Fernandes Neto.",
  "O acervo reúne processos, documentos, livros, armas, móveis, utensílios, esculturas, mobiliário antigo, vestes talares, retratos, fotografias e material audiovisual.",
];

export const visitInfo = {
  hours: "Segunda a sexta-feira, das 12h às 19h",
  address: "Rua Álvaro Millen da Silveira n. 208, sala HS12 no anexo, Centro, Florianópolis/SC",
  email: "dgdm.museu@tjsc.jus.br",
  phones: ["(48) 3287-2436", "(48) 3287-2438"],
  groupLimit: "Máximo de 20 pessoas por horário de visitação",
  scheduling: "Agendamento por telefone ou e-mail para grupos e visitas mediadas",
};

export const acervoCategories = [
  "Documentos manuscritos dos séculos XVIII, XIX e XX",
  "Processos judiciais históricos, incluindo registros sobre Contestado, divórcio e escravidão",
  "Esculturas, mobiliário antigo, vestes talares e objetos de servidores e magistrados",
  "Urnas de jurados, máquinas de datilografia, retratos, fotografias e material audiovisual",
];

export const publications: Publication[] = [
  {
    title: "Comarcas de Santa Catarina",
    subtitle: "Livro comemorativo dos 133 anos do TJSC",
    year: "2024",
    description: "Publicação com a história das comarcas de Santa Catarina.",
    url: "https://www.tjsc.jus.br/documents/10181/11662/Livro+das+Comarcas+2024.pdf/8749c000-45d6-12b3-62db-aeb281374740?t=1728411929054",
    imageUrl: publicAssetUrl("/images/comarcas-santa-catarina-editorial.svg"),
    imageAlt: "Ilustração editorial com mapa de Santa Catarina, documentos e arquitetura judiciária",
    sourceUrl: sources.writtenHistory.url,
  },
  {
    title: "Tribunal de Justiça de Santa Catarina: Desembargadores e Desembargadoras",
    subtitle: "Livro comemorativo dos 131 anos do TJSC",
    year: "2022",
    description: "Volumes oficiais com registros biográficos de desembargadores e desembargadoras do Tribunal.",
    url: "https://youtu.be/lUexlYXi3-g",
    imageUrl: "https://www.tjsc.jus.br/documents/7662376/7662468/TJSC-Desembargadores.jpeg.png/77b07476-973a-877f-7711-ffd8e3688f4a?t=1727798646978",
    imageAlt: "Capa do livro Tribunal de Justiça de Santa Catarina: Desembargadores e Desembargadoras, 1975 a 2007",
    sourceUrl: sources.writtenHistory.url,
  },
];

export const writtenHistoryVolumes: Publication[] = [
  { title: "Volume 1", subtitle: "Desembargadores e Desembargadoras de 1891 a 1894", year: "1891-1894", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-1-volume-2.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 2", subtitle: "Desembargadores e Desembargadoras de 1894 a 1895", year: "1894-1895", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-2-volume-2.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 3", subtitle: "Desembargadores e Desembargadoras de 1895 a 1908", year: "1895-1908", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-3-volume-3.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 4", subtitle: "Desembargadores e Desembargadoras de 1908 a 1929", year: "1908-1929", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-4-volume-4.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 5", subtitle: "Desembargadores e Desembargadoras de 1929", year: "1929", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-5-volume-5.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 6", subtitle: "Desembargadores e Desembargadoras de 1929 a 1968", year: "1929-1968", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-6-volume-6.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 7", subtitle: "Desembargadores e Desembargadoras de 1968 a 1975", year: "1968-1975", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-7-volume-7.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 8, Tomo I", subtitle: "Desembargadores e Desembargadoras de 1975 a 2007", year: "1975-2007", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-8-volume-8.pdf", sourceUrl: sources.writtenHistory.url },
  { title: "Volume 8, Tomo II", subtitle: "Desembargadores e Desembargadoras de 2008 a 2023", year: "2008-2023", description: "PDF da História Escrita.", url: "https://www2.tjsc.jus.br/web/tjsc/memorias/desembargadores-de-santa-catarina-capitulo-8-volume-8-parte-2.pdf", sourceUrl: sources.writtenHistory.url },
];

const expoUrl = (slug: string) => `https://www.tjsc.jus.br/web/memoria/exposicoes-do-museu/-/asset_publisher/dInRtmp80cBA/content/${slug}`;

export const exhibitions: Exhibition[] = [
  { year: "2025", title: "50 anos do Palácio da Justiça Ministro Luiz Gallotti", url: expoUrl("-2025-50-anos-do-palacio-da-justica-ministro-luiz-gallotti"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=24887710&t=1770386953625", imageAlt: "Registro visual da exposição 50 anos do Palácio da Justiça Ministro Luiz Gallotti", sourceUrl: sources.exhibitions.url },
  { year: "2025", title: "Ecos da Justiça em Santa Catarina", url: expoUrl("-2025-ecos-da-justica-em-santa-catarina"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=23928415&t=1770386919505", imageAlt: "Registro visual da exposição Ecos da Justiça em Santa Catarina", sourceUrl: sources.exhibitions.url },
  { year: "2025", title: "Do Arquivo ao AtoM: a história da Justiça para todos", url: expoUrl("03-2025-do-arquivo-ao-atom-a-historia-da-justica-para-todos"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=22069381&t=1770386505166", imageAlt: "Registro visual da exposição Do Arquivo ao AtoM", sourceUrl: sources.exhibitions.url },
  { year: "2025", title: "Mostra A Participação Feminina no Judiciário Catarinense", url: expoUrl("04-2025-mostra-a-participacao-feminina-no-judiciario-catarinense"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=21645512&t=1770387081837", imageAlt: "Registro visual da mostra A Participação Feminina no Judiciário Catarinense", sourceUrl: sources.exhibitions.url },
  { year: "2024", title: "A Revolução de 1930 na Justiça e no cotidiano catarinense", url: expoUrl("05-2024-a-revolucao-de-1930-na-justica-e-no-cotidiano-catarinense"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=20252671&t=1770386695357", imageAlt: "Registro visual da exposição A Revolução de 1930 na Justiça e no cotidiano catarinense", sourceUrl: sources.exhibitions.url },
  { year: "2024", title: "Um encontro com a História", url: expoUrl("06-2024-um-encontro-com-a-historia"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=19138342&t=1770387407557", imageAlt: "Registro visual da exposição Um encontro com a História", sourceUrl: sources.exhibitions.url },
  { year: "2023", title: "As oito sedes do Tribunal de Justiça de Santa Catarina e muitas histórias", url: expoUrl("07-2023-as-oito-sedes-do-tribunal-de-justica-de-santa-catarina-e-muitas-historias-locais-de-trabalho-lugares-de-memoria"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=17263774&t=1770387499099", imageAlt: "Registro visual da exposição As oito sedes do Tribunal de Justiça de Santa Catarina", sourceUrl: sources.exhibitions.url },
  { year: "2023", title: "132 anos de história", url: expoUrl("08-2023-132-anos-de-historia"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=17543819&t=1770387612446", imageAlt: "Registro visual da exposição 132 anos de história", sourceUrl: sources.exhibitions.url },
  { year: "2022", title: "Arquivos da Justiça, narrativas da cidade: comarca de São Francisco do Sul", url: expoUrl("09-2022-arquivos-da-justica-narrativas-da-cidade-comarca-de-sao-francisco-do-sul"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=13810794&t=1770388348471", imageAlt: "Registro visual da exposição Arquivos da Justiça, narrativas da cidade", sourceUrl: sources.exhibitions.url },
  { year: "2021", title: "Um Palácio de Memórias: os 130 anos do TJSC", url: expoUrl("10-2021-um-palacio-de-memorias-os-130-anos-do-tjsc-e-os-registros-historicos-preservados-pelo-poder-judiciario-catarinense"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=11827900&t=1770388584001", imageAlt: "Registro visual da exposição Um Palácio de Memórias", sourceUrl: sources.exhibitions.url },
  { year: "2020", title: "Histórias e conflitos na cidade dos príncipes: 130 anos da comarca de Joinville", url: expoUrl("11-2020-historias-e-conflitos-na-cidade-dos-principes-130-anos-da-comarca-de-joinville"), imageUrl: "https://www.tjsc.jus.br/documents/66294/2623449/expojoin+2/1c0bc7c2-54a1-80f3-865e-0fcd6fe6107b?t=1582756458659", imageAlt: "Registro visual da exposição sobre a comarca de Joinville", sourceUrl: sources.exhibitions.url },
  { year: "2020", title: "Nas correntezas da Justiça, redemoinhos: 130 anos da Comarca de Blumenau", url: expoUrl("12-2020-nas-correntezas-da-justica-redemoinhos-130-anos-da-comarca-de-blumenau"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=5380259&t=1770388830985", imageAlt: "Registro visual da exposição sobre a Comarca de Blumenau", sourceUrl: sources.exhibitions.url },
  { year: "2019", title: "Nova exposição permanente", url: expoUrl("13-2019-nova-exposicao-permanente"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=4369120&t=1770388954554", imageAlt: "Sala da exposição permanente", sourceUrl: sources.exhibitions.url },
  { year: "2019", title: "(Re) construindo memórias: o antigo auditório do Tribunal Pleno e os 128 anos de criação do TJSC", url: expoUrl("14-2019-re-construindo-memorias-o-antigo-auditorio-do-tribunal-pleno-e-os-128-anos-de-criacao-do-tjsc"), imageUrl: "https://www.tjsc.jus.br/documents/10994886/10995385/4369681/9a46e2b9-c7c2-c0fa-8680-ba6c92b8af48?t=1624117394807", imageAlt: "Registro visual da exposição sobre o antigo auditório do Tribunal Pleno", sourceUrl: sources.exhibitions.url },
  { year: "2019", title: "Reciclando ideias - liberdade através da arte", url: expoUrl("15-2019-reciclando-ideias-liberdade-atraves-da-arte"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/4105341", imageAlt: "Registro visual da exposição Reciclando ideias", sourceUrl: sources.exhibitions.url },
  { year: "2019", title: "M - Meu Lugar na Sociedade", url: expoUrl("16-2019-m-meu-lugar-na-sociedade"), imageUrl: publicAssetUrl("/images/m-meu-lugar-na-sociedade-editorial.svg"), imageAlt: "Ilustração editorial sobre pertencimento, sociedade e memória", sourceUrl: sources.exhibitions.url },
  { year: "2019", title: "Nas ruínas de Curitibanos: vestígios de uma invasão durante a Guerra do Contestado", url: expoUrl("17-2019-nas-ruinas-de-curitibanos-vestigios-de-uma-invasao-durante-a-guerra-do-contestado"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=4304739&t=1770389418794", imageAlt: "Autos judiciais danificados na Guerra do Contestado", sourceUrl: sources.exhibitions.url },
  { year: "2019", title: "Setenta e cinco anos de instalação da comarca de Criciúma", url: expoUrl("18-2019-setenta-e-cinco-anos-de-instalacao-da-comarca-de-criciuma-a-cidade-e-a-justica-contadas-em-documentos-judiciais"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/3984045", imageAlt: "Registro visual da exposição sobre a comarca de Criciúma", sourceUrl: sources.exhibitions.url },
  { year: "2018", title: "Águas Revoltas - A Justiça Catarinense e a Revolução Federalista", url: expoUrl("19-2018-aguas-revoltas-a-justica-catarinense-e-a-revolucao-federalista"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/3305443", imageAlt: "Registro visual da exposição Águas Revoltas", sourceUrl: sources.exhibitions.url },
  { year: "2017", title: "Laguna", url: expoUrl("20-2017-laguna"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/3173155", imageAlt: "Registro visual da exposição Laguna", sourceUrl: sources.exhibitions.url },
  { year: "2016", title: "A máquina, a terra, a luta: 100 anos do fim da Guerra do Contestado", url: expoUrl("21-2016-a-maquina-a-terra-a-luta-100-anos-do-fim-da-guerra-do-contestado"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2706100", imageAlt: "Registro visual da exposição sobre a Guerra do Contestado", sourceUrl: sources.exhibitions.url },
  { year: "2016", title: "O Museu como espaço para a criação literária", url: expoUrl("22-2016-o-museu-como-espaco-para-a-criacao-literaria"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2063461", imageAlt: "Registro visual da exposição O Museu como espaço para a criação literária", sourceUrl: sources.exhibitions.url },
  { year: "2016", title: "Um pouco da trajetória dos 10 anos da Lei n. 11.340/06 - Lei Maria da Penha", url: expoUrl("23-2016-um-pouco-da-trajetoria-dos-10-anos-da-lei-n-11-340-06-lei-maria-da-penha"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2765680", imageAlt: "Registro visual da exposição sobre a Lei Maria da Penha", sourceUrl: sources.exhibitions.url },
  { year: "2016", title: "Da Casa da Câmara ao Palácio Ministro Luís Gallotti: as sedes do Tribunal de Justiça de Santa Catarina", url: expoUrl("24-2016-da-casa-da-camara-ao-palacio-ministro-luis-gallotti-as-sedes-do-tribunal-de-justica-de-santa-catarina"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/1573369", imageAlt: "Registro visual da exposição sobre as sedes do Tribunal", sourceUrl: sources.exhibitions.url },
  { year: "2015", title: "Museus e Memórias Indígenas", url: expoUrl("25-2015-museus-e-memorias-indigenas"), imageUrl: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2343964", imageAlt: "Registro visual da exposição Museus e Memórias Indígenas", sourceUrl: sources.exhibitions.url },
  { year: "2015", title: "13ª Semana de Museus - Museus para uma Sociedade Sustentável", url: expoUrl("26-2015-13-semana-de-museus-museus-para-uma-sociedade-sustentavel-e-6-semana-do-meio-ambiente-no-poder-judiciario-de-santa-catarina"), imageUrl: publicAssetUrl("/images/semana-museus-sustentavel-editorial.svg"), imageAlt: "Ilustração editorial sobre museus, patrimônio e sustentabilidade", sourceUrl: sources.exhibitions.url },
  { year: "2010", title: "Comemoração dos 120 anos do TJSC e 20 anos do Museu do Judiciário Catarinense", url: expoUrl("27-2010-comemoracao-dos-120-anos-do-tjsc-e-20-anos-do-museu-do-judiciario-catarinense"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=12326010&t=1770391421806", imageAlt: "Registro visual da comemoração dos 120 anos do TJSC", sourceUrl: sources.exhibitions.url },
  { year: "2006", title: "Comemoração dos 115 anos do TJSC", url: expoUrl("28-2006-comemoracao-dos-115-anos-do-tjsc"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=17378773&t=1770392105950", imageAlt: "Registro visual da comemoração dos 115 anos do TJSC", sourceUrl: sources.exhibitions.url },
  { year: "2004", title: "Comemoração dos 113 anos do TJSC", url: expoUrl("29-2004-comemoracao-dos-113-anos-do-tjsc"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=24159405&t=1770392471610", imageAlt: "Registro visual da comemoração dos 113 anos do TJSC", sourceUrl: sources.exhibitions.url },
  { year: "2003", title: "Comemoração dos 112 anos do TJSC", url: expoUrl("30-2003-comemoracao-dos-112-anos-do-tjsc"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=24159405&t=1770392471610", imageAlt: "Registro visual da comemoração dos 112 anos do TJSC", sourceUrl: sources.exhibitions.url },
  { year: "2002", title: "Comemoração dos 111 anos do TJSC", url: expoUrl("31-2002-comemoracao-dos-111-anos-do-tjsc"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=24159405&t=1770392471610", imageAlt: "Registro visual da comemoração dos 111 anos do TJSC", sourceUrl: sources.exhibitions.url },
  { year: "2001", title: "Exposição permanente", url: expoUrl("32-2001-exposicao-permanente"), imageUrl: "https://www.tjsc.jus.br/image/journal/article?img_id=12326010&t=1770391421806", imageAlt: "Sala da exposição permanente", sourceUrl: sources.exhibitions.url },
];

export const timeline: TimelineEvent[] = [
  { year: "Período colonial", title: "Ouvidores e tribunais da relação", description: "A administração da Justiça servia à Coroa portuguesa por meio de ouvidores e tribunais da relação, instâncias que antecederam a organização judiciária estadual." },
  { year: "1824", title: "Centralismo imperial", description: "A Independência e a Constituição de 1824 mantiveram a Justiça fortemente centralizada, reforçada pelo Poder Moderador atribuído ao soberano." },
  { year: "1889-1891", title: "República e Justiça dual", description: "Com a República e a Constituição de 1891, a organização judiciária deixou de ser única e passou ao sistema dual, com Justiça Federal e Justiças estaduais." },
  { year: "1891", title: "Criação do Tribunal", description: "A Constituição catarinense instituiu o Superior Tribunal de Justiça como órgão de segunda instância; cinco desembargadores foram nomeados pela Resolução n. 285." },
  { year: "1891-1892", title: "Comarcas catarinenses", description: "Após a divisão inicial em quatorze comarcas, a Lei Estadual n. 16 criou Brusque e São Joaquim, instaladas em 1892." },
  { year: "1893-1894", title: "Tempos de turbulência", description: "A Revolução Federalista impactou a Capital e a Justiça catarinense; por breve período, o Tribunal voltou a chamar-se Tribunal da Relação." },
  { year: "1899", title: "Primeiros passos estruturais", description: "Felipe Schmidt alterou a divisão judiciária e passou a exigir experiência e formação em Direito para nomeações de juízes." },
  { year: "1908-1929", title: "Rua Jerônimo Coelho", description: "O Tribunal ocupou prédio que abrigara a Assembleia Legislativa; no período, cresceram lentamente o número de desembargadores e as comarcas." },
  { year: "1929-1968", title: "Praça Pereira Oliveira", description: "A sede transferiu-se para edifício reformulado especialmente para o Poder Judiciário, onde funcionou até 1968." },
  { year: "Década de 1950", title: "Primeira magistrada do país", description: "Thereza Grisólia Tang ingressou na magistratura estadual, enfrentou resistências de gênero e depois ocupou a Corregedoria e a Presidência do TJSC." },
  { year: "1968-1975", title: "Instalações provisórias", description: "O Tribunal de Justiça e a estrutura judiciária de Primeiro Grau em Florianópolis funcionaram nas antigas instalações da Agência Ford, na Rua Hoepcke." },
  { year: "1990", title: "Fundo de Reaparelhamento", description: "A criação do Fundo de Reaparelhamento da Justiça tornou-se divisor de águas para obras, tecnologia, infraestrutura e modernização institucional." },
  { year: "1996", title: "Automação da Justiça", description: "A aquisição do Sistema de Automação da Justiça permitiu informatizar atividades processuais e administrativas do Poder Judiciário catarinense." },
  { year: "Século XXI", title: "Crescimento e processo digital", description: "A ampliação do Tribunal e os investimentos em tecnologia prepararam a transição dos processos em papel para a tramitação eletrônica." },
  { year: "2013", title: "Sala-cofre", description: "A sala-cofre certificada passou a proteger informações contra incêndio, inundação, arrombamento e outros incidentes." },
  { year: "2023", title: "Eficiência reconhecida", description: "O TJSC recebeu o Prêmio CNJ de Qualidade, categoria ouro, em reconhecimento à eficiência institucional." },
];

export const videos = [
  { title: "Vídeo institucional histórico", description: "Aspectos gerais referentes à estrutura organizacional e trajetória histórica do TJSC até o ano de 2015.", url: "https://www.youtube.com/watch?v=9Wu6O-AWd7w&list=PLf0iUAhRkttMzc5eOwmr1lcwtPdw7ABCg&index=1" },
  { title: "Memórias da Justiça Catarinense em nossas falas", description: "Documentário produzido pelo Museu do Judiciário a partir de depoimentos de servidores e magistrados de 23 comarcas.", url: "https://youtu.be/6_3I6DCqICs" },
];

export const eventVideos = [
  { title: "Palestra dia 5 de setembro de 2019 - manhã", url: "https://www.youtube.com/watch?v=hpkn_eDgcr4" },
  { title: "Palestra dia 5 de setembro de 2019 - tarde", url: "https://www.youtube.com/watch?v=VtNk4lHyRs0" },
  { title: "Palestra dia 6 de setembro de 2019 - manhã", url: "https://www.youtube.com/watch?v=2lDdUNMxzSI" },
  { title: "Palestra dia 6 de setembro de 2019 - tarde", url: "https://www.youtube.com/watch?v=KKm55How5SI" },
];

export const oralHistoryInterviews: OralHistoryInterview[] = [
  { name: "Teaser do projeto", url: "https://youtu.be/0cX7Ey5_-20", imageUrl: "https://www.tjsc.jus.br/documents/7662376/0/banner_memorias_200x134.png/6afb5b94-2fbb-79c9-7b40-4ba3615c9821?t=1635518409787", imageAlt: "Imagem do projeto Memórias da Justiça" },
  { name: "Tycho Brahe Fernandes Neto", url: "https://youtu.be/pwqC_J5dKXQ", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_tycho_200x134.png/e8610756-d620-7911-3393-3e67c93bcd73?t=1635518845555", imageAlt: "Miniatura da entrevista de Tycho Brahe Fernandes Neto" },
  { name: "João Martins", url: "https://youtu.be/JLNUyPW7GgA", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_martins_200x134.png/679814f1-f8f2-29b4-b30e-50b8b0671070?t=1635518846082", imageAlt: "Miniatura da entrevista de João Martins" },
  { name: "Francisco Xavier Medeiros Vieira", url: "https://youtu.be/YCmzF1JTguo", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_xavier_200x134.png/c78dff8f-1937-50d7-3788-dfae7aea7dc4?t=1635518923215", imageAlt: "Miniatura da entrevista de Francisco Xavier Medeiros Vieira" },
  { name: "João Schaefer", url: "https://youtu.be/3w-TyO9s7Uc", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_joaoschaefer_200x134.png/c6a0fc4c-e719-4810-3567-781b98a4e229?t=1635518846157", imageAlt: "Miniatura da entrevista de João Schaefer" },
  { name: "Antônio Fernando do Amaral e Silva", url: "https://youtu.be/pPBoZmbe3E4", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_amaral_200x134+%281%29.png/157f539c-3f9c-8881-63e9-91477af0a978?t=1635518846538", imageAlt: "Miniatura da entrevista de Antônio Fernando do Amaral e Silva" },
  { name: "Jorge Mussi", url: "https://youtu.be/2QVx8g39sic", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_mussi_200x134.png/5ca9231e-3abd-06f0-5823-0bd81c373016?t=1635518846001", imageAlt: "Miniatura da entrevista de Jorge Mussi" },
  { name: "Pedro Manoel Abreu", url: "https://youtu.be/CzKy1bK-vsg", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_pedroabreu_200x134.png/370db892-6caf-5c64-73d0-ea7a33b9e505?t=1635518845836", imageAlt: "Miniatura da entrevista de Pedro Manoel Abreu" },
  { name: "Francisco José Rodrigues de Oliveira Filho", url: "https://youtu.be/XP7lM_FVVIs", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_franciscooliveira_200x134.png/9b32f66c-0a47-5789-13f9-0884395c3d57?t=1635518846352", imageAlt: "Miniatura da entrevista de Francisco José Rodrigues de Oliveira Filho" },
  { name: "Nelson Schaefer Martins", url: "https://youtu.be/8ozeHx6OD2Q", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_nelson_200x134.png/3e5c1a14-a386-096d-8cc1-e01277f68cee?t=1635518845914", imageAlt: "Miniatura da entrevista de Nelson Schaefer Martins" },
  { name: "José Antônio Torres Marques", url: "https://youtu.be/6a3b_3zjQTE", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_torres_200x134.png/31166dd7-00cd-fb70-55f8-5bb7d26a14bb?t=1635518845755", imageAlt: "Miniatura da entrevista de José Antônio Torres Marques" },
  { name: "Rodrigo Tolentino de Carvalho Collaço", url: "https://youtu.be/7oaqYvb_WV4", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_collaco_200x134.png/55fd496b-1a72-8c91-ef04-264126aac54e?t=1635518846412", imageAlt: "Miniatura da entrevista de Rodrigo Tolentino de Carvalho Collaço" },
  { name: "Jaime Sprícigo", url: "https://youtu.be/ARcd2GKiJBI", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_jaime_200x134.png/951f40af-863b-6d9c-de1f-5e45b4750521?t=1635518846253", imageAlt: "Miniatura da entrevista de Jaime Sprícigo" },
  { name: "Célia Vieira Bucchi", url: "https://youtu.be/GPif1FlF5n8", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner_celia_200x134.png/b3533945-df87-a137-0c3a-b672c9169a6c?t=1635518846472", imageAlt: "Miniatura da entrevista de Célia Vieira Bucchi" },
  { name: "Ricardo Roesler", url: "https://youtu.be/nZFxQxX7K8c", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/WhatsApp+Image+2024-05-10+at+14.03.48.jpeg/ad95927a-9796-b1bf-1510-7abd65c188de?t=1715360703793", imageAlt: "Miniatura da entrevista de Ricardo Roesler" },
  { name: "João Henrique Blasi", url: "https://youtu.be/OGbm9sblmoo", imageUrl: "https://www.tjsc.jus.br/documents/7662376/11978712/banner-interno-memorias-Blasi.png/3e12846d-dc0f-0676-b0b3-954bd2525bcd?t=1742824143025", imageAlt: "Miniatura da entrevista de João Henrique Blasi" },
];

export const atribuicoes = [
  "Analisar a aquisição de objetos isolados e acervos, providenciando, quando for o caso, a coleta e as doações.",
  "Elaborar e implementar o plano museológico e revisá-lo pelo menos a cada 10 anos.",
  "Realizar pesquisa com vistas ao recolhimento, à classificação e à exposição de objetos e documentos que representam o patrimônio cultural do PJSC.",
  "Atender aos pedidos de pesquisa acadêmica, científica ou histórica.",
  "Complementar as descrições das coleções e dos fundos no sistema AtoM ou em outros sistemas definidos pela administração.",
  "Organizar, guardar e preservar os processos, documentos, livros, armas, móveis e utensílios identificados como históricos pelo PJSC.",
  "Inventariar o acervo e zelar pela segurança e manutenção permanente do acervo histórico do PJSC.",
  "Propor eventos culturais e mostras permanentes, temporárias e itinerantes do acervo para visitação pública.",
  "Recepcionar visitantes e promover visitação mediada do Museu Desembargador Tycho Brahe Fernandes Neto.",
  "Coordenar atividades administrativas do Museu e o funcionamento da Capela Ecumênica do Judiciário catarinense.",
  "Manifestar-se em processos relativos ao descarte, baixa, transferência e empréstimo de bens do acervo.",
  "Reproduzir documentos históricos por meio de equipamento eletrônico que não prejudique sua qualidade e conservação.",
];

export const findExhibitionByTitle = (titleStart: string) =>
  exhibitions.find((item) => item.title.startsWith(titleStart)) ?? exhibitions[0];

const historyPathImage = findExhibitionByTitle("As oito sedes do Tribunal");
const acervoPathImage = findExhibitionByTitle("Do Arquivo ao AtoM");
const writtenHistoryPathImage = publications.find((item) => item.imageUrl) ?? publications[0];
const oralHistoryPathImage = oralHistoryInterviews.find((item) => item.imageUrl) ?? oralHistoryInterviews[0];

export const curatedPaths = [
  { title: "História do Tribunal", eyebrow: "Percurso histórico", description: "Dos ouvidores coloniais à Justiça digital, acompanhe a criação do Tribunal, suas comarcas, sedes, turbulências políticas e modernização institucional.", href: "/historia", imageUrl: historyPathImage.imageUrl, imageAlt: historyPathImage.imageAlt, actionLabel: "Abrir percurso" },
  { title: "História escrita", eyebrow: "Publicações", description: "Acesse livros, volumes oficiais e registros audiovisuais sobre comarcas, magistrados e personagens da Justiça catarinense.", href: "/historia-escrita", imageUrl: writtenHistoryPathImage.imageUrl, imageAlt: writtenHistoryPathImage.imageAlt, actionLabel: "Acessar materiais" },
  { title: "Vozes da Justiça", eyebrow: "História oral", description: "Entrevistas em vídeo preservam experiências de magistrados e servidores que atravessaram a história institucional.", href: "/historia-oral", imageUrl: oralHistoryPathImage.imageUrl, imageAlt: oralHistoryPathImage.imageAlt, actionLabel: "Assistir entrevistas" },
  { title: "Arquivo, AtoM e Pesquisa", eyebrow: "Acervo", description: "Entenda como documentos, descrições arquivísticas e pesquisa histórica se conectam no repositório digital.", href: "/acervo-digital", imageUrl: acervoPathImage.imageUrl, imageAlt: acervoPathImage.imageAlt, actionLabel: "Explorar acervo" },
];
