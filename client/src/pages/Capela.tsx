import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";

const facts = [
  "A Capela Ecumênica de Santa Catarina de Alexandria foi construída para abrigar a relíquia da padroeira do Estado e oferecer um espaço de paz, reflexão e diálogo.",
  "Possui três altares: o central com crucifixo, o lateral direito com a relíquia de Santa Catarina de Alexandria e o lateral esquerdo como apoio para a Bíblia Sagrada.",
  "A obra é do arquiteto Aldo Luiz Eickhoff, construída com argamassa armada e supervisionada pelo professor Vilson Teixeira de Jesus.",
  "As formas arquitetônicas remetem a mãos unidas em oração ou aos cinco continentes unidos em harmonia.",
  "A capela possui 42,3 metros quadrados e capacidade para 37 pessoas sentadas.",
  "A relíquia chegou a Florianópolis após tratativas iniciadas em 29 de maio de 2000 com o Mosteiro de Santa Catarina, no Monte Sinai.",
  "A capela foi inaugurada e recebeu a relíquia em 23 de novembro de 2001; seu uso foi regulamentado pela Resolução GP n. 46/2001.",
];

export default function Capela() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Patrimônio"
        title="Capela Ecumênica de Santa Catarina de Alexandria"
        description="Um refúgio de silêncio, arquitetura e memória dedicado à relíquia de Santa Catarina de Alexandria."
      />
      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {facts.map((fact, index) => (
            <article key={fact} className="border-t border-[#ddd6cc] pt-5">
              <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 font-body text-lg leading-relaxed text-[#3a352f]">{fact}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 bg-[#f2efe8] p-6">
          <p className="font-body text-sm leading-relaxed text-[#635b52]">
            A capela combina devoção, arquitetura e narrativa histórica em um espaço pequeno, pensado para recolhimento e diálogo.
          </p>
        </div>
      </section>
    </Layout>
  );
}
