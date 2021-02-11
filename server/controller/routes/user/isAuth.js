const boomify = require('../../../utils/boomify');
const { verifying } = require('../../../utils/jwtFunctions');

const authController = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { userId } = await verifying(token);
    req.userId = userId;
    const request = req;
    return res.json({
      userId,
      isAuth: true,
      request,
    });
  } catch (error) {
    return next(boomify(401, 'unautherized'));
  }
};

module.exports = authController;
