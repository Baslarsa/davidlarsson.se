/** @jsxImportSource @emotion/react */
import { css, useTheme, keyframes } from "@emotion/react";
import { Icon } from "../../icons";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const styles = {
    wrapper: css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.5;
    `,
    icon: css`
        animation: ${rotate} 1s linear infinite;
    `,
};

const LoadingOverlay = () => {
    const theme = useTheme();
    return (
        <div css={styles.wrapper}>
            <Icon.Spinner
                css={[
                    styles.icon,
                    {
                        fill: theme.colors.text,
                        height: "2rem",
                        width: "2rem",
                        marginLeft: "-10rem",
                    },
                ]}
            />
        </div>
    );
};

export default LoadingOverlay;
