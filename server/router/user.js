const router = require('express').Router();
const { loginValidation } = require('../middleware/validation');

const { login } = require('../controller/routes/user');

router.post('/login', loginValidation, login);

module.exports = router;
