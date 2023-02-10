import React from "react";
import { useAuth } from "./firebase";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  const currentUser = useAuth();

  return (
    <div className="header active">
      <Link to="/">
        <img
          className="header_logo"
          src="./images/lgo_1-removebg-preview.png "
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav ">
        <Link to="/login">
          <div className="header_option ">
            <span className="header_optionLineOne">{currentUser?.email}</span>
            <span className="header_optionLineTwo"> Sign in </span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket  ">
            <ShoppingCartSharpIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
