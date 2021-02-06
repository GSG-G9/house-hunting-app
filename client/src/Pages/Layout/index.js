import React from 'react';
import { func } from 'prop-types';

import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: func.isRequired,
};

export default Layout;
