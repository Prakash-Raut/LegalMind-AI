import { CasesGrid } from "./cases-grid";
import { CasesHeader } from "./cases-header";

export default function CasesPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<CasesHeader />
			<CasesGrid />
		</div>
	);
}
