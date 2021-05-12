/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import PageContentWrapper from "../../containers/PageContentWrapper";
import backgroundImage from "../../images/davidlarsson-bw.jpg";
import HeroLogo from "../../images/davidlarsson-hero-image";
import Fade from "react-reveal/Fade";

const styles = {
    wrapper: css`
        background-color: transparent;
        display: flex;
    `,
    imageContainer: css`
        width: 70%;
        height: 100%;
        background-image: url(${backgroundImage});
        background-size: cover;
        background-position: center;
        position: relative;
    `,
    whiteSpace: css`
        width: 30%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `,
    heroLogo: css`
        position: absolute;
        left: 0px;
        height: 100%;
    `,
    description: css`
        font-style: italic;
        font-size: 14px;
        transition: all 0.2s ease;
    `,
};

const HomePage = () => {
    const theme = useTheme();
    return (
        <Fade>
            <PageContentWrapper
                css={[styles.wrapper, { color: theme.colors.text }]}
            >
                <div
                    css={[
                        styles.whiteSpace,
                        { backgroundColor: theme.colors.backdrop },
                    ]}
                >
                    <Fade right>
                        <div css={styles.description}>
                            <p>
                                <span style={{ fontStyle: "normal" }}>
                                    <strong>[dej-vid, larsawn]</strong>
                                </span>{" "}
                                a creative frontend developer that fancies
                                design. It also enjoys music, sports and food.
                            </p>
                        </div>
                    </Fade>
                </div>
                <div css={styles.imageContainer}>
                    <HeroLogo
                        css={[styles.heroLogo, { fill: theme.colors.backdrop }]}
                    />
                </div>
            </PageContentWrapper>
        </Fade>
    );
};

export default HomePage;
