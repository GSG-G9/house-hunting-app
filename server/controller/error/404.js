const clientError = (req, res) => {
  res.status(404).json({
    message: 'Not Found',
    statusCode: 404,
  });
};

module.exports = clientError;
