"use client";

import { useRef, useState } from "react";
import { qualites, amorces } from "@/data/podcast0";
import { usePractice } from "@/components/practice-context";

export default function SpeakingPractice() {
  const { selected, toggle } = usePractice();
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [drafts, setDrafts] = useState<Record<number, string>>({});

  // recording state
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [recError, setRecError] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const chosen = qualites.filter((q) => selected.includes(q.terme));

  function clearRecording() {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
  }

  function goTo(next: number) {
    clearRecording();
    setRecError(null);
    setIndex((next + amorces.length) % amorces.length);
  }

  async function startRecording() {
    setRecError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: rec.mimeType });
        clearRecording();
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
      };
      recorderRef.current = rec;
      rec.start();
      setRecording(true);
    } catch {
      setRecError(
        "Micro indisponible. Vérifiez l’autorisation du micro dans votre navigateur.",
      );
    }
  }

  function stopRecording() {
    recorderRef.current?.stop();
    setRecording(false);
  }

  // ---- Step 1: choose vocabulary ----
  if (!started) {
    return (
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm">
          <p className="text-muted">
            Choisissez le vocabulaire que vous voulez{" "}
            <strong className="text-foreground">travailler à l’oral</strong>,
            puis lancez la pratique.
          </p>
          <span
            className={`shrink-0 rounded-full px-3 py-1 font-semibold ${
              selected.length >= 4
                ? "bg-accent-soft text-accent"
                : "bg-primary-soft text-primary"
            }`}
          >
            {selected.length} choisi{selected.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {qualites.map((q) => {
            const isOn = selected.includes(q.terme);
            return (
              <button
                key={q.terme}
                type="button"
                onClick={() => toggle(q.terme)}
                className={`group rounded-xl border p-4 text-left transition-all ${
                  isOn
                    ? "border-primary bg-primary-soft shadow-sm"
                    : "border-border bg-surface hover:border-primary/40 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{q.terme}</h3>
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                      isOn
                        ? "border-primary bg-primary text-white"
                        : "border-border text-transparent group-hover:border-primary/40"
                    }`}
                  >
                    ✓
                  </span>
                </div>
                <p className="mt-0.5 text-xs italic text-muted">
                  {q.traduction} · {q.categorie}
                </p>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          disabled={selected.length === 0}
          onClick={() => setStarted(true)}
          className="mt-6 w-full rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          🎙️ Commencer la pratique orale
        </button>
      </div>
    );
  }

  // ---- Step 2: speaking practice ----
  const amorce = amorces[index];

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm">
        <button
          type="button"
          onClick={() => {
            clearRecording();
            setStarted(false);
          }}
          className="text-muted transition-colors hover:text-primary"
        >
          ← Modifier mon vocabulaire
        </button>
        <span className="text-muted">
          Amorce {index + 1} / {amorces.length}
        </span>
      </div>

      {/* Vocabulary palette */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          Votre vocabulaire à intégrer
        </p>
        <div className="flex flex-wrap gap-2">
          {chosen.map((q) => (
            <span
              key={q.terme}
              className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
            >
              {q.terme}
            </span>
          ))}
        </div>
      </div>

      {/* The amorce */}
      <div className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Complétez à voix haute
        </p>
        <p className="mt-3 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          {amorce}{" "}
          <span className="text-primary/40">…</span>
        </p>
      </div>

      {/* Optional written draft */}
      <div className="mt-4">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
          Brouillon écrit (facultatif) — préparez votre phrase avant de parler
        </label>
        <textarea
          value={drafts[index] ?? ""}
          onChange={(e) =>
            setDrafts((d) => ({ ...d, [index]: e.target.value }))
          }
          rows={2}
          placeholder={`${amorce} …`}
          className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Recorder */}
      <div className="mt-5 flex flex-col items-center gap-3">
        {!recording ? (
          <button
            type="button"
            onClick={startRecording}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <span className="h-3 w-3 rounded-full bg-white" />
            Enregistrer
          </button>
        ) : (
          <button
            type="button"
            onClick={stopRecording}
            className="flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-white shadow-sm"
          >
            <span className="h-3 w-3 animate-pulse rounded-sm bg-red-400" />
            Arrêter l’enregistrement
          </button>
        )}

        {recError && <p className="text-sm text-primary">{recError}</p>}

        {audioUrl && (
          <div className="flex w-full max-w-md flex-col items-center gap-2">
            <p className="text-sm text-muted">Réécoutez-vous :</p>
            <audio controls src={audioUrl} className="w-full" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
        >
          ← Précédente
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Amorce suivante →
        </button>
      </div>
    </div>
  );
}
