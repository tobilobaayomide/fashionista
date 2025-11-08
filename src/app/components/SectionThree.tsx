"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionThree() {
  // Refs for GSAP targets
  const imageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const lineRefs = [useRef<HTMLHRElement>(null), useRef<HTMLHRElement>(null), useRef<HTMLHRElement>(null)];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Animate image parallax and blur-to-sharp
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 60, opacity: 0, filter: 'blur(16px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 2.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
      // Animate headline split with skew/distort effect
      if (headlineRef.current) {
        const headlineSpans = headlineRef.current.querySelectorAll('span');
        gsap.fromTo(
          headlineSpans,
          { y: 40, opacity: 0, skewX: 18, scale: 1.12 },
          {
            y: 0,
            opacity: 1,
            skewX: 0,
            scale: 1,
            duration: 1.6,
            stagger: 0.25,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animate paragraph text with skew/distort effect
      const paragraph = sectionRef.current?.querySelector('p');
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          { y: 40, opacity: 0, skewX: -16, scale: 1.08 },
          {
            y: 0,
            opacity: 1,
            skewX: 0,
            scale: 1,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
      // Animate decorative lines (draw effect)
      lineRefs.forEach((ref, i) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: 2 + i * 0.8, // increased duration
              ease: 'power2.out',
              transformOrigin: 'right',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative min-h-[65vh] w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-500"
      style={{ zIndex: 1 }}
    >
      {/* Solid black background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: '#000',
        opacity: 0.7,
      }}></div>
  <div className="w-full h-full flex flex-col md:flex-row items-stretch justify-between gap-0 px-0 py-0 relative z-10">
  <div className="w-full h-full flex md:flex-row items-start justify-between gap-0 px-0 py-0 relative z-10">
          {/* Left: Image - fits left section */}
          <div className="w-full md:w-2/5 h-full flex items-center ml-20 pb-35 justify-start" style={{ marginTop: '5.5%' }}>
            <img
              ref={imageRef}
              src="/sectionthree.jpg"
              alt="Fashionista Vision"
              className="object-cover object-top w-full h-auto rounded-none mt-8"
              style={{ filter: 'brightness(1.04) contrast(1.12)', zIndex: 2 }}
            />
          </div>
          {/* Add spacing between image and text */}
          <div className="hidden md:block" style={{ width: '3vw' }} />
          {/* Right: Story */}
          <div className="flex flex-col justify-end items-end md:items-end w-full md:w-1/2 px-8 mr-30 pb-12" style={{ marginTop: '9.5%' }}>
            <h2
              className="text-[3vw] font-extrabold text-white text-right mb-4 relative px-0 md:px-4"
              style={{
                fontFamily: 'Momo Trust Display, sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              <div className="flex flex-col items-end mb-6 -mt-15">
                <hr ref={lineRefs[0]} className="w-32 border-t-2 border-yellow-300 opacity-80 mb-1" />
                <hr ref={lineRefs[1]} className="w-24 border-t-2 border-yellow-300 opacity-80 mb-1" />
                <hr ref={lineRefs[2]} className="w-16 border-t-2 border-yellow-300 opacity-80" />
              </div>
              <span ref={headlineRef} style={{ display: 'inline-block' }}>
                 <span className="text-blue-300">vision</span> for <span className="text-yellow-300">tomorrow</span>
              </span>
            </h2>
            <p
              className="text-lg text-white max-w-xl text-right px-0 md:px-4 leading-snug"
              style={{ fontFamily: 'PT Sans, sans-serif', fontWeight: 300 }}
            >
              At fashionista, our vision is rooted in a deep commitment to sustainability, innovation, and inclusivity. We believe luxury fashion should honor the planet, embrace new ideas, and celebrate every individual.<br /><br />
              Our collections are crafted with eco-conscious materials and responsible processes, blending artistry with forward-thinking technology. We champion diversity and empower self-expression, ensuring everyone finds their place in the world of Fashionista.<br /><br />
              Join us as we shape a future where luxury is defined by care, creativity, and community.
            </p>
          </div>
        </div>
      </div>
  </section>
  );
}
