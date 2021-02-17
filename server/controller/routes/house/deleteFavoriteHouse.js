const { deleteFromFavoriteHouses } = require('../../../database/queries/house');

const deleteFavoriteHouse = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;
    await deleteFromFavoriteHouses({ houseId, userId });

    return res.json({
      statusCode: 200,
      message: 'Favorite house deleted',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteFavoriteHouse;
