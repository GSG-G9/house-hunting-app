const { deleteHouse } = require('../../../database/queries/house');
const boomify = require('../../../utils/boomify');

const deleteHouseController = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;
    const { rows } = await deleteHouse({ houseId, userId });

    if (!rows.length) {
      throw boomify(404, 'House Not Found');
    }
    return res.json({
      status: 200,
      message: 'House deleted successfully',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = deleteHouseController;
