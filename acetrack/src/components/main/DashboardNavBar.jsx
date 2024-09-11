import acetrackLogo from "../../assets/acetrack-logo.png";
import user from "../../assets/user.jpg";

function DashboardNavBar() {
  return (
    <nav className="h-14">
      <div className="h-full container mx-auto flex items-center justify-between">
        <img src={acetrackLogo} alt="AceTrack Logo" className="max-h-4" />
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Kaarlo</p>
          <img src={user} alt="AceTrack Logo" className="max-h-6 rounded-full" />
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavBar;
