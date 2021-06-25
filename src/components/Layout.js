import React from 'react';
import Navbar from './navbar/Navbar';
import { GlobalStyles } from './Styles/GlobalStyles';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
