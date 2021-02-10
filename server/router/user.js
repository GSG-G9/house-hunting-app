const router = require('express').Router();

const { logoutController } = require('../controller/routes/user');

router.get('/logout', logoutController);

module.exports = router;
