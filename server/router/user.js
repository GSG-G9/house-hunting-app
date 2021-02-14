const router = require('express').Router();

const { logoutController } = require('../controller/routes/user');

router.get('/logout', logoutController);
router.patch('/users');

module.exports = router;
