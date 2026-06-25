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
        en="Each item below is a rubric criterion. Check what's true for you — and use the « to aim high » tip to target your best before you record. Not a grade; a last push."
        className="text-foreground/85"
      >
        Chaque point ci-dessous correspond à un critère de la grille. Cochez ce
        qui est vrai pour vous — et servez-vous de l’astuce « pour viser le
        haut » pour cibler votre meilleur avant d’enregistrer. Pas une note : un
        dernier élan.
      </Gloss>

      <ul className="space-y-2">
        {CHECKS.map((c) => {
          const on = !!checks[c.id];
          return (
            <li key={c.id}>
              <div
                className={`rounded-xl border p-4 transition-all ${
                  on
                    ? "border-accent/40 bg-accent-soft/40"
                    : "border-border bg-surface"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setCheck(c.id, !on)}
                  className="flex w-full items-start gap-3 text-left"
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
                  <Gloss
                    as="span"
                    en={c.en}
                    className="font-medium text-foreground"
                    glossClassName="mt-0.5 block text-sm font-normal italic text-muted"
                  >
                    {c.label}
                  </Gloss>
                </button>
                <Gloss
                  en={c.cible_en}
                  className="mt-2 pl-9 text-sm text-primary"
                  glossClassName="mt-0.5 block italic text-muted"
                >
                  {c.cible}
                </Gloss>
              </div>
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
              en="Find a quiet spot and record on your phone (Voice Memos / Recorder) or your computer. Then upload your file to Canvas. Good take!"
              className="mt-2 text-foreground/80"
            >
              Trouvez un endroit calme et enregistrez sur votre téléphone
              (Dictaphone / Voice Memos) ou votre ordinateur. Déposez ensuite
              votre fichier sur Canvas. Bonne prise !
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
