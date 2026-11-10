import { ArcText } from "@/components/ArcText";

export const HeroSection = () => (
	<section>
		<div className="container h-[82vh]">
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
					<p className="font-editorial text-2xl lg:text-4xl leading-none italic">
						"Your <span className="font-pixel not-italic">Digital</span> Friend"
					</p>
				</div>
			</div>
			{/* Description */}
			<div className="flex justify-between items-center text-2xl lg:text-3xl uppercase mt-3 mx-auto max-w-5xl px-5">
				<div>
					<p>Web Development</p>
					<p>Brand Identity</p>
				</div>
				<div className="text-right">
					<p>Digital Design</p>
					<p>Copywriting</p>
				</div>
			</div>
		</div>
	</section>
);
