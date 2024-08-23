import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./views/auth/Register";
import Login from "./views/auth/Login";

const App = () => {
  return (
    <section className="app bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-100 font-itim">
      <Nav />
      <Outlet />
      <Footer />
      <Login />
      <Register />
    </section>
  );
};

export default App;
