interface Props { size: number; }

export function LionSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Lion illustration">
      {/* Mane */}
      <circle cx="50" cy="50" r="40" fill="#E67E22" />
      {/* Mane spikes */}
      <circle cx="50" cy="10" r="12" fill="#D35400" />
      <circle cx="25" cy="18" r="11" fill="#D35400" />
      <circle cx="75" cy="18" r="11" fill="#D35400" />
      <circle cx="14" cy="40" r="10" fill="#D35400" />
      <circle cx="86" cy="40" r="10" fill="#D35400" />
      <circle cx="18" cy="62" r="10" fill="#D35400" />
      <circle cx="82" cy="62" r="10" fill="#D35400" />
      <circle cx="30" cy="80" r="10" fill="#D35400" />
      <circle cx="70" cy="80" r="10" fill="#D35400" />
      {/* Face */}
      <circle cx="50" cy="52" r="28" fill="#F5B041" />
      {/* Muzzle */}
      <ellipse cx="50" cy="60" rx="14" ry="10" fill="#FDEBD0" />
      {/* Nose */}
      <ellipse cx="50" cy="56" rx="4" ry="3" fill="#2D3436" />
      {/* Mouth */}
      <path d="M46 62 Q50 67 54 62" fill="none" stroke="#A0522D" strokeWidth="1.5" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="40" cy="46" r="4" fill="#2D3436" />
      <circle cx="60" cy="46" r="4" fill="#2D3436" />
      <circle cx="41" cy="45" r="1.5" fill="white" />
      <circle cx="61" cy="45" r="1.5" fill="white" />
    </svg>
  );
}
