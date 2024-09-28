import { useFormik } from "formik";
import { loginSchema } from "../../../schema";
import { AppDispatch, RootState } from "../../../features/store";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsLogin,
  toggleIsRegister,
} from "../../../features/slices/general";
import authThunks from "../../../features/thunks/auth";
import { Navigate } from "react-router-dom";

const User = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    isLoggedIn,
    login: { error },
  } = useSelector((state: RootState) => state.auth.user);
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
        dispatch(authThunks.userLogin({ user: values }))
          .then(() => resetForm())
          .finally(() => setSubmitting(false));
        return;
      },
    });

  if (isLoggedIn && localStorage.getItem("auth_token"))
    return <Navigate to="/dashboard" />;

  return (
    <>
      <h1 className="text-3xl font-semibold">Welcome Back</h1>
      <span className="flex items-center gap-2 mt-1 mb-5">
        <p>Don't have an Account?</p>
        <button
          className="underline"
          onClick={() => {
            dispatch(toggleIsLogin(false));
            dispatch(toggleIsRegister(true));
          }}
        >
          Register
        </button>
      </span>
      <form className="grid gap-5">
        {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        )}
        <div className="grid gap-1">
          <label htmlFor="email">Enter Email</label>
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
          className={`col-start-1 text-white bg-green-600 py-3 rounded-full shadow-md ${
            isSubmitting ? "cursor-not-allowed opacity-75" : ""
          }`}
        >
          {isSubmitting ? "Logging in" : "Login"}
        </button>
      </form>
    </>
  );
};

export default User;
