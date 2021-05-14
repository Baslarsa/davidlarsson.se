/** @jsxImportSource @emotion/react */
import { css, useTheme, keyframes } from '@emotion/react';
import PageContentWrapper from '../../containers/PageContentWrapper';
import AudioPlayer from '../global/AudioPlayer';
import MainTitle from '../global/text/MainTitle';
import audioFile from '../../constants/0emotions.mp3';
import Fade from 'react-reveal/Fade';
import { useFetchData } from '../../utils/useFetchData';
import { ENDPOINT, BASE_URL } from '../../constants/constants';

const flexContainer = keyframes`
    from {
    width: 50%;
    }

    to {
    width: 30%;
    }
`;

const styles = {
    imageContainer: css`
        width: 30%;
        height: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
        animation: ${flexContainer} 1s ease;
        @media screen and (max-width: 1024px) {
            width: 100%;
            height: 50vh;
            animation: none;
        }
    `,
    whiteSpace: css`
        width: 70%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        @media screen and (max-width: 1024px) {
            width: 100%;
            height: auto;
        }
    `,
};

const AboutPage = () => {
    const theme = useTheme();
    const { isLoading, data } = useFetchData(ENDPOINT.ABOUTPAGE);

    return (
        <Fade>
            <PageContentWrapper
                style={{ color: theme.colors.text }}
                loading={isLoading}>
                <div
                    css={[
                        styles.whiteSpace,
                        { backgroundColor: theme.colors.backdrop },
                    ]}>
                    {data && (
                        <div>
                            <Fade delay={800}>
                                <MainTitle>{data.title}</MainTitle>
                                <br />
                                <p>{data.text}</p>
                            </Fade>
                        </div>
                    )}
                </div>
                {data.image && (
                    <div
                        css={[
                            styles.imageContainer,
                            {
                                backgroundImage: `url(${data.image.formats.large.url})}`,
                            },
                        ]}>
                        <AudioPlayer audioFile={audioFile} />
                    </div>
                )}
            </PageContentWrapper>
        </Fade>
    );
};

export default AboutPage;
