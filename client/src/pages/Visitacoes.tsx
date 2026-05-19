import Layout from "@/components/Layout";
import PageIntro from "@/components/PageIntro";
import { visitInfo } from "@/data/memoria";
import { Clock, Mail, MapPin, Phone, Users } from "lucide-react";

const practical = [
  { label: "Horário", value: visitInfo.hours, icon: Clock },
  { label: "Endereço", value: visitInfo.address, icon: MapPin },
  { label: "Agendamento", value: visitInfo.scheduling, icon: Users },
  { label: "Telefones", value: visitInfo.phones.join(" / "), icon: Phone },
  { label: "E-mail", value: visitInfo.email, icon: Mail },
  { label: "Grupos", value: visitInfo.groupLimit, icon: Users },
];

export default function Visitacoes() {
  return (
    <Layout>
      <PageIntro
        eyebrow="Informações ao visitante"
        title="Visitações"
        description="Planeje sua visita ao Museu Desembargador Tycho Brahe Fernandes Neto e organize grupos com antecedência."
        backHref="/museu"
        backLabel="Museu"
      />

      <section className="px-5 pb-16 md:px-8 lg:px-12 lg:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practical.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="border-t border-[#8b1d2c] pt-5">
                <Icon size={18} className="text-[#8b1d2c]" />
                <p className="mt-4 font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{item.label}</p>
                {item.label === "E-mail" ? (
                  <a href={`mailto:${item.value}`} className="mt-2 block font-body text-lg text-[#1f1e1c] underline-offset-4 hover:text-[#8b1d2c] hover:underline">{item.value}</a>
                ) : (
                  <p className="mt-2 font-body text-lg leading-relaxed text-[#1f1e1c]">{item.value}</p>
                )}
              </article>
            );
          })}
        </div>
        <div className="mt-10 bg-[#f2efe8] p-6">
          <p className="font-body text-sm leading-relaxed text-[#635b52]">
            Para grupos, organize o agendamento com antecedência. A visita acontece em grupos reduzidos, favorecendo a mediação e a observação do acervo.
          </p>
        </div>
      </section>
    </Layout>
  );
}
