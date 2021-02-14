const getAllHousesData = require('./getAllHousesData');
const getHouseLocation = require('./getHouseByLocation');
const addNewHouse = require('./addNewHouse');
const getFavoriteHouses = require('./getFavorite');
const getNewestHousesData = require('./getNewestHousesData');
const addHouseToFavList = require('./addHouseToFavList');
const deleteFromFavoriteHouses = require('./deleteFromFavoriteHouses');

module.exports = {
  getAllHousesData,
  getHouseLocation,
  addNewHouse,
  getFavoriteHouses,
  getNewestHousesData,
  addHouseToFavList,
  deleteFromFavoriteHouses,
};
