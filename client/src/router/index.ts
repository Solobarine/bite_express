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
import Category from "../views/Category";
import Categories from "../views/Categories";
import settingsRoutes from "./settings";
import mealRoutes from "./meal";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: Login,
        path: "/login",
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
        Component: StaffIndex,
        path: "/staff",
      },
      {
        Component: Categories,
        path: "/categories",
      },
      {
        Component: Category,
        path: "/categories/:category",
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
        Component: Reviews,
        path: "/items/:id/reviews",
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
    ],
  },
]);

export default router;
