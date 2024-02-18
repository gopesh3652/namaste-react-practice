import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // [ , ] --> this is normal array destructuring
  const onlineStatus = useOnlineStatus();
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={LOGO_URL} />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus? "✅": "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            // login and logout button on the top changes on a toggle
            className="login"
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
