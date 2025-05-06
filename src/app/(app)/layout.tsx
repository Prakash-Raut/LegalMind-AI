import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { ChildrenProps } from "@/types";

const RootLayout = ({ children }: ChildrenProps) => {
	return (
		<SidebarProvider>
			<div className="flex min-h-screen w-full">
				<AppSidebar />
				<main className="flex-1">{children}</main>
			</div>
		</SidebarProvider>
	);
};

export default RootLayout;
