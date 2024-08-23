import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../features/store";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect } from "react";
import restaurantThunks from "../../features/thunks/restaurant";
import CardOne from "../../components/meals/CardOne";

const Index = () => {
  const { isLoading, data } = useSelector(
    (state: RootState) => state.restaurant.restaurants
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(restaurantThunks.restaurants());
  }, []);

  console.log(data);

  return isLoading === "pending" ? (
    <Loading />
  ) : isLoading === "failed" ? (
    <Error />
  ) : (
    <div>
      <h2 className="text-2xl font-semibold">Restaurants</h2>
      <div className="flex flex-wrap gap-5 items-start justify-around">
        {data.map((restaurant, index) => (
          <CardOne key={index} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Index;
