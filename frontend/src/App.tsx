import { BackgroundLines } from "@/components/ui/background-lines";
import acesLogo from "./assets/aces-logo.png";

export default function App() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <img src={acesLogo} className="size-36" />
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-4xl lg:text-6xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        AceTrack Coming Soon
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
        Association Of Computing And Engineering Students
      </p>
    </BackgroundLines>
  );
}
