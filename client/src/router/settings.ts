import HelpCenter from "../views/settings/HelpCenter";
import Settings from "../views/settings/Index";
import Notifications from "../views/settings/Notifications";
import Profile from "../views/settings/Profile";

const settingsRoutes = [
  {
    Component: Settings,
    path: "settings",
  },
  {
    Component: Profile,
    path: "settings/profile",
  },
  {
    Component: Notifications,
    path: "settings/notifications",
  },
  {
    Component: HelpCenter,
    path: "settings/help-center/faq",
  },
  {
    Component: HelpCenter,
    path: "settings/help-center/contact-us",
  },
];

export default settingsRoutes;
