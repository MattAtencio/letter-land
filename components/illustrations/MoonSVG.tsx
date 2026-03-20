interface Props { size: number; }

export function MoonSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Moon illustration">
      {/* Glow */}
      <circle cx="50" cy="50" r="42" fill="#FFF9C4" opacity="0.4" />
      {/* Moon body */}
      <circle cx="50" cy="50" r="35" fill="#FDD835" stroke="#F9A825" strokeWidth="2" />
      {/* Crescent shadow */}
      <circle cx="62" cy="45" r="28" fill="#FFF8E1" opacity="0.3" />
      {/* Craters */}
      <circle cx="38" cy="38" r="5" fill="#F9A825" opacity="0.4" />
      <circle cx="55" cy="58" r="7" fill="#F9A825" opacity="0.3" />
      <circle cx="42" cy="62" r="4" fill="#F9A825" opacity="0.3" />
      {/* Eyes */}
      <circle cx="40" cy="45" r="3.5" fill="#2D3436" />
      <circle cx="58" cy="45" r="3.5" fill="#2D3436" />
      <circle cx="41" cy="44" r="1.2" fill="white" />
      <circle cx="59" cy="44" r="1.2" fill="white" />
      {/* Smile */}
      <path d="M43 55 Q50 62 57 55" fill="none" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" />
      {/* Stars around */}
      <polygon points="15,15 17,20 22,20 18,23 19,28 15,25 11,28 12,23 8,20 13,20" fill="#FFD54F" />
      <polygon points="85,20 86,23 89,23 87,25 88,28 85,26 82,28 83,25 81,23 84,23" fill="#FFD54F" />
      <polygon points="80,75 81,77 83,77 82,79 82,81 80,80 78,81 78,79 77,77 79,77" fill="#FFD54F" />
    </svg>
  );
}
