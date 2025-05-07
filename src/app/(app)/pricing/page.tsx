import { PricingFAQ } from "./pricing-faq";
import { PricingHeader } from "./pricing-header";
import { PricingPlans } from "./pricing-plans";

export default function PricingPage() {
	return (
		<div className="flex flex-col gap-12 p-6">
			<PricingHeader />
			<PricingPlans />
			<PricingFAQ />
		</div>
	);
}
