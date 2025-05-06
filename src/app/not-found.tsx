import { ArrowLeft, Compass, MapPin } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="w-full rounded-lg shadow-lg overflow-hidden">
				<div className="flex flex-col md:flex-row">
					<div className="md:w-1/2 p-8 flex items-center justify-center">
						<div className="text-white text-center">
							<h1 className="text-9xl font-bold mb-4">404</h1>
							<div className="flex justify-center space-x-4 mb-4">
								<MapPin className="w-12 h-12" />
								<Compass className="w-12 h-12 animate-spin-slow" />
							</div>
							<p className="text-2xl font-semibold">Lost in cyberspace?</p>
						</div>
					</div>
					<div className="md:w-1/2 p-8">
						<h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
						<p className="mb-6">
							Oops! It seems you've stumbled upon a digital dead end. Don't
							worry, even the best explorers get lost sometimes.
						</p>
						<div className="space-y-4">
							<Link
								href="/"
								className="inline-flex items-center justify-center w-full bg-[#FF724D] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-[#E5623E] focus:outline-none focus:ring-2 focus:ring-[#FF724D] focus:ring-opacity-50"
							>
								<ArrowLeft className="mr-2 h-5 w-5" />
								Return to Homepage
							</Link>
							<Link
								href="/sitemap"
								className="inline-flex items-center justify-center w-full border-2 border-[#FF724D] text-[#FF724D] font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-[#FF724D] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FF724D] focus:ring-opacity-50"
							>
								View Sitemap
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
