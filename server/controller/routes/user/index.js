const signupController = require('./signup');
const logoutController = require('./logout');
const loginController = require('./login');
const authController = require('./isAuth');

module.exports = {
  signupController,
  loginController,
  logoutController,
  authController,
};
