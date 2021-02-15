const deleteUser = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const deleteUserController = async (req, res, next) => {
  try {
    const { userId } = req;
    const { rows } = await deleteUser({ userId });
    if (!rows.length) {
      throw boomify(500, 'Something went wrong!');
    }
    return res
      .clearCookie('token')
      .json({ statusCode: 200, message: 'Account deleted successfully' });
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteUserController;
