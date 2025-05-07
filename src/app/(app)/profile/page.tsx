import { OrganizationSettings } from "./organization-settings";
import { ProfileForm } from "./profile-form";
import { ProfileHeader } from "./profile-header";

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
