"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export function ForgotPasswordForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate password reset email
		setTimeout(() => {
			setIsLoading(false);
			setIsSubmitted(true);
			toast.message("Reset link sent", {
				description: "Check your email for the password reset link",
			});
		}, 1500);
	};

	if (isSubmitted) {
		return (
			<div className="space-y-4 text-center">
				<div className="rounded-full bg-green-100 p-3 text-green-600 mx-auto w-fit">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="h-6 w-6"
					>
						<title>Checkmark</title>
						<path d="M22 2L11 13" />
						<path d="M22 2L15 22L11 13L2 9L22 2Z" />
					</svg>
				</div>
				<h3 className="text-lg font-medium">Check your email</h3>
				<p className="text-sm text-muted-foreground">
					We&apos;ve sent a password reset link to your email address.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					type="email"
					placeholder="name@example.com"
					required
				/>
			</div>
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? "Sending reset link..." : "Send reset link"}
			</Button>
		</form>
	);
}
