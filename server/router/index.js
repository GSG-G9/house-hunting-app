const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello from house-hunting app',
    statusCode: 200,
  });
});

module.exports = router;
