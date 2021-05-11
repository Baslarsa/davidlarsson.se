import React, { useCallback, useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Icon } from "../../icons";

const styles = {
    nightToggle: css`
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        align-items: center;
        svg {
            margin: 0.2rem 0;
        }
    `,
    moon: css`
        padding: 0.5rem;
    `,
    toggleFrame: css`
        width: 1.5rem;
        border-radius: 0.6rem;
        box-sizing: border-box;
        transition: all 0.2s ease;
    `,
    toggleSwitch: css`
        margin: 0.1rem;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        transition: all 0.2s ease;
    `,
    toggleOn: css`
        display: flex;
        justify-content: flex-end;
    `,
    noBg: css`
        background-color: white;
    `,
};
const DarkModeToggle = ({ onChange, toggleState }) => {
    const theme = useTheme();

    return (
        <div css={styles.nightToggle} onClick={onChange}>
            <Icon.MoonIcon
                css={[
                    styles.moon,
                    css`
                        fill: ${theme.colors.text};
                    `,
                ]}
            />
            <div
                css={[
                    styles.toggleFrame,
                    css`
                        border: 2px solid ${theme.colors.text};
                    `,
                    toggleState && [
                        styles.toggleOn,
                        { backgroundColor: theme.colors.primary },
                    ],
                ]}
            >
                <div
                    css={[
                        styles.toggleSwitch,
                        { backgroundColor: theme.colors.primary },
                        toggleState && [
                            styles.noBg,
                            { backgroundColor: theme.colors.background },
                        ],
                    ]}
                ></div>
            </div>
        </div>
    );
};

export default DarkModeToggle;
