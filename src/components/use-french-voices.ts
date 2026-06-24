"use client";

import { useEffect, useState } from "react";
import { loadVoices, frenchVoices } from "@/lib/speech";

const VOICE_KEY = "fr30-voice";

// Liste les voix françaises disponibles et mémorise celle choisie.
export function useFrenchVoices() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string>("");

  useEffect(() => {
    let active = true;
    loadVoices().then((all) => {
      if (!active) return;
      const fr = frenchVoices(all);
      setVoices(fr);
      const saved = localStorage.getItem(VOICE_KEY);
      const pick = (saved && fr.find((v) => v.voiceURI === saved)) || fr[0];
      if (pick) setVoiceURI(pick.voiceURI);
    });
    return () => {
      active = false;
    };
  }, []);

  function choose(uri: string) {
    setVoiceURI(uri);
    try {
      localStorage.setItem(VOICE_KEY, uri);
    } catch {
      /* ignore */
    }
  }

  const voice = voices.find((v) => v.voiceURI === voiceURI) ?? null;
  return { voices, voice, voiceURI, choose };
}
