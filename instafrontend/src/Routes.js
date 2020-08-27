import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Authentication from "./components/Authentication/Authentication";
import PrivateRoutes from "./PrivateRoutes";
import Home from "./components/Home/Home";
import CreateProfile from "./components/Profile/create/CreateProfile";
import Profile from "./components/Profile/Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/authenticate" component={Authentication} />
        <PrivateRoutes exact path="/home" component={Home} />
        <PrivateRoutes exact path="/profile" component={Profile} />
        <PrivateRoutes exact path="/profile/create" component={CreateProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
