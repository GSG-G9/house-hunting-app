const JWT = require('jsonwebtoken');

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

const signatureToken = (payload) =>
  new Promise((res, rej) => {
    JWT.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        rej(err);
      } else {
        res(token);
      }
    });
  });

module.exports = { verifying, signatureToken };
