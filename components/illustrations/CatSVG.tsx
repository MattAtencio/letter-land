interface Props { size: number; }

export function CatSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Cat illustration">
      {/* Ears */}
      <polygon points="22,15 15,40 35,35" fill="#FFB74D" stroke="#F09030" strokeWidth="2" />
      <polygon points="78,15 85,40 65,35" fill="#FFB74D" stroke="#F09030" strokeWidth="2" />
      <polygon points="24,20 19,38 33,34" fill="#FFD93D" />
      <polygon points="76,20 81,38 67,34" fill="#FFD93D" />
      {/* Head */}
      <ellipse cx="50" cy="55" rx="32" ry="30" fill="#FFB74D" stroke="#F09030" strokeWidth="2" />
      {/* Eyes */}
      <ellipse cx="38" cy="48" rx="5" ry="6" fill="#4CAF50" />
      <ellipse cx="62" cy="48" rx="5" ry="6" fill="#4CAF50" />
      <ellipse cx="38" cy="48" rx="2.5" ry="6" fill="#2D3436" />
      <ellipse cx="62" cy="48" rx="2.5" ry="6" fill="#2D3436" />
      {/* Nose */}
      <polygon points="50,56 47,60 53,60" fill="#FF8A80" />
      {/* Mouth */}
      <path d="M47 62 Q50 66 50 62 Q50 66 53 62" fill="none" stroke="#E65100" strokeWidth="1.5" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="18" y1="55" x2="36" y2="58" stroke="#E65100" strokeWidth="1.5" />
      <line x1="18" y1="62" x2="36" y2="62" stroke="#E65100" strokeWidth="1.5" />
      <line x1="64" y1="58" x2="82" y2="55" stroke="#E65100" strokeWidth="1.5" />
      <line x1="64" y1="62" x2="82" y2="62" stroke="#E65100" strokeWidth="1.5" />
    </svg>
  );
}
