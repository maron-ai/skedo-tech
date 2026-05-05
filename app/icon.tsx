import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#2a2a26",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer rhombus */}
          <polygon
            points="16,3 29,16 16,29 3,16"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="miter"
            opacity="0.9"
          />
          {/* Inner rhombus */}
          <polygon
            points="16,8 24,16 16,24 8,16"
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeLinejoin="miter"
            opacity="0.55"
          />
          {/* Center diamond */}
          <polygon
            points="16,12 20,16 16,20 12,16"
            fill="white"
            opacity="0.9"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
