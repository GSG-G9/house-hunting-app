const { updateHouse } = require('../../../database/queries/house');

const updateHouseController = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const { userId } = req;
    await updateHouse({ houseId, userId, ...req.body });
    console.log(req.body, 5);
    return res.json({
      status: 200,
      message: 'updated successfully',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = updateHouseController;
