import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const QuestionTab = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className={`grid gap-3 p-3 rounded-xl shadow-2xl bg-white dark:bg-zinc-700 overflow-hidden transition-all duration-700 ${
        isShow ? "h-40" : "h-[52px]"
      }`}
    >
      <span className="flex items-center gap-3 justify-between">
        <p className="font-semibold text-lg">What is BiteXpress?</p>
        <button
          className="text-green-500 text-lg"
          onClick={() => setIsShow(!isShow)}
        >
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </span>
      <hr />
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea
        omnis qui nisi voluptates libero illum quae quasi deleniti culpa!
      </p>
    </div>
  );
};

export default QuestionTab;
