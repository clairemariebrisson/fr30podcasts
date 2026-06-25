"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { BRIQUES, type StepId } from "@/data/podcast0";

export type ScriptKey = "intro" | "contenu" | "conclusion";

type Saved = {
  selected: string[];
  bricks: Record<string, string>; // brique id -> texte de l'étudiant.e
  checks: Record<string, boolean>;
  notes: Record<string, string>;
};

type StudioState = Saved & {
  step: StepId;
  setStep: (s: StepId) => void;
  toggle: (terme: string) => void;
  setBrick: (id: string, value: string) => void;
  setCheck: (id: string, value: boolean) => void;
  setNote: (id: string, value: string) => void;
  script: Record<ScriptKey, string>; // dérivé des briques
  fullScript: string; // dérivé des briques
  loaded: boolean;
};

const STORAGE_KEY = "fr30-podcast0-studio";

const EMPTY: Saved = {
  selected: [],
  bricks: {},
  checks: {},
  notes: {},
};

const StudioContext = createContext<StudioState | null>(null);

// Assemble les briques d'une section en un texte (dans l'ordre de BRIQUES).
function sectionText(bricks: Record<string, string>, section: ScriptKey) {
  return BRIQUES.filter((b) => b.section === section)
    .map((b) => (bricks[b.id] ?? "").trim())
    .filter(Boolean)
    .join(" ");
}

export function StudioProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Saved>(EMPTY);
  const [step, setStep] = useState<StepId>("observer");
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
          bricks: parsed.bricks ?? {},
          checks: parsed.checks ?? {},
          notes: parsed.notes ?? {},
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

  function setBrick(id: string, value: string) {
    setData((d) => ({ ...d, bricks: { ...d.bricks, [id]: value } }));
  }

  function setCheck(id: string, value: boolean) {
    setData((d) => ({ ...d, checks: { ...d.checks, [id]: value } }));
  }

  function setNote(id: string, value: string) {
    setData((d) => ({ ...d, notes: { ...d.notes, [id]: value } }));
  }

  const script: Record<ScriptKey, string> = {
    intro: sectionText(data.bricks, "intro"),
    contenu: sectionText(data.bricks, "contenu"),
    conclusion: sectionText(data.bricks, "conclusion"),
  };

  const fullScript = [script.intro, script.contenu, script.conclusion]
    .filter(Boolean)
    .join("\n\n");

  return (
    <StudioContext.Provider
      value={{
        ...data,
        step,
        setStep,
        toggle,
        setBrick,
        setCheck,
        setNote,
        script,
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
