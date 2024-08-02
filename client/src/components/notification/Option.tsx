import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Option = ({ title }: { title: string }) => {
  const [state, setState] = useState(false);
  return (
    <div className="flex items-center gap-4 justify-between">
      <p>{title}</p>
      <button
        className="text-3xl text-green-500"
        onClick={() => setState(!state)}
      >
        <FontAwesomeIcon icon={state ? faToggleOn : faToggleOff} />
      </button>
    </div>
  );
};

export default Option;
