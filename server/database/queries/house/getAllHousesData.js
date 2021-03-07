const connection = require('../../config/connection');

const getAllHousesData = (limit = 10, skip = 0) => {
  const sql = {
    text:
      'SELECT h.*, u.username, u.email, u.mobile,l.location  FROM houses AS h INNER JOIN users AS u ON h.user_id = u.id INNER JOIN locations AS l ON l.id=h.location_id LIMIT $1 OFFSET $2;',
    values: [limit, skip],
  };
  return connection.query(sql);
};

module.exports = getAllHousesData;
