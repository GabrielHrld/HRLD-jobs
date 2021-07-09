import React from 'react';
import styled from 'styled-components';

import { ButtonQuery } from '../components/Button';

const JobsDetails = () => {
  return (
    <JobsDetailsWrapper>
      <JobsDetailsContainer>
        <BoxesContainer>
          <OfferContainer>
            <OfferHeader>
              <h3>Programador Angular</h3>
              <h4>Prueba Technology S.A.</h4>
            </OfferHeader>
            <OfferSpecs>
              <SpecsGroup>
                <h5>Lugar de trabajo</h5>
                <p>Capital Federal, Buenos Aires</p>
              </SpecsGroup>
              <SpecsGroup>
                <h5>Publicado</h5>
                <p>8 de julio</p>
              </SpecsGroup>
              <SpecsGroup>
                <h5>Sueldo</h5>
                <p>No especificado</p>
              </SpecsGroup>
              <SpecsGroup>
                <h5>Tipo de puesto</h5>
                <p>Full-time</p>
              </SpecsGroup>
              <SpecsGroup>
                <h5>Área</h5>
                <p>Informática</p>
              </SpecsGroup>
              <SpecsGroup>
                <h5>Modalidad de trabajo</h5>
                <p>Remoto</p>
              </SpecsGroup>
            </OfferSpecs>
            <hr style={{ width: '90%', margin: '0 auto' }} />
            <OfferDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, aliquam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tenetur, aliquam! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur, aliquam! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Tenetur, aliquam!{' '}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur, aliquam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Tenetur, aliquam!
              </p>
            </OfferDescription>

            <ButtonContainer>
              <ButtonQuery round primary type="button">
                Postularme
              </ButtonQuery>
            </ButtonContainer>
          </OfferContainer>
          <RelatedContainer>related container</RelatedContainer>
        </BoxesContainer>
      </JobsDetailsContainer>
    </JobsDetailsWrapper>
  );
};

const JobsDetailsWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
`;

const JobsDetailsContainer = styled.div`
  padding: 0rem calc((100vw - 1400px) / 2);
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const OfferContainer = styled.div`
  margin: 0 0.5rem;
  width: 60%;
  min-width: 280px;
  border: 1px solid #32b7b6;
  border-radius: 5px;
  background: #fefefe;
`;

const OfferHeader = styled.header`
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, #32b7b6, #32b791);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  & h3,
  h4 {
    font-family: 'Haid Vadodara', sans-serif;
    color: #fffffa;
    padding: 6px 0;
    font-weight: 400;
  }
  & h3 {
    font-size: clamp(1.2rem, 2.2vw, 1.8rem);
  }
`;

const OfferSpecs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  padding: 1rem;

  & h5,
  p {
    font-family: 'Haid Vadodara', sans-serif;
  }

  & h5 {
    font-weight: 300;
    color: #909090;
    margin-bottom: 5px;
  }
`;

const SpecsGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 15px 0;
`;

const OfferDescription = styled.div`
  padding: 1rem;

  & p {
    padding: 0.6rem;
    font-family: 'Haid Vadodara', sans-serif;
    font-weight: 300;
    text-align: justify;
    word-break: break-all;
  }
`;

const ButtonContainer = styled.div`
  padding: 1rem;
`;

const RelatedContainer = styled.div`
  margin: 0 0.5rem;
  min-width: 280px;
  width: auto;
  background: blue;
`;

export default JobsDetails;
