import { useState } from "react";
import reviews from "../../../data/reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Index = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="pb-20">
      <div className="flex items-center flex-wrap gap-3 justify-center p-4">
        {reviews.map(({ image, firstName, lastName }, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={`rounded-full aspect-square bg-green-400 overflow-hidden relative transition-all duration-700 ${
              active === index ? "w-16" : "w-12"
            }`}
          >
            <div
              id="overlay"
              className={`absolute inset-0 bg-green-500/50 transition-all duration-700 cursor-pointer ${
                active === index ? "top-16" : "top-0"
              }`}
            />
            <img src={image} alt={`${firstName} ${lastName}`} />
          </div>
        ))}
      </div>
      <div className="h-full max-h-72 rounded-tl-3xl rounded-r-3xl bg-green-700 w-full max-w-4xl mx-auto text-white text-xl">
        {reviews
          .filter((__, index) => index === active)
          .map(({ review, firstName, lastName, rating }, index) => (
            <div
              key={index}
              className="flex flex-col justify-between px-10 py-4 h-full"
            >
              <p className="">{review}</p>
              <span className="flex items-center justify-between">
                <p>
                  {firstName} {"   "} {lastName}
                </p>
                <span className="flex items-center gap-1">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={index + 1 <= rating ? faStar : faStarRegular}
                        className="text-amber-400"
                      />
                    ))}
                </span>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
