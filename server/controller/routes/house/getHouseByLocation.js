const { getHouseLocation } = require('../../../database/queries/house');

const getHouseByLocation = async (req, res, next) => {
  try {
    const { location } = req.query;
    const { rows } = await getHouseLocation({ location });

    res.json({
      status: 200,
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getHouseByLocation;
