import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from '../components/Button';

const Login = () => {
  return (
    <LoginWrapper>
      <LoginContainer>
        <Card>
          <Title>Ingresar</Title>
          <Form>
            <InputContainer>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" placeholder="example@email.com" type="email" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" placeholder="********" type="password" />
            </InputContainer>
          </Form>
          <Button
            round="true"
            style={{ textAlign: 'center', width: '60%' }}
            to="/sign-in"
          >
            Ingresar
          </Button>
          <P>
            ¿No tenés cuenta? <CardLink to="sign-up">Crear una</CardLink>
          </P>
          <Decoration />
          <DecorationTwo />
        </Card>
      </LoginContainer>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  &::before {
    content: '';
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0%;
    background: #fefefe;
    clip-path: polygon(
      0 100%,
      100% 100%,
      100% 19%,
      88% 5%,
      58% 13%,
      20% 0,
      0 15%
    );
  }
`;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #78ffd6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  min-width: 280px;
  width: 25%;
  min-height: 400px;
  height: 65%;
  position: relative;
  z-index: 5;
  background: #fefefe;
  border: 1px solid #d5d5d5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    border-radius: 0;
    border: none;
    justify-content: space-evenly;
  }
`;

const Title = styled.h3`
  font-family: 'Haid Vadodara', sans-serif;
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 2.8rem);
  color: #425389;
  margin-bottom: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 3rem;
`;

const Label = styled.label`
  font-family: 'Haid Vadodara', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.8rem);
  cursor: pointer;
  padding-left: 1.4rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fefefe;
  background: #425389;
  padding: 1rem 0;
  padding-left: 20px;
  transition: 0.3s background ease;
  &::placeholder {
    color: #fefefe;
  }
  &:focus {
    background: #32b7b6;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  width: 100%;
`;

const Decoration = styled.div`
  width: 35vw;
  height: 35vw;
  border-radius: 100%;
  background: #8360c3;
  background: -webkit-linear-gradient(to left, #a51c1c, #8360c3);
  background: linear-gradient(to left, #a51c1c, #8360c3);
  position: absolute;
  top: -8%;
  right: -10%;
  display: none;
  @media screen and (max-width: 500px) {
    display: initial;
  }
`;

const DecorationTwo = styled.div`
  width: 35vw;
  height: 35vw;
  border-radius: 100%;
  background: #8360c3;
  background: -webkit-linear-gradient(-75deg, #2ebf91, #8360c3);
  background: linear-gradient(-75deg, #2ebf91, #8360c3);

  position: absolute;
  bottom: -8%;
  left: -10%;
  display: none;
  @media screen and (max-width: 500px) {
    display: initial;
  }
`;

const P = styled.p`
  font-family: 'Haid Vadodara', sans-serif;
  text-align: center;
  color: #2a2b2c;
`;

const CardLink = styled(Link)`
  color: #425389;

  &:hover {
    text-decoration: underline;
  }
`;
export default Login;
