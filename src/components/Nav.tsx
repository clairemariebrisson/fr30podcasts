"use client";

const links = [
  { href: "#objectif", label: "Objectif" },
  { href: "#qualites", label: "Vos qualités" },
  { href: "#script", label: "Votre script" },
  { href: "#enregistrement", label: "Enregistrement" },
  { href: "#evaluation", label: "Évaluation" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-baseline gap-2 font-semibold">
          <span className="rounded bg-primary px-2 py-0.5 text-sm text-white">FR30</span>
          <span className="hidden text-sm text-muted sm:inline">Podcast&nbsp;0</span>
        </a>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
