import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <span className="font-ui text-[10px] tracking-wide-gallery text-[#B8860B] uppercase">
          Erro 404
        </span>
        <h1 className="font-display text-6xl md:text-8xl font-light tracking-gallery text-[#2C2C2C] mt-2">
          404
        </h1>
        <p className="font-body text-[16px] text-[#6B6B6B] mt-6 max-w-md mx-auto">
          A página que você procura não existe ou foi movida.
        </p>
        <Link href="/">
          <span className="inline-flex items-center gap-2 font-ui text-[11px] tracking-wide-gallery uppercase text-[#7A1B2E] hover:text-[#9B2335] transition-colors mt-8">
            <ArrowLeft size={14} />
            VOLTAR AO INÍCIO
          </span>
        </Link>
      </div>
    </div>
  );
}
