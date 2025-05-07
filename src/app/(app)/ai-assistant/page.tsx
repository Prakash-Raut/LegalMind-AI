import { AIChat } from "./ai-chat";
import { AIHeader } from "./ai-header";

export default function AIAssistantPage() {
	return (
		<div className="flex flex-col h-full">
			<AIHeader />
			<AIChat />
		</div>
	);
}
