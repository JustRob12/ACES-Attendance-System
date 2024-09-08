import React from "react";
import acesLogo from "../../assets/aces-logo.png";
import { Button } from "../ui/button";

export default function NavBar() {
  return (
    <nav className="h-[74px] w-full border-b border-slate-200 z-50">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-between">
          <img src={acesLogo} alt="Aces Logo" className="size-12" />
          <div className="flex items-center gap-2">
            <Button variant="link" size="sm" className="hover:no-underline">Log In</Button>
            <Button variant="outline" size="sm">Contact</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
