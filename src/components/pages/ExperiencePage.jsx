/** @jsxImportSource @emotion/react */
import { css, useTheme, keyframes } from '@emotion/react';
import { useState } from 'react';
import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
} from 'react-router-dom';
import PageContentWrapper from '../../containers/PageContentWrapper';
import ExpandableList from '../global/ExpandableList';
import Label from '../global/text/Label';
import MainTitle from '../global/text/MainTitle';
import Fade from 'react-reveal/Fade';
import { useFetchData } from '../../utils/useFetchData';
import { BASE_URL, ENDPOINT } from '../../constants/constants';
import LoadingOverlay from '../global/LoadingOverlay';

const TAB_LIST = [
    { name: 'Experience', key: 'experience', link: '/experience' },
    { name: 'Education', key: 'education', link: '/education' },
    { name: 'Internships', key: 'internship', link: '/internships' },
];

const fadeIn = keyframes`
    from {
        border-color: transparent;
    }

`;

const styles = {
    wrapper: css`
        background-color: transparent;
        display: flex;
    `,
    imageContainer: css`
        width: 40%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem;
        box-sizing: border-box;
        color: white;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    `,
    whiteSpace: css`
        width: 60%;
        padding: 1rem 2rem 1rem 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: white;
        @media screen and (max-width: 1024px) {
            width: 100%;
            padding: 1rem;
        }
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
        animation: ${fadeIn} 0.5s ease;
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
    textBox: css`
        padding: 1rem;
    `,
};

const ExperiencePage = () => {
    const theme = useTheme();
    const match = useRouteMatch();
    const [activeTab, setActiveTab] = useState('experience');

    const { isLoading, data } = useFetchData(ENDPOINT.EXPERIENCEPAGE);

    return (
        <PageContentWrapper
            css={[styles.wrapper, { color: theme.colors.text }]}
            loading={isLoading}>
            {data.image ? (
                <div
                    css={[
                        styles.imageContainer,
                        {
                            backgroundImage: `url(${data.image.formats.large.url})`,
                        },
                    ]}>
                    <Fade left delay={200}>
                        <div>
                            <MainTitle>{data.title}</MainTitle>
                        </div>
                    </Fade>
                    <Fade left delay={600}>
                        <div
                            css={[
                                styles.textBox,
                                {
                                    backgroundColor:
                                        theme.colors.black_transparent,
                                },
                            ]}>
                            <p>{data.description}</p>
                        </div>
                    </Fade>
                </div>
            ) : (
                <LoadingOverlay loading={isLoading} />
            )}
            <div
                css={[
                    styles.whiteSpace,
                    { backgroundColor: theme.colors.backdrop },
                ]}>
                <Router>
                    <Fade top>
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
                                    onClick={() => setActiveTab(key)}>
                                    <Label color={theme.colors.text}>
                                        {name}
                                    </Label>
                                </Link>
                            ))}
                        </div>
                    </Fade>
                    <div
                        css={[styles.tabContent, { color: theme.colors.text }]}>
                        <Fade delay={300}>
                            <Switch>
                                <Route path={`${match.path}/education`}>
                                    <ExpandableList
                                        title="What I've studied"
                                        list="education"
                                    />
                                </Route>
                                <Route path={`${match.path}/internships`}>
                                    <ExpandableList
                                        title="Where I've done my internships"
                                        list="internship"
                                    />
                                </Route>
                                <Route path={`${match.path}`}>
                                    <ExpandableList
                                        title="My recent positions"
                                        list="work"
                                    />
                                </Route>
                            </Switch>
                        </Fade>
                    </div>
                </Router>
            </div>
        </PageContentWrapper>
    );
};

export default ExperiencePage;
