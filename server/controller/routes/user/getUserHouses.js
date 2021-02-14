const { addUserHouses } = require('../../../database/queries/user');

const getUserHouses = async (req, res, next) => {
  try {
    const { userId } = req;
    console.log(userId, 456);
    const { rows } = await addUserHouses(userId);
    console.log(rows, 55);
    res.json({
      status: 200,
      data: rows,
      message: 'hi from user houses',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getUserHouses;
