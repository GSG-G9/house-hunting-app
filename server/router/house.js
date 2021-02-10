const router = require('express').Router();

const { getFavoriteList } = require('../controller/routes/house');

router.get('/favorite', getFavoriteList);

module.exports = router;
