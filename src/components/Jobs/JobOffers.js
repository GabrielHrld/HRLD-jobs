import React, { useState } from 'react';
import styled from 'styled-components';
import JobOfferCard from './JobOfferCard';
import { jobs } from '../../utils/Jobs';
import FilterBox from './FilterBox';
import FilterSideMenu from './FilterSideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import { States } from '../../utils/States';
import { Positions } from '../../utils/Positions';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const JobOffers = () => {
  const [sideMenu, setSideMenu] = useState(false);

  //paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  //límite de páginas
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(jobs.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //función para cambiar la página
  const handleChangePage = (e) => {
    window.scrollTo(0, 0);
    setCurrentPage(Number(e.target.id));
  };

  //función para ir una página adelante
  const handleNextPage = () => {
    if (currentPage == pages.length) return null;
    window.scrollTo(0, 0);
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  //función para ir una página atrás
  const handlePrevPage = () => {
    if (currentPage == pages[0]) return null;
    window.scrollTo(0, 0);
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage; // 3 * 10 = index 30
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

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
          {currentItems.map((job, index) => {
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

          <PaginationContainer>
            <PaginationLi onClick={handlePrevPage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </PaginationLi>
            {pages.map((number) => {
              if (
                number < maxPageNumberLimit + 1 &&
                number > minPageNumberLimit
              ) {
                return (
                  <PaginationLi
                    key={number}
                    id={number}
                    active={currentPage == number ? 'true' : ''}
                    onClick={handleChangePage}
                  >
                    {number}
                  </PaginationLi>
                );
              } else {
                return null;
              }
            })}
            <PaginationLi onClick={handleNextPage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </PaginationLi>
          </PaginationContainer>
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

const PaginationContainer = styled.ul`
  display: flex;
`;

const PaginationLi = styled.li`
  font-family: 'Hind Vadodara', sans-serif;
  font-weight: bold;
  color: ${({ active }) => (active ? '#fefefe' : '#2a2b2c')};
  background: ${({ active }) => (active ? '#32b7b6' : 'none')};
  padding: 0.3rem 0.8rem;
  border-radius: 100%;
  cursor: pointer;
  margin-right: 4px;
  transition: 0.2s all ease;
  & svg {
    color: #32b7b6;
  }
  &:hover {
    background: #fefefe;
    color: #2a2b2c;
    text-decoration: underline;
  }
`;
export default JobOffers;
