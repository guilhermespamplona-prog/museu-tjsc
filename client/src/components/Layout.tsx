import { Link, useLocation } from "wouter";

const primaryNav = [
  { label: "Visitar", href: "/visitacoes" },
  { label: "Exposições", href: "/exposicoes" },
  { label: "Acervo", href: "/acervo-digital" },
  { label: "Pesquisa acadêmica", href: "/pesquisa" },
];

const navGroups = [
  {
    label: "História e memória",
    links: [
      { label: "Museu", href: "/museu" },
      { label: "História do Tribunal", href: "/historia" },
      { label: "História escrita", href: "/historia-escrita" },
      { label: "História oral", href: "/historia-oral" },
    ],
  },
  {
    label: "Acervos e registros",
    links: [
      { label: "Arquivo", href: "/arquivo" },
      { label: "Biblioteca", href: "/biblioteca" },
      { label: "Vídeos", href: "/videos" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  {
    label: "Institucional",
    links: [
      { label: "Capela", href: "/capela" },
      { label: "Composição", href: "/composicao" },
      { label: "Atribuições", href: "/atribuicoes" },
    ],
  },
];

function NavLink({ label, href }: { label: string; href: string }) {
  const [location] = useLocation();
  const active = location === href;

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`block shrink-0 whitespace-nowrap font-ui text-[11px] uppercase leading-none tracking-[0.11em] underline-offset-4 transition hover:text-[#8b1d2c] hover:underline ${active ? "text-[#8b1d2c]" : "text-[#23211f]"}`}
    >
      {label}
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#23211f]">
      <a href="#museu-tjsc-main" className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:not-sr-only focus:bg-[#8b1d2c] focus:px-4 focus:py-3 focus:font-ui focus:text-[11px] focus:uppercase focus:tracking-[0.14em] focus:text-white">
        Ir para o conteúdo principal
      </a>
      <header className="sticky top-0 z-50 border-b border-[#ddd6cc] bg-[#fbfaf7]/95 backdrop-blur">
        <div className="grid gap-3 px-5 py-3 md:px-8 lg:px-12 xl:grid-cols-[280px_1fr] xl:items-start">
          <Link href="/" className="block underline-offset-4 hover:underline">
            <span className="block font-ui text-[11px] uppercase tracking-[0.18em] text-[#8b1d2c]">Memória TJSC</span>
            <span className="block font-display text-lg leading-none text-[#23211f] md:text-xl">Acervo e história do TJSC</span>
          </Link>

          <div className="grid gap-2 xl:justify-items-end">
            <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-7 gap-y-2 xl:justify-end">
              {primaryNav.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
              <a href="https://atom.tjsc.jus.br/" target="_blank" rel="noopener noreferrer" aria-label="Abrir AtoM em nova aba" className="block shrink-0 whitespace-nowrap font-ui text-[11px] uppercase leading-none tracking-[0.11em] text-[#23211f] underline-offset-4 transition hover:text-[#8b1d2c] hover:underline">
                AtoM
              </a>
            </nav>

            <nav aria-label="Seções do site" className="w-full border-t border-[#ddd6cc] pt-3 xl:max-w-5xl">
              <div className="grid gap-x-5 gap-y-3 md:grid-cols-[1.15fr_1fr_0.9fr]">
                {navGroups.map((group) => (
                  <div key={group.label} className="grid content-start gap-2 md:border-l md:border-[#ddd6cc] md:pl-5 first:md:border-l-0 first:md:pl-0">
                    <p className="font-ui text-[9px] uppercase tracking-[0.16em] text-[#8b1d2c]">{group.label}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      {group.links.map((item) => (
                        <NavLink key={item.href} {...item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main id="museu-tjsc-main">{children}</main>
    </div>
  );
}
