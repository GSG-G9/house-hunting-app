const getFavorite = require('../../../database/queries/house');

const getFavoriteHouses = async (req, res, next) => {
  try {
    const { rows } = await getFavorite();

    return res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getFavoriteHouses;
