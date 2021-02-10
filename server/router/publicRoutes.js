const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
} = require('../middleware/validation');

const {
  getAllHouses,
  getHouseByLocation,
} = require('../controller/routes/house');
const {
  loginController,
  signupController,
} = require('../controller/routes/user');

router.get('/houses', getAllHouses);
router.get('/houses/:location', getHouseByLocation);

router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);

module.exports = router;
