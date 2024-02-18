import { useEffect, useState } from "react";
import { RES_INFO } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const resData = await fetch(RES_INFO + resID);
    const json = await resData.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
