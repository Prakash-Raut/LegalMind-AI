"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "sonner";

export function SettingsTabs() {
	const [isLoading, setIsLoading] = useState(false);

	const handleSave = () => {
		setIsLoading(true);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			toast.message("Settings saved", {
				description: "Your settings have been updated successfully",
			});
		}, 1500);
	};

	return (
		<Tabs defaultValue="general" className="w-full">
			<TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
				<TabsTrigger value="general">General</TabsTrigger>
				<TabsTrigger value="notifications">Notifications</TabsTrigger>
				<TabsTrigger value="security">Security</TabsTrigger>
				<TabsTrigger value="ai">AI Settings</TabsTrigger>
			</TabsList>

			<TabsContent value="general">
				<Card>
					<CardHeader>
						<CardTitle>General Settings</CardTitle>
						<CardDescription>
							Manage your general application preferences
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="language">Language</Label>
							<select
								id="language"
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							>
								<option value="en-IN">English (India)</option>
								<option value="hi-IN">Hindi</option>
								<option value="mr-IN">Marathi</option>
								<option value="gu-IN">Gujarati</option>
								<option value="ta-IN">Tamil</option>
							</select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="timezone">Timezone</Label>
							<select
								id="timezone"
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							>
								<option value="Asia/Kolkata">India Standard Time (IST)</option>
								<option value="UTC">Coordinated Universal Time (UTC)</option>
							</select>
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="dark-mode">Dark Mode</Label>
								<p className="text-sm text-muted-foreground">
									Enable dark mode for the application
								</p>
							</div>
							<Switch id="dark-mode" />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="auto-save">Auto Save</Label>
								<p className="text-sm text-muted-foreground">
									Automatically save documents while editing
								</p>
							</div>
							<Switch id="auto-save" defaultChecked />
						</div>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button onClick={handleSave} disabled={isLoading}>
							{isLoading ? "Saving..." : "Save Changes"}
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>

			<TabsContent value="notifications">
				<Card>
					<CardHeader>
						<CardTitle>Notification Settings</CardTitle>
						<CardDescription>
							Manage how you receive notifications
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="email-notifications">Email Notifications</Label>
								<p className="text-sm text-muted-foreground">
									Receive notifications via email
								</p>
							</div>
							<Switch id="email-notifications" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="push-notifications">Push Notifications</Label>
								<p className="text-sm text-muted-foreground">
									Receive notifications on your device
								</p>
							</div>
							<Switch id="push-notifications" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="hearing-reminders">Hearing Reminders</Label>
								<p className="text-sm text-muted-foreground">
									Get reminders for upcoming hearings
								</p>
							</div>
							<Switch id="hearing-reminders" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="document-updates">Document Updates</Label>
								<p className="text-sm text-muted-foreground">
									Notifications when documents are updated
								</p>
							</div>
							<Switch id="document-updates" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="case-updates">Case Updates</Label>
								<p className="text-sm text-muted-foreground">
									Notifications for case status changes
								</p>
							</div>
							<Switch id="case-updates" defaultChecked />
						</div>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button onClick={handleSave} disabled={isLoading}>
							{isLoading ? "Saving..." : "Save Changes"}
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>

			<TabsContent value="security">
				<Card>
					<CardHeader>
						<CardTitle>Security Settings</CardTitle>
						<CardDescription>
							Manage your account security and authentication
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="current-password">Current Password</Label>
							<Input id="current-password" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="new-password">New Password</Label>
							<Input id="new-password" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="confirm-password">Confirm New Password</Label>
							<Input id="confirm-password" type="password" />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="two-factor">Two-Factor Authentication</Label>
								<p className="text-sm text-muted-foreground">
									Add an extra layer of security to your account
								</p>
							</div>
							<Switch id="two-factor" />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="session-timeout">Session Timeout</Label>
								<p className="text-sm text-muted-foreground">
									Automatically log out after 30 minutes of inactivity
								</p>
							</div>
							<Switch id="session-timeout" defaultChecked />
						</div>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button onClick={handleSave} disabled={isLoading}>
							{isLoading ? "Saving..." : "Save Changes"}
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>

			<TabsContent value="ai">
				<Card>
					<CardHeader>
						<CardTitle>AI Settings</CardTitle>
						<CardDescription>
							Configure your AI assistant preferences
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="ai-model">AI Model</Label>
							<select
								id="ai-model"
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							>
								<option value="standard">Standard (Default)</option>
								<option value="advanced">Advanced</option>
								<option value="expert">Expert Legal</option>
							</select>
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="voice-recognition">Voice Recognition</Label>
								<p className="text-sm text-muted-foreground">
									Enable voice commands and dictation
								</p>
							</div>
							<Switch id="voice-recognition" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="case-suggestions">Case Suggestions</Label>
								<p className="text-sm text-muted-foreground">
									Get AI-powered suggestions for your cases
								</p>
							</div>
							<Switch id="case-suggestions" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="precedent-search">Precedent Search</Label>
								<p className="text-sm text-muted-foreground">
									Automatically search for relevant case precedents
								</p>
							</div>
							<Switch id="precedent-search" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div className="space-y-0.5">
								<Label htmlFor="data-sharing">Data Sharing</Label>
								<p className="text-sm text-muted-foreground">
									Share anonymized data to improve AI capabilities
								</p>
							</div>
							<Switch id="data-sharing" />
						</div>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button onClick={handleSave} disabled={isLoading}>
							{isLoading ? "Saving..." : "Save Changes"}
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
