"use client";

import { useState, useEffect, useCallback } from "react";
import HomeScreen from "@/components/HomeScreen";
import ExploreMode from "@/components/ExploreMode";
import LearnMode from "@/components/LearnMode";
import { AudioProvider, useAudio } from "@/components/AudioContext";

type AppMode = "home" | "explore" | "learn";

function AppContent() {
  const [mode, setMode] = useState<AppMode>("home");
  const [exploredLetters, setExploredLetters] = useState<Set<string>>(new Set());
  const [learnedLetters, setLearnedLetters] = useState<Set<string>>(new Set());
  const [learnPosition, setLearnPosition] = useState(0);
  const { playPop } = useAudio();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const explored = localStorage.getItem("ll-explored");
    const learned = localStorage.getItem("ll-learned");
    const pos = localStorage.getItem("ll-learn-pos");
    if (explored) setExploredLetters(new Set(JSON.parse(explored)));
    if (learned) setLearnedLetters(new Set(JSON.parse(learned)));
    if (pos) setLearnPosition(parseInt(pos, 10));
  }, []);

  const markExplored = useCallback((char: string) => {
    setExploredLetters((prev) => {
      const next = new Set(prev);
      next.add(char);
      localStorage.setItem("ll-explored", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const markLearned = useCallback((char: string) => {
    setLearnedLetters((prev) => {
      const next = new Set(prev);
      next.add(char);
      localStorage.setItem("ll-learned", JSON.stringify([...next]));
      return next;
    });
  }, []);

  const saveLearnPosition = useCallback((pos: number) => {
    setLearnPosition(pos);
    localStorage.setItem("ll-learn-pos", String(pos));
  }, []);

  const handleModeSelect = useCallback((m: AppMode) => {
    playPop();
    setMode(m);
  }, [playPop]);

  if (mode === "explore") {
    return (
      <ExploreMode
        exploredLetters={exploredLetters}
        onExplore={markExplored}
        onBack={() => setMode("home")}
      />
    );
  }

  if (mode === "learn") {
    return (
      <LearnMode
        learnedLetters={learnedLetters}
        onLearned={markLearned}
        startPosition={learnPosition}
        onPositionChange={saveLearnPosition}
        onBack={() => setMode("home")}
      />
    );
  }

  return (
    <HomeScreen
      exploredLetters={exploredLetters}
      onModeSelect={handleModeSelect}
    />
  );
}

export default function Page() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}
