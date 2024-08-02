import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <section className="app bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-100">
      <Nav />
      <Outlet />
      <Footer />
    </section>
  );
};

export default App;
