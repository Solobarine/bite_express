import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store";
import { toggleIsLogin } from "../../features/slices/general";
import { useLocation, useNavigate } from "react-router-dom";
import Restaurant from "../../components/auth/sessions/Restaurant";
import User from "../../components/auth/sessions/User";

const Login = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const type = searchParams.get("type");

  const { isLogin } = useSelector((state: RootState) => state.general);
  const dispatch: AppDispatch = useDispatch();

  return (
    isLogin && (
      <>
        <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 z-40 w-[90%] max-w-screen-lg rounded-xl shadow-lg bg-gray-200 dark:bg-zinc-800">
          <div className="hidden md:block m-4">
            <div className="w-full h-full bg-[url('/two-roasted-fried-chicken-legs.jpg')] rounded-lg"></div>
          </div>
          <div className="p-6">
            <button
              className="font-semibold text-3xl block w-fit ml-auto mb-2"
              onClick={() => dispatch(toggleIsLogin(false))}
            >
              &times;
            </button>
            <span className="max-w-lg p-2 flex items-center gap-3">
              <button
                className="py-2 grow 5 shadow-md border rounded-lg text-white bg-green-700"
                onClick={() => navigate("/")}
              >
                Login as User
              </button>
              <button
                className="py-2 grow 5 shadow-md border rounded-lg text-white bg-orange-500"
                onClick={() => navigate("/?type=restaurant")}
              >
                Login as Restaurant
              </button>
            </span>
            {pathname === "/" && type === "restaurant" ? (
              <Restaurant />
            ) : (
              <User />
            )}
          </div>
        </div>
        <div
          id="overlay"
          className={`fixed inset-0 bg-gray-700/50 z-30 backdrop-blur-sm`}
        />
      </>
    )
  );
};

export default Login;
