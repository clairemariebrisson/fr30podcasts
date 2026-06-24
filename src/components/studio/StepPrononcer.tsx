"use client";

import { useState } from "react";
import { PRON, PRON_DEFAUT, FOCUS_ECOUTE, REFLEXION } from "@/data/podcast0";
import { useStudio } from "@/components/studio-context";
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

      {/* S'entraîner à voix haute */}
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
  const sentence = sentences[i];

  return (
    <div>
      <Gloss
        as="p"
        en="Rehearse aloud, sentence by sentence"
        className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
        glossClassName="mt-1 block font-normal normal-case italic text-muted"
      >
        Entraînez-vous à voix haute, phrase par phrase
        <span className="ml-2 font-normal normal-case text-muted">
          {i + 1} / {sentences.length}
        </span>
      </Gloss>

      {/* La phrase à dire */}
      <div className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-6">
        <Gloss
          as="p"
          en="Say this sentence aloud a few times, until it flows."
          className="text-xs font-semibold uppercase tracking-widest text-primary"
          glossClassName="mt-0.5 block font-normal normal-case tracking-normal italic text-muted"
        >
          Dites cette phrase à voix haute, plusieurs fois, jusqu’à ce qu’elle
          soit fluide.
        </Gloss>
        <p className="mt-3 font-serif text-xl leading-snug text-foreground">
          {sentence}
        </p>
      </div>

      {/* Pendant que vous vous entraînez — points d'attention (cognitif) */}
      <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
        <Gloss
          as="p"
          en="As you rehearse, pay attention to…"
          className="text-xs font-semibold uppercase tracking-wide text-accent"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Pendant que vous vous entraînez, faites attention à…
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
          placeholder="Après vous être entraîné.e, notez ce que vous remarquez…"
        />
      </div>

      {/* Échange entre pairs — réponse centrée sur le sens (engagement social) */}
      <div className="mt-4">
        <PeerTask en="Say your intro to a partner (no recording yet). What do they learn about you? Would they want to hear more?">
          Dites votre intro à un.e camarade (sans enregistrer pour l’instant).
          Qu’est-ce qu’iel apprend sur vous ? Voudrait-iel en écouter plus ?
        </PeerTask>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setI((i - 1 + sentences.length) % sentences.length)}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          ← Phrase précédente
        </button>
        <button
          type="button"
          onClick={() => setI((i + 1) % sentences.length)}
          className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Phrase suivante →
        </button>
      </div>
    </div>
  );
}
