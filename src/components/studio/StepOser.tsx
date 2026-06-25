"use client";

import { amorces } from "@/data/podcast0";
import { Gloss } from "@/components/Gloss";
import { Reflection } from "@/components/studio/Reflection";
import { PeerTask } from "@/components/studio/PeerTask";
import { ScriptComplet } from "@/components/studio/ScriptComplet";

// Phase « Extension » (PACE) : on s'éloigne du script pour gagner en naturel.
// Deux clips enregistrés SUR L'APPAREIL de l'étudiant.e (plus de micro intégré).
export default function StepOser() {
  return (
    <div className="space-y-8">
      <Gloss
        en="Your script got you ready. Now take a small risk: the most natural podcasts aren't read word-for-word. Try this little experiment on your phone or computer."
        className="max-w-3xl text-foreground/85"
      >
        Votre script vous a préparé.e. Maintenant, prenez un petit risque : les
        podcasts les plus naturels ne se lisent pas mot à mot. Faites cette
        petite expérience sur votre téléphone ou votre ordinateur.
      </Gloss>

      {/* Les deux clips */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Clip 1
          </p>
          <Gloss
            en="Record one minute following your script."
            className="mt-1 text-foreground/85"
          >
            Enregistrez une minute en suivant votre script.
          </Gloss>
        </div>
        <div className="rounded-xl border border-accent/40 bg-accent-soft/30 p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Clip 2
          </p>
          <Gloss
            en="Record one minute using only the sentence starters below — without reading your script."
            className="mt-1 text-foreground/85"
          >
            Enregistrez une minute en utilisant seulement les amorces ci-dessous
            — sans lire votre script.
          </Gloss>
        </div>
      </div>

      {/* Le script pour le clip 1 */}
      <ScriptComplet
        titleFr="Votre script — pour le clip 1"
        titleEn="Your script — for clip 1"
      />

      {/* Amorces pour le clip 2 */}
      <div>
        <Gloss
          as="p"
          en="Sentence starters for clip 2 — let them launch you, then improvise:"
          className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted"
          glossClassName="mt-1 block font-normal normal-case italic text-muted"
        >
          Amorces pour le clip 2 — laissez-les vous lancer, puis improvisez :
        </Gloss>
        <div className="flex flex-wrap gap-2">
          {amorces.map((a) => (
            <span
              key={a}
              className="rounded-full bg-surface px-3 py-1.5 text-sm text-foreground ring-1 ring-border"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Réflexion : qu'est-ce qui se passe quand on lâche le script ? */}
      <Reflection
        id="oser-reflexion"
        title="Que s'est-il passé ?"
        titleEn="What happened?"
        starters={[
          "Avec le script, je me sentais…",
          "Sans le script, je me sentais…",
          "Ce qui sonnait plus naturel, c'était…",
          "Pour mon enregistrement final, je vais…",
        ]}
        placeholder="Comparez les deux clips : lequel vous ressemble le plus ? Où étiez-vous le plus à l'aise ?"
      />

      <PeerTask en="Play your unscripted clip for a partner — not the scripted one. Which version of you do they find more engaging?">
        Faites écouter votre clip sans script à un.e camarade — pas le clip
        scripté. Quelle version de vous trouve-t-iel la plus vivante ?
      </PeerTask>

      <Gloss
        en="There's no single right answer — most people land somewhere between fully scripted and fully free. Use what you noticed to decide how much to lean on your script for the real recording."
        className="rounded-xl border-l-4 border-primary bg-primary-soft/40 p-4 text-sm text-foreground/85"
      >
        Il n’y a pas une seule bonne réponse — la plupart des gens se situent
        entre le tout-scripté et le tout-libre. Servez-vous de ce que vous avez
        remarqué pour décider combien vous appuyer sur votre script lors du vrai
        enregistrement.
      </Gloss>
    </div>
  );
}
