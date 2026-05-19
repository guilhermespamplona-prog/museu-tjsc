import type { Exhibition } from "@/data/types";
import ZoomableImageDialog from "./ZoomableImageDialog";

type ExhibitionCardProps = {
  exhibition: Exhibition;
  featured?: boolean;
};

export default function ExhibitionCard({ exhibition, featured = false }: ExhibitionCardProps) {
  return (
    <article className={`group ${featured ? "md:grid md:grid-cols-[1.25fr_0.75fr] md:gap-8" : ""}`}>
      <ZoomableImageDialog
        src={exhibition.imageUrl}
        alt={exhibition.imageAlt}
        caption={`${exhibition.year} - ${exhibition.title}`}
        className={featured ? "h-full" : ""}
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
