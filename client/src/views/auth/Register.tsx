import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store";
import { toggleIsRegister } from "../../features/slices/general";
import { useLocation, useNavigate } from "react-router-dom";
import Restaurant from "../../components/auth/registrations/Restaurant";
import User from "../../components/auth/registrations/User";

const Register = () => {
  const { isRegister } = useSelector((state: RootState) => state.general);
  const dispatch: AppDispatch = useDispatch();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);

  const type = searchParams.get("type");
  const navigate = useNavigate();

  return (
    isRegister && (
      <>
        <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 grid grid-cols-1 lg:grid-cols-2 z-40 w-[90%] max-w-screen-lg rounded-xl shadow-lg bg-gray-200 dark:bg-zinc-800 max-h-[813px] h-[96%] sm:h-auto overflow-y-scroll sm:overflow-y-hidden">
          <div className="hidden lg:block m-4">
            <div className="w-full h-full bg-[url('/mixed-foods.avif')] object-contain rounded-lg" />
          </div>
          <div className="p-6">
            <button
              className="font-semibold text-3xl block w-fit ml-auto mb-2"
              onClick={() => dispatch(toggleIsRegister(false))}
            >
              &times;
            </button>
            <span className="max-w-lg p-2 flex items-center gap-3">
              <button
                className="py-2 grow 5 shadow-md border rounded-lg text-white bg-green-700"
                onClick={() => navigate("/")}
              >
                Register as User
              </button>
              <button
                className="py-2 grow 5 shadow-md border rounded-lg text-white bg-orange-500"
                onClick={() => navigate("/?type=restaurant")}
              >
                Register as Restaurant
              </button>
            </span>
            {type === "restaurant" ? <Restaurant /> : <User />}
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

export default Register;
