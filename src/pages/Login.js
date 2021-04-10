import React from 'react';
import { useApplication } from '../context/ApplicationContext';
import { ScaleLoader } from 'react-spinners';
import "../css/App.css";
import styled from 'styled-components';

function Login() {
    const {
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        hasAccount,
        setHasAccount,
        handleSignup,
        handleLogin,
        loading } = useApplication()

    return (
        <Section>
            <Container>
                <LabelInput>E-mail</LabelInput>
                <Input
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <ParagraphError>{emailError}</ParagraphError>
                <LabelInput>Senha</LabelInput>
                <PasswordInput
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ParagraphError>{passwordError}</ParagraphError>
                <BtnContainer>
                    {loading ? (
                        <ScaleLoader
                            css={override}
                            size={150}
                            color={"#eb4034"}
                            loading={loading} />
                    ) : (
                        hasAccount ?
                            (
                                <>
                                    <Button onClick={handleLogin}>Entrar</Button>
                                    <Paragraph>Não tem cadastro ? <Span onClick={() => setHasAccount(!hasAccount)}>Criar</Span></Paragraph>
                                </>
                            ) :
                            (
                                <>
                                    <Button onClick={handleSignup}>Cadastrar</Button>
                                    <Paragraph>Tem um cadastro ? <Span onClick={() => setHasAccount(!hasAccount)}>Entrar</Span></Paragraph>
                                </>
                            )
                    )
                    }
                </BtnContainer>
            </Container>
        </Section>
    )
}

const Button = styled.button`
    border: none;
    outline: none;
    width: 100%;
    padding: 15px 0;
    color: #fff;
    font-size: 16px;
    letter-spacing: 1px;
    background: #603bbb;
    cursor: pointer;
`;

const override = `
    display: block;
    margin-left: 100px;
    border-color: red;
`;

const Container = styled.div`
    && {
        padding: 60px;
        margin: auto;
        width: 100%;
        max-width: 520px;
        min-height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(
        ellipse at left bottom,
        rgba(22, 24, 47, 1) 0%,
        rgba(38, 20, 72, 0.9) 59%,
        rgba(17, 27, 75, 0.9) 100%
        );
        box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.8);
    }
`;

const BtnContainer = styled.div`
    && {
        width: 100%;
        padding: 24px 0;
    }
`;

const Section = styled.div`
    && {
        width: 100%;
        min-height: 100vh;
        padding: 0 20px;
        background: #e9e9e9;
        display: flex;
    }
`;

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
        width: 100%;
        border: none;
        outline: none;
        font-size: 19px;
        padding: 10px;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        letter-spacing: 1px;
  `;

const PasswordInput = styled(Input).attrs({
    type: "password",
})`
        
  `;

const LabelInput = styled.span`
color: white;
margin: 14px 0;
display: block;
font-size: 22px;
line-height: 1;
`;

const Paragraph = styled.p`
margin: 14px 0 0 0;
text-align: right;
color: #fff;
`;

const ParagraphError = styled(Paragraph)`
    color: red;
    font-size: 16px;
`;

const Span = styled.span`
    color: yellow;
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-left: 5px;
    cursor: pointer;
    transition: all 400ms ease-in-out;
`;

export default Login;