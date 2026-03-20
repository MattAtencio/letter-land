interface Props { size: number; }

export function XylophoneSVG({ size }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Xylophone illustration">
      {/* Frame legs */}
      <line x1="15" y1="20" x2="25" y2="90" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" />
      <line x1="85" y1="20" x2="75" y2="90" stroke="#8D6E63" strokeWidth="4" strokeLinecap="round" />
      {/* Bars */}
      <rect x="18" y="20" width="64" height="9" rx="3" fill="#FF6B6B" stroke="#E55555" strokeWidth="1" />
      <rect x="20" y="32" width="60" height="9" rx="3" fill="#FFA07A" stroke="#E8825A" strokeWidth="1" />
      <rect x="22" y="44" width="56" height="9" rx="3" fill="#FFD93D" stroke="#E5C030" strokeWidth="1" />
      <rect x="24" y="56" width="52" height="9" rx="3" fill="#6BCB77" stroke="#50B060" strokeWidth="1" />
      <rect x="26" y="68" width="48" height="9" rx="3" fill="#4D96FF" stroke="#3580E5" strokeWidth="1" />
      <rect x="28" y="80" width="44" height="9" rx="3" fill="#9B59B6" stroke="#8040A0" strokeWidth="1" />
      {/* Mallet 1 */}
      <line x1="8" y1="10" x2="35" y2="48" stroke="#8D6E63" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="8" cy="10" r="5" fill="#FFD54F" stroke="#F9A825" strokeWidth="1" />
      {/* Mallet 2 */}
      <line x1="92" y1="10" x2="65" y2="48" stroke="#8D6E63" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="92" cy="10" r="5" fill="#FFD54F" stroke="#F9A825" strokeWidth="1" />
      {/* Music notes */}
      <text x="5" y="40" fontSize="10" fill="#FF6B9D">♪</text>
      <text x="88" y="35" fontSize="10" fill="#4D96FF">♫</text>
    </svg>
  );
}
