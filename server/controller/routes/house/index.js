const getAllHouses = require('./getHouses');
const getHouseByLocation = require('./getHouseByLocation');
const addNewHouse = require('./addNewHouse');
const getFavoriteList = require('./getFavoriteList');
const getNewestHouses = require('./getNewestHouses');
const getHouseById = require('./getHouseById');
const addHouseToFav = require('./addHouseToFav');
const deleteFavoriteHouse = require('./deleteFavoriteHouse');

module.exports = {
  getAllHouses,
  getHouseByLocation,
  addNewHouse,
  getFavoriteList,
  getNewestHouses,
  getHouseById,
  addHouseToFav,
  deleteFavoriteHouse,
};
