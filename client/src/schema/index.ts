import * as Yup from "yup";

export const registerUserSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Minimum of 2 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("First Name is Required"),
  last_name: Yup.string()
    .min(2, "Minimum of 2 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Last Name is Required"),
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Password is Required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not Match")
    .required("Password Confirmation Required"),
  terms_and_conditions: Yup.boolean()
    .isTrue("Please Accept the Terms and Conditions")
    .required("Terms and Condition is Required"),
});

export const registerRestaurantSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum of 3 Characters")
    .max(30, "Maximum of 30 Characters")
    .required("Name is Required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is Required"),
  address: Yup.string()
    .min(10, "Minimum of 10 Characters")
    .max(30, "Maximum of 30 Characters")
    .required("Address is Required"),
  phone_no: Yup.string()
    .min(9, "Minimum of 9 Characters")
    .max(14, "Maximum of 14 Characters")
    .required("Phone Number is Required"),
  state: Yup.string()
    .min(2, "Minimum of 2 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("State is Required"),
  country: Yup.string()
    .min(2, "Minimum of 2 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Country is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Password is Required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not Match")
    .required("Password Confirmation is Required"),
  terms_and_conditions: Yup.boolean()
    .isTrue("Please Accept the Terms and Conditions")
    .required("Terms and Condition is Required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 Characters")
    .max(20, "Maximum of 20 Characters")
    .required("Password is Required"),
});
