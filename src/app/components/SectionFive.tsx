"use client";

import React, { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function SectionFive() {
  const sectionRef = useRef(null);
  const [newOffset, setNewOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current as HTMLElement | null;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how much of SectionFive is visible
      const visible = Math.max(0, windowHeight - rect.top);
      const total = rect.height;
      // Progress: 0 (not visible) to 1 (fully visible)
      const progress = Math.min(1, Math.max(0, visible / total));
      // Offset for 'NEW' (from -100px to 60px as example)
      setNewOffset(-100 + progress * 160);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative w-full min-h-[60vh] bg-neutral-200 flex flex-col items-center justify-start overflow-hidden pt-10 pb-2">
        <div className="w-full border-t border-black" />
        <div className="w-full overflow-hidden pt-2" style={{ maxWidth: '100vw' }}>
          <Marquee pauseOnHover gradient={false} speed={200} className="w-full" style={{ width: '100%' }}>
            {[...Array(12)].map((_, i) => (
              <span key={i} className="text-[4vw] font-normal text-black mx-8 tracking-wide whitespace-nowrap" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
                Collections
              </span>
            ))}
          </Marquee>
        </div>
        <div className="w-full border-b border-black" />
        <div className="w-full flex items-center justify-center mt-8 pt-8 relative">
          {/* NEW label behind the image, moves out as you scroll in */}
          <span
            className="absolute top-3 left-32 text-[8vw] font-extrabold text-black select-none w-[900px]"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif', lineHeight: 1, zIndex: 0, transform: `translateY(${newOffset}px)` }}
          >
            new
          </span>
          <div className="w-[900px] h-[500px] flex items-center relative mr-14 z-10">
            <Image src="/sectionfive.jpg" alt="New Collection" fill className="object-contain object-center" />
            {/* COLLECTIONS label at bottom right of image, scrolls out as you scroll in */}
            <span
              className="absolute -bottom-5 -right-45 text-[6.5vw] font-bold text-black select-none pr-20"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif', lineHeight: 1, zIndex: 20, transform: `translateY(${30 - newOffset}px)` }}
            >
              collections
            </span>
          </div>
        </div>
        {/* Editorial content for the new collection */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-8 mt-20">
          <div className="flex flex-col justify-end items-start w-full md:w-1/2 h-full pb-12 md:pb-40 pr-0 md:pr-6">
            <div className="flex flex-col items-start justify-end h-full" style={{ marginLeft: '-5.5vw' }}>
              <h2 className="text-[2.6vw] md:text-[2vw] font-extrabold text-neutral-900 mb-4" style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.04em' }}>
                Discover the <span className="text-red-900">New Collections</span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 h-full pt-0 md:pt-0 pl-0 md:pl-8">
            <div className="flex flex-col justify-center h-full">
              <p className="text-lg text-neutral-700 max-w-xl mb-0 leading-relaxed text-justify -mt-14" style={{ fontFamily: 'PT Sans, sans-serif', fontWeight: 400 }}>
                Step into a world where artistry meets innovation. Our latest collection redefines elegance with bold silhouettes, rich textures, and timeless details. Each piece is crafted to inspire confidence and celebrate individuality, designed for those who seek the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
