const logout = (req, res) => {
  res.clearCookie('token');

  res.status(200).json({ statusCode: 200, message: 'Log out successfully' });
};

module.exports = { logout };
