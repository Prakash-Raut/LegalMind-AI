import { TemplatesGrid } from "@/components/templates/templates-grid";
import { TemplatesHeader } from "@/components/templates/templates-header";

export default function TemplatesPage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<TemplatesHeader />
			<TemplatesGrid />
		</div>
	);
}
