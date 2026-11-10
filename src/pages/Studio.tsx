import {
	ContactCTASection,
	HeroSection,
	IntroductionSection,
	OurPhilosophySection,
	PartnershipModelSection,
	PrinciplesSection,
	ThePersonBehindItSection,
} from "@/sections/studio";

export const Studio = () => (
	<div className="container mx-auto px-3">
		<HeroSection />
		<IntroductionSection />
		<OurPhilosophySection />
		<ThePersonBehindItSection />
		<PartnershipModelSection />
		<PrinciplesSection />
		<ContactCTASection />
	</div>
);
