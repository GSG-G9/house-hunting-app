const { deleteFromFavoriteHouses } = require('../../../database/queries/house');
const boomify = require('../../../utils/boomify');

const deleteFavoriteHouse = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;
    const { rows } = await deleteFromFavoriteHouses({ houseId, userId });

    if (!rows.length) {
      throw boomify(404, 'house not on favorite list');
    }
    return res.json({
      statusCode: 200,
      message: 'Favorite house deleted',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteFavoriteHouse;
