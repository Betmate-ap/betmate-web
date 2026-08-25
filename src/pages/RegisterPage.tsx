import { Link } from "react-router-dom";
import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { FormField } from "@/components/ui/form-field";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Create account</h1>
        <p className="text-sm text-muted-foreground mt-1">Join your friends on BetMate</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField label="First name">
            <Input placeholder="Akhil" />
          </FormField>
          <FormField label="Last name">
            <Input placeholder="Patil" />
          </FormField>
        </div>

        <FormField label="Email address">
          <Input type="email" leadingIcon={Mail} placeholder="you@example.com" />
        </FormField>

        <FormField label="Username">
          <Input prefix="@" placeholder="betmaster99" />
        </FormField>

        <FormField label="Password">
          <PasswordInput placeholder="••••••••" />
        </FormField>

        <div className="flex items-start gap-2.5">
          <Checkbox id="reg-terms" />
          <label
            htmlFor="reg-terms"
            className="text-sm text-muted-foreground leading-snug cursor-pointer"
          >
            I agree to the <span className="text-accent">Terms of Service</span> — no real money,
            just bragging rights.
          </label>
        </div>

        <Button className="w-full" icon={User}>
          Create account
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="text-accent font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
