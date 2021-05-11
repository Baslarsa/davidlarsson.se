import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExperiencePage from "../pages/ExperiencePage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/experience">
                <ExperiencePage />
            </Route>
            <Route path="/contact">
                <div>contact</div>
            </Route>
            <Route exact path="/home">
                <HomePage />
            </Route>

            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    );
};

export default Routes;
