import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import type { ChildrenProps } from "@/types";

const GlobalProvider = ({ children }: ChildrenProps) => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<SidebarProvider>
				<div className="flex min-h-screen w-full">
					<AppSidebar />
					<main className="flex-1">{children}</main>
				</div>
				<Toaster />
			</SidebarProvider>
		</ThemeProvider>
	);
};

export default GlobalProvider;
