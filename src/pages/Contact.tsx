import {
	ClosingNoteSection,
	DirectContactSection,
	HeroSection,
	IntroductionSection,
	ProjectDetailsSection,
	ProjectInquirySection,
} from "@/sections/contact";

export const Contact = () => (
	<div className="container mx-auto px-3">
		<HeroSection />
		<IntroductionSection />
		<ProjectInquirySection />
		<ProjectDetailsSection />
		<DirectContactSection />
		<ClosingNoteSection />
	</div>
);
