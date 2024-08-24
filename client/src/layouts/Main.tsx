import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import authThunks from "../features/thunks/auth";
import Loading from "../views/Loading";
import NavTwo from "../components/NavTwo";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const {
    isLoggedIn,
    currentUser: { isLoading },
  } = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
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
          <NavTwo />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
