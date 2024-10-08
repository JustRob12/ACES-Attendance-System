import NavBar from "@/components/main/NavBar";
import SignupForm from "@/components/signup/SignupForm";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Component() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center min-h-[calc(100vh-74px)] bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.1] text-black">
        <div className="w-full max-w-lg px-0 md:p-8 space-y-6">
          <SignupForm />
          {/* <p className="text-center text-muted-foreground text-xs">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p> */}
        </div>
      </div>
    </>
  );
}
