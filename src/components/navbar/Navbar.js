import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';
import SideMenu from './SideMenu';
import Logo from '../../../assets/logo.png';

import '../Styles/components/navbar/Navbar.scss';

const Navbar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleOpenBurger = () => setOpenBurger(!openBurger);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <LogoAnchor to="/">
            <Image src={Logo} alt="logo" />
            <LogoText>Hrld jobs</LogoText>
          </LogoAnchor>
        </LogoContainer>
        <NavWrapper>
          <Nav>
            <NavLinks>
              <NavLinksItem>
                <NavLink to="/">Contacto</NavLink>
              </NavLinksItem>
              <NavLinksItem>
                <NavLink to="/">Ingresar</NavLink>
              </NavLinksItem>
              <NavLinksItem>
                <Button round="true" to="/">
                  Registrarse
                </Button>
              </NavLinksItem>
            </NavLinks>
          </Nav>
        </NavWrapper>
        <div className="burger-container" onClick={handleOpenBurger}>
          <div
            className={openBurger ? 'burger-line active' : 'burger-line'}
          ></div>
          <div
            className={openBurger ? 'burger-line active' : 'burger-line'}
          ></div>
          <div
            className={openBurger ? 'burger-line active' : 'burger-line'}
          ></div>
        </div>
        <SideMenu state={openBurger} setState={setOpenBurger} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fefefe;
  position: fixed;
  z-index: 3;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0rem calc((100vw - 1400px) / 2);
`;

const LogoContainer = styled.div`
  width: 160px;
  height: 65px;
  margin-right: 10px;
  cursor: pointer;
`;

const LogoAnchor = styled(Link)`
  display: flex;
  align-items: center;
  width: 220px;
  height: 100%;
`;

const LogoText = styled.p`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 1.5rem;
  margin-left: 10px;
  text-transform: uppercase;
  color: #2a2b2c;
  background: #fefefe;
  mix-blend-mode: multiply;
  position: relative;
  &::before {
    content: '';
    display: flex;
    width: 100%;
    height: 90%;
    background: linear-gradient(to right, #32b7b6, #425389);
    mix-blend-mode: screen; // atento a esta linea//
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const NavWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav``;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLinksItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  font-family: 'Hind Vadodara', sans-serif;
  color: #2a2b2c;
  padding: 0.4em 1.2em;
  font-size: 1rem;
  letter-spacing: 1px;
  display: inline;
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
