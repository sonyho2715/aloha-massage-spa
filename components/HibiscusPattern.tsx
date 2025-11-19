interface HibiscusPatternProps {
  opacity?: number;
  size?: "sm" | "md" | "lg";
}

export default function HibiscusPattern({
  opacity = 0.05,
  size = "md",
}: HibiscusPatternProps) {
  const sizeMap = {
    sm: 60,
    md: 100,
    lg: 150,
  };

  const patternSize = sizeMap[size];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hibiscus-pattern"
            x="0"
            y="0"
            width={patternSize}
            height={patternSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Hibiscus Flower */}
            <g transform={`translate(${patternSize / 2}, ${patternSize / 2})`}>
              {/* Petals */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <ellipse
                  key={i}
                  cx="0"
                  cy="-12"
                  rx="8"
                  ry="15"
                  fill="#FF6F61"
                  transform={`rotate(${angle})`}
                  opacity="0.6"
                />
              ))}

              {/* Center */}
              <circle cx="0" cy="0" r="4" fill="#D4AF37" opacity="0.8" />

              {/* Stamen */}
              <line x1="0" y1="0" x2="0" y2="-8" stroke="#D4AF37" strokeWidth="1" opacity="0.7" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hibiscus-pattern)" />
      </svg>
    </div>
  );
}
