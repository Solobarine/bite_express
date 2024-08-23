import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MidLoading = () => {
  return (
    <div className="min-h-56 grid place-content-center gap-2 font-itim">
      <FontAwesomeIcon
        icon={faSpinner}
        className="text-2xl mx-auto"
        spinPulse
      />
      <p className="text-xl">Please Wait</p>
    </div>
  );
};

export default MidLoading;
