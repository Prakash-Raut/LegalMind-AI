import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, FileText, MoreHorizontal, Star } from "lucide-react";
import Link from "next/link";

// Sample data
const templates = [
	{
		id: "1",
		title: "Writ Petition (Article 226)",
		description:
			"Standard format for filing writ petitions under Article 226 in High Courts",
		category: "Petition",
		court: "High Court",
		rating: 4.8,
		downloads: 1250,
		lastUpdated: "2023-03-15",
	},
	{
		id: "2",
		title: "Bail Application",
		description: "Format for regular bail application under Section 439 CrPC",
		category: "Application",
		court: "Sessions Court",
		rating: 4.7,
		downloads: 980,
		lastUpdated: "2023-04-10",
	},
	{
		id: "3",
		title: "Affidavit Format",
		description: "General affidavit format accepted in all courts across India",
		category: "Affidavit",
		court: "All Courts",
		rating: 4.9,
		downloads: 1560,
		lastUpdated: "2023-02-22",
	},
	{
		id: "4",
		title: "Legal Notice Template",
		description: "Standard legal notice format for civil disputes",
		category: "Notice",
		court: "N/A",
		rating: 4.6,
		downloads: 870,
		lastUpdated: "2023-05-25",
	},
	{
		id: "5",
		title: "Rent Agreement",
		description: "Comprehensive residential rent agreement template",
		category: "Agreement",
		court: "N/A",
		rating: 4.8,
		downloads: 1320,
		lastUpdated: "2023-01-18",
	},
	{
		id: "6",
		title: "Special Leave Petition",
		description: "Format for filing SLP under Article 136 in Supreme Court",
		category: "Petition",
		court: "Supreme Court",
		rating: 4.7,
		downloads: 750,
		lastUpdated: "2023-04-28",
	},
	{
		id: "7",
		title: "Will Template",
		description: "Legally valid will format with testamentary clauses",
		category: "Will",
		court: "N/A",
		rating: 4.9,
		downloads: 980,
		lastUpdated: "2023-03-12",
	},
	{
		id: "8",
		title: "Consumer Complaint",
		description: "Format for filing complaints in Consumer Forums",
		category: "Complaint",
		court: "Consumer Forum",
		rating: 4.5,
		downloads: 680,
		lastUpdated: "2023-05-15",
	},
];

export function TemplatesGrid() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{templates.map((template) => (
				<Card key={template.id} className="overflow-hidden">
					<CardHeader className="pb-2">
						<div className="flex items-start justify-between">
							<CardTitle className="text-lg">{template.title}</CardTitle>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon" className="h-8 w-8">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Preview</DropdownMenuItem>
									<DropdownMenuItem>Download</DropdownMenuItem>
									<DropdownMenuItem>Share</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="flex flex-wrap gap-2 pt-1">
							<Badge variant="outline">{template.category}</Badge>
							{template.court !== "N/A" && (
								<Badge variant="outline">{template.court}</Badge>
							)}
						</div>
					</CardHeader>
					<CardContent className="pb-2">
						<p className="text-sm text-muted-foreground">
							{template.description}
						</p>
						<div className="mt-3 flex items-center text-sm text-muted-foreground">
							<div className="flex items-center">
								<Star className="mr-1 h-3.5 w-3.5 fill-current text-yellow-500" />
								<span>{template.rating}</span>
							</div>
							<span className="mx-2">•</span>
							<div className="flex items-center">
								<Download className="mr-1 h-3.5 w-3.5" />
								<span>{template.downloads}</span>
							</div>
							<span className="mx-2">•</span>
							<span>
								Updated: {new Date(template.lastUpdated).toLocaleDateString()}
							</span>
						</div>
					</CardContent>
					<CardFooter>
						<Button variant="outline" className="w-full" asChild>
							<Link href={`/document-creator?template=${template.id}`}>
								<FileText className="mr-2 h-4 w-4" />
								Use Template
							</Link>
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
