const router = require('express').Router();

const {
  getAllHouses,
  getFavoriteHouses,
} = require('../controller/routes/house');

router.get('/houses', getAllHouses);
router.get('/favorite', getFavoriteHouses);

module.exports = router;
