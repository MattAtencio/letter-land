interface Props { size: number; }

export function PenguinSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Penguin illustration">
      {/* Body */}
      <ellipse cx="50" cy="58" rx="30" ry="36" fill="#2D3436" stroke="#1a1a1a" strokeWidth="2" />
      {/* Belly */}
      <ellipse cx="50" cy="62" rx="20" ry="28" fill="#ECEFF1" />
      {/* Head */}
      <circle cx="50" cy="28" r="22" fill="#2D3436" stroke="#1a1a1a" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="40" cy="26" r="5" fill="white" />
      <circle cx="60" cy="26" r="5" fill="white" />
      <circle cx="41" cy="26" r="3" fill="#2D3436" />
      <circle cx="61" cy="26" r="3" fill="#2D3436" />
      <circle cx="42" cy="25" r="1" fill="white" />
      <circle cx="62" cy="25" r="1" fill="white" />
      {/* Beak */}
      <polygon points="50,32 44,38 56,38" fill="#FF9800" stroke="#E68900" strokeWidth="1" />
      {/* Cheeks */}
      <circle cx="36" cy="32" r="4" fill="#FFAB91" opacity="0.6" />
      <circle cx="64" cy="32" r="4" fill="#FFAB91" opacity="0.6" />
      {/* Wings */}
      <ellipse cx="22" cy="55" rx="8" ry="20" fill="#37474F" transform="rotate(15 22 55)" />
      <ellipse cx="78" cy="55" rx="8" ry="20" fill="#37474F" transform="rotate(-15 78 55)" />
      {/* Feet */}
      <ellipse cx="40" cy="92" rx="10" ry="5" fill="#FF9800" />
      <ellipse cx="60" cy="92" rx="10" ry="5" fill="#FF9800" />
    </svg>
  );
}
