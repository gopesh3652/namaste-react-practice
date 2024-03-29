import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  // normal object destructring
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-purple-100 hover:bg-purple-400" /*style={{ backgroundColor: "#f0f0f0" }}*/
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withDiscount = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label>FLAT DISCOUNT</label>
        <RestaurentCard />
      </div>
    );
  };
};

export default RestaurentCard;
