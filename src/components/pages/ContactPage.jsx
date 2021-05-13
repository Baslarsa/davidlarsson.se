/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import PageContentWrapper from "../../containers/PageContentWrapper";
import StandardForm from "../global/StandardForm";
import Body from "../global/text/Body";
import BodyBold from "../global/text/BodyBold";
import MainTitle from "../global/text/MainTitle";
import Fade from "react-reveal/Fade";
import { useFetchData } from "../../utils/useFetchData";
import { BASE_URL, ENDPOINT } from "../../constants/constants";

const styles = {
    imageContainer: css`
        width: 50%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
        color: white;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    `,
    mainTitle: css`
        position: absolute;
        right: 4rem;
        bottom: 4rem;
        @media screen and (max-width: 1024px) {
            position: initial;
            display: flex;
            flex-direction: column;
        }
    `,
    whiteSpace: css`
        width: 50%;
        padding: 2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    `,
};

const ContactPage = () => {
    const theme = useTheme();
    const { isLoading, data } = useFetchData(ENDPOINT.CONTACTPAGE);
    return (
        <PageContentWrapper
            style={{ color: theme.colors.text }}
            loading={isLoading}
        >
            <div
                css={[
                    styles.whiteSpace,
                    { backgroundColor: theme.colors.backdrop },
                ]}
            >
                <Fade left>
                    <BodyBold>{data.title}</BodyBold>
                    <Body>{data.description}</Body>
                </Fade>
                <StandardForm />
            </div>
            {data.contact && (
                <div
                    css={[
                        styles.imageContainer,
                        {
                            backgroundImage: `url(${
                                BASE_URL + data.image.formats.large.url
                            })`,
                        },
                    ]}
                >
                    <Fade delay={800}>
                        <Body>
                            <strong>name:</strong>
                            <br />
                            {data.contact.name}
                        </Body>
                        <br />
                        <Body>
                            <strong>address:</strong>
                            <br />
                            {data.contact.address}
                            <br />
                            {`${data.contact.zip}, ${data.contact.city}`}
                        </Body>
                        <br />
                        <Body>
                            <strong>email:</strong> <br />
                            {data.contact.email}
                        </Body>
                        <br />
                        <Body>
                            <strong>phone:</strong> <br />
                            {data.contact.phone}
                        </Body>
                    </Fade>

                    <MainTitle css={styles.mainTitle}>
                        <Fade bottom delay={200}>
                            CONTACT ME
                        </Fade>
                    </MainTitle>
                </div>
            )}
        </PageContentWrapper>
    );
};

export default ContactPage;