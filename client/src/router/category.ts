import Category from "../views/Category";
import Categories from "../views/Categories";
import Create from "../views/meals/Create";

const categoriesRoutes = [
  {
    Component: Categories,
    path: "/categories",
  },
  {
    Component: Create,
    path: "/categories/new",
  },
  {
    Component: Category,
    path: "/categories/:category",
  },
];

export default categoriesRoutes;
