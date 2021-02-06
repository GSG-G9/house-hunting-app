import React from 'react';
import { func } from 'prop-types';
import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function Layout({ Children }) {
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
}
Layout.propTypes = {
  Children: func.isRequired,
};
export default Layout;
