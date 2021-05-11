import React from "react";

/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Navigation from "../components/global/Navigation";
import DarkModeToggle from "../components/global/DarkModeToggle";
import { Icon } from "../icons";

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
    socialWrapper: css`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        height: 4rem;
        margin: 0 2rem;
        a {
            margin: 0 1rem;
        }
    `,
    siteLogo: css`
        padding: 0.5rem;
    `,
};

const SiteWrapper = ({ children, onThemeChange, isDarkMode }) => {
    const theme = useTheme();
    return (
        <>
            <div css={styles.socialWrapper}>
                <a href="www.google.com">
                    <Icon.GithubIcon css={{ fill: theme.colors.text }} />
                </a>
                <a href="www.google.com">
                    <Icon.LinkedinIcon css={{ fill: theme.colors.text }} />
                </a>
            </div>
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
        </>
    );
};

export default SiteWrapper;
