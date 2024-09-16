import acetrackLogo from "../../assets/acetrack-logo.png";
import user from "../../assets/user.jpg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function DashboardNavBar() {
  return (
    <nav className="h-16">
      <div className="h-full container mx-auto flex items-center justify-between">
        <img src={acetrackLogo} alt="AceTrack Logo" className="max-h-4" />

        <Sheet>
          <SheetTrigger>
            <div className="flex items-center gap-2">
              <img src={user} alt="User" className="max-h-8 rounded-full" />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Main Menu</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default DashboardNavBar;
