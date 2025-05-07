"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Wand2 } from "lucide-react";
import { useState } from "react";

export function DocumentCreator() {
	const [documentContent, setDocumentContent] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);

	const handleGenerate = () => {
		setIsGenerating(true);

		// Simulate AI generation
		setTimeout(() => {
			setDocumentContent(
				`IN THE HIGH COURT OF JUDICATURE AT BOMBAY
ORDINARY ORIGINAL CIVIL JURISDICTION
WRIT PETITION NO. _______ OF 2023

IN THE MATTER OF:
Articles 14, 19, and 21 of the Constitution of India, 1950

AND

IN THE MATTER OF:
Alleged violation of Fundamental Rights of the Petitioner

Rajiv Singh
S/o Late Shri Harish Singh
Residing at 123, Marine Drive,
Mumbai - 400001                                                                  ... PETITIONER

VERSUS

1. The State of Maharashtra
Through the Principal Secretary,
Home Department, Mantralaya,
Mumbai - 400032

2. The Commissioner of Police,
Mumbai Police Commissionerate,
Mumbai - 400001                                                                ... RESPONDENTS

PETITION UNDER ARTICLE 226 OF THE CONSTITUTION OF INDIA

To,
THE HON'BLE CHIEF JUSTICE AND OTHER PUISNE JUDGES OF THE HON'BLE HIGH COURT OF JUDICATURE AT BOMBAY

THE HUMBLE PETITION OF THE PETITIONER ABOVE-NAMED:

MOST RESPECTFULLY SHOWETH:

1. That the present Petition is being filed under Article 226 of the Constitution of India seeking issuance of an appropriate Writ, Order or Direction in the nature of Mandamus or any other appropriate Writ, Order or Direction declaring the actions of the Respondents in registering FIR No. 123/2023 dated 10.01.2023 at Mumbai Central Police Station as illegal, arbitrary, and violative of the Fundamental Rights of the Petitioner guaranteed under Articles 14, 19, and 21 of the Constitution of India.

2. That the Petitioner is a law-abiding citizen of India and a respected businessman operating in Mumbai for the past 15 years with no prior criminal antecedents.

3. That the Respondents, without conducting proper preliminary inquiry and based on false and frivolous allegations, have registered the impugned FIR against the Petitioner, causing grave prejudice to his reputation and business interests.`,
			);
			setIsGenerating(false);
		}, 2000);
	};

	return (
		<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
			<div className="lg:col-span-1 space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>Document Details</CardTitle>
						<CardDescription>
							Enter information to generate your document
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="document-type">Document Type</Label>
							<Input id="document-type" value="Petition" readOnly />
						</div>
						<div className="space-y-2">
							<Label htmlFor="petitioner-name">Petitioner Name</Label>
							<Input
								id="petitioner-name"
								placeholder="Enter full name"
								defaultValue="Rajiv Singh"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="respondent">Respondent</Label>
							<Input
								id="respondent"
								placeholder="Enter respondent name"
								defaultValue="State of Maharashtra"
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="case-details">Case Details</Label>
							<Textarea
								id="case-details"
								placeholder="Describe your case briefly..."
								className="min-h-[100px]"
								defaultValue="Challenging the FIR registered against me for alleged financial fraud under Section 420 IPC. The FIR was registered without proper investigation and based on false allegations."
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="relief-sought">Relief Sought</Label>
							<Textarea
								id="relief-sought"
								placeholder="What relief are you seeking?"
								className="min-h-[100px]"
								defaultValue="Quashing of FIR No. 123/2023 dated 10.01.2023 registered at Mumbai Central Police Station."
							/>
						</div>
						<div className="flex gap-2">
							<Button
								onClick={handleGenerate}
								disabled={isGenerating}
								className="flex-1"
							>
								{isGenerating ? (
									"Generating..."
								) : (
									<>
										<Wand2 className="mr-2 h-4 w-4" />
										Generate Document
									</>
								)}
							</Button>
							<Button variant="outline" className="w-10 p-0">
								<Mic className="h-4 w-4" />
								<span className="sr-only">Voice Input</span>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="lg:col-span-2">
				<Card className="h-full">
					<CardHeader>
						<CardTitle>Document Preview</CardTitle>
						<CardDescription>
							Preview and edit your legal document
						</CardDescription>
					</CardHeader>
					<CardContent className="h-[calc(100%-5rem)]">
						<Tabs defaultValue="preview">
							<TabsList className="mb-4">
								<TabsTrigger value="preview">Preview</TabsTrigger>
								<TabsTrigger value="edit">Edit</TabsTrigger>
							</TabsList>
							<TabsContent value="preview" className="h-full">
								<div className="border rounded-md p-4 h-[600px] overflow-auto font-mono text-sm whitespace-pre-wrap">
									{documentContent ||
										"Your document will appear here after generation."}
								</div>
							</TabsContent>
							<TabsContent value="edit" className="h-full">
								<Textarea
									value={documentContent}
									onChange={(e) => setDocumentContent(e.target.value)}
									placeholder="Your document content..."
									className="h-[600px] font-mono text-sm resize-none"
								/>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
