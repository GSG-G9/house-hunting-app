const router = require('express').Router();

const {
  logoutController,
  getUser,
  getUserHousesController,
  updateUserController,
  deleteUserController,
  updateUserImage,
} = require('../controller/routes/user');
const { updateUserValidation } = require('../middleware/validation');

router.get('/user/houses', getUserHousesController);
router.get('/users', getUser);
router.get('/logout', logoutController);
router.patch('/users', updateUserValidation, updateUserController);
router.delete('/users', deleteUserController);
router.patch('/users/avatar', updateUserImage);

module.exports = router;
