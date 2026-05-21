import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

type ZoomableImageDialogProps = {
  src: string;
  alt: string;
  caption?: string;
  captionPlacement?: "both" | "dialog" | "inline";
  buttonLabel?: string;
  dialogLabel?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
  className?: string;
};

export default function ZoomableImageDialog({ src, alt, caption, captionPlacement = "both", buttonLabel, dialogLabel, loading = "lazy", decoding = "async", fetchPriority = "auto", className = "" }: ZoomableImageDialogProps) {
  const showInlineCaption = caption && (captionPlacement === "both" || captionPlacement === "inline");
  const showDialogCaption = caption && (captionPlacement === "both" || captionPlacement === "dialog");
  const accessibleTitle = dialogLabel ?? alt;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={`group block text-left ${className}`} aria-label={buttonLabel ?? `Ampliar imagem: ${alt}`}>
          <span className="block overflow-hidden bg-[#ebe7df]">
            <img src={src} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading={loading} decoding={decoding} fetchPriority={fetchPriority} />
          </span>
          {showInlineCaption ? <span className="mt-3 block font-ui text-[10px] uppercase tracking-[0.12em] text-[#6d6258]">{caption}</span> : null}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div className="museu-tjsc-app">
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-[#111]/92" />
          <Dialog.Content className="fixed inset-0 z-[81] p-3 outline-none md:p-6">
            <Dialog.Title className="sr-only">{accessibleTitle}</Dialog.Title>
            {caption ? <Dialog.Description className="sr-only">{caption}</Dialog.Description> : null}
            <Dialog.Close asChild>
              <button
                type="button"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#201f1d] transition hover:bg-[#f2efe8]"
                aria-label="Fechar imagem ampliada"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
            <div className="flex h-full items-center justify-center">
              <figure className="flex h-full w-full max-w-[96vw] flex-col items-center justify-center gap-4">
                <div className="min-h-0 w-full flex-1">
                  <img src={src} alt={alt} className="h-full w-full object-contain" decoding="async" />
                </div>
                {showDialogCaption ? <figcaption className="shrink-0 font-body text-sm leading-relaxed text-white/75 md:text-base">{caption}</figcaption> : null}
              </figure>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
