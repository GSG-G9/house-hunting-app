const router = require('express').Router();

const { signup } = require('../controller/routes/user/index');
const SignupValidate = require('../middleware/validation/signupSchema');

router.post('/signup', SignupValidate, signup);

module.exports = router;
