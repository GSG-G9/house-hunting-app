import React, { useContext } from 'react';
import { element } from 'prop-types';

import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AuthContext from '../../Context/AuthContext';
import Loading from '../../Components/loading';

function Layout({ children }) {
  const { authLoading } = useContext(AuthContext);
  return (
    <>
      {authLoading ? (
        <Loading size={70} />
      ) : (
        <Loading>
          <Header />
          {children}
          <Footer />
        </Loading>
      )}
    </>
  );
}

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;
