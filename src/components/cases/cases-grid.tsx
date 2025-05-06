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
import {
	Calendar,
	FileText,
	MapPin,
	MoreHorizontal,
	User2,
} from "lucide-react";
import Link from "next/link";

// Sample data
const cases = [
	{
		id: "1",
		title: "Singh vs. State of Maharashtra",
		court: "Bombay High Court",
		nextHearing: "2023-06-15",
		status: "Active",
		type: "Criminal",
		client: "Rajiv Singh",
		documents: 12,
		location: "Mumbai",
	},
	{
		id: "2",
		title: "Mehta Property Dispute",
		court: "Delhi High Court",
		nextHearing: "2023-06-22",
		status: "Active",
		type: "Civil",
		client: "Anil Mehta",
		documents: 8,
		location: "Delhi",
	},
	{
		id: "3",
		title: "Patel Industries vs. Tax Authority",
		court: "Income Tax Appellate Tribunal",
		nextHearing: "2023-07-05",
		status: "Active",
		type: "Tax",
		client: "Patel Industries Ltd.",
		documents: 15,
		location: "Ahmedabad",
	},
	{
		id: "4",
		title: "Kumar Inheritance Case",
		court: "Family Court, Mumbai",
		nextHearing: "2023-06-18",
		status: "Active",
		type: "Family",
		client: "Sunita Kumar",
		documents: 6,
		location: "Mumbai",
	},
	{
		id: "5",
		title: "Sharma vs. Delhi Municipal Corp",
		court: "Delhi High Court",
		nextHearing: "2023-06-30",
		status: "Active",
		type: "Administrative",
		client: "Vikram Sharma",
		documents: 10,
		location: "Delhi",
	},
	{
		id: "6",
		title: "Joshi Consumer Complaint",
		court: "Consumer Forum",
		nextHearing: "2023-07-12",
		status: "Active",
		type: "Consumer",
		client: "Meera Joshi",
		documents: 4,
		location: "Pune",
	},
];

export function CasesGrid() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{cases.map((caseItem) => (
				<Card key={caseItem.id} className="overflow-hidden">
					<CardHeader className="pb-2">
						<div className="flex items-start justify-between">
							<CardTitle className="text-lg">
								<Link
									href={`/cases/${caseItem.id}`}
									className="hover:underline"
								>
									{caseItem.title}
								</Link>
							</CardTitle>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon" className="h-8 w-8">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>View details</DropdownMenuItem>
									<DropdownMenuItem>Edit case</DropdownMenuItem>
									<DropdownMenuItem>Archive case</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<div className="flex flex-wrap gap-2 pt-1">
							<Badge
								variant="outline"
								className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
							>
								{caseItem.status}
							</Badge>
							<Badge variant="outline">{caseItem.type}</Badge>
						</div>
					</CardHeader>
					<CardContent className="pb-2">
						<div className="space-y-2 text-sm">
							<div className="flex items-center text-muted-foreground">
								<MapPin className="mr-1 h-3.5 w-3.5" />
								{caseItem.court}, {caseItem.location}
							</div>
							<div className="flex items-center text-muted-foreground">
								<Calendar className="mr-1 h-3.5 w-3.5" />
								Next Hearing:{" "}
								{new Date(caseItem.nextHearing).toLocaleDateString()}
							</div>
							<div className="flex items-center text-muted-foreground">
								<User2 className="mr-1 h-3.5 w-3.5" />
								Client: {caseItem.client}
							</div>
							<div className="flex items-center text-muted-foreground">
								<FileText className="mr-1 h-3.5 w-3.5" />
								{caseItem.documents} Documents
							</div>
						</div>
					</CardContent>
					<CardFooter>
						<Button variant="outline" asChild className="w-full">
							<Link href={`/cases/${caseItem.id}`}>View Case Details</Link>
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
