interface Props { size: number; }

export function DuckSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Duck illustration">
      {/* Body */}
      <ellipse cx="50" cy="65" rx="32" ry="24" fill="#FFD93D" stroke="#F5C518" strokeWidth="2" />
      {/* Head */}
      <circle cx="50" cy="32" r="22" fill="#FFD93D" stroke="#F5C518" strokeWidth="2" />
      {/* Bill */}
      <ellipse cx="50" cy="42" rx="14" ry="6" fill="#FF9800" stroke="#E68900" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="42" cy="28" r="4" fill="#2D3436" />
      <circle cx="58" cy="28" r="4" fill="#2D3436" />
      <circle cx="43" cy="27" r="1.5" fill="white" />
      <circle cx="59" cy="27" r="1.5" fill="white" />
      {/* Cheek blush */}
      <circle cx="35" cy="35" r="4" fill="#FFAB91" opacity="0.5" />
      <circle cx="65" cy="35" r="4" fill="#FFAB91" opacity="0.5" />
      {/* Wing */}
      <ellipse cx="30" cy="62" rx="12" ry="16" fill="#F5C518" transform="rotate(-10 30 62)" />
    </svg>
  );
}
