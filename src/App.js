import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Routes from "./components/global/Routes";
import SiteWrapper from "./containers/SiteWrapper";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./constants/theme";

function App() {
    let darkModeStorageState = localStorage.getItem("DARKMODE") === "true";
    const [isDarkMode, setIsDarkMode] = useState(darkModeStorageState);

    const handleOnClick = useCallback(() => {
        setIsDarkMode(!isDarkMode);
    }, [isDarkMode, setIsDarkMode]);

    useEffect(() => {
        const updateLocalStorage = () => {
            localStorage.setItem("DARKMODE", isDarkMode);
        };
        updateLocalStorage();
    }, [isDarkMode]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <Router>
                <SiteWrapper
                    onThemeChange={handleOnClick}
                    isDarkMode={isDarkMode}
                >
                    <Routes />
                </SiteWrapper>
            </Router>
        </ThemeProvider>
    );
}

export default App;
