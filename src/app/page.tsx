"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import SectionNine from "./components/SectionNine";
import ArrowDownSVG from "./components/svg/ArrowDownSVG";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
      {/* Premium JPEG Background */}
  <section className="relative h-screen w-full flex flex-col items-start px-6 md:px-16 lg:px-32 pt-16 md:pt-20 lg:pt-24 z-20 overflow-hidden">
        <img src="/background.jpg" alt="Fashionista background" className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0" />
        <div className="relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-none mb-2"
            style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.05em' }}
          >
            <span className="text-black">FASHIO</span><span className="text-red-800">NISTA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-xl mb-6 md:mb-10 max-w-xs md:max-w-2xl text-black/70"
            style={{ fontFamily: 'PT Sans, sans-serif', fontWeight: 500 }}
          >
            Redefining Luxury Fashion
          </motion.p>
        </div>
        {/* Modular ArrowDownSVG component, absolutely positioned at bottom right of hero, with 'explore' below */}
        <span className="absolute bottom-8 right-1/2 translate-x-1/2 md:bottom-16 md:right-32 md:translate-x-0 group z-20 flex flex-col items-center">
          <ArrowDownSVG />
          <span className="mt-2 text-sm md:text-lg text-white">EXPLORE</span>
        </span>
      </section>
  <SectionOne />
  <SectionTwo />
  <SectionThree />
  <SectionFour />
  <SectionFive />
  <SectionSix />
  <SectionSeven />
  <SectionEight />
  <SectionNine />
    </main>
  );
}
