import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Button';
import SideMenu from './SideMenu';
import Logo from '../../../assets/logo.png';

import '../Styles/components/navbar/Navbar.scss';

const Navbar = () => {
  const path = useLocation().pathname;
  const [openBurger, setOpenBurger] = useState(false);
  const handleOpenBurger = () => {
    console.log(1);
    setOpenBurger(!openBurger);
  };

  useEffect(() => {}, [path]);
  const validate = path == '/sign-in' || path == '/sign-up' ? true : false;
  return (
    <HeaderWrapper
      style={
        path == '/sign-in' || path == '/sign-up'
          ? { backgroundColor: 'transparent', boxShadow: 'none' }
          : {}
      }
    >
      <HeaderContainer>
        <LogoContainer>
          <LogoAnchor href="/">
            <Image src={Logo} alt="logo" />
            {validate ? null : <LogoText>Hrld jobs</LogoText>}
          </LogoAnchor>
        </LogoContainer>
        {validate ? null : (
          <NavWrapper>
            <Nav>
              <NavLinks>
                <NavLinksItem>
                  <NavLink to="/jobs">Empleos</NavLink>
                </NavLinksItem>
                <NavLinksItem>
                  <NavLink to="/ ">Contacto</NavLink>
                </NavLinksItem>
                <NavLinksItem>
                  <NavLink to="/sign-in">Ingresar</NavLink>
                </NavLinksItem>
                <NavLinksItem>
                  <Button round="true" to="/sign-up">
                    Registrarse
                  </Button>
                </NavLinksItem>
              </NavLinks>
            </Nav>
          </NavWrapper>
        )}
        {validate ? null : (
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
        )}
        {validate ? null : (
          <SideMenu state={openBurger} setState={setOpenBurger} />
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fefefe;
  position: fixed;
  z-index: 6;
  box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.2);
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

const LogoAnchor = styled.a`
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
