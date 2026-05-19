import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { compositionTerms } from "@/data/composicao";
import { useState } from "react";

export default function Composicao() {
  const [activePeriod, setActivePeriod] = useState(compositionTerms[0]?.period ?? "");
  const activeTerm = compositionTerms.find((term) => term.period === activePeriod) ?? compositionTerms[0];

  return (
    <Layout>
      <PageIntro
        eyebrow="Composição por gestão"
        title="Composição do Tribunal por Gestão"
        description="Cada gestão apresenta a formação integral da Corte no período, com presidência, intervalo administrativo e desembargadores em ordem de ingresso no Tribunal."
      />

      <section className="grid gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-12 lg:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {compositionTerms.map((term) => {
            const active = term.period === activeTerm.period;

            return (
              <button
                key={term.period}
                type="button"
                onClick={() => setActivePeriod(term.period)}
                className={`group text-left transition ${active ? "text-[#8b1d2c]" : "text-[#1f1e1c]"}`}
                aria-pressed={active}
              >
                <span className={`block overflow-hidden border bg-[#f2efe8] p-2 transition ${active ? "border-[#8b1d2c]" : "border-[#ddd6cc] group-hover:border-[#8b1d2c]"}`}>
                  <img src={term.imageUrl} alt={term.imageAlt} className="aspect-[4/5] w-full object-cover grayscale transition duration-300 group-hover:grayscale-0" loading="lazy" />
                </span>
                <span className="mt-3 block font-ui text-[12px] uppercase tracking-[0.14em]">{term.period}</span>
                <span className="mt-1 block font-display text-xl leading-tight">Des. {term.president}</span>
                <span className="mt-2 block font-body text-sm text-[#635b52]">{term.members.length} desembargadores</span>
              </button>
            );
          })}
        </div>

        <aside className="h-fit border-t border-[#8b1d2c] bg-[#f2efe8] p-6 lg:sticky lg:top-28">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Gestão {activeTerm.period}</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[#1f1e1c]">Des. {activeTerm.president}</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-[#635b52]">{activeTerm.dateRange}</p>

          <div className="mt-8 border-t border-[#ddd6cc] pt-5">
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Composição integral</p>
            <ol className="mt-4 max-h-[60vh] space-y-2 overflow-auto pr-2 font-body text-sm leading-relaxed text-[#3a352f]">
              {activeTerm.members.map((member, index) => (
                <li key={`${activeTerm.period}-${member}-${index}`} className="grid grid-cols-[32px_1fr] gap-3 border-b border-[#ddd6cc]/70 pb-2">
                  <span className="font-ui text-[10px] uppercase tracking-[0.12em] text-[#8b1d2c]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{member}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
