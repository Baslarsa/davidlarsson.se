import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navigation from "../components/global/Navigation";
import { Icon } from "../icons";
import DarkModeToggle from "../components/global/DarkModeToggle";

const styles = {
    wrapper: css`
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: grid;
        grid: 1fr / 4rem 1fr;
    `,
    navContainer: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
    `,
    content: css`
        border: 1px solid black;
    `,
    siteLogo: css`
        padding: 0.5rem;
    `,
};

const SiteWrapper = ({ children, onThemeChange, isDarkMode }) => {
    return (
        <div
            css={(theme) => [
                { backgroundColor: theme.colors.background },
                styles.wrapper,
            ]}
        >
            <div css={styles.navContainer}>
                <a css={styles.siteLogo} href="/home">
                    <Icon.MainLogo
                        css={(theme) => ({ fill: theme.colors.text })}
                    />
                </a>
                <Navigation />
                <DarkModeToggle
                    onChange={onThemeChange}
                    toggleState={isDarkMode}
                />
            </div>
            <div css={styles.content}>{children}</div>
        </div>
    );
};

export default SiteWrapper;
