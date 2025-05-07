"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseStatusChart } from "./case-status-chart";
import { CaseTimeline } from "./case-timeline";
import { CaseTypeDistribution } from "./case-type-distribution";
import { ClientMetrics } from "./client-metrics";
import { CourtPerformance } from "./court-performance";
import { DocumentAnalytics } from "./document-analytics";

export function AnalyticsDashboard() {
	return (
		<Tabs defaultValue="overview" className="space-y-4">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="cases">Cases</TabsTrigger>
				<TabsTrigger value="documents">Documents</TabsTrigger>
				<TabsTrigger value="clients">Clients</TabsTrigger>
			</TabsList>
			<TabsContent value="overview" className="space-y-4">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Total Cases</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">67</div>
							<p className="text-xs text-muted-foreground">
								+12% from last year
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Success Rate
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">78%</div>
							<p className="text-xs text-muted-foreground">
								+5% from previous year
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Avg. Case Duration
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">14.2 months</div>
							<p className="text-xs text-muted-foreground">
								-2.3 months from average
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Revenue</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">₹42.8L</div>
							<p className="text-xs text-muted-foreground">
								+18% from last year
							</p>
						</CardContent>
					</Card>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card className="lg:col-span-4">
						<CardHeader>
							<CardTitle>Case Timeline</CardTitle>
							<CardDescription>
								Number of cases filed and resolved over time
							</CardDescription>
						</CardHeader>
						<CardContent className="pl-2">
							<CaseTimeline />
						</CardContent>
					</Card>
					<Card className="lg:col-span-3">
						<CardHeader>
							<CardTitle>Case Status</CardTitle>
							<CardDescription>Current status of all cases</CardDescription>
						</CardHeader>
						<CardContent>
							<CaseStatusChart />
						</CardContent>
					</Card>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card className="lg:col-span-3">
						<CardHeader>
							<CardTitle>Case Type Distribution</CardTitle>
							<CardDescription>Breakdown by legal category</CardDescription>
						</CardHeader>
						<CardContent>
							<CaseTypeDistribution />
						</CardContent>
					</Card>
					<Card className="lg:col-span-4">
						<CardHeader>
							<CardTitle>Court Performance</CardTitle>
							<CardDescription>Success rate by court</CardDescription>
						</CardHeader>
						<CardContent className="pl-2">
							<CourtPerformance />
						</CardContent>
					</Card>
				</div>
			</TabsContent>
			<TabsContent value="cases" className="space-y-4">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Card className="lg:col-span-2">
						<CardHeader>
							<CardTitle>Case Timeline</CardTitle>
							<CardDescription>
								Number of cases filed and resolved over time
							</CardDescription>
						</CardHeader>
						<CardContent className="pl-2">
							<CaseTimeline />
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Case Status</CardTitle>
							<CardDescription>Current status of all cases</CardDescription>
						</CardHeader>
						<CardContent>
							<CaseStatusChart />
						</CardContent>
					</Card>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Case Type Distribution</CardTitle>
							<CardDescription>Breakdown by legal category</CardDescription>
						</CardHeader>
						<CardContent>
							<CaseTypeDistribution />
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Court Performance</CardTitle>
							<CardDescription>Success rate by court</CardDescription>
						</CardHeader>
						<CardContent className="pl-2">
							<CourtPerformance />
						</CardContent>
					</Card>
				</div>
			</TabsContent>
			<TabsContent value="documents" className="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle>Document Analytics</CardTitle>
						<CardDescription>
							Document usage and performance metrics
						</CardDescription>
					</CardHeader>
					<CardContent>
						<DocumentAnalytics />
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="clients" className="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle>Client Metrics</CardTitle>
						<CardDescription>
							Client acquisition and retention data
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ClientMetrics />
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
