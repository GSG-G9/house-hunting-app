const connection = require('../../config/connection');

const getUserData = (userId) => {
  const sql = {
    text: 'SELECT * FROM users WHERE id = $1;',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = getUserData;
