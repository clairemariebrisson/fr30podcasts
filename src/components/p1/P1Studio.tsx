"use client";

import { useMemo } from "react";
import {
  STUDIO_STEPS,
  SECTIONS,
  BRIQUES,
  MODELE,
  RX,
  FOCUS_ECOUTE,
  REFLEXION,
  CHECKS,
  CIBLES,
  type StepId,
  type SectionKey,
  type Brique,
} from "@/data/podcast1";
import { estimateSeconds } from "@/lib/studio";
import { Gloss } from "@/components/Gloss";
import { P1Provider, useP1 } from "@/components/p1/p1-context";

const SECTION_TITRES: Record<SectionKey, string> = {
  accroche: "Accroche",
  corps: "Le corps — citations + analyse",
  chute: "Chute",
};

// ---- Étape « Observer » ----------------------------------------------------
function StepObserver() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Le reportage-modèle · thème : {MODELE.theme}
        </p>
        {MODELE.audio && (
          <audio controls src={MODELE.audio} className="mt-3 w-full">
            Votre navigateur ne lit pas l’audio.
          </audio>
        )}
        <p className="mt-3 italic leading-relaxed text-foreground/85">
          « {MODELE.texte} »
        </p>
      </div>

      <div>
        <Gloss
          as="h4"
          en="The model, function by function"
          className="mb-3 font-semibold text-foreground"
        >
          Le modèle, fonction par fonction
        </Gloss>
        <div className="space-y-3">
          {MODELE.segments.map((s) => (
            <div
              key={s.partie}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <Gloss
                as="p"
                en={`${s.partie_en} — ${s.fonction_en}`}
                className="text-xs font-semibold uppercase tracking-wide text-primary"
                glossClassName="ml-1 inline font-normal normal-case italic text-muted"
              >
                {s.partie} <span className="font-normal text-muted">— {s.fonction}</span>
              </Gloss>
              <p className="mt-1 italic text-foreground/85">« {s.texte} »</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-5">
        <Gloss as="h4" en="What to notice" className="font-semibold text-accent">
          Ce qu’il faut remarquer
        </Gloss>
        <ul className="mt-3 space-y-2">
          {MODELE.remarquer.map((r) => (
            <li key={r.fr} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <Gloss en={r.en} className="text-sm leading-relaxed text-foreground/85">
                {r.fr}
              </Gloss>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---- Étape « Repérer la forme » --------------------------------------------
function StepReperer() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {RX.map((r) => (
        <div key={r.id} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <h4 className="font-semibold text-foreground">{r.label}</h4>
          <Gloss
            as="p"
            en={r.fonction_en}
            className="mt-0.5 text-sm text-primary"
            glossClassName="ml-1 inline italic text-muted"
          >
            {r.fonction}
          </Gloss>
          <p className="mt-3 rounded-lg bg-background/60 px-3 py-2 text-sm italic text-foreground/80">
            « {r.modele} »
          </p>
          <Gloss
            en={r.diction_en}
            className="mt-3 text-sm leading-relaxed text-muted"
          >
            🎙️ {r.diction}
          </Gloss>
        </div>
      ))}
    </div>
  );
}

// ---- Étape « Co-construire » ------------------------------------------------
function BrickField({ b }: { b: Brique }) {
  const { bricks, setBrick, raw, setRaw } = useP1();
  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <Gloss
          as="h4"
          en={`${b.titre_en} — ${b.fonction_en}`}
          className="font-semibold text-foreground"
          glossClassName="ml-1 inline font-normal italic text-muted"
        >
          {b.titre} <span className="font-normal text-muted">— {b.fonction}</span>
        </Gloss>
        <span className="text-xs font-medium text-accent">{b.structure}</span>
      </div>

      <p className="mt-2 text-sm">
        <span className="font-semibold text-foreground">Modèle : </span>
        <span className="italic text-foreground/80">« {b.modele} »</span>
      </p>
      <p className="mt-1 text-sm">
        <span className="font-semibold text-primary">Cadre : </span>
        <span className="text-foreground/80">{b.cadre}</span>
      </p>

      {b.raw && (
        <div className="mt-3">
          <Gloss
            as="label"
            en="Your raw quote from Part 1 (the street)"
            className="text-xs font-semibold uppercase tracking-wide text-muted"
          >
            Votre citation brute (Partie 1)
          </Gloss>
          <textarea
            value={raw[b.id] ?? ""}
            onChange={(e) => setRaw(b.id, e.target.value)}
            rows={2}
            placeholder="Collez ici ce qu’on vous a vraiment dit dans la rue…"
            className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-foreground/90 placeholder:text-muted/70 focus:border-primary focus:outline-none"
          />
        </div>
      )}

      <textarea
        value={bricks[b.id] ?? ""}
        onChange={(e) => setBrick(b.id, e.target.value)}
        rows={2}
        placeholder="Votre version…"
        className="mt-3 w-full rounded-lg border border-border bg-surface px-3 py-2 text-foreground focus:border-primary focus:outline-none"
      />
      <Gloss en={b.aide_en} className="mt-2 text-xs italic text-muted">
        💡 {b.aide}
      </Gloss>
    </div>
  );
}

function AssembledScript() {
  const { fullScript } = useP1();
  const secs = fullScript ? estimateSeconds(fullScript) : 0;
  if (!fullScript) return null;
  return (
    <div className="mt-6 rounded-xl border border-primary/30 bg-primary-soft/30 p-5">
      <div className="flex items-baseline justify-between">
        <Gloss as="h4" en="Your report so far" className="font-semibold text-primary">
          Votre reportage, pour l’instant
        </Gloss>
        <span className="text-sm text-muted">≈ {secs} s</span>
      </div>
      <p className="mt-2 whitespace-pre-wrap leading-relaxed text-foreground/85">
        {fullScript}
      </p>
    </div>
  );
}

function StepConstruire() {
  return (
    <div className="space-y-8">
      {SECTIONS.map((section) => {
        const [lo, hi] = CIBLES[section];
        return (
          <div key={section}>
            <div className="mb-3 flex items-baseline gap-3">
              <h3 className="font-serif text-xl text-foreground">
                {SECTION_TITRES[section]}
              </h3>
              <span className="text-xs text-muted">cible : {lo}–{hi} s</span>
            </div>
            <div className="space-y-4">
              {BRIQUES.filter((b) => b.section === section).map((b) => (
                <BrickField key={b.id} b={b} />
              ))}
            </div>
          </div>
        );
      })}
      <AssembledScript />
    </div>
  );
}

// ---- Étape « Vérifier » ----------------------------------------------------
function StepVerifier() {
  const { fullScript } = useP1();
  const results = useMemo(
    () => RX.map((r) => ({ rule: r, found: r.test.test(fullScript) })),
    [fullScript],
  );
  const hits = results.filter((r) => r.found).length;

  return (
    <div className="space-y-4">
      {!fullScript && (
        <p className="rounded-lg border border-accent/30 bg-accent-soft/40 px-4 py-3 text-sm text-foreground/80">
          Construisez d’abord votre reportage à l’étape « Co-construire » — la
          vérification s’appuie sur votre texte.
        </p>
      )}
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
          {hits}
        </span>
        <Gloss
          en={`${hits} of ${RX.length} Part 2 structures detected in your report.`}
          className="text-sm text-foreground/85"
        >
          {hits} structure{hits > 1 ? "s" : ""} sur {RX.length} repérée
          {hits > 1 ? "s" : ""} dans votre reportage.
        </Gloss>
      </div>

      <div className="space-y-3">
        {results.map(({ rule, found }) => (
          <div
            key={rule.id}
            className={`rounded-xl border p-4 ${
              found
                ? "border-accent/40 bg-accent-soft/30"
                : "border-border bg-surface"
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  found ? "bg-accent text-on-accent" : "bg-border text-muted"
                }`}
              >
                {found ? "✓" : "·"}
              </span>
              <div>
                <h4 className="font-semibold text-foreground">{rule.label}</h4>
                {found ? (
                  <p className="mt-0.5 text-sm text-accent">Repérée dans votre texte.</p>
                ) : (
                  <>
                    <p className="mt-0.5 text-sm text-muted">{rule.essayer}</p>
                    <p className="mt-1 text-sm italic text-foreground/70">
                      {rule.exemple}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Étape « Oser » --------------------------------------------------------
function StepOser() {
  const { fullScript, notes, setNote } = useP1();
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-primary/30 bg-primary-soft/30 p-5">
        <Gloss as="h4" en="Read it aloud — your report" className="font-semibold text-primary">
          Lisez-le à voix haute — votre reportage
        </Gloss>
        <p className="mt-2 whitespace-pre-wrap leading-relaxed text-foreground/85">
          {fullScript || "Construisez votre reportage à l’étape « Co-construire »."}
        </p>
      </div>

      <div>
        <Gloss as="h4" en="What to listen for" className="mb-3 font-semibold text-foreground">
          À surveiller en vous entraînant
        </Gloss>
        <ul className="space-y-2">
          {FOCUS_ECOUTE.map((f) => (
            <li key={f.fr} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <Gloss en={f.en} className="text-sm leading-relaxed text-foreground/85">
                {f.fr}
              </Gloss>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-border bg-surface p-5">
        <Gloss as="h4" en="Quick reflection" className="font-semibold text-foreground">
          Petite réflexion
        </Gloss>
        <div className="mt-3 space-y-3">
          {REFLEXION.map((amorce, i) => (
            <div key={i}>
              <label className="text-sm text-muted">{amorce}</label>
              <input
                value={notes[`refl-${i}`] ?? ""}
                onChange={(e) => setNote(`refl-${i}`, e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Étape « Avant de soumettre » ------------------------------------------
function StepPret() {
  const { checks, setCheck, fullScript } = useP1();
  return (
    <div className="space-y-6">
      <ul className="space-y-3">
        {CHECKS.map((c) => (
          <li key={c.id} className="rounded-xl border border-border bg-surface p-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={checks[c.id] ?? false}
                onChange={(e) => setCheck(c.id, e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0 accent-primary"
              />
              <span>
                <Gloss en={c.en} className="leading-relaxed text-foreground">
                  {c.label}
                </Gloss>
                <Gloss en={c.cible_en} className="mt-1 block text-sm italic text-muted">
                  {c.cible}
                </Gloss>
              </span>
            </label>
          </li>
        ))}
      </ul>

      {fullScript && (
        <div className="rounded-xl border border-primary/30 bg-primary-soft/30 p-5">
          <Gloss as="h4" en="Your final report" className="font-semibold text-primary">
            Votre reportage final
          </Gloss>
          <p className="mt-2 whitespace-pre-wrap leading-relaxed text-foreground/85">
            {fullScript}
          </p>
        </div>
      )}

      <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-5 text-sm leading-relaxed text-foreground/85">
        <strong className="text-foreground">Soumission : </strong>
        un seul fichier audio (Partie 1 + Partie 2), ≈ 3 à 3,5 min —{" "}
        <span className="font-semibold text-accent">FR30_(VOTRE NOM)_Podcast1.mp3</span>.
      </div>
    </div>
  );
}

const PANELS: Record<StepId, () => React.ReactElement> = {
  observer: StepObserver,
  reperer: StepReperer,
  construire: StepConstruire,
  verifier: StepVerifier,
  oser: StepOser,
  pret: StepPret,
};

function StudioInner() {
  const { step, setStep } = useP1();
  const i = STUDIO_STEPS.findIndex((s) => s.id === step);
  const current = STUDIO_STEPS[i];
  const Panel = PANELS[step];

  return (
    <div>
      <ol className="mb-8 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
        {STUDIO_STEPS.map((s, idx) => {
          const state = idx === i ? "current" : idx < i ? "done" : "todo";
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
                        ? "bg-accent text-on-accent"
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

      <div className="mb-6">
        <Gloss
          as="p"
          en={current.phase_en}
          className="text-xs font-semibold uppercase tracking-widest text-accent"
          glossClassName="ml-1 inline font-normal normal-case tracking-normal italic text-muted"
        >
          {current.phase}
        </Gloss>
        <h3 className="mt-1 font-serif text-2xl text-foreground sm:text-3xl">
          {current.titre}
        </h3>
        <Gloss as="p" en={current.sous_en} className="mt-1 text-muted">
          {current.sous}
        </Gloss>
        <div className="mt-3 rounded-lg border-l-4 border-primary bg-primary-soft/40 px-4 py-2.5">
          <Gloss
            en={`Goal: ${current.objectif_en}`}
            className="text-sm text-foreground/85"
            glossClassName="mt-0.5 block italic text-muted"
          >
            <span className="font-semibold text-primary">Objectif :</span>{" "}
            {current.objectif}
          </Gloss>
        </div>
      </div>

      <Panel />

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
          className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-on-accent shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
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

export default function P1Studio() {
  return (
    <P1Provider>
      <StudioInner />
    </P1Provider>
  );
}
