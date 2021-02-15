const { deleteUser } = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const deleteUserController = async (req, res, next) => {
  try {
    await deleteUser(req.userId);

    return res
      .clearCookie('token')
      .json({ statusCode: 200, message: 'Account deleted successfully' });
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteUserController;
