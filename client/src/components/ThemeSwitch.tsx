import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ThemeSwitch = ({ toggle = false }: { toggle?: boolean }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return toggle ? (
    <button onClick={toggleTheme} className="text-3xl">
      {theme === "dark" ? (
        <i className="bx bx-toggle-right" />
      ) : (
        <i className="bx bx-toggle-left" />
      )}
    </button>
  ) : (
    <button onClick={toggleTheme} className="rounded">
      {theme === "dark" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export default ThemeSwitch;
