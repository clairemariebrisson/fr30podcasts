"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { StepId } from "@/data/podcast0";

export type ScriptKey = "intro" | "contenu" | "conclusion";

type Saved = {
  selected: string[];
  script: Record<ScriptKey, string>;
  checks: Record<string, boolean>;
};

type StudioState = Saved & {
  step: StepId;
  setStep: (s: StepId) => void;
  toggle: (terme: string) => void;
  setSection: (key: ScriptKey, value: string) => void;
  setCheck: (id: string, value: boolean) => void;
  fullScript: string;
  loaded: boolean;
};

const STORAGE_KEY = "fr30-podcast0-studio";

const EMPTY: Saved = {
  selected: [],
  script: { intro: "", contenu: "", conclusion: "" },
  checks: {},
};

const StudioContext = createContext<StudioState | null>(null);

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Saved>(EMPTY);
  const [step, setStep] = useState<StepId>("construire");
  const [loaded, setLoaded] = useState(false);

  // Charger depuis le navigateur au montage (évite tout décalage d'hydratation).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Saved>;
        // Hydratation depuis localStorage au montage : volontairement après le
        // premier rendu, pour éviter tout décalage d'hydratation SSR/client.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData({
          selected: parsed.selected ?? [],
          script: { ...EMPTY.script, ...(parsed.script ?? {}) },
          checks: parsed.checks ?? {},
        });
      }
    } catch {
      /* localStorage indisponible — on continue avec un studio vide. */
    }
    setLoaded(true);
  }, []);

  // Sauvegarder à chaque changement (après le chargement initial).
  const first = useRef(true);
  useEffect(() => {
    if (!loaded) return;
    if (first.current) {
      first.current = false;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* quota ou mode privé — on ignore. */
    }
  }, [data, loaded]);

  function toggle(terme: string) {
    setData((d) => ({
      ...d,
      selected: d.selected.includes(terme)
        ? d.selected.filter((t) => t !== terme)
        : [...d.selected, terme],
    }));
  }

  function setSection(key: ScriptKey, value: string) {
    setData((d) => ({ ...d, script: { ...d.script, [key]: value } }));
  }

  function setCheck(id: string, value: boolean) {
    setData((d) => ({ ...d, checks: { ...d.checks, [id]: value } }));
  }

  const fullScript = [
    data.script.intro,
    data.script.contenu,
    data.script.conclusion,
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <StudioContext.Provider
      value={{
        ...data,
        step,
        setStep,
        toggle,
        setSection,
        setCheck,
        fullScript,
        loaded,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) throw new Error("useStudio doit être utilisé dans <StudioProvider>");
  return ctx;
}
