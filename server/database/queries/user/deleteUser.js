const connection = require('../../config/connection');

const deleteUser = ({ id }) => {
  const sql = {
    text: 'DELETE FROM users WHERE id=$1;',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteUser;
