"use client";

import { useState, useCallback, useEffect } from "react";
import { LETTERS, type LetterData } from "@/data/letters";
import { useVoice, useSoundEffects } from "@kids-games/core/voice";
import LetterCard from "./LetterCard";
import { getIllustration } from "./illustrations";

interface ExploreModeProps {
  exploredLetters: Set<string>;
  onExplore: (char: string) => void;
  onBack: () => void;
}

export default function ExploreMode({ exploredLetters, onExplore, onBack }: ExploreModeProps) {
  const [selectedLetter, setSelectedLetter] = useState<LetterData | null>(null);
  const [bouncing, setBouncing] = useState<string | null>(null);
  const { playSequence, cancel } = useVoice();
  const { playPop } = useSoundEffects();

  const handleTileTap = useCallback(
    (letter: LetterData) => {
      playPop();
      setBouncing(letter.char);
      setTimeout(() => setBouncing(null), 200);
      setSelectedLetter(letter);
      onExplore(letter.char);
      const c = letter.char.toLowerCase();
      playSequence([
        { id: `letter-${c}`, persona: "maple" },
        { id: `phonetic-${c}`, persona: "maple" },
        { id: `word-${c}`, persona: "maple" },
      ]);
    },
    [playPop, onExplore, playSequence]
  );

  const handleDismiss = useCallback(() => {
    cancel();
    setSelectedLetter(null);
  }, [cancel]);

  // Handle escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedLetter) handleDismiss();
        else onBack();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedLetter, handleDismiss, onBack]);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[var(--color-bg)]">
      {/* Header */}
      <div className="flex items-center px-4 py-3 shrink-0">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-2xl bg-white/80 shadow-md flex items-center justify-center text-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Back to home"
        >
          ←
        </button>
        <h2 className="flex-1 text-center text-2xl font-black text-gray-700">Explore</h2>
        <div className="w-12" /> {/* Spacer for centering */}
      </div>

      {/* Letter Grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="grid grid-cols-5 gap-3 max-w-md mx-auto">
          {LETTERS.map((letter) => {
            const explored = exploredLetters.has(letter.char);
            const isBouncing = bouncing === letter.char;
            return (
              <button
                key={letter.char}
                onClick={() => handleTileTap(letter)}
                className={`letter-tile relative aspect-square rounded-2xl flex flex-col items-center justify-center shadow-md transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  isBouncing ? "animate-bounce-tap" : "active:scale-95"
                }`}
                style={{ backgroundColor: letter.color + "30", borderColor: letter.color, borderWidth: 2 }}
                aria-label={`Letter ${letter.char} for ${letter.word}${explored ? ", explored" : ""}`}
              >
                {/* Star badge */}
                {explored && (
                  <span className="absolute top-1 right-1 text-xs" aria-hidden="true">⭐</span>
                )}

                {/* Illustration peeking */}
                <div className="w-8 h-8 opacity-50" aria-hidden="true">
                  {getIllustration(letter.char, 32)}
                </div>

                {/* Letter */}
                <span
                  className="text-2xl sm:text-3xl font-black leading-none"
                  style={{ color: letter.color }}
                >
                  {letter.char}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-screen card overlay */}
      {selectedLetter && (
        <LetterCard letter={selectedLetter} onDismiss={handleDismiss} />
      )}
    </div>
  );
}
