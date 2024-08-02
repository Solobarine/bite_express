import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ThemeSwitch from "../components/ThemeSwitch";
import "boxicons";
const Main = () => {
  return (
    <div className="main bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-100 font-itim">
      <div className="flex relative gap-3 min-h-screen">
        <Menu />
        <div className="grow p-1">
          <div className="sticky top-0 flex items-center gap-3 justify-between p-2 bg-white dark:bg-zinc-600 rounded-lg">
            <div className="flex items-center gap-2">
              <img src="/logo2.png" alt="" className="w-10" />
              <p className="text-lg font-semibold">BiteXpress</p>
            </div>
            <div className={`text-xl flex items-center gap-4 pr-10`}>
              <button>
                <FontAwesomeIcon icon={faBell} />
              </button>
              <ThemeSwitch />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
