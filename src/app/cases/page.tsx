import { CasesGrid } from "@/components/cases/cases-grid";
import { CasesHeader } from "@/components/cases/cases-header";

export default function CasesPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<CasesHeader />
			<CasesGrid />
		</div>
	);
}
