require('env2')('./.env');
const { join } = require('path');
const express = require('express');
const logger = require('morgan');

const app = express();

app.set('port', process.env.PORT || 8080);
app.use(
  [express.json(), express.urlencoded({ extended: false })],
  express.static(join(__dirname, '..', 'client', 'public')),
  logger('dev')
);

app.get('/', (req, res) => {
  res.json({ msg: 'HELLOOoo' });
});

module.exports = app;
