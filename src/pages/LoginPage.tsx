import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { FormField } from "@/components/ui/form-field";
import { DevLoginBanner } from "@/components/dev/DevLoginBanner";

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
        <p className="text-sm text-muted-foreground mt-1">Sign in to your BetMate account</p>
      </div>

      <div className="space-y-4">
        <FormField label="Email address">
          <Input type="email" leadingIcon={Mail} placeholder="you@example.com" />
        </FormField>

        <FormField label="Password">
          <PasswordInput placeholder="••••••••" />
        </FormField>

        <div className="flex justify-end -mt-1">
          <Link to="/forgot-password" className="text-xs text-accent hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button className="w-full">Sign in</Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/register" className="text-accent font-medium hover:underline">
          Sign up
        </Link>
      </p>

      {import.meta.env.DEV && <DevLoginBanner />}
    </div>
  );
}
