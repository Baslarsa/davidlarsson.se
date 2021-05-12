import Title from "./text/Title";
/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Icon } from "../../icons";
import BodyBold from "./text/BodyStrong";
import Body from "./text/Body";
import { useState } from "react";

const styles = {
    wrapper: css`
        display: flex;
        flex-direction: column;
    `,
    row: css`
        display: grid;
        grid: 1fr / 3rem 3fr 1fr;
        padding: 0.5rem 0;
        align-items: center;
    `,
    rowWrap: css`
        margin: 1rem 0;
    `,
    duration: css`
        opacity: 0.5;
    `,
    icon: css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        height: 100%;
    `,
    expandableRow: css`
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s;
        opacity: 0;
    `,
    expand: css`
        opacity: 1;
        visibility: visible;
        max-height: 500px;
        padding: 1rem 1rem;
    `,
};

const ExpandableList = ({ list, title }) => {
    const [openRow, setIsOpenRow] = useState([]);
    const theme = useTheme();

    const toggleRow = (identifier) => {
        if (openRow.includes(identifier)) {
            setIsOpenRow([]);
        } else {
            setIsOpenRow(identifier);
        }
    };

    return (
        <div css={styles.wrapper}>
            <Title>{title}</Title>
            <div css={styles.rowWrap}>
                {list.map((item) => (
                    <>
                        <div css={styles.row} key={item.title}>
                            <div
                                css={styles.icon}
                                onClick={() => toggleRow(item.title)}
                            >
                                <Icon.ArrowIcon
                                    css={{
                                        stroke: `${theme.colors.text}`,
                                    }}
                                />
                            </div>
                            <div css={styles.text}>
                                <BodyBold>{item.title}</BodyBold>
                                <Body>{item.location}</Body>
                            </div>
                            <div css={styles.duration}>{item.duration}</div>
                        </div>
                        <div
                            css={[
                                styles.expandableRow,
                                openRow.includes(item.title) && styles.expand,
                                { backgroundColor: theme.colors.background },
                            ]}
                        >
                            <Body>{item.description}</Body>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default ExpandableList;
