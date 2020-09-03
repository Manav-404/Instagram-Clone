import React, { useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import ImageHelper from "../ImageHelper/ImageHelper";
import PostImageHelper from "../Post/helper/PostImageHelper";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { isAuthenticated } from "../Authentication/helper/authenticationHelper";
import { getFriendPostsByUser } from "../Post/helper/PostHelper";

const Home = () => {
  const { user, token } = isAuthenticated();

  const [posts, setPosts] = useState([]);

  const getFriendsPost = () => {
    getFriendPostsByUser(token, user._id)
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFriendsPost();
  }, []);

  const loadNothing = () => {
    return <h1 className="no__posts">No posts to show</h1>;
  };

  const loadPosts = () => {
    return posts.map((post, index) => {
      return (
        <div key={index}>
          <div className="card__container">
            <div className="card__start">
              <div className="user">
                <div className="userpic">
                  <ImageHelper size="medium_small" id={post.user._id} />
                </div>
                <div className="usersname">
                  <p>{post.user.username}</p>
                </div>
              </div>
              <div className="bookmark">
                <BookmarkBorderIcon />
              </div>
            </div>
            <div className="card__middle">
              <PostImageHelper post={post} width={614} height={400} />
            </div>
            <div className="card__end">
              <div className="card__caption">
                <div className="usersname">
                  <p>manav.d5</p>
                </div>
                <div className="caption">
                  <p>{post.caption}</p>
                </div>
              </div>
              <div className="card__comments">
                <p>View all 2000 comments</p>
              </div>
              <section className="section">
                <div className="card__send">
                  <input
                    className="comment_input"
                    placeholder="ADD A COMMENT"
                    type="text"
                    autoComplete="off"
                  />
                  <Button
                    style={{ color: "blue", marginLeft: 250, marginBottom: 10 }}
                  >
                    POST
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    });
  };

  const loadChecker = () => {
    if (posts.length > 0) {
      return <div>{loadPosts()}</div>;
    } else {
      return <div>{loadNothing()}</div>;
    }
  };
  return (
    <div>
      <Header />
      {loadChecker()}
    </div>
  );
};

export default Home;
