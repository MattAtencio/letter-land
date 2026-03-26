"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { LETTERS } from "@/data/letters";
import { useVoice, useSoundEffects } from "@kids-games/core/voice";
import { getIllustration } from "./illustrations";

interface LearnModeProps {
  learnedLetters: Set<string>;
  onLearned: (char: string) => void;
  startPosition: number;
  onPositionChange: (pos: number) => void;
  onBack: () => void;
}

function letterPhrases(char: string) {
  const c = char.toLowerCase();
  return [
    { id: `letter-${c}`, persona: "maple" as const },
    { id: `phonetic-${c}`, persona: "maple" as const },
    { id: `word-${c}`, persona: "maple" as const },
    { id: `sentence-${c}`, persona: "maple" as const },
  ];
}

export default function LearnMode({
  learnedLetters,
  onLearned,
  startPosition,
  onPositionChange,
  onBack,
}: LearnModeProps) {
  const [currentIndex, setCurrentIndex] = useState(Math.min(startPosition, LETTERS.length - 1));
  const { playSequence, cancel } = useVoice();
  const { playPop } = useSoundEffects();
  const touchStartX = useRef(0);
  const hasAutoPlayed = useRef<number | null>(null);

  const letter = LETTERS[currentIndex];

  // Auto-play audio on card enter
  useEffect(() => {
    if (hasAutoPlayed.current === currentIndex) return;
    hasAutoPlayed.current = currentIndex;
    const l = LETTERS[currentIndex];
    onLearned(l.char);
    const timer = setTimeout(() => {
      playSequence(letterPhrases(l.char));
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex, playSequence, onLearned]);

  const goTo = useCallback(
    (index: number) => {
      cancel();
      playPop();
      const clamped = Math.max(0, Math.min(LETTERS.length - 1, index));
      setCurrentIndex(clamped);
      onPositionChange(clamped);
    },
    [cancel, playPop, onPositionChange]
  );

  const handleReplay = useCallback(() => {
    playPop();
    playSequence(letterPhrases(letter.char));
  }, [playPop, playSequence, letter]);

  // Swipe handling
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) {
        if (diff > 0 && currentIndex < LETTERS.length - 1) {
          goTo(currentIndex + 1);
        } else if (diff < 0 && currentIndex > 0) {
          goTo(currentIndex - 1);
        }
      }
    },
    [currentIndex, goTo]
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentIndex < LETTERS.length - 1) goTo(currentIndex + 1);
      if (e.key === "ArrowLeft" && currentIndex > 0) goTo(currentIndex - 1);
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentIndex, goTo, onBack]);

  return (
    <div
      className="flex flex-col min-h-[100dvh] bg-[var(--color-bg)]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="flex items-center px-4 py-3 shrink-0">
        <button
          onClick={onBack}
          className="w-12 h-12 rounded-2xl bg-white/80 shadow-md flex items-center justify-center text-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Back to home"
        >
          ←
        </button>
        <h2 className="flex-1 text-center text-2xl font-black text-gray-700">Learn</h2>
        <div className="w-12" />
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div
          className="letter-card bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full flex flex-col items-center gap-4 animate-card-enter"
          style={{ borderTop: `6px solid ${letter.color}` }}
          key={currentIndex}
        >
          {/* Large Letter */}
          <button
            onClick={handleReplay}
            className="text-[120px] sm:text-[140px] font-black leading-none focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-2xl"
            style={{ color: letter.color }}
            aria-label={`Letter ${letter.char}, tap to replay audio`}
          >
            {letter.char}
          </button>

          {/* Illustration */}
          <button
            onClick={handleReplay}
            className="w-32 h-32 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-2xl"
            aria-label={`${letter.word} illustration, tap to replay audio`}
          >
            {getIllustration(letter.char, 128)}
          </button>

          {/* Word label */}
          <p className="text-3xl font-black text-gray-700">{letter.word}</p>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center gap-8 mt-6">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-600 disabled:opacity-30 active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Previous letter"
          >
            ←
          </button>
          <span className="text-lg font-bold text-gray-400">
            {currentIndex + 1} / {LETTERS.length}
          </span>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === LETTERS.length - 1}
            className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-2xl text-gray-600 disabled:opacity-30 active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Next letter"
          >
            →
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 py-4 px-4 shrink-0 flex-wrap max-w-sm mx-auto">
        {LETTERS.map((l, i) => (
          <button
            key={l.char}
            onClick={() => goTo(i)}
            className="w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            style={{
              backgroundColor: i === currentIndex ? l.color : learnedLetters.has(l.char) ? l.color + "60" : "#D1D5DB",
              transform: i === currentIndex ? "scale(1.4)" : "scale(1)",
            }}
            aria-label={`Go to letter ${l.char}`}
          />
        ))}
      </div>
    </div>
  );
}
