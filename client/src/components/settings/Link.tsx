import { NavLink } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch";

const Link = ({
  iconName,
  title,
  type = "link",
  link,
}: {
  iconName: string;
  title: string;
  link?: string;
  type: "link" | "toggle";
}) => {
  return type === "link" ? (
    <NavLink to={link as string} className="flex items-center justify-between">
      <span className="flex items-center gap-3">
        <i className={`bx ${iconName} text-xl`} />
        <p>{title}</p>
      </span>
      <button>
        <i className="bx bx-chevron-right text-xl" />
      </button>
    </NavLink>
  ) : (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-3">
        <i className={`bx ${iconName} text-xl`} />
        <p>{title}</p>
      </span>
      <ThemeSwitch toggle={true} />
    </div>
  );
};

export default Link;
