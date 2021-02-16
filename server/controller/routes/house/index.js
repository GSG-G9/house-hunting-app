const getAllHouses = require('./getHouses');
const getHouseByLocation = require('./getHouseByLocation');
const addNewHouse = require('./addNewHouse');
const getFavoriteList = require('./getFavoriteList');
const getNewestHouses = require('./getNewestHouses');
const getHouseById = require('./getHouseById');
const addHouseToFav = require('./addHouseToFav');
const deleteFavoriteHouse = require('./deleteFavoriteHouse');
const deleteHouseController = require('./deleteHouse');

module.exports = {
  getAllHouses,
  getHouseByLocation,
  addNewHouse,
  getFavoriteList,
  getNewestHouses,
  getHouseById,
  addHouseToFav,
  deleteFavoriteHouse,
  deleteHouseController,
};
