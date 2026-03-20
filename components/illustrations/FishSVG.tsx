interface Props { size: number; }

export function FishSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Fish illustration">
      {/* Tail */}
      <polygon points="15,50 5,35 5,65" fill="#CE93D8" stroke="#AB47BC" strokeWidth="2" />
      {/* Body */}
      <ellipse cx="50" cy="50" rx="35" ry="22" fill="#CE93D8" stroke="#AB47BC" strokeWidth="2" />
      {/* Fin top */}
      <path d="M45 28 Q50 15 55 28" fill="#BA68C8" stroke="#AB47BC" strokeWidth="1.5" />
      {/* Fin bottom */}
      <path d="M45 72 Q50 82 55 72" fill="#BA68C8" stroke="#AB47BC" strokeWidth="1.5" />
      {/* Eye */}
      <circle cx="65" cy="45" r="6" fill="white" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="67" cy="44" r="3" fill="#2D3436" />
      <circle cx="68" cy="43" r="1" fill="white" />
      {/* Mouth */}
      <path d="M78 52 Q82 50 78 48" fill="none" stroke="#7B1FA2" strokeWidth="2" strokeLinecap="round" />
      {/* Scales */}
      <path d="M35 42 Q40 38 45 42" fill="none" stroke="#BA68C8" strokeWidth="1.5" />
      <path d="M35 50 Q40 46 45 50" fill="none" stroke="#BA68C8" strokeWidth="1.5" />
      <path d="M35 58 Q40 54 45 58" fill="none" stroke="#BA68C8" strokeWidth="1.5" />
      {/* Bubbles */}
      <circle cx="88" cy="38" r="3" fill="none" stroke="#CE93D8" strokeWidth="1" />
      <circle cx="92" cy="30" r="2" fill="none" stroke="#CE93D8" strokeWidth="1" />
    </svg>
  );
}
