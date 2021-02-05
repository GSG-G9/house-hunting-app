const router = require('express').Router();

const { login } = require('../controller/routes/user');

router.post('/login', login);

module.exports = router;
