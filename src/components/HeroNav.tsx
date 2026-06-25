"use client";

import { useSections } from "@/components/sections-context";

const LINKS = [
  { id: "objectif", num: "01", label: "Objectif" },
  { id: "studio", num: "02", label: "Studio" },
  { id: "enregistrement", num: "03", label: "Enregistrement" },
  { id: "evaluation", num: "04", label: "Évaluation" },
];

// Boutons élégants du hero : ouvrent la section (et la déroulent) puis y défilent.
export function HeroNav() {
  const { open, setOpen } = useSections();

  function goto(id: string) {
    setOpen(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className="grid w-full grid-cols-2 gap-3 md:w-auto md:max-w-xs">
      {LINKS.map((l) => {
        const active = open === l.id;
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => goto(l.id)}
            className={`rounded-xl border px-4 py-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
              active
                ? "border-primary bg-surface ring-1 ring-primary/30"
                : "border-border bg-surface/80 hover:border-primary/40"
            }`}
          >
            <span className="block text-xs font-semibold uppercase tracking-wide text-primary">
              {l.num}
            </span>
            <span className="mt-0.5 block font-serif text-lg text-foreground">
              {l.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
