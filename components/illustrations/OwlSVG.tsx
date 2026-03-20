interface Props { size: number; }

export function OwlSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Owl illustration">
      {/* Ear tufts */}
      <polygon points="25,20 30,8 38,25" fill="#A0522D" />
      <polygon points="75,20 70,8 62,25" fill="#A0522D" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="32" ry="35" fill="#A0522D" stroke="#8B4513" strokeWidth="2" />
      {/* Belly */}
      <ellipse cx="50" cy="65" rx="20" ry="22" fill="#DEB887" />
      {/* Belly pattern */}
      <path d="M38 55 Q50 50 62 55" fill="none" stroke="#C49A6C" strokeWidth="1.5" />
      <path d="M36 63 Q50 58 64 63" fill="none" stroke="#C49A6C" strokeWidth="1.5" />
      <path d="M38 71 Q50 66 62 71" fill="none" stroke="#C49A6C" strokeWidth="1.5" />
      {/* Eye circles */}
      <circle cx="38" cy="40" r="12" fill="#FFF8E1" stroke="#8B4513" strokeWidth="2" />
      <circle cx="62" cy="40" r="12" fill="#FFF8E1" stroke="#8B4513" strokeWidth="2" />
      {/* Pupils */}
      <circle cx="38" cy="40" r="6" fill="#2D3436" />
      <circle cx="62" cy="40" r="6" fill="#2D3436" />
      <circle cx="40" cy="38" r="2" fill="white" />
      <circle cx="64" cy="38" r="2" fill="white" />
      {/* Beak */}
      <polygon points="50,48 46,55 54,55" fill="#FF9800" stroke="#E68900" strokeWidth="1" />
      {/* Wings */}
      <ellipse cx="22" cy="60" rx="8" ry="18" fill="#8B4513" transform="rotate(10 22 60)" />
      <ellipse cx="78" cy="60" rx="8" ry="18" fill="#8B4513" transform="rotate(-10 78 60)" />
      {/* Feet */}
      <path d="M38 90 L35 95 M38 90 L38 95 M38 90 L41 95" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 90 L59 95 M62 90 L62 95 M62 90 L65 95" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
