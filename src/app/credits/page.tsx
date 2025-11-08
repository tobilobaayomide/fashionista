import Marquee from "react-fast-marquee";

export default function CreditsPage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-900">
				<div className="relative h-40 w-48 overflow-hidden mb-8 flex items-center justify-center">
					<div className="absolute left-0 w-full animate-vertical-marquee">
						{[...Array(10)].map((_, i) => (
							<div key={i} className="text-[2vw] font-normal text-white py-2 text-center" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>
								Credits
							</div>
						))}
					</div>
				</div>
			<h1 className="text-3xl font-bold mb-4 text-white">Credits</h1>
			<p className="text-lg text-center max-w-xl text-gray-200">
				This page acknowledges all contributors, designers, and sources that made this project possible.
			</p>
		</main>
	);
}
