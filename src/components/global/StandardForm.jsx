import { useForm } from 'react-hook-form';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import PrimaryButton from '../PrimaryButton';
import Fade from 'react-reveal/Fade';

const styles = {
    wrapper: css`
        width: 80%;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    `,
    form: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        input,
        textarea {
            width: 100%;
            background-color: transparent;
            border-top: none;
            border-left: none;
            border-right: none;
            height: 2rem;
            margin: 0.5rem 0;
        }
    `,
};

const StandardForm = () => {
    const theme = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div css={styles.wrapper}>
            <Fade right delay={300}>
                <form css={[styles.form]}>
                    <input
                        {...register('name', { required: true })}
                        name="name"
                        placeholder={
                            (errors.name && 'Enter your name') || 'name'
                        }
                        css={[
                            { borderBottom: `1px solid ${theme.colors.text}` },
                            { color: theme.colors.text },
                        ]}
                    />
                    <input
                        {...register('subject', { required: true })}
                        name="subject"
                        placeholder="subject"
                        css={[
                            { borderBottom: `1px solid ${theme.colors.text}` },
                            { color: theme.colors.text },
                        ]}
                    />
                    <textarea
                        {...register('message', { required: true })}
                        name="message"
                        placeholder="message"
                        css={[
                            { borderBottom: `1px solid ${theme.colors.text}` },
                            { color: theme.colors.text },
                        ]}
                    />
                    {errors.name && <span>You have to specify a name.</span>}
                    {errors.subject && <span>Enter a subject.</span>}
                    {errors.message && (
                        <span>You have to enter a message.</span>
                    )}
                    <PrimaryButton
                        onClick={handleSubmit(onSubmit)}
                        title="send"
                    />
                </form>
            </Fade>
        </div>
    );
};

export default StandardForm;
