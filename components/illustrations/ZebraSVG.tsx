interface Props { size: number; }

export function ZebraSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Zebra illustration">
      {/* Ears */}
      <ellipse cx="32" cy="15" rx="6" ry="10" fill="white" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="68" cy="15" rx="6" ry="10" fill="white" stroke="#2D3436" strokeWidth="2" />
      <ellipse cx="32" cy="15" rx="3" ry="6" fill="#FFB3B3" />
      <ellipse cx="68" cy="15" rx="3" ry="6" fill="#FFB3B3" />
      {/* Mane */}
      <rect x="38" y="5" width="24" height="25" rx="4" fill="#2D3436" />
      {/* Head */}
      <ellipse cx="50" cy="45" rx="26" ry="30" fill="white" stroke="#455A64" strokeWidth="2" />
      {/* Stripes */}
      <path d="M30 30 Q40 28 45 35" fill="none" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      <path d="M55 35 Q60 28 70 30" fill="none" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      <path d="M28 42 Q38 38 42 45" fill="none" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      <path d="M58 45 Q62 38 72 42" fill="none" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" />
      {/* Muzzle */}
      <ellipse cx="50" cy="62" rx="16" ry="12" fill="#E0E0E0" stroke="#455A64" strokeWidth="1.5" />
      {/* Nostrils */}
      <circle cx="44" cy="62" r="2.5" fill="#455A64" />
      <circle cx="56" cy="62" r="2.5" fill="#455A64" />
      {/* Eyes */}
      <circle cx="38" cy="42" r="5" fill="#2D3436" />
      <circle cx="62" cy="42" r="5" fill="#2D3436" />
      <circle cx="39" cy="41" r="2" fill="white" />
      <circle cx="63" cy="41" r="2" fill="white" />
      {/* Smile */}
      <path d="M44 68 Q50 73 56 68" fill="none" stroke="#455A64" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
