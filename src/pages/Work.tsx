import {
	CapabilitiesCTASection,
	ContactCTASection,
	HeroSection,
	IntroductionSection,
	ProjectGallerySection,
} from "@/sections/work";

export const Work = () => (
	<div className="container mx-auto px-3">
		<HeroSection />
		<IntroductionSection />
		<ProjectGallerySection />
		<CapabilitiesCTASection />
		<ContactCTASection />
	</div>
);
