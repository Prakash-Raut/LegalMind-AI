import { ThemeProvider } from "@/components/theme-provider";
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
			{children}
			<Toaster />
		</ThemeProvider>
	);
};

export default GlobalProvider;
