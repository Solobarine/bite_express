import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { AppDispatch } from "../features/store";
import { useDispatch } from "react-redux";
import { toggleIsLogin, toggleIsRegister } from "../features/slices/general";

const Nav = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="backdrop-blur-md fixed w-full top-0 p-2 sm:px-10 flex items-center gap-3 justify-between z-20">
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
      <div className="flex items-center gap-5">
        <button
          className="px-2 py-1 rounded-lg shadow-md font-semibold text-orange-600 border border-orange-600"
          onClick={() => dispatch(toggleIsRegister(true))}
        >
          Register
        </button>
        <button
          className="px-2 py-1 rounded-lg shadow-md font-semibold text-green-500 border border-green-500"
          onClick={() => dispatch(toggleIsLogin(true))}
        >
          Login
        </button>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Nav;
