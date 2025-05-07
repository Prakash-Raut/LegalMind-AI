import { AnalyticsDashboard } from "./analytics-dashboard";
import { AnalyticsHeader } from "./analytics-header";

export default function AnalyticsPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<AnalyticsHeader />
			<AnalyticsDashboard />
		</div>
	);
}
