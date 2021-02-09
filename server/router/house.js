const router = require('express').Router();
const { protect } = require('../middleware/auth');
const { getAllHouses, addNewHouse } = require('../controller/routes/house');

router.get('/houses', getAllHouses);

// Protect route
router.use(protect);
router.post('/houses', addNewHouse);

module.exports = router;
