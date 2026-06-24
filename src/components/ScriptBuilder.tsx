"use client";

import { useState } from "react";
import { scriptSections } from "@/data/podcast0";
import { usePractice } from "@/components/practice-context";

export default function ScriptBuilder() {
  const { selected } = usePractice();
  const [notes, setNotes] = useState<Record<string, string>>({});

  return (
    <div>
      {/* Chosen vocabulary carried over from Part 2 */}
      <div className="mb-6 rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
          Votre vocabulaire (choisi à la partie 2)
        </p>
        {selected.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selected.map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface px-3 py-1 text-sm font-medium text-accent shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">
            Choisissez d’abord votre vocabulaire dans la{" "}
            <a href="#qualites" className="font-medium text-accent underline">
              partie 2
            </a>{" "}
            — il apparaîtra ici pour vous aider à rédiger.
          </p>
        )}
      </div>

      <div className="space-y-4">
        {scriptSections.map((s) => (
          <div
            key={s.titre}
            className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
          >
            <div className="flex flex-wrap items-baseline gap-3 border-b border-border bg-primary-soft/40 px-5 py-3">
              <h3 className="font-serif text-lg font-semibold text-primary">
                {s.titre}
              </h3>
              <span className="text-sm text-muted">({s.duree})</span>
            </div>
            <div className="px-5 py-4">
              <p className="text-foreground/85">{s.objectif}</p>
              <p className="mt-3 rounded-lg bg-background px-4 py-3 text-sm italic text-muted">
                <span className="font-semibold not-italic text-accent">
                  Exemple :{" "}
                </span>
                {s.exemple}
              </p>
              <label className="mb-1 mt-4 block text-xs font-semibold uppercase tracking-wide text-muted">
                Vos notes / phrases clés
              </label>
              <textarea
                value={notes[s.titre] ?? ""}
                onChange={(e) =>
                  setNotes((n) => ({ ...n, [s.titre]: e.target.value }))
                }
                rows={3}
                placeholder="Écrivez votre texte ici…"
                className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
