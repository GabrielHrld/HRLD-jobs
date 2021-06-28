import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import SideMenuFilterBox from './SideMenuFilterBox';
import { Link } from 'react-router-dom';
import { States } from '../../utils/States';
import { Positions } from '../../utils/Positions';

const FilterSideMenu = ({ state, setState }) => {
  const handleChange = () => {
    setState(!state);
  };

  return (
    <SideMenuWrapper active={state}>
      <SideMenuContainer>
        <Header>
          <FontAwesomeIcon icon={faTimes} onClick={handleChange} />
          <h3>Filtros</h3>
        </Header>
        <Content>
          <SideMenuFilterBox title="Modalidad">
            <Container>
              <Subtitle to="/">Presencial</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Mixto</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Remoto</Subtitle>
            </Container>
          </SideMenuFilterBox>
        </Content>
        <Content>
          <SideMenuFilterBox title="Nivel laboral">
            <Container>
              <Subtitle to="/">Trainee</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Junior</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Semi Senior</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Senior</Subtitle>
            </Container>
          </SideMenuFilterBox>
        </Content>
        <Content>
          <SideMenuFilterBox title="Provincia">
            {States.map((state, index) => {
              return (
                <Container key={state}>
                  <Subtitle to="/">{state}</Subtitle>
                </Container>
              );
            })}
          </SideMenuFilterBox>
        </Content>

        <Content>
          <SideMenuFilterBox title="Área">
            {Positions.map((position, index) => {
              return (
                <Container key={position}>
                  <Subtitle to="/">{position}</Subtitle>
                </Container>
              );
            })}
          </SideMenuFilterBox>
        </Content>

        <Content>
          <SideMenuFilterBox title="Tipo de puesto">
            <Container>
              <Subtitle to="/">Full Time</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Part Time</Subtitle>
            </Container>
            <Container>
              <Subtitle to="/">Por hora</Subtitle>
            </Container>
          </SideMenuFilterBox>
        </Content>
      </SideMenuContainer>
    </SideMenuWrapper>
  );
};

const SideMenuWrapper = styled.div`
  position: fixed;
  transition: 0.8s right ease;
  right: ${({ active }) => (active ? '0%' : '-100%')};
  top: 00px;
  z-index: 9;
  width: 60vw;
  height: 100vh;
  background: #fefefe;
  border-left: 1px solid #cecece;
`;

const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #cecece;
  h3 {
    font-family: 'Hind Vadodara', sans-serif;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1rem;
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
export default FilterSideMenu;
