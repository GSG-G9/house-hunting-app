const {
  updateUser,
  checkUserByEmail,
} = require('../../../database/queries/user');
const boomify = require('../../../utils/boomify');

const updateUserController = async (req, res, next) => {
  try {
    const { username, email, address, mobile } = req.body;
    const { userId } = req;

    const { rows: row } = await checkUserByEmail({ email });

    if (row[0].id !== userId) {
      console.log(row.id, userId, 'ggggg');
      console.log(row, 'llllllllll');
      throw boomify(409, 'Email already exists');
    }

    const { rows } = await updateUser({
      userId,
      username,
      email,
      address,
      mobile,
    });
    if (!rows.length) {
      throw boomify(500, 'faild to update user info');
    }
    return res.json({
      statusCode: 200,
      message: 'user updated Successfully',
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = updateUserController;
