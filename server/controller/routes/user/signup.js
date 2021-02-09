const bcrypt = require('bcrypt');

const { checkUserByEmail, addUser } = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const signupController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const {
      rows: [check],
    } = await checkUserByEmail({ email });

    if (check) {
      throw boomify(409, 'user already exists ');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await addUser({ ...req.body, password: hashedPassword });

    res.status(201).json({ status: 201, message: 'SingUp Successfully' });
  } catch (err) {
    next(err);
  }
};
module.exports = signupController;
