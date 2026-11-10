import {
	ContactCTASection,
	HeroSection,
	PartnershipSection,
	PitchSection,
	SelectedWorkSection,
	WhatWeDoSection,
} from "@/sections/home";

export const Home = () => (
	<>
		<div className="container mx-auto px-3">
			<HeroSection />
			<PitchSection />
			<SelectedWorkSection />
			<WhatWeDoSection />
			<PartnershipSection />
			<ContactCTASection />
		</div>

		<div className="min-h-dvh bg-creme text-powder-red">
			<div className="container mx-auto py-5">
				<h2 className="font-brush text-5xl">Lorem Ipsum</h2>
			</div>
		</div>
	</>
);
