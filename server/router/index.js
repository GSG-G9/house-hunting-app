const router = require('express').Router();
const user = require('./user');
const house = require('./house');

router.use(user);
router.use(house);

module.exports = router;
