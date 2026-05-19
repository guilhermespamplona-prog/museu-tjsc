import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { ArrowRight } from "lucide-react";

const arquivoFacts = [
  "O arquivo do TJSC evoluiu de espaço de armazenamento físico para setor dedicado ao cuidado de acervos documentais.",
  "A partir de 1929, já existiam salas destinadas à guarda de documentos que não tramitavam mais na Corte.",
  "Na década de 1970, com a criação da Seção de Arquivo, passaram a existir pessoal dedicado, microfilmagem e procedimentos de eliminação física de documentos.",
  "O arquivo atende necessidades administrativas, pedidos de documentos e demandas de pesquisa histórica, acadêmica e genealógica.",
  "Documentos administrativos, processos judiciais, microfilmes e acervos de guarda permanente compõem uma camada essencial da memória institucional.",
];

export default function Arquivo() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Arquivo"
        title="Da guarda física ao acervo de pesquisa"
        description="O arquivo revela como a guarda documental se transformou em política ativa de preservação, acesso e pesquisa histórica."
      />
      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {arquivoFacts.map((fact) => (
            <p key={fact} className="border-t border-[#ddd6cc] pt-5 font-body text-lg leading-relaxed text-[#3a352f]">{fact}</p>
          ))}
        </div>
        <a href="https://atom.tjsc.jus.br/" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">
          Pesquisar no AtoM <ArrowRight size={14} />
        </a>
      </section>
    </Layout>
  );
}
