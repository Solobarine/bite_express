import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch } from "../../../features/store";
import { useDispatch } from "react-redux";
import addressThunks from "../../../features/thunks/address";

const addressSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Address Name must be at minimum 2 Characters")
    .max(20, "Address Name must be at most 20 Characters")
    .required("Address Name is required"),
  address: Yup.string()
    .min(2, "Address must be at minimum 2 Characters")
    .max(100, "Address must be at most 100 Characters")
    .required("Address is required"),
  zipCode: Yup.string()
    .length(6, "Zip Code must be at minimum 6 Numeric Characters")
    .required("Zip Code is required"),
  state: Yup.string()
    .min(2, "State must be at minimum 2 Characters")
    .max(20, "State must be at most 20 Characters")
    .required("State is required"),
  country: Yup.string()
    .min(2, "Country must be at minimum 2 Characters")
    .max(30, "Country must be at most 30 Characters")
    .required("Country is required"),
});

const Form = ({ buttonText }: { buttonText: string }) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    errors,
    touched,
    handleChange,
    submitForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      address: "",
      zipCode: "000000",
      state: "",
      country: "",
    },
    validationSchema: addressSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      console.log({ address: { ...values } });
      dispatch(addressThunks.create({ address: values })).finally(() =>
        setSubmitting(false)
      );
    },
  });

  return (
    <>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <label htmlFor="name">Enter Address Title</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="e.g Home, Work, Villa"
            className="p-2 rounded-xl border border-green-500 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.name && touched.name && (
            <small className="text-red-500 text-sm">{errors.name}</small>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="location">Enter Address</label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            className="p-2 rounded-xl border border-green-500 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.address && touched.address && (
            <small className="text-red-500 text-sm">{errors.address}</small>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="zipCode">Enter Zip Code</label>
          <input
            type="text"
            name="zipCode"
            onChange={handleChange}
            className="p-2 rounded-xl border border-green-500 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.zipCode && touched.zipCode && (
            <small className="text-red-500 text-sm">{errors.zipCode}</small>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="state">Enter State</label>
          <input
            type="text"
            name="state"
            onChange={handleChange}
            placeholder="e.g Rivers, Bayelsa"
            className="p-2 rounded-xl border border-green-500 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.state && touched.state && (
            <small className="text-red-500 text-sm">{errors.state}</small>
          )}
        </div>
        <div className="grid gap-1">
          <label htmlFor="country">Enter Country</label>
          <input
            type="text"
            name="country"
            onChange={handleChange}
            placeholder="e.g Nigeria, United States"
            className="p-2 rounded-xl border border-green-500 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          />
          {errors.country && touched.country && (
            <small className="text-red-500 text-sm">{errors.country}</small>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          onClick={(e) => {
            e.preventDefault();
            submitForm();
            //setState(false);
          }}
          className="bg-green-600 text-white rounded-full py-3 text-sm"
        >
          {isSubmitting ? "Submitting" : buttonText}
        </button>
      </div>
    </>
  );
};

export default Form;
