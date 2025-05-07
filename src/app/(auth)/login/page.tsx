import { LegalScales } from "@/components/icons/legal-scales";
import Link from "next/link";
import { LoginForm } from "./login-form";

export default function LoginPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
			<div className="w-full max-w-md space-y-6">
				<div className="flex flex-col items-center space-y-2 text-center">
					<LegalScales className="h-12 w-12" />
					<h1 className="text-3xl font-bold">LegalMind AI</h1>
					<p className="text-sm text-muted-foreground">
						Enter your credentials to access your account
					</p>
				</div>
				<LoginForm />
				<div className="text-center text-sm">
					<Link
						href="/forgot-password"
						className="underline underline-offset-4 hover:text-primary"
					>
						Forgot password?
					</Link>
				</div>
				<div className="text-center text-sm">
					Don&apos;t have an account?{" "}
					<Link
						href="/signup"
						className="underline underline-offset-4 hover:text-primary"
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
}
