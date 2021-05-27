import Title from './text/Title';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { Icon } from '../../icons';
import BodyBold from './text/BodyBold';
import Body from './text/Body';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../utils/useFetchData';
import { ENDPOINT } from '../../constants/constants';
import LoadingOverlay from './LoadingOverlay';

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
        cursor: pointer;
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
        transform: scale(1);
        transition: all 0.3s;
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
    rotate: css`
        transform: scaleY(-1);
    `,
};

const ExpandableList = ({ list, title }) => {
    const [openRow, setIsOpenRow] = useState([]);
    const [tabData, setTabData] = useState([]);
    const theme = useTheme();
    const toggleRow = (identifier) => {
        if (openRow.includes(identifier)) {
            setIsOpenRow([]);
        } else {
            setIsOpenRow(identifier);
        }
    };
    const { isLoading, data = {} } = useFetchData(ENDPOINT.EXP_TYPES);

    useEffect(() => {
        const setState = () => {
            if (!!data) {
                const dataList = data.filter((e) => e.type === list);
                setTabData(dataList[0]?.experiences);
            }
            return;
        };
        setState();
    }, [data, list]);

    return (
        <div css={styles.wrapper}>
            <Title>{title}</Title>
            <Body>
                Click the arrow to expand the row and read more about the
                experience you're curious about.
            </Body>
            {tabData ? (
                <div css={styles.rowWrap}>
                    {tabData?.map((item) => (
                        <div key={item.name}>
                            <div
                                css={styles.row}
                                onClick={() => toggleRow(item.name)}>
                                <div
                                    css={[
                                        styles.icon,
                                        openRow.includes(item.name) &&
                                            styles.rotate,
                                    ]}>
                                    <Icon.ArrowIcon
                                        css={{
                                            stroke: `${theme.colors.text}`,
                                        }}
                                    />
                                </div>
                                <div css={styles.text}>
                                    <BodyBold>{item.name}</BodyBold>
                                    <Body>{item.location}</Body>
                                </div>
                                <Body css={styles.duration}>
                                    {item.duration}
                                </Body>
                            </div>
                            <div>
                                <Body
                                    css={[
                                        styles.expandableRow,
                                        openRow.includes(item.name) &&
                                            styles.expand,
                                        {
                                            backgroundColor:
                                                theme.colors.background,
                                        },
                                    ]}>
                                    {item.description}
                                </Body>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <LoadingOverlay loading={isLoading} />
            )}
        </div>
    );
};

export default ExpandableList;
