const errorHandler = (error, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') console.log(error); 
  res.status(error.statusCode || 500).json({
    message: error.message || 'Internl Server Error',
    statusCode: 500
  });
}

module.exports = errorHandler;
