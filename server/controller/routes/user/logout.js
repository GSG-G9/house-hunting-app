const logout = (req, res) => {
  res
    .clearCookie('token')
    .json({ statusCode: 200, message: 'Logout successfully' });
};

module.exports = { logout };
