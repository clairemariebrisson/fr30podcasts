"use client";

import { RX } from "@/data/podcast0";
import { useStudio } from "@/components/studio-context";
import { Gloss } from "@/components/Gloss";
import { PeerTask } from "@/components/studio/PeerTask";
import { Reflection } from "@/components/studio/Reflection";

export default function StepVerifier() {
  const { fullScript, selected } = useStudio();

  if (!fullScript.trim()) {
    return (
      <Gloss
        en="Write your script in the Construire step first — we'll look together at what you've already included."
        className="rounded-xl border border-border bg-surface p-6 text-muted"
      >
        Écrivez d’abord votre script à l’étape{" "}
        <strong className="text-foreground">Construire</strong> — on regardera
        ensemble ce que vous y avez déjà mis.
      </Gloss>
    );
  }

  const results = RX.map((rule) => {
    // La règle « qualites » est spéciale : on compte les qualités choisies.
    const found =
      rule.id === "qualites"
        ? selected.length >= 4 && selected.length <= 6
        : rule.test
          ? rule.test.test(fullScript)
          : false;
    return { rule, found };
  });

  const trouve = results.filter((r) => r.found).length;

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-5">
        <Gloss
          as="p"
          en="What do you notice?"
          className="font-semibold text-accent"
          glossClassName="mt-0.5 block text-sm font-normal italic text-foreground/70"
        >
          Qu’est-ce que tu remarques ?
        </Gloss>
        <Gloss
          en="Here are the Unit 1 structures we spot in your script. These aren't mistakes — just opportunities."
          className="mt-1 text-sm text-foreground/80"
        >
          Voici les structures de l’Unité 1 qu’on repère dans <em>votre</em>{" "}
          script. Ce ne sont pas des fautes — juste des occasions.{" "}
          <strong className="text-accent">
            {trouve}/{RX.length}
          </strong>{" "}
          déjà présentes.
        </Gloss>
      </div>

      <ul className="space-y-3">
        {results.map(({ rule, found }) => (
          <li
            key={rule.id}
            className={`rounded-xl border p-4 ${
              found
                ? "border-accent/30 bg-accent-soft/30"
                : "border-border bg-surface"
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm ${
                  found
                    ? "bg-accent text-white"
                    : "bg-primary-soft text-primary"
                }`}
              >
                {found ? "✓" : "·"}
              </span>
              <div>
                <p className="font-semibold text-foreground">{rule.label}</p>
                <Gloss
                  as="p"
                  en={`What it does: ${rule.fonction_en}`}
                  className="text-xs uppercase tracking-wide text-accent"
                  glossClassName="ml-1 inline normal-case tracking-normal italic text-muted"
                >
                  Pour : {rule.fonction}
                </Gloss>
                {found ? (
                  <p className="mt-0.5 text-sm text-accent">
                    Repéré — joli ! C’est dans votre script.
                  </p>
                ) : (
                  <p className="mt-0.5 text-sm text-foreground/75">
                    <span className="font-semibold text-primary">
                      À essayer :{" "}
                    </span>
                    {rule.essayer}{" "}
                    <span className="text-muted italic">
                      Ex. {rule.exemple}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Reflection
        id="verifier-reflexion"
        starters={[
          "Je remarque que…",
          "La structure que je veux ajouter, c'est…",
          "Je vais l'ajouter dans…",
        ]}
        placeholder="D'après ce que tu remarques, qu'est-ce que tu veux ajouter ou renforcer ?"
      />

      <PeerTask en="Read one sentence of your script aloud to a partner. Do they hear a question, an opinion, or a subjunctive?">
        Lisez une phrase de votre script à un.e camarade. Entend-iel une
        question, une opinion, ou un subjonctif ?
      </PeerTask>
    </div>
  );
}
