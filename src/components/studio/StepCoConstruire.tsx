"use client";

import { Gloss } from "@/components/Gloss";
import { PeerTask } from "@/components/studio/PeerTask";
import StepBatir from "./StepBatir";
import StepOraliser from "./StepOraliser";
import StepDecouper from "./StepDecouper";

// Phase « Co-construction » (PACE) : on bâtit le script avec un guidage, puis
// on le raffine pour l'oral. Regroupe Bâtir + Rendre parlable + Régler le rythme.
function SubHeader({
  num,
  fr,
  en,
}: {
  num: number;
  fr: string;
  en: string;
}) {
  return (
    <Gloss
      as="h4"
      en={en}
      className="mb-4 flex items-center gap-2 font-serif text-xl text-foreground"
      glossClassName="ml-2 inline text-sm font-normal not-italic text-muted"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
        {num}
      </span>
      {fr}
    </Gloss>
  );
}

export default function StepCoConstruire() {
  return (
    <div className="space-y-12">
      <section>
        <SubHeader num={1} fr="Bâtir votre script" en="Build your script" />
        <StepBatir />
      </section>

      <section className="border-t border-border pt-8">
        <SubHeader
          num={2}
          fr="Rendre vos phrases parlables"
          en="Make your sentences speakable"
        />
        <StepOraliser />
      </section>

      <section className="border-t border-border pt-8">
        <SubHeader num={3} fr="Régler le rythme" en="Set the pacing" />
        <StepDecouper />
      </section>

      <PeerTask en="Read your draft aloud to a partner. What do they learn about you? Where did your voice sound most natural?">
        Lisez votre brouillon à voix haute à un.e camarade. Qu’est-ce qu’iel
        apprend sur vous ? Où votre voix sonnait-elle le plus naturelle ?
      </PeerTask>
    </div>
  );
}
