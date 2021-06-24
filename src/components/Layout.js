import React from 'react';
import Navbar from './navbar/Navbar';
import { GlobalStyles } from './Styles/GlobalStyles';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
