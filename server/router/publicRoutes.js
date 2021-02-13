const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
} = require('../middleware/validation');

const {
  signupController,
  loginController,
  authController,
} = require('../controller/routes/user');

const {
  getAllHouses,
  getHouseByLocation,
  getNewestHouses,
  getHouseById,
} = require('../controller/routes/house');

router.get('/is-auth', authController);
router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);

router.get('/houses', getAllHouses);
router.get('/newest-houses', getNewestHouses);
router.get('/houses/id/:houseId', getHouseById);
router.get('/houses/:location', getHouseByLocation);

module.exports = router;
