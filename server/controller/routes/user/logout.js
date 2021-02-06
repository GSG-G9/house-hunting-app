const logout = (req, res) => {
  res
    .clearCookie('token')
    .json({ statusCode: 200, message: 'Log out successfully' });
};

module.exports = { logout };
