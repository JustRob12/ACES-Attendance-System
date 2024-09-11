import { CalendarFold, Home, QrCode, Settings2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function MobileNavBar() {
  return (
    <nav className="h-14  fixed w-full bottom-0">
      <div className="h-full container mx-auto flex items-center justify-between">
        <NavLink to={"/"} className="flex flex-col items-center">
          <Home />
          <span className="text-sm font-medium">Home</span>
        </NavLink>
        <NavLink to={"/"} className="flex flex-col items-center">
          <CalendarFold />
          <span className="text-sm font-medium">Calendar</span>
        </NavLink>
        <NavLink to={"/"} className="flex flex-col items-center">
          <QrCode />
          <span className="text-sm font-medium">My QR</span>
        </NavLink>
        <NavLink to={"/"} className="flex flex-col items-center">
          <Settings2 />
          <span className="text-sm font-medium">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileNavBar;
