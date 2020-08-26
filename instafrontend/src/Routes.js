import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Authentication from "./components/Authentication/Authentication";
import PrivateRoutes from "./PrivateRoutes";
import Home from "./components/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/authenticate" component={Authentication} />
        <PrivateRoutes exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
