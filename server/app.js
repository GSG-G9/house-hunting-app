require('dotenv').config();
const express = require('express');
const { join } = require('path');
const logger = require('morgan');    
const router = require('./router');
const { errorHandler, notFound } = require('./controller/error');

const app = express();

app.set('PORT', process.env.PORT || 8080);
const middleware = [
  express.json(),
  express.urlencoded({ extended: false }),
  express.static(join(__dirname, '..', 'client', 'build')),
  logger('dev'),
];
app.use(middleware);

app.use('/api/v1', router);
app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
