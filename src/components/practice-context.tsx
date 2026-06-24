"use client";

import { createContext, useContext, useState } from "react";

type PracticeState = {
  selected: string[];
  toggle: (terme: string) => void;
};

const PracticeContext = createContext<PracticeState | null>(null);

export function PracticeProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(terme: string) {
    setSelected((prev) =>
      prev.includes(terme) ? prev.filter((t) => t !== terme) : [...prev, terme],
    );
  }

  return (
    <PracticeContext.Provider value={{ selected, toggle }}>
      {children}
    </PracticeContext.Provider>
  );
}

export function usePractice() {
  const ctx = useContext(PracticeContext);
  if (!ctx) throw new Error("usePractice must be used within PracticeProvider");
  return ctx;
}
