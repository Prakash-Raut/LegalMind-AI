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
import { FileSignature } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export function DocumentSignatureModal() {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const [name, setName] = useState("");
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isDrawing, setIsDrawing] = useState(false);
	const [hasSignature, setHasSignature] = useState(false);

	const startDrawing = (
		e:
			| React.MouseEvent<HTMLCanvasElement>
			| React.TouchEvent<HTMLCanvasElement>,
	) => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		setIsDrawing(true);

		let clientX: number;
		let clientY: number;
		if ("touches" in e) {
			clientX = e.touches[0].clientX;
			clientY = e.touches[0].clientY;
		} else {
			clientX = e.clientX;
			clientY = e.clientY;
		}

		const rect = canvas.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		ctx.beginPath();
		ctx.moveTo(x, y);
	};

	const draw = (
		e:
			| React.MouseEvent<HTMLCanvasElement>
			| React.TouchEvent<HTMLCanvasElement>,
	) => {
		if (!isDrawing) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Get position
		let clientX: number;
		let clientY: number;
		if ("touches" in e) {
			clientX = e.touches[0].clientX;
			clientY = e.touches[0].clientY;
			e.preventDefault(); // Prevent scrolling on touch devices
		} else {
			clientX = e.clientX;
			clientY = e.clientY;
		}

		const rect = canvas.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		ctx.lineWidth = 2;
		ctx.lineCap = "round";
		ctx.strokeStyle = "#000";

		ctx.lineTo(x, y);
		ctx.stroke();

		setHasSignature(true);
	};

	const endDrawing = () => {
		setIsDrawing(false);
	};

	const clearSignature = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		setHasSignature(false);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!hasSignature) {
			toast.message("No signature drawn", {
				description: "Please draw your signature before submitting",
			});
			return;
		}

		setIsLoading(true);

		// Simulate API call to apply signature
		setTimeout(() => {
			setIsLoading(false);
			setOpen(false);
			toast.message("Document signed", {
				description: "Your signature has been applied to the document",
			});
			setName("");
			clearSignature();
		}, 1500);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<FileSignature className="mr-2 h-4 w-4" />
					Sign Document
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Sign Document</DialogTitle>
					<DialogDescription>
						Add your digital signature to this document
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="signer-name" className="text-right">
								Full Name
							</Label>
							<Input
								id="signer-name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Enter your full name"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label className="text-right">Signature</Label>
							<div className="col-span-3 space-y-2">
								<div
									className="border rounded-md p-2 bg-white"
									style={{ touchAction: "none" }}
								>
									<canvas
										ref={canvasRef}
										width={400}
										height={150}
										className="w-full border border-dashed border-gray-300 rounded-md cursor-crosshair"
										onMouseDown={startDrawing}
										onMouseMove={draw}
										onMouseUp={endDrawing}
										onMouseLeave={endDrawing}
										onTouchStart={startDrawing}
										onTouchMove={draw}
										onTouchEnd={endDrawing}
									/>
								</div>
								<Button
									type="button"
									variant="outline"
									size="sm"
									onClick={clearSignature}
								>
									Clear Signature
								</Button>
								<p className="text-xs text-muted-foreground">
									Draw your signature in the box above using your mouse or touch
									screen
								</p>
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
						<Button type="submit" disabled={isLoading || !hasSignature}>
							{isLoading ? "Signing..." : "Apply Signature"}
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
