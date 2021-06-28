import React, { useState } from 'react';
import styled from 'styled-components';
import JobOfferCard from './JobOfferCard';
import { jobs } from '../../utils/Jobs';
import FilterBox from './FilterBox';
import FilterSideMenu from './FilterSideMenu';

import { Link } from 'react-router-dom';
import { States } from '../../utils/States';
import { Positions } from '../../utils/Positions';

const JobOffers = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <JobOffersWrapper>
      <JobOffersContainer>
        <FiltersWrapper>
          <FilterSideMenu state={sideMenu} setState={setSideMenu} />

          <MobileContainer>
            <MobileTitle onClick={handleSideMenu}>Filtrar</MobileTitle>
          </MobileContainer>

          <FilterBox title="Modalidad">
            <Container>
              <Subtitle to="/jobs">Presencial</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Mixta</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Remoto</Subtitle>
            </Container>
          </FilterBox>

          <FilterBox title="Nivel Laboral">
            <Container>
              <Subtitle to="/jobs">Trainee</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Junior</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Semi Senior</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Senior</Subtitle>
            </Container>
          </FilterBox>

          <FilterBox title="Provincia">
            {States.map((state, index) => {
              return (
                <Container key={state}>
                  <Subtitle to="/jobs">{state}</Subtitle>
                </Container>
              );
            })}
          </FilterBox>

          <FilterBox title="Área">
            {Positions.map((position, index) => {
              return (
                <Container key={position}>
                  <Subtitle to="/jobs">{position}</Subtitle>
                </Container>
              );
            })}
          </FilterBox>

          <FilterBox title="Tipo de contrato">
            <Container>
              <Subtitle to="/jobs">Full time</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Part time</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/jobs">Por hora</Subtitle>
            </Container>
          </FilterBox>
        </FiltersWrapper>
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
          <h3>prueba</h3>
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
  @media screen and (max-width: 678px) {
    flex-direction: column;
  }
`;

const FiltersWrapper = styled.div`
  width: 25%;
  padding: 0 1rem;
  @media screen and (max-width: 678px) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 678px) {
    display: initial;
  }
`;

const MobileTitle = styled.p`
  font-family: 'Hind Vadodara', sans-serif;
  font-weight: bold;
  font-size: 1.3rem;
  color: #425389;
`;

const Container = styled.div`
  width: 100%;
  padding: 0.3rem;
`;

const Subtitle = styled(Link)`
  color: #2a2b2c;
  font-family: 'Hind Vadodara';
  &:hover {
    text-decoration: underline;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 1.5rem 1rem;
  @media screen and (max-width: 678px) {
    width: 100%;
  }
`;

export default JobOffers;
