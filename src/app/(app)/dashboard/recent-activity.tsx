import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

// Sample data
const activities = [
	{
		id: "1",
		user: {
			name: "Rajesh Kumar",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "RK",
		},
		action: "added a new document",
		case: "Singh vs. State of Maharashtra",
		time: "2 hours ago",
	},
	{
		id: "2",
		user: {
			name: "Priya Sharma",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "PS",
		},
		action: "scheduled a hearing",
		case: "Mehta Property Dispute",
		time: "4 hours ago",
	},
	{
		id: "3",
		user: {
			name: "Amit Patel",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "AP",
		},
		action: "added case notes",
		case: "Patel Industries vs. Tax Authority",
		time: "Yesterday",
	},
	{
		id: "4",
		user: {
			name: "Neha Gupta",
			avatar: "/placeholder.svg?height=32&width=32",
			initials: "NG",
		},
		action: "uploaded court order",
		case: "Kumar Inheritance Case",
		time: "Yesterday",
	},
];

export function RecentActivity() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
				<CardDescription>Latest updates from your team</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{activities.map((activity) => (
						<div key={activity.id} className="flex items-start gap-4">
							<Avatar className="h-8 w-8">
								<AvatarImage
									src={activity.user.avatar || "/placeholder.svg"}
									alt={activity.user.name}
								/>
								<AvatarFallback>{activity.user.initials}</AvatarFallback>
							</Avatar>
							<div className="space-y-1">
								<p className="text-sm font-medium leading-none">
									{activity.user.name} {activity.action}
								</p>
								<p className="text-sm text-muted-foreground">{activity.case}</p>
								<p className="text-xs text-muted-foreground">{activity.time}</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
