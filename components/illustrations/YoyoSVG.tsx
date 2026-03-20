interface Props { size: number; }

export function YoyoSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Yo-yo illustration">
      {/* String */}
      <path d="M50 5 Q55 20 50 35" fill="none" stroke="#90A4AE" strokeWidth="2" />
      {/* Loop at top */}
      <circle cx="50" cy="8" r="4" fill="none" stroke="#90A4AE" strokeWidth="2" />
      {/* Yo-yo body */}
      <circle cx="50" cy="60" r="30" fill="#00CEC9" stroke="#00A8A3" strokeWidth="2" />
      {/* Inner circle */}
      <circle cx="50" cy="60" r="20" fill="#00E5DF" />
      {/* Center */}
      <circle cx="50" cy="60" r="8" fill="#ECEFF1" stroke="#B0BEC5" strokeWidth="1.5" />
      {/* String attachment */}
      <line x1="50" y1="35" x2="50" y2="52" stroke="#90A4AE" strokeWidth="2" />
      {/* Decorative swirls */}
      <path d="M35 50 Q40 45 45 50" fill="none" stroke="#009E98" strokeWidth="1.5" />
      <path d="M55 50 Q60 45 65 50" fill="none" stroke="#009E98" strokeWidth="1.5" />
      <path d="M35 70 Q40 75 45 70" fill="none" stroke="#009E98" strokeWidth="1.5" />
      <path d="M55 70 Q60 75 65 70" fill="none" stroke="#009E98" strokeWidth="1.5" />
      {/* Star decoration */}
      <polygon points="50,52 52,56 56,56 53,59 54,63 50,60 46,63 47,59 44,56 48,56" fill="#FFD54F" />
      {/* Highlight */}
      <ellipse cx="40" cy="50" rx="6" ry="8" fill="white" opacity="0.2" />
    </svg>
  );
}
