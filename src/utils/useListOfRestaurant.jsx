import { useEffect, useState } from "react";
import { RES_LIST } from "./constants";

const useListOfRestaurant = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  // useEffect - runs after whole UI is rendered
  useEffect(() => {
    fetchData();
  }, []);

  // fetching data from api using async await
  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    // converting fetched data into json
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(listOfRestaurant);
  };
  return listOfRestaurant;
};

export default useListOfRestaurant;
