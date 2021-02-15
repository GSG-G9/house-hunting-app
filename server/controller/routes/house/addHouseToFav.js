const { addHouseToFavList } = require('../../../database/queries/house');
const boomify = require('../../../utils/boomify');

const addHouseToFav = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;

    await addHouseToFavList({ userId, houseId });

    return res.json({
      status: 201,
      message: '  House added  to favorite successfully',
    });
  } catch (err) {
    if (err.constraint === 'favorites_house_id_fkey') {
      return next(boomify(404, 'house not found'));
    }
    if (
      err.message === 'duplicate key value violates unique constraint "u_f"'
    ) {
      return next(boomify(409, 'House already added to favorite list '));
    }

    return next(err);
  }
};
module.exports = addHouseToFav;
