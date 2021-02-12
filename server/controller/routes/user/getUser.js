const boomify = require('../../../utils/boomify');
const { getUserData } = require('../../../database/queries/user');

const getUser = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await getUserData(userId);

    if (rows.length === 0) {
      throw boomify(404, 'User Not Found!');
    }

    return res.json({ data: rows[0] });
  } catch (error) {
    return next(error);
  }
};

module.exports = getUser;
