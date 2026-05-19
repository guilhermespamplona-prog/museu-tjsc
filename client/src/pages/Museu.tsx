import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import ZoomableImageDialog from "@/components/ZoomableImageDialog";
import { exhibitions, museumFacts, visitInfo } from "@/data/memoria";
import { ArrowRight, Clock, Mail, MapPin, Phone, Users } from "lucide-react";
import { Link } from "wouter";

const museumLinks = [
  { label: "Acervo", href: "/acervo-digital" },
  { label: "Exposições", href: "/exposicoes" },
  { label: "Pesquisa", href: "/pesquisa" },
  { label: "Visitações", href: "/visitacoes" },
  { label: "Capela", href: "/capela" },
  { label: "Eventos", href: "/eventos" },
];

export default function Museu() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Museu do Judiciário Catarinense"
        title="Museu Desembargador Tycho Brahe Fernandes Neto"
        description="Criado para preservar documentos, objetos e testemunhos que contam a história do Poder Judiciário catarinense."
      />

      <section className="grid gap-12 px-5 pb-16 md:px-8 lg:grid-cols-[1fr_420px] lg:px-12 lg:pb-24">
        <div>
          <ZoomableImageDialog
            src={exhibitions[12].imageUrl}
            alt={exhibitions[12].imageAlt}
            caption="Exposição permanente - mobiliário, documentos e objetos de trabalho do Judiciário"
            className="mb-10"
          />
          <div className="grid gap-5">
            {museumFacts.map((fact) => (
              <p key={fact} className="border-t border-[#ddd6cc] pt-5 font-body text-lg leading-relaxed text-[#3a352f]">
                {fact}
              </p>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {museumLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="flex items-center justify-between border-t border-[#8b1d2c] py-4 font-ui text-[12px] uppercase tracking-[0.14em] text-[#1f1e1c] hover:text-[#8b1d2c]">
                  {item.label} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="h-fit border-t border-[#8b1d2c] bg-[#f2efe8] p-6 lg:sticky lg:top-28">
          <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Visitação</p>
          <div className="mt-6 grid gap-5">
            <div className="flex gap-3">
              <Clock size={17} className="mt-1 text-[#8b1d2c]" />
              <p className="font-body text-sm leading-relaxed text-[#3a352f]">{visitInfo.hours}</p>
            </div>
            <div className="flex gap-3">
              <MapPin size={17} className="mt-1 text-[#8b1d2c]" />
              <p className="font-body text-sm leading-relaxed text-[#3a352f]">{visitInfo.address}</p>
            </div>
            <div className="flex gap-3">
              <Users size={17} className="mt-1 text-[#8b1d2c]" />
              <p className="font-body text-sm leading-relaxed text-[#3a352f]">{visitInfo.groupLimit}</p>
            </div>
            <div className="flex gap-3">
              <Phone size={17} className="mt-1 text-[#8b1d2c]" />
              <p className="font-body text-sm leading-relaxed text-[#3a352f]">{visitInfo.phones.join(" / ")}</p>
            </div>
            <div className="flex gap-3">
              <Mail size={17} className="mt-1 text-[#8b1d2c]" />
              <a href={`mailto:${visitInfo.email}`} className="font-body text-sm leading-relaxed text-[#8b1d2c] underline-offset-4 hover:underline">{visitInfo.email}</a>
            </div>
          </div>
          <p className="mt-6 font-body text-sm leading-relaxed text-[#635b52]">Entrada gratuita. Visitações espontâneas e mediante agendamento, com grupos reduzidos para favorecer a mediação.</p>
        </aside>
      </section>
    </Layout>
  );
}
