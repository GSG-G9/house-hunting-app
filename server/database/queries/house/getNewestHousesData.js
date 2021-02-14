const connection = require('../../config/connection');

const getNewestHousesData = (limit = 10, skip = 0) => {
  const sql = {
    text:
      'SELECT houses.* , users.username,users.email,users.mobile FROM houses INNER JOIN users ON users.id=houses.user_id ORDER BY id DESC LIMIT $1 OFFSET $2 ',
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesData;
