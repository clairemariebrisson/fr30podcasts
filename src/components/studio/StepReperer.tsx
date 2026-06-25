"use client";

import { useState } from "react";
import { RX, MODELE } from "@/data/podcast0";
import { Gloss } from "@/components/Gloss";

// Phase « Attention » (PACE) — découverte guidée, comme avec un tuteur :
// pour chaque phrase du modèle, l'étudiant.e devine ce qu'elle FAIT, puis on
// révèle la fonction et la façon de la dire.
export default function StepReperer() {
  const items = RX;
  const n = items.length;
  const [i, setI] = useState(0);
  const [solved, setSolved] = useState<boolean[]>(() => items.map(() => false));
  const [wrong, setWrong] = useState<string | null>(null);

  const rule = items[i];
  const isSolved = solved[i];

  // Options : la bonne fonction + 2 autres, tournées pour varier la position.
  const trio = [items[i], items[(i + 1) % n], items[(i + 2) % n]];
  const rot = i % 3;
  const options = trio.slice(rot).concat(trio.slice(0, rot));

  function pick(id: string) {
    if (id === rule.id) {
      setSolved((s) => {
        const c = [...s];
        c[i] = true;
        return c;
      });
      setWrong(null);
    } else {
      setWrong(id);
    }
  }

  function go(next: number) {
    setWrong(null);
    setI((next + n) % n);
  }

  const doneCount = solved.filter(Boolean).length;

  return (
    <div className="space-y-6">
      <Gloss
        en="Like working with a tutor, let's look closely at the model. For each sentence, guess what it does — then we'll confirm and show you how to say it."
        className="max-w-3xl text-foreground/85"
      >
        Comme avec un tuteur, regardons le modèle de près. Pour chaque phrase,
        devine ce qu’elle fait — puis on confirme et on te montre comment la
        dire.
      </Gloss>

      {/* Le modèle, en référence */}
      <details className="rounded-xl border border-border bg-surface p-4">
        <summary className="cursor-pointer text-sm font-semibold text-muted">
          <Gloss as="span" en="Show the model" glossClassName="ml-1 inline italic">
            Revoir le modèle
          </Gloss>
        </summary>
        <p className="mt-2 font-serif leading-relaxed text-foreground/85">
          {MODELE.texte}
        </p>
      </details>

      {/* Carte du tuteur */}
      <div className="rounded-2xl border border-primary/30 bg-primary-soft/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {i + 1} / {n} · {doneCount} {doneCount > 1 ? "trouvées" : "trouvée"}
        </p>

        <p className="mt-3 border-l-2 border-primary/40 pl-3 font-serif text-lg italic text-foreground">
          « {rule.modele} »
        </p>

        {!isSolved ? (
          <>
            <Gloss
              as="p"
              en="What does this sentence do?"
              className="mt-4 font-semibold text-foreground"
              glossClassName="ml-1 inline font-normal italic text-muted"
            >
              Qu’est-ce que cette phrase fait ?
            </Gloss>
            <div className="mt-3 flex flex-col gap-2">
              {options.map((o) => {
                const isWrong = wrong === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => pick(o.id)}
                    className={`rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                      isWrong
                        ? "border-primary bg-primary-soft text-primary"
                        : "border-border bg-surface text-foreground hover:border-primary/50"
                    }`}
                  >
                    <Gloss as="span" en={o.fonction_en} glossClassName="ml-1 inline italic text-muted">
                      {o.fonction}
                    </Gloss>
                  </button>
                );
              })}
            </div>
            {wrong && (
              <Gloss
                en="Not quite — read it again and try another."
                className="mt-3 text-sm text-primary"
              >
                Pas tout à fait — relis la phrase et essaie autre chose.
              </Gloss>
            )}
          </>
        ) : (
          <div className="mt-4">
            <Gloss
              as="p"
              en={`Yes! ${rule.label} — it's there to ${rule.fonction_en}.`}
              className="font-semibold text-accent"
              glossClassName="mt-1 block font-normal italic text-muted"
            >
              Oui ! {rule.label} — c’est là pour {rule.fonction}.
            </Gloss>
            <Gloss
              en={rule.diction_en}
              className="mt-2 rounded-lg bg-surface px-4 py-2.5 text-sm text-foreground/90"
              glossClassName="mt-1 block italic text-muted"
            >
              <span className="font-semibold text-primary">À l’oral : </span>
              {rule.diction}
            </Gloss>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            className="text-sm text-muted transition-colors hover:text-primary disabled:opacity-30"
          >
            ← Précédente
          </button>
          {i < n - 1 ? (
            <button
              type="button"
              onClick={() => go(i + 1)}
              className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Suivante →
            </button>
          ) : (
            isSolved && (
              <Gloss
                as="span"
                en="You've spotted them all — now go use them."
                className="text-sm font-semibold text-accent"
                glossClassName="ml-1 inline font-normal italic text-muted"
              >
                Tu les as toutes repérées !
              </Gloss>
            )
          )}
        </div>
      </div>
    </div>
  );
}
