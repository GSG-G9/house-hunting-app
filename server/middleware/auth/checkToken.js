const boomify = require('../../utils/boomify');
const { verifying } = require('../../utils/jwtFunctions');

const protect = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    const { userId } = await verifying(token);
    req.userId = userId;
    next();
  } catch (error) {
    next(boomify(401, 'unauthorized.'));
  }
};

module.exports = protect;
