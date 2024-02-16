import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_INFO } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const resData = await fetch(RES_INFO + resID);
    const json = await resData.json();
    setResInfo(json.data);
  };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  if (resInfo === null) return <Shimmer />;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
