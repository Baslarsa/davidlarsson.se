import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Icon } from "../../icons/";
import { COLORS } from "../../constants/colors";

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
        }
    `,
    navIconActive: css`
        transition: all 0.3s ease;
        fill: ${COLORS.MAIN_BLACK};
    `,
    navIcon: css`
        transition: all 0.3s ease;
        fill: ${COLORS.GRAY};
        &:hover {
            fill: ${COLORS.MAIN_BLACK};
        }
    `,
    iconWrapActive: css`
        transition: all 0.3s ease;
        border-bottom: 1px solid ${COLORS.MAIN};
    `,
    iconWrapInActive: css`
        transition: all 0.3s ease;
        border-bottom: 1px solid transparent;
    `,
};

const menuItems = [
    { linkPath: "/home", Icon: Icon.HomeIcon, key: "home" },
    {
        linkPath: "/about",
        Icon: Icon.AboutIcon,
        key: "about",
    },
    {
        linkPath: "/experience",
        Icon: Icon.ExperienceIcon,
        key: "experience",
    },
    {
        linkPath: "/contact",
        Icon: Icon.ContactIcon,
        key: "contact",
    },
];

const Navigation = () => {
    const location = useLocation();

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
                                ? styles.iconWrapActive
                                : styles.iconWrapInActive,
                        ]}
                    >
                        <Icon
                            css={[
                                isPathActive(linkPath)
                                    ? styles.navIconActive
                                    : styles.navIcon,
                            ]}
                        />
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Navigation;
