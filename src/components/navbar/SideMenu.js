import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import styled from 'styled-components';

import '../Styles/components/navbar/SideMenu.scss';

const SideMenu = ({ state, setState }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setState(!state);
  };

  return (
    <div className={state ? 'sideMenu-wrapper active' : 'sideMenu-wrapper'}>
      <SideMenuContainer>
        <SideMenu_navLinks>
          <SideMenu_navItem>
            <SideMenu_Link to="/">Contacto</SideMenu_Link>
          </SideMenu_navItem>
          <SideMenu_navItem>
            <SideMenu_Link to="/">Ingresar</SideMenu_Link>
          </SideMenu_navItem>
          <SideMenu_navItem>
            <Button to="/" big="true">
              Registrarse
            </Button>
          </SideMenu_navItem>
        </SideMenu_navLinks>
      </SideMenuContainer>
    </div>
  );
};

const SideMenuContainer = styled.div`
  background-color: #fefefe;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const SideMenu_navLinks = styled.ul`
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SideMenu_navItem = styled.li``;

const SideMenu_Link = styled(Link)`
  font-family: 'Hind Vadodara', sans-serif;
  font-size: 20px;
  color: #2a2b2c;
`;

export default SideMenu;
