const { getAllHousesData } = require('../../../database/queries/house');

const getAllHouses = async (req, res, next) => {
  try {
    const { limit, skip } = req.query;
    const { rows } = await getAllHousesData(limit, skip);

    return res.status(200).json({ statusCode: 200, data: rows });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllHouses };
