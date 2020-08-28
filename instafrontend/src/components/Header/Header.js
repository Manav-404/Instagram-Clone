import React from "react";
import "./Header.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__empty"></div>
      <div className="header__left">
        <p className="header__title">Instagram</p>
      </div>
      <div className="header__middle">
        <input
          type="search"
          className="header__search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div className="header__right">
        <HomeRoundedIcon />
        <FavoriteBorderRoundedIcon />
      </div>
      <div className="header__empty"></div>
    </div>
  );
};

export default Header;
