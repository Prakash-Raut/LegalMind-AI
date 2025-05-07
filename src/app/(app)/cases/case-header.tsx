import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	ChevronLeft,
	FileUp,
	MessageSquare,
	MoreHorizontal,
	Share2,
} from "lucide-react";
import Link from "next/link";

// Sample data - would be fetched based on ID in a real app
const caseData = {
	id: "1",
	title: "Singh vs. State of Maharashtra",
	court: "Bombay High Court",
	nextHearing: "2023-06-15",
	status: "Active",
	type: "Criminal",
};

export function CaseHeader({ id }: { id: string }) {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div className="space-y-1">
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon" asChild>
						<Link href="/cases">
							<ChevronLeft className="h-4 w-4" />
							<span className="sr-only">Back</span>
						</Link>
					</Button>
					<h1 className="text-2xl font-bold tracking-tight">
						{caseData.title}
					</h1>
				</div>
				<div className="flex flex-wrap items-center gap-2">
					<Badge
						variant="outline"
						className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
					>
						{caseData.status}
					</Badge>
					<Badge variant="outline">{caseData.type}</Badge>
					<span className="text-sm text-muted-foreground">
						{caseData.court} • Next Hearing:{" "}
						{new Date(caseData.nextHearing).toLocaleDateString()}
					</span>
				</div>
			</div>
			<div className="flex gap-2">
				<Button variant="outline" size="sm">
					<FileUp className="mr-2 h-4 w-4" />
					Upload
				</Button>
				<Button variant="outline" size="sm">
					<MessageSquare className="mr-2 h-4 w-4" />
					Add Note
				</Button>
				<Button variant="outline" size="sm">
					<Share2 className="mr-2 h-4 w-4" />
					Share
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon" className="h-9 w-9">
							<MoreHorizontal className="h-4 w-4" />
							<span className="sr-only">More</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Edit case</DropdownMenuItem>
						<DropdownMenuItem>Archive case</DropdownMenuItem>
						<DropdownMenuItem>Export as PDF</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
