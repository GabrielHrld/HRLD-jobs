import React from 'react';
import styled from 'styled-components';
import JobOfferCard from './JobOfferCard';
import { jobs } from '../../utils/Jobs';

const JobOffers = () => {
  return (
    <JobOffersWrapper>
      <JobOffersContainer>
        <FiltersWrapper></FiltersWrapper>
        <CardWrapper>
          {jobs.map((job, index) => {
            return (
              <JobOfferCard
                key={job.id}
                title={job.title}
                subtitle={job.subtitle}
                description={job.description}
                time={job.time}
                image={job.image}
              />
            );
          })}
        </CardWrapper>
      </JobOffersContainer>
    </JobOffersWrapper>
  );
};

const JobOffersWrapper = styled.div`
  width: 100%;
`;

const JobOffersContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);

  width: 100%;
  display: flex;
`;

const FiltersWrapper = styled.div`
  width: 25%;
  background: red;
  padding: 1.5rem 1rem;
`;

const CardWrapper = styled.div`
  background: blue;
  width: 75%;
  padding: 1.5rem 1rem;
`;

export default JobOffers;
