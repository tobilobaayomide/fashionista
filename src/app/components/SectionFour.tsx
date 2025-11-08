"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const lineRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Headline split + scale/fade
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, opacity: 0, scale: 1.08 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      // Decorative line draw
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power2.out",
            transformOrigin: "left",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
      // Paragraph fade/slide
      if (paraRef.current) {
        gsap.fromTo(
          paraRef.current,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
  className="relative min-h-[80vh] w-full flex items-center justify-center bg-white px-4"
      style={{ zIndex: 1 }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-8">
        {/* Left: Headline at bottom, padded and centered horizontally */}
  <div className="flex flex-col justify-end items-start w-full md:w-1/2 h-full pb-12 md:pb-40 pr-0 md:pr-6">
    <div className="flex flex-col items-start justify-end h-full" style={{ marginLeft: '-5.5vw' }}>
            <h2
              ref={headlineRef}
              className="text-[2.6vw] md:text-[2vw] font-extrabold text-neutral-900 mb-4"
              style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.04em' }}
            >
              Luxury is not just what you wear, it’s how you <span className="text-red-900">care, create, and connect</span>
            </h2>
            <hr
              ref={lineRef}
              className="w-32 border-t-2 border-yellow-400 opacity-80 mb-6" 
              style={{ transform: 'scaleX(0)', transition: 'transform 1.1s' }}
            />
          </div>
        </div>
        {/* Right: Subheadline and paragraph vertically centered, padded */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 h-full pt-0 md:pt-0 pl-0 md:pl-8">
          <div className="flex flex-col justify-center h-full">
            <p
              ref={paraRef}
              className="text-lg text-neutral-700 max-w-xl mb-2 leading-relaxed text-justify"
              style={{ fontFamily: 'PT Sans, sans-serif', fontWeight: 400 }}
            >
                At Fashionista, we believe true luxury is defined by intention, artistry, and responsibility. Our philosophy is rooted in sustainability, innovation, and inclusivity, values that shape every collection and every story.<br /><br />
                We honor the planet with eco-conscious materials, celebrate individuality through bold design, and empower our community to express their unique vision. Fashionista is more than a brand, it’s a movement toward a future where luxury means caring for the world and inspiring creativity in all.
            </p>
          </div>
        </div>
      </div>
      {/* Custom intertwined line accent at bottom */}
  <div className="absolute bottom-0 left-30 flex items-center justify-start w-full pointer-events-none select-none" style={{ zIndex: 2 }}>
        <svg width="395" height="158" viewBox="0 0 395 158" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.57414 56.6585C-12.5 40.0001 183.574 -13.8415 306.574 4.65847C429.574 23.1585 396 76.0001 365.074 87.6585C334.148 99.3168 264.574 115.658 220.574 106.158C176.574 96.6585 194.168 49.5001 227.574 47.1585C265.5 44.5001 298.793 51.5371 285.074 87.6585C274.5 115.5 181.907 181.492 129.574 213.158" stroke="#B91C1C"/>
        </svg>
      </div>
    </section>
  );
}
