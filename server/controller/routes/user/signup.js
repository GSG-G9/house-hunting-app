const bcrypt = require('bcrypt');

const checkUserByEmail = require('../../../database/queries/user/index');
const boomify = require('../../../utils/boomify');
const addUser = require('../../../database/queries/user/index');

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const getEmail = await checkUserByEmail(email);
    const { rows } = getEmail;
    if (rows.length > 0) {
      next(boomify(409, 'user already exists '));
    }
    const hashedPassword = bcrypt.hash(password, 10);
    const newUser = addUser({ ...req.body, password: hashedPassword });
    await newUser;
    await res.status(201).json({ status: 201, msg: 'Welcome' });
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  }
};
module.exports = signup;
