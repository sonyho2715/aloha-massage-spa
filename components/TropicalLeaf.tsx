interface TropicalLeafProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "sage" | "teal" | "ocean";
  opacity?: number;
  size?: number;
}

export default function TropicalLeaf({
  position = "top-right",
  color = "sage",
  opacity = 0.1,
  size = 300,
}: TropicalLeafProps) {
  const colorMap = {
    sage: "#88B04B",
    teal: "#008B8B",
    ocean: "#0077BE",
  };

  const fillColor = colorMap[color];

  const positionMap = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const rotationMap = {
    "top-left": "rotate-45",
    "top-right": "-rotate-45",
    "bottom-left": "rotate-135",
    "bottom-right": "-rotate-135",
  };

  return (
    <div
      className={`absolute ${positionMap[position]} pointer-events-none`}
      style={{ opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className={`transform ${rotationMap[position]}`}
      >
        {/* Monstera Leaf */}
        <path
          d="M100,20 Q140,40 150,80 Q155,100 150,120 Q140,160 100,180 Q60,160 50,120 Q45,100 50,80 Q60,40 100,20 Z"
          fill={fillColor}
        />

        {/* Leaf Veins */}
        <path
          d="M100,20 L100,180 M100,60 Q120,70 140,100 M100,60 Q80,70 60,100 M100,100 Q120,110 135,130 M100,100 Q80,110 65,130"
          stroke={fillColor}
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Leaf Cuts (Monstera characteristic) */}
        <ellipse cx="75" cy="80" rx="8" ry="15" fill="white" opacity="0.3" />
        <ellipse cx="125" cy="80" rx="8" ry="15" fill="white" opacity="0.3" />
        <ellipse cx="75" cy="120" rx="8" ry="15" fill="white" opacity="0.3" />
        <ellipse cx="125" cy="120" rx="8" ry="15" fill="white" opacity="0.3" />
      </svg>
    </div>
  );
}
