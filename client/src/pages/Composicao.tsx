import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { compositionTerms } from "@/data/composicao";
import { useState } from "react";
import type { KeyboardEvent } from "react";

const compositionPanelId = "composicao-panel";

function periodControlId(period: string) {
  return `gestao-${period.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;
}

export default function Composicao() {
  const [activePeriod, setActivePeriod] = useState(compositionTerms[0]?.period ?? "");
  const activeTerm = compositionTerms.find((term) => term.period === activePeriod) ?? compositionTerms[0];

  const selectTerm = (index: number) => {
    const term = compositionTerms[index];
    if (!term) {
      return;
    }

    setActivePeriod(term.period);
    requestAnimationFrame(() => document.getElementById(periodControlId(term.period))?.focus());
  };

  const handleTermKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = compositionTerms.length - 1;
    const nextIndexByKey: Record<string, number> = {
      ArrowDown: Math.min(index + 1, lastIndex),
      ArrowRight: Math.min(index + 1, lastIndex),
      ArrowUp: Math.max(index - 1, 0),
      ArrowLeft: Math.max(index - 1, 0),
      Home: 0,
      End: lastIndex,
    };

    const nextIndex = nextIndexByKey[event.key];
    if (nextIndex === undefined) {
      return;
    }

    event.preventDefault();
    selectTerm(nextIndex);
  };

  return (
    <Layout>
      <PageIntro
        eyebrow="Composição por gestão"
        title="Composição do Tribunal por Gestão"
        description="Cada gestão apresenta a formação integral da Corte no período, com presidência, intervalo administrativo e desembargadores em ordem de ingresso no Tribunal."
      />

      <section className="grid gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-12 lg:pb-24">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3" role="radiogroup" aria-label="Gestões do Tribunal">
          {compositionTerms.map((term, index) => {
            const active = term.period === activeTerm.period;
            const presidentLabel = `${term.presidentTitle ?? "Des."} ${term.president}`;

            return (
              <button
                id={periodControlId(term.period)}
                key={term.period}
                type="button"
                onClick={() => setActivePeriod(term.period)}
                onKeyDown={(event) => handleTermKeyDown(event, index)}
                role="radio"
                className={`group grid h-full content-start text-left transition ${active ? "text-[#8b1d2c]" : "text-[#1f1e1c]"}`}
                aria-checked={active}
                aria-controls={compositionPanelId}
                tabIndex={active ? 0 : -1}
              >
                <span className={`block overflow-hidden border bg-[#f2efe8] p-2 transition ${active ? "border-[#8b1d2c]" : "border-[#ddd6cc] group-hover:border-[#8b1d2c]"}`}>
                  <img src={term.imageUrl} alt={term.imageAlt} className="block aspect-[4/5] w-full object-cover object-center grayscale transition duration-300 group-hover:grayscale-0" loading="lazy" />
                </span>
                <span className="mt-3 grid min-h-[7.25rem] content-start">
                  <span className="block font-ui text-[12px] uppercase tracking-[0.14em]">{term.period}</span>
                  <span className="mt-1 block min-h-[4.5rem] font-display text-xl leading-tight">{presidentLabel}</span>
                  <span className="block font-body text-sm text-[#635b52]">{term.members.length} desembargadores</span>
                </span>
              </button>
            );
          })}
        </div>

        <aside id={compositionPanelId} role="region" aria-live="polite" aria-labelledby="composicao-panel-title" className="flex h-fit flex-col border-t border-[#8b1d2c] bg-[#f2efe8] p-6 lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)]">
          <div className="shrink-0">
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Gestão {activeTerm.period}</p>
            <h2 id="composicao-panel-title" className="mt-3 font-display text-3xl leading-tight text-[#1f1e1c]">{activeTerm.presidentTitle ?? "Des."} {activeTerm.president}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#635b52]">{activeTerm.dateRange}</p>
          </div>

          <div className="mt-8 flex min-h-0 flex-1 flex-col border-t border-[#ddd6cc] pt-5">
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Composição integral</p>
            <ol className="mt-4 min-h-0 flex-1 space-y-2 overflow-auto pr-2 font-body text-sm leading-relaxed text-[#3a352f]">
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
