import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { timeline } from "@/data/memoria";

export default function Historia() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Percurso histórico"
        title="História do Tribunal"
        description="Da Justiça colonial à tramitação eletrônica, acompanhe fatos, instituições e mudanças estruturais que formaram o Poder Judiciário catarinense."
      />

      <section className="grid gap-10 px-5 pb-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Panorama</p>
        <div className="grid gap-5 font-body text-lg leading-relaxed text-[#3a352f]">
          <p>
            A história do Tribunal atravessa a Justiça colonial dos ouvidores, o centralismo imperial, a reorganização republicana e a criação do órgão máximo da justiça estadual em 1891.
          </p>
          <p>
            O percurso também acompanha a expansão das comarcas, as sedes sucessivas, os impactos da Revolução Federalista, a admissão de mulheres na magistratura, a modernização administrativa e a chegada do processo digital.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="border-t border-[#8b1d2c]">
          {timeline.map((event) => (
            <article key={`${event.year}-${event.title}`} className="grid gap-4 border-b border-[#ddd6cc] py-8 md:grid-cols-[170px_260px_1fr] md:gap-8">
              <p className="font-display text-3xl leading-none text-[#8b1d2c]">{event.year}</p>
              <h2 className="font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c]">{event.title}</h2>
              <p className="font-body text-base leading-relaxed text-[#635b52]">{event.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
