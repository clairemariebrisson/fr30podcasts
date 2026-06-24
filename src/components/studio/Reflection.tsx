"use client";

import { useStudio } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";

// Bloc de réflexion (métacognition) : amorces de phrases cliquables + note
// sauvegardée. Engagement cognitif — remarquer, puis réfléchir.
export function Reflection({
  id,
  starters,
  titleEn = "Reflection",
  placeholder = "Écrivez vos remarques ici…",
}: {
  id: string;
  starters: string[];
  titleEn?: string;
  placeholder?: string;
}) {
  const { notes, setNote } = useStudio();
  const value = notes[id] ?? "";

  function addStarter(s: string) {
    setNote(id, (value ? value.trimEnd() + "\n" : "") + s + " ");
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <Gloss
        as="p"
        en={titleEn}
        className="text-xs font-semibold uppercase tracking-wide text-muted"
        glossClassName="ml-1 inline font-normal italic normal-case text-muted"
      >
        Réflexion
      </Gloss>
      <div className="mt-2 flex flex-wrap gap-2">
        {starters.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => addStarter(s)}
            className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            {s}
          </button>
        ))}
      </div>
      <textarea
        value={value}
        onChange={(e) => setNote(id, e.target.value)}
        rows={3}
        placeholder={placeholder}
        className="mt-3 w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
