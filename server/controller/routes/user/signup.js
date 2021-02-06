const bcrypt = require('bcrypt');

const { checkUserByEmail, addUser } = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const signupController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { rows } = await checkUserByEmail(email);
    console.log(rows, 'rr');
    if (rows.length) {
      throw boomify(409, 'user already exists ');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // const {rows:[result]} = await addUser({ ...req.body, password: hashedPassword });
    // res.status(201).json({ status: 201, msg: `Welcome,${} ` });
  } catch (err) {
    next(err);
  }
};
module.exports = signupController;
