import Reviews from "../views/Reviews";
import Favourites from "../views/restaurants/Favourites";
import Index from "../views/restaurants/Index";
import Info from "../views/restaurants/Info";
import Show from "../views/restaurants/Show";

const restaurantRoutes = [
  { Component: Index, path: "/restaurants" },
  {
    Component: Favourites,
    path: "/restaurants/favourites",
  },
  {
    Component: Show,
    path: "/restaurants/:id",
  },
  {
    Component: Info,
    path: "/restaurants/:id/info",
  },
  {
    Component: Reviews,
    path: "/restaurants/:id/reviews",
  },
];

export default restaurantRoutes;
