import { TemplatesGrid } from "./templates-grid";
import { TemplatesHeader } from "./templates-header";

export default function TemplatesPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<TemplatesHeader />
			<TemplatesGrid />
		</div>
	);
}
