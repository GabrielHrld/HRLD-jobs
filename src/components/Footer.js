import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const path = useLocation().pathname;
  const validate = path != '/' ? true : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <FooterWrapper
      style={
        path == '/sign-in' || path == '/sign-up'
          ? { background: '#fefefe' }
          : {}
      }
    >
      <FooterContainer
        style={
          validate ? { padding: '3rem calc((100vw - 1400px) / 2) 3rem' } : {}
        }
      >
        <GridContainer>
          <ColumnContainer>
            <Title>Institución</Title>
            <Ul>
              <Li>
                <FooterLink to="/">Sobre nosotros</FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">Contacto</FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">Aviso legal y privacidad</FooterLink>
              </Li>
            </Ul>
          </ColumnContainer>
          <ColumnContainer>
            <Title>Ofertas Top</Title>
            <Ul>
              <Li>
                <FooterLink to="/">
                  Tecnología, Sistemas y Telecomunicaciones
                </FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">Salud, Medicina y Farmacia</FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">Diseño</FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">
                  Administración, Contabilidad y Finanzas
                </FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">Jóvenes Profesionales</FooterLink>
              </Li>
            </Ul>
          </ColumnContainer>
          <ColumnContainer>
            <Title>Redes sociales</Title>
            <Ul style={{ width: '140px' }}>
              <Li>
                <FooterLink to="/">
                  <Linkedin /> LinkedIn
                </FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">
                  <Github /> Github
                </FooterLink>
              </Li>
              <Li>
                <FooterLink to="/">
                  <Twitter /> Twitter
                </FooterLink>
              </Li>
            </Ul>
          </ColumnContainer>
          <ColumnContainer>
            <Title>Información relevante</Title>
            <Ul>
              <Li style={{ textAlign: 'justify' }}>
                Este proyecto es un fake Job-bank con la finalidad de mostrar mi
                trabajo. Favor de no ingresar información sensible. Disfrutalo.
              </Li>
            </Ul>
          </ColumnContainer>
        </GridContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #32b7b6, #32b791);
`;

const FooterContainer = styled.div`
  height: 100%;
  padding: 9rem calc((100vw - 1400px) / 2) 3rem;
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 25px;
`;

const ColumnContainer = styled.div``;

const Title = styled.h3`
  font-family: 'Haid Vadodara', sans-serif;
  font-weight: bold;
  font-size: clamp(0.8rem, 2vw, 1.6rem);
  color: #2a2b2c;
  margin-bottom: 1rem;
`;

const Ul = styled.ul``;

const Li = styled.li`
  font-family: 'Hind Vadodara', sans-serif;
  font-weight: bolder;
  color: #2a2b2c;
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  font-family: 'Hind Vadodara', sans-serif;
  color: #2a2b2c;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Linkedin = styled(FaLinkedin)`
  color: #2a2b2c;
  transition: 0.3s color ease-out;
  font-size: 2rem;
  margin-right: 1rem;
  &:hover {
    color: #505050;
  }
`;

const Github = styled(FaGithub)`
  color: #2a2b2c;
  transition: 0.3s color ease-out;
  margin-right: 1rem;
  font-size: 2rem;
  &:hover {
    color: #505050;
  }
`;

const Twitter = styled(FaTwitter)`
  color: #2a2b2c;
  transition: 0.3s color ease-out;
  margin-right: 1rem;
  font-size: 2rem;
  &:hover {
    color: #505050;
  }
`;

export default Footer;
