import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentAnalysis } from "../cases/document-analysis";
import { DocumentEditor } from "../cases/document-editor";
import { DocumentCreator } from "./document-creator";
import { DocumentCreatorHeader } from "./document-creator-header";

export default function DocumentCreatorPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<DocumentCreatorHeader />
			<Tabs defaultValue="create" className="w-full">
				<TabsList>
					<TabsTrigger value="create">Create New Document</TabsTrigger>
					<TabsTrigger value="edit">Edit Existing Document</TabsTrigger>
					<TabsTrigger value="analyze">Analyze Document</TabsTrigger>
				</TabsList>
				<TabsContent value="create">
					<DocumentCreator />
				</TabsContent>
				<TabsContent value="edit">
					<DocumentEditor />
				</TabsContent>
				<TabsContent value="analyze">
					<DocumentAnalysis />
				</TabsContent>
			</Tabs>
		</div>
	);
}
