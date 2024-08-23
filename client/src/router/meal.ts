import Create from "../views/meals/Create";
import Edit from "../views/meals/Edit";
import Favourites from "../views/meals/Favourites";
import Index from "../views/meals/Index";
import Show from "../views/meals/Show";

const mealRoutes = [
  {
    Component: Index,
    path: "/meals",
  },
  {
    Component: Favourites,
    path: "/meals/favourites",
  },
  {
    Component: Show,
    path: "/meals/:id",
  },
  {
    Component: Create,
    path: "/meals/new",
  },
  {
    Component: Edit,
    path: "/meals/:id/edit",
  },
];

export default mealRoutes;
