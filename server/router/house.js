const router = require('express').Router();

const protect = require('../middleware/auth/checkToken');

const { getAllHouses, getFavoriteList } = require('../controller/routes/house');

router.get('/houses', getAllHouses);

router.use(protect);
router.get('/favorite', getFavoriteList);

module.exports = router;
