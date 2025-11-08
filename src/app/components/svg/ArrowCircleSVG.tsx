// ArrowCircleSVG.tsx
"use client";

export default function ArrowCircleSVG({ className = "", style = {} }) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle
        cx="60"
        cy="60"
        r="60"
        fill="#FF4040"
        className="transition-colors duration-300 group-hover:fill-white"
      />
      <path
        d="M35 60H85M85 60C85 60 82.5 57.5 81 56C79.5 54.5 78.5 51.5 78.5 51.5M85 60C85 60 82.25 62.75 81 64C79.5 65.5 78.5 68.5 78.5 68.5"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300 group-hover:stroke-[#FF4040]"
      />
    </svg>
  );
}
