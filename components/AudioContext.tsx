"use client";

import { createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode } from "react";

interface AudioContextType {
  muted: boolean;
  toggleMute: () => void;
  speak: (text: string) => Promise<void>;
  speakSequence: (items: string[], pauseMs?: number) => Promise<void>;
  cancelSpeech: () => void;
  playPop: () => void;
}

const AudioCtx = createContext<AudioContextType>({
  muted: false,
  toggleMute: () => {},
  speak: async () => {},
  speakSequence: async () => {},
  cancelSpeech: () => {},
  playPop: () => {},
});

export function useAudio() {
  return useContext(AudioCtx);
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(false);
  const audioCtxRef = useRef<globalThis.AudioContext | null>(null);
  const cancelRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("ll-muted");
    if (saved === "true") setMuted(true);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      localStorage.setItem("ll-muted", String(next));
      if (next) {
        window.speechSynthesis?.cancel();
      }
      return next;
    });
  }, []);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }
    return audioCtxRef.current;
  }, []);

  const playPop = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.frequency.setValueAtTime(600, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.1);
    } catch {
      // Audio context not available
    }
  }, [muted, getAudioContext]);

  const speak = useCallback(
    (text: string): Promise<void> => {
      return new Promise((resolve) => {
        if (muted || typeof window === "undefined" || !window.speechSynthesis) {
          resolve();
          return;
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        utterance.pitch = 1.1;
        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();
        window.speechSynthesis.speak(utterance);
      });
    },
    [muted]
  );

  const cancelSpeech = useCallback(() => {
    cancelRef.current = true;
    if (typeof window !== "undefined") {
      window.speechSynthesis?.cancel();
    }
  }, []);

  const speakSequence = useCallback(
    async (items: string[], pauseMs = 500) => {
      cancelRef.current = false;
      for (let i = 0; i < items.length; i++) {
        if (cancelRef.current || muted) break;
        await speak(items[i]);
        if (i < items.length - 1 && !cancelRef.current) {
          await new Promise((r) => setTimeout(r, pauseMs));
        }
      }
    },
    [speak, muted]
  );

  return (
    <AudioCtx.Provider value={{ muted, toggleMute, speak, speakSequence, cancelSpeech, playPop }}>
      {children}
    </AudioCtx.Provider>
  );
}
