"use client";

import type { ElementType, ReactNode } from "react";
import { usePrefs } from "@/components/prefs-context";

// Affiche le texte français (children) ; en mode anglais, ajoute une glose
// anglaise discrète juste en dessous, pour aider les étudiant.e.s qui se
// perdent dans les consignes.
export function Gloss({
  children,
  en,
  as,
  className,
  glossClassName,
}: {
  children: ReactNode;
  en: string;
  as?: ElementType;
  className?: string;
  glossClassName?: string;
}) {
  const { lang } = usePrefs();
  const Tag: ElementType = as ?? "p";
  return (
    <Tag className={className}>
      {children}
      {lang === "en" && (
        <span
          className={
            glossClassName ??
            "mt-1 block text-sm font-normal not-italic text-muted"
          }
        >
          {en}
        </span>
      )}
    </Tag>
  );
}
