import { useState } from "react";
import { X } from "lucide-react";

type ZoomableImageDialogProps = {
  src: string;
  alt: string;
  caption?: string;
  captionPlacement?: "both" | "dialog" | "inline";
  buttonLabel?: string;
  dialogLabel?: string;
  className?: string;
};

export default function ZoomableImageDialog({ src, alt, caption, captionPlacement = "both", buttonLabel, dialogLabel, className = "" }: ZoomableImageDialogProps) {
  const [open, setOpen] = useState(false);
  const showInlineCaption = caption && (captionPlacement === "both" || captionPlacement === "inline");
  const showDialogCaption = caption && (captionPlacement === "both" || captionPlacement === "dialog");

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`group block text-left ${className}`} aria-label={buttonLabel ?? `Ampliar imagem: ${alt}`}>
        <span className="block overflow-hidden bg-[#ebe7df]">
          <img src={src} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        </span>
        {showInlineCaption ? <span className="mt-3 block font-ui text-[10px] uppercase tracking-[0.12em] text-[#6d6258]">{caption}</span> : null}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] bg-[#111]/90 p-4 md:p-8" role="dialog" aria-modal="true" aria-label={dialogLabel ?? alt} onClick={() => setOpen(false)}>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#201f1d] transition hover:bg-[#f2efe8]"
            aria-label="Fechar imagem ampliada"
          >
            <X size={18} />
          </button>
          <div className="flex h-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <div className="max-h-full max-w-6xl">
              <img src={src} alt={alt} className="max-h-[82vh] w-auto max-w-full object-contain" />
              {showDialogCaption ? <p className="mt-4 font-body text-sm text-white/75">{caption}</p> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
