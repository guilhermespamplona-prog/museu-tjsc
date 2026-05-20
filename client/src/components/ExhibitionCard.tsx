import type { Exhibition } from "@/data/types";
import { ArrowRight } from "lucide-react";
import ZoomableImageDialog from "./ZoomableImageDialog";

type ExhibitionCardProps = {
  exhibition: Exhibition;
  featured?: boolean;
};

export default function ExhibitionCard({ exhibition, featured = false }: ExhibitionCardProps) {
  const imageFrameClass = featured
    ? "h-full [&>span:first-child]:aspect-[4/3] [&>span:first-child>img]:object-contain md:[&>span:first-child]:h-full"
    : "[&>span:first-child]:aspect-[4/3] [&>span:first-child>img]:object-contain";

  return (
    <article className={`group ${featured ? "md:grid md:grid-cols-[1.25fr_0.75fr] md:gap-8" : ""}`}>
      <ZoomableImageDialog
        src={exhibition.imageUrl}
        alt={exhibition.imageAlt}
        caption={`${exhibition.year} - ${exhibition.title}`}
        captionPlacement="dialog"
        buttonLabel={`Ampliar imagem da exposição ${exhibition.title}`}
        dialogLabel={`Imagem ampliada da exposição ${exhibition.title}`}
        className={imageFrameClass}
      />
      <div className={featured ? "mt-6 flex flex-col justify-center md:mt-0" : "mt-4"}>
        <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#8b1d2c]">{exhibition.year}</span>
        <a href={exhibition.url} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[#1f1e1c] underline-offset-4 transition hover:text-[#8b1d2c]">
          <h3 className={`${featured ? "text-3xl md:text-5xl" : "text-xl"} font-display font-normal leading-tight text-inherit`}>
            {exhibition.title}
          </h3>
          <span className="mt-5 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-inherit">
            Abrir exposição <ArrowRight size={13} />
          </span>
        </a>
      </div>
    </article>
  );
}
