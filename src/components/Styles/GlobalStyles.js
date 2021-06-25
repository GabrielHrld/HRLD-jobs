import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@300;400;600&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  li{
    list-style: none;
  }
  body{
    background-color: #dde0e4;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
