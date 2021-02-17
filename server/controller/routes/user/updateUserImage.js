const { updateUserImageData } = require('../../../database/queries/user');
const { cloudinary } = require('../../../utils/cloudinary');

const updateUserImage = async (req, res, next) => {
  try {
    const { data } = req.body;
    const { userId } = req;

    const { url: imageUrl } = await cloudinary.uploader.upload(data, {
      upload_preset: 'slbhisgh',
    });

    await updateUserImageData({
      userId,
      imageUrl,
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
