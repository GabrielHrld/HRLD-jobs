import React from 'react';
import styled from 'styled-components';

const CardsContainer = ({ children }) => {
  return (
    <CardsContainerWrapper>
      <Container>{children}</Container>
    </CardsContainerWrapper>
  );
};

const CardsContainerWrapper = styled.div`
  width: 50%;
  margin-left: 20vw;
`;

const Container = styled.div`
  padding: 0 1rem;
`;

export default CardsContainer;
