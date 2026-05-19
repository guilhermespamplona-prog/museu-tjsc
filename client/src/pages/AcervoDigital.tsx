import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import ZoomableImageDialog from "@/components/ZoomableImageDialog";
import { acervoCategories, exhibitions } from "@/data/memoria";
import { ArrowRight, Database, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

const atomLinks = [
  { label: "Descrições arquivísticas", url: "https://atom.tjsc.jus.br/index.php/informationobject/browse" },
  { label: "Pessoas e instituições", url: "https://atom.tjsc.jus.br/index.php/actor/browse" },
  { label: "Documentos digitais", url: "https://atom.tjsc.jus.br/index.php/digitalobject/browse" },
  { label: "Assuntos", url: "https://atom.tjsc.jus.br/index.php/taxonomy/browse?taxonomy=35" },
  { label: "Locais", url: "https://atom.tjsc.jus.br/index.php/taxonomy/browse?taxonomy=42" },
  { label: "Funções", url: "https://atom.tjsc.jus.br/index.php/function/browse" },
];

export default function AcervoDigital() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      window.open(`https://atom.tjsc.jus.br/index.php/search?query=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
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
            src={exhibitions[2].imageUrl}
            alt={exhibitions[2].imageAlt}
            caption="Do Arquivo ao AtoM - a história da Justiça para todos"
          />
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Pesquisa avançada</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">AtoM como instrumento, não como substituto da visita.</h2>
          </div>
          <div>
            <form onSubmit={handleSearch} className="flex items-center gap-4 border-b border-[#1f1e1c] pb-4">
              <Search size={20} className="text-[#8b1d2c]" />
              <input
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
