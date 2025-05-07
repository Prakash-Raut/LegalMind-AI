import { LegalResearchChat } from "./legal-research-chat";
import { LegalResearchHeader } from "./legal-research-header";

export default function LegalResearchPage() {
	return (
		<div className="flex flex-col h-screen">
			<LegalResearchHeader />
			<LegalResearchChat />
		</div>
	);
}
