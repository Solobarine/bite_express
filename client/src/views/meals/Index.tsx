import {
  faChevronRight,
  faLocationDot,
  faMotorcycle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {
  return (
    <div>
      <img
        src="#"
        alt=""
        className="w-full aspect-square object-contain bg-gray-200"
      />
      <div className="px-3">
        <div className="divide-y divide-gray-300">
          <span className="flex items-center gap-3 justify-between py-2">
            <h3 className="text-xl font-semibold">Big Garden Salad</h3>
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </span>
          <span className="flex items-center gap-3 justify-between py-2">
            <span className="flex items-center gap-3">
              <FontAwesomeIcon icon={faStar} className="text-amber-400" />
              <p>4.8</p>
              <p>(4.8k reviews)</p>
            </span>
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </span>
          <span className="flex items-center gap-3 justify-between py-2">
            <span className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-green-500"
              />
              <span>
                <p>2.8km</p>
                <span className="flex items-center gap-2 text-sm font-gray-500">
                  <p>Delivery Now</p>
                  <p>&#x2759;</p>
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faMotorcycle}
                      className="text-green-500"
                    />
                    $2.00
                  </p>
                </span>
              </span>
            </span>
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </span>
          <span className="flex items-center gap-3 justify-between py-2">
            <span className="flex items-center gap-2">
              <i className="bx bxs-offer text-green-500" />
              <p>Available Offers</p>
            </span>
            <button>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </span>
        </div>
      </div>
      <div className="mt-5 p-2">
        <h3 className="text-lg font-semibold">Overview</h3>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At modi hic
          eaque similique unde optio eligendi nesciunt eius minus a autem quod,
          tempore odio accusantium, assumenda culpa eos recusandae, perspiciatis
          dolor rem aliquid cum. Unde ullam porro voluptates facere inventore.
          Officiis quidem ad culpa aut!
        </p>
      </div>
    </div>
  );
};

export default Index;
