import { useFormik } from "formik";
import { loginSchema } from "../../../schema";
import {
  toggleIsLogin,
  toggleIsRegister,
} from "../../../features/slices/general";
import { AppDispatch, RootState } from "../../../features/store";
import { useDispatch, useSelector } from "react-redux";
import authThunks from "../../../features/thunks/auth";
import { Navigate } from "react-router-dom";

const Restaurant = () => {
  const { isLoggedIn } = useSelector(
    (state: RootState) => state.auth.restaurant
  );
  const dispatch: AppDispatch = useDispatch();
  const { values, errors, touched, isSubmitting, handleChange, submitForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        dispatch(authThunks.restaurantLogin({ restaurant: values }))
          .then(() => resetForm())
          .finally(() => setSubmitting(false));
        resetForm();
        return;
      },
    });

  if (isLoggedIn) return <Navigate to="/dashboard" />;

  return (
    <>
      <h1 className="text-3xl font-semibold">Welcome Back</h1>
      <span className="flex items-center gap-2 mt-1 mb-5">
        <p>Don't have an Account?</p>
        <button
          className="underline"
          onClick={() => {
            dispatch(toggleIsRegister(true));
            dispatch(toggleIsLogin(false));
          }}
        >
          Register
        </button>
      </span>
      <form className="grid gap-5">
        <div className="grid gap-1">
          <label htmlFor="email">Enter Restaurant Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            className="p-2 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.email && touched.email && (
            <p className="text-sm text-red-500 font-semibold">{errors.email}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="p-2 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.password && touched.password && (
            <p className="text-sm text-red-500 font-semibold">
              {errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          onClick={(e) => {
            e.preventDefault();
            submitForm();
          }}
          className="col-start-1 text-white bg-green-600 py-3 rounded-full shadow-md"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Restaurant;
