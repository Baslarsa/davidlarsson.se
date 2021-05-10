import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Routes from "./components/global/Routes";
import SiteWrapper from "./containers/SiteWrapper";

function App() {
    return (
        <Router>
            <SiteWrapper>
                <Routes />
            </SiteWrapper>
        </Router>
    );
}

export default App;
