import React from 'react';
import styled from 'styled-components';
import JobOffers from '../components/Jobs/JobOffers';
import SearchComponent from '../components/Search/SearchComponent';

const Jobs = () => {
  return (
    <JobsWrapper>
      <SearchComponent />
      <JobOffers />
    </JobsWrapper>
  );
};

const JobsWrapper = styled.div`
  position: relative;
  top: 80px;
`;

export default Jobs;
