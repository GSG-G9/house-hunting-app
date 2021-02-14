const connection = require('../../config/connection');

const getNewestHousesData = (limit = 10, skip = 0) => {
  const sql = {
<<<<<<< HEAD
    text:
      'SELECT nh.*, u.username, u.email, u.mobile FROM (SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2) AS nh INNER JOIN users AS u ON nh.user_id = u.id ORDER BY id ASC;',
=======
    text: 'SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2 ',
>>>>>>> 4a805b5e6af309ea068ea4829e85a890319971c6
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesData;
