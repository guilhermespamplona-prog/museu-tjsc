import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import ZoomableImageDialog from "@/components/ZoomableImageDialog";

const capelaPhotos = [
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920506",
    alt: "Descerramento da placa de inauguração da Capela Ecumênica do TJSC",
    caption: "Descerramento da placa de inauguração da capela",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920507",
    alt: "Vitrais coloridos da Capela Ecumênica do TJSC",
    caption: "Vitrais coloridos da Capela Ecumênica",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920508",
    alt: "Vista externa da Capela Ecumênica do TJSC e do entorno do Tribunal",
    caption: "Vista externa da capela e do entorno do Tribunal",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920509",
    alt: "Capela Ecumênica do TJSC iluminada à noite",
    caption: "Capela Ecumênica iluminada à noite",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920510",
    alt: "Bíblia aberta com imagem de Santa Catarina de Alexandria",
    caption: "Bíblia aberta com imagem de Santa Catarina de Alexandria",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920511",
    alt: "Altar central da Capela Ecumênica do TJSC com crucifixo e vitrais",
    caption: "Altar central da capela, com crucifixo e vitrais",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920512",
    alt: "Detalhe dos vitrais vistos a partir do interior da Capela Ecumênica do TJSC",
    caption: "Detalhe dos vitrais vistos a partir do interior da capela",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920513",
    alt: "Interior da Capela Ecumênica do TJSC com bancos e vitrais",
    caption: "Interior da capela, com bancos e vitrais",
  },
  {
    src: "https://www.tjsc.jus.br/documents/d/asset-library-24235137/2920514",
    alt: "Celebração religiosa no interior da Capela Ecumênica do TJSC",
    caption: "Celebração religiosa no interior da capela",
  },
];

const facts = [
  "A Capela Ecumênica de Santa Catarina de Alexandria foi construída para abrigar a relíquia da padroeira do Estado e oferecer um espaço de paz, reflexão e diálogo.",
  "Possui três altares: o central com crucifixo, o lateral direito com a relíquia de Santa Catarina de Alexandria e o lateral esquerdo como apoio para a Bíblia Sagrada.",
  "A obra é do arquiteto Aldo Luiz Eickhoff, construída com argamassa armada e supervisionada pelo professor Vilson Teixeira de Jesus.",
  "As formas arquitetônicas remetem a mãos unidas em oração ou aos cinco continentes unidos em harmonia.",
  "A capela possui 42,3 metros quadrados e capacidade para 37 pessoas sentadas.",
  "A relíquia chegou a Florianópolis após tratativas iniciadas em 29 de maio de 2000 com o Mosteiro de Santa Catarina, no Monte Sinai.",
  "A capela foi inaugurada e recebeu a relíquia em 23 de novembro de 2001; seu uso foi regulamentado pela Resolução GP n. 46/2001.",
];

const learnMore = [
  {
    title: "Santa Catarina de Alexandria",
    paragraphs: [
      "Segundo a tradição cristã, Catarina nasceu em Alexandria, no Egito, no ano 287. Reconhecida por sua sabedoria, beleza e eloquência, tornou-se defensora da fé cristã ainda jovem.",
      "A narrativa de seu martírio associa Catarina ao enfrentamento do imperador Maximino Daia, à defesa pública de sua fé e ao episódio da roda, instrumento que teria sido destruído após suas preces. Sua morte é tradicionalmente situada em 25 de novembro de 305.",
    ],
  },
  {
    title: "A relíquia e a capela em Florianópolis",
    paragraphs: [
      "A transferência da relíquia para Santa Catarina começou a ser articulada em 29 de maio de 2000, após encontro no Palácio do Governo com representantes da Igreja Ortodoxa Grega.",
      "As tratativas conduzidas com o Patriarcado de Constantinopla e o Mosteiro de Santa Catarina, no Monte Sinai, levaram à autorização para envio de uma relíquia da padroeira. A condição apresentada pelos monges era que ela fosse abrigada em uma capela ecumênica com guarda adequada e acesso ao público.",
      "A inauguração da capela e o recebimento da relíquia ocorreram em 23 de novembro de 2001, dentro da programação do Dia de Santa Catarina.",
    ],
  },
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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[2fr_1fr] lg:grid-rows-[300px_300px]">
          <ZoomableImageDialog
            src={capelaPhotos[0].src}
            alt={capelaPhotos[0].alt}
            caption={capelaPhotos[0].caption}
            captionPlacement="dialog"
            className="h-full md:col-span-2 lg:col-span-1 lg:row-span-2 [&>span:first-child]:h-[360px] md:[&>span:first-child]:h-[520px] lg:[&>span:first-child]:h-full"
          />
          {capelaPhotos.slice(1, 3).map((photo) => (
            <ZoomableImageDialog
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              captionPlacement="dialog"
              className="h-full [&>span:first-child]:h-[260px] lg:[&>span:first-child]:h-full"
            />
          ))}
        </div>
      </section>

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

      <section className="border-y border-[#ddd6cc] bg-[#fbfaf7] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Saiba mais</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Da padroeira à relíquia preservada na capela.</h2>
          </div>
          <div className="grid gap-5">
            {learnMore.map((section) => (
              <details key={section.title} className="group border-t border-[#8b1d2c] py-5" open>
                <summary className="cursor-pointer list-none font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c] transition hover:text-[#8b1d2c]">
                  {section.title}
                </summary>
                <div className="mt-5 grid gap-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="font-body text-lg leading-relaxed text-[#3a352f]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Registro visual</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Arquitetura, altar e memória em detalhe.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {capelaPhotos.slice(3).map((photo) => (
            <ZoomableImageDialog
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              caption={photo.caption}
              className="[&>span:first-child]:h-[280px]"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
