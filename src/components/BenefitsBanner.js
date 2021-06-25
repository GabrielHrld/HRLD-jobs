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
      {/* <Decoration /> */}

      <Decoration>
        <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 137.7333333333333,218.53333333333333 275.4666666666666,237.06666666666666 451,233 C 626.5333333333334,228.93333333333334 839.8666666666668,202.26666666666665 1011,193 C 1182.1333333333332,183.73333333333335 1311.0666666666666,191.86666666666667 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="fill"
            strokeWidth="0"
            fill="#425389"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
        </svg>
      </Decoration>
      <DecorationTwo>
        <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 101.27272727272728,224.72727272727275 202.54545454545456,249.45454545454547 309,241 C 415.45454545454544,232.54545454545453 527.0909090909091,190.9090909090909 620,194 C 712.9090909090909,197.0909090909091 787.0909090909092,244.90909090909093 885,264 C 982.9090909090908,283.09090909090907 1104.5454545454545,273.4545454545455 1201,258 C 1297.4545454545455,242.54545454545453 1368.7272727272727,221.27272727272725 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#425389"
            className="transition-all duration-300 ease-in-out delay-150"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </DecorationTwo>
    </BenefitsWrapper>
  );
};

const BenefitsWrapper = styled.div`
  position: relative;
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

const Decoration = styled.div`
  position: absolute;
  z-index: 0;
  top: -24%;
  right: 0;
  width: 100%;
  height: 101px;

  /* @media screen and (max-width: 1343px) {
    top: -16%;
  } */

  @media screen and (max-width: 1360px) {
    top: -16%;
  }

  @media screen and (max-width: 534px) {
    top: -10%;
  }

  @media screen and (max-width: 454px) {
    top: -7%;
  }
`;

const DecorationTwo = styled.div`
  position: absolute;
  z-index: 0;
  bottom: -17%;
  right: 0;
  width: 100%;
  height: 70px;

  @media screen and (max-width: 1360px) {
    bottom: -11%;
  }

  @media screen and (max-width: 534px) {
    bottom: -7%;
  }

  @media screen and (max-width: 454px) {
    bottom: -6%;
  }
`;

export default BenefitsBanner;
