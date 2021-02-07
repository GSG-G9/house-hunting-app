const logout = (req, res, next) => {
  try {
    return res
      .clearCookie('token')
      .json({ statusCode: 200, message: 'Logout successfully' });
  } catch (error) {
    return next(error);
  }
};

module.exports = logout;
