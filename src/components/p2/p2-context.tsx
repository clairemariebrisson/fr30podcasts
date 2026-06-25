"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  BRIQUES,
  SECTIONS,
  type SectionKey,
  type StepId,
} from "@/data/podcast2";

type Saved = {
  bricks: Record<string, string>; // brique id -> texte de l'étudiant.e
  produit: string; // le produit de terroir choisi (nom · lieu · label)
  checks: Record<string, boolean>;
  notes: Record<string, string>;
};

type StudioState = Saved & {
  step: StepId;
  setStep: (s: StepId) => void;
  setBrick: (id: string, value: string) => void;
  setProduit: (value: string) => void;
  setCheck: (id: string, value: boolean) => void;
  setNote: (id: string, value: string) => void;
  script: Record<SectionKey, string>; // dérivé des briques
  fullScript: string; // dérivé des briques
  loaded: boolean;
};

const STORAGE_KEY = "fr30-podcast2-studio";

const EMPTY: Saved = { bricks: {}, produit: "", checks: {}, notes: {} };

const P2Context = createContext<StudioState | null>(null);

// Assemble les briques d'une section en un texte (dans l'ordre de BRIQUES).
function sectionText(bricks: Record<string, string>, section: SectionKey) {
  return BRIQUES.filter((b) => b.section === section)
    .map((b) => (bricks[b.id] ?? "").trim())
    .filter(Boolean)
    .join(" ");
}

export function P2Provider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Saved>(EMPTY);
  const [step, setStep] = useState<StepId>("observer");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Saved>;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData({
          bricks: parsed.bricks ?? {},
          produit: parsed.produit ?? "",
          checks: parsed.checks ?? {},
          notes: parsed.notes ?? {},
        });
      }
    } catch {
      /* localStorage indisponible — studio vide. */
    }
    setLoaded(true);
  }, []);

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

  function setBrick(id: string, value: string) {
    setData((d) => ({ ...d, bricks: { ...d.bricks, [id]: value } }));
  }
  function setProduit(value: string) {
    setData((d) => ({ ...d, produit: value }));
  }
  function setCheck(id: string, value: boolean) {
    setData((d) => ({ ...d, checks: { ...d.checks, [id]: value } }));
  }
  function setNote(id: string, value: string) {
    setData((d) => ({ ...d, notes: { ...d.notes, [id]: value } }));
  }

  const script = Object.fromEntries(
    SECTIONS.map((s) => [s, sectionText(data.bricks, s)]),
  ) as Record<SectionKey, string>;

  const fullScript = SECTIONS.map((s) => script[s])
    .filter(Boolean)
    .join("\n\n");

  return (
    <P2Context.Provider
      value={{
        ...data,
        step,
        setStep,
        setBrick,
        setProduit,
        setCheck,
        setNote,
        script,
        fullScript,
        loaded,
      }}
    >
      {children}
    </P2Context.Provider>
  );
}

export function useP2() {
  const ctx = useContext(P2Context);
  if (!ctx) throw new Error("useP2 doit être utilisé dans <P2Provider>");
  return ctx;
}
