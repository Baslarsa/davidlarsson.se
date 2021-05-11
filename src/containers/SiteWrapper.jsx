import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navigation from "../components/global/Navigation";
import { Icon } from "../icons";
import { COLORS } from "../constants/colors";

const styles = {
    wrapper: css`
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        display: grid;
        grid: 1fr / 4rem 1fr;
    `,
    navContainer: css`
        border: 1px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0;
    `,
    content: css`
        border: 1px solid green;
    `,
    siteLogo: css`
        padding: 0.5rem;
    `,
    nightToggle: css`
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        svg {
            margin: 0.2rem 0 0 0;
        }
    `,
};

const SiteWrapper = ({ children }) => {
    return (
        <div css={styles.wrapper}>
            <div css={styles.navContainer}>
                <a css={styles.siteLogo} href="/home">
                    <Icon.MainLogo fill={COLORS.MAIN_BLACK} />
                </a>
                <Navigation />
                <div css={styles.nightToggle}>
                    <Icon.MoonIcon fill={COLORS.MAIN_BLACK} />
                    <Icon.ToggleIcon fill="none" stroke={COLORS.MAIN_BLACK} />
                </div>
            </div>
            <div css={styles.content}>{children}</div>
        </div>
    );
};

export default SiteWrapper;
