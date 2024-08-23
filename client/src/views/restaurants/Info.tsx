import { useParams } from "react-router-dom";
import Ratings from "../../components/ratings/Ratings";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store";
import { useEffect } from "react";
import restaurantThunks from "../../features/thunks/restaurant";
import MidLoading from "../MidLoading";
import Error from "../Error";

const Info = () => {
  const { id } = useParams();
  const { isLoading, data } = useSelector(
    (state: RootState) => state.restaurant.info
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantThunks.info(id as string));
  }, []);
  console.log(data);

  return isLoading === "pending" ? (
    <MidLoading />
  ) : isLoading === "failed" ? (
    <Error />
  ) : (
    <div>
      {
        <Ratings
          total_reviews={data ? (data?.total_reviews as number) : 0}
          average_rating={data ? (data?.average_rating as number) : 0}
          grouped_reviews={data?.grouped_reviews as any}
        />
      }
      <h2 className="text-xl font-semibold">Overview</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
        asperiores. Ratione, expedita esse. Possimus pariatur culpa harum.
        Animi, deserunt ullam.
      </p>
      <div className="grid gap-2 max-w-60 p-2">
        {data?.opening_hours?.map(({ days, times }, index) => (
          <span className="flex items-center justify-between gap-2" key={index}>
            <p className="font-semibold text-nowrap">{days}</p>
            <p className="text-green-600 text-nowrap">: {times}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Info;
