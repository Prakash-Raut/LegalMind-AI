"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function NewCaseModal() {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);

		// Simulate API call to create a new case
		setTimeout(() => {
			setIsLoading(false);
			setOpen(false);
			toast.message("Case created", {
				description: "Your new case has been created successfully",
			});
			router.push("/cases/7"); // Redirect to the newly created case
		}, 1500);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<PlusCircle className="mr-2 h-4 w-4" />
					New Case
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle>Create New Case</DialogTitle>
					<DialogDescription>
						Enter the details for your new legal case.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="case-title" className="text-right">
								Case Title
							</Label>
							<Input
								id="case-title"
								placeholder="e.g., Smith vs. State of Maharashtra"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="case-type" className="text-right">
								Case Type
							</Label>
							<Select required>
								<SelectTrigger id="case-type" className="col-span-3">
									<SelectValue placeholder="Select case type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="criminal">Criminal</SelectItem>
									<SelectItem value="civil">Civil</SelectItem>
									<SelectItem value="family">Family</SelectItem>
									<SelectItem value="tax">Tax</SelectItem>
									<SelectItem value="corporate">Corporate</SelectItem>
									<SelectItem value="property">Property</SelectItem>
									<SelectItem value="consumer">Consumer</SelectItem>
									<SelectItem value="administrative">Administrative</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="court" className="text-right">
								Court
							</Label>
							<Input
								id="court"
								placeholder="e.g., Delhi High Court"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="case-number" className="text-right">
								Case Number
							</Label>
							<Input
								id="case-number"
								placeholder="e.g., CRI/2023/1234"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="client-name" className="text-right">
								Client Name
							</Label>
							<Input
								id="client-name"
								placeholder="e.g., Rajiv Singh"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="opposing-party" className="text-right">
								Opposing Party
							</Label>
							<Input
								id="opposing-party"
								placeholder="e.g., State of Maharashtra"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="filing-date" className="text-right">
								Filing Date
							</Label>
							<Input
								id="filing-date"
								type="date"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="next-hearing" className="text-right">
								Next Hearing
							</Label>
							<Input id="next-hearing" type="date" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Textarea
								id="description"
								placeholder="Brief description of the case..."
								className="col-span-3"
								rows={4}
								required
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit" disabled={isLoading}>
							{isLoading ? "Creating..." : "Create Case"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
