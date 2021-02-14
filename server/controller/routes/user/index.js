const signupController = require('./signup');
const logoutController = require('./logout');
const loginController = require('./login');
const authController = require('./isAuth');
const updateUserController = require('./updateUser');

module.exports = {
  signupController,
  loginController,
  logoutController,
  authController,
  updateUserController,
};
