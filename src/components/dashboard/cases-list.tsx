import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
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
	},
	{
		id: "2",
		title: "Mehta Property Dispute",
		court: "Delhi High Court",
		nextHearing: "2023-06-22",
		status: "Active",
		type: "Civil",
	},
	{
		id: "3",
		title: "Patel Industries vs. Tax Authority",
		court: "Income Tax Appellate Tribunal",
		nextHearing: "2023-07-05",
		status: "Active",
		type: "Tax",
	},
	{
		id: "4",
		title: "Kumar Inheritance Case",
		court: "Family Court, Mumbai",
		nextHearing: "2023-06-18",
		status: "Active",
		type: "Family",
	},
	{
		id: "5",
		title: "Sharma vs. Delhi Municipal Corp",
		court: "Delhi High Court",
		nextHearing: "2023-06-30",
		status: "Active",
		type: "Administrative",
	},
];

export function CasesList() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Cases</CardTitle>
				<CardDescription>You have {cases.length} active cases</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Case Title</TableHead>
							<TableHead>Court</TableHead>
							<TableHead>Next Hearing</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{cases.map((caseItem) => (
							<TableRow key={caseItem.id}>
								<TableCell className="font-medium">
									<Link
										href={`/cases/${caseItem.id}`}
										className="hover:underline"
									>
										{caseItem.title}
									</Link>
								</TableCell>
								<TableCell>{caseItem.court}</TableCell>
								<TableCell>
									{new Date(caseItem.nextHearing).toLocaleDateString()}
								</TableCell>
								<TableCell>{caseItem.type}</TableCell>
								<TableCell>
									<Badge
										variant="outline"
										className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
									>
										{caseItem.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
