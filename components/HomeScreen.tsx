"use client";

import { useAudio } from "./AudioContext";
import { LETTERS } from "@/data/letters";
import AlphabetTrain from "./AlphabetTrain";

interface HomeScreenProps {
  exploredLetters: Set<string>;
  onModeSelect: (mode: "explore" | "learn") => void;
}

export default function HomeScreen({ exploredLetters, onModeSelect }: HomeScreenProps) {
  const { muted, toggleMute } = useAudio();

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-6 bg-[var(--color-bg)]">
      {/* Back to Hub */}
      <a
        href="/"
        className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/80 shadow-md flex items-center justify-center text-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Back to Kids Corner"
      >
        &#x1F3E0;
      </a>

      {/* Mute Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white/80 shadow-md flex items-center justify-center text-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label={muted ? "Unmute sound" : "Mute sound"}
      >
        {muted ? "🔇" : "🔊"}
      </button>

      {/* Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
          <span className="text-[#FF6B6B]">L</span>
          <span className="text-[#FFD93D]">e</span>
          <span className="text-[#6BCB77]">t</span>
          <span className="text-[#4D96FF]">t</span>
          <span className="text-[#9B59B6]">e</span>
          <span className="text-[#FF6B9D]">r</span>
          <span className="mx-2" />
          <span className="text-[#E67E22]">L</span>
          <span className="text-[#1ABC9C]">a</span>
          <span className="text-[#E84393]">n</span>
          <span className="text-[#6C5CE7]">d</span>
        </h1>
        <p className="text-lg text-gray-500 mt-2 font-bold">Learn the Alphabet!</p>
      </div>

      {/* Mode Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs mb-8">
        <button
          onClick={() => onModeSelect("explore")}
          className="w-full py-5 px-6 rounded-3xl bg-[#4D96FF] text-white text-2xl font-black shadow-lg active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-blue-300"
          aria-label="Explore Mode — tap letters to learn about them"
        >
          🔍 Explore
        </button>
        <button
          onClick={() => onModeSelect("learn")}
          className="w-full py-5 px-6 rounded-3xl bg-[#6BCB77] text-white text-2xl font-black shadow-lg active:scale-95 transition-transform focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Learn Mode — go through the alphabet one letter at a time"
        >
          📖 Learn
        </button>
      </div>

      {/* Alphabet Train Progress */}
      <div className="w-full max-w-sm">
        <p className="text-center text-sm font-bold text-gray-400 mb-2">
          {exploredLetters.size} / {LETTERS.length} letters explored
        </p>
        <AlphabetTrain exploredLetters={exploredLetters} />
      </div>
    </div>
  );
}
