import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { AppDispatch } from "../features/store";
import { useDispatch } from "react-redux";
import { toggleIsLogin, toggleIsRegister } from "../features/slices/general";
import { useState } from "react";

const Nav = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="backdrop-blur-md fixed w-full top-0 p-2 sm:px-10 flex items-center gap-3 justify-between z-20">
      <Link to="/" className="flex items-center gap-1">
        <img src="/logo2.png" alt="" className="w-10" />
        <p className="text-lg font-semibold">BiteXpress</p>
      </Link>
      <div
        className={`fixed bg-white dark:bg-zinc-800 grow flex flex-col sm:flex-row top-0 w-full h-screen sm:h-auto items-center justify-between sm:static sm:bg-transparent sm:dark:bg-transparent sm:translate-x-0 transform duration-500 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-6 py-2 grow justify-center">
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
      <button
        className="fixed right-3 z-40 top-2 text-3xl sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          dangerouslySetInnerHTML={{ __html: isOpen ? "&times;" : "&#9776;" }}
        />
      </button>
    </div>
  );
};

export default Nav;
