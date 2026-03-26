"use client";

import { KidsAudioProvider } from "@kids-games/core/voice";
import type { ReactNode } from "react";

export function AudioProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <KidsAudioProvider storagePrefix="letter-land" audioBasePath="/letter-land/audio">
      {children}
    </KidsAudioProvider>
  );
}
