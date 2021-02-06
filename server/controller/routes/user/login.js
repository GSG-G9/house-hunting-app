const jwt = require('jsonwebtoken');
const bcrybt = require('bcrypt');

const { checkUserByEmail } = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const secretToken = process.env.SECRET_TOKEN;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const { rows } = await checkUserByEmail(email);

    if (!rows.length) throw boomify(404, 'User does not exist');

    const match = await bcrybt.compare(password, rows[0].password);

    if (!match) throw boomify(400, 'Invalid username/password');

    const token = jwt.sign(rows[0].id, secretToken);

    res
      .json({
        statusCode: 200,
        message: 'Login successfully',
      })
      .cookie('token', token);
  } catch (error) {
    next(error);
  }
};

module.exports = login;
