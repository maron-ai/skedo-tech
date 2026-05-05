"use client";

/**
 * Imigongo Divider
 *
 * Two zigzag lines pointing up at the top, two pointing down at the bottom —
 * mirrored, with a gap in the middle. Inspired by Rwandan Imigongo border patterns.
 */

export function ImigongoDivider() {
  // Zigzag path generator
  // direction: "up" = peaks point up, "down" = peaks point down
  // y = vertical center of the zigzag band
  // amplitude = height of each peak
  const zigzag = (
    y: number,
    amplitude: number,
    width: number,
    step: number,
    direction: "up" | "down"
  ) => {
    const points: string[] = [];
    const sign = direction === "up" ? -1 : 1;
    for (let x = 0; x <= width + step; x += step) {
      const peak = x % (step * 2) === 0;
      points.push(`${x},${y + (peak ? sign * amplitude : -sign * amplitude)}`);
    }
    return "M " + points.join(" L ");
  };

  const W = 1200;
  const step = 30;
  const amp = 6;
  const strokeColor = "#ffffff";
  const strokeW = 1.2;
  const opacity = 0.2;

  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${W} 36`}
        preserveAspectRatio="none"
        className="w-full h-[36px]"
      >
        {/* Top pair — two zigzags pointing UP */}
        <path
          d={zigzag(10, amp, W, step, "up")}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeW}
          strokeLinejoin="miter"
          opacity={opacity}
        />
        <path
          d={zigzag(17, amp, W, step, "up")}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeW}
          strokeLinejoin="miter"
          opacity={opacity}
        />

        {/* Bottom pair — two zigzags pointing DOWN */}
        <path
          d={zigzag(19, amp, W, step, "down")}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeW}
          strokeLinejoin="miter"
          opacity={opacity}
        />
        <path
          d={zigzag(26, amp, W, step, "down")}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeW}
          strokeLinejoin="miter"
          opacity={opacity}
        />
      </svg>
    </div>
  );
}
