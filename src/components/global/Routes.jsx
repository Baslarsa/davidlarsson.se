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
            <Route exact path="/home">
                <div>home</div>
            </Route>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
};

export default Routes;
