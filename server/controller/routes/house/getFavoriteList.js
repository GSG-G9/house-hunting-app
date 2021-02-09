const { getFavoriteHouses } = require('../../../database/queries/house');

const getFavoriteList = async (req, res, next) => {
  try {
    const { rows } = await getFavoriteHouses(req.userId);
    res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getFavoriteList;
