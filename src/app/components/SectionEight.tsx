"use client";


import Marquee from "react-fast-marquee";

export default function SectionEight() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-start bg-white pt-10">
  <div className="w-full border-t border-black mb-2" />
  <div className="w-full overflow-hidden pt-0 mb-2" style={{ maxWidth: '100vw' }}>
        <Marquee pauseOnHover gradient={false} speed={200} className="w-full" style={{ width: '100%' }}>
          {[...Array(12)].map((_, i) => (
            <span key={i} className="text-[4vw] font-normal text-black mx-8 tracking-wide whitespace-nowrap" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
              Finesse
            </span>
          ))}
        </Marquee>
      </div>
      <div className="w-full border-b border-black mb-12" />
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-start px-6">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 h-full text-left pr-0 md:pr-12 -ml-20">
          <div className="mb-6">
            <div className="flex items-center gap-x-10">
              <h2 className="text-3xl md:text-5xl mt-10 text-neutral-900 tracking-tight" style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.04em' }}>
                Elevated
                <span className="inline-block ml-10 align-middle">
                <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1.5" x2="101" y2="1.5" stroke="#A3A3A3" strokeWidth={3}/>
                </svg>
              </span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-2 mt-6  ml-30">
              <span className="inline-block align-middle">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.71875 12.5312H10.5859V22.4219H12.4375V12.5312H22.3516V10.6797H12.4375V0.765625H10.5859V10.6797H0.71875V12.5312Z" fill="#A3A3A3"/>
                </svg>
              </span>
              <span className="text-3xl md:text-5xl mt-4 -ml-25 text-neutral-900 tracking-tight" style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.04em' }}>
                <span className="inline-block mr-10 align-middle">
                <svg width="50" height="3" viewBox="0 0 50 3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1.5" x2="101" y2="1.5" stroke="#A3A3A3" strokeWidth={3}/>
                </svg>
              </span>
              Street Style
              </span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-neutral-700 mb-12 mt-12 leading-relaxed text-justify" style={{ fontFamily: 'PT Sans, sans-serif', fontWeight: 400 }}>
            Experience a new era of luxury where every detail is meticulously crafted to inspire awe. Our latest capsule redefines exclusivity, blending rare materials and timeless artistry for those who seek the extraordinary. Step into a world where elegance is not just seen, but felt.
          </p>
        </div>
          <div className="flex justify-end items-left w-full md:w-1/2 h-80% ml-25">
          <img src="/sectioneight.jpg" alt="Art of Distinction" className="w-[1100px] h-[400px] object-cover shadow-xl mt-10" />
        </div>
      </div>
    </section>
  );
}
   