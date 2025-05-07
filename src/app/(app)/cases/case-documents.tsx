import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Eye, FileText, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { DocumentUploadModal } from "./document-upload-modal";

// Sample data - would be fetched based on ID in a real app
const documents = [
	{
		id: "1",
		name: "First Information Report",
		type: "PDF",
		size: "1.2 MB",
		uploadedAt: "2023-01-15",
		url: "#",
	},
	{
		id: "2",
		name: "Charge Sheet",
		type: "PDF",
		size: "2.5 MB",
		uploadedAt: "2023-02-10",
		url: "#",
	},
	{
		id: "3",
		name: "Bail Application",
		type: "DOCX",
		size: "850 KB",
		uploadedAt: "2023-02-15",
		url: "#",
	},
	{
		id: "4",
		name: "Court Order - Bail",
		type: "PDF",
		size: "1.1 MB",
		uploadedAt: "2023-03-05",
		url: "#",
	},
];

export function CaseDocuments({ id }: { id: string }) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<div className="space-y-1">
					<CardTitle>Documents</CardTitle>
					<CardDescription>
						{documents.length} documents attached to this case
					</CardDescription>
				</div>
				<DocumentUploadModal />
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					{documents.map((doc) => (
						<div
							key={doc.id}
							className="flex items-center justify-between rounded-md border p-2"
						>
							<div className="flex items-center gap-2">
								<FileText className="h-5 w-5 text-muted-foreground" />
								<div>
									<p className="text-sm font-medium">{doc.name}</p>
									<p className="text-xs text-muted-foreground">
										{doc.type} • {doc.size} •{" "}
										{new Date(doc.uploadedAt).toLocaleDateString()}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-1">
								<Button variant="ghost" size="icon" className="h-8 w-8" asChild>
									<Link href={doc.url} target="_blank">
										<Eye className="h-4 w-4" />
										<span className="sr-only">View</span>
									</Link>
								</Button>
								<Button variant="ghost" size="icon" className="h-8 w-8">
									<Download className="h-4 w-4" />
									<span className="sr-only">Download</span>
								</Button>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="ghost" size="icon" className="h-8 w-8">
											<MoreHorizontal className="h-4 w-4" />
											<span className="sr-only">More</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem>Rename</DropdownMenuItem>
										<DropdownMenuItem>Replace</DropdownMenuItem>
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
