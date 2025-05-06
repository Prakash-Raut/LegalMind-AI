"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { useState } from "react";
import { toast } from "sonner";

export function ProfileForm() {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			toast.message("Profile updated", {
				description: "Your profile has been updated successfully",
			});
		}, 1500);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Personal Information</CardTitle>
				<CardDescription>
					Update your personal details and contact information
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
						<Avatar className="h-24 w-24">
							<AvatarImage
								src="/placeholder.svg?height=96&width=96"
								alt="Profile"
							/>
							<AvatarFallback>AS</AvatarFallback>
						</Avatar>
						<div className="flex flex-col space-y-2">
							<Button type="button" variant="outline" size="sm">
								Change Avatar
							</Button>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="text-muted-foreground"
							>
								Remove
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="first-name">First name</Label>
							<Input id="first-name" defaultValue="Advocate" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="last-name">Last name</Label>
							<Input id="last-name" defaultValue="Sharma" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								defaultValue="advocate.sharma@example.com"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Phone number</Label>
							<Input id="phone" type="tel" defaultValue="+91 9876543210" />
						</div>
						<div className="space-y-2 sm:col-span-2">
							<Label htmlFor="address">Address</Label>
							<Input
								id="address"
								defaultValue="123, Law Chambers, High Court Road"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="city">City</Label>
							<Input id="city" defaultValue="Mumbai" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="state">State</Label>
							<Input id="state" defaultValue="Maharashtra" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="pin-code">PIN Code</Label>
							<Input id="pin-code" defaultValue="400001" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="bar-council-number">Bar Council Number</Label>
							<Input id="bar-council-number" defaultValue="MAH/12345/2010" />
						</div>
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
