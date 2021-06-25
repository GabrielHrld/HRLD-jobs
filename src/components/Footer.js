import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer></FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  height: 400px;
  background: #32b791;
`;

const FooterContainer = styled.div`
  padding: 3rem calc((100vw - 1400px) / 2);
`;

export default Footer;
