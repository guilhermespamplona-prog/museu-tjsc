import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { ArrowRight, BookOpen, Clock, ExternalLink, Search, UserRound } from "lucide-react";

const libraryLinks = [
  { label: "Biblioteca digital", url: "https://www.tjsc.jus.br/web/biblioteca/biblioteca-digital" },
  { label: "Bibliotecas setoriais", url: "https://www.tjsc.jus.br/web/biblioteca/bibliotecas-setoriais" },
  { label: "Histórico", url: "https://www.tjsc.jus.br/web/biblioteca/historico" },
  { label: "Informes", url: "https://www.tjsc.jus.br/web/biblioteca/informes" },
  { label: "Regulamento", url: "https://www.tjsc.jus.br/web/biblioteca/regulamento" },
  { label: "Serviços", url: "https://www.tjsc.jus.br/web/biblioteca/servicos" },
  { label: "Sumário Online - Periódicos", url: "https://www.tjsc.jus.br/web/biblioteca/sumario-online" },
  { label: "Últimas aquisições", url: "https://www.tjsc.jus.br/web/biblioteca/ultimas-aquisicoes" },
];

const serviceLinks = [
  {
    label: "Acesso usuário / Renovação",
    description: "Acesse sua conta, acompanhe empréstimos e renove materiais vinculados ao acervo.",
    url: "https://biblioteca.tjsc.jus.br/login?redirect=/",
    icon: UserRound,
  },
  {
    label: "Consulte nosso acervo",
    description: "Pesquise livros, periódicos e demais itens disponíveis no catálogo da biblioteca.",
    url: "https://biblioteca.tjsc.jus.br/",
    icon: Search,
  },
  {
    label: "Aquisição de obras (Magistrados)",
    description: "Solicite aquisição de obras bibliográficas para apoio às atividades jurisdicionais.",
    url: "https://www.tjsc.jus.br/web/biblioteca/aquisicao-de-obras-bibliograficas",
    icon: BookOpen,
  },
  {
    label: "DeLivros - Busca e entrega",
    description: "Serviço de busca e entrega de materiais da biblioteca conforme regras institucionais.",
    url: "https://www.tjsc.jus.br/web/biblioteca/delivros-busca-e-entrega",
    icon: ArrowRight,
  },
  {
    label: "Contatos",
    description: "Canais de atendimento da Biblioteca Desembargador Marcílio Medeiros.",
    url: "https://www.tjsc.jus.br/web/biblioteca/contatos",
    icon: ExternalLink,
  },
];

const digitalLibraries = [
  {
    title: "Minha Biblioteca",
    description: "Mais de 3.000 obras jurídicas de editoras como Grupo-A, Grupo Gen-Atlas, Manole e Saraiva, entre outras.",
    url: "https://www.tjsc.jus.br/web/biblioteca/minha-biblioteca-acesso",
  },
  {
    title: "Revista dos Tribunais - Livros",
    description: "Ferramenta de pesquisa da Biblioteca Digital Proview, com aproximadamente 1.000 obras jurídicas.",
    url: "https://www.tjsc.jus.br/web/biblioteca/revista-dos-tribunais-acesso",
  },
  {
    title: "HeinOnline",
    description: "Acesso a 28 bibliotecas com artigos, revistas jurídicas institucionais, constituições e jurisprudência.",
    url: "https://www.tjsc.jus.br/web/biblioteca/heinonline-acesso",
  },
  {
    title: "Fórum",
    description: "Acesso a nove revistas jurídicas publicadas pela editora Fórum.",
    url: "https://www.tjsc.jus.br/web/biblioteca/forum",
  },
];

const hours = [
  { label: "Biblioteca do TJSC", lines: ["8h às 12h - somente público interno", "12h às 19h - público geral"] },
  { label: "Bibliotecas setoriais", lines: ["12h às 19h - público interno e externo"] },
];

export default function Biblioteca() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Biblioteca"
        title="Biblioteca Desembargador Marcílio Medeiros"
        description="Acervo jurídico, literário e digital para pesquisa, estudo e apoio às atividades do Judiciário catarinense."
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-t border-[#8b1d2c] pt-6">
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Acervo e atendimento</p>
            <div className="mt-5 grid gap-5 font-body text-lg leading-relaxed text-[#3a352f]">
              <p>
                A Biblioteca Desembargador Marcílio Medeiros conta com um dos mais completos e atualizados acervos jurídicos de Santa Catarina, com aproximadamente 40 mil exemplares entre livros e revistas científicas nas áreas do Direito e da propedêutica jurídica.
              </p>
              <p>
                Idealizada para prover conteúdo bibliográfico às atividades do Poder Judiciário, também disponibiliza o acervo para pesquisa e fotocópia, além de acesso à internet via wi-fi ao público em geral.
              </p>
            </div>
          </div>

          <aside className="h-fit border-t border-[#8b1d2c] bg-[#f2efe8] p-6">
            <div className="flex items-center gap-3 text-[#8b1d2c]">
              <Clock size={18} />
              <p className="font-ui text-[10px] uppercase tracking-[0.16em]">Horário de funcionamento</p>
            </div>
            <div className="mt-6 grid gap-5">
              {hours.map((item) => (
                <div key={item.label} className="border-t border-[#ddd6cc] pt-4">
                  <h2 className="font-display text-2xl leading-tight text-[#1f1e1c]">{item.label}</h2>
                  {item.lines.map((line) => (
                    <p key={line} className="mt-2 font-body text-sm leading-relaxed text-[#635b52]">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Acesso rápido</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Catálogo, renovação, serviços e atendimento em um só percurso.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-[220px] flex-col justify-between border-t border-[#8b1d2c] bg-[#fbfaf7] p-5 text-[#1f1e1c] transition hover:bg-white hover:text-[#8b1d2c]">
                <span>
                  <Icon size={20} className="text-[#8b1d2c]" />
                  <span className="mt-5 block font-ui text-[11px] uppercase tracking-[0.14em]">{item.label}</span>
                  <span className="mt-4 block font-body text-sm leading-relaxed text-[#635b52]">{item.description}</span>
                </span>
                <span className="mt-8 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-inherit">
                  Acessar <ArrowRight size={13} />
                </span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="grid gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-24">
        <div>
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Seções da biblioteca</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Serviços, normas, informes e publicações periódicas.</h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[#635b52]">
            A navegação da biblioteca reúne serviços operacionais, páginas institucionais e rotas de acompanhamento do acervo.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {libraryLinks.map((item) => (
            <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-t border-[#ddd6cc] py-5 font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c] transition hover:border-[#8b1d2c] hover:text-[#8b1d2c]">
              {item.label}
              <ArrowRight size={14} />
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#fbfaf7] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Biblioteca digital</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Bases digitais para pesquisa jurídica.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {digitalLibraries.map((item) => (
            <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-[260px] flex-col justify-between border-t border-[#8b1d2c] bg-[#f2efe8] p-6 text-[#1f1e1c] transition hover:bg-[#ebe5d9] hover:text-[#8b1d2c]">
              <span>
                <span className="font-display text-2xl leading-tight text-inherit">{item.title}</span>
                <span className="mt-5 block font-body text-sm leading-relaxed text-[#635b52]">{item.description}</span>
              </span>
              <span className="mt-8 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-inherit">
                Acessar base <ArrowRight size={13} />
              </span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
