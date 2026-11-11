import { ArcText } from "@/components/ArcText";

export const HeroSection = () => (
	<section className="min-h-svh w-full px-3 pt-[calc(var(--navigation-height)+1rem)] pb-6">
		<div className="container mx-auto">
			{/* Screen reader heading */}
			<h1 className="sr-only">Studebaker Engineering</h1>
			{/* Arc text */}
			<div className="flex flex-col items-center lg:-mb-5">
				<div className="w-full max-w-5xl">
					<ArcText text="Studebaker" fontSize={170} arcRatio={0.065} />
				</div>
				<div className="w-full max-w-5xl -mt-10 lg:-mt-20">
					<ArcText text="Engineering" fontSize={150} arcRatio={0.065} />
				</div>
			</div>
			{/* Tag */}
			<div className="flex justify-center">
				<div className="border-2 border-soft-blue w-fit px-8 py-1 lg:py-2 rounded-[200%]">
					<p className="font-editorial text-2xl lg:text-5xl leading-none italic">
						"Your <span className="font-pixel not-italic">Digital</span> Friend"
					</p>
				</div>
			</div>
			{/* Description */}
			<div className="text-center mt-3 text-2xl lg:text-4xl text-balance">
				<p className="font-editorial">
					Creative and technical partnership for independent brands
				</p>
			</div>

			<div className="flex justify-between items-center text-2xl lg:text-3xl uppercase mt-3 mx-auto max-w-5xl px-5">
				<div>
					<p>Development</p>
					<p>Brand Identity</p>
				</div>
				<div className="text-right">
					<p>Design</p>
					<p>Copywriting</p>
				</div>
			</div>
		</div>
	</section>
);
