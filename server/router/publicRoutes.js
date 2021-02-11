const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
} = require('../middleware/validation');

const {
  signupController,
  loginController,
} = require('../controller/routes/user');

const {
  getAllHouses,
  getHouseByLocation,
} = require('../controller/routes/house');

router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);

router.get('/houses', getAllHouses);
router.get('/houses/:location', getHouseByLocation);

module.exports = router;