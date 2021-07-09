import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Profile/Navbar/Navbar';
import CardsContainer from '../../components/Profile/Cards/CardsContainer';
import Card from '../../components/Profile/Cards/Card';
import PrincipalCard from '../../components/Profile/Cards/PrincipalCard';
import PageTitle from '../../components/PageTitle';

const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileContainer>
        <BoxContainer>
          <PageTitle title={'Mi CV'} />
          <ContentContainer>
            <Navbar />
            <CardsContainer>
              <PrincipalCard
                title="Romina Carrasco"
                center="true"
                big="true"
                primary="true"
                id="personal-data"
              >
                <PrincipalCardContentContainer>
                  <CardSubtitle center="true">Nacionalidad</CardSubtitle>
                  <CardContent bold="true" center="true">
                    Argentina
                  </CardContent>
                </PrincipalCardContentContainer>
                <PrincipalCardContentContainer>
                  <CardSubtitle center="true">Estado civil</CardSubtitle>
                  <CardContent bold="true" center="true">
                    Soltera
                  </CardContent>
                </PrincipalCardContentContainer>
                <PrincipalCardContentContainer>
                  <CardSubtitle center="true">Documento</CardSubtitle>
                  <CardContent bold="true" center="true">
                    D.N.I. 99321654
                  </CardContent>
                </PrincipalCardContentContainer>
              </PrincipalCard>
              <Card
                title="Datos de contacto"
                primary="true"
                center="true"
                id="contact-user-data"
              >
                <Content>
                  <CardSubtitle>Teléfono: </CardSubtitle>
                  <CardContent bold="true">11 4094 8366</CardContent>
                </Content>
                <Content>
                  <CardSubtitle>Email: </CardSubtitle>
                  <CardContent>email.example@email.com</CardContent>
                </Content>
                <Content>
                  <CardSubtitle>Dirección: </CardSubtitle>
                  <CardContent>
                    Calle Falsa 123, Springfield, Oregon, USA
                  </CardContent>
                </Content>
              </Card>
              <Card title="Preferencia Salarial" id="salary-expected">
                <Content>
                  <CardSubtitle>Teléfono: </CardSubtitle>
                  <CardContent>11 4094 8366</CardContent>
                </Content>
                <Content>
                  <CardSubtitle>Email: </CardSubtitle>
                  <CardContent>email.example@email.com</CardContent>
                </Content>
                <Content>
                  <CardSubtitle>Dirección: </CardSubtitle>
                  <CardContent>
                    Calle Falsa 123, Springfield, Oregon, USA
                  </CardContent>
                </Content>
              </Card>
              <Card title="Preferencia Salarial">
                <Content>
                  <CardSubtitle>Teléfono: </CardSubtitle>
                  <CardContent>11 4094 8366</CardContent>
                </Content>
                <Content>
                  <CardSubtitle>Email: </CardSubtitle>
                  <CardContent>email.example@email.com</CardContent>
                </Content>
                <Content>
                  <CardSubtitle>Dirección: </CardSubtitle>
                  <CardContent>
                    Calle Falsa 123, Springfield, Oregon, USA
                  </CardContent>
                </Content>
              </Card>
            </CardsContainer>
          </ContentContainer>
        </BoxContainer>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
`;

const ProfileContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);
  width: 100%;
  min-height: 80vh;
`;

const BoxContainer = styled.div`
  height: auto !important;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  top: 80px;
`;

const PrincipalTitleContainer = styled.div`
  padding: 2rem;
  width: 100%;
`;

const PrincipalTitle = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  font-family: 'Hind Vadodara', sans-serif;
  font-weight: 300;
  padding-left: 2%;
  border-left: 2px solid #32b7b6;
  color: #222;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.3rem;
`;

const PrincipalCardContentContainer = styled.div`
  width: 100%;
  height: 40px;
`;

const CardSubtitle = styled.p`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-family: 'Hind Vadodara', sans-serif;
  color: #a1a1a1;
  font-size: 16px;
  margin-bottom: 0.5em;
`;

const CardContent = styled.p`
  text-align: ${({ center }) => (center ? 'center' : 'left')};

  font-family: 'Hind Vadodara', sans-serif;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'initial')};
  color: #2a2b2c;
`;
export default Profile;
