interface Props { size: number; }

export function ViolinSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Violin illustration">
      {/* Neck */}
      <rect x="47" y="5" width="6" height="35" rx="2" fill="#8D6E63" stroke="#6D4C41" strokeWidth="1" />
      {/* Scroll */}
      <circle cx="50" cy="6" r="5" fill="#6D4C41" />
      <circle cx="50" cy="6" r="2.5" fill="#8D6E63" />
      {/* Pegs */}
      <rect x="42" y="10" width="5" height="2" rx="1" fill="#5D4037" />
      <rect x="53" y="10" width="5" height="2" rx="1" fill="#5D4037" />
      <rect x="42" y="16" width="5" height="2" rx="1" fill="#5D4037" />
      <rect x="53" y="16" width="5" height="2" rx="1" fill="#5D4037" />
      {/* Body upper bout */}
      <ellipse cx="50" cy="48" rx="18" ry="14" fill="#D4A373" stroke="#A0522D" strokeWidth="2" />
      {/* Body lower bout */}
      <ellipse cx="50" cy="72" rx="22" ry="18" fill="#D4A373" stroke="#A0522D" strokeWidth="2" />
      {/* Waist (C-bouts) */}
      <ellipse cx="50" cy="60" rx="12" ry="8" fill="#D4A373" stroke="#A0522D" strokeWidth="2" />
      {/* F-holes */}
      <path d="M40 55 Q38 60 40 65" fill="none" stroke="#5D4037" strokeWidth="1.5" />
      <path d="M60 55 Q62 60 60 65" fill="none" stroke="#5D4037" strokeWidth="1.5" />
      {/* Bridge */}
      <rect x="44" y="66" width="12" height="3" rx="1" fill="#5D4037" />
      {/* Strings */}
      <line x1="46" y1="20" x2="46" y2="86" stroke="#9E9E9E" strokeWidth="0.8" />
      <line x1="48.5" y1="20" x2="48.5" y2="86" stroke="#9E9E9E" strokeWidth="0.8" />
      <line x1="51.5" y1="20" x2="51.5" y2="86" stroke="#9E9E9E" strokeWidth="0.8" />
      <line x1="54" y1="20" x2="54" y2="86" stroke="#9E9E9E" strokeWidth="0.8" />
      {/* Tailpiece */}
      <polygon points="46,86 50,92 54,86" fill="#5D4037" />
      {/* Chin rest */}
      <ellipse cx="58" cy="82" rx="6" ry="4" fill="#6D4C41" />
    </svg>
  );
}
