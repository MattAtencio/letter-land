interface Props { size: number; }

export function UmbrellaSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Umbrella illustration">
      {/* Canopy */}
      <path d="M10 50 Q10 15 50 10 Q90 15 90 50 Z" fill="#FDCB6E" stroke="#F39C12" strokeWidth="2" />
      {/* Canopy sections */}
      <path d="M30 50 Q30 25 50 10" fill="none" stroke="#F39C12" strokeWidth="2" />
      <path d="M50 50 Q50 20 50 10" fill="none" stroke="#F39C12" strokeWidth="2" />
      <path d="M70 50 Q70 25 50 10" fill="none" stroke="#F39C12" strokeWidth="2" />
      {/* Scalloped edge */}
      <path d="M10 50 Q20 44 30 50 Q40 44 50 50 Q60 44 70 50 Q80 44 90 50" fill="none" stroke="#F39C12" strokeWidth="2" />
      {/* Handle */}
      <line x1="50" y1="50" x2="50" y2="85" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
      {/* Handle curve */}
      <path d="M50 85 Q50 95 58 95 Q66 95 66 88" fill="none" stroke="#5D4037" strokeWidth="4" strokeLinecap="round" />
      {/* Tip */}
      <circle cx="50" cy="10" r="3" fill="#F39C12" />
      {/* Raindrops */}
      <ellipse cx="20" cy="60" rx="2" ry="4" fill="#64B5F6" opacity="0.6" />
      <ellipse cx="80" cy="65" rx="2" ry="4" fill="#64B5F6" opacity="0.6" />
      <ellipse cx="35" cy="70" rx="2" ry="4" fill="#64B5F6" opacity="0.6" />
      <ellipse cx="68" cy="58" rx="2" ry="4" fill="#64B5F6" opacity="0.6" />
    </svg>
  );
}
