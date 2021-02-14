const {
  addHouseToFavList,
  getHousesFromFav,
} = require('../../../database/queries/house');
const boomify = require('../../../utils/boomify');

const addHouseToFav = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;
    const { rows } = await getHousesFromFav({ houseId });
    if (rows.length > 0) {
      throw boomify(409, 'House already added to favorite list');
    } else await addHouseToFavList({ houseId, userId });

    return res.json({
      status: 201,
      message: '  House added  to favorite successfully',
    });
  } catch (err) {
    if (err.constraint === 'favorites_house_id_fkey')
      next(boomify(404, 'house not found'));
    return next(err);
  }
};
module.exports = addHouseToFav;
