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
import { FileUp, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function DocumentUploadModal() {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.[0]) {
			setSelectedFile(e.target.files?.[0]);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!selectedFile) {
			toast.message("No file selected", {
				description: "Please select a file to upload",
			});
			return;
		}

		setIsLoading(true);

		// Simulate API call to upload document
		setTimeout(() => {
			setIsLoading(false);
			setOpen(false);
			toast("Document uploaded", {
				description: `${selectedFile.name} has been uploaded successfully`,
			});
			setSelectedFile(null);
		}, 1500);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<FileUp className="mr-2 h-4 w-4" />
					Upload Document
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[550px]">
				<DialogHeader>
					<DialogTitle>Upload Document</DialogTitle>
					<DialogDescription>
						Upload a document to analyze or edit
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="document-title" className="text-right">
								Title
							</Label>
							<Input
								id="document-title"
								placeholder="e.g., Bail Application - Singh Case"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="document-type" className="text-right">
								Document Type
							</Label>
							<Select required>
								<SelectTrigger id="document-type" className="col-span-3">
									<SelectValue placeholder="Select document type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="petition">Petition</SelectItem>
									<SelectItem value="affidavit">Affidavit</SelectItem>
									<SelectItem value="notice">Legal Notice</SelectItem>
									<SelectItem value="agreement">Agreement</SelectItem>
									<SelectItem value="court-order">Court Order</SelectItem>
									<SelectItem value="evidence">Evidence</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="related-case" className="text-right">
								Related Case
							</Label>
							<Select>
								<SelectTrigger id="related-case" className="col-span-3">
									<SelectValue placeholder="Select related case (optional)" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="1">
										Singh vs. State of Maharashtra
									</SelectItem>
									<SelectItem value="2">Mehta Property Dispute</SelectItem>
									<SelectItem value="3">
										Patel Industries vs. Tax Authority
									</SelectItem>
									<SelectItem value="4">Kumar Inheritance Case</SelectItem>
									<SelectItem value="none">None</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Textarea
								id="description"
								placeholder="Brief description of the document..."
								className="col-span-3"
								rows={2}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="file-upload" className="text-right">
								File
							</Label>
							<div className="col-span-3">
								<Input
									id="file-upload"
									type="file"
									accept=".pdf,.doc,.docx,.txt"
									onChange={handleFileChange}
									required
								/>
								<p className="text-xs text-muted-foreground mt-1">
									Supported formats: PDF, DOC, DOCX, TXT (max 10MB)
								</p>
							</div>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="analyze" className="text-right">
								Analyze Document
							</Label>
							<div className="flex items-center space-x-2 col-span-3">
								<input
									type="checkbox"
									id="analyze"
									className="rounded border-gray-300"
								/>
								<Label htmlFor="analyze" className="font-normal">
									Use AI to analyze document content
								</Label>
							</div>
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
							{isLoading ? (
								"Uploading..."
							) : (
								<>
									<Upload className="mr-2 h-4 w-4" />
									Upload
								</>
							)}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
