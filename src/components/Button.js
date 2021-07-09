import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#425389' : '#32b7b6')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-family: 'Hind Vadodara', sans-serif;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: 1px solid ${({ primary }) => (primary ? '#425389' : '#32b7b6')};
  min-width: 90px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '60px' : 'none')};

  &:hover {
    background: ${({ primary }) => (primary ? '#32b7b6' : '#425389')};
    border: 1px solid ${({ primary }) => (primary ? '#32b7b6' : '#425389')};
  }
`;

export const ButtonQuery = styled.button`
  background: ${({ primary }) => (primary ? '#425389' : '#32b791')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-family: 'Hind Vadodara', sans-serif;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: 1px solid ${({ primary }) => (primary ? '#425389' : '#32b791')};
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '60px' : 'none')};
  &:hover {
    background: ${({ primary }) => (primary ? '#32b791' : '#425389')};
    border: 1px solid ${({ primary }) => (primary ? '#32b791' : '#425389')};
  }
`;
