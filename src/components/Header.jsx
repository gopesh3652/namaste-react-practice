import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // [ , ] --> this is normal array destructuring
  const onlineStatus = useOnlineStatus();
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-yellow-100 mb-4 shadow-lg sm:bg-pink-100 lg:bg-orange-100">
      <div className="logo-container">
        <a href="/">
          <img className="w-40" src={LOGO_URL} />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 text-lg">
          <li className="px-4 hover:bg-orange-200">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 hover:bg-orange-200">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-orange-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:bg-orange-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:bg-orange-200">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:bg-orange-200">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            // login and logout button on the top changes on a toggle
            className="px-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
