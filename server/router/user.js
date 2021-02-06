const router = require('express').Router();

const { signupController } = require('../controller/routes/user/index');
const SignupValidate = require('../middleware/validation/signupSchema');

router.post('/signup', SignupValidate, signupController);

module.exports = router;
