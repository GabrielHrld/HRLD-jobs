import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <PageTitle title="Sobre nosotros"></PageTitle>
        <BoxContainer>
          <Box>
            <h2>¿Quiénes somos?</h2>
            <p>
              HRLD-Jobs es un fake job-bank con la finalidad de mostrar mi
              trabajo, tanto en programación como diseño. La misma está
              desarrollada en React JS para el frontend, y Express en el lado
              del servidor.
            </p>

            <br />
            <br />
            <h3>Próximos features:</h3>
            <ul>
              <li>- Aplicación móvil en React Native.</li>
              <li>- Sección "Empresas" o "Business"</li>
            </ul>
            <br />
            <br />
            <h3>Puedes encontrarme en mis redes sociales.</h3>
            <br />

            <SocialMediaContainer>
              <FaLinkedin />
              <FaGithub />
              <FaTwitter />
            </SocialMediaContainer>
            <br />
            <br />
            <Credits>Made with 🤍 by: @HeraldHRLD</Credits>
          </Box>
        </BoxContainer>
      </AboutContainer>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  width: 100%;
  min-height: 60vh;
`;

const AboutContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);
`;

const BoxContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 100%;
  background: #fefefe;
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;

  margin-bottom: 2rem;
  & h2,
  h3 {
    font-family: 'Hind Vadodara', sans-serif;
    margin-bottom: 1rem;
  }
  & p {
    font-family: 'Hind Vadodara', sans-serif;
  }

  & ul > li {
    font-family: 'Hind Vadodara', sans-serif;
  }

  @media screen and (max-width: 768px) {
    & h2 {
      text-align: center;
    }
    & p {
      text-align: justify;
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;

  & svg {
    margin-right: 1rem;
    transition: 0.2s all ease-in-out;
    font-size: 2rem;
    &:hover {
      color: #505050;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

const Credits = styled.p`
  text-decoration: underline;
`;

export default About;
