const deleteHouseController = async (req, res, next) => {
  try {
    await res.json({
      status: 200,
      message: 'hi from delete house page',
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = deleteHouseController;
