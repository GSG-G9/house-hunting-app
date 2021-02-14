const { updateUser } = require('../../../database/queries');
const { verifying } = require('../../../utils/jwtFunctions');

const updateUserController = async (req, res, next) => {
  try {
    const { username, email, address, mobile } = req.body;
    const { token } = req.cookies;
    const { userId } = await verifying(token);

    await updateUser({ userId, username, email, address, mobile });
    res.status(200).json({ status: 200, message: 'user updated Successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUserController;
