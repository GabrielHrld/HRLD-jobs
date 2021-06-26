import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ButtonQuery } from '../Button';

import { States } from '../../utils/States';

const SearchComponent = () => {
  return (
    <SearchWrapper>
      <SearchContainer>
        <Form>
          <QueryContainer>
            <IconContainer>
              <FontAwesomeIcon icon={faSearch} style={{ color: '#425389' }} />
            </IconContainer>
            <Input type="text" placeholder="Buscar oferta" />
          </QueryContainer>
          <LocationContainer>
            <IconContainer>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: '#425389' }}
              />
            </IconContainer>
            <Select>
              {States.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </LocationContainer>
          <ButtonQuery
            round="true"
            primary="true"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            type="submit"
          >
            Buscar
          </ButtonQuery>
        </Form>
      </SearchContainer>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  padding: 24px 48px;
  background: linear-gradient(90deg, #32b7b6, #32b791);

  @media screen and (max-width: 678px) {
    padding: 20px 20px;
  }
`;

const SearchContainer = styled.div`
  padding: 0 calc((100vw - 1400px) / 2);
`;

const Form = styled.form`
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fefefe;
  border-radius: 60px;
  padding: 0 1rem;
`;

const QueryContainer = styled.div`
  display: flex;
  border-right: 1px solid #eeeeee;
  width: 40%;

  @media screen and (max-width: 678px) {
    width: 75%;
    border-right: none;
  }
`;

const LocationContainer = styled.div`
  width: 50%;
  display: flex;
  padding: 0 10px;
  margin-right: 15px;
  border-right: 1px solid #eeeeee;

  @media screen and (max-width: 678px) {
    display: none;
  }
`;

const Select = styled.select`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const IconContainer = styled.div`
  padding: 12px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-family: 'Hind Vadodara', sans-serif;
`;

export default SearchComponent;
