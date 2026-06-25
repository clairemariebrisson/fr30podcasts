"use client";

import { MODELE } from "@/data/podcast0";
import { Gloss } from "@/components/Gloss";
import { Reflection } from "@/components/studio/Reflection";
import { PeerTask } from "@/components/studio/PeerTask";

export default function StepObserver() {
  const hasAudio = Boolean(MODELE.audio);

  return (
    <div className="space-y-8">
      {hasAudio ? (
        <Gloss
          en="Before writing your own intro, listen to this model (and read it aloud yourself), and notice what makes it work. A good podcast intro is a genre — it has its own moves."
          className="max-w-3xl text-foreground/85"
        >
          Avant d’écrire votre propre intro, écoutez ce modèle (et lisez-le à
          voix haute), puis remarquez ce qui le rend efficace. Une bonne intro
          de podcast, c’est un genre — elle a ses codes.
        </Gloss>
      ) : (
        <Gloss
          en="Before writing your own intro, read this model aloud and notice what makes it work. A good podcast intro is a genre — it has its own moves."
          className="max-w-3xl text-foreground/85"
        >
          Avant d’écrire votre propre intro, lisez ce modèle à voix haute et
          remarquez ce qui le rend efficace. Une bonne intro de podcast, c’est un
          genre — elle a ses codes.
        </Gloss>
      )}

      {/* Le modèle, en entier */}
      <div className="rounded-2xl border border-primary/30 bg-primary-soft/30 p-6">
        <Gloss
          as="p"
          en="A model intro"
          className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary"
          glossClassName="ml-1 inline font-normal normal-case italic text-muted"
        >
          Un exemple d’introduction
        </Gloss>

        {hasAudio && (
          <div className="mb-4">
            <Gloss
              as="p"
              en="Listen to the model:"
              className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary"
              glossClassName="ml-1 inline font-normal normal-case italic text-muted"
            >
              Écoutez le modèle :
            </Gloss>
            <audio controls src={MODELE.audio} className="w-full" />
          </div>
        )}

        <p className="font-serif text-lg leading-relaxed text-foreground">
          {MODELE.texte}
        </p>
      </div>

      {/* La charpente : segments par fonction */}
      <div>
        <Gloss
          as="p"
          en="Its structure, move by move"
          className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Sa charpente, étape par étape
        </Gloss>
        <ol className="space-y-3">
          {MODELE.segments.map((s) => (
            <li
              key={s.partie}
              className="rounded-xl border border-border bg-surface p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-semibold text-primary">{s.partie}</span>
                <Gloss
                  as="span"
                  en={s.fonction_en}
                  className="text-sm text-accent"
                  glossClassName="ml-1 inline italic text-muted"
                >
                  — {s.fonction}
                </Gloss>
              </div>
              <p className="mt-1 text-foreground/85 italic">« {s.texte} »</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Ce qu'on remarque (conventions du genre) */}
      <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-5">
        <Gloss
          as="p"
          en="What do you notice?"
          className="font-semibold text-accent"
          glossClassName="ml-1 inline font-normal italic text-muted"
        >
          Qu’est-ce que tu remarques ?
        </Gloss>
        <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
          {MODELE.remarquer.map((r) => (
            <li key={r.fr}>
              <Gloss en={r.en} as="span" glossClassName="ml-1 italic text-muted">
                — {r.fr}
              </Gloss>
            </li>
          ))}
        </ul>
      </div>

      <Reflection
        id="observer-reflexion"
        starters={[
          "Ce que je veux reprendre, c’est…",
          "Mon accroche pourrait être…",
          "Je veux que mon intro donne l’impression de…",
        ]}
        placeholder="Qu’est-ce que vous voulez reprendre de ce modèle pour votre propre intro ?"
      />

      <PeerTask en="With a partner: which move in the model works best? What would you each keep for your own intro?">
        Avec un.e camarade : quelle étape du modèle fonctionne le mieux, selon
        vous ? Qu’est-ce que chacun.e garderait pour sa propre intro ?
      </PeerTask>
    </div>
  );
}
