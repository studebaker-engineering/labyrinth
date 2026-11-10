import {
	ContactCTASection,
	HeroSection,
	HowWeWorkSection,
	IntroductionSection,
	OngoingDigitalSupportSection,
	ShopifyCommerceSection,
	WebsitesAndPortfoliosSection,
} from "@/sections/services";

export const Services = () => (
	<div className="container mx-auto px-3">
		<HeroSection />
		<IntroductionSection />
		<ShopifyCommerceSection />
		<WebsitesAndPortfoliosSection />
		<OngoingDigitalSupportSection />
		<HowWeWorkSection />
		<ContactCTASection />
	</div>
);
