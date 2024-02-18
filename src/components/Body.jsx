import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // useEffect - runs after whole UI is rendered
  useEffect(() => {
    fetchData();
  }, []);

  // fetching data from api using async await
  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    // converting fetched data into json
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Network Not Found!! Check your Internet Connection</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="m-4 px-4 py-1 bg-green-100 hover:bg-green-300 rounded-lg"
            onClick={() => {
              const searchedRes = listOfRestaurant.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 px-4 flex items-center">
          <button
            className="p-2 border bg-gray-100 hover:bg-gray-300 rounded-lg"
            onClick={() => {
              // filtering restaurant on the basis of rating
              const filteredList = listOfRestaurant.filter(
                (res) => res?.info?.avgRating > 4
              );
              // rerendering after rating filter
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* initial rendering */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
