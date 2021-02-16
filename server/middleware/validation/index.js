const signupValidation = require('./signup');
const loginValidation = require('./login');
const addHouseValidation = require('./addNewHouse');
const updateUserValidation = require('./updateUser');
const updateHouseValidation = require('./updateHouseValidation');

module.exports = {
  signupValidation,
  loginValidation,
  addHouseValidation,
  updateUserValidation,
  updateHouseValidation,
};
