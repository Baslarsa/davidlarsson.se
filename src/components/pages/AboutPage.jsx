/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import PageContentWrapper from "../../containers/PageContentWrapper";
import backgroundImage from "../../images/davidlarsson-bw.jpg";

const styles = {
    wrapper: css`
        background-color: transparent;
        display: flex;
    `,
    imageContainer: css`
        width: 30%;
        height: 100%;
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
        color: white;
    `,
    whiteSpace: css`
        width: 70%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `,
};

const AboutPage = () => {
    const theme = useTheme();
    return (
        <PageContentWrapper
            css={[styles.wrapper, { color: theme.colors.text }]}
        >
            <div
                css={[
                    styles.whiteSpace,
                    { backgroundColor: theme.colors.backdrop },
                ]}
            >
                <h1>THE</h1>
                <h1>STORY</h1>
                <br />
                <p>
                    Started out as a dreamer with a vision of becoming a hockey
                    star. I spent most of my younger years chasing pucks. When I
                    grew older I found that my suit contained something else -
                    creativity. This was what I became to spend both day and
                    night with. I started to find ambition in music and the
                    creative process behind it. <br />
                    In 2015 after a few years as a working class hero at the
                    local rock-drilling factory, I got accepted to one of the
                    most renowned songwriting and music-production schools in
                    Sweden. Maybe the world. Musikmakarna. From this day I left
                    my hometown permanently. I got quite good at making music
                    and spent a couple of years freelancing the music biz,
                    writing songs for quite big artists such as Felix Sandman
                    and Molly Hammar. Yea, that’s why that song is in the player
                    on this page, gotta get them royalties hehe. <br />
                    <br />
                    Jokes aside, as is the music - In 2019 I made the decision
                    to put the music on the shelf – I didn’t find it as amusing
                    and fun as I used to. Happily it pointed me to the
                    development area since it always has been an area I’ve been
                    wanting to get to know. <br />I started out studying
                    front-end development at IT-Högskolan in Stockholm. It felt
                    quite creative and still hugely demanded on the market which
                    was kind of what I was after when deciding on what way to
                    go. In frontend development I find pleasure in getting the
                    pixles just perfect, the animations to feel like butter and
                    to package an idea into the perfect gift-wrap. Now I’ve made
                    two internships and feel stoked to enter the biz for real.
                    Feel free to hit me up with a message or call if you’re
                    wondering anything or would like to know me even better.
                </p>
            </div>
            <div css={styles.imageContainer}>
                <h2>David Larsson</h2>
                <br />
                <p>
                    <strong>born:</strong> 1990-09-28 in Fagersta
                </p>
                <p>
                    <strong>likes:</strong> Music, sports, food and tech stuff
                </p>
                <p>
                    <strong>family:</strong> 9 siblings and a girlfriend
                </p>
            </div>
        </PageContentWrapper>
    );
};

export default AboutPage;
