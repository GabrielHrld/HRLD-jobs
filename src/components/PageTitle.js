import React from 'react';
import styled from 'styled-components';

const PageTitle = ({ title }) => {
  return (
    <PrincipalTitleContainer>
      <PrincipalTitle>{title}</PrincipalTitle>
    </PrincipalTitleContainer>
  );
};

const PrincipalTitleContainer = styled.div`
  padding: 2rem;
  width: 100%;
`;

const PrincipalTitle = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-family: 'Hind Vadodara', sans-serif;
  font-weight: 300;
  padding-left: 2%;
  border-left: 2px solid #32b7b6;
  color: #222;
`;
export default PageTitle;
