import { LegalScales } from "@/components/icons/legal-scales";
import Link from "next/link";
import { SignupForm } from "./signup-form";

export default function SignupPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
			<div className="w-full max-w-md space-y-6">
				<div className="flex flex-col items-center space-y-2 text-center">
					<LegalScales className="h-12 w-12" />
					<h1 className="text-3xl font-bold">LegalMind AI</h1>
					<p className="text-sm text-muted-foreground">
						Create an account to get started
					</p>
				</div>
				<SignupForm />
				<div className="text-center text-sm">
					Already have an account?{" "}
					<Link
						href="/login"
						className="underline underline-offset-4 hover:text-primary"
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	);
}
