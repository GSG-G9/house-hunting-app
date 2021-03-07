const connection = require('../../config/connection');

const updateUser = ({ userId, username, address, mobile }) => {
  const sql = {
    text:
      'UPDATE users SET username = $1, address = $2, mobile = $3 WHERE id = $4;',
    values: [username, address, mobile, userId],
  };
  return connection.query(sql);
};

module.exports = updateUser;
