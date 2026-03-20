"use client";

import { LETTERS } from "@/data/letters";

interface AlphabetTrainProps {
  exploredLetters: Set<string>;
}

export default function AlphabetTrain({ exploredLetters }: AlphabetTrainProps) {
  return (
    <div className="relative w-full" aria-label={`Alphabet progress: ${exploredLetters.size} of 26 letters explored`}>
      {/* Track */}
      <div className="relative h-16 flex items-end">
        {/* Rail */}
        <div className="absolute bottom-2 left-0 right-0 h-1.5 bg-gray-300 rounded-full" />

        {/* Stops */}
        <div className="relative w-full flex justify-between px-1">
          {LETTERS.map((letter) => {
            const explored = exploredLetters.has(letter.char);
            return (
              <div
                key={letter.char}
                className="flex flex-col items-center"
                title={`${letter.char} — ${explored ? "Explored" : "Not explored"}`}
              >
                {/* Star or dot */}
                <div
                  className="w-3 h-3 rounded-full mb-1 transition-all duration-300"
                  style={{
                    backgroundColor: explored ? letter.color : "#D1D5DB",
                    transform: explored ? "scale(1.3)" : "scale(1)",
                    boxShadow: explored ? `0 0 6px ${letter.color}80` : "none",
                  }}
                />
                {explored && (
                  <span className="text-[8px] leading-none" aria-hidden="true">⭐</span>
                )}
                <span
                  className="text-[7px] font-black leading-none"
                  style={{ color: explored ? letter.color : "#9CA3AF" }}
                >
                  {letter.char}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Train emoji at the end of explored letters */}
      <div
        className="absolute bottom-5 transition-all duration-500"
        style={{
          left: `${Math.max(0, (exploredLetters.size / 26) * 100 - 2)}%`,
        }}
        aria-hidden="true"
      >
        🚂
      </div>
    </div>
  );
}
