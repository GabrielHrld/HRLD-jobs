import React from 'react';
import styled from 'styled-components';

const JobsDetails = () => {
  return (
    <JobsDetailsWrapper>
      <JobsDetailsContainer>Jobs details</JobsDetailsContainer>
    </JobsDetailsWrapper>
  );
};

const JobsDetailsWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
`;

const JobsDetailsContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);
`;

export default JobsDetails;
