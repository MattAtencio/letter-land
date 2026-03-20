interface Props { size: number; }

export function WhaleSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Whale illustration">
      {/* Water spout */}
      <path d="M50 15 Q45 5 40 10" fill="none" stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 15 Q55 5 60 10" fill="none" stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="8" r="3" fill="#64B5F6" opacity="0.6" />
      <circle cx="50" cy="5" r="2" fill="#64B5F6" opacity="0.6" />
      <circle cx="60" cy="8" r="3" fill="#64B5F6" opacity="0.6" />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="38" ry="28" fill="#42A5F5" stroke="#1E88E5" strokeWidth="2" />
      {/* Belly */}
      <ellipse cx="50" cy="62" rx="28" ry="16" fill="#BBDEFB" />
      {/* Tail */}
      <path d="M12 55 Q5 45 2 35 Q8 42 15 40" fill="#42A5F5" stroke="#1E88E5" strokeWidth="2" />
      <path d="M12 55 Q5 65 2 75 Q8 68 15 70" fill="#42A5F5" stroke="#1E88E5" strokeWidth="2" />
      {/* Fin */}
      <ellipse cx="55" cy="45" rx="12" ry="6" fill="#1E88E5" transform="rotate(-20 55 45)" />
      {/* Eye */}
      <circle cx="65" cy="48" r="5" fill="white" stroke="#1565C0" strokeWidth="1.5" />
      <circle cx="67" cy="47" r="2.5" fill="#2D3436" />
      <circle cx="68" cy="46" r="1" fill="white" />
      {/* Mouth */}
      <path d="M70 58 Q78 62 82 58" fill="none" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
      {/* Blowhole */}
      <ellipse cx="50" cy="30" rx="3" ry="2" fill="#1E88E5" />
    </svg>
  );
}
