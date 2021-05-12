/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Icon } from "../../icons";
import Body from "./text/Body";
import BodyBold from "./text/BodyBold";
import image from "../../images/emotions.jpeg";
import ReactHowler from "react-howler";
import { useState } from "react";
import Fade from "react-reveal/Fade";

const styles = {
    wrapper: css`
        margin: 1rem 0;
        transition: all 0.3s;
        cursor: pointer;
        display: inline-block;
        flex-direction: column;
        align-items: center;
        align-self: center;
        width: 10rem;
        text-align: center;
    `,
    iconWrap: css`
        z-index: 1;
    `,
    imageContainer: css`
        width: 10rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 10rem;
        position: relative;
        background-image: url(${image});
        background-size: cover;
        background-position: center;
    `,
    overlay: css`
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.3s;
        background: transparent;
        &:hover {
            opacity: 1;
        }
    `,
};

const AudioPlayer = ({ audioFile }) => {
    const [audioIsPlaying, setAudioIsPlaying] = useState(false);
    const theme = useTheme();

    return (
        <div
            css={[styles.wrapper]}
            onClick={() => setAudioIsPlaying(!audioIsPlaying)}
        >
            <Fade delay={500}>
                <div css={styles.imageContainer}>
                    <ReactHowler src={audioFile} playing={audioIsPlaying} />
                    <div
                        css={[
                            styles.overlay,
                            { backgroundColor: theme.colors.black_transparent },
                            audioIsPlaying && { opacity: 1 },
                        ]}
                    ></div>
                    <div css={styles.iconWrap}>
                        {audioIsPlaying ? (
                            <Icon.Pause
                                css={{
                                    fill: theme.colors.white,
                                    height: "3rem",
                                    width: "3rem",
                                }}
                            />
                        ) : (
                            <Icon.Play
                                css={{
                                    fill: theme.colors.white,
                                    height: "3rem",
                                    width: "3rem",
                                }}
                            />
                        )}
                    </div>
                </div>
                <BodyBold css={{ color: theme.colors.white }}>
                    Felix Sandman
                </BodyBold>
                <Body css={{ color: theme.colors.white }}>0 Emotions</Body>
            </Fade>
        </div>
    );
};

export default AudioPlayer;
