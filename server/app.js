require('dotenv').config();
const express = require('express');
const { join } = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const router = require('./router');
const { serverError, clientError } = require('./controller/error');

const app = express();

app.set('PORT', process.env.PORT || 8080);
const middleware = [
  express.json({ limit: '50mb' }),
  express.urlencoded({ extended: false, limit: '50mb' }),
  cookieParser(),
  express.static(join(__dirname, '..', 'client', 'build')),
  logger('dev'),
];
app.use(middleware);

app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

app.use(clientError);
app.use(serverError);

module.exports = app;
