import acetrackLogo from "../../assets/acetrack-logo.png";
import { Button } from "../ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <nav className="h-[74px] w-full border-b border-slate-200 z-50">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-between">
          <Link to={"/"}>
            <img src={acetrackLogo} alt="Aces Logo" className="max-h-6" />
          </Link>
          <div className="flex items-center gap-2">
            {pathname !== "/login" ? (
              <Button
                variant="link"
                size="sm"
                className="hover:no-underline"
                onClick={() => navigate("/login")}
              >
                Log In
              </Button>
            ) : (
              <Button
                variant="link"
                size="sm"
                className="hover:no-underline"
                onClick={() => navigate("/register")}
              >
                Sign up
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                window.location.href = "https://www.facebook.com/dorsu.aces";
              }}
              className="hidden md:block"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
