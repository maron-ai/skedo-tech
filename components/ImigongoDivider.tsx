"use client";

/**
 * Imigongo Divider
 *
 * Inspired by Rwandan Imigongo art — geometric patterns traditionally made
 * from cow dung and clay, featuring bold interlocking spirals and angular
 * shapes in black, white, and earth tones.
 *
 * This SVG divider repeats a single Imigongo tile horizontally as a
 * full-width band between sections.
 */

export function ImigongoDivider() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 60"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-[60px]"
      >
        <defs>
          {/* Single 40x60 Imigongo tile — angular spiral motif */}
          <pattern
            id="imigongo-tile"
            x="0"
            y="0"
            width="40"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Background */}
            <rect width="40" height="60" fill="#2a2a26" />

            {/* Top band — stepped zigzag */}
            <polygon points="0,0 40,0 40,8 30,8 20,16 10,8 0,8" fill="#c8b89a" opacity="0.25" />

            {/* Angular spiral — outer frame (white) */}
            <path
              d="M4,12 L36,12 L36,48 L4,48 Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.18"
            />

            {/* Angular spiral — inner step 1 (off-white) */}
            <path
              d="M8,16 L32,16 L32,44 L8,44 Z"
              fill="none"
              stroke="#c8b89a"
              strokeWidth="1.2"
              opacity="0.22"
            />

            {/* Diagonal cross — top-left to bottom-right */}
            <line x1="4" y1="12" x2="20" y2="30" stroke="#ffffff" strokeWidth="1" opacity="0.12" />
            <line x1="36" y1="12" x2="20" y2="30" stroke="#ffffff" strokeWidth="1" opacity="0.12" />
            <line x1="4" y1="48" x2="20" y2="30" stroke="#c8b89a" strokeWidth="1" opacity="0.14" />
            <line x1="36" y1="48" x2="20" y2="30" stroke="#c8b89a" strokeWidth="1" opacity="0.14" />

            {/* Center diamond */}
            <polygon
              points="20,24 26,30 20,36 14,30"
              fill="#ffffff"
              opacity="0.10"
            />

            {/* Bottom band — mirrored */}
            <polygon points="0,52 10,52 20,44 30,52 40,52 40,60 0,60" fill="#c8b89a" opacity="0.25" />

            {/* Vertical side accents */}
            <rect x="0" y="12" width="2" height="36" fill="#ffffff" opacity="0.08" />
            <rect x="38" y="12" width="2" height="36" fill="#ffffff" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="400" height="60" fill="url(#imigongo-tile)" />

        {/* Top and bottom hairlines */}
        <line x1="0" y1="0.5" x2="400" y2="0.5" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
        <line x1="0" y1="59.5" x2="400" y2="59.5" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
      </svg>
    </div>
  );
}
