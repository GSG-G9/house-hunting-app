const { getHouseLocation } = require('../../../database/queries/house');

const getHouseByLocation = async (req, res, next) => {
  try {
    const { location } = req.params;

    const { rows } = await getHouseLocation({ location });

    return res.json({
      status: 200,
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getHouseByLocation;
