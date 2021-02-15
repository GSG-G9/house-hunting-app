import React, { useContext } from 'react';
import { element } from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AuthContext from '../../Context/AuthContext';

function Layout({ children }) {
  const { authLoading } = useContext(AuthContext);
  return (
    <>
      {authLoading ? (
        <CircularProgress size={25} color="secondary" />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
