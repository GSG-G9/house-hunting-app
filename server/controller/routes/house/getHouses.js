const { getAllHousesData } = require('../../../database/queries/house/index');

const getAllHouses = async (req, res, next) => {
  let { limit, skip } = req.query;
  if (!limit) limit = 10;
  if (!skip) skip = 0;

  try {
    const { rows } = await getAllHousesData(limit, skip);

    return res.status(200).json({ statusCode: 200, data: rows });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllHouses };
