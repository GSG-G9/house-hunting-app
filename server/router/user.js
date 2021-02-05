const router = require('express').Router();

const { signup } = require('../controller/routes/user/index');

router.post('/signup', signup);

module.exports = router;
