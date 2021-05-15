/** @jsxImportSource @emotion/react */
import { css, useTheme, keyframes } from '@emotion/react';
import { Icon } from '../../icons';

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
        padding: 1rem 0;
    `,
    icon: css`
        animation: ${rotate} 1s linear infinite;
        height: 2rem;
        width: 2rem;
        margin-left: -5rem;

        @media screen and (max-width: 1024px) {
            margin: 0;
        }
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
                    },
                ]}
            />
        </div>
    );
};

export default LoadingOverlay;
