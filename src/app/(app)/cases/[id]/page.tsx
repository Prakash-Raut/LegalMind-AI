import { CaseDetails } from "../case-details";
import { CaseDocuments } from "../case-documents";
import { CaseHeader } from "../case-header";
import { CaseNotes } from "../case-notes";
import { CaseTimeline } from "../case-timeline";

type CaseDetailPageProps = {
	params: Promise<{ id: string }>;
};

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
	const { id } = await params;

	return (
		<div className="flex flex-col gap-6 p-6">
			<CaseHeader id={id} />
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2 space-y-6">
					<CaseDetails id={id} />
					<CaseTimeline id={id} />
				</div>
				<div className="space-y-6">
					<CaseDocuments id={id} />
					<CaseNotes id={id} />
				</div>
			</div>
		</div>
	);
}
