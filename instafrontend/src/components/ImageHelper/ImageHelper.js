import React from "react";
import { API } from "../../backend";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const ImageHelper = ({ id, size }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      marginLeft: "17px",
      marginTop: "5px",
    },
    large: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
  }));

  const classes = useStyles();

  const image = () => {
    if (size === "small") {
      return <Avatar src={imageURL} className={classes.small} />;
    } else {
      return <Avatar src={imageURL} className={classes.large} />;
    }
  };

  const imageURL = id
    ? `${API}/profile/photo/${id}`
    : "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  return <div>{image()}</div>;
};

export default ImageHelper;