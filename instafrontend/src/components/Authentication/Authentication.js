import React, { useState, useEffect } from "react";
import "./Authentication.css";
import logo from "../../logo.png";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { Signup } from "./helper/authenticationHelper";

const Authentication = () => {
  const [signup, setSignup] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
    redirect: false,
  });

  useEffect(() => {
    setSignup(false);
  }, []);

  const { username, email, password, error, redirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const redirectToHome = () => {
    if (redirect == true) {
      console.log("signup successful");
    }
  };

  const errorOnSubmit = () => {
    if (error !== "") {
      return <Alert severity="error">{error}</Alert>;
    }
  };

  const onSignUpSubmit = (event) => {
    event.preventDefault();
    Signup({ username, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, redirect: false });
        } else {
          setValues({
            username: "",
            email: "",
            password: "",
            error: "",
            redirect: true,
          });
        }
      })
      .catch((error) => {
        setValues({ ...values, error: error, redirect: false });
      });
  };

  const loadSignup = () => {
    return (
      <div className="auth">
        {errorOnSubmit()}
        <div className="signup__container">
          <img src={logo} alt="" height="50" width="50" />
          <div className="title">Instagram</div>
          <form>
            <input
              type="text"
              name="text"
              placeholder="Username"
              value={username}
              onChange={handleChange("username")}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange("email")}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange("password")}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={onSignUpSubmit}
              fullWidth={true}
            >
              Sign Up
            </Button>
          </form>
          <p className="signup__text" onClick={() => setSignup(false)}>
            Already have an account ? Login
          </p>
        </div>
      </div>
    );
  };

  const login = () => {
    return (
      <div className="auth">
        <div className="login__container">
          <img src={logo} alt="" height="50" width="50" />
          <div className="title">Instagram</div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id=""
              onChange={handleChange("email")}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange("password")}
            />
            <br />
            <br />
            <Button variant="contained" color="primary" fullWidth={true}>
              Log In
            </Button>
          </form>
          <p className="signup__text" onClick={() => setSignup(true)}>
            Don't have an account ? Signup
          </p>
        </div>
      </div>
    );
  };

  return <div>{!signup ? login() : loadSignup()}</div>;
};

export default Authentication;
