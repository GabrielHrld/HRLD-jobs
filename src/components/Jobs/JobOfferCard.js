import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JobOfferCard = ({ title, subtitle, description, time, image }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <ContentContainer>
          <Title to="/jobs">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{`${description.slice(0, 150)}...`}</Description>
          <Time>{time}</Time>
        </ContentContainer>
        <ImageContainer>
          <Image src={image} alt="company-logo" />
        </ImageContainer>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  background: #fefefe;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  transition: 0.2s all ease;
  margin-bottom: 1.4rem;
  &:hover {
    transform: scale(1.015);
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 80%;
`;

const Title = styled(Link)`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: clamp(0.8rem, 2vw, 1.4rem);
  color: #32b7b6;
  &:hover {
    color: #425389;
    text-decoration: underline;
  }
`;

const Subtitle = styled.p`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: clamp(0.7rem, 1.9vw, 1.3rem);
  color: #2a2b2c;
`;

const Description = styled.p`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: clamp(0.6rem, 1.7vw, 1rem);
  color: #9e9e9e;
`;

const Time = styled.p`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: clamp(0.6rem, 1.7vw, 1rem);
  color: #425389;
`;
const ImageContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 90px;
  width: 100%;
`;

export default JobOfferCard;
