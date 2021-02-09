const { getHouseLocation } = require('../../../database/queries/house');

const getHouseByLocation = async (req, res) => {
  const { rows } = await getHouseLocation;
  const { location } = req.query;

  res.json({
    status: 200,
    message: 'Hello from git House By Location ',
  });
};

module.exports = getHouseByLocation;
