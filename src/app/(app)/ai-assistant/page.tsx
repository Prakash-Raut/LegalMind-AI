import { AIChat } from "@/components/ai/ai-chat";
import { AIHeader } from "@/components/ai/ai-header";

export default function AIAssistantPage() {
	return (
		<div className="flex flex-col h-full">
			<AIHeader />
			<AIChat />
		</div>
	);
}
