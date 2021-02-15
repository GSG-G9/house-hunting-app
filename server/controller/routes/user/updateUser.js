const { updateUser } = require('../../../database/queries');

const updateUserController = async (req, res, next) => {
  try {
    const { username, email, address, mobile } = req.body;
    const { userId } = req;

    await updateUser({ userId, username, email, address, mobile });
    res.status(200).json({ status: 200, message: 'user updated Successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserController;
