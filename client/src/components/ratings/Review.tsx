import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({
  data: { title, content, user_first_name, user_last_name, ratings },
}: {
  data: {
    title: string;
    content: string;
    user_first_name?: string;
    user_last_name?: string;
    ratings: number;
  };
}) => {
  const ratingArray = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="grid gap-3 p-4 shadow-md bg-white dark:bg-zinc-600">
      <div className="flex items-center gap-3 justify-between">
        <span className="flex items-center gap-3">
          <img
            src="#"
            alt=""
            className="w-8 aspect-square rounded-full shadow-md"
          />
          <p className="text-lg font-semibold">{`${user_first_name as string} ${
            user_last_name as string
          }`}</p>
        </span>
        <span className="flex items-center gap-1">
          {ratingArray.map((number, index) => (
            <FontAwesomeIcon
              key={index}
              icon={number <= ratings ? faStar : faStarRegular}
              className="text-amber-400"
            />
          ))}
        </span>
      </div>
      {title && <p className="text-sm font-semibold">{title}</p>}
      <p className="text-sm">{content}</p>
      <span className="flex items-center gap-4">
        <span className="flex gap-3 items-end">
          <button>
            <FontAwesomeIcon icon={faHeart} className="text-rose-500" />
          </button>
          <p>6 days ago</p>
        </span>
      </span>
    </div>
  );
};

export default Review;
