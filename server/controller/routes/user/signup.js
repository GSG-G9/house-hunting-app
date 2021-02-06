const bcrypt = require('bcrypt');

const checkUserByEmail = require('../../../database/queries/user/checkUserByEmail');
const boomify = require('../../../utils/boomify');

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const getEmail = await checkUserByEmail(email);
    const { rows } = getEmail;
    if (rows.length > 0) {
      next(boomify(409, 'user already exists '));
    }
    const hashedPassword = bcrypt.hash(password, 10);
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  }
};
module.exports = signup;
