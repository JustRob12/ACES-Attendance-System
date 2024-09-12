import { CalendarFold, Home, QrCode, Settings2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function MobileNavBar() {
  return (
    <nav className="h-14 fixed w-full bottom-0 bg-white border-t shadow-[0_-2px_5px_rgba(0,0,0,0.1)]">
      <div className="h-full container mx-auto flex items-center justify-between">
        <NavLink to={"/"} className="flex flex-col items-center">
          <Home size={18}/>
          <span className="text-xs font-medium">Home</span>
        </NavLink>
        <NavLink to={"/"} className="flex flex-col items-center">
          <CalendarFold size={18}/>
          <span className="text-xs font-medium">Calendar</span>
        </NavLink>
        <NavLink to={"/"} className="flex flex-col items-center">
          <QrCode size={18}/>
          <span className="text-xs font-medium">My QR</span>
        </NavLink>
        <NavLink to={"/"} className="flex flex-col items-center">
          <Settings2 size={18}/>
          <span className="text-xs font-medium">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileNavBar;
