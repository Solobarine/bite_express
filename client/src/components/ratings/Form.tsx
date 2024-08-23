import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import Toast from "../Toast";
import { toast } from "react-toastify";

const ratingSchema = Yup.object().shape({
  rating: Yup.number()
    .min(1, "Rating must be a minimum of 1 star")
    .max(5, "Rating must be maximum of 5 stars")
    .required("Rating is required"),
  title: Yup.string()
    .min(3, "Minimum of 3 Characters")
    .max(50, "Maximum of 50 Characters")
    .notRequired(),
  content: Yup.string()
    .min(2, "Review length must be at minimum of 2 Characters")
    .max(500, "Review length must be at minimum of 2 Characters")
    .required("Review is Required"),
});

const ReviewForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    setValues,
    submitForm,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: {
      rating: 0,
      title: "",
      content: "",
    },
    validationSchema: ratingSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      console.log(values);
      setSubmitting(false);
      toast.error("Form Submitted");
    },
  });
  return (
    <div className="grid gap-4 w-full px-4 mx-auto">
      <Toast />
      <h2 className="text-2xl font-semibold pt-4 pb-2">Leave a Review</h2>
      <div className="grid gap-1">
        <span className="flex items-center gap-3 text-2xl">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                setValues((values) => ({
                  ...values,
                  rating: values.rating === value ? 0 : value,
                }))
              }
            >
              <FontAwesomeIcon
                icon={values.rating >= value ? faStar : faStarRegular}
                className="text-amber-400"
              />
            </button>
          ))}
        </span>
        {errors.rating && touched.rating && (
          <p className="text-sm text-red-500 font-semibold">{errors.rating}</p>
        )}
      </div>
      <div className="grid gap-2 max-w-lg">
        <input
          type="text"
          name="title"
          className="p-2 rounded-xl border border-green-500 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
          onChange={handleChange}
          placeholder="Add Title (Optional)"
          value={values.title}
        />
        {errors.title && touched.title && (
          <p className="text-sm text-red-500 font-semibold">{errors.title}</p>
        )}
      </div>
      <div className="grid gap-2 max-w-lg">
        <textarea
          name="content"
          id="content"
          onChange={handleChange}
          cols={30}
          rows={3}
          className="p-2 rounded-xl h-full border border-green-500 outline-green-500 bg-white dark:bg-zinc-700"
        />
        {errors.content && touched.content && (
          <p className="text-sm text-red-500 font-semibold">{errors.content}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        onClick={() => submitForm()}
        className="py-3 rounded-lg text-white bg-green-500 max-w-lg"
      >
        Leave a Review
      </button>
    </div>
  );
};

export default ReviewForm;
