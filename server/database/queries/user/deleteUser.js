const connection = require('../../config/connection');

const deleteUser = ({ userId }) => {
  const sql = {
    text: 'DELETE FROM users WHERE id=$1 RETURNING *',
    values: [userId],
  };
  return connection.query(sql);
};

module.exports = deleteUser;
