/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import PageContentWrapper from "../../containers/PageContentWrapper";
import backgroundImage from "../../images/plane.jpg";
import StandardForm from "../global/StandardForm";
import Body from "../global/text/Body";
import BodyBold from "../global/text/BodyBold";
import MainTitle from "../global/text/MainTitle";
import Fade from "react-reveal/Fade";

const styles = {
    wrapper: css`
        background-color: transparent;
        display: flex;
    `,
    imageContainer: css`
        width: 50%;
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
    mainTitle: css`
        position: absolute;
        right: 4rem;
        bottom: 4rem;
    `,
    whiteSpace: css`
        width: 50%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
                <Fade left>
                    <BodyBold>
                        If you haven't found what you look for already. Contact
                        me through this form.
                    </BodyBold>
                    <Body>Or you can just use the info to the right. </Body>
                </Fade>
                <StandardForm />
            </div>
            <div css={styles.imageContainer}>
                <Fade delay={800}>
                    <Body>
                        <strong>name:</strong>
                        <br />
                        David Larsson
                    </Body>
                    <br />
                    <Body>
                        <strong>address:</strong>
                        <br />
                        Gamla Enköpingsvägen 130B
                        <br />
                        17461, Sundbyberg
                    </Body>
                    <br />
                    <Body>
                        <strong>email:</strong> <br />
                        davvelars@gmail.com
                    </Body>
                    <Body>
                        <strong>phone:</strong> <br />
                        +46 74 841 14 54
                    </Body>
                </Fade>

                <MainTitle css={styles.mainTitle}>
                    <Fade bottom delay={200}>
                        CONTACT ME
                    </Fade>
                </MainTitle>
            </div>
        </PageContentWrapper>
    );
};

export default AboutPage;
