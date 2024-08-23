import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ThemeSwitch from "../components/ThemeSwitch";
import "boxicons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "../features/slices/settings";
import authThunks from "../features/thunks/auth";
import Loading from "../views/Loading";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const {
    isLoggedIn,
    currentUser: { isLoading },
  } = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const { menuOpen } = useSelector((state: RootState) => state.settings);
  const dispatch: AppDispatch = useDispatch();

  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    if (!token) navigate("/");
    if (!isLoggedIn) dispatch(authThunks.currentUser());
  }, []);

  if (isLoading === "pending") return <Loading />;

  if (!isLoggedIn && isLoading === "failed") return <Navigate to="/" />;

  return (
    <div className="main relative bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-100 font-itim">
      <div className="flex items-start relative gap-3 min-h-screen">
        <Menu />
        <div className="grow p-1">
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
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
