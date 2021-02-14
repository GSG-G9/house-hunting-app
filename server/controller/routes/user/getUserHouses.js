const getUserHouses = async (req, res, next) => {
  try {
    res.json({
      status: 200,
      message: 'hi from user houses',
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getUserHouses;
