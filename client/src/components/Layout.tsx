import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { visitInfo } from "@/data/memoria";

const primaryNav = [
  { label: "Visitar", href: "/visitacoes" },
  { label: "Exposições", href: "/exposicoes" },
  { label: "Acervo", href: "/acervo-digital" },
  { label: "Percursos", href: "/historia" },
  { label: "Vídeos", href: "/videos" },
  { label: "Pesquisa", href: "/pesquisa" },
];

const secondaryNav = [
  { label: "Museu", href: "/museu" },
  { label: "História escrita", href: "/historia-escrita" },
  { label: "História oral", href: "/historia-oral" },
  { label: "Eventos", href: "/eventos" },
  { label: "Capela", href: "/capela" },
  { label: "Biblioteca", href: "/biblioteca" },
  { label: "Arquivo", href: "/arquivo" },
  { label: "Composição", href: "/composicao" },
  { label: "Atribuições", href: "/atribuicoes" },
];

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const [location] = useLocation();
  const active = location === href;

  return (
    <Link href={href} onClick={onClick}>
      <span className={`font-ui text-[12px] uppercase tracking-[0.12em] underline-offset-4 transition hover:text-[#8b1d2c] hover:underline ${active ? "text-[#8b1d2c]" : "text-[#23211f]"}`}>
        {label}
      </span>
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#23211f]">
      <header className="sticky top-0 z-50 border-b border-[#ddd6cc] bg-[#fbfaf7]/95 backdrop-blur">
        <div className="grid grid-cols-[1fr_auto] items-center gap-6 px-5 py-4 md:px-8 lg:grid-cols-[260px_1fr_auto] lg:px-12">
          <Link href="/">
            <span className="block font-ui text-[11px] uppercase tracking-[0.18em] text-[#8b1d2c]">Memória TJSC</span>
            <span className="block font-display text-lg leading-none text-[#23211f] md:text-xl">Museu do Judiciário Catarinense</span>
          </Link>

          <nav className="hidden items-center justify-center gap-6 lg:flex">
            {primaryNav.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://atom.tjsc.jus.br/" target="_blank" rel="noopener noreferrer" className="hidden font-ui text-[11px] uppercase tracking-[0.12em] text-[#23211f] underline-offset-4 hover:text-[#8b1d2c] hover:underline md:block">
              AtoM
            </a>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="flex items-center gap-2 font-ui text-[11px] uppercase tracking-[0.12em] text-[#23211f] hover:text-[#8b1d2c]" aria-expanded={menuOpen}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
              Menu
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#ddd6cc] bg-[#fbfaf7] px-5 py-8 md:px-8 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr_1fr]">
              <div>
                <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Essencial</p>
                <div className="mt-4 grid gap-3">
                  {primaryNav.map((item) => (
                    <NavLink key={item.href} {...item} onClick={() => setMenuOpen(false)} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Coleções e memória</p>
                <div className="mt-4 grid gap-3">
                  {secondaryNav.map((item) => (
                    <NavLink key={item.href} {...item} onClick={() => setMenuOpen(false)} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Visitação</p>
                <p className="mt-4 font-body text-sm leading-relaxed text-[#635b52]">{visitInfo.hours}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-[#635b52]">{visitInfo.address}</p>
                <a href={`mailto:${visitInfo.email}`} className="mt-4 block font-ui text-[11px] uppercase tracking-[0.12em] text-[#8b1d2c] underline-offset-4 hover:underline">
                  {visitInfo.email}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-[#ddd6cc] bg-[#f2efe8] px-5 py-12 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Memória</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-[#23211f]">Uma porta digital para a história do Poder Judiciário catarinense.</h2>
            <p className="mt-5 max-w-xl font-body text-sm leading-relaxed text-[#635b52]">
              Um percurso digital para descobrir documentos, objetos, vozes e lugares que atravessam a história da Justiça em Santa Catarina.
            </p>
          </div>

          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Navegação</p>
            <div className="mt-4 grid gap-2">
              {[...primaryNav, ...secondaryNav.slice(0, 4)].map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="font-ui text-[11px] uppercase tracking-[0.12em] text-[#23211f] underline-offset-4 hover:text-[#8b1d2c] hover:underline">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#8b1d2c]">Contato do Museu</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-[#635b52]">{visitInfo.address}</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-[#635b52]">{visitInfo.phones.join(" / ")}</p>
            <a href={`mailto:${visitInfo.email}`} className="mt-3 block font-ui text-[11px] uppercase tracking-[0.12em] text-[#8b1d2c] underline-offset-4 hover:underline">
              {visitInfo.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
