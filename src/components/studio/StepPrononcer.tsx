"use client";

import { useState } from "react";
import { PRON, PRON_DEFAUT, METACOG } from "@/data/podcast0";
import { useStudio } from "@/components/studio-context";
import { useRecorder } from "@/components/use-recorder";
import { Gloss } from "@/components/Gloss";
import { normalize, splitSentences } from "@/lib/studio";

// Lecture à voix haute par le navigateur (synthèse vocale).
function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

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
      {/* Mots difficiles */}
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
              <div className="flex items-center justify-between gap-2">
                <p className="font-serif text-lg font-semibold text-foreground">
                  {p.mot}
                </p>
                <button
                  type="button"
                  onClick={() => speak(p.mot)}
                  className="rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  ▶ Écouter
                </button>
              </div>
              <p className="mt-1 font-mono text-sm text-accent">{p.decoupe}</p>
              <p className="mt-1 text-sm text-muted">{p.astuce}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Répétition phrase par phrase */}
      {sentences.length > 0 && <Rehearsal sentences={sentences} />}
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
        en="Repeat sentence by sentence"
        className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
        glossClassName="mt-1 block font-normal normal-case italic text-muted"
      >
        Répétez phrase par phrase
        <span className="ml-2 font-normal normal-case text-muted">
          {i + 1} / {sentences.length}
        </span>
      </Gloss>

      <div className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-6">
        <p className="font-serif text-xl leading-snug text-foreground">
          {sentence}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => speak(sentence)}
            className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
          >
            ▶ Écouter le modèle
          </button>
          {!rec.recording ? (
            <button
              type="button"
              onClick={rec.start}
              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-white" /> Enregistrer
            </button>
          ) : (
            <button
              type="button"
              onClick={rec.stop}
              className="flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-sm bg-red-400" />{" "}
              Arrêter
            </button>
          )}
        </div>

        {rec.error && <p className="mt-3 text-sm text-primary">{rec.error}</p>}
        {rec.audioUrl && (
          <div className="mt-4">
            <p className="mb-1 text-sm text-muted">Réécoutez-vous :</p>
            <audio controls src={rec.audioUrl} className="w-full" />
          </div>
        )}
      </div>

      {/* Métacognition */}
      <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
        <Gloss
          as="p"
          en="After listening, ask yourself…"
          className="text-xs font-semibold uppercase tracking-wide text-accent"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Après l’écoute, demandez-vous…
        </Gloss>
        <ul className="mt-2 space-y-1 text-sm text-foreground/80">
          {METACOG.map((m) => (
            <li key={m}>— {m}</li>
          ))}
        </ul>
      </div>

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
