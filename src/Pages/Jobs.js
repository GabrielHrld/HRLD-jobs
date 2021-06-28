import React from 'react';
import styled from 'styled-components';
import JobOffers from '../components/Jobs/JobOffers';
import SearchComponent from '../components/Search/SearchComponent';
import PageTitle from '../components/PageTitle';

const Jobs = () => {
  return (
    <JobsWrapper>
      <SearchComponent />
      <TitleContainer>
        <PageTitle title={'Ofertas laborales'} />
      </TitleContainer>
      <JobOffers />
    </JobsWrapper>
  );
};

const JobsWrapper = styled.div`
  position: relative;
  top: 80px;
`;

const TitleContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);
`;

export default Jobs;
