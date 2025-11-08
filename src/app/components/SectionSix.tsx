"use client";
import { useEffect } from "react";

export default function SectionSix() {
  useEffect(() => {
    // Add fixed background image to body when SectionSix mounts
    const bg = document.createElement("div");
    bg.id = "section-six-bg";
    bg.style.position = "fixed";
    bg.style.top = "0";
    bg.style.left = "0";
    bg.style.width = "100vw";
    bg.style.height = "100vh";
    bg.style.zIndex = "-1";
    bg.style.background =
      "url('/intersection.jpg') center center / cover no-repeat";
    bg.style.opacity = "0";
    bg.style.transition = "opacity 0.7s cubic-bezier(0.77,0,0.175,1)";
    document.body.appendChild(bg);
    // Fade in background only when SectionSix is in view
    setTimeout(() => {
      bg.style.opacity = "1";
    }, 50);
    return () => {
      // Fade out and remove background image when SectionSix unmounts
      bg.style.opacity = "0";
      setTimeout(() => {
        if (bg.parentNode) bg.parentNode.removeChild(bg);
      }, 700);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Empty section to reveal fixed background image */}
    </section>
  );
}
