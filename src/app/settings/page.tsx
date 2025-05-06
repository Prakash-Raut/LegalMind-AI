import { SettingsHeader } from "@/components/settings/settings-header";
import { SettingsTabs } from "@/components/settings/settings-tabs";

export default function SettingsPage() {
	return (
		<div className="flex flex-col w-full gap-6 p-6">
			<SettingsHeader />
			<SettingsTabs />
		</div>
	);
}
