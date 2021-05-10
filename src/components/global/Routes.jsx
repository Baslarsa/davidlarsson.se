import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route path="/about">
                <div>about</div>
            </Route>
            <Route path="/experience">
                <div>experience</div>
            </Route>
            <Route path="/contact">
                <div>contact</div>
            </Route>
            <Redirect from="/" to="/home" />
            <Route exact path="/home">
                <div>home</div>
            </Route>
        </Switch>
    );
};

export default Routes;
