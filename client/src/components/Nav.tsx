import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Nav = () => {
  return (
    <div className="backdrop-blur-md sticky top-0 p-2 sm:px-10 flex items-center gap-3 justify-between">
      <Link to="/" className="flex items-center gap-1">
        <img src="/logo2.png" alt="" className="w-10" />
        <p className="text-lg font-semibold">BiteXpress</p>
      </Link>
      <ul className="flex items-center gap-6 py-2">
        <li>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="navLink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="navLink">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="navLink">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <ThemeSwitch />
    </div>
  );
};

export default Nav;
