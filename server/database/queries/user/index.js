const checkUserByEmail = require('./checkUserByEmail');
const addUser = require('./addUser');
const updateUser = require('./updateUser');
const getUserData = require('./getUserData');
const getUserHouses = require('./getUserHouses');
const deleteUser = require('./deleteUser');
const updateUserImageData = require('./updateUserImageData');

module.exports = {
  checkUserByEmail,
  addUser,
  getUserData,
  updateUser,
  getUserHouses,
  deleteUser,
  updateUserImageData,
};
