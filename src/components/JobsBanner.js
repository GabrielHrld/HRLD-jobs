import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcaseMedical,
  faMicrochip,
  faUsers,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const JobsBanner = () => {
  return (
    <JobsBannerWrapper>
      <JobsContainer>
        <JobsCardsContainer>
          <TotalJobs>
            <Numbers big="true" center="true" to="/">
              <NumberFormat
                value={10000}
                displayType={'text'}
                thousandSeparator="."
                decimalSeparator=","
              />
            </Numbers>
            <Title center="true" big="true" to="/">
              Total ofertas
            </Title>
          </TotalJobs>
          <JobAreas>
            <JobCategory>
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <div>
                <Numbers to="/">
                  <NumberFormat
                    value={2000}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                </Numbers>
                <Title to="/">Administración</Title>
              </div>
            </JobCategory>
            <JobCategory>
              <FontAwesomeIcon icon={faMicrochip} className="icon" />
              <div>
                <Numbers to="/">
                  <NumberFormat
                    value={4000}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                </Numbers>
                <Title to="/">Tecnología</Title>
              </div>
            </JobCategory>
            <JobCategory>
              <FontAwesomeIcon icon={faBriefcaseMedical} className="icon" />
              <div>
                <Numbers to="/">
                  <NumberFormat
                    value={2000}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                </Numbers>
                <Title to="/">Medicina</Title>
              </div>
            </JobCategory>
            <JobCategory>
              <FontAwesomeIcon icon={faCogs} className="icon" />
              <div>
                <Numbers to="/">
                  <NumberFormat
                    value={2000}
                    displayType={'text'}
                    thousandSeparator="."
                    decimalSeparator=","
                  />
                </Numbers>
                <Title to="/">Ingeniería</Title>
              </div>
            </JobCategory>
          </JobAreas>
        </JobsCardsContainer>
      </JobsContainer>
    </JobsBannerWrapper>
  );
};

const JobsBannerWrapper = styled.div`
  padding: 1.8rem 0;
`;

const JobsContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);
`;

const JobsCardsContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 20% 78%;
  grid-gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 491px) {
    grid-template-columns: 1fr;
  }
`;

const TotalJobs = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.8rem 0;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 1px 6px 28px -3px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 1px 6px 28px -3px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 1px 6px 28px -3px rgba(0, 0, 0, 0.22);
  &:hover a {
    text-decoration: underline;
  }

  @media screen and (max-width: 491px) {
    & a:nth-child(1) {
      font-size: ${({ big }) => (big ? '15vw' : '10vw')};
    }
    & a:nth-child(2) {
      font-size: ${({ big }) => (big ? '15vw' : '7vw')};
    }
  }
`;

const JobAreas = styled.div`
  width: 100%;
  height: 100%;
  background: #fefefe;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 10px;
  box-shadow: 1px 6px 28px -3px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 1px 6px 28px -3px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 1px 6px 28px -3px rgba(0, 0, 0, 0.22);
  @media screen and (max-width: 491px) {
    display: none;
  }
`;

const JobCategory = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  margin: auto 0;
  padding-left: 1rem;
  & div {
    display: flex;
    flex-direction: column;
  }
  & .icon {
    font-size: 2vw;
    margin: 0 0.8em;
    opacity: 0.2;
    transition: 0.2s opacity ease-in;
  }
  &:hover a {
    text-decoration: underline;
  }
  &:hover .icon {
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0.4rem;
  }
`;

const Numbers = styled(Link)`
  font-size: ${({ big }) => (big ? '3vw' : '2.5vw')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
  font-family: 'Hind Vadodara', sans-serif;
  color: #425389;

  @media screen and (max-width: 768px) {
    font-size: ${({ big }) => (big ? '4.3vw' : '3.5vw')};
  }
`;

const Title = styled(Link)`
  font-size: ${({ big }) => (big ? '1.8vw' : '1.25vw')};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
  font-family: 'Hind Vadodara', sans-serif;
  color: #2a2b2c;

  @media screen and (max-width: 768px) {
    font-size: ${({ big }) => (big ? '2.7' : '2vw')};
  }
`;

export default JobsBanner;
