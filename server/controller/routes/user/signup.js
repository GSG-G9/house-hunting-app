const bcrypt = require('bcrypt');

const checkUserByEmail = require('../../../database/queries/user/index');
const boomify = require('../../../utils/boomify');
const addUser = require('../../../database/queries/user/index');

const signupController = async (req, res, next) => {
  const { email, password } = req.body;
  const getEmail = await checkUserByEmail(email);
  const { rows } = getEmail;

  try {
    if (rows.length > 0) {
      next(boomify(409, 'user already exists '));
    }
    const hashedPassword = bcrypt.hash(password, 10);
    await addUser({ ...req.body, password: hashedPassword });

    await res.status(201).json({ status: 201, msg: 'Welcome' });
  } catch (err) {
    res.status(400).json({ status: 400, error: err.message });
  }
};
module.exports = signupController;
