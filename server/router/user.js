const router = require('express').Router();

const {
  logoutController,
  updateUserController,
} = require('../controller/routes/user');
const { updateUserValidation } = require('../middleware/validation');

router.get('/logout', logoutController);
router.patch('/users', updateUserValidation, updateUserController);

module.exports = router;
