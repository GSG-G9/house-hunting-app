const router = require('express').Router();

const {
  getAllHouses,
  getHouseByLocation,
} = require('../controller/routes/house');

router.get('/houses', getAllHouses);
router.get('/houses?', getHouseByLocation);

module.exports = router;
