interface Props { size: number; }

export function KiteSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Kite illustration">
      {/* Kite body */}
      <polygon points="50,5 75,40 50,70 25,40" fill="#42A5F5" stroke="#1E88E5" strokeWidth="2" />
      {/* Cross lines */}
      <line x1="50" y1="5" x2="50" y2="70" stroke="#1E88E5" strokeWidth="1.5" />
      <line x1="25" y1="40" x2="75" y2="40" stroke="#1E88E5" strokeWidth="1.5" />
      {/* Quadrant colors */}
      <polygon points="50,5 75,40 50,40" fill="#66BB6A" opacity="0.6" />
      <polygon points="50,40 25,40 50,70" fill="#FFD54F" opacity="0.6" />
      {/* String */}
      <path d="M50 70 Q55 80 48 85 Q42 90 50 95" fill="none" stroke="#5D4037" strokeWidth="1.5" />
      {/* Bows on string */}
      <polygon points="48,82 44,79 44,85" fill="#FF7043" />
      <polygon points="50,90 46,87 46,93" fill="#AB47BC" />
      {/* Face */}
      <circle cx="44" cy="35" r="3" fill="#2D3436" />
      <circle cx="56" cy="35" r="3" fill="#2D3436" />
      <path d="M46 44 Q50 48 54 44" fill="none" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
