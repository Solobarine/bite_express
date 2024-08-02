import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationCard from "../components/notification/NotificationCard";

const Notifications = () => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between py-5">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <FontAwesomeIcon
          icon={faEllipsis}
          className="p-2 aspect-square rounded-full border border-gray-300"
        />
      </div>
      <div className="grid gap-3">
        {[1, 2, 3, 4, 5].map((__, index) => (
          <NotificationCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
