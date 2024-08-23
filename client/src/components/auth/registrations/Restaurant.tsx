import { useFormik } from "formik";
import { registerRestaurantSchema } from "../../../schema";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../features/store";
import {
  toggleIsLogin,
  toggleIsRegister,
} from "../../../features/slices/general";
import authThunks from "../../../features/thunks/auth";
import { Navigate } from "react-router-dom";

const Restaurant = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    register: { message },
  } = useSelector((state: RootState) => state.auth.restaurant);
  const { values, errors, touched, handleChange, isSubmitting, submitForm } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        state: "",
        country: "",
        password: "",
        password_confirmation: "",
        terms_and_conditions: false,
      },
      validationSchema: registerRestaurantSchema,
      onSubmit: (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        dispatch(authThunks.restaurantRegistration({ restaurant: values }))
          .then(() => resetForm())
          .finally(() => setSubmitting(false));
        return;
      },
    });

  if (message) {
    dispatch(toggleIsRegister(false));
    dispatch(toggleIsLogin(true));
    return <Navigate to="/?type=restaurant" />;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold">Create An Account</h1>
      <span className="flex items-center gap-1 mt-1 mb-5">
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
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center text-sm">
        <div className="grid gap-1">
          <label htmlFor="name">Enter Restaurant Name</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.name && touched.name && (
            <p className="text-sm font-semibold text-red-500">{errors.name}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="email">Enter Restaurant Email</label>
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
          <label htmlFor="name">Enter State</label>
          <input
            type="text"
            name="state"
            value={values.state}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.state && touched.state && (
            <p className="text-sm font-semibold text-red-500">{errors.state}</p>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="country">Enter Country</label>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.country && touched.country && (
            <p className="text-sm font-semibold text-red-500">
              {errors.country}
            </p>
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
          className="col-start-1 text-white bg-green-600 py-3 rounded-full shadow-md"
        >
          Create Restaurant Account
        </button>
      </form>
    </>
  );
};

export default Restaurant;
