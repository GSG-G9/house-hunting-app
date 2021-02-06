const signup = async (req, res) => {
  try {
    res.json({
      msg: 'hi from signup page',
      status: 200,
    });
  } catch (err) {
    res.status(400).json({ status: 400, error: err });
  }
};
module.exports = signup;
