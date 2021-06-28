import React from 'react';
import styled from 'styled-components';
const SideMenuFilterBox = ({ title, children }) => {
  return (
    <BoxWrapper>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  width: 100%;
  max-height: 15vh;
  background: #fefefe;
  border: 1px solid #bfbfbf;
  border-radius: 15px;
  margin-bottom: 0.1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleContainer = styled.div`
  padding: 0.5rem 0.7rem;
  border-bottom: 1px solid #cecece;
`;

const Title = styled.h2`
  font-family: 'Hind Vadodara', sans-serif;
  color: #2a2b2c;
  font-size: clamp(0.8rem, 2vw, 1.5rem);
`;

const ContentContainer = styled.div`
  padding: 0.5rem 0.7rem;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
`;

export default SideMenuFilterBox;
