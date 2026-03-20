interface Props { size: number; }

export function TreeSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Tree illustration">
      {/* Trunk */}
      <rect x="42" y="65" width="16" height="30" rx="3" fill="#8D6E63" stroke="#6D4C41" strokeWidth="2" />
      {/* Crown layers */}
      <ellipse cx="50" cy="50" rx="32" ry="28" fill="#66BB6A" stroke="#43A047" strokeWidth="2" />
      <ellipse cx="38" cy="42" rx="20" ry="18" fill="#81C784" />
      <ellipse cx="62" cy="45" rx="18" ry="16" fill="#81C784" />
      <ellipse cx="50" cy="32" rx="22" ry="18" fill="#A5D6A7" />
      {/* Apples */}
      <circle cx="35" cy="52" r="4" fill="#F44336" />
      <circle cx="65" cy="48" r="4" fill="#F44336" />
      <circle cx="50" cy="38" r="4" fill="#F44336" />
      {/* Highlights on apples */}
      <circle cx="34" cy="51" r="1.5" fill="white" opacity="0.5" />
      <circle cx="64" cy="47" r="1.5" fill="white" opacity="0.5" />
      {/* Face on trunk */}
      <circle cx="46" cy="74" r="2" fill="#5D4037" />
      <circle cx="54" cy="74" r="2" fill="#5D4037" />
      <path d="M47 79 Q50 82 53 79" fill="none" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
