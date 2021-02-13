const { addHouseToFavList } = require('../../../database/queries/house');

const addHouseToFav = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;
    await addHouseToFavList({ houseId, userId });

    res.json({
      status: 201,
      message: '  House added  to favorite successfully',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = addHouseToFav;
