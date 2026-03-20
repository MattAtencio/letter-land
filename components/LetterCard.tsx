"use client";

import { useRef, useCallback } from "react";
import type { LetterData } from "@/data/letters";
import { useAudio } from "./AudioContext";
import { getIllustration } from "./illustrations";

interface LetterCardProps {
  letter: LetterData;
  onDismiss: () => void;
  showArrows?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function LetterCard({
  letter,
  onDismiss,
  showArrows,
  onPrev,
  onNext,
}: LetterCardProps) {
  const touchStartY = useRef(0);
  const { speakSequence, playPop } = useAudio();

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = e.changedTouches[0].clientY - touchStartY.current;
      if (diff > 80) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const handleReplay = useCallback(() => {
    playPop();
    speakSequence([letter.char, letter.phonetic, letter.word]);
  }, [playPop, speakSequence, letter]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 animate-fade-in"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={`Letter ${letter.char} for ${letter.word}`}
    >
      <div
        className="letter-card relative bg-white rounded-3xl shadow-2xl p-8 mx-4 max-w-sm w-full animate-card-enter flex flex-col items-center gap-4"
        style={{ borderTop: `6px solid ${letter.color}` }}
      >
        {/* Close button */}
        {!showArrows && (
          <button
            onClick={onDismiss}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Close card"
          >
            ✕
          </button>
        )}

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

        {/* Navigation arrows */}
        {showArrows && (
          <div className="flex items-center gap-8 mt-2">
            {onPrev && (
              <button
                onClick={onPrev}
                className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-600 shadow-md active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Previous letter"
              >
                ←
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl text-gray-600 shadow-md active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Next letter"
              >
                →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
