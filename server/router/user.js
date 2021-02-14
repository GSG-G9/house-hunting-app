const router = require('express').Router();

const { logoutController, getUser } = require('../controller/routes/user');

router.get('/logout', logoutController);

router.get('/users', getUser);

module.exports = router;
