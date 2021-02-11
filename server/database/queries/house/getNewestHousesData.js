const connection = require('../../config/connection');

const getNewestHousesdata = (limit = 10, skip = 0) => {
  const sql = {
    text:
      'SELECT nh.*, u.username, u.email, u.mobile FROM (SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2) AS nh INNER JOIN users AS u ON nh.user_id = u.id ORDER BY id ASC;',
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesdata;
