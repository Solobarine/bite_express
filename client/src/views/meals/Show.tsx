import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../features/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import mealThunks from "../../features/thunks/meal";
import MidLoading from "../MidLoading";
import Error from "../Error";
import { useFormik } from "formik";
import { AddCartSchema } from "../../schema/cart";
import Toast from "../../components/Toast";
import { addToCart, mealExists, removeFromCart } from "../../utils/cart";
import { MealInterface } from "../../types/meal";

const Show = () => {
  const { id } = useParams();
  const { isLoading, data } = useSelector(
    (state: RootState) => state.meal.meal
  );
  const dispatch: AppDispatch = useDispatch();

  const [cart, setCart] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") as string)
      : []
  );

  useEffect(() => {
    dispatch(mealThunks.getMeal(id as string));
  }, []);

  const {
    values,
    errors,
    touched,
    setValues,
    handleChange,
    isSubmitting,
    submitForm,
  } = useFormik({
    initialValues: {
      meal_id: id,
      quantity: 1,
      note: "",
    },
    validationSchema: AddCartSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      addToCart(data as any, values.quantity, cart, setCart);
      console.log(values);
      setSubmitting(false);
    },
  });

  const increment = () => {
    return (
      values.quantity < 10 &&
      setValues((values) => ({ ...values, quantity: values.quantity + 1 }))
    );
  };

  const decrement = () => {
    return (
      values.quantity > 1 &&
      setValues((values) => ({ ...values, quantity: values.quantity - 1 }))
    );
  };

  return isLoading === "pending" ? (
    <MidLoading />
  ) : isLoading === "failed" ? (
    <Error />
  ) : (
    <>
      <Toast />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 relative py-10">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full aspect-square max-w-lg mx-auto object-cover bg-gray-200 rounded-2xl"
        />
        <div className="self-center grid gap-4 p-2">
          <h3 className="text-2xl md:text-4xl font-semibold mb-4">
            {data?.name}
          </h3>
          <div>
            <h3 className="text-lg font-semibold">Overview</h3>
            <p className="text-sm mt-1">{data?.description} </p>
          </div>
          <div className="flex flex-wrap items-center justify-start">
            <div className="grow">
              <h3 className="text-lg font-semibold">Ingredients</h3>
              <ul className="text-sm grid gap-1">
                {data?.ingredients?.map(({ name }, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="grow">
              <h3 className="text-lg font-semibold">Nutrition</h3>
              <ul className="text-sm grid gap-1">
                {data?.nutrition?.map(({ name }, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-1 my-3">
            <span className="flex items-center gap-3 justify-center sm:justify-start font-semibold text-lg">
              <button
                className="border-2 bg-white border-gray-200 text-red-600 rounded-lg w-11 text-2xl aspect-square grid place-items-center shadow-sm dark:bg-gray-700 hover:dark:bg-red-600 hover:bg-red-500 hover:text-white"
                onClick={decrement}
              >
                -
              </button>
              <input
                type="number"
                name="quantity"
                className="w-10 text-center aspect-square rounded-lg font-semibold text-xl dark:bg-zinc-700 appearance-none"
                max={10}
                min={1}
                onChange={handleChange}
                value={values.quantity}
              />
              <button
                className="border-2 bg-white border-gray-200 text-green-600 rounded-lg w-11 aspect-square text-2xl grid place-items-center shadow-sm dark:bg-gray-700 hover:dark:bg-green-600 hover:bg-green-500 hover:text-white"
                onClick={increment}
              >
                +
              </button>
            </span>
            {errors.quantity && touched.quantity && (
              <p className="text-sm text-red-600 font-semibold text-center">
                {errors.quantity}
              </p>
            )}
          </div>
          <textarea
            name="note"
            id=""
            cols={30}
            rows={4}
            onChange={handleChange}
            className="px-2 py-1 rounded-xl border border-green-600 focus:outline-none focus:border-2 bg-white dark:bg-zinc-700"
            placeholder="Note for Restaurant (Optional)"
          />
          {mealExists(parseInt(id as string), cart) ? (
            <button
              className="py-2 rounded-full bg-red-500 text-white w-full max-w-xs mx-auto block"
              onClick={() =>
                removeFromCart(data as MealInterface, cart, setCart)
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="py-2 rounded-full bg-green-500 text-white w-full max-w-xs mx-auto block"
              onClick={submitForm}
            >
              {isSubmitting
                ? "Adding to cart"
                : `Add to Cart - $${data?.price}`}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Show;
