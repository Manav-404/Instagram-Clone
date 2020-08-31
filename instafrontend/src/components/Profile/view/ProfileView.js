import React, { useEffect } from "react";
import "./ProfileView.css";
import Header from "../../Header/Header";
import ImageHelper from "../../ImageHelper/ImageHelper";
import { useParams, Link } from "react-router-dom";
import { isAuthenticated } from "../../Authentication/helper/authenticationHelper";
import { useState } from "react";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Divider from "@material-ui/core/Divider";
import { getProfileById } from "../helper/profileHelper";
import { Tabs, Tab } from "@material-ui/core";
import GridOnIcon from "@material-ui/icons/GridOn";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { getPostsByUser } from "../../Post/helper/PostHelper";
import PostImageHelper from "../../Post/helper/PostImageHelper";

const ProfileView = () => {
  let { id } = useParams();
  const { user, token } = isAuthenticated();
  const [own, setOwn] = useState(false);
  const [error, setError] = useState("");
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    bio: "",
    link: "",
    followers: [],
    following: [],
  });

  const [value, setValue] = useState("one");

  const [post, setPost] = useState([]);

  const checker = () => {
    if (id === user._id) {
      setOwn(true);
    }
  };

  const { username, name, bio, link, followers, following } = profile;

  const getProfile = () => {
    getProfileById(id, token)
      .then((data) => {
        setProfile({
          username: data.username,
          name: data.name,
          bio: data.bio,
          link: data.link,
          followers: data.followers,
          following: data.following,
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  const getPosts = () => {
    getPostsByUser(token, id)
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const loadPosts = () => {
    return (
      <div className="photo__grid">
        {post.map((p, index) => {
          return <PostImageHelper value={p} />;
        })}
      </div>
    );
  };

  const loadTop = () => {
    return (
      <div className="profile__main">
        <div className="profile__image">
          <ImageHelper size="large" id={id} />
        </div>
        <div className="profile__info">
          <div className="profile__username">
            <div className="username">
              <p>{username}</p>
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
              <b>{followers.length} </b>followers
            </div>
            <div className="following">
              <b>{following.length} </b> following
            </div>
          </div>
          <div className="profile__bio">
            <h3 className="name">{name}</h3>
            <p>{bio}</p>
            <Link to="https://github.com/Manav-404">
              <h3>{link}</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (event, value) => {
    setValue(value);
  };

  const loadPostBookmark = () => {
    if (value === "one") {
      return <div>1</div>;
    } else {
      return <h1>2</h1>;
    }
  };

  const loadBottom = () => {
    return (
      <div className="profile__bottom">
        <div className="profile__tab">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{ style: { backgroundColor: "black" } }}
          >
            <Tab value="one" icon={<GridOnIcon />}></Tab>
            <Tab value="two" icon={<BookmarkBorderIcon />}></Tab>
          </Tabs>
        </div>
        <div className="profile__posts">{loadPostBookmark()}</div>
      </div>
    );
  };

  const loadProfile = () => {
    return (
      <div>
        <Header />
        {loadTop()}
        {loadBottom()}
      </div>
    );
  };
  return <div>{loadProfile()}</div>;
};

export default ProfileView;
