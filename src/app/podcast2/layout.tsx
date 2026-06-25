import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FR30 · Podcast 2 — La pub de terroir",
  description:
    "Guide du Podcast 2 pour le cours FR30 (Unité 2) : réaliser une mini-pub vidéo (Reels / TikTok / tourisme) pour un produit de terroir francophone — studio PACE, structures de l'unité et grille d'évaluation.",
};

export default function Podcast2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // `theme-vigne` re-teinte l'accent (vert vigne) pour tout le Podcast 2, sans
  // toucher aux autres podcasts. `contents` n'introduit aucune boîte de layout.
  return <div className="contents theme-vigne">{children}</div>;
}
