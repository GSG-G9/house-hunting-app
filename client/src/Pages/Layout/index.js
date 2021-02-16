import React, { useContext } from 'react';
import { element } from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AuthContext from '../../Context/AuthContext';

function Layout({ children }) {
  const { authLoading } = useContext(AuthContext);
  return (
    <>
      {authLoading ? (
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          top={100}
        >
          <CircularProgress size={70} thickness={4} value={100} />
        </Box>
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
