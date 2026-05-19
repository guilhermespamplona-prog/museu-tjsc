import type { Exhibition } from "@/data/types";
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
        alt=""
        caption={`${exhibition.year} - ${exhibition.title}`}
        captionPlacement="dialog"
        buttonLabel={`Ampliar imagem da exposição ${exhibition.title}`}
        dialogLabel={`Imagem ampliada da exposição ${exhibition.title}`}
        className={imageFrameClass}
      />
      <div className={featured ? "mt-6 flex flex-col justify-center md:mt-0" : "mt-4"}>
        <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-[#8b1d2c]">{exhibition.year}</span>
        <h3 className={`${featured ? "text-3xl md:text-5xl" : "text-xl"} mt-2 font-display font-normal leading-tight text-[#1f1e1c]`}>
          {exhibition.title}
        </h3>
      </div>
    </article>
  );
}
