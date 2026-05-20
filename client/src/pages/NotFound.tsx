import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="flex min-h-[60vh] items-center justify-center px-5 py-16 md:px-8 lg:px-12">
        <div className="max-w-xl text-center">
          <span className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">
            Página não encontrada
          </span>
          <h1 className="mt-3 font-display text-6xl font-normal leading-none text-[#1f1e1c] md:text-8xl">
            404
          </h1>
          <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-[#635b52]">
            A página que você procura não existe ou foi movida.
          </p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.14em] text-[#8b1d2c] underline-offset-4 transition hover:underline">
            <ArrowLeft size={14} />
            Memória TJSC
          </Link>
        </div>
      </section>
    </Layout>
  );
}
