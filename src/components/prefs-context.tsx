"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Lang = "fr" | "en";

type Prefs = {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  toggleLang: () => void;
};

const THEME_KEY = "fr30-theme";
const LANG_KEY = "fr30-lang";

const PrefsContext = createContext<Prefs | null>(null);

export function PrefsProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("fr");
  const [loaded, setLoaded] = useState(false);

  // Lecture des préférences au montage (le script anti-flash a déjà posé la
  // classe `dark` ; on synchronise ici l'état React).
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const savedLang = localStorage.getItem(LANG_KEY);
    // Synchronisation post-montage (hydratation-safe : on part des valeurs par
    // défaut au premier rendu, identiques côté serveur et client).
    /* eslint-disable react-hooks/set-state-in-effect */
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
    if (savedLang === "en" || savedLang === "fr") setLang(savedLang);
    /* eslint-enable react-hooks/set-state-in-effect */
    setLoaded(true);
  }, []);

  // Applique le thème au DOM et le persiste à chaque changement.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    if (loaded) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch {
        /* ignore */
      }
    }
  }, [theme, loaded]);

  // Persiste la langue à chaque changement.
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, loaded]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"));

  return (
    <PrefsContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs doit être utilisé dans <PrefsProvider>");
  return ctx;
}
