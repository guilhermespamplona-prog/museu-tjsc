import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { videos } from "@/data/memoria";
import { ArrowRight, Play } from "lucide-react";

export default function Videos() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Audiovisual"
        title="Vídeos"
        description="Filmes e documentários para conhecer a trajetória do Tribunal e ouvir memórias preservadas em vídeo."
      />

      <section className="grid gap-8 px-5 pb-16 md:px-8 lg:grid-cols-2 lg:px-12 lg:pb-24">
        {videos.map((video) => (
          <article key={video.url} className="border-t border-[#8b1d2c] pt-6">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8b1d2c] text-[#8b1d2c]"><Play size={18} /></span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-[#1f1e1c]">{video.title}</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-[#635b52]">{video.description}</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">
              Assistir no YouTube <ArrowRight size={14} />
            </a>
          </article>
        ))}
      </section>
    </Layout>
  );
}
