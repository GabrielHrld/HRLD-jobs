import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import '../../../styles/components/profile/navbar/Navbar.scss';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [position, setPosition] = useState(false);

  window.addEventListener('scroll', () => setScrollY(window.scrollY));

  useEffect(() => {
    if (scrollY >= 170) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  }, [scrollY]);

  return (
    <NavbarWrapper
      style={
        position
          ? { position: 'fixed', top: '17px', width: 'auto' }
          : { position: 'absolute' }
      }
    >
      <NavbarContainer>
        <Ul>
          <Link
            to="personal-data"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={400}
          >
            <Li>Datos Personales</Li>
          </Link>
          <Link
            to="contact-user-data"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={400}
          >
            <Li>Datos de contacto</Li>
          </Link>
          <Link
            to="salary-expected"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={400}
          >
            <Li>Prefencia salarial</Li>
          </Link>
          <Link
            to="resume"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={400}
          >
            <Li>Datos de contacto</Li>
          </Link>
        </Ul>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  width: auto;
  height: inherit;
  position: absolute;
  transition: 0.3s all ease;
`;

const NavbarContainer = styled.nav`
  width: 100%;
  padding: 0 1rem;
`;

const Ul = styled.ul`
  width: 100%;
`;

const Li = styled.li`
  padding: 0.7rem 1rem;
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 1.3rem;
  font-weight: lighter;
  transition: 0.2s all ease;
  & a {
    cursor: pointer;
  }
`;

const Anchor = styled(Link)`
  color: #2a2b2c;
`;

export default Navbar;
