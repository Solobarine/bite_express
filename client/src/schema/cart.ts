import * as Yup from "yup";

export const AddCartSchema = Yup.object().shape({
  quantity: Yup.number()
    .min(1, "Quantity must be greater than 0")
    .max(10, "Quantity must be at most 10")
    .required("Quantity is Required"),
  note: Yup.string()
    .min(10, "Note must be at least 10 Characters")
    .max(200, "Note must be at most 200 Characters")
    .notRequired(),
});
