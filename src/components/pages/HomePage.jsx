/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import PageContentWrapper from '../../containers/PageContentWrapper';
import HeroLogo from '../../images/davidlarsson-hero-image';
import Fade from 'react-reveal/Fade';
import { useFetchData } from '../../utils/useFetchData';
import { BASE_URL, ENDPOINT } from '../../constants/constants';

const styles = {
    imageContainer: css`
        width: 70%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
        @media screen and (max-width: 1024px) {
            width: 100%;
            height: 40vh;
        }
        @media screen and (max-width: 768px) {
            height: 60vh;
        }
    `,
    whiteSpace: css`
        width: 30%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media screen and (max-width: 1024px) {
            width: 100%;
            height: 30vh;
        }
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

    const { isLoading, data } = useFetchData(ENDPOINT.HOMEPAGE);

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
                    <Fade right>
                        <div css={styles.description}>
                            <p>
                                <span style={{ fontStyle: 'normal' }}>
                                    <strong>{data?.Herotextclam}</strong>
                                </span>{' '}
                                {data?.Herotext}
                            </p>
                        </div>
                    </Fade>
                </div>
                {data.Heroimage && (
                    <div
                        css={[
                            styles.imageContainer,
                            {
                                backgroundImage: `url(${BASE_URL}${data.Heroimage.formats?.large.url})`,
                            },
                        ]}>
                        <HeroLogo
                            css={[
                                styles.heroLogo,
                                { fill: theme.colors.backdrop },
                            ]}
                        />
                    </div>
                )}
            </PageContentWrapper>
        </Fade>
    );
};

export default HomePage;
