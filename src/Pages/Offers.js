import React from 'react';
import styled from 'styled-components';
import SearchComponent from '../components/Search/SearchComponent';

const Offers = () => {
  return (
    <OffersWrapper>
      <SearchComponent />
    </OffersWrapper>
  );
};

const OffersWrapper = styled.div`
  position: relative;
  top: 80px;
`;

export default Offers;
