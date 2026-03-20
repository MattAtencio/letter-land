interface Props { size: number; }

export function AppleSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Apple illustration">
      {/* Stem */}
      <rect x="47" y="8" width="6" height="16" rx="2" fill="#5D4037" />
      {/* Leaf */}
      <ellipse cx="58" cy="16" rx="10" ry="5" fill="#4CAF50" transform="rotate(-20 58 16)" />
      {/* Apple body */}
      <ellipse cx="50" cy="58" rx="30" ry="32" fill="#FF6B6B" stroke="#E55555" strokeWidth="2" />
      {/* Highlight */}
      <ellipse cx="38" cy="48" rx="8" ry="12" fill="#FF9999" opacity="0.6" />
      {/* Smile */}
      <path d="M40 68 Q50 76 60 68" fill="none" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="40" cy="55" r="3" fill="#2D3436" />
      <circle cx="60" cy="55" r="3" fill="#2D3436" />
      {/* Eye shine */}
      <circle cx="41" cy="54" r="1" fill="white" />
      <circle cx="61" cy="54" r="1" fill="white" />
    </svg>
  );
}
