interface Props { size: number; }

export function BearSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Bear illustration">
      {/* Ears */}
      <circle cx="25" cy="22" r="14" fill="#A0522D" stroke="#8B4513" strokeWidth="2" />
      <circle cx="75" cy="22" r="14" fill="#A0522D" stroke="#8B4513" strokeWidth="2" />
      <circle cx="25" cy="22" r="8" fill="#DEB887" />
      <circle cx="75" cy="22" r="8" fill="#DEB887" />
      {/* Head */}
      <ellipse cx="50" cy="52" rx="34" ry="36" fill="#A0522D" stroke="#8B4513" strokeWidth="2" />
      {/* Muzzle */}
      <ellipse cx="50" cy="62" rx="18" ry="14" fill="#DEB887" />
      {/* Nose */}
      <ellipse cx="50" cy="57" rx="5" ry="4" fill="#2D3436" />
      {/* Mouth */}
      <path d="M44 64 Q50 70 56 64" fill="none" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="38" cy="45" r="4" fill="#2D3436" />
      <circle cx="62" cy="45" r="4" fill="#2D3436" />
      <circle cx="39" cy="44" r="1.5" fill="white" />
      <circle cx="63" cy="44" r="1.5" fill="white" />
    </svg>
  );
}
