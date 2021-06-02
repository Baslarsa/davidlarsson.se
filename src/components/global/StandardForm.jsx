import { useForm } from 'react-hook-form';
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import PrimaryButton from '../PrimaryButton';
import Fade from 'react-reveal/Fade';
import { BASE_URL } from '../../constants/constants';
import { useState } from 'react';

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
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState, reset } = useForm();
    const onSubmit = (data, e) => {
        const requestBody = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'text/plain');

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(requestBody),
            redirect: 'follow',
        };

        fetch(`${BASE_URL}/emails`, requestOptions)
            .then((response) => response.ok && setIsSuccess(true))
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));

        reset();
    };

    return (
        <div css={styles.wrapper}>
            <Fade right delay={300}>
                <form css={[styles.form]}>
                    <input
                        {...register('name', { required: true })}
                        name="name"
                        placeholder={
                            (formState.errors.name && 'Enter your name') ||
                            'name'
                        }
                        css={[
                            {
                                borderBottom: formState.errors.name
                                    ? `1px solid red`
                                    : `1px solid ${theme.colors.text}`,
                            },
                            { color: theme.colors.text },
                        ]}
                    />
                    <input
                        {...register('email', { required: true })}
                        name="email"
                        placeholder="email"
                        css={[
                            {
                                borderBottom: formState.errors.email
                                    ? `1px solid red`
                                    : `1px solid ${theme.colors.text}`,
                            },
                            { color: theme.colors.text },
                        ]}
                    />
                    <textarea
                        {...register('message', { required: true })}
                        name="message"
                        placeholder="message"
                        css={[
                            {
                                borderBottom: formState.errors.message
                                    ? `1px solid red`
                                    : `1px solid ${theme.colors.text}`,
                            },
                            { color: theme.colors.text },
                        ]}
                    />
                    {formState.errors.name && (
                        <span>You have to specify a name.</span>
                    )}
                    {formState.errors.email && (
                        <span>You have to enter an email.</span>
                    )}
                    {formState.errors.message && (
                        <span>You have to enter a message.</span>
                    )}
                    {isSuccess && <span>Email has been sent!</span>}
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
