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

  return (
    <button onClick={toggleTheme} className={toggle ? "text-3xl" : "rounded"}>
      {theme === "dark" ? (
        toggle ? (
          <i className="bx bx-toggle-right" />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )
      ) : toggle ? (
        <i className="bx bx-toggle-left" />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </button>
  );
};

export default ThemeSwitch;
