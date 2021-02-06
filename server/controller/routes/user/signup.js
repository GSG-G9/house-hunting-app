const checkUserByEmail = require('../../../database/queries/user/checkUserByEmail');
const boomify = require('../../../utils/boomify');

const signup = async (req, res, next) => {
  try {
    const { email } = req.body;
    const getEmail = await checkUserByEmail(email);
    const { rows } = getEmail;
    if (rows.length > 0) {
      next(boomify(409, 'user already exists '));
    }
    res.send('hi');
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  }
};
module.exports = signup;
