"use client";

import { useState } from "react";
import { PRON, PRON_DEFAUT, FOCUS_ECOUTE, REFLEXION } from "@/data/podcast0";
import { useStudio } from "@/components/studio-context";
import { useRecorder } from "@/components/use-recorder";
import { Gloss } from "@/components/Gloss";
import { PeerTask } from "@/components/studio/PeerTask";
import { Reflection } from "@/components/studio/Reflection";
import { normalize, splitSentences } from "@/lib/studio";

export default function StepPrononcer() {
  const { fullScript } = useStudio();
  const norm = normalize(fullScript);

  // Mots difficiles présents dans le script (sinon, sélection par défaut).
  const inScript = PRON.filter((p) => norm.includes(normalize(p.mot)));
  const words =
    inScript.length > 0
      ? inScript
      : PRON.filter((p) => PRON_DEFAUT.includes(p.mot));

  const sentences = splitSentences(fullScript);

  return (
    <div className="space-y-10">
      {/* Mots difficiles — fiche de référence (banque de mots) */}
      <div>
        <Gloss
          as="p"
          en={
            inScript.length > 0
              ? "Tricky words found in your script"
              : "A few tricky words to warm up"
          }
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          {inScript.length > 0
            ? "Mots difficiles repérés dans votre script"
            : "Quelques mots difficiles pour s’échauffer"}
        </Gloss>
        <div className="grid gap-3 sm:grid-cols-2">
          {words.map((p) => (
            <div
              key={p.mot}
              className="rounded-xl border border-border bg-surface p-4 shadow-sm"
            >
              <p className="font-serif text-lg font-semibold text-foreground">
                {p.mot}
              </p>
              <p className="mt-1 font-mono text-sm text-accent">{p.decoupe}</p>
              <p className="mt-1 text-sm text-muted">{p.astuce}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Répéter & remarquer */}
      {sentences.length > 0 ? (
        <Rehearsal sentences={sentences} />
      ) : (
        <Gloss
          en="Write your script in the Construire step to rehearse it here, sentence by sentence."
          className="rounded-xl border border-border bg-surface p-6 text-muted"
        >
          Écrivez votre script à l’étape Construire pour le répéter ici, phrase
          par phrase.
        </Gloss>
      )}
    </div>
  );
}

function Rehearsal({ sentences }: { sentences: string[] }) {
  const [i, setI] = useState(0);
  const rec = useRecorder();
  const sentence = sentences[i];

  function go(next: number) {
    rec.clear();
    setI((next + sentences.length) % sentences.length);
  }

  return (
    <div>
      <Gloss
        as="p"
        en="Rehearse sentence by sentence"
        className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
        glossClassName="mt-1 block font-normal normal-case italic text-muted"
      >
        Répétez phrase par phrase
        <span className="ml-2 font-normal normal-case text-muted">
          {i + 1} / {sentences.length}
        </span>
      </Gloss>

      {/* La phrase à dire + enregistreur */}
      <div className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-6">
        <p className="font-serif text-xl leading-snug text-foreground">
          {sentence}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {!rec.recording ? (
            <button
              type="button"
              onClick={rec.start}
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              Vous enregistrer
            </button>
          ) : (
            <button
              type="button"
              onClick={rec.stop}
              className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-white shadow-sm"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-sm bg-red-400" />
              Arrêter
            </button>
          )}
          {rec.audioUrl && (
            <button
              type="button"
              onClick={rec.clear}
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              Refaire
            </button>
          )}
        </div>

        {rec.error && <p className="mt-3 text-sm text-primary">{rec.error}</p>}
        {rec.audioUrl && (
          <div className="mt-4">
            <Gloss
              as="p"
              en="Listen back to yourself:"
              className="mb-1 text-sm text-muted"
              glossClassName="ml-1 inline italic"
            >
              Réécoutez-vous :
            </Gloss>
            <audio controls src={rec.audioUrl} className="w-full" />
          </div>
        )}
      </div>

      {/* En vous réécoutant — points d'attention (engagement cognitif) */}
      <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
        <Gloss
          as="p"
          en="As you listen back, pay attention to…"
          className="text-xs font-semibold uppercase tracking-wide text-accent"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          En vous réécoutant, faites attention à…
        </Gloss>
        <ul className="mt-2 space-y-1 text-sm text-foreground/85">
          {FOCUS_ECOUTE.map((f) => (
            <li key={f.fr}>
              <Gloss en={f.en} as="span" glossClassName="ml-1 italic text-muted">
                — {f.fr}
              </Gloss>
            </li>
          ))}
        </ul>
      </div>

      {/* Réflexion (métacognition, sauvegardée) */}
      <div className="mt-4">
        <Reflection
          id="prononcer-reflexion"
          starters={REFLEXION}
          placeholder="Après vous être réécouté.e, notez ce que vous remarquez…"
        />
      </div>

      {/* Échange entre pairs (engagement social) */}
      <div className="mt-4">
        <PeerTask en="Play one recorded sentence for a partner. Ask them for one strength and one suggestion.">
          Faites écouter une phrase enregistrée à un.e camarade. Demandez-lui un
          point fort et une suggestion.
        </PeerTask>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(i - 1)}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          ← Phrase précédente
        </button>
        <button
          type="button"
          onClick={() => go(i + 1)}
          className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Phrase suivante →
        </button>
      </div>
    </div>
  );
}
