"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function SectionOne() {
  const marqueeText = 'FASHIONISTA';
  // Gradient overlay background
  const gradientOverlay = (
    <div className="absolute inset-0 pointer-events-none z-0" style={{
      background: 'linear-gradient(90deg, rgba(255,215,0,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(185,28,28,0.18) 100%)',
      opacity: 0.7,
      mixBlendMode: 'screen',
    }} />
  );

  // Entrance animation
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className="relative h-[40vh] w-full flex flex-col items-center justify-center bg-red-900 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {gradientOverlay}
      <div className="w-full flex flex-col items-center justify-center relative z-10" style={{ height: '100%' }}>
        <div className="w-full h-px bg-white/80 mt-10" />
        <Marquee pauseOnHover gradient={false} speed={200} className="w-full" style={{ maxWidth: '100vw' }}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[12vw] text-white flex items-center whitespace-nowrap mx-16" style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.04em' }}>
              {marqueeText}
            </span>
          ))}
        </Marquee>
        <div className="w-full h-px bg-white/80 mb-10" />
      </div>
    </motion.section>
  );
}
