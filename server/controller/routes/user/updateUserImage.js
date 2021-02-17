const { updateUserImageData } = require('../../../database/queries/user');

const updateUserImage = async (req, res, next) => {
  try {
    const { data } = req.body;
    const { userId } = req;
    await updateUserImageData({
      userId,
    });
    return res.json({
      statusCode: 200,
      message: 'User Image updated Successfully',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = updateUserImage;
