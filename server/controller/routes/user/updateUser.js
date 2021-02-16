const { updateUser } = require('../../../database/queries/user');

const updateUserController = async (req, res, next) => {
  try {
    const { username, address, mobile } = req.body;
    const { userId } = req;
    await updateUser({
      userId,
      username,
      address,
      mobile,
    });
    return res.json({
      statusCode: 200,
      message: 'user updated Successfully',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = updateUserController;
