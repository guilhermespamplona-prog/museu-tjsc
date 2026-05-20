import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { publications, writtenHistoryVolumes } from "@/data/memoria";
import { ArrowRight, FileText, Play } from "lucide-react";

export default function HistoriaEscrita() {
  return (
    <Layout>
      <PageIntro
        eyebrow="História escrita"
        title="Publicações oficiais"
        description="Livros e volumes para acompanhar a formação das comarcas e a trajetória de desembargadores e desembargadoras em Santa Catarina."
      />

      <section className="grid gap-10 px-5 pb-16 md:px-8 lg:grid-cols-2 lg:px-12 lg:pb-24">
        {publications.map((publication) => (
          <article key={publication.title} className="border-t border-[#8b1d2c] pt-6">
            {publication.imageUrl ? (
              <div className="mb-6 aspect-[4/3] w-full overflow-hidden bg-[#e8e2d8]">
                <img src={publication.imageUrl} alt={publication.imageAlt} className="h-full w-full object-contain" />
              </div>
            ) : null}
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{publication.year}</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c]">{publication.title}</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-[#635b52]">{publication.subtitle}</p>
            <a href={publication.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">
              {publication.url.includes("youtu") ? <Play size={14} /> : <FileText size={14} />} Acessar
            </a>
          </article>
        ))}
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Desembargadores e desembargadoras</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Volumes por período</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {writtenHistoryVolumes.map((volume) => (
            <a key={volume.title + volume.year} href={volume.url} target="_blank" rel="noopener noreferrer" className="group border-t border-[#ddd6cc] py-5">
              <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{volume.year}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight text-[#1f1e1c] group-hover:text-[#8b1d2c]">{volume.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-[#635b52]">{volume.subtitle}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#1f1e1c]">Abrir PDF <ArrowRight size={13} /></span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
