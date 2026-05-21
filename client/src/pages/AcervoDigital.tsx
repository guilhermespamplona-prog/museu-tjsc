import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import ZoomableImageDialog from "@/components/ZoomableImageDialog";
import { acervoCategories, findExhibitionByTitle } from "@/data/memoria";
import { ArrowRight, Database, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

const acervoExhibition = findExhibitionByTitle("Do Arquivo ao AtoM");

const atomLinks = [
  { label: "Descrições arquivísticas", url: "https://atom.tjsc.jus.br/index.php/informationobject/browse?topLod=0" },
  { label: "Pessoas e instituições", url: "https://atom.tjsc.jus.br/index.php/actor/browse" },
  { label: "Documentos digitais", url: "https://atom.tjsc.jus.br/index.php/informationobject/browse?view=card&onlyMedia=1&topLod=0" },
  { label: "Assuntos", url: "https://atom.tjsc.jus.br/index.php/taxonomy/index/id/35" },
  { label: "Locais", url: "https://atom.tjsc.jus.br/index.php/taxonomy/index/id/42" },
  { label: "Funções", url: "https://atom.tjsc.jus.br/index.php/function/browse" },
];

export default function AcervoDigital() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      window.open(`https://atom.tjsc.jus.br/index.php/informationobject/browse?query=${encodeURIComponent(query)}&topLod=0`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Layout>
      <PageIntro
        eyebrow="Acervo"
        title="Documentos, objetos e arquivos para estudar de perto"
        description="Processos, fotografias, mapas, objetos e descrições arquivísticas compõem um acervo para ver, pesquisar e interpretar."
      />

      <section className="grid gap-12 px-5 pb-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:pb-24">
        <div>
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Núcleos do acervo</p>
          <div className="mt-8 grid gap-4">
            {acervoCategories.map((category) => (
              <div key={category} className="border-t border-[#ddd6cc] pt-5">
                <p className="font-body text-xl leading-relaxed text-[#1f1e1c]">{category}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-base leading-relaxed text-[#635b52]">
            Para peças específicas, descrições arquivísticas e documentos digitalizados, siga para o repositório AtoM e aprofunde a pesquisa.
          </p>
        </div>

        <div>
          <ZoomableImageDialog
            src={acervoExhibition.imageUrl}
            alt={acervoExhibition.imageAlt}
            caption="Do Arquivo ao AtoM - a história da Justiça para todos"
          />
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Repositório digital</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">AtoM reúne documentos preservados desde o século XVIII.</h2>
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[#635b52]">
              A plataforma AtoM (Access to Memory) é o software livre usado para difundir o acervo digital de guarda permanente do Poder Judiciário de Santa Catarina. Ela permite pesquisar descrições arquivísticas, documentos digitalizados, assuntos, locais e fundos vinculados aos tribunais que registraram a história da Justiça catarinense.
            </p>
          </div>
          <div>
            <form onSubmit={handleSearch} className="flex items-center gap-4 border-b border-[#1f1e1c] pb-4">
              <label htmlFor="atom-search" className="sr-only">Buscar no AtoM</label>
              <Search size={20} className="text-[#8b1d2c]" />
              <input
                id="atom-search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Buscar no AtoM"
                className="min-w-0 flex-1 bg-transparent font-body text-xl text-[#1f1e1c] outline-none placeholder:text-[#8a8178]"
              />
              <button type="submit" className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">Buscar</button>
            </form>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {atomLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-t border-[#ddd6cc] py-4 font-ui text-[11px] uppercase tracking-[0.12em] text-[#1f1e1c] hover:text-[#8b1d2c]">
                  <span className="inline-flex items-center gap-2"><Database size={14} /> {link.label}</span>
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
            <a href="https://atom.tjsc.jus.br/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">
              Abrir AtoM <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
