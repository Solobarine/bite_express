import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotificationCard = () => {
  return (
    <div className="p-2 grid gap-2 bg-white dark:bg-zinc-700 rounded-lg">
      <div className="flex items-center gap-2 justify-between">
        <span className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faSquareXmark}
            className="text-rose-500 bg-rose-100 p-3 rounded-full"
          />
          <span>
            <p className="text-lg font-semibold">Order Cancelled!</p>
            <span className="text-gray-500 dark:text-gray-50 text-sm flex items-center gap-4">
              <p>19 Aug 2024</p>
              <p>&#x2759;</p>
              <p>20:50PM</p>
            </span>
          </span>
        </span>
        <span className="px-2 py-1 rounded-md text-xs text-white bg-green-500">
          New
        </span>
      </div>
      <p className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut
        aliquam unde! Molestiae, natus.
      </p>
    </div>
  );
};

export default NotificationCard;
