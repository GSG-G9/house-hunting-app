const bcrybt = require('bcrypt');

const { checkUserByEmail } = require('../../../database/queries/user');
const { signatureToken } = require('../../../utils/jwtFunctions');
const boomify = require('../../../utils/boomify');

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const {
      rows: [check],
    } = await checkUserByEmail({ email });

    if (!check) throw boomify(404, 'User does not exist');

    const match = await bcrybt.compare(password, check.password);

    if (!match) throw boomify(400, 'Invalid username/password');

    const token = await signatureToken(check.id);

    res.cookie('token', token).json({
      statusCode: 200,
      message: 'Login successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginController;
