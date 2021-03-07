const router = require('express').Router();

const protect = require('../middleware/auth/checkToken');

const user = require('./user');
const house = require('./house');

const publicRoutes = require('./publicRoutes');

router.use(publicRoutes);
router.use(protect);
router.use(user);
router.use(house);

module.exports = router;
