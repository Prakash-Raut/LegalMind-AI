"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export function DocumentAnalysis() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Document Analysis</CardTitle>
				<CardDescription>
					AI-powered analysis of legal documents
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					Upload a document to analyze its content, identify key clauses, and
					extract relevant information using AI.
				</p>
			</CardContent>
		</Card>
	);
}
