import { NewCaseButton } from "../cases/new-case-button";

export function DashboardHeader() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
				<p className="text-muted-foreground">Welcome back, Advocate Sharma</p>
			</div>
			<NewCaseButton />
		</div>
	);
}
