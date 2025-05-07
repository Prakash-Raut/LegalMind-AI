"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileSignature, Save, Wand2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { DocumentSignatureModal } from "./document-signature-modal";

export function DocumentEditor({ initialContent = "" }) {
	const [content, setContent] = useState(
		initialContent || sampleDocumentContent,
	);
	const [isEditing, setIsEditing] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const handleSave = () => {
		setIsSaving(true);

		// Simulate API call to save document
		setTimeout(() => {
			setIsSaving(false);
			setIsEditing(false);
			toast.message("Document saved", {
				description: "Your document has been saved successfully",
			});
		}, 1000);
	};

	const handleDownload = () => {
		// Create a blob from the content
		const blob = new Blob([content], { type: "text/plain" });
		const url = URL.createObjectURL(blob);

		// Create a temporary link and trigger download
		const a = document.createElement("a");
		a.href = url;
		a.download = "legal-document.txt";
		document.body.appendChild(a);
		a.click();

		// Clean up
		document.body.removeChild(a);
		URL.revokeObjectURL(url);

		toast.message("Document downloaded", {
			description: "Your document has been downloaded successfully",
		});
	};

	const handleAIEnhance = () => {
		toast.message("AI Enhancement", {
			description: "AI is analyzing and enhancing your document...",
		});

		// Simulate AI enhancement
		setTimeout(() => {
			setContent(enhancedDocumentContent);
			toast.message("Document enhanced", {
				description: "AI has improved your document's language and structure",
			});
		}, 2000);
	};

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-bold">Document Editor</h2>
				<div className="flex gap-2">
					<Button variant="outline" onClick={handleAIEnhance}>
						<Wand2 className="mr-2 h-4 w-4" />
						AI Enhance
					</Button>
					<Button variant="outline" onClick={handleDownload}>
						<Download className="mr-2 h-4 w-4" />
						Download
					</Button>
					<DocumentSignatureModal />
					{isEditing ? (
						<Button onClick={handleSave} disabled={isSaving}>
							<Save className="mr-2 h-4 w-4" />
							{isSaving ? "Saving..." : "Save"}
						</Button>
					) : (
						<Button onClick={() => setIsEditing(true)}>
							<FileSignature className="mr-2 h-4 w-4" />
							Edit
						</Button>
					)}
				</div>
			</div>

			<Tabs defaultValue="edit" className="w-full">
				<TabsList>
					<TabsTrigger value="edit">Edit</TabsTrigger>
					<TabsTrigger value="preview">Preview</TabsTrigger>
				</TabsList>
				<TabsContent value="edit">
					<Card>
						<CardContent className="p-0">
							<textarea
								value={content}
								onChange={(e) => setContent(e.target.value)}
								className="w-full h-[600px] p-4 font-mono text-sm resize-none border-0 focus:outline-none"
								disabled={!isEditing}
							/>
						</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value="preview">
					<Card>
						<CardContent className="p-4">
							<div className="prose max-w-none">
								<div className="whitespace-pre-wrap font-serif">{content}</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}

// Sample document content
const sampleDocumentContent = `IN THE HIGH COURT OF JUDICATURE AT BOMBAY
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

3. That the Respondents, without conducting proper preliminary inquiry and based on false and frivolous allegations, have registered the impugned FIR against the Petitioner, causing grave prejudice to his reputation and business interests.`;

// Enhanced document content
const enhancedDocumentContent = `IN THE HIGH COURT OF JUDICATURE AT BOMBAY
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

2. That the Petitioner is a law-abiding citizen of India and a respected businessman operating in Mumbai for the past 15 years with no prior criminal antecedents. The Petitioner has consistently maintained an unblemished record in both his personal and professional capacities, having contributed significantly to the economic development of the region through his business ventures.

3. That the Respondents, without conducting proper preliminary inquiry and based on false and frivolous allegations, have registered the impugned FIR against the Petitioner, causing grave prejudice to his reputation and business interests. This action by the Respondents is in direct contravention of the guidelines laid down by the Hon'ble Supreme Court in Lalita Kumari v. Govt. of U.P. & Ors. (2014) 2 SCC 1, wherein it was mandated that a preliminary inquiry must be conducted in certain categories of cases before registering an FIR.

4. That the allegations contained in the impugned FIR are vague, unsubstantiated, and prima facie do not disclose the commission of any cognizable offense by the Petitioner. The registration of the FIR appears to be motivated by extraneous considerations and malafide intentions to harass the Petitioner and tarnish his reputation in society.

5. That the Petitioner has reasonable apprehension of arrest pursuant to the impugned FIR, which would cause irreparable harm to his dignity, reputation, and fundamental rights guaranteed under the Constitution of India.

PRAYER:

In light of the facts and circumstances stated above, it is most respectfully prayed that this Hon'ble Court may be pleased to:

a) Issue a writ of mandamus or any other appropriate writ, order or direction quashing FIR No. 123/2023 dated 10.01.2023 registered at Mumbai Central Police Station;

b) Issue a writ of mandamus or any other appropriate writ, order or direction restraining the Respondents from taking any coercive action against the Petitioner pursuant to the impugned FIR during the pendency of the present petition;

c) Pass such other order or orders as this Hon'ble Court may deem fit and proper in the facts and circumstances of the case.

AND FOR THIS ACT OF KINDNESS, THE PETITIONER AS IN DUTY BOUND SHALL EVER PRAY.

DRAWN & FILED BY:
[ADVOCATE NAME]
Counsel for the Petitioner

DRAWN ON: [DATE]
FILED ON: [DATE]

PLACE: Mumbai`;
