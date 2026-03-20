interface Props { size: number; }

export function NestSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Nest illustration">
      {/* Nest body */}
      <ellipse cx="50" cy="65" rx="38" ry="22" fill="#8D6E63" stroke="#6D4C41" strokeWidth="2" />
      {/* Nest inner */}
      <ellipse cx="50" cy="58" rx="30" ry="14" fill="#A1887F" />
      {/* Straw texture */}
      <path d="M18 60 Q30 55 42 62" fill="none" stroke="#6D4C41" strokeWidth="2" />
      <path d="M58 62 Q70 55 82 60" fill="none" stroke="#6D4C41" strokeWidth="2" />
      <path d="M25 70 Q40 65 55 72" fill="none" stroke="#6D4C41" strokeWidth="2" />
      <path d="M45 72 Q60 65 75 70" fill="none" stroke="#6D4C41" strokeWidth="2" />
      {/* Eggs */}
      <ellipse cx="38" cy="52" rx="9" ry="11" fill="#E8F5E9" stroke="#A5D6A7" strokeWidth="1.5" transform="rotate(-10 38 52)" />
      <ellipse cx="50" cy="50" rx="9" ry="11" fill="#FFF3E0" stroke="#FFCC80" strokeWidth="1.5" />
      <ellipse cx="62" cy="52" rx="9" ry="11" fill="#E3F2FD" stroke="#90CAF9" strokeWidth="1.5" transform="rotate(10 62 52)" />
      {/* Spots on eggs */}
      <circle cx="36" cy="48" r="2" fill="#A5D6A7" />
      <circle cx="52" cy="46" r="2" fill="#FFCC80" />
      <circle cx="64" cy="48" r="2" fill="#90CAF9" />
    </svg>
  );
}
