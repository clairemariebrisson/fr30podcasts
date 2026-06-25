import Nav from "@/components/Nav";
import Studio from "@/components/studio/Studio";
import { Gloss } from "@/components/Gloss";
import { SectionsProvider } from "@/components/sections-context";
import { CollapsibleSection } from "@/components/CollapsibleSection";
import { HeroNav } from "@/components/HeroNav";
import {
  meta,
  objectif,
  canDo,
  PUBLIC,
  structuresUnite,
  recording,
  grilleCriteres,
  grilleNiveaux,
} from "@/data/podcast0";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <SectionsProvider defaultOpen="objectif">
          {/* Hero */}
          <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
            <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  French 30 · Le Podcast Français de Harvard
                </p>
                <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
                  {meta.title}
                </h1>
                <p className="mt-2 text-xl italic text-muted">
                  {meta.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-surface px-4 py-1.5 font-medium shadow-sm ring-1 ring-border">
                    {meta.length}
                  </span>
                </div>
              </div>

              {/* Navigation par sections — boutons élégants (accordéon) */}
              <HeroNav />
            </div>
          </section>

          <div className="mx-auto max-w-5xl px-5 py-8">
            {/* Objectif */}
            <CollapsibleSection id="objectif" num={1} title="Objectif du Podcast 0">
            <Gloss
              en="Podcast 0 is your first episode: a 1–2 minute personal introduction. You introduce who you are, what excites you, and why this course interests you."
              className="max-w-3xl text-lg leading-relaxed text-foreground/85"
            >
              {objectif.intro}
            </Gloss>

            {/* Public visé — cadre la tâche : audience réelle */}
            <div className="mt-6 max-w-3xl rounded-xl border border-accent/30 border-l-4 border-l-accent bg-accent-soft/40 p-5">
              <Gloss
                as="p"
                en="Who is it for?"
                className="text-sm font-semibold uppercase tracking-wide text-accent"
                glossClassName="ml-1 inline font-normal normal-case italic text-muted"
              >
                Pour qui ?
              </Gloss>
              <Gloss en={PUBLIC.en} className="mt-1 text-foreground/85">
                {PUBLIC.fr}
              </Gloss>
            </div>

            {/* Énoncés « Je peux… » — objectifs de langue */}
            <div className="mt-8 rounded-xl border border-primary/30 bg-primary-soft/40 p-6">
              <Gloss
                as="h3"
                en="What this podcast will enable you to do"
                className="text-lg font-semibold text-primary"
              >
                Ce que ce podcast vous permet de faire
              </Gloss>
              <ul className="mt-4 space-y-3">
                {canDo.map((c) => (
                  <li key={c.fr} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <div>
                      <Gloss
                        en={c.en}
                        className="leading-relaxed text-foreground"
                      >
                        {c.fr}
                      </Gloss>
                      <p className="mt-0.5 text-sm text-muted">
                        Structure : {c.structure}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mb-4 mt-8 text-lg font-semibold">
              Structure de l’épisode
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {objectif.structure.map((s) => (
                <div
                  key={s.phase}
                  className="rounded-xl border border-border bg-surface p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                    {s.phase}
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-foreground">
                    {s.duree}
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-accent/30 bg-accent-soft/50 p-6">
              <h3 className="text-lg font-semibold text-accent">
                Intégrez naturellement les structures de l’Unité 1
              </h3>
              <ul className="mt-4 space-y-3">
                {structuresUnite.map((s) => (
                  <li key={s.fonction} className="text-sm leading-relaxed">
                    <span className="font-semibold text-foreground">
                      {s.fonction}
                    </span>{" "}
                    <span className="text-muted">= {s.structure}</span>
                    {s.exemple && (
                      <span className="text-foreground/70"> — {s.exemple}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            </CollapsibleSection>

            {/* Studio — le cœur du site : six étapes guidées */}
            <CollapsibleSection
              id="studio"
              num={2}
              title="Studio — préparez votre épisode"
            >
            <Gloss
              en="Six guided steps following the PACE model: observe a model, notice the structures, co-build your script, check it, dare to step away from it — then record on your device and upload to Canvas."
              className="mb-8 max-w-3xl text-foreground/85"
            >
              Six étapes guidées, selon le modèle PACE : observez un modèle,
              repérez les structures, co-construisez votre script, vérifiez-le,
              osez vous en éloigner — puis enregistrez sur votre appareil et
              déposez sur Canvas.
            </Gloss>
            <Studio />
            </CollapsibleSection>

            {/* Enregistrement */}
            <CollapsibleSection
              id="enregistrement"
              num={3}
              title="Recording Podcasts: An Introduction"
            >
            <p className="max-w-3xl leading-relaxed text-foreground/85">
              {recording.intro}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {recording.sections.map((sec) => (
                <div
                  key={sec.titre}
                  className="rounded-xl border border-border bg-surface p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-lg font-semibold text-accent">
                    {sec.titre}
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed text-foreground/80">
                    {sec.paragraphes.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary-soft/40 p-6 text-sm leading-relaxed text-foreground/85">
              {recording.contact}
            </div>
            </CollapsibleSection>

            {/* Évaluation */}
            <CollapsibleSection
              id="evaluation"
              num={4}
              title="Grille d’évaluation du Podcast 0"
            >
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full border-collapse bg-surface text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left font-semibold">Critère</th>
                    {grilleNiveaux.map((n) => (
                      <th key={n.label} className="p-3 text-left font-semibold">
                        {n.label}
                        <span className="block text-xs font-normal opacity-80">
                          {n.points}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {grilleCriteres.map((c, ri) => (
                    <tr
                      key={c.critere}
                      className={ri % 2 ? "bg-background/50" : ""}
                    >
                      <th className="border-t border-border p-3 text-left font-semibold text-foreground">
                        {c.critere}
                      </th>
                      {c.niveaux.map((n, i) => (
                        <td
                          key={i}
                          className="border-t border-l border-border p-3 align-top text-foreground/75"
                        >
                          {n}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-right text-sm text-muted">
              <strong className="text-foreground">Total : ___ / 20</strong>{" "}
              (normalement : 100 points)
            </p>
            </CollapsibleSection>
          </div>
        </SectionsProvider>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-muted">
          <p className="font-semibold text-foreground">
            French 30 · Le Podcast Français de Harvard
          </p>
          <p className="mt-1">
            Questions ? Contactez Dr.&nbsp;Claire-Marie Brisson —{" "}
            <a
              href="mailto:cmbrisson@fas.harvard.edu"
              className="text-primary hover:underline"
            >
              cmbrisson@fas.harvard.edu
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
