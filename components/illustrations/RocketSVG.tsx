interface Props { size: number; }

export function RocketSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Rocket illustration">
      {/* Flames */}
      <ellipse cx="50" cy="92" rx="8" ry="8" fill="#FF9800" />
      <ellipse cx="50" cy="90" rx="5" ry="10" fill="#FFC107" />
      <ellipse cx="50" cy="88" rx="3" ry="8" fill="#FFEB3B" />
      {/* Body */}
      <path d="M35 75 L35 40 Q35 10 50 5 Q65 10 65 40 L65 75 Z" fill="#ECEFF1" stroke="#B0BEC5" strokeWidth="2" />
      {/* Nose cone */}
      <path d="M35 40 Q35 10 50 5 Q65 10 65 40" fill="#E84393" stroke="#C2185B" strokeWidth="2" />
      {/* Window */}
      <circle cx="50" cy="42" r="10" fill="#42A5F5" stroke="#1E88E5" strokeWidth="2" />
      <circle cx="47" cy="39" r="3" fill="white" opacity="0.5" />
      {/* Fins */}
      <polygon points="35,65 20,82 35,78" fill="#E84393" stroke="#C2185B" strokeWidth="1.5" />
      <polygon points="65,65 80,82 65,78" fill="#E84393" stroke="#C2185B" strokeWidth="1.5" />
      {/* Bottom */}
      <rect x="35" y="72" width="30" height="6" rx="2" fill="#B0BEC5" />
      {/* Stars */}
      <circle cx="15" cy="20" r="2" fill="#FFD54F" />
      <circle cx="85" cy="30" r="2" fill="#FFD54F" />
      <circle cx="12" cy="50" r="1.5" fill="#FFD54F" />
      <circle cx="88" cy="60" r="1.5" fill="#FFD54F" />
    </svg>
  );
}
