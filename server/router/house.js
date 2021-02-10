const router = require('express').Router();
const { protect } = require('../middleware/auth');
const {
  getAllHouses,
  addNewHouse,
  getHouseByLocation,
} = require('../controller/routes/house');
const { addHouseValidation } = require('../middleware/validation');

router.get('/houses', getAllHouses);
router.get('/houses/:location', getHouseByLocation);
router.use(protect);
router.post('/houses', addHouseValidation, addNewHouse);

module.exports = router;
