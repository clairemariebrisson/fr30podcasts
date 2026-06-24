"use client";

import type { ReactNode } from "react";
import { Gloss } from "@/components/Gloss";

// Encadré « Avec un.e camarade » — engagement social (échange entre pairs).
export function PeerTask({
  children,
  en,
}: {
  children: ReactNode;
  en: string;
}) {
  return (
    <div className="rounded-xl border border-accent/30 border-l-4 border-l-accent bg-accent-soft/40 p-4">
      <Gloss
        as="p"
        en="With a partner"
        className="text-xs font-semibold uppercase tracking-wide text-accent"
        glossClassName="ml-1 inline font-normal italic normal-case text-muted"
      >
        Avec un.e camarade
      </Gloss>
      <Gloss en={en} className="mt-1 text-sm leading-relaxed text-foreground/85">
        {children}
      </Gloss>
    </div>
  );
}
