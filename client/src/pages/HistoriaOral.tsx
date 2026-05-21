import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { oralHistoryInterviews } from "@/data/memoria";
import { ArrowRight, Play } from "lucide-react";

export default function HistoriaOral() {
  return (
    <Layout>
      <PageIntro
        eyebrow="História oral"
        title="Memórias da Justiça no Estado de Santa Catarina"
        description="Projeto que utiliza metodologia da história oral para preservar e compartilhar, em vídeo, experiências de profissionais que atuaram no PJSC."
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-4xl border-t border-[#8b1d2c] pt-6">
          <p className="font-body text-lg leading-relaxed text-[#3a352f]">
            A memória institucional não se conserva apenas em arquivos e museus. As entrevistas registram experiências de magistrados e servidores aposentados, preservando informações do cotidiano e da trajetória do Poder Judiciário catarinense.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {oralHistoryInterviews.map((interview) => (
            <a key={interview.url} href={interview.url} target="_blank" rel="noopener noreferrer" className="group grid gap-5 border-t border-[#ddd6cc] py-5 transition hover:border-[#8b1d2c] sm:grid-cols-[210px_1fr]">
              <span className="block w-fit overflow-hidden border border-[#ddd6cc] bg-[#f2efe8] p-2 transition group-hover:border-[#8b1d2c]">
                <img src={interview.imageUrl} alt={interview.imageAlt} width={200} height={134} className="h-[134px] w-[200px] object-cover" loading="lazy" />
              </span>
              <span className="flex min-w-0 flex-col justify-center">
                <span className="font-display text-2xl leading-tight text-[#1f1e1c] group-hover:text-[#8b1d2c]">{interview.name}</span>
                <span className="mt-5 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#635b52]"><Play size={13} /> Assistir <ArrowRight size={13} /><span className="sr-only"> em nova aba</span></span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
