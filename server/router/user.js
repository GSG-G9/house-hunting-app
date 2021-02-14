const router = require('express').Router();

const {
  logoutController,
  getUser,
  getUserHouses,
} = require('../controller/routes/user');

router.get('/logout', logoutController);

router.get('/users', getUser);
router.get('/user/houses', getUserHouses);

module.exports = router;
