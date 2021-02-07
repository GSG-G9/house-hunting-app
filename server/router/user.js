const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
} = require('../middleware/validation');

const {
  loginController,
  signupController,
  logoutController,
} = require('../controller/routes/user');

router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);
router.get('/logout', logoutController);

module.exports = router;
