"use client";

import { useSections } from "@/components/sections-context";

// Une section repliable : l'en-tête (numéro + titre) reste toujours visible ;
// le corps n'apparaît que si la section est ouverte. Le corps est gardé dans
// le DOM (caché) pour préserver l'état interne (ex. l'étape du studio).
export function CollapsibleSection({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  const { open, setOpen } = useSections();
  const isOpen = open === id;

  return (
    <section id={id} className="scroll-mt-24 border-b border-border">
      <button
        type="button"
        onClick={() => setOpen(isOpen ? "" : id)}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-3 py-5 text-left transition-colors hover:text-primary"
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base font-semibold ${
            isOpen ? "bg-primary text-white" : "bg-primary-soft text-primary"
          }`}
        >
          {num}
        </span>
        <h2 className="flex-1 font-serif text-2xl text-foreground sm:text-3xl">
          {title}
        </h2>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`shrink-0 text-muted transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className={isOpen ? "pb-10" : "hidden"}>{children}</div>
    </section>
  );
}
