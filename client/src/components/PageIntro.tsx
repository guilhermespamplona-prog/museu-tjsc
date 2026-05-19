import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
};

export default function PageIntro({ eyebrow, title, description, backHref = "/", backLabel = "Início" }: PageIntroProps) {
  return (
    <section className="px-5 py-10 md:px-8 md:py-14 lg:px-12 lg:py-16">
      <Link href={backHref}>
        <span className="mb-8 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.12em] text-[#635b52] underline-offset-4 hover:text-[#8b1d2c] hover:underline">
          <ArrowLeft size={14} /> {backLabel}
        </span>
      </Link>
      <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">{eyebrow}</p>
      <h1 className="mt-3 max-w-5xl font-display text-5xl font-normal leading-[0.95] text-[#1f1e1c] md:text-7xl">{title}</h1>
      {description ? <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-[#635b52]">{description}</p> : null}
    </section>
  );
}
