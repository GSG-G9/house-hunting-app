const { updateHouse } = require('../../../database/queries/house');

const updateHouseController = async (req, res, next) => {
  try {
    const { houseId } = req.params;
    const {
      roomNo,
      category,
      price,
      description,
      title,
      locationId,
      bathNo,
      area,
      image,
    } = req.body;
    const { userId } = req;
    await updateHouse({
      roomNo,
      category,
      price,
      description,
      title,
      locationId,
      bathNo,
      area,
      image,
      userId,
      houseId,
    });
    return res.json({
      status: 200,
      message: 'updated successfully',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = updateHouseController;
