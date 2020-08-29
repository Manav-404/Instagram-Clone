import React from "react";
import "./Header.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import ImageHelper from "../ImageHelper/ImageHelper";
import { isAuthenticated } from "../Authentication/helper/authenticationHelper";
import { Redirect, Link } from "react-router-dom";

const Header = () => {
  const { user } = isAuthenticated();

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
        <Link to={`/profile/view/${user._id}`}>
          <ImageHelper id={user._id} size="small"></ImageHelper>
        </Link>
      </div>
      <div className="header__empty"></div>
    </div>
  );
};

export default Header;
