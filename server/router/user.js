const router = require('express').Router();

const { logoutController, getUser } = require('../controller/routes/user');

router.get('/users', getUser);
router.get('/logout', logoutController);

module.exports = router;
