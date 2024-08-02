import { settingsMenuOptions } from "../../data";
import Link from "./Link";

const Menu = () => {
  return (
    <section className="p-2">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <img
            src=""
            alt=""
            className="w-12 aspect-square rounded-full bg-gray-200 shadow-md"
          />
          <div className="p-1">
            <p className="font-semibold">Authur Morgan</p>
            <p className="text-sm mt-1">authur@mail.com</p>
          </div>
        </div>
        <button>
          <i className="bx bxs-edit-alt" />
        </button>
      </div>
      <div className="grid gap-2 mt-12">
        {settingsMenuOptions.map((option, index) => (
          <Link
            key={index}
            iconName={option.iconName}
            title={option.title}
            link={option.link}
            type={option.type ? (option.type as "link" | "toggle") : "link"}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
