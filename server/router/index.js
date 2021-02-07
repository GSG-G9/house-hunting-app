const router = require('express').Router();

const user = require('./user');

router.get('/', (req, res) => {
  res.json({
    message: 'Hello from house-hunting app',
    statusCode: 200,
  });
});

router.use(user);

module.exports = router;
