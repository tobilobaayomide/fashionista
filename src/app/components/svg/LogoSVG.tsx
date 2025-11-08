// LogoSVG.tsx
"use client";

export default function LogoSVG({ className = "", style = {} }) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Example logo, replace with actual logo SVG if needed */}
      <circle cx="30" cy="30" r="28" stroke="#222" strokeWidth={4} fill="#fff" />
      <text x="30" y="38" textAnchor="middle" fontFamily="Momo Trust Display, sans-serif" fontSize="1.5rem" fill="#222">F</text>
    </svg>
  );
}
