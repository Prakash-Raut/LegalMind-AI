import { OrganizationSettings } from "@/components/profile/organization-settings";
import { ProfileForm } from "@/components/profile/profile-form";
import { ProfileHeader } from "@/components/profile/profile-header";

export default function ProfilePage() {
	return (
		<div className="flex flex-col gap-6 p-6">
			<ProfileHeader />
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<ProfileForm />
				<OrganizationSettings />
			</div>
		</div>
	);
}
