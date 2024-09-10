import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import acesLogo from "../assets/aces-logo.png";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <>
      <BackgroundLines className="h-screen flex items-center justify-center w-full flex-col px-4">
        <img src={acesLogo} alt="Aces Logo" className="size-36 z-50" />
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          AceTrack Coming Soon
        </h2>
        <p className="max-w-xl mx-auto text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Association Of Computing And Engineering Students
        </p>
      </BackgroundLines>
      <Button onClick={() => navigate("/login")}>Go to login page</Button>
    </>
  );
}
