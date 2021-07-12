import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Card = ({ id, title, big, center, primary, children, edit }) => {
  return (
    <CardWrapper id={id}>
      <CardContainer>
        <TitleContainer>
          <Title big={big} center={center} primary={primary}>
            {title}
          </Title>
          {edit && (
            <Link to="/candidatos/profile">
              <IconContainer>
                <Icon icon={faPencilAlt} />
              </IconContainer>
            </Link>
          )}
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
`;

const TitleContainer = styled.div`
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
  border: 1px solid #425389;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s all ease-out;
  &:hover {
    background: #425389;
    border: 1px solid #425389;
    svg {
      color: #fefefe;
    }
  }
`;
const Title = styled.h3`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: ${({ big }) => (big ? '2vw' : '1.5vw')};

  text-align: ${({ center }) => (center ? 'center' : 'initial')};
  color: ${({ primary }) => (primary ? '#425389' : '#2a2b2c')};
  text-transform: capitalize;
  width: 100%;
  font-weight: bold;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 100%;
  color: #425389;
`;

const ContentContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
`;
export default Card;
