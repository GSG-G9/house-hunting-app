const router = require('express').Router();

const {
  logoutController,
  getUser,
  getUserHousesController,
  updateUserController,
} = require('../controller/routes/user');
const { updateUserValidation } = require('../middleware/validation');

router.get('/user/houses', getUserHousesController);
router.get('/users', getUser);
router.get('/logout', logoutController);
router.patch('/users', updateUserValidation, updateUserController);

module.exports = router;
