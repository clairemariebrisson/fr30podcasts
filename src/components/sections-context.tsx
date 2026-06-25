"use client";

import { createContext, useContext, useState } from "react";

// État de l'accordéon des sections de la page : une seule ouverte à la fois,
// pour que l'étudiant.e s'isole sur sa section en cours.
type SectionsState = {
  open: string;
  setOpen: (id: string) => void;
};

const SectionsContext = createContext<SectionsState | null>(null);

export function SectionsProvider({
  defaultOpen = "objectif",
  children,
}: {
  defaultOpen?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <SectionsContext.Provider value={{ open, setOpen }}>
      {children}
    </SectionsContext.Provider>
  );
}

export function useSections() {
  const ctx = useContext(SectionsContext);
  if (!ctx)
    throw new Error("useSections doit être utilisé dans <SectionsProvider>");
  return ctx;
}
