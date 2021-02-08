const router = require('express').Router();

const { getAllHouses } = require('../controller/routes/house');

router.get('/houses', getAllHouses);

module.exports = router;
