interface Props { size: number; }

export function QueenSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Queen illustration">
      {/* Crown */}
      <polygon points="25,35 30,10 38,28 50,5 62,28 70,10 75,35" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
      {/* Crown band */}
      <rect x="25" y="32" width="50" height="8" rx="2" fill="#DAA520" />
      {/* Jewels on crown */}
      <circle cx="38" cy="25" r="3" fill="#E74C3C" />
      <circle cx="50" cy="14" r="3" fill="#3498DB" />
      <circle cx="62" cy="25" r="3" fill="#2ECC71" />
      {/* Face */}
      <circle cx="50" cy="55" r="22" fill="#FDEBD0" stroke="#E8C9A0" strokeWidth="2" />
      {/* Hair */}
      <path d="M28 50 Q28 38 35 38" fill="#5D4037" />
      <path d="M72 50 Q72 38 65 38" fill="#5D4037" />
      {/* Eyes */}
      <circle cx="42" cy="52" r="3" fill="#2D3436" />
      <circle cx="58" cy="52" r="3" fill="#2D3436" />
      <circle cx="43" cy="51" r="1" fill="white" />
      <circle cx="59" cy="51" r="1" fill="white" />
      {/* Eyelashes */}
      <path d="M39 49 L38 47" stroke="#2D3436" strokeWidth="1" />
      <path d="M42 48 L42 46" stroke="#2D3436" strokeWidth="1" />
      <path d="M55 49 L56 47" stroke="#2D3436" strokeWidth="1" />
      <path d="M58 48 L58 46" stroke="#2D3436" strokeWidth="1" />
      {/* Smile */}
      <path d="M44 62 Q50 68 56 62" fill="none" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="35" cy="58" r="4" fill="#FFAB91" opacity="0.4" />
      <circle cx="65" cy="58" r="4" fill="#FFAB91" opacity="0.4" />
      {/* Necklace */}
      <path d="M35 76 Q50 84 65 76" fill="none" stroke="#DAA520" strokeWidth="2" />
      <circle cx="50" cy="82" r="3" fill="#E74C3C" />
    </svg>
  );
}
