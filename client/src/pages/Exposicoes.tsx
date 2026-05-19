import ExhibitionCard from "@/components/ExhibitionCard";
import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { exhibitions } from "@/data/memoria";

const featured = exhibitions.slice(0, 4);
const archive = exhibitions.slice(4);
const years = Array.from(new Set(archive.map((item) => item.year)));

export default function Exposicoes() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Galeria de exposições"
        title="Exposições do Museu"
        description="Mostras temporárias e permanentes abrem caminhos para documentos, fotografias, objetos e histórias preservadas pelo Museu."
        backHref="/museu"
        backLabel="Museu"
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-12">
          <ExhibitionCard exhibition={featured[0]} featured />
          <div className="grid gap-8 md:grid-cols-3">
            {featured.slice(1).map((exhibition) => (
              <ExhibitionCard key={exhibition.title} exhibition={exhibition} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Arquivo visual</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Todas as exposições em percurso visual</h2>
          <p className="mt-5 font-body text-base leading-relaxed text-[#635b52]">
            Percorra anos de mostras e descubra como documentos, objetos e imagens transformam a memória institucional em experiência visual.
          </p>
        </div>

        <div className="space-y-14">
          {years.map((year) => (
            <section key={year}>
              <div className="sticky top-[73px] z-10 border-y border-[#ddd6cc] bg-[#f2efe8]/95 py-3 backdrop-blur">
                <h3 className="font-ui text-[12px] uppercase tracking-[0.16em] text-[#8b1d2c]">{year}</h3>
              </div>
              <div className="mt-6 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                {archive.filter((item) => item.year === year).map((exhibition) => (
                  <ExhibitionCard key={exhibition.title} exhibition={exhibition} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Layout>
  );
}
