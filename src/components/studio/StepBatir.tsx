"use client";

import { BRIQUES, qualites, HOOKS, type Brique } from "@/data/podcast0";
import { useStudio } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";

// Phase « Co-construction » (PACE) — partie « Bâtir » : on construit le script
// brique par brique, chaque brique reliant une fonction à une structure.
export default function StepBatir() {
  // Regrouper les briques consécutives partageant un `groupe` (l'anecdote).
  const groups: { groupe?: string; items: Brique[] }[] = [];
  for (const b of BRIQUES) {
    const last = groups[groups.length - 1];
    if (b.groupe && last && last.groupe === b.groupe) last.items.push(b);
    else groups.push({ groupe: b.groupe, items: [b] });
  }

  return (
    <div className="space-y-5">
      <Gloss
        en="Let's build your intro together, one brick at a time. Start at the top — each box turns a function into a sentence you write."
        className="max-w-3xl text-foreground/85"
      >
        Construisons votre intro ensemble, une brique à la fois. Commencez en
        haut — chaque case transforme une fonction en une phrase que vous
        écrivez.
      </Gloss>

      {groups.map((g, gi) =>
        g.groupe === "anecdote" ? (
          <div
            key={gi}
            className="rounded-2xl border border-accent/30 bg-accent-soft/20 p-5"
          >
            <Gloss
              as="h5"
              en="Your anecdote — co-built from the grammar"
              className="font-serif text-lg text-accent"
              glossClassName="ml-2 inline text-sm font-normal not-italic text-muted"
            >
              Votre anecdote — co-construite à partir de la grammaire
            </Gloss>
            <Gloss
              en="A short story in three moves. Each move uses a different structure — together they make a real anecdote."
              className="mt-1 text-sm text-foreground/80"
            >
              Une petite histoire en trois temps. Chaque temps emploie une
              structure différente — ensemble, ils forment une vraie anecdote.
            </Gloss>
            <div className="mt-4 space-y-4">
              {g.items.map((b) => (
                <BriqueCard key={b.id} brique={b} />
              ))}
            </div>
          </div>
        ) : (
          g.items.map((b) => <BriqueCard key={b.id} brique={b} />)
        ),
      )}
    </div>
  );
}

function BriqueCard({ brique: b }: { brique: Brique }) {
  const { bricks, setBrick, selected, toggle } = useStudio();
  const value = bricks[b.id] ?? "";

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-primary-soft/40 px-5 py-3">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h4 className="font-serif text-lg font-semibold text-primary">
            {b.titre}
          </h4>
          <Gloss
            as="span"
            en={`to ${b.fonction_en}`}
            className="text-sm text-accent"
            glossClassName="ml-1 inline italic text-muted"
          >
            pour {b.fonction}
          </Gloss>
        </div>
        <Gloss
          as="p"
          en={`Structure: ${b.structure_en}`}
          className="mt-0.5 text-xs uppercase tracking-wide text-muted"
          glossClassName="ml-1 inline normal-case tracking-normal italic"
        >
          Structure : {b.structure}
        </Gloss>
      </div>

      <div className="px-5 py-4">
        <Gloss
          as="p"
          en="Model:"
          className="text-sm italic text-muted"
          glossClassName="ml-1 inline"
        >
          <span className="font-semibold not-italic text-accent">Modèle : </span>
          « {b.modele} »
        </Gloss>

        {/* Banque de qualités (brique « personnalité ») */}
        {b.qualites && (
          <div className="mt-4">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <Gloss
                as="p"
                en="Choose 4–6 qualities, then use them in your sentence"
                className="text-xs font-semibold uppercase tracking-wide text-muted"
                glossClassName="mt-1 block font-normal normal-case italic"
              >
                Choisis 4 à 6 qualités, puis emploie-les dans ta phrase
              </Gloss>
              <span
                className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${
                  selected.length >= 4 && selected.length <= 6
                    ? "bg-accent-soft text-accent"
                    : "bg-primary-soft text-primary"
                }`}
              >
                {selected.length}
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
        )}

        {/* Amorces d'accroche (brique « accroche ») */}
        {b.amorces && (
          <div className="mt-4">
            <Gloss
              as="p"
              en="Pick an opener to start from, then make it yours:"
              className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted"
              glossClassName="mt-1 block font-normal normal-case italic"
            >
              Choisis une amorce pour démarrer, puis approprie-la-toi :
            </Gloss>
            <div className="flex flex-wrap gap-2">
              {HOOKS.map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setBrick(b.id, h + " ")}
                  className="rounded-full bg-accent-soft px-3 py-1.5 text-sm text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        )}

        <textarea
          value={value}
          onChange={(e) => setBrick(b.id, e.target.value)}
          rows={2}
          placeholder={b.cadre}
          className="mt-4 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <Gloss
          as="p"
          en={b.aide_en}
          className="mt-1.5 text-sm text-muted"
          glossClassName="mt-0.5 block italic"
        >
          {b.aide}
        </Gloss>
      </div>
    </div>
  );
}
