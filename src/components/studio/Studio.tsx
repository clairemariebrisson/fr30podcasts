"use client";

import { STUDIO_STEPS, type StepId } from "@/data/podcast0";
import { StudioProvider, useStudio } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";
import StepConstruire from "./StepConstruire";
import StepVerifier from "./StepVerifier";
import StepOraliser from "./StepOraliser";
import StepDecouper from "./StepDecouper";
import StepPrononcer from "./StepPrononcer";
import StepPret from "./StepPret";

const PANELS: Record<StepId, () => React.ReactElement> = {
  construire: StepConstruire,
  verifier: StepVerifier,
  oraliser: StepOraliser,
  decouper: StepDecouper,
  prononcer: StepPrononcer,
  pret: StepPret,
};

function StudioInner() {
  const { step, setStep } = useStudio();
  const i = STUDIO_STEPS.findIndex((s) => s.id === step);
  const current = STUDIO_STEPS[i];
  const Panel = PANELS[step];

  return (
    <div>
      {/* Stepper */}
      <ol className="mb-8 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {STUDIO_STEPS.map((s, idx) => {
          const state =
            idx === i ? "current" : idx < i ? "done" : "todo";
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setStep(s.id)}
                aria-current={state === "current"}
                className={`flex w-full flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center transition-all ${
                  state === "current"
                    ? "border-primary bg-primary-soft shadow-sm"
                    : state === "done"
                      ? "border-accent/40 bg-accent-soft/40 hover:shadow-sm"
                      : "border-border bg-surface hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold ${
                    state === "current"
                      ? "bg-primary text-white"
                      : state === "done"
                        ? "bg-accent text-white"
                        : "bg-border text-foreground"
                  }`}
                >
                  {idx + 1}
                </span>
                <span
                  className={`text-xs font-semibold ${
                    state === "current" ? "text-primary" : "text-foreground"
                  }`}
                >
                  {s.titre}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* En-tête de l'étape */}
      <div className="mb-6">
        <h3 className="font-serif text-2xl text-foreground sm:text-3xl">
          {current.titre}
        </h3>
        <Gloss as="p" en={current.sous_en} className="mt-1 text-muted">
          {current.sous}
        </Gloss>
      </div>

      {/* Contenu de l'étape */}
      <Panel />

      {/* Navigation préc./suiv. */}
      <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
        <button
          type="button"
          disabled={i === 0}
          onClick={() => setStep(STUDIO_STEPS[i - 1].id)}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-30"
        >
          ← {i > 0 ? STUDIO_STEPS[i - 1].titre : ""}
        </button>
        <button
          type="button"
          disabled={i === STUDIO_STEPS.length - 1}
          onClick={() => setStep(STUDIO_STEPS[i + 1].id)}
          className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
        >
          {i < STUDIO_STEPS.length - 1 ? STUDIO_STEPS[i + 1].titre : "Prêt.e"} →
        </button>
      </div>

      <Gloss
        as="p"
        en="Everything is saved automatically in this browser. Nothing leaves your device."
        className="mt-6 text-center text-xs text-muted"
        glossClassName="mt-1 block text-xs italic text-muted/80"
      >
        Tout est enregistré automatiquement dans ce navigateur. Rien ne quitte
        votre appareil.
      </Gloss>
    </div>
  );
}

export default function Studio() {
  return (
    <StudioProvider>
      <StudioInner />
    </StudioProvider>
  );
}
