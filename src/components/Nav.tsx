"use client";

import { usePrefs } from "@/components/prefs-context";

export default function Nav() {
  const { theme, lang, toggleTheme, toggleLang } = usePrefs();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-baseline gap-2 font-semibold">
          <span className="rounded bg-primary px-2 py-0.5 text-sm text-white">
            FR30
          </span>
          <span className="hidden text-sm text-muted sm:inline">
            Podcast&nbsp;0
          </span>
        </a>

        <div className="flex items-center gap-2">
          {/* Bascule FR / EN */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={
              lang === "fr"
                ? "Afficher les gloses en anglais"
                : "Masquer les gloses anglaises"
            }
            className="flex items-center gap-1 rounded-full border border-border bg-surface px-1 py-0.5 text-xs font-semibold"
          >
            <span
              className={`rounded-full px-2 py-1 ${lang === "fr" ? "bg-primary text-white" : "text-muted"}`}
            >
              FR
            </span>
            <span
              className={`rounded-full px-2 py-1 ${lang === "en" ? "bg-primary text-white" : "text-muted"}`}
            >
              EN
            </span>
          </button>

          {/* Bascule clair / sombre */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"
            }
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-primary/40"
          >
            {theme === "light" ? (
              // Lune — cliquer pour passer en mode sombre
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              // Soleil — cliquer pour revenir en mode clair
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
