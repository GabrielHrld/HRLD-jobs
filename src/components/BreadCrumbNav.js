import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadCrumbNav = () => {
  return (
    <BreadCrumbNavbar>
      <BreadCrumbBack>
        <Link to="/jobs">
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver
        </Link>
      </BreadCrumbBack>
      <BreadCrumbList>
        <BreadCrumbItem>
          <Link to="/jobs">Bolsa de trabajo</Link>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <FontAwesomeIcon icon={faCaretRight} />
        </BreadCrumbItem>

        <BreadCrumbItem>
          <Link to="/jobs">Tecnología, Sistemas y Telecomunicaciones</Link>
        </BreadCrumbItem>
        <BreadCrumbItem>
          <FontAwesomeIcon icon={faCaretRight} />
        </BreadCrumbItem>
        <BreadCrumbItem>
          <p>Programador Angular</p>
        </BreadCrumbItem>
      </BreadCrumbList>
    </BreadCrumbNavbar>
  );
};

const BreadCrumbNavbar = styled.nav`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
`;

const BreadCrumbBack = styled.div`
  display: flex;
  color: #767676;
  align-items: center;
  font-size: clamp(1rem, 2vw, 1.5rem);
  & a {
    padding: 0 0.4rem;
    padding-right: 1rem;
    font-family: 'Hind Vadodara', sans-serif;
    color: #767676;
    border-right: 1px solid #2a2b2c;
    transition: 0.2s all ease;
    & svg {
      margin-right: 0.5rem;
    }
    &:hover {
      color: #2a2b2c;
    }
  }
`;

const BreadCrumbList = styled.ul`
  padding: 0 1rem;
  font-family: 'Hind Vadodara', sans-serif;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const BreadCrumbItem = styled.li`
  padding: 0 0.5em;
  & a,
  p {
    color: #2a2b2c;
    font-weight: bold;
    font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  }

  & a {
    transition: 0.2s all ease;
    &:hover {
      color: #32b7b6;
    }
  }
`;

export default BreadCrumbNav;
