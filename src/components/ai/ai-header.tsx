import { Button } from "@/components/ui/button";
import { Mic, Settings } from "lucide-react";

export function AIHeader() {
	return (
		<div className="flex w-full items-center justify-between border-b p-4">
			<div>
				<h1 className="text-xl font-bold">AI Legal Assistant</h1>
				<p className="text-sm text-muted-foreground">
					Powered by Indian legal knowledge and case precedents
				</p>
			</div>
			<div className="flex gap-2">
				<Button variant="outline" size="icon">
					<Mic className="h-4 w-4" />
					<span className="sr-only">Voice Input</span>
				</Button>
				<Button variant="outline" size="icon">
					<Settings className="h-4 w-4" />
					<span className="sr-only">Settings</span>
				</Button>
			</div>
		</div>
	);
}
