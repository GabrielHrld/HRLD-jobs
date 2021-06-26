import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const PrincipalCard = ({ id, title, big, center, primary, children }) => {
  return (
    <CardWrapper id={id}>
      <CardContainer>
        <ImageContainer>
          <Image src="https://images.pexels.com/photos/3042160/pexels-photo-3042160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </ImageContainer>
        <TitleContainer>
          <Title big={big} center={center} primary={primary}>
            {title}
          </Title>
          <Link to="/candidatos/profile">
            <IconContainer>
              <Icon icon={faPencilAlt} />
            </IconContainer>
          </Link>
        </TitleContainer>
        <ContentContainer>{children}</ContentContainer>
      </CardContainer>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  background: #fefefe;
  box-shadow: 0px 4px 8px 1.5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin-bottom: 2rem;
`;

const CardContainer = styled.div`
  padding: 3% 7%;
  position: relative;
`;

const ImageContainer = styled.div`
  min-width: 110px;
  width: 16%;
  border-radius: 50%;
  position: absolute;
  top: -30%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: inherit;
  border: 3px solid #32b7b6;
`;

const TitleContainer = styled.div`
  margin-top: 3.4rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  width: 90;
`;

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 1px solid #32b7b6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s all ease-out;
  &:hover {
    background: #32b7b6;
    border: 1px solid #32b7b6;
    svg {
      color: #fefefe;
    }
  }
`;
const Title = styled.h3`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: ${({ big }) => (big ? '2.9vw' : '0.9vw')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
  color: ${({ primary }) => (primary ? '#32b7b6' : '#2a2b2c')};
  text-transform: capitalize;
  width: 100%;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 100%;
  color: #32b7b6;
`;

const ContentContainer = styled.div`
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export default PrincipalCard;
