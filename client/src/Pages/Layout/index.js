import React, { useContext } from 'react';
import { element } from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import Header from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import AuthContext from '../../Context/AuthContext';
import Loading from '../../Components/Loading';
import useStyles from './style';

function Layout({ children }) {
  const classes = useStyles();
  const { authLoading, error } = useContext(AuthContext);
  return (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      {authLoading ? (
        <Loading size={70} className={classes.spin} />
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
