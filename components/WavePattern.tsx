interface WavePatternProps {
  position?: "top" | "bottom" | "both";
  color?: "ocean" | "teal" | "coral" | "sand" | "white";
  opacity?: number;
  flip?: boolean;
}

export default function WavePattern({
  position = "bottom",
  color = "ocean",
  opacity = 0.1,
  flip = false,
}: WavePatternProps) {
  const colorMap = {
    ocean: "#0077BE",
    teal: "#008B8B",
    coral: "#FF6F61",
    sand: "#F4E4C1",
    white: "#FFFFFF",
  };

  const fillColor = colorMap[color];

  const WaveSVG = ({ isFlipped = false }: { isFlipped?: boolean }) => (
    <svg
      viewBox="0 0 1440 320"
      className={`w-full ${isFlipped ? "transform rotate-180" : ""}`}
      preserveAspectRatio="none"
      style={{ opacity }}
    >
      <path
        fill={fillColor}
        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );

  return (
    <>
      {(position === "top" || position === "both") && (
        <div className="absolute top-0 left-0 w-full pointer-events-none">
          <WaveSVG isFlipped={!flip} />
        </div>
      )}

      {(position === "bottom" || position === "both") && (
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <WaveSVG isFlipped={flip} />
        </div>
      )}
    </>
  );
}
