import React from "react";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navigation from "../components/global/Navigation";

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
    `,
    content: css`
        border: 1px solid green;
    `,
};

const SiteWrapper = ({ children }) => {
    return (
        <div css={styles.wrapper}>
            <div css={styles.navContainer}>
                <Navigation />
            </div>
            <div css={styles.content}>{children}</div>
        </div>
    );
};

export default SiteWrapper;
