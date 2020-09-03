import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import ImageHelper from "../ImageHelper/ImageHelper";
import PostImageHelper from "../Post/helper/PostImageHelper";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Button } from "@material-ui/core";

const Home = () => {
  const post = {
    _id: "5f4f8602d14fc643062a8865",
    caption: "London Bridge",
    user: "5f4f644e57afa71f723155a4",
  };
  const loadPosts = () => {
    return (
      <div>
        <div className="card__container">
          <div className="card__start">
            <div className="user">
              <div className="userpic">
                <ImageHelper
                  size="medium_small"
                  id="5f4f644e57afa71f723155a4"
                />
              </div>
              <div className="usersname">
                <p>manav.d5</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
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
        <div className="card__container">
          <div className="card__start">
            <div className="user">
              <div className="userpic">
                <ImageHelper
                  size="medium_small"
                  id="5f4f644e57afa71f723155a4"
                />
              </div>
              <div className="usersname">
                <p>manav.d5</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
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
        <div className="card__container">
          <div className="card__start">
            <div className="user">
              <div className="userpic">
                <ImageHelper
                  size="medium_small"
                  id="5f4f644e57afa71f723155a4"
                />
              </div>
              <div className="usersname">
                <p>manav.d5</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
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
        <div className="card__container">
          <div className="card__start">
            <div className="user">
              <div className="userpic">
                <ImageHelper
                  size="medium_small"
                  id="5f4f644e57afa71f723155a4"
                />
              </div>
              <div className="usersname">
                <p>manav.d5</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
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
  };
  return (
    <div>
      <Header />
      {loadPosts()}
    </div>
  );
};

export default Home;
