import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { AppDispatch, RootState } from "../features/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../features/slices/settings";

const NavTwo = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { menuOpen } = useSelector((state: RootState) => state.settings);

  return (
    <div className="sticky top-0 flex items-center gap-3 justify-between p-2 bg-white dark:bg-zinc-600 rounded-lg z-30">
      <div className="flex items-center gap-2">
        <img src="/logo2.png" alt="" className="w-10" />
        <p className="text-lg font-semibold">BiteXpress</p>
      </div>
      <div className={`text-xl flex items-center gap-4`}>
        <button onClick={() => navigate("/notifications")}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <ThemeSwitch />
        <button
          onClick={() => dispatch(toggleMenu(!menuOpen))}
          className="sm:hidden"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>
    </div>
  );
};

export default NavTwo;
