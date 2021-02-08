const JWT = require('jsonwebtoken');

const boomify = require('../../utils/boomify');

const verifying = (token) =>
  new Promise((res, rej) => {
    JWT.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        rej(err);
      } else {
        res(decoded);
      }
    });
  });
