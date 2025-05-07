import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Download, Share2 } from "lucide-react";

export function AnalyticsHeader() {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
				<p className="text-muted-foreground">
					Track your case performance and legal metrics
				</p>
			</div>
			<div className="flex flex-col gap-2 sm:flex-row">
				<Select defaultValue="6months">
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select time period" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="30days">Last 30 days</SelectItem>
						<SelectItem value="3months">Last 3 months</SelectItem>
						<SelectItem value="6months">Last 6 months</SelectItem>
						<SelectItem value="1year">Last year</SelectItem>
						<SelectItem value="all">All time</SelectItem>
					</SelectContent>
				</Select>
				<Button variant="outline">
					<Download className="mr-2 h-4 w-4" />
					Export
				</Button>
				<Button variant="outline">
					<Share2 className="mr-2 h-4 w-4" />
					Share
				</Button>
			</div>
		</div>
	);
}
