import { LegalScales } from "@/components/icons/legal-scales";
import Link from "next/link";
import { ForgotPasswordForm } from "./forgot-password-form";

export default function ForgotPasswordPage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
			<div className="w-full max-w-md space-y-6">
				<div className="flex flex-col items-center space-y-2 text-center">
					<LegalScales className="h-12 w-12" />
					<h1 className="text-3xl font-bold">Reset Password</h1>
					<p className="text-sm text-muted-foreground">
						Enter your email to receive a password reset link
					</p>
				</div>
				<ForgotPasswordForm />
				<div className="text-center text-sm">
					Remember your password?{" "}
					<Link
						href="/login"
						className="underline underline-offset-4 hover:text-primary"
					>
						Back to login
					</Link>
				</div>
			</div>
		</div>
	);
}
