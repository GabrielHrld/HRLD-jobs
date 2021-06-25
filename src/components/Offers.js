import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Offers = () => {
  return (
    <OffersWrapper>
      <OffersContainer>
        <OffersCard>
          <Link to="/">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/7163385/pexels-photo-7163385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageContainer>
            <Title>Registro gratuito</Title>
          </Link>
        </OffersCard>
        <OffersCard>
          <Link to="/">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageContainer>
            <Title>Nuevos empleos diariamente</Title>
          </Link>
        </OffersCard>
        <OffersCard>
          <Link to="/">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </ImageContainer>
            <Title>Ofertas personalizadas según tu perfil</Title>
          </Link>
        </OffersCard>
        <OffersCard>
          <Link to="/">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/3201070/pexels-photo-3201070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </ImageContainer>
            <Title>Completá tu perfil profesional</Title>
          </Link>
        </OffersCard>
      </OffersContainer>
    </OffersWrapper>
  );
};

const OffersWrapper = styled.div`
  width: 100%;
  background: #fefefe;
`;

const OffersContainer = styled.div`
  width: 85%;
  padding: 3rem calc((100vw - 1400px) / 2) 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const OffersCard = styled.div`
  min-width: 150px;
  width: 220px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  &:hover h4 {
    text-decoration: underline;
  }

  @media screen and (max-width: 534px) {
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  border-radius: 15px 15px 0 0;
  width: 100%;
  max-height: 220px;
  overflow: hidden;
  margin-bottom: 0.5em;
`;

const Image = styled.img`
  width: 100%;
  transform: translateY(-10px);
  object-fit: contain;
`;

const Title = styled.h4`
  font-family: 'Hind Vadodara', sans-serif;
  text-align: center;
  color: #2a2b2c;
`;

export default Offers;
