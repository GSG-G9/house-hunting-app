const { getUserHouses } = require('../../../database/queries/user');

const getUserHousesController = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await getUserHouses({ userId });
    return res.json({
      status: 200,
      data: rows,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = getUserHousesController;
