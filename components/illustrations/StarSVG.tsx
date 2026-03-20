interface Props { size: number; }

export function StarSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Star illustration">
      {/* Glow */}
      <circle cx="50" cy="50" r="42" fill="#FFF9C4" opacity="0.3" />
      {/* Star body */}
      <polygon
        points="50,8 61,38 93,38 67,56 76,88 50,68 24,88 33,56 7,38 39,38"
        fill="#FFD54F"
        stroke="#F9A825"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner highlight */}
      <polygon
        points="50,18 58,38 78,38 62,50 68,70 50,58 32,70 38,50 22,38 42,38"
        fill="#FFEE58"
        opacity="0.6"
      />
      {/* Eyes */}
      <circle cx="43" cy="42" r="3" fill="#2D3436" />
      <circle cx="57" cy="42" r="3" fill="#2D3436" />
      <circle cx="44" cy="41" r="1" fill="white" />
      <circle cx="58" cy="41" r="1" fill="white" />
      {/* Smile */}
      <path d="M44 50 Q50 56 56 50" fill="none" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" />
      {/* Sparkles */}
      <circle cx="20" cy="15" r="2" fill="#FFD54F" />
      <circle cx="82" cy="18" r="1.5" fill="#FFD54F" />
      <circle cx="88" cy="72" r="2" fill="#FFD54F" />
      <circle cx="12" cy="78" r="1.5" fill="#FFD54F" />
    </svg>
  );
}
