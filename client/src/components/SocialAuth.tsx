import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialAuth = () => {
  return (
    <div className="grid gap-3 p-3">
      <div className="flex items-center gap-4 justify-center py-2">
        <button className="text-2xl">
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className="text-2xl">
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button className="text-2xl">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
