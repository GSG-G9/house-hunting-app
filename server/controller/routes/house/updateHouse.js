const { updateHouse } = require('../../../database/queries/house');

const updateHouseController = async (req, res, next) => {
  try {
    await updateHouse();
    return res.json({
      status: 200,
      message: 'hi from update house',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = updateHouseController;
