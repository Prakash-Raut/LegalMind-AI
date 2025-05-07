import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

// Sample data - would be fetched based on ID in a real app
const caseDetails = {
	id: "1",
	title: "Singh vs. State of Maharashtra",
	caseNumber: "CRI/2023/1234",
	court: "Bombay High Court",
	judge: "Hon. Justice Patel",
	filingDate: "2023-01-15",
	nextHearing: "2023-06-15",
	status: "Active",
	type: "Criminal",
	client: "Rajiv Singh",
	opposingParty: "State of Maharashtra",
	opposingCounsel: "Public Prosecutor Desai",
	description:
		"This case involves allegations of fraud under Section 420 of the Indian Penal Code. The client, Mr. Rajiv Singh, has been accused of financial misconduct in a business transaction. The defense is based on lack of fraudulent intent and procedural irregularities in the investigation.",
};

export function CaseDetails({ id }: { id: string }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Case Details</CardTitle>
				<CardDescription>Complete information about this case</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableBody>
						<TableRow>
							<TableCell className="font-medium">Case Number</TableCell>
							<TableCell>{caseDetails.caseNumber}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Court</TableCell>
							<TableCell>{caseDetails.court}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Judge</TableCell>
							<TableCell>{caseDetails.judge}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Filing Date</TableCell>
							<TableCell>
								{new Date(caseDetails.filingDate).toLocaleDateString()}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Next Hearing</TableCell>
							<TableCell>
								{new Date(caseDetails.nextHearing).toLocaleDateString()}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Client</TableCell>
							<TableCell>{caseDetails.client}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Opposing Party</TableCell>
							<TableCell>{caseDetails.opposingParty}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Opposing Counsel</TableCell>
							<TableCell>{caseDetails.opposingCounsel}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-medium">Description</TableCell>
							<TableCell className="whitespace-normal">
								{caseDetails.description}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
