import { useNavigate } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Head = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-start gap-3">
      <button onClick={() => navigate(-1)} className="p-0">
        <FontAwesomeIcon icon={faArrowLeftLong} className="p-2" />
      </button>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default Head;
