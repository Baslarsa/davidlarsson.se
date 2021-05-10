import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Icon } from "../../icons/nav";

const styles = {
    navWrapper: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        a {
            margin: 0.5rem 0;
            padding: 0.5rem;
        }
    `,
    navIconActive: css`
        fill: black;
    `,
    navIcon: css`
        fill: gray;
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
                {menuItems.map(({ linkPath, Icon, key, exact }) => (
                    <Link to={linkPath} key={key}>
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
