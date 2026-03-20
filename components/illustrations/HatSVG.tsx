interface Props { size: number; }

export function HatSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Hat illustration">
      {/* Brim */}
      <ellipse cx="50" cy="72" rx="42" ry="10" fill="#C0392B" stroke="#A93226" strokeWidth="2" />
      {/* Crown */}
      <rect x="25" y="30" width="50" height="42" rx="4" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
      {/* Top */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
      {/* Band */}
      <rect x="25" y="55" width="50" height="8" fill="#2D3436" />
      {/* Buckle */}
      <rect x="42" y="54" width="16" height="10" rx="2" fill="#FFD93D" stroke="#F5C518" strokeWidth="1" />
      <rect x="46" y="56" width="8" height="6" rx="1" fill="#2D3436" />
      {/* Highlight */}
      <ellipse cx="38" cy="42" rx="6" ry="10" fill="white" opacity="0.15" />
    </svg>
  );
}
