interface Props { size: number; }

export function JellyfishSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Jellyfish illustration">
      {/* Bell/dome */}
      <path d="M20 50 Q20 10 50 10 Q80 10 80 50 Z" fill="#80DEEA" stroke="#4DD0E1" strokeWidth="2" />
      {/* Inner glow */}
      <path d="M30 45 Q30 20 50 20 Q70 20 70 45 Z" fill="#B2EBF2" opacity="0.5" />
      {/* Tentacles */}
      <path d="M28 50 Q25 65 30 75 Q35 85 28 95" fill="none" stroke="#4DD0E1" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 50 Q42 68 38 80 Q34 92 40 95" fill="none" stroke="#80DEEA" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 50 Q50 70 52 82 Q54 94 50 95" fill="none" stroke="#4DD0E1" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 50 Q58 68 62 80 Q66 92 60 95" fill="none" stroke="#80DEEA" strokeWidth="3" strokeLinecap="round" />
      <path d="M72 50 Q75 65 70 75 Q65 85 72 95" fill="none" stroke="#4DD0E1" strokeWidth="3" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="40" cy="35" r="4" fill="#2D3436" />
      <circle cx="60" cy="35" r="4" fill="#2D3436" />
      <circle cx="41" cy="34" r="1.5" fill="white" />
      <circle cx="61" cy="34" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M44 42 Q50 48 56 42" fill="none" stroke="#00838F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
