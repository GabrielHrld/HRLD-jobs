import React from 'react';
import styled from 'styled-components';

import HeroImage from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <ImageContainer>
          <HeroH3>
            Encontrá tu <span style={{ color: '#32b791' }}>primer trabajo</span>
          </HeroH3>
          <HeroP>Las mejores oportunidades para vos</HeroP>
        </ImageContainer>
      </HeroContainer>
      <Overlay />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const HeroContainer = styled.div``;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;
  background-image: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 678px) {
    background-position-x: 20%;
  }
`;

const HeroH3 = styled.h3`
  position: relative;
  z-index: 2;
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-family: 'Hind Vadodara', sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: #fefefe;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.45);
`;

const HeroP = styled.p`
  position: relative;
  z-index: 2;
  font-size: clamp(0.8rem, 2.7vw, 2.5rem);
  margin-bottom: 2rem;
  font-family: 'Hind Vadodara', sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: #fefefe;
`;

export default Hero;
