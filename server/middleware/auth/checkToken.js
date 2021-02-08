const boomify = require('../../utils/boomify');
const { verifying } = require('../../utils/jwtFunctions');

const protect = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    let decoded;
    try {
      decoded = await verifying(token);
    } catch (error) {
      throw boomify(401, 'Invalid credentials.');
    }

    const { user_id: userId } = decoded;

    req.userId = userId;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { protect };
