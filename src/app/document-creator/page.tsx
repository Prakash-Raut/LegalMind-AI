import { DocumentCreator } from "@/components/document-creator/document-creator";
import { DocumentCreatorHeader } from "@/components/document-creator/document-creator-header";

export default function DocumentCreatorPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<DocumentCreatorHeader />
			<DocumentCreator />
		</div>
	);
}
