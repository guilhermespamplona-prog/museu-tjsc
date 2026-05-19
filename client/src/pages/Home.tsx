import ExhibitionCard from "@/components/ExhibitionCard";
import Layout from "@/components/Layout";
import ZoomableImageDialog from "@/components/ZoomableImageDialog";
import { acervoCategories, curatedPaths, exhibitions, publications } from "@/data/memoria";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const heroExhibition = exhibitions.find((item) => item.title.startsWith("Nas ruínas de Curitibanos")) ?? exhibitions[16];
const featuredExhibition = exhibitions.find((item) => item.title.startsWith("Nova exposição permanente")) ?? exhibitions[12];
const secondaryExhibitions = [
  exhibitions.find((item) => item.title.startsWith("A máquina")),
  exhibitions.find((item) => item.title.startsWith("Do Arquivo ao AtoM")),
  exhibitions.find((item) => item.title.startsWith("Ecos da Justiça")),
].filter((item): item is (typeof exhibitions)[number] => Boolean(item));
const pjscLogoUrl = "https://www.tjsc.jus.br/o/tjsc-theme/images/tjsc/logo.png?t=1776801708000";

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[calc(100vh-73px)] overflow-hidden border-b border-[#ddd6cc] bg-[#ede7dc]">
        <img
          src={heroExhibition.imageUrl}
          alt="Autos judiciais danificados durante a Guerra do Contestado"
          className="absolute inset-0 h-full w-full object-cover opacity-60 saturate-[0.72] sepia-[0.25]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,250,247,0.94)_0%,rgba(251,250,247,0.78)_40%,rgba(251,250,247,0.16)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#fbfaf7] via-[#fbfaf7]/58 to-transparent" />
        <div className="relative z-10 flex min-h-[calc(100vh-73px)] flex-col justify-end px-5 py-10 md:px-8 lg:px-12 lg:py-14">
          <div className="w-full">
            <img
              src={pjscLogoUrl}
              alt="Poder Judiciário de Santa Catarina"
              loading="eager"
              decoding="async"
              className="mb-12 h-auto w-[min(62vw,220px)] object-contain md:w-[250px]"
            />
            <h1 className="max-w-[42rem] font-display text-4xl font-normal leading-[0.98] text-[#1f1e1c] md:text-[3.9rem] lg:text-[4.35rem]">
              Memórias que atravessaram a história.
            </h1>
            <div className="mt-10 flex w-full justify-start lg:justify-end">
              <div className="max-w-md border-t border-[#8b1d2c] pt-4">
                <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Em primeiro plano</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-[#514a43]">
                  Autos danificados durante a Guerra do Contestado, preservados como ruínas documentais na exposição <em>Nas ruínas de Curitibanos</em>.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link href="/exposicoes">
                <span className="inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">
                  Ver exposições <ArrowRight size={14} />
                </span>
              </Link>
              <Link href="/acervo-digital">
                <span className="inline-flex items-center gap-2 font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c] underline-offset-4 hover:underline">
                  Explorar acervo <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Sala permanente</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Objetos que contam o trabalho da Justiça.</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-[#635b52]">
              Mobiliário, documentos, vestes, máquinas de escrever e objetos de uso cotidiano aproximam o visitante da materialidade do Judiciário catarinense.
            </p>
          </div>
          <ZoomableImageDialog
            src={featuredExhibition.imageUrl}
            alt="Sala expositiva com mobiliário, documentos e objetos do Judiciário catarinense"
            caption="Exposição permanente do Museu do Judiciário Catarinense"
            className="h-full [&>span:first-child]:h-full"
          />
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-[#f2efe8] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {curatedPaths.map((path) => (
            <Link key={path.title} href={path.href}>
              <article className="group flex h-full flex-col justify-between border-t border-[#8b1d2c] pt-5">
                <div>
                  <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{path.eyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-[#1f1e1c] group-hover:text-[#8b1d2c]">{path.title}</h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-[#635b52]">{path.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#1f1e1c]">
                  Abrir percurso <ArrowRight size={13} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Acervo</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Vestígios que convidam um olhar mais demorado.</h2>
            <ul className="mt-8 grid gap-4">
              {acervoCategories.map((item) => (
                <li key={item} className="border-t border-[#ddd6cc] pt-4 font-body text-base leading-relaxed text-[#514a43]">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/acervo-digital">
                <span className="flex h-full items-center justify-between border-t border-[#8b1d2c] py-4 font-ui text-[12px] uppercase tracking-[0.14em] text-[#8b1d2c] hover:text-[#1f1e1c]">
                  Explorar acervo <ArrowRight size={14} />
                </span>
              </Link>
              <a href="https://atom.tjsc.jus.br/" target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-between border-t border-[#8b1d2c] py-4 font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c] hover:text-[#8b1d2c]">
                Pesquisa avançada AtoM <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {secondaryExhibitions.map((exhibition) => (
              <ExhibitionCard key={exhibition.title} exhibition={exhibition} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">História escrita</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#1f1e1c] md:text-5xl">Livros para atravessar épocas e comarcas.</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-[#635b52]">
              Livros, volumes e registros audiovisuais convidam a percorrer a trajetória de comarcas, magistrados e personagens que moldaram a Justiça catarinense.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((publication) => (
              <article key={publication.title} className="border-t border-[#ddd6cc] pt-5">
                {publication.imageUrl ? <img src={publication.imageUrl} alt={publication.imageAlt} className="mb-5 aspect-[4/3] w-full bg-[#e8e2d8] object-cover" /> : null}
                <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{publication.year}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-[#1f1e1c]">{publication.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#635b52]">{publication.subtitle}</p>
                <a href={publication.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 hover:underline">
                  Acessar <ArrowRight size={13} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
