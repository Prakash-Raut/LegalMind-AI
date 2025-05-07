"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function SignupForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate signup
		setTimeout(() => {
			setIsLoading(false);
			toast.message("Account created", {
				description: "Welcome to LegalMind AI",
			});
			router.push("/dashboard");
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="first-name">First name</Label>
					<Input id="first-name" placeholder="John" required />
				</div>
				<div className="space-y-2">
					<Label htmlFor="last-name">Last name</Label>
					<Input id="last-name" placeholder="Doe" required />
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="name@example.com"
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="password">Password</Label>
				<Input id="password" type="password" placeholder="••••••••" required />
			</div>
			<div className="space-y-2">
				<Label htmlFor="confirm-password">Confirm Password</Label>
				<Input
					id="confirm-password"
					type="password"
					placeholder="••••••••"
					required
				/>
			</div>
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Creating account..." : "Create account"}
			</Button>
		</form>
	);
}
