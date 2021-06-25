import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BenefitsBanner = () => {
  return (
    <BenefitsWrapper>
      <BenefitsContainer>
        <Title>Impulsá tu carrera profesional</Title>
        <CardsContainer>
          <BenefitsCard>
            <ImageContainer>
              <Image src="https://i.imgur.com/dUZclwm.jpg" alt="growth team" />
            </ImageContainer>
            <InfoContainer>
              <InfoTitle>Crecimiento personal</InfoTitle>
              <InfoDescription>
                Encontrá la empresa que estás buscando y empezá a crecer
                profesionalmente de la mano de los mejores en la industria.
              </InfoDescription>
              <InfoLink to="/">Ver más</InfoLink>
            </InfoContainer>
          </BenefitsCard>
          <BenefitsCard>
            <ImageContainer>
              <Image
                src="https://image.freepik.com/vector-gratis/empleados-trabajando-casa-concepto_52683-41250.jpg"
                alt="growth team"
              />
            </ImageContainer>
            <InfoContainer>
              <InfoTitle>Trabajo remoto</InfoTitle>
              <InfoDescription>
                Cerca de la totalidad de empresas optaron por el trabajo remoto.
                Sumate a cuidar tu salud y la de todos trabajando desde casa.
              </InfoDescription>
              <InfoLink to="/">Ver más</InfoLink>
            </InfoContainer>
          </BenefitsCard>
        </CardsContainer>
      </BenefitsContainer>
    </BenefitsWrapper>
  );
};

const BenefitsWrapper = styled.div`
  background: #425389;
`;

const BenefitsContainer = styled.div`
  padding: 2rem calc((100vw - 1400px) / 2);
`;

const Title = styled.h2`
  font-size: clamp(1.5rem, 6vw, 4rem);
  text-align: center;
  font-family: 'Hind Vadodara', sans-serif;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #fefefe;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BenefitsCard = styled.div`
  width: 42rem;
  background: #fefefe;
  border-radius: 15px;
  display: flex;
  flex-direction: row;

  padding: 0 1rem;
  margin: 0 auto 1.5rem;
  @media screen and (max-width: 534px) {
    width: 80%;
    align-items: center;
    flex-direction: column;
    & h3,
    & a {
      text-align: center;
    }
    & p {
      text-align: justify;
      margin-bottom: 1rem;
    }
  }
`;

const ImageContainer = styled.div`
  width: 30%;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1em;
`;

const InfoTitle = styled.h3`
  font-family: 'Haid Vadodara', sans-serif;
  font-size: clamp(0.8rem, 3vw, 1.8rem);
  color: #425389;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 534px) {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
  }
`;

const InfoDescription = styled.p`
  font-family: 'Haid Vadodara', sans-serif;
  font-size: clamp(0.65rem, 3vw, 1.2rem);
  color: #626262;
  @media screen and (max-width: 534px) {
    font-size: clamp(1.1rem, 3vw, 1.8rem);
  }
`;

const InfoLink = styled(Link)`
  font-family: 'Haid Vadodara', sans-serif;
  font-size: clamp(0.65rem, 3vw, 1.2rem);
  font-weight: bold;
  color: #425389;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 534px) {
    font-size: clamp(1.1rem, 3vw, 1.8rem);
  }
`;

export default BenefitsBanner;
