interface Props { size: number; }

export function GrapesSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Grapes illustration">
      {/* Stem */}
      <line x1="50" y1="5" x2="50" y2="22" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" />
      {/* Leaf */}
      <ellipse cx="58" cy="12" rx="10" ry="6" fill="#66BB6A" transform="rotate(-15 58 12)" />
      {/* Grapes cluster */}
      <circle cx="40" cy="32" r="10" fill="#9C27B0" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="60" cy="32" r="10" fill="#9C27B0" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="30" cy="48" r="10" fill="#AB47BC" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="50" cy="48" r="10" fill="#AB47BC" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="70" cy="48" r="10" fill="#AB47BC" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="38" cy="64" r="10" fill="#BA68C8" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="62" cy="64" r="10" fill="#BA68C8" stroke="#7B1FA2" strokeWidth="1.5" />
      <circle cx="50" cy="78" r="10" fill="#CE93D8" stroke="#7B1FA2" strokeWidth="1.5" />
      {/* Highlights */}
      <circle cx="37" cy="29" r="3" fill="white" opacity="0.3" />
      <circle cx="57" cy="29" r="3" fill="white" opacity="0.3" />
      <circle cx="47" cy="45" r="3" fill="white" opacity="0.3" />
    </svg>
  );
}
