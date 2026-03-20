interface Props { size: number; }

export function IceCreamSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Ice cream illustration">
      {/* Cone */}
      <polygon points="35,55 65,55 50,95" fill="#DEB887" stroke="#C49A6C" strokeWidth="2" />
      {/* Cone lines */}
      <line x1="42" y1="58" x2="50" y2="92" stroke="#C49A6C" strokeWidth="1" />
      <line x1="58" y1="58" x2="50" y2="92" stroke="#C49A6C" strokeWidth="1" />
      <line x1="37" y1="65" x2="63" y2="65" stroke="#C49A6C" strokeWidth="1" />
      <line x1="40" y1="75" x2="60" y2="75" stroke="#C49A6C" strokeWidth="1" />
      {/* Bottom scoop */}
      <circle cx="50" cy="42" r="20" fill="#FF9999" stroke="#E57373" strokeWidth="2" />
      {/* Top scoop */}
      <circle cx="50" cy="22" r="16" fill="#FFCC80" stroke="#FFB74D" strokeWidth="2" />
      {/* Cherry */}
      <circle cx="50" cy="6" r="5" fill="#F44336" stroke="#D32F2F" strokeWidth="1.5" />
      <line x1="50" y1="6" x2="52" y2="2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
      {/* Sprinkles */}
      <rect x="42" y="18" width="4" height="2" rx="1" fill="#FF5722" transform="rotate(30 44 19)" />
      <rect x="54" y="20" width="4" height="2" rx="1" fill="#4CAF50" transform="rotate(-20 56 21)" />
      <rect x="48" y="36" width="4" height="2" rx="1" fill="#2196F3" transform="rotate(15 50 37)" />
      {/* Face on bottom scoop */}
      <circle cx="44" cy="40" r="2" fill="#2D3436" />
      <circle cx="56" cy="40" r="2" fill="#2D3436" />
      <path d="M46 47 Q50 51 54 47" fill="none" stroke="#D32F2F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
