const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
} = require('../middleware/validation');

const {
  loginController,
  signupController,
} = require('../controller/routes/user');

router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);

module.exports = router;
