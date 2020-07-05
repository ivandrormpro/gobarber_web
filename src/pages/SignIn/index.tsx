import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';

import { useAuth } from '../../hooks/AuthContext';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationError';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';
import { FormHandles } from '@unform/core';

interface SignInForm {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();

    const handleSubmit = useCallback(async (data: SignInForm) => {

        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Password obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false
            });

            await signIn({
                email: data.email,
                password: data.password
            });

        } catch (err) {
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);    
            }
        }
    }, [signIn]);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBaber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input 
                        name="email" icon={FiMail} placeholder="E-mail" />
                    <Input 
                        icon={FiLock}
                        name="password"
                        type="password"
                        placeholder="Senha"
                    />
                    <Button name="" type="submit">Entrar</Button>
                    <a href="forgot"> Esqueci minha senha </a>
                </Form>
                <a href="login">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
};

export default SignIn;