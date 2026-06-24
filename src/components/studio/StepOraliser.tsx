"use client";

import { useStudio } from "@/components/studio-context";
import { splitSentences, analyzeOral } from "@/lib/studio";
import { Gloss } from "@/components/Gloss";

export default function StepOraliser() {
  const { fullScript } = useStudio();
  const sentences = splitSentences(fullScript);

  if (sentences.length === 0) {
    return (
      <Gloss
        en="Nothing to work on yet — come back after writing your script."
        className="rounded-xl border border-border bg-surface p-6 text-muted"
      >
        Rien à oraliser pour l’instant — revenez après avoir écrit votre script.
      </Gloss>
    );
  }

  const analyzed = sentences.map((s) => ({ s, ...analyzeOral(s) }));
  const flagged = analyzed.filter((a) => a.written);

  return (
    <div className="space-y-4">
      <Gloss
        en="A podcast is spoken, not read. Here are the sentences that 'sound written' — with a more speakable version to try."
        className="text-foreground/85"
      >
        Un podcast se <em>parle</em>, il ne se lit pas. Voici les phrases qui
        « sonnent écrit » — avec une version plus parlable à essayer.
      </Gloss>

      {flagged.length === 0 ? (
        <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-6 text-accent">
          ✓ Vos phrases sonnent déjà naturelles à l’oral. Bravo !
        </div>
      ) : (
        <ul className="space-y-4">
          {flagged.map((a, i) => (
            <li
              key={i}
              className="rounded-xl border border-border bg-surface p-5 shadow-sm"
            >
              <p className="text-sm text-foreground/70">
                <span className="font-semibold text-muted">À l’écrit :</span>{" "}
                {a.s}
              </p>
              <ul className="mt-2 space-y-1">
                {a.raisons.map((r, j) => (
                  <li key={j} className="text-xs text-primary">
                    • {r}
                  </li>
                ))}
              </ul>
              {a.suggestion && (
                <p className="mt-3 rounded-lg bg-accent-soft/50 px-4 py-3 text-sm text-foreground">
                  <span className="font-semibold text-accent">
                    À l’oral :{" "}
                  </span>
                  {a.suggestion}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
