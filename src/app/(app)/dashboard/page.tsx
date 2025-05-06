import { CasesList } from "@/components/dashboard/cases-list";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardMetrics } from "@/components/dashboard/dashboard-metrics";
import { RecentActivity } from "@/components/dashboard/recent-activity";

export default function DashboardPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<DashboardHeader />
			<DashboardMetrics />
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2">
					<CasesList />
				</div>
				<div>
					<RecentActivity />
				</div>
			</div>
		</div>
	);
}
