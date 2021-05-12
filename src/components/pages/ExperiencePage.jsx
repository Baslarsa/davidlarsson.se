/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useState } from "react";
import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
} from "react-router-dom";
import PageContentWrapper from "../../containers/PageContentWrapper";
import backgroundImage from "../../images/surfer.jpg";
import ExpandableList from "../global/ExpandableList";
import Label from "../global/text/Label";
import MainTitle from "../global/text/MainTitle";

const styles = {
    wrapper: css`
        background-color: transparent;
        display: flex;
    `,
    imageContainer: css`
        width: 40%;
        height: 100%;
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        box-sizing: border-box;
        color: white;
    `,
    whiteSpace: css`
        width: 60%;
        padding: 1rem 2rem 1rem 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: white;
    `,
    tabList: css`
        display: flex;
        width: 100%;
        margin-bottom: 1rem;
        a {
            text-decoration: none;
            margin: 0.5rem 1.5rem 0.5rem 0rem;
        }
    `,
    active: css`
        transition: all 1 ease;
        opacity: 1;
    `,
    inactive: css`
        transition: all 1 ease;
        opacity: 0.5;
        border: 2px;
    `,
    tabContent: css`
        width: 100%;
        height: 100%;
    `,
};

const TAB_LIST = [
    { name: "Experience", key: "experience", link: "/experience" },
    { name: "Education", key: "education", link: "/education" },
    { name: "Internships", key: "internship", link: "/internships" },
];

const EDUCATIONS = [
    {
        title: "Musikmakarna Songwriters Academy",
        duration: "2015-2017",
        location: "Örnsköldsvik",
        description:
            "My biggest interests in life is sports, music, tech and food. I played hockey for my entire childhood and realized I wasn’t going to be a hockey pro. I then tried music, and realized it wasn’t a business for me. I guess chocolate making on Mondelez counts for food, so apparently there’s only tech left. Let's start with frontend development.",
    },
    {
        title: "Frontend Development",
        duration: "2019-2021",
        location: "IT-Högskolan, Stockholm",
        description:
            "My biggest interests in life is sports, music, tech and food. I played hockey for my entire childhood and realized I wasn’t going to be a hockey pro. I then tried music, and realized it wasn’t a business for me. I guess chocolate making on Mondelez counts for food, so apparently there’s only tech left. Let's start with frontend development.",
    },
];

const AboutPage = () => {
    const theme = useTheme();
    const match = useRouteMatch();
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <PageContentWrapper
            css={[styles.wrapper, { color: theme.colors.text }]}
        >
            <div css={styles.imageContainer}>
                <div>
                    <MainTitle>WHAT I'VE</MainTitle>
                    <MainTitle>DONE</MainTitle>
                </div>
                <div>
                    <p>
                        My biggest interests in life is sports, music, tech and
                        food. I played hockey for my entire childhood and
                        realized I wasn’t going to be a hockey pro. I then tried
                        music, and realized it wasn’t a business for me. I guess
                        chocolate making on Mondelez counts for food, so
                        apparently there’s only tech left. Let’s start with
                        frontend development.{" "}
                    </p>
                </div>
            </div>
            <div
                css={[
                    styles.whiteSpace,
                    { backgroundColor: theme.colors.backdrop },
                ]}
            >
                <Router>
                    <div css={styles.tabList}>
                        {TAB_LIST.map(({ link, key, name }) => (
                            <Link
                                to={match.url + link}
                                key={key}
                                css={[
                                    activeTab === key
                                        ? [
                                              styles.active,
                                              {
                                                  borderBottom: `1px solid ${theme.colors.primary}`,
                                              },
                                          ]
                                        : [
                                              styles.inactive,
                                              {
                                                  borderBottom: `1px solid ${theme.colors.backdrop}`,
                                              },
                                          ],
                                ]}
                                onClick={() => setActiveTab(key)}
                            >
                                <Label color={theme.colors.text}>{name}</Label>
                            </Link>
                        ))}
                    </div>
                    <div
                        css={[styles.tabContent, { color: theme.colors.text }]}
                    >
                        <Switch>
                            <Route path={`${match.path}/education`}>
                                <ExpandableList
                                    title="What I've studied"
                                    list={EDUCATIONS}
                                />
                            </Route>
                            <Route path={`${match.path}/internships`}>
                                <ExpandableList
                                    title="Where I've done my internships"
                                    list={EDUCATIONS}
                                />
                            </Route>
                            <Route path={`${match.path}`}>
                                <ExpandableList
                                    title="My recent positions"
                                    list={EDUCATIONS}
                                />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </PageContentWrapper>
    );
};

export default AboutPage;
