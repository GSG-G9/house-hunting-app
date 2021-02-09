const { getFavoriteHouses } = require('../../../database/queries/house');

const getFavoriteList = async (req, res, next) => {
  try {
    console.log(req.userId);
    const { rows } = await getFavoriteHouses(req.userId);

    return res.status(200).json({
      statusCode: 200,
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = getFavoriteList;
