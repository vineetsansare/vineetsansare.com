"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { CommandPalette } from "./command-palette";

export default function EasterEggs() {
  const [konamiIdx, setKonamiIdx] = useState(0);
  const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIdx]) {
        if (konamiIdx === konamiCode.length - 1) {
          toast.success("Konami Code Activated! Engineering Mode Unlocked 🚀");
          document.documentElement.style.setProperty("--primary", "oklch(0.6 0.118 184.704)");
          setKonamiIdx(0);
        } else {
          setKonamiIdx((prev) => prev + 1);
        }
      } else {
        setKonamiIdx(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIdx]);

  return (
    <>
      <CommandPalette />
      {/* Placeholders for Visitor Counter & Now Playing could go here */}
    </>
  );
}
