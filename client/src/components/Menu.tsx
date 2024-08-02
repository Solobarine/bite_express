import {
  faBars,
  faChevronLeft,
  faHouse,
  faMessage,
  faReceipt,
  faScrewdriverWrench,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [openState, setOpenState] = useState(false);
  return (
    <div
      className={`fixed z-20 w-full inset-0 max-w-screen md:sticky md:top-0 overflow-x-hidden bg-white dark:bg-zinc-600 md:left-auto flex flex-col transition-all duration-700 p-2 rounded-lg shrink-0 text-nowrap ${
        openState ? "left-0 md:basis-60" : "-left-[100vw] md:basis-14"
      }`}
    >
      <button
        onClick={() => setOpenState(!openState)}
        className={`fixed md:absolute top-1  md:left-auto md:opacity-100 text-xl px-4 py-1 ${
          openState ? "md:right-2 right-0 top-2" : "md:right-2 right-0 top-3.5"
        }`}
      >
        <FontAwesomeIcon icon={openState ? faChevronLeft : faBars} />
      </button>
      <div className="mt-10 flex flex-col gap-1 justify-between grow">
        <div className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            className="menuLink flex items-center gap-3 p-2 font-semibold"
            onClick={() => setOpenState(false)}
          >
            <FontAwesomeIcon icon={faHouse} className="text-xl" />
            <p className={openState ? "opacity-100" : "opacity-0"}>Dashboard</p>
          </NavLink>
          <NavLink
            to="/orders?status=active"
            className={`menuLink flex items-center gap-3 p-2 font-semibold`}
            onClick={() => setOpenState(false)}
          >
            <FontAwesomeIcon icon={faReceipt} className="text-xl px-1" />
            <p className={openState ? "opacity-100" : "opacity-0"}>Orders</p>
          </NavLink>
          <NavLink
            to="/staff"
            className={`menuLink flex items-center gap-3 p-2 font-semibold`}
            onClick={() => setOpenState(false)}
          >
            <FontAwesomeIcon icon={faMessage} className="text-xl" />
            <p className={openState ? "opacity-100" : "opacity-0"}>Messages</p>
          </NavLink>
          <NavLink
            to="/wallet"
            className={`menuLink flex items-center gap-3 p-2 font-semibold`}
            onClick={() => setOpenState(false)}
          >
            <FontAwesomeIcon icon={faWallet} className="text-xl" />
            <p className={openState ? "opacity-100" : "opacity-0"}>E-Wallet</p>
          </NavLink>
          <NavLink
            to="/settings"
            className="menuLink flex items-center gap-3 p-2 font-semibold"
            onClick={() => setOpenState(false)}
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-xl" />
            <p className={openState ? "opacity-100" : "opacity-0"}>Settings</p>
          </NavLink>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="#"
            alt=""
            className="w-10 shrink-0 bg-gray-500 aspect-square rounded-full"
          />
          <div className="text-nowrap">
            <p className="font-semibold">Authur Morgan</p>
            <p className="text-xs">authur@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
