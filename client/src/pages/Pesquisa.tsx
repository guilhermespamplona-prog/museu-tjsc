import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { ArrowRight, Mail } from "lucide-react";

const steps = [
  "Enviar o pedido de pesquisa para dgdm.pesquisa@tjsc.jus.br.",
  "Aguardar submissão do pleito ao diretor-geral judiciário do Tribunal de Justiça do Estado de Santa Catarina.",
  "Receber comunicação por e-mail sobre deferimento ou indeferimento do pedido.",
  "Se deferido, agendar o início da pesquisa após assinar termo de responsabilidade e confidencialidade.",
  "Como alternativa, realizar pesquisa remota na plataforma AtoM.",
];

export default function Pesquisa() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Acesso ao acervo"
        title="Pesquisa acadêmica, científica ou histórica"
        description="Caminho para pesquisadores interessados em autos judiciais findos, documentos históricos e registros preservados pelo Judiciário catarinense."
        backHref="/"
        backLabel="Memória TJSC"
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="border-t border-[#8b1d2c]">
            {steps.map((step, index) => (
              <div key={step} className="grid gap-4 border-b border-[#ddd6cc] py-6 md:grid-cols-[80px_1fr]">
                <span className="font-display text-3xl leading-none text-[#8b1d2c]">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-body text-lg leading-relaxed text-[#3a352f]">{step}</p>
              </div>
            ))}
          </div>
          <aside className="h-fit bg-[#f2efe8] p-6 lg:sticky lg:top-28">
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Contato</p>
            <a href="mailto:dgdm.pesquisa@tjsc.jus.br" className="mt-4 flex items-center gap-3 font-body text-lg text-[#1f1e1c] underline-offset-4 hover:text-[#8b1d2c] hover:underline"><Mail size={16} /> dgdm.pesquisa@tjsc.jus.br</a>
            <a href="https://atom.tjsc.jus.br/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">Pesquisar no AtoM <ArrowRight size={14} /></a>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
