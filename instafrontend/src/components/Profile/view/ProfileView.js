import React from "react";
import "./ProfileView.css";
import Header from "../../Header/Header";
import ImageHelper from "../../ImageHelper/ImageHelper";
import { useParams } from "react-router-dom";
import { isAuthenticated } from "../../Authentication/helper/authenticationHelper";
import { useState } from "react";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Link } from "@material-ui/core";

const ProfileView = () => {
  let { id } = useParams();
  const { user } = isAuthenticated();
  const [own, setOwn] = useState(false);

  const checker = () => {
    if (id === user._id) {
      setOwn(true);
    }
  };

  const loadProfile = () => {
    return (
      <div>
        <Header />
        <div className="profile__main">
          <div className="profile__image">
            <ImageHelper size="large" id={id} />
          </div>
          <div className="profile__info">
            <div className="profile__username">
              <div className="username">
                <p>manavd5</p>
              </div>
              <div className="edit">
                <button className="edit_button">Edit Profile</button>
              </div>
              <div className="settings">
                <SettingsOutlinedIcon style={{ fontSize: 30 }} />
              </div>
            </div>
            <div className="profile__following">
              <div className="post">
                <b>30</b> Posts
              </div>
              <div className="followers">
                <b>152 </b>followers
              </div>
              <div className="following">
                <b>147 </b> following
              </div>
            </div>
            <div className="profile__bio">
              <h3 className="name">Manav Desai</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                odit adipisci neque ipsam quod cum, optio illum, mollitia
                pariatur officia commodi? Odio modi laborum reprehenderit,
                ducimus aut eveniet quas corporis.
              </p>
              <Link to="https://github.com/Manav-404">
                <h3>https://github.com/Manav-404</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <div>{loadProfile()}</div>;
};

export default ProfileView;
