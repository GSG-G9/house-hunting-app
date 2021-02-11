const { getNewestHousesdata } = require('../../../database/queries/house');

const getNewestHouses = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const { rows } = await getNewestHousesdata(limit);

    return res.status(200).json({ statusCode: 200, data: rows });
  } catch (error) {
    return next(error);
  }
};

module.exports = getNewestHouses;
