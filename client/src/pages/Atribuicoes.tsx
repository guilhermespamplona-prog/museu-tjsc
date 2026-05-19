import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { atribuicoes } from "@/data/memoria";

export default function Atribuicoes() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Institucional"
        title="Atribuições da Seção de Museu"
        description="As responsabilidades da Seção de Museu mostram o cuidado permanente com pesquisa, preservação, inventário, exposições e visitação pública."
      />
      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="border-t border-[#8b1d2c]">
          {atribuicoes.map((item, index) => (
            <article key={item} className="grid gap-4 border-b border-[#ddd6cc] py-6 md:grid-cols-[80px_1fr]">
              <span className="font-display text-3xl leading-none text-[#8b1d2c]">{String(index + 1).padStart(2, "0")}</span>
              <p className="font-body text-lg leading-relaxed text-[#3a352f]">{item}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 bg-[#f2efe8] p-6">
          <p className="font-body text-sm leading-relaxed text-[#635b52]">O trabalho museológico combina planejamento, segurança do acervo, mediação cultural e preservação de documentos históricos.</p>
        </div>
      </section>
    </Layout>
  );
}
