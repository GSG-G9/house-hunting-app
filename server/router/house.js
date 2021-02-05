const router = require('express').Router();

const { getAllHouses } = require('../controller/routes/house/index');

router.get('/houses', getAllHouses);

module.exports = router;
