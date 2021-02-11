const signupController = require('./signup');
const logoutController = require('./logout');
const loginController = require('./login');
const authController = require('./isauth');

module.exports = {
  signupController,
  loginController,
  logoutController,
  authController,
};
