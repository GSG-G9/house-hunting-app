const connection = require('../../config/connection');

const updateUser = ({ userId, username, email, address, mobile }) => {
  const sql = {
    text:
      'UPDATE users SET username = $1, email = $2, address = $3, mobile = $4 WHERE id = $5 RETURNING *',
    values: [username, email, address, mobile, userId],
  };
  return connection.query(sql);
};

module.exports = updateUser;
