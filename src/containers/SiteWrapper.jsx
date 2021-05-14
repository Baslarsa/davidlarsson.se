import React from 'react';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import Navigation from '../components/global/Navigation';
import DarkModeToggle from '../components/global/DarkModeToggle';
import { Icon } from '../icons';
import { Fade } from 'react-reveal';
import { useFetchData } from '../utils/useFetchData';
import { ENDPOINT } from '../constants/constants';

const SocialIcon = ({ name, link, color }) => {
    switch (name) {
        case 'Linkedin':
            return (
                <a target="_blank" href={link} rel="noreferrer">
                    <Icon.LinkedinIcon css={{ fill: color }} />
                </a>
            );
        case 'Github':
            return (
                <a target="_blank" href={link} rel="noreferrer">
                    <Icon.GithubIcon css={{ fill: color }} />
                </a>
            );
        default:
            break;
    }
};

const SiteWrapper = ({ children, onThemeChange, isDarkMode }) => {
    const theme = useTheme();

    const styles = {
        wrapper: css`
            width: 100%;
            height: 100vh;
            box-sizing: border-box;
            display: grid;
            grid: 1fr / 4rem 1fr;
            background-color: ${theme.colors.background};
            @media screen and (max-width: 1024px) {
                grid: 4rem 1fr / 1fr;
            }
        `,
        navContainer: css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 0;
            @media screen and (max-width: 1024px) {
                flex-direction: row;
            }
        `,
        socialWrapper: css`
            position: absolute;
            z-index: 11;
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
            @media screen and (max-width: 1024px) {
                display: none;
            }
        `,
        siteLogo: css`
            padding: 0.5rem;
        `,
        socialIcon: css`
            fill: ${theme.colors.text};
        `,
    };

    const { data } = useFetchData(ENDPOINT.SOCIALMEDIA);

    return (
        <>
            {data && (
                <div>
                    <div css={styles.socialWrapper}>
                        {data.map((link) => (
                            <Fade right key={link.name}>
                                <SocialIcon
                                    name={link.name}
                                    link={link.link}
                                    color={theme.colors.text}
                                />
                            </Fade>
                        ))}
                    </div>
                    <div
                        css={[
                            { backgroundColor: theme.colors.background },
                            styles.wrapper,
                        ]}>
                        <div css={styles.navContainer}>
                            <a css={styles.siteLogo} href="/home">
                                <Fade left>
                                    <Icon.MainLogo
                                        css={{ fill: theme.colors.text }}
                                    />
                                </Fade>
                            </a>
                            <Fade left>
                                <Navigation />
                                <DarkModeToggle
                                    onChange={onThemeChange}
                                    toggleState={isDarkMode}
                                />
                            </Fade>
                        </div>
                        <div css={styles.content}>{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SiteWrapper;
