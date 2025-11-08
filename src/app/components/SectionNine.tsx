"use client";

export default function SectionNine() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-neutral-200 text-black px-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left: Call to action and SVG arrow */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 h-full text-left pr-0 md:pr-12 -ml-20 -mt-35">
          <h2 className="text-3xl md:text-3xl mb-15" style={{ fontFamily: 'Momo Trust Display, sans-serif', letterSpacing: '0.04em' }}>
            Check Out More<br />Pictures Of Our <br />Collections
          </h2>
          <span className="inline-block align-middle mb-8 group">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="60" fill="#FF4040" className="transition-colors duration-300 group-hover:fill-white"/>
              <path d="M35 60H85M85 60C85 60 82.5 57.5 81 56C79.5 54.5 78.5 51.5 78.5 51.5M85 60C85 60 82.25 62.75 81 64C79.5 65.5 78.5 68.5 78.5 68.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-[#FF4040]"/>
            </svg>
          </span>
          <h3 className="text-l -mt-6">GO TO GALLERY</h3>
        </div>
        {/* Right: Editorial image */}
        <div className="relative flex flex-row ">
          <img
            className="h-120 w-80 mr-5 -ml-30 -mt-20 object-cover z-10"
            src="/background.jpg"
            alt="Background"
          />
          <img
            className="h-120 w-80 mr-5 -ml-25 -mt-15 object-cover rotate-8 z-10"
            src="/sectionone.jpg"
            alt="Section One"
          />
          <img
            className="h-120 w-80 -ml-25 -mt-20 object-cover -rotate-6 z-10"
            src="/sectionseven.jpg"
            alt="Section Seven"
          />
          <span className="absolute left-[-45%] top-[75%] w-full text-left text-[10rem] font-extrabold text-black select-none pointer-events-none" style={{letterSpacing: '0.05em', fontFamily: 'Momo Trust Display, sans-serif', zIndex: 0}}>
            <span>fashio</span><span className="text-red-900">nista</span>
          </span>
        </div>
      </div>
    </section>
  );
}
