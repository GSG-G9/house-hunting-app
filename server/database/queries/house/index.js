const getAllHousesData = require('./getAllHousesData');
const getHouseLocation = require('./getHouseByLocation');
const addNewHouse = require('./addNewHouse');
const getFavoriteHouses = require('./getFavorite');
const getHouseData = require('./getHouseData');
const getNewestHousesData = require('./getNewestHousesData');
const addHouseToFavList = require('./addHouseToFavList');
const deleteFromFavoriteHouses = require('./deleteFromFavoriteHouses');

module.exports = {
  getAllHousesData,
  getHouseLocation,
  addNewHouse,
  getFavoriteHouses,
  getHouseData,
  getNewestHousesData,
  addHouseToFavList,
  deleteFromFavoriteHouses,
};
