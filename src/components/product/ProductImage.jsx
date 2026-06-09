// ProductImage — SVG-based product visual using brand colors
// In production, replace with actual product photos

export default function ProductImage({ product, size = 240, className = '' }) {
  const [from, to] = product.gradient;
  const emoji = product.emoji;
  const id = `grad-${product.id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={product.name}
    >
      <defs>
        <radialGradient id={id} cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor={to} stopOpacity="0.3" />
          <stop offset="100%" stopColor={from} stopOpacity="1" />
        </radialGradient>
        <filter id={`shadow-${product.id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={to} floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="240" height="240" fill={`url(#${id})`} rx="0" />

      {/* Decorative circles */}
      <circle cx="180" cy="40" r="50" fill={to} opacity="0.15" />
      <circle cx="20" cy="200" r="60" fill={from} opacity="0.2" />

      {/* Bag shape */}
      <g filter={`url(#shadow-${product.id})`}>
        <rect x="70" y="90" width="100" height="110" rx="16" fill="white" opacity="0.92" />
        <path d="M 95 90 Q 95 65 120 65 Q 145 65 145 90" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.92" />
        {/* Seal line */}
        <rect x="70" y="90" width="100" height="20" rx="6" fill={to} opacity="0.7" />
        {/* Label area */}
        <rect x="82" y="120" width="76" height="60" rx="8" fill={from} opacity="0.12" />
        {/* Brand text */}
        <text x="120" y="145" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="700" fill={to} opacity="0.8">KARYA TANI</text>
        <text x="120" y="160" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill={to} opacity="0.6">PREMIUM SNACK</text>
      </g>

      {/* Emoji overlay */}
      <text x="120" y="80" textAnchor="middle" fontSize="32" opacity="0.9">{emoji}</text>
    </svg>
  );
}
