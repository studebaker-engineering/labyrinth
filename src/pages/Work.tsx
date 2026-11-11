import {
	CapabilitiesCTASection,
	ContactCTASection,
	HeroSection,
	IntroductionSection,
	ProjectGallerySection,
} from "@/sections/work";

export const Work = () => (
	<div className="container mx-auto px-3 pt-[calc(var(--navigation-height)+1rem)]">
		<HeroSection />
		<IntroductionSection />
		<ProjectGallerySection />
		<CapabilitiesCTASection />
		<ContactCTASection />
	</div>
);
