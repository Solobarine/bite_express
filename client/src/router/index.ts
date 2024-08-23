import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import Login from "../views/auth/Login";
import Main from "../layouts/Main";
import Dashboard from "../views/Dashboard";
import StaffIndex from "../views/staff/Index";
import Notifications from "../views/Notifications";
import Cart from "../views/Cart";
import Reviews from "../views/Reviews";
import TransactionIndex from "../views/transactions/Index";
import Transactions from "../views/transactions/Transactions";
import TopUp from "../views/transactions/TopUp";
import OrdersIndex from "../views/orders/Index";
import CancelOrder from "../views/orders/CancelOrder";
import settingsRoutes from "./settings";
import mealRoutes from "./meal";
import categoriesRoutes from "./category";
import restaurantRoutes from "./restaurant";
import Checkout from "../views/Checkout";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
    ],
  },
  {
    Component: Main,
    path: "/",
    children: [
      {
        Component: Dashboard,
        path: "/dashboard",
      },
      {
        Component: Notifications,
        path: "/notifications",
      },
      {
        Component: Cart,
        path: "/cart",
      },
      {
        Component: Checkout,
        path: "/checkout",
      },
      {
        Component: StaffIndex,
        path: "/staff",
      },
      {
        Component: OrdersIndex,
        path: "/orders",
      },
      {
        Component: CancelOrder,
        path: "/orders/:id/cancel",
      },
      {
        Component: TransactionIndex,
        path: "/wallet",
      },
      {
        Component: Transactions,
        path: "/transactions",
      },
      {
        Component: TopUp,
        path: "/top-up",
      },
      ...mealRoutes,
      ...settingsRoutes,
      ...categoriesRoutes,
      ...restaurantRoutes,
    ],
  },
]);

export default router;
