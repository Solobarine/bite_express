import Create from "../views/meals/Create";
import Edit from "../views/meals/Edit";
import Index from "../views/meals/Index";

const mealRoutes = [
  {
    Component: Index,
    path: "/meals/:id",
  },
  {
    Component: Create,
    path: "/meals/new",
  },
  {
    Component: Edit,
    path: "/meals/:id",
  },
];

export default mealRoutes;
