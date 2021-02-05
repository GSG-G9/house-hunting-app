const router = require('express').Router();

const { logout } = require('../controller/routes/user/index');

router.get('/logout', logout);

module.exports = router;
