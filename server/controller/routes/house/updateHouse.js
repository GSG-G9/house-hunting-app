const updateHouseController = (req, res, next) => {
  try {
    return res.json({
      status: 200,
      message: 'hi from update house',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = updateHouseController;
