"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ExternalLink, LinkIcon, Mic, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Source = {
	title: string;
	url: string;
	snippet: string;
};

type MatchConfig<T> = {
	keywords: string[];
	response: T;
};

type Message = {
	id: string;
	content: string;
	role: "user" | "assistant";
	timestamp: Date;
	sources?: {
		title: string;
		url: string;
		snippet: string;
	}[];
};

// Sample initial messages
const initialMessages: Message[] = [
	{
		id: "1",
		content:
			"Welcome to Legal Research! I can search the web for legal information, precedents, and case law. How can I help you today?",
		role: "assistant",
		timestamp: new Date(),
	},
];

export function LegalResearchChat() {
	const [messages, setMessages] = useState<Message[]>(initialMessages);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Auto-scroll to bottom when messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	const handleSendMessage = () => {
		if (!input.trim()) return;

		// Add user message
		const userMessage: Message = {
			id: Date.now().toString(),
			content: input,
			role: "user",
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInput("");
		setIsLoading(true);

		// Simulate AI response after a delay
		setTimeout(() => {
			const aiResponse: Message = {
				id: (Date.now() + 1).toString(),
				content: generateAIResponse(input),
				role: "assistant",
				timestamp: new Date(),
				sources: generateSources(input),
			};
			setMessages((prev) => [...prev, aiResponse]);
			setIsLoading(false);
		}, 2000);
	};

	const aiResponses: MatchConfig<string>[] = [
		{
			keywords: ["right to information", "rti"],
			response:
				"The Right to Information Act, 2005 (RTI) is an Indian law that sets out the rules and procedures regarding citizens' right to information. It replaced the former Freedom of Information Act, 2002.\n\nKey provisions of the RTI Act include:\n\n1. Every public authority is required to maintain all its records duly catalogued and indexed and publish certain categories of information within 120 days of the enactment.\n\n2. It mandates the appointment of Public Information Officers (PIOs) in all public authorities who will be responsible for dealing with requests for information from citizens.\n\n3. The Act establishes a two-tier appeal system with the first appeal to a senior officer within the organization, and the second appeal to the Central Information Commission or State Information Commission.\n\nThe Supreme Court of India in several landmark judgments has upheld RTI as a fundamental right flowing from Article 19 of the Constitution, which guarantees freedom of speech and expression.",
		},
		{
			keywords: ["section 138", "cheque bounce"],
			response:
				"Section 138 of the Negotiable Instruments Act, 1881 deals with dishonor of cheques for insufficiency of funds in the account. It was introduced through the Banking, Public Financial Institutions and Negotiable Instruments Laws (Amendment) Act, 1988.\n\nKey elements for prosecution under Section 138:\n\n1. A cheque must have been drawn by a person on an account maintained by him with a banker.\n\n2. The cheque should have been issued for the discharge of a legally enforceable debt or liability.\n\n3. The cheque must have been presented to the bank within its validity period (3 months from the date of issue).\n\n4. The cheque must have been returned unpaid either because the amount of money standing to the credit of the account is insufficient or it exceeds the amount arranged to be paid from that account by an agreement with the bank.\n\n5. The payee must make a demand for payment by giving a notice in writing to the drawer within 30 days of receipt of information of the cheque being dishonored.\n\n6. The drawer must fail to make the payment within 15 days of receipt of the notice.\n\nThe Supreme Court in Dashrath Rupsingh Rathod v. State of Maharashtra (2014) held that the territorial jurisdiction for filing a complaint is restricted to the court within whose local jurisdiction the offence was committed, which is where the cheque is dishonored by the drawee bank.",
		},
		{
			keywords: ["divorce", "mutual consent"],
			response:
				"Divorce by mutual consent in India is governed by Section 13B of the Hindu Marriage Act, 1955 for Hindus, Section 28 of the Special Marriage Act, 1954 for inter-faith couples, and personal laws for other religions.\n\nThe process for mutual consent divorce involves:\n\n1. Filing a joint petition: Both spouses must jointly file a petition for dissolution of marriage by mutual consent.\n\n2. Waiting period: After filing the petition, there is a mandatory waiting period of 6 months (but not exceeding 18 months) before the second motion can be filed. This period is intended for reconciliation.\n\n3. Second motion: After the waiting period, both parties need to file a second motion confirming their intent to divorce.\n\n4. Court decree: If the court is satisfied that the marriage has irretrievably broken down and mutual consent has not been obtained by fraud, force, or undue influence, it will grant a decree of divorce.\n\nThe Supreme Court in Amardeep Singh v. Harveen Kaur (2017) held that the 6-month waiting period between the first and second motion is not mandatory and can be waived by the court in exceptional circumstances.",
		},
	];

	const defaultAIResponse =
		"Based on my search of Indian legal resources, I found several relevant pieces of information related to your query. The legal landscape in India is complex and often involves interpretation of statutes, precedents, and constitutional provisions.\n\nTo provide more specific guidance, could you please provide more details about your legal question? I can search for specific case law, statutes, or legal principles that might be applicable to your situation.";

	const generateAIResponse = (query: string): string => {
		const lowerQuery = query.toLowerCase();
		for (const item of aiResponses) {
			if (item.keywords.some((k) => lowerQuery.includes(k))) {
				return item.response;
			}
		}
		return defaultAIResponse;
	};

	const sourceMappings: MatchConfig<Source[]>[] = [
		{
			keywords: ["right to information", "rti"],
			response: [
				{
					title: "The Right to Information Act, 2005",
					url: "https://rti.gov.in/rti-act.pdf",
					snippet:
						"An Act to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities...",
				},
				{
					title: "CBIC v. Dilip Kumar - Supreme Court Judgment",
					url: "https://indiankanoon.org/doc/59461271/",
					snippet:
						"The Court held that the Right to Information is a facet of the right to freedom of speech and expression as contained in Article 19(1)(a) of the Constitution of India...",
				},
				{
					title: "Central Information Commission Official Website",
					url: "https://cic.gov.in/",
					snippet:
						"The Central Information Commission (CIC) is set up under the Right to Information Act and is the authorized body to hear appeals from information-seekers...",
				},
			],
		},
		{
			keywords: ["section 138", "cheque bounce"],
			response: [
				{
					title: "Negotiable Instruments Act, 1881 - Section 138",
					url: "https://indiankanoon.org/doc/1823824/",
					snippet:
						"Dishonour of cheque for insufficiency, etc., of funds in the account.—Where any cheque drawn by a person on an account maintained by him with a banker...",
				},
				{
					title: "Dashrath Rupsingh Rathod v. State of Maharashtra (2014)",
					url: "https://indiankanoon.org/doc/95064516/",
					snippet:
						"The Supreme Court held that the territorial jurisdiction for filing a complaint is restricted to the court within whose local jurisdiction the offence was committed...",
				},
				{
					title: "Negotiable Instruments (Amendment) Act, 2018",
					url: "https://www.indiacode.nic.in/handle/123456789/2113",
					snippet:
						"An Act further to amend the Negotiable Instruments Act, 1881 to address issues of undue delay in final resolution of cheque dishonour cases...",
				},
			],
		},
		{
			keywords: ["divorce", "mutual consent"],
			response: [
				{
					title: "Hindu Marriage Act, 1955 - Section 13B",
					url: "https://indiankanoon.org/doc/371700/",
					snippet:
						"Divorce by mutual consent.—(1) Subject to the provisions of this Act a petition for dissolution of marriage by a decree of divorce may be presented to the district court...",
				},
				{
					title: "Amardeep Singh v. Harveen Kaur (2017)",
					url: "https://indiankanoon.org/doc/160556661/",
					snippet:
						"The Supreme Court held that the 6-month waiting period between the first and second motion is not mandatory and can be waived by the court in exceptional circumstances...",
				},
				{
					title: "Special Marriage Act, 1954 - Section 28",
					url: "https://indiankanoon.org/doc/1284869/",
					snippet:
						"Divorce by mutual consent.—(1) Subject to the provisions of this Act and to the rules made thereunder, a petition for divorce may be presented to the district court...",
				},
			],
		},
	];

	const defaultSources: Source[] = [
		{
			title: "Supreme Court of India - Recent Judgments",
			url: "https://main.sci.gov.in/judgments",
			snippet:
				"Repository of recent judgments delivered by the Supreme Court of India on various legal matters...",
		},
		{
			title: "Indian Kanoon - Search Engine for Indian Legal Documents",
			url: "https://indiankanoon.org/",
			snippet:
				"Free search engine for Indian Law which retrieves the relevant provisions of case law, acts and rules...",
		},
		{
			title: "Legal Services India - Legal Articles",
			url: "https://www.legalservicesindia.com/articles/",
			snippet:
				"Collection of legal articles on various topics of Indian law written by legal experts and practitioners...",
		},
	];

	const generateSources = (query: string): Source[] => {
		const lowerQuery = query.toLowerCase();
		for (const item of sourceMappings) {
			if (item.keywords.some((k) => lowerQuery.includes(k))) {
				return item.response;
			}
		}
		return defaultSources;
	};

	return (
		<div className="flex flex-1 flex-col">
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
						className={cn(
							"flex items-start gap-3 max-w-[85%]",
							message.role === "user" ? "ml-auto" : "",
						)}
					>
						{message.role === "assistant" && (
							<Avatar className="h-8 w-8">
								<AvatarImage
									src="/placeholder.svg?height=32&width=32"
									alt="AI"
								/>
								<AvatarFallback>AI</AvatarFallback>
							</Avatar>
						)}
						<div
							className={cn(
								"rounded-lg p-3",
								message.role === "user"
									? "bg-primary text-primary-foreground"
									: "bg-muted",
							)}
						>
							<p className="text-sm whitespace-pre-line">{message.content}</p>
							{message.sources && message.sources.length > 0 && (
								<div className="mt-3 pt-3 border-t">
									<p className="text-xs font-semibold mb-2 flex items-center">
										<LinkIcon className="h-3 w-3 mr-1" /> Sources
									</p>
									<div className="space-y-2">
										{message.sources.map((source) => (
											<div key={source.title} className="text-xs">
												<Link
													href={source.url}
													target="_blank"
													rel="noopener noreferrer"
													className="font-medium hover:underline flex items-center"
												>
													{source.title}
													<ExternalLink className="h-3 w-3 ml-1 inline" />
												</Link>
												<p className="text-muted-foreground mt-0.5">
													{source.snippet}
												</p>
											</div>
										))}
									</div>
								</div>
							)}
							<span className="mt-1 block text-xs opacity-70">
								{message.timestamp.toLocaleTimeString()}
							</span>
						</div>
						{message.role === "user" && (
							<Avatar className="h-8 w-8">
								<AvatarImage
									src="/placeholder.svg?height=32&width=32"
									alt="User"
								/>
								<AvatarFallback>US</AvatarFallback>
							</Avatar>
						)}
					</div>
				))}
				{isLoading && (
					<div className="flex items-start gap-3 max-w-[85%]">
						<Avatar className="h-8 w-8">
							<AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
							<AvatarFallback>AI</AvatarFallback>
						</Avatar>
						<Card className="p-3">
							<CardContent className="p-0">
								<div className="flex space-x-2">
									<div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />
									<div
										className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
										style={{ animationDelay: "0.2s" }}
									/>
									<div
										className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
										style={{ animationDelay: "0.4s" }}
									/>
								</div>
								<div className="mt-2 text-xs text-muted-foreground">
									Searching legal resources...
								</div>
							</CardContent>
						</Card>
					</div>
				)}
				<div ref={messagesEndRef} />
			</div>
			<div className="border-t p-4">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleSendMessage();
					}}
					className="flex items-center gap-2"
				>
					<Button type="button" variant="outline" size="icon">
						<Mic className="h-4 w-4" />
						<span className="sr-only">Voice Input</span>
					</Button>
					<Input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Search for legal information, cases, or statutes..."
						className="flex-1"
					/>
					<Button
						type="submit"
						size="icon"
						disabled={!input.trim() || isLoading}
					>
						<Send className="h-4 w-4" />
						<span className="sr-only">Send</span>
					</Button>
				</form>
			</div>
		</div>
	);
}
