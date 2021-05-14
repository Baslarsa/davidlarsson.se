/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import Triangle from '../images/Triangle';

const styles = {
    wrapper: css`
        padding: 0.3rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        margin: 1rem 0;
        text-transform: lowercase;
        position: relative;
        background-color: transparent;
        transition: all 0.3s;
        cursor: pointer;
    `,
    triangle: css`
        position: absolute;
        left: 0;
        height: 100%;
        width: 5px;
    `,
};

const PrimaryButton = ({ onClick, title }) => {
    const theme = useTheme();
    return (
        <div
            css={[styles.wrapper, { border: `1px solid ${theme.colors.text}` }]}
            onClick={onClick}>
            <div css={styles.triangle}>
                <Triangle css={{ fill: theme.colors.text }} />
            </div>
            {title}
        </div>
    );
};

export default PrimaryButton;
