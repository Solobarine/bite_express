import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SocialAuth from "../../components/SocialAuth";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Password is Required"),
});

const Login = () => {
  return (
    <div className="p-3 sm:p-10">
      <div className="border-2 rounded-xl border-gray-200 dark:border-gray-300 p-5 max-w-md shadow-lg">
        <div className="grid place-content-center gap-2 my-4">
          <img src="/logo1.png" alt="" className="w-20 mx-auto" />
          <h2 className="text-center text-3xl font-semibold">Welcome Back</h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-3">
              <div className="grid gap-1">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="rounded-lg p-2 border border-gray-300 outline-gray-300 dark:bg-slate-600 dark:outline-gray-600 dark:border-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="rounded-lg p-2 border border-gray-300 outline-gray-300 dark:bg-slate-600 dark:outline-gray-600 dark:border-gray-600"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-1 bg-green-500 text-white rounded-lg shadow-sm"
              >
                {isSubmitting ? "Please Wait" : "Login"}
              </button>
            </Form>
          )}
        </Formik>
        <SocialAuth />
      </div>
    </div>
  );
};

export default Login;
