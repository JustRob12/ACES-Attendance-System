import LoginForm from "@/components/login/LoginForm";
import NavBar from "@/components/main/NavBar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Component() {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.1] text-black">
        <div className="w-full max-w-lg p-8 space-y-6">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
