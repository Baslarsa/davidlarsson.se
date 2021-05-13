import LoadingOverlay from "../components/global/LoadingOverlay";
/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { FONTSIZE } from "../constants/constants";

const styles = {
    wrapper: css`
        width: 100%;
        height: 100vh;
        padding: 4rem 0;
        box-sizing: border-box;
        background-color: transparent;
        display: flex;
        @media screen and (max-width: 1024px) {
            flex-direction: column-reverse;
            height: auto;
            padding: 0;
        }
    `,
};

const PageContentWrapper = ({ children, loading, ...props }) => {
    return (
        <div css={styles.wrapper} {...props}>
            {loading ? <LoadingOverlay /> : children}
        </div>
    );
};

export default PageContentWrapper;
