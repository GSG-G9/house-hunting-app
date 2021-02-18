const { deleteUser } = require('../../../database/queries/user');

const deleteUserController = async (req, res, next) => {
  try {
    await deleteUser(req.userId);
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteUserController;
