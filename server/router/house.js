const router = require('express').Router();

const { addHouseValidation } = require('../middleware/validation');
const {
  addNewHouse,
  getFavoriteList,
  addHouseToFav,
  deleteFavoriteHouse,
  deleteHouseController,
} = require('../controller/routes/house');

router.post('/houses', addHouseValidation, addNewHouse);
router.get('/favorite', getFavoriteList);
router.get('/favorite/:houseId', addHouseToFav);
router.delete('/favorite/:houseId', deleteFavoriteHouse);
router.delete('/houses/:houseId', deleteHouseController);

module.exports = router;
