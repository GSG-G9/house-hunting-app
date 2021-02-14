const router = require('express').Router();

const { logoutController } = require('../controller/routes/user');

router.get('/logout', logoutController);
router.put('/user/:id');

module.exports = router;
