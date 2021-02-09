const { getHouseLocation } = require('../../../database/queries/house');

const getHouseByLocation = async (req, res, next) => {
  try {
    const { location } = req.query;
    const { rows } = await getHouseLocation({ location });
    if (rows.length > 0) {
      res.json({
        status: 400,
        data: rows,
      });
    } else
      res.json({
        status: 200,
        data: `No Houses Found in ${location}`,
      });
  } catch (err) {
    next(err);
  }
};

module.exports = getHouseByLocation;
