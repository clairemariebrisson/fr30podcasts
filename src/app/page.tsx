import Nav from "@/components/Nav";
import SpeakingPractice from "@/components/SpeakingPractice";
import ScriptBuilder from "@/components/ScriptBuilder";
import { PracticeProvider } from "@/components/practice-context";
import {
  meta,
  objectif,
  structuresUnite,
  recording,
  grilleCriteres,
  grilleNiveaux,
} from "@/data/podcast0";

function SectionHeading({
  num,
  children,
}: {
  num: number;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-6 flex items-center gap-3 font-serif text-2xl text-foreground sm:text-3xl">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
        {num}
      </span>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="border-b border-border bg-gradient-to-b from-primary-soft/60 to-background">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              French 30 · Le Podcast Français de Harvard
            </p>
            <h1 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-2 text-xl italic text-muted">{meta.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-surface px-4 py-1.5 font-medium shadow-sm ring-1 ring-border">
                📅 À rendre le {meta.dueDate}
              </span>
              <span className="rounded-full bg-surface px-4 py-1.5 font-medium shadow-sm ring-1 ring-border">
                🎙️ {meta.length}
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-20 px-5 py-16">
          {/* Objectif */}
          <section id="objectif">
            <SectionHeading num={1}>Objectif du Podcast 0</SectionHeading>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/85">
              {objectif.intro}
            </p>

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
          </section>

          {/* Qualités + Script share chosen-vocabulary state */}
          <PracticeProvider>
          {/* Qualités */}
          <section id="qualites">
            <SectionHeading num={2}>Pratique orale : décrivez-vous</SectionHeading>
            <p className="mb-6 max-w-3xl text-foreground/85">
              Choisissez le vocabulaire que vous voulez travailler, puis
              entraînez-vous à l’oral : pour chaque{" "}
              <em>amorce de phrase</em>, complétez la phrase à voix haute en
              intégrant vos termes. Enregistrez-vous et réécoutez-vous pour
              préparer votre podcast.
            </p>
            <SpeakingPractice />
          </section>

          {/* Script */}
          <section id="script">
            <SectionHeading num={3}>Construisez votre script</SectionHeading>
            <p className="mb-6 max-w-3xl text-foreground/85">
              Un podcast réussi a une structure claire. Servez-vous de ce plan
              avant d’enregistrer — votre vocabulaire de la partie 2 vous attend
              ci-dessous.
            </p>
            <ScriptBuilder />
          </section>
          </PracticeProvider>

          {/* Enregistrement */}
          <section id="enregistrement">
            <SectionHeading num={4}>
              Recording Podcasts: An Introduction
            </SectionHeading>
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
          </section>

          {/* Évaluation */}
          <section id="evaluation">
            <SectionHeading num={5}>
              Grille d’évaluation du Podcast 0
            </SectionHeading>
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
          </section>
        </div>
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
