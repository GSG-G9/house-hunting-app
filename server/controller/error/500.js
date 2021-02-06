// eslint-disable-next-line no-unused-vars
const serverError = (error, req, res, next) => {
  // eslint-disable-next-line no-console
  if (process.env.NODE_ENV !== 'production') console.log(error);
  res.status(error.status || 500).json({
    message: error.message || 'Internl Server Error',
    statusCode: error.status || 500,
  });
};

module.exports = serverError;
