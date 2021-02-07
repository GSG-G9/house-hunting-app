const router = require('express').Router();

const { logout } = require('../controller/routes/user');
const { signupController } = require('../controller/routes/user');
const { signupValidate } = require('../middleware/validation');

router.get('/logout', logout);
router.post('/signup', signupValidate, signupController);

module.exports = router;
