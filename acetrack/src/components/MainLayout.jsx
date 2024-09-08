import { NavLink, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* <nav>
        <ul className="flex justify-between">
          <li>
            <NavLink to={"/"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-10">
      </div> */}
      <Outlet />
    </>
  );
}
