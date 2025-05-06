import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingHeader } from "@/components/pricing/pricing-header";
import { PricingPlans } from "@/components/pricing/pricing-plans";

export default function PricingPage() {
	return (
		<div className="flex flex-col gap-12 p-6">
			<PricingHeader />
			<PricingPlans />
			<PricingFAQ />
		</div>
	);
}
