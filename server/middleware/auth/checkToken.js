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

const auth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    let decoded;
    try {
      decoded = await verifying(token);
    } catch (error) {
      throw boomify(401, 'Invalid credentials.');
    }

    const { user_id: userId } = decoded;

    req.userId = userId;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = { auth };
