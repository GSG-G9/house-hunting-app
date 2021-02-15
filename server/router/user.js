const router = require('express').Router();

const {
  logoutController,
  getUser,
  getUserHousesController,
} = require('../controller/routes/user');

router.get('/logout', logoutController);

router.get('/users', getUser);
router.get('/user/houses', getUserHousesController);

module.exports = router;
