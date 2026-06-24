"use client";

import { CIBLES } from "@/data/podcast0";
import { useStudio, type ScriptKey } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";
import {
  splitSentences,
  countWords,
  estimateSeconds,
  addPauses,
  SEUIL_PHRASE_LONGUE,
} from "@/lib/studio";

const LABELS: Record<ScriptKey, string> = {
  intro: "Intro",
  contenu: "Contenu",
  conclusion: "Conclusion",
};

function Timing({ section, text }: { section: ScriptKey; text: string }) {
  const sec = estimateSeconds(text);
  const [lo, hi] = CIBLES[section];
  const state = !text.trim()
    ? "vide"
    : sec < lo
      ? "court"
      : sec > hi
        ? "long"
        : "ok";
  const color =
    state === "ok"
      ? "text-accent"
      : state === "vide"
        ? "text-muted"
        : "text-primary";
  return (
    <span className={`text-sm font-semibold ${color}`}>
      ≈ {sec}s{" "}
      <span className="font-normal text-muted">
        (cible {lo}–{hi}s
        {state === "court" ? " · un peu court" : ""}
        {state === "long" ? " · un peu long" : ""}
        {state === "ok" ? " · pile bon" : ""})
      </span>
    </span>
  );
}

export default function StepDecouper() {
  const { script, fullScript } = useStudio();

  if (!fullScript.trim()) {
    return (
      <Gloss
        en="Write your script to see pacing, pauses, and estimated durations."
        className="rounded-xl border border-border bg-surface p-6 text-muted"
      >
        Écrivez votre script pour voir le rythme, les pauses et les durées
        estimées.
      </Gloss>
    );
  }

  const sections: ScriptKey[] = ["intro", "contenu", "conclusion"];

  return (
    <div className="space-y-8">
      {/* Durées par section */}
      <div>
        <Gloss
          as="p"
          en="Estimated durations"
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Durées estimées
        </Gloss>
        <div className="grid gap-3 sm:grid-cols-3">
          {sections.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-border bg-surface p-4 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">
                {LABELS[key]}
              </p>
              <p className="mt-1">
                <Timing section={key} text={script[key]} />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Phrases longues */}
      <div>
        <Gloss
          as="p"
          en={`Sentences to watch (more than ${SEUIL_PHRASE_LONGUE} words)`}
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Phrases à surveiller (plus de {SEUIL_PHRASE_LONGUE} mots)
        </Gloss>
        <ul className="space-y-2">
          {splitSentences(fullScript).map((s, i) => {
            const n = countWords(s);
            const long = n > SEUIL_PHRASE_LONGUE;
            return (
              <li
                key={i}
                className={`rounded-lg border px-4 py-2 text-sm ${
                  long
                    ? "border-primary/40 bg-primary-soft/40 text-foreground"
                    : "border-border bg-surface text-foreground/70"
                }`}
              >
                <span
                  className={`mr-2 font-semibold ${long ? "text-primary" : "text-muted"}`}
                >
                  {n} mots
                </span>
                {s}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Script avec pauses suggérées */}
      <div>
        <Gloss
          as="p"
          en="Suggested pauses — / short pause, // long pause"
          className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Pauses suggérées
          <span className="ml-2 font-normal normal-case text-muted">
            <code>/</code> petite pause · <code>{"//"}</code> grande pause
          </span>
        </Gloss>
        <p className="whitespace-pre-wrap rounded-xl border border-border bg-surface p-5 font-serif text-lg leading-loose text-foreground">
          {addPauses(fullScript)}
        </p>
      </div>
    </div>
  );
}
