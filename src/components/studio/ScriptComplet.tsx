"use client";

import { useState } from "react";
import { useStudio } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";

const LABELS: { key: "intro" | "contenu" | "conclusion"; fr: string }[] = [
  { key: "intro", fr: "Intro" },
  { key: "contenu", fr: "Contenu" },
  { key: "conclusion", fr: "Conclusion" },
];

// Affiche le script assemblé à partir des briques (étape « Co-construire »),
// prêt à lire/enregistrer, avec un bouton « copier ».
export function ScriptComplet({
  titleFr,
  titleEn,
}: {
  titleFr: string;
  titleEn: string;
}) {
  const { script, fullScript } = useStudio();
  const [copied, setCopied] = useState(false);

  if (!fullScript.trim()) {
    return (
      <Gloss
        en="Build your script in Co-construire — it will appear here, ready to read."
        className="rounded-xl border border-border bg-surface p-5 text-sm text-muted"
      >
        Construisez votre script à l’étape Co-construire — il apparaîtra ici,
        prêt à lire.
      </Gloss>
    );
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(fullScript);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <div className="rounded-xl border border-primary/30 bg-primary-soft/20 p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <Gloss
          as="p"
          en={titleEn}
          className="text-sm font-semibold uppercase tracking-wide text-primary"
          glossClassName="ml-1 inline font-normal normal-case italic text-muted"
        >
          {titleFr}
        </Gloss>
        <button
          type="button"
          onClick={copy}
          className="rounded-full bg-surface px-3 py-1 text-sm font-medium text-primary shadow-sm ring-1 ring-border transition-colors hover:bg-primary hover:text-white"
        >
          {copied ? "Copié ✓" : "Copier"}
        </button>
      </div>
      <div className="space-y-3">
        {LABELS.filter((l) => script[l.key].trim()).map((l) => (
          <div key={l.key}>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              {l.fr}
            </p>
            <p className="mt-0.5 font-serif text-lg leading-relaxed text-foreground">
              {script[l.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
