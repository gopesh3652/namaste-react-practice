import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

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
    const data = await fetch(API_URL);
    // converting fetched data into json
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {/* initial rendering */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;