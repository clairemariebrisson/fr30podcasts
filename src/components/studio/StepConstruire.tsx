"use client";

import { qualites, HOOKS, scriptSections } from "@/data/podcast0";
import { useStudio, type ScriptKey } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";
import { PeerTask } from "@/components/studio/PeerTask";
import { Reflection } from "@/components/studio/Reflection";

const SECTION_KEYS: ScriptKey[] = ["intro", "contenu", "conclusion"];

export default function StepConstruire() {
  const { selected, toggle, script, setSection } = useStudio();

  return (
    <div className="space-y-8">
      {/* Pré-écriture : trouver des idées avant de rédiger */}
      <div>
        <Gloss
          as="p"
          en="Before writing: jot 2–3 ideas, then keep the best. Don't polish yet."
          className="mb-2 text-sm text-foreground/85"
          glossClassName="mt-0.5 block italic text-muted"
        >
          Avant de rédiger : notez 2 à 3 idées, puis gardez la meilleure. Ne
          peaufinez pas encore.
        </Gloss>
        <Reflection
          id="construire-brainstorm"
          starters={[
            "Ce qui me rend unique, c’est…",
            "Une accroche possible : …",
            "Ce que je veux qu’on retienne de moi : …",
          ]}
          title="Idées"
          titleEn="Brainstorm"
          placeholder="Vos premières idées, en vrac…"
        />
      </div>

      {/* Banque de qualités */}
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <Gloss
            as="p"
            en="Qualities bank — choose 4 to 6"
            className="text-sm font-semibold uppercase tracking-wide text-muted"
            glossClassName="mt-1 block text-xs font-normal normal-case italic text-muted"
          >
            Banque de qualités — choisissez-en 4 à 6
          </Gloss>
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${
              selected.length >= 4 && selected.length <= 6
                ? "bg-accent-soft text-accent"
                : "bg-primary-soft text-primary"
            }`}
          >
            {selected.length} choisie{selected.length > 1 ? "s" : ""}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {qualites.map((q) => {
            const on = selected.includes(q.terme);
            return (
              <button
                key={q.terme}
                type="button"
                onClick={() => toggle(q.terme)}
                title={`${q.traduction} · ${q.categorie}`}
                className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                  on
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-border bg-surface text-foreground hover:border-primary/40"
                }`}
              >
                {on ? "✓ " : ""}
                {q.terme}
              </button>
            );
          })}
        </div>
      </div>

      {/* Amorces d’accroche */}
      <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
        <Gloss
          as="p"
          en="Hook openers — click one to add it to your intro"
          className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Amorces d’accroche — cliquez pour l’ajouter à votre intro
        </Gloss>
        <div className="flex flex-wrap gap-2">
          {HOOKS.map((h) => (
            <button
              key={h}
              type="button"
              onClick={() =>
                setSection(
                  "intro",
                  (script.intro ? script.intro.trimEnd() + " " : "") + h + " ",
                )
              }
              className="rounded-full bg-surface px-3 py-1.5 text-sm text-accent shadow-sm transition-colors hover:bg-accent hover:text-white"
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Trois sections */}
      <div className="space-y-4">
        {scriptSections.map((s, idx) => {
          const key = SECTION_KEYS[idx];
          return (
            <div
              key={s.titre}
              className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-3 border-b border-border bg-primary-soft/40 px-5 py-3">
                <h4 className="font-serif text-lg font-semibold text-primary">
                  {s.titre}
                </h4>
                <span className="text-sm text-muted">({s.duree})</span>
              </div>
              <div className="px-5 py-4">
                <p className="text-foreground/85">{s.objectif}</p>
                <p className="mt-3 rounded-lg bg-background px-4 py-3 text-[15px] text-muted">
                  <span className="font-semibold text-accent">
                    Exemple :{" "}
                  </span>
                  {s.exemple}
                </p>
                <textarea
                  value={script[key]}
                  onChange={(e) => setSection(key, e.target.value)}
                  rows={3}
                  placeholder="Écrivez votre texte ici…"
                  className="mt-4 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          );
        })}
      </div>

      <PeerTask en="Read your hook aloud to a partner. Does it make them want to hear the rest?">
        Lisez votre phrase d’accroche à un.e camarade. Lui donne-t-elle envie
        d’écouter la suite ?
      </PeerTask>
    </div>
  );
}
