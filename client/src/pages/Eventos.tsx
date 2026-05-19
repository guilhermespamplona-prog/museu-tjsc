import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { eventVideos } from "@/data/memoria";
import { ArrowRight, Play } from "lucide-react";

export default function Eventos() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Evento"
        title="História da Justiça e museus judiciários"
        description="Evento realizado pelo TJSC em parceria com o CNJ nos dias 5 e 6 de setembro de 2019, com palestras gravadas e foco em gestão documental, preservação e divulgação de material histórico."
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          <p className="border-t border-[#ddd6cc] pt-5 font-body text-lg leading-relaxed text-[#3a352f]">
            O encontro reuniu representantes de tribunais de todo o país para discutir memória, gestão documental e divulgação de acervos históricos.
          </p>
          <p className="border-t border-[#ddd6cc] pt-5 font-body text-lg leading-relaxed text-[#3a352f]">
            Durante o evento foi criado o grupo MEMOJUS, voltado à troca de boas práticas sobre memória e gestão documental.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {eventVideos.map((video) => (
            <a key={video.url} href={video.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-t border-[#8b1d2c] py-5 font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c] hover:text-[#8b1d2c]">
              <span className="inline-flex items-center gap-3"><Play size={14} /> {video.title}</span>
              <ArrowRight size={14} />
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
