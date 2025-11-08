// SignatureSVG.tsx
"use client";

export default function SignatureSVG({ className = "", style = {} }) {
  return (
    <svg
      width="180"
      height="60"
      viewBox="0 0 180 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Replace with your actual signature SVG path */}
      <path
        d="M10 40 Q 52 10, 95 40 T 170 40"
        stroke="#222"
        strokeWidth={3}
        fill="none"
      />
      <text x="50" y="55" fontFamily="Momo Trust Display, sans-serif" fontSize="2rem" fill="#222">Fashionista</text>
    </svg>
  );
}
