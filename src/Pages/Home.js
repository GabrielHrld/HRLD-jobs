import React from 'react';
import styled from 'styled-components';
import SearchComponent from '../components/Search/SearchComponent';
import Hero from '../components/Hero';
import JobsBanner from '../components/JobsBanner';
import Offers from '../components/Offers';

const Home = () => {
  return (
    <HomeWrapper>
      <SearchComponent />
      <Hero />
      <JobsBanner />
      <Offers />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  position: relative;
  top: 80px;
`;

export default Home;
