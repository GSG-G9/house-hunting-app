const connection = require('../../config/connection');

const updateUser = (id, username, email, address, mobile) => {
  const sql = {
    text:
      'UPDATE users SET username = $1, email = $2, address = $3, mobile = $4 WHERE id = $5',
    values: [username, email, address, mobile, id],
  };
  return connection.query(sql);
};

module.exports = updateUser;
