import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";

export function DocumentCreatorHeader() {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Document Creator</h1>
				<p className="text-muted-foreground">
					Create legal documents with AI assistance
				</p>
			</div>
			<div className="flex flex-col gap-2 sm:flex-row">
				<Select defaultValue="petition">
					<SelectTrigger className="w-[200px]">
						<SelectValue placeholder="Select template" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="petition">Petition</SelectItem>
						<SelectItem value="affidavit">Affidavit</SelectItem>
						<SelectItem value="agreement">Legal Agreement</SelectItem>
						<SelectItem value="notice">Legal Notice</SelectItem>
						<SelectItem value="will">Will</SelectItem>
					</SelectContent>
				</Select>
				<Button>
					<Save className="mr-2 h-4 w-4" />
					Save Document
				</Button>
			</div>
		</div>
	);
}
