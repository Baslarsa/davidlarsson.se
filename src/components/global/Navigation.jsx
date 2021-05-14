import React from 'react';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { Icon } from '../../icons';

const styles = {
    navWrapper: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        a {
            padding: 0.2rem 0;
            margin: 0.6rem 0;
            @media screen and (max-width: 1024px) {
                padding: 0 0.2rem;
                margin: 0 0.6rem;
            }
        }
        @media screen and (max-width: 1024px) {
            flex-direction: row;
        }
    `,
    navIconActive: css`
        transition: all 0.3s ease;
        opacity: 1;
    `,
    navIcon: css`
        transition: all 0.3s ease;
        opacity: 0.4;
        &:hover {
            opacity: 0.9;
        }
    `,
    iconWrapActive: css`
        transition: all 0.3s ease;
    `,
    iconWrapInActive: css`
        transition: all 0.3s ease;
        border-bottom: 1px solid transparent;
    `,
};

const menuItems = [
    { linkPath: '/home', Icon: Icon.HomeIcon, key: 'home' },
    {
        linkPath: '/about',
        Icon: Icon.AboutIcon,
        key: 'about',
    },
    {
        linkPath: '/experience',
        Icon: Icon.ExperienceIcon,
        key: 'experience',
    },
    {
        linkPath: '/contact',
        Icon: Icon.ContactIcon,
        key: 'contact',
    },
];

const Navigation = () => {
    const location = useLocation();
    const theme = useTheme();
    const isPathActive = (path) => Boolean(matchPath(location.pathname, path));

    return (
        <div>
            <nav css={styles.navWrapper}>
                {menuItems.map(({ linkPath, Icon, key }) => (
                    <Link
                        to={linkPath}
                        key={key}
                        css={[
                            isPathActive(linkPath)
                                ? [
                                      styles.iconWrapActive,
                                      {
                                          borderBottom: `1px solid
                                                ${theme.colors.primary}`,
                                      },
                                  ]
                                : styles.iconWrapInActive,
                        ]}>
                        <Icon
                            css={[
                                isPathActive(linkPath)
                                    ? styles.navIconActive
                                    : styles.navIcon,
                                {
                                    fill: theme.colors.text,
                                },
                            ]}
                        />
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navigation;
