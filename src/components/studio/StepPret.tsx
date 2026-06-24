"use client";

import { CHECKS } from "@/data/podcast0";
import { useStudio } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";

export default function StepPret() {
  const { checks, setCheck } = useStudio();
  const done = CHECKS.filter((c) => checks[c.id]).length;
  const ready = done === CHECKS.length;

  return (
    <div className="space-y-6">
      <Gloss
        en="One last read-through, at your own pace. Check what's true for you — this isn't a grade, just a last breath before recording."
        className="text-foreground/85"
      >
        Une dernière relecture, à votre rythme. Cochez ce qui est vrai pour
        vous — ceci n’est pas une note, juste un dernier souffle avant
        d’enregistrer.
      </Gloss>

      <ul className="space-y-2">
        {CHECKS.map((c) => {
          const on = !!checks[c.id];
          return (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setCheck(c.id, !on)}
                className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                  on
                    ? "border-accent/40 bg-accent-soft/40"
                    : "border-border bg-surface hover:border-primary/40"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm ${
                    on
                      ? "border-accent bg-accent text-white"
                      : "border-border text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span className="text-foreground">{c.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        className={`rounded-2xl border p-8 text-center transition-all ${
          ready
            ? "border-primary/40 bg-primary-soft/50"
            : "border-border bg-surface"
        }`}
      >
        {ready ? (
          <>
            <Gloss
              as="p"
              en="You're ready to record."
              className="font-serif text-2xl text-primary"
              glossClassName="mt-1 block text-base not-italic text-foreground/70"
            >
              Vous êtes prêt.e à enregistrer.
            </Gloss>
            <Gloss
              en="Find a quiet spot, take a breath, and open Voice Memos. Your script is waiting. Good take!"
              className="mt-2 text-foreground/80"
            >
              Trouvez un endroit calme, respirez, et lancez Voice Memos. Votre
              script vous attend. Bonne prise !
            </Gloss>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-foreground">
              {done} / {CHECKS.length} — presque !
            </p>
            <p className="mt-1 text-muted">
              Reprenez ce qui manque dans les étapes précédentes, puis revenez
              cocher la dernière case.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
