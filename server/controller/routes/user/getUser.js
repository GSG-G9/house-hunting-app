const { getUserData } = require('../../../database/queries/user');

const getUser = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await getUserData(userId);
    return res.json({ data: rows[0] });
  } catch (error) {
    return next(error);
  }
};

module.exports = getUser;
