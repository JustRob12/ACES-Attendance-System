/**
 * v0 by Vercel.
 * @see https://v0.dev/t/83mQq7U9RMg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Create an account</h2>
        <p className="text-center text-muted-foreground">
          Enter your email and password below to create your account
        </p>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="name@example.com"
            className="w-full bg-black border border-muted-foreground text-white"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-muted-foreground text-white"
          />
          <Button className="w-full bg-white text-black">Sign In</Button>
        </div>
        <p className="text-center text-muted-foreground text-xs">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
