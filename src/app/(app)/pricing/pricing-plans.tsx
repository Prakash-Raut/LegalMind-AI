"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

export function PricingPlans() {
	const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
		"monthly",
	);

	const plans = [
		{
			name: "Starter",
			description: "Perfect for individual practitioners",
			priceMonthly: "₹999",
			priceYearly: "₹9,990",
			features: [
				"5 active cases",
				"Basic AI legal assistant",
				"Document management",
				"Standard templates",
				"Email support",
			],
		},
		{
			name: "Professional",
			description: "Ideal for small law firms",
			priceMonthly: "₹2,499",
			priceYearly: "₹24,990",
			features: [
				"25 active cases",
				"Advanced AI legal assistant",
				"Document management & analysis",
				"All legal templates",
				"Case timeline & tracking",
				"Priority email & chat support",
			],
			popular: true,
		},
		{
			name: "Enterprise",
			description: "For established law firms",
			priceMonthly: "₹4,999",
			priceYearly: "₹49,990",
			features: [
				"Unlimited active cases",
				"Expert AI legal assistant",
				"Advanced document analysis",
				"Custom templates",
				"Team collaboration tools",
				"Dedicated account manager",
				"24/7 priority support",
			],
		},
	];

	return (
		<div className="space-y-8">
			<div className="flex justify-center">
				<div className="inline-flex items-center rounded-full border p-1">
					<Button
						variant={billingCycle === "monthly" ? "default" : "ghost"}
						size="sm"
						onClick={() => setBillingCycle("monthly")}
					>
						Monthly
					</Button>
					<Button
						variant={billingCycle === "yearly" ? "default" : "ghost"}
						size="sm"
						onClick={() => setBillingCycle("yearly")}
					>
						Yearly
						<span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
							Save 20%
						</span>
					</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{plans.map((plan) => (
					<Card
						key={plan.name}
						className={plan.popular ? "border-primary shadow-md" : ""}
					>
						{plan.popular && (
							<div className="mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
								Most Popular
							</div>
						)}
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<CardDescription>{plan.description}</CardDescription>
							<div className="mt-4">
								<span className="text-3xl font-bold">
									{billingCycle === "monthly"
										? plan.priceMonthly
										: plan.priceYearly}
								</span>
								<span className="text-muted-foreground">
									{billingCycle === "monthly" ? "/month" : "/year"}
								</span>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center">
										<Check className="mr-2 h-4 w-4 text-primary" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button
								className="w-full"
								variant={plan.popular ? "default" : "outline"}
							>
								Get Started
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}
