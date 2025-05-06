"use client";

import { LegalScales } from "@/components/icons/legal-scales";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import {
	BarChart3,
	BookOpen,
	CreditCard,
	FileSpreadsheet,
	FileText,
	FolderOpen,
	Home,
	MessageSquare,
	Settings,
	User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar() {
	const pathname = usePathname();

	const menuItems = [
		{
			title: "Dashboard",
			icon: Home,
			href: "/dashboard",
		},
		{
			title: "Cases",
			icon: FolderOpen,
			href: "/cases",
		},
		{
			title: "AI Assistant",
			icon: MessageSquare,
			href: "/ai-assistant",
		},
		{
			title: "Document Creator",
			icon: FileText,
			href: "/document-creator",
		},
		{
			title: "Templates",
			icon: FileSpreadsheet,
			href: "/templates",
		},
		{
			title: "Legal Research",
			icon: BookOpen,
			href: "/legal-research",
		},
		{
			title: "Analytics",
			icon: BarChart3,
			href: "/analytics",
		},
	];

	const footerItems = [
		{
			title: "Profile",
			icon: User,
			href: "/profile",
		},
		{
			title: "Pricing",
			icon: CreditCard,
			href: "/pricing",
		},
		{
			title: "Settings",
			icon: Settings,
			href: "/settings",
		},
	];

	return (
		<Sidebar>
			<SidebarHeader className="flex items-center gap-2 px-4 py-2">
				<LegalScales className="h-6 w-6" />
				<span className="text-lg font-bold">LegalMind AI</span>
				<div className="ml-auto">
					<SidebarTrigger />
				</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Main</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.href}>
									<SidebarMenuButton
										asChild
										isActive={pathname === item.href}
										tooltip={item.title}
									>
										<Link href={item.href}>
											<item.icon className="h-4 w-4" />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					{footerItems.map((item) => (
						<SidebarMenuItem key={item.href}>
							<SidebarMenuButton
								asChild
								isActive={pathname === item.href}
								tooltip={item.title}
							>
								<Link href={item.href}>
									<item.icon className="h-4 w-4" />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
