import { useFormik } from "formik";
import Tag from "../../components/meals/Tag";
import { useLocation, useNavigate } from "react-router-dom";
import { MutableRefObject, useRef } from "react";

const Create = () => {
  const navigate = useNavigate();
  const ref: MutableRefObject<null | HTMLInputElement> = useRef(null);

  const form = useFormik({
    initialValues: {
      ingredients: [] as string[],
      nutrition: [] as { name: string; quantity: string }[],
      avaliability: true,
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      return resetForm();
    },
  });

  const { pathname } = useLocation();
  return (
    <div>
      <nav className="flex items-center p-5">
        <button
          className={`px-5 py-1 border-b-2 ${
            pathname === "/meals/new"
              ? "border-green-500 text-green-500"
              : "border-transparent"
          }`}
          onClick={() => navigate("/meals/new")}
        >
          Add New Meal
        </button>
        <button
          className={`px-5 py-1 border-b-2 ${
            pathname === "/categories/new"
              ? "border-green-500 text-green-500"
              : "border-transparent"
          }`}
          onClick={() => navigate("/categories/new")}
        >
          Add New Category
        </button>
      </nav>
      {pathname === "/meals/new" ? (
        <div className="grid gap-3 max-w-lg grow p-3 mx-auto">
          <div className="grid gap-1">
            <label htmlFor="image">Add Image</label>
            <div
              className="min-h-40 border-dashed border border-green-500 rounded-xl grid place-items-center"
              onClick={() => ref.current?.click()}
            >
              <p>Upload Image Here</p>
            </div>
            <input
              ref={ref}
              type="file"
              name="image"
              id="image"
              className="hidden"
            />
          </div>

          <div className="grid gap-6">
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="p-2 rounded-xl border border-green-500 outline-green-500 bg-white dark:bg-zinc-700"
              />
            </div>
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Select Relevant Categories</label>
              <input
                type="radio"
                className="p-2 rounded-xl border border-green-500 outline-green-500 bg-white dark:bg-zinc-700"
              />
            </div>
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Price</label>
              <input
                type="number"
                className="p-2 rounded-xl border border-green-500 outline-green-500 bg-white dark:bg-zinc-700"
              />
            </div>
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Ingredients</label>
              <input
                type="text"
                onKeyUp={(e) => {
                  console.log(e.key);
                  const check = form.values.nutrition.filter(
                    (value) =>
                      value.name.toLowerCase() ===
                      e.currentTarget.value.toLowerCase()
                  ).length;
                  console.log(check);

                  if (
                    e.key == "Enter" &&
                    form.values.ingredients.filter(
                      (value) =>
                        value.toLowerCase() ===
                        e.currentTarget.value.toLowerCase()
                    ).length === 0 &&
                    form.values.ingredients.length <= 4
                  ) {
                    form.setValues((values) => ({
                      ...values,
                      ingredients: [
                        ...values.ingredients,
                        e.currentTarget.value,
                      ],
                    }));
                    e.currentTarget.value = "";
                  }
                }}
                className="p-2 rounded-xl border border-green-500 outline-green-500 bg-white dark:bg-zinc-700"
              />

              <div className="flex items-center gap-4 flex-wrap p-2 rounded-xl">
                {form.values.ingredients.map((ingredient, index) => (
                  <Tag key={index} name={ingredient} />
                ))}
              </div>
            </div>
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Nutrition</label>
              <input
                type="text"
                onKeyUp={(e) => {
                  console.log(e.key);
                  const check = form.values.nutrition.filter(
                    (value) =>
                      value.name.toLowerCase() ===
                      e.currentTarget.value.toLowerCase()
                  ).length;
                  console.log(check);

                  if (
                    e.key == "Enter" &&
                    form.values.nutrition.filter(
                      (value) =>
                        value.name.toLowerCase() ===
                        e.currentTarget.value.toLowerCase()
                    ).length === 0 &&
                    form.values.nutrition.length <= 9
                  ) {
                    form.setValues((values) => ({
                      ...values,
                      nutrition: [
                        ...values.nutrition,
                        { name: e.currentTarget.value, quantity: "1 lb" },
                      ],
                    }));
                    e.currentTarget.value = "";
                  }
                }}
                className="p-2 rounded-xl border border-green-500 outline-green-500 bg-white dark:bg-zinc-700"
              />

              <div className="flex items-center gap-4 flex-wrap p-2 rounded-xl">
                {form.values.nutrition.map((nutrient, index) => (
                  <Tag
                    key={index}
                    name={nutrient.name}
                    quantity={nutrient.quantity}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Availability</label>
              <div className="flex items-center gap-4 p-2">
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="avaliability"
                    id=""
                    onChange={() =>
                      form.setValues((values) => ({
                        ...values,
                        avaliability: true,
                      }))
                    }
                    checked={form.values.avaliability ? true : false}
                    value={1}
                  />
                  <p>Yes</p>
                </span>
                <span className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="avaliability"
                    onChange={() =>
                      form.setValues((values) => ({
                        ...values,
                        avaliability: false,
                      }))
                    }
                    id=""
                    checked={form.values.avaliability ? false : true}
                    value={0}
                  />
                  <p>No</p>
                </span>
              </div>
            </div>
            <div className="grid gap-2 text-sm">
              <label htmlFor="">Description</label>
              <textarea className="p-2 rounded-xl border border-green-500 outline-green-500 bg-white dark:bg-zinc-700" />
            </div>
            <button
              type="submit"
              className="py-3 rounded-lg text-white bg-green-500"
            >
              Create Meal
            </button>
          </div>
        </div>
      ) : (
        <div className="p-2">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <label htmlFor="image">Add Image</label>
              <div
                className="min-h-40 border-dashed border border-green-500 rounded-xl grid place-items-center"
                onClick={() => ref.current?.click()}
              >
                <p>Upload Image Here</p>
              </div>
              <input
                ref={ref}
                type="file"
                name="image"
                id="image"
                className="hidden"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="category_name">Enter Category Name</label>
              <input
                type="text"
                name="category_name"
                className="p-2 rounded-lg border border-green-400 bg-white dark:bg-zinc-700"
              />
            </div>
            <button
              type="submit"
              className="py-3 rounded-lg text-white bg-green-500"
            >
              Create Category
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
