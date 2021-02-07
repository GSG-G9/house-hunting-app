const router = require('express').Router();

const { signupController } = require('../controller/routes/user');
const { signupValidate } = require('../middleware/validation');

router.post('/signup', signupValidate, signupController);

module.exports = router;
