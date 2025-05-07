"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function OrganizationSettings() {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			toast.message("Organization updated", {
				description: "Your organization details have been updated successfully",
			});
		}, 1500);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Organization Details</CardTitle>
				<CardDescription>
					Manage your law firm or organization information
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="org-name">Organization Name</Label>
						<Input id="org-name" defaultValue="Sharma & Associates" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="org-type">Organization Type</Label>
						<Input id="org-type" defaultValue="Law Firm" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="org-address">Organization Address</Label>
						<Input
							id="org-address"
							defaultValue="123, Law Chambers, High Court Road, Mumbai"
						/>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="org-email">Organization Email</Label>
							<Input
								id="org-email"
								type="email"
								defaultValue="info@sharmaassociates.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="org-phone">Organization Phone</Label>
							<Input id="org-phone" type="tel" defaultValue="+91 22 12345678" />
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="org-website">Website</Label>
						<Input
							id="org-website"
							type="url"
							defaultValue="https://www.sharmaassociates.com"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="org-description">About</Label>
						<Textarea
							id="org-description"
							className="min-h-[100px]"
							defaultValue="Sharma & Associates is a full-service law firm specializing in criminal, civil, and corporate law. Established in 2010, we have successfully represented clients in various courts across India."
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="gstin">GSTIN</Label>
						<Input id="gstin" defaultValue="27AABCS1234Z1Z5" />
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-end">
				<Button type="submit" disabled={isLoading}>
					{isLoading ? "Saving..." : "Save Changes"}
				</Button>
			</CardFooter>
		</Card>
	);
}
