import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action --> dispatch(action)
    // dispatches an action -->

    // it goes as an object to the reduces function
    // {
    //   payload: "pizza";
    // }
    dispatch(addItem(item));
  };

  return (
    <div>
      {item.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <br />
              <span>
                &#8377;
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12">
            <button
              className="p-1 bg-white shadow-lg m-auto absolute rounded-sm"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
