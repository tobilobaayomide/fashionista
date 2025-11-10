"use client";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function CreditsPage() {
	return (
		<main
			className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
			style={{ backgroundColor: "#121212", fontFamily: "Bricolage Grotesque, sans-serif" }}
		>
			{/* Finesse Marquee Replicated from SectionEight */}
			<div className="w-full border-t border-white mb-2" />
			<div className="w-full overflow-hidden pt-0 mb-2" style={{ maxWidth: '100vw' }}>
				<Marquee pauseOnHover gradient={false} speed={200} className="w-full" style={{ width: '100%' }}>
					{[...Array(12)].map((_, i) => (
						<span key={i} className="text-[4vw] font-normal text-white mx-8 tracking-wide whitespace-nowrap" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
							Credits
						</span>
					))}
				</Marquee>
			</div>
			<div className="w-full border-b border-white mb-8" />
		

			<section className="w-full max-w-4xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				{/* Left Side: Developer & Images */}
				<div className="flex flex-col gap-6 items-start">
					<h2 className="text-s -ml-50 text-gray-400" style={{ fontFamily: "Momo Trust Display, sans-serif" }}>DEVELOPER</h2>
					<p className="text-2xl -ml-50 -mt-5 text-white">Tobiloba<br/>Ayomide</p>
					<div className="w-full flex flex-col items-center justify-center mt-4 mb-4">
						<button
							className="flex flex-col ml-50 items-center justify-center group focus:outline-none"
							style={{ background: 'none', border: 'none' }}
							onClick={() => window.location.href = '/'}
						>
							<span className="inline-block align-middle mb-2">
								<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="60" cy="60" r="60" fill="#FF4040" className="transition-colors duration-300 group-hover:fill-white"/>
									<path d="M85 60H35M35 60C35 60 37.5 57.5 39 56C40.5 54.5 41.5 51.5 41.5 51.5M35 60C35 60 37.75 62.75 39 64C40.5 65.5 41.5 68.5 41.5 68.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300 group-hover:stroke-[#FF4040]"/>
								</svg>
							</span>
							<h3 className="text-l text-white mt-2">BACK TO HOME</h3>
						</button>
					</div>
					<h2 className="text-s -ml-50 mt-20 text-gray-400" style={{ fontFamily: "Momo Trust Display, sans-serif" }}>IMAGES</h2>
					<p className="text-2xl -ml-50 -mt-5 text-white">Unsplash</p>
				</div>
				{/* Right Side: Fonts & Libraries */}
				<div className="flex flex-col gap-6 items-start">
					<h2 className="text-2xl font-bold ml-50 -mr-50 text-white mb-2" style={{ fontFamily: "Momo Trust Display, sans-serif" }}>Transitions. Framer Motion. <br/>GSAP. Marquee</h2>
				
					<h2 className="text-s mt-65 ml-50 text-gray-400 mb-2" style={{ fontFamily: "Momo Trust Display, sans-serif" }}>FONTS</h2>
					<ul className="text-2xl text-white ml-50 -mt-7 -mr-70 list-disc list-inside mb-4">
						Momo Trust Display <br/>PT Sans <br/>Bricolage Grotesque
					</ul>
				</div>
			</section> 
	
		</main>
	);
}
