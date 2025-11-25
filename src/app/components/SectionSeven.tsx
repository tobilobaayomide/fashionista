"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionSeven() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dividerPositions, setDividerPositions] = useState<number[]>([]);

  useEffect(() => {
    function updateDividers() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const leftLine = 20; // left offset in px (left-5)
      const rightLine = rect.width - 100; // right offset in px (right-25)
      const space = rightLine - leftLine;
      setDividerPositions([
        leftLine + space * 0.25,
        leftLine + space * 0.5,
        leftLine + space * 0.75,
      ]);
    }
    updateDividers();
    window.addEventListener("resize", updateDividers);
    return () => window.removeEventListener("resize", updateDividers);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* White vertical line after sidebar */}
      <div className="absolute top-24 bottom-15 left-5 w-px  bg-white z-40" />
      {/* White vertical line at the far right of the page */}
      <div className="absolute top-24 bottom-15 right-25 w-px  bg-white z-40" />
      {/* Three vertical lines dividing the space into 4 equal sections */}
      {dividerPositions.map((pos, idx) => (
        <div
          key={idx}
          className="absolute top-24 bottom-15 w-px bg-white z-40"
          style={{ left: `${pos}px` }}
        />
      ))}
      <div ref={containerRef} className="grid grid-cols-4 w-full h-full pt-24">
        {/* First section with title, text, and image */}
        <div className="flex flex-col items-left justify-left h-full pr-10 pl-10 px-6">
          <h3 className="text-3xl font-bold text-white mb-4">Eclipse Noir</h3>
          <p className="text-white text-base mb-6 text-justify-left" style={{ fontFamily: 'PT Sans, sans-serif' }}>
            A collection inspired by the interplay of shadow and light, blending
            midnight tones with luminous silks for a mysterious, modern elegance.
            Each piece is crafted to evoke intrigue and sophistication.
          </p>
          <div className="mt-12">
            <img
              src="/sectionseven.jpg"
              alt="Eclipse Noir"
              className="w-85 h-83 object-cover pr-2.5 shadow-lg"
            />
          </div>
        </div>
        {/* Second section */}
  <div className="flex flex-col items-left justify-left h-full pr-22 pl-0 -ml-3 px-6">
          <h3 className="text-3xl font-bold text-white mb-4">Opulent Muse</h3>
          <p className="text-white text-base mb-6 text-justify-left" style={{ fontFamily: 'PT Sans, sans-serif' }}>
            Celebrating bold femininity, this collection features sculptural silhouettes, rich textures, and gold accents for a statement of luxury. Designed for those who dare to stand out and embrace their inner muse.
          </p>
          <div className="mt-12">
            <img
              src="/sectionthree.jpg"
              alt="Opulent Muse"
              className="w-85 h-83 object-cover pr-2.5 shadow-lg"
            />
          </div>
        </div>
        {/* Third section */}
        <div className="flex flex-col items-left justify-left h-full pr-35 pl-0 -ml-15 px-6">
          <h3 className="text-3xl font-bold text-white mb-4">Serene Reverie</h3>
          <p className="text-white text-base mb-6 text-justify-left" style={{ fontFamily: 'PT Sans, sans-serif' }}>
            Soft pastels and flowing forms evoke a dreamlike calm, with airy fabrics and gentle draping for a poetic, tranquil mood. Perfect for moments of reflection and peace in a fast-paced world.
          </p>
          <div className="mt-18">
            <img
              src="/sectionfive.jpg"
              alt="Serene Reverie"
              className="w-85 h-83 object-cover pr-2.5 shadow-lg"
            />
          </div>
        </div>
        {/* Fourth section */}
        <div className="flex flex-col items-left justify-left h-full pr-40 pl-0 -ml-27 px-6">
          <h3 className="text-3xl font-bold text-white mb-4">Avant Garde Pulse</h3>
          <p className="text-white text-base mb-6 text-justify-left" style={{ fontFamily: 'PT Sans, sans-serif' }}>
            A daring fusion of art and fashion, this collection pushes boundaries with unexpected materials, vibrant colors, and kinetic forms. For the true trendsetters and visionaries who redefine style.
          </p>
          <div className="mt-18">
            <img
              src="/sectionone.jpg"
              alt="Avant Garde Pulse"
              className="w-85 h-83 object-cover pr-2.5 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
