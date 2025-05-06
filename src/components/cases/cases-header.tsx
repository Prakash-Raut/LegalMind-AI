import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Search } from "lucide-react";

export function CasesHeader() {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 className="text-2xl font-bold tracking-tight">Cases</h1>
				<p className="text-muted-foreground">
					Manage and track all your legal cases
				</p>
			</div>
			<div className="flex flex-col gap-2 sm:flex-row">
				<div className="flex items-center gap-2">
					<div className="relative w-full sm:w-64">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search cases..."
							className="pl-8"
						/>
					</div>
					<Select defaultValue="all">
						<SelectTrigger className="w-[120px]">
							<SelectValue placeholder="Filter" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Cases</SelectItem>
							<SelectItem value="active">Active</SelectItem>
							<SelectItem value="closed">Closed</SelectItem>
							<SelectItem value="pending">Pending</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<Button>
					<PlusCircle className="mr-2 h-4 w-4" />
					New Case
				</Button>
			</div>
		</div>
	);
}
