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
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {oralHistoryInterviews.map((interview) => (
            <a key={interview.url} href={interview.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-28 flex-col justify-between border-t border-[#ddd6cc] py-5 hover:border-[#8b1d2c]">
              <span className="font-display text-2xl leading-tight text-[#1f1e1c] group-hover:text-[#8b1d2c]">{interview.name}</span>
              <span className="mt-5 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#635b52]"><Play size={13} /> Assistir <ArrowRight size={13} /></span>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
