import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

// Sample data - would be fetched based on ID in a real app
const timelineEvents = [
	{
		id: "1",
		date: "2023-01-15",
		title: "Case Filed",
		description:
			"First Information Report (FIR) filed at Mumbai Central Police Station",
	},
	{
		id: "2",
		date: "2023-02-10",
		title: "Charge Sheet Filed",
		description: "Prosecution submitted charge sheet to the court",
	},
	{
		id: "3",
		date: "2023-02-15",
		title: "Bail Application",
		description: "Bail application filed on behalf of the client",
	},
	{
		id: "4",
		date: "2023-03-05",
		title: "Bail Granted",
		description:
			"Court granted bail with conditions to report to police station weekly",
	},
	{
		id: "5",
		date: "2023-04-20",
		title: "First Hearing",
		description: "Prosecution presented initial arguments, case adjourned",
	},
	{
		id: "6",
		date: "2023-05-18",
		title: "Evidence Submission",
		description: "Defense submitted counter-evidence and witness statements",
	},
];

export function CaseTimeline({ id }: { id: string }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Case Timeline</CardTitle>
				<CardDescription>Chronological history of case events</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="relative ml-3 space-y-4 border-l pl-6 pt-2">
					{timelineEvents.map((event) => (
						<div key={event.id} className="relative pb-4">
							<div className="absolute -left-[31px] h-6 w-6 rounded-full border bg-background" />
							<div className="mb-1 text-sm font-semibold">{event.title}</div>
							<time className="mb-2 block text-xs text-muted-foreground">
								{new Date(event.date).toLocaleDateString()}
							</time>
							<p className="text-sm text-muted-foreground">
								{event.description}
							</p>
						</div>
					))}
					<div className="absolute -left-[28px] h-6 w-6 rounded-full border border-dashed bg-background" />
					<div className="relative pb-4">
						<div className="mb-1 text-sm font-semibold">Next Hearing</div>
						<time className="mb-2 block text-xs text-muted-foreground">
							June 15, 2023
						</time>
						<p className="text-sm text-muted-foreground">
							Scheduled for witness examination
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
