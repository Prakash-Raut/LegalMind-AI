import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function PricingFAQ() {
	const faqs = [
		{
			id: 1,
			question: "How does the AI legal assistant work?",
			answer:
				"Our AI legal assistant is trained on Indian legal precedents, statutes, and case law. It can help with legal research, document drafting, case analysis, and providing insights based on similar cases. The assistant continuously learns from new legal developments to provide up-to-date information.",
		},
		{
			id: 2,
			question: "Is my data secure and confidential?",
			answer:
				"Yes, we take data security and confidentiality very seriously. All your case data and documents are encrypted both in transit and at rest. We comply with all relevant data protection regulations, and your client information is never shared with third parties without your explicit consent.",
		},
		{
			id: 3,
			question: "Can I upgrade or downgrade my plan later?",
			answer:
				"You can upgrade your plan at any time, and the new features will be immediately available. If you need to downgrade, the change will take effect at the start of your next billing cycle. There are no penalties for changing plans.",
		},
		{
			id: 4,
			question: "Do you offer a free trial?",
			answer:
				"Yes, we offer a 14-day free trial of our Professional plan for new users. This gives you full access to all features so you can evaluate if our platform meets your needs before committing to a subscription.",
		},
		{
			id: 5,
			question: "How often are new features added?",
			answer:
				"We regularly update our platform with new features and improvements based on user feedback and legal industry developments. Major updates are typically released quarterly, with smaller enhancements and bug fixes deployed continuously.",
		},
		{
			id: 6,
			question: "Is there a limit to document storage?",
			answer:
				"The Starter plan includes 5GB of document storage, the Professional plan includes 25GB, and the Enterprise plan includes 100GB. Additional storage can be purchased if needed for any plan.",
		},
	];

	return (
		<div className="space-y-4">
			<div className="text-center">
				<h2 className="text-2xl font-bold tracking-tight">
					Frequently Asked Questions
				</h2>
				<p className="mt-2 text-muted-foreground">
					Have more questions? Contact our support team at support@legalmind.ai
				</p>
			</div>
			<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
				{faqs.map((faq) => (
					<AccordionItem key={faq.id} value={`item-${faq.id}`}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
