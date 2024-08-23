import {
  faBars,
  faCartShopping,
  faChevronLeft,
  faHouse,
  faMessage,
  faReceipt,
  faScrewdriverWrench,
  faStoreAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../features/store";
import { toggleMenu } from "../features/slices/settings";

const Menu = () => {
  const { menuOpen } = useSelector((state: RootState) => state.settings);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div
      className={`fixed z-20 w-full inset-0 max-w-screen md:sticky md:top-0 min-h-screen overflow-x-hidden bg-white dark:bg-zinc-600 md:left-auto flex flex-col transition-all duration-700 p-2 rounded-lg shrink-0 text-nowrap ${
        menuOpen ? "left-0 md:basis-60" : "-left-[150vw] md:basis-14"
      }`}
    >
      <button
        onClick={() => dispatch(toggleMenu(!menuOpen))}
        className={`absolute top-1  md:left-auto md:opacity-100 text-xl px-4 py-1 z-[4444] ${
          menuOpen ? "md:right-2 right-0 top-2" : "md:right-2 right-0 top-3"
        }`}
      >
        <FontAwesomeIcon icon={menuOpen ? faChevronLeft : faBars} />
      </button>
      <div className="mt-10 flex flex-col gap-1 justify-between grow">
        <div className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            className="menuLink flex items-center gap-3 p-2 font-semibold"
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faHouse} className="text-xl" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>Dashboard</p>
          </NavLink>
          <NavLink
            to="/orders?status=active"
            className={`menuLink flex items-center gap-3 p-2 font-semibold`}
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faReceipt} className="text-xl px-1" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>Orders</p>
          </NavLink>
          <NavLink
            to="/restaurants"
            className={`menuLink flex items-center gap-3 p-2 px-1 font-semibold`}
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faStoreAlt} className="text-xl px-1" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>
              Restaurants
            </p>
          </NavLink>
          <NavLink
            to="/cart"
            className={`menuLink flex items-center gap-3 p-2 px-1 font-semibold`}
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-xl px-1" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>
              Shopping Cart
            </p>
          </NavLink>
          <NavLink
            to="/staff"
            className={`menuLink flex items-center gap-3 p-2 font-semibold`}
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faMessage} className="text-xl" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>Messages</p>
          </NavLink>
          <NavLink
            to="/wallet"
            className={`menuLink flex items-center gap-3 p-2 font-semibold`}
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faWallet} className="text-xl" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>E-Wallet</p>
          </NavLink>
          <NavLink
            to="/settings"
            className="menuLink flex items-center gap-3 p-2 font-semibold"
            onClick={() => dispatch(toggleMenu(false))}
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-xl" />
            <p className={menuOpen ? "opacity-100" : "opacity-0"}>Settings</p>
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
