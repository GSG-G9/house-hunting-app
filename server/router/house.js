const router = require('express').Router();

const {
  addHouseValidation,
  updateHouseValidation,
} = require('../middleware/validation');
const {
  addNewHouse,
  getFavoriteList,
  addHouseToFav,
  deleteFavoriteHouse,
  deleteHouseController,
  updateHouseController,
} = require('../controller/routes/house');

router.post('/houses', addHouseValidation, addNewHouse);
router.get('/favorite', getFavoriteList);
router.get('/favorite/:houseId', addHouseToFav);
router.delete('/favorite/:houseId', deleteFavoriteHouse);
router.delete('/houses/:houseId', deleteHouseController);
router.patch('/houses/:houseId', updateHouseValidation, updateHouseController);

module.exports = router;
