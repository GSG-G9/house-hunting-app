const router = require('express').Router();

const house = require('./house');

router.get('/', (req, res) => {
  res.json({
    message: 'Hello from house-hunting app',
    statusCode: 200,
  });
});

router.use(house);

module.exports = router;
