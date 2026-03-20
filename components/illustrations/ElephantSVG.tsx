interface Props { size: number; }

export function ElephantSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Elephant illustration">
      {/* Ears */}
      <ellipse cx="20" cy="45" rx="16" ry="22" fill="#7FB3D8" stroke="#5A9BC7" strokeWidth="2" />
      <ellipse cx="80" cy="45" rx="16" ry="22" fill="#7FB3D8" stroke="#5A9BC7" strokeWidth="2" />
      <ellipse cx="20" cy="45" rx="10" ry="15" fill="#B3D9F2" />
      <ellipse cx="80" cy="45" rx="10" ry="15" fill="#B3D9F2" />
      {/* Head */}
      <ellipse cx="50" cy="48" rx="30" ry="32" fill="#7FB3D8" stroke="#5A9BC7" strokeWidth="2" />
      {/* Trunk */}
      <path d="M50 65 Q50 80 42 88 Q38 92 42 92 Q48 92 50 85 Q52 92 58 92 Q62 92 58 88 Q50 80 50 65" fill="#7FB3D8" stroke="#5A9BC7" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="38" cy="40" r="4" fill="#2D3436" />
      <circle cx="62" cy="40" r="4" fill="#2D3436" />
      <circle cx="39" cy="39" r="1.5" fill="white" />
      <circle cx="63" cy="39" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M40 55 Q50 60 60 55" fill="none" stroke="#4A8BB5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
