import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { managementTerms } from "@/data/memoria";

export default function Composicao() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Composição por gestão"
        title="Presidentes do Tribunal por gestão"
        description="Uma linha do tempo administrativa para acompanhar a sucessão de presidências do Tribunal desde a instalação da Corte."
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="border-t border-[#8b1d2c]">
          {managementTerms.map((term) => (
            <article key={term.period} className="grid gap-4 border-b border-[#ddd6cc] py-5 md:grid-cols-[150px_1fr] md:px-3">
              <span className="font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c]">{term.period}</span>
              <span className="font-body text-lg text-[#1f1e1c]">{term.president}</span>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
