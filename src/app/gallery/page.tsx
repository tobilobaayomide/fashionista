"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryPage() {
  const imagesTop = Array.from({ length: 12 }, (_, i) => `/gallery/${i + 1}.jpg`);
  const imagesBottom = Array.from({ length: 12 }, (_, i) => `/gallery/${i + 13}.jpg`);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    if (!topRow || !bottomRow) return;

    const topWidth = topRow.scrollWidth;
    const bottomWidth = bottomRow.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Top row scroll
    gsap.to(topRow, {
      x: -(topWidth - viewportWidth),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: topRow,
        start: "top top",
        end: () => `+=${topWidth - viewportWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Bottom row scroll
    gsap.to(bottomRow, {
      x: -(bottomWidth - viewportWidth),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: bottomRow,
        start: "top top+=600",
        end: () => `+=${bottomWidth - viewportWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        .gallery-outline {
          color: transparent;
          -webkit-text-stroke: 1px black;
          text-stroke: 1px black;
        }
      `}</style>
      <main className="min-h-screen bg-neutral-200 flex flex-col items-center justify-center">
        {/* Fixed Gallery headline in the background */}
        <div
          className="fixed inset-0 flex items-center justify-center z-0"
          style={{ pointerEvents: "none" }}
        >
          <h1
            className="text-[20vw] ml-15 font-extrabold select-none gallery-outline"
            style={{ lineHeight: 1, letterSpacing: "0.05em", fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Gallery
          </h1>
        </div>
        
  <div style={{ height: "100vh" }}></div>
      </main>
    </>
  );
}