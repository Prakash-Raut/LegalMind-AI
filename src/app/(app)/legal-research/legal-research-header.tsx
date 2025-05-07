import { Button } from "@/components/ui/button";
import { BookOpen, History, Save } from "lucide-react";

export function LegalResearchHeader() {
	return (
		<div className="flex items-center justify-between border-b p-4">
			<div>
				<h1 className="text-xl font-bold">Legal Research</h1>
				<p className="text-sm text-muted-foreground">
					Search the web for legal information and precedents
				</p>
			</div>
			<div className="flex gap-2">
				<Button variant="outline" size="sm">
					<History className="mr-2 h-4 w-4" />
					History
				</Button>
				<Button variant="outline" size="sm">
					<Save className="mr-2 h-4 w-4" />
					Save Research
				</Button>
				<Button size="sm">
					<BookOpen className="mr-2 h-4 w-4" />
					Browse Cases
				</Button>
			</div>
		</div>
	);
}
