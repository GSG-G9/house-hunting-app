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
      userId,
    } = req.body;
    await updateHouse({
      roomNo,
      category,
      price,
      description,
      title,
      locationId,
      bathNo,
      userId,
      houseId,
    });
    console.log(houseId, 'param', req.body.userId, 13);
    return res.json({
      status: 200,
      message: 'hi from update house',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = updateHouseController;
