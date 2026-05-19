import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";

const bibliotecaFacts = [
  "A Biblioteca Desembargador Marcílio Medeiros é especializada na área jurídica e é referência catarinense nesse campo.",
  "Possui acervo jurídico atualizado, acervo literário e setor de obras raras.",
  "A biblioteca se desdobra em seis bibliotecas setoriais, na Academia Judicial e em comarcas.",
  "Permite consulta, reserva e devolução online de itens do acervo por meio do Portal Biblioteca.",
  "Atende públicos interno e externo; obras raras só podem ser consultadas em suas dependências.",
];

export default function Biblioteca() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Biblioteca"
        title="Biblioteca Desembargador Marcílio Medeiros"
        description="Um acervo jurídico e literário para apoiar pesquisa, estudo e preservação da memória bibliográfica do Judiciário catarinense."
      />
      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {bibliotecaFacts.map((fact) => (
            <p key={fact} className="border-t border-[#ddd6cc] pt-5 font-body text-lg leading-relaxed text-[#3a352f]">{fact}</p>
          ))}
        </div>
      </section>
    </Layout>
  );
}
