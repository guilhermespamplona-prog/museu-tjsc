import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { curatedPaths, timeline } from "@/data/memoria";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Historia() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Percurso histórico"
        title="História do Tribunal"
        description="Do período colonial à era digital, acompanhe rupturas, sedes, personagens e marcos que deram forma ao Tribunal."
      />

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

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Continuar explorando</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {curatedPaths.map((path) => (
            <Link key={path.title} href={path.href}>
              <article className="group border-t border-[#8b1d2c] pt-5">
                <p className="font-ui text-[10px] uppercase tracking-[0.14em] text-[#8b1d2c]">{path.eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-[#1f1e1c] group-hover:text-[#8b1d2c]">{path.title}</h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-[#635b52]">{path.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#1f1e1c]">Abrir <ArrowRight size={13} /></span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
