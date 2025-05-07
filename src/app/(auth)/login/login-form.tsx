"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate login
		setTimeout(() => {
			setIsLoading(false);
			toast.message("Login successful", {
				description: "Welcome back to LegalMind AI",
			});
			router.push("/dashboard");
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="name@example.com"
					required
					defaultValue="advocate@example.com"
				/>
			</div>
			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<Label htmlFor="password">Password</Label>
				</div>
				<Input
					id="password"
					type="password"
					placeholder="••••••••"
					required
					defaultValue="password123"
				/>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox id="remember" />
				<Label htmlFor="remember" className="text-sm font-normal">
					Remember me
				</Label>
			</div>
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Signing in..." : "Sign in"}
			</Button>
		</form>
	);
}
