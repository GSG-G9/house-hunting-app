const connection = require('../../config/connection');

const getAllHousesData = (limit = 10, skip = 0) => {
  const sql = {
    text:
      'SELECT h.*, u.username, u.email, u.mobile  FROM houses AS h INNER JOIN users AS u ON h.user_id = u.id LIMIT $1 OFFSET $2;',
    values: [limit, skip],
  };
  return connection.query(sql);
};

module.exports = getAllHousesData;
