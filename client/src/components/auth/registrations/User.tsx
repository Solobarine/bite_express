import { useFormik } from "formik";
import { registerUserSchema } from "../../../schema";
import { AppDispatch, RootState } from "../../../features/store";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsLogin,
  toggleIsRegister,
} from "../../../features/slices/general";
import authThunks from "../../../features/thunks/auth";
import { Navigate } from "react-router-dom";

const User = () => {
  const {
    register: { message },
  } = useSelector((state: RootState) => state.auth.user);
  const dispatch: AppDispatch = useDispatch();
  const { values, errors, touched, handleChange, isSubmitting, submitForm } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms_and_conditions: false,
      },
      validationSchema: registerUserSchema,
      onSubmit: (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        dispatch(authThunks.userRegistration({ user: values }))
          .then(() => resetForm())
          .finally(() => setSubmitting(false));
        return;
      },
    });

  if (message) {
    dispatch(toggleIsLogin(false));
    dispatch(toggleIsRegister(true));
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold">Create An Account</h1>
      <span className="flex items-center gap-2 mt-1 mb-5">
        <p>Already have an Account?</p>
        <button
          className="underline"
          onClick={() => {
            dispatch(toggleIsRegister(false));
            dispatch(toggleIsLogin(true));
          }}
        >
          Login
        </button>
      </span>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div className="grid gap-1">
          <label htmlFor="first_name">Enter First Name</label>
          <input
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.first_name && touched.first_name && (
            <p className="text-sm font-semibold text-red-500">
              {errors.first_name}
            </p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="last_name">Enter Last Name</label>
          <input
            type="text"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.last_name && touched.last_name && (
            <p className="text-sm font-semibold text-red-500">
              {errors.last_name}
            </p>
          )}
        </div>
        <div className="grid gap-1 md:col-span-2">
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.email && touched.email && (
            <p className="text-sm font-semibold text-red-500">{errors.email}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.password && touched.password && (
            <p className="text-sm font-semibold text-red-500">
              {errors.password}
            </p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="password_confirmation">Re-Enter Password</label>
          <input
            type="password"
            name="password_confirmation"
            value={values.password_confirmation}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.password_confirmation && touched.password_confirmation && (
            <p className="text-sm font-semibold text-red-500">
              {errors.password_confirmation}
            </p>
          )}
        </div>
        <div className="col-start-1 md:col-span-2">
          <span className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={values.terms_and_conditions}
              onChange={handleChange}
              name="terms_and_conditions"
            />
            <p className="text-sm">
              I agree to the <button type="button">Terms and Conditions</button>
            </p>
          </span>
          {errors.terms_and_conditions && touched.terms_and_conditions && (
            <p className="text-sm font-semibold text-red-500">
              {errors.terms_and_conditions}
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
            isSubmitting && "cursor-not-allowed opacity-90"
          }`}
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default User;
