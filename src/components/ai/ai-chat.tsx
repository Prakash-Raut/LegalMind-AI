"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mic, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
	id: string;
	content: string;
	role: "user" | "assistant";
	timestamp: Date;
};

// Sample initial messages
const initialMessages: Message[] = [
	{
		id: "1",
		content:
			"Hello! I'm your AI legal assistant specialized in Indian law. How can I help you today?",
		role: "assistant",
		timestamp: new Date(),
	},
];

export function AIChat() {
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
			};
			setMessages((prev) => [...prev, aiResponse]);
			setIsLoading(false);
		}, 1500);
	};

	// Simple function to generate responses based on keywords
	const generateAIResponse = (query: string): string => {
		const lowerQuery = query.toLowerCase();

		if (lowerQuery.includes("section 420") || lowerQuery.includes("fraud")) {
			return "Section 420 of the Indian Penal Code deals with cheating and dishonestly inducing delivery of property. The essential elements include: (1) Cheating, (2) Dishonest inducement to deliver property, and (3) Mens rea (criminal intent). Recent Supreme Court judgments have emphasized that mere breach of contract does not constitute cheating under Section 420 unless fraudulent or dishonest intention is present from the beginning of the transaction.";
		}
		if (lowerQuery.includes("bail") || lowerQuery.includes("anticipatory")) {
			return "For bail applications in India, refer to Section 437 and 439 of CrPC. The Supreme Court in 'Arnab Manoranjan Goswami vs State of Maharashtra' (2020) emphasized that liberty is not a gift but a right, and bail should be the rule, jail the exception. For anticipatory bail, Section 438 of CrPC applies, with the landmark case 'Siddharam Satlingappa Mhetre vs State of Maharashtra' providing guidelines.";
		}
		if (lowerQuery.includes("evidence") || lowerQuery.includes("witness")) {
			return "The Indian Evidence Act, 1872 governs the admissibility of evidence in Indian courts. Digital evidence is now recognized under Section 65B, requiring a certificate for admissibility as per the Supreme Court judgment in 'Arjun Panditrao Khotkar vs Kailash Kushanrao Gorantyal' (2020). For witness testimony, hostile witnesses can still provide valuable evidence as held in 'Sat Paul vs Delhi Administration'.";
		}
		if (lowerQuery.includes("contract") || lowerQuery.includes("agreement")) {
			return "I understand your query about Indian law. To provide more specific guidance, could you please provide more details about your legal question? I'm trained on Indian legal precedents, statutes, and case law, and can help with various legal domains including criminal, civil, constitutional, and commercial law.";
		}

		return "";
	};

	return (
		<div className="flex flex-1 flex-col">
			<div className="flex-1 overflow-y-auto p-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
						className={cn(
							"flex items-start gap-3 max-w-[80%]",
							message.role === "user" ? "justify-end" : "",
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
							<p className="text-sm">{message.content}</p>
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
					<div className="flex items-start gap-3 max-w-[80%]">
						<Avatar className="h-8 w-8">
							<AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
							<AvatarFallback>AI</AvatarFallback>
						</Avatar>
						<div className="rounded-lg bg-muted p-3">
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
						</div>
					</div>
				)}
				<div ref={messagesEndRef} />
			</div>
			<div className="border-t p-4 w-full">
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
						placeholder="Ask about Indian law, cases, or legal procedures..."
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
