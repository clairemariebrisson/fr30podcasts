import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FR30 · Podcast 1 — Du micro-trottoir au reportage",
  description:
    "Guide du Podcast 1 (Partie 2) pour le cours FR30 : transformer un micro-trottoir spontané en un court reportage journalistique structuré — studio PACE, structures de l'unité et grille d'évaluation.",
};

export default function Podcast1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // `theme-marigold` re-teinte l'accent (marigold) pour tout le Podcast 1,
  // sans toucher au Podcast 0. `contents` n'introduit aucune boîte de mise en page.
  return <div className="contents theme-marigold">{children}</div>;
}
