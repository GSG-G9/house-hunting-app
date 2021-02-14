const { addUserHouses } = require('../../../database/queries/user');

const getUserHouses = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await addUserHouses({ userId });
    res.json({
      status: 200,
      data: rows,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getUserHouses;
