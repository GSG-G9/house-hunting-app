const boomify = require('../../../utils/boomify');
const { getUserData } = require('../../../database/queries/user');

const getUser = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await getUserData(userId);

    if (!rows.length) {
      throw boomify(500, 'Something went wrong!');
    }

    return res.json({ statusCode: 200, data: { ...rows[0], password: '' } });
  } catch (error) {
    return next(error);
  }
};

module.exports = getUser;
