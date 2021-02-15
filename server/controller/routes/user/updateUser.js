const { updateUser } = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const updateUserController = async (req, res, next) => {
  try {
    const { username, email, address, mobile } = req.body;
    const { userId } = req;

    const { rows } = await updateUser({
      userId,
      username,
      email,
      address,
      mobile,
    });
    if (!rows.length) {
      throw boomify(500, 'faild to update user info');
    }
    return res.json({ statusCode: 200, message: 'user updated Successfully' });
  } catch (error) {
    return next(error);
  }
};

module.exports = updateUserController;
