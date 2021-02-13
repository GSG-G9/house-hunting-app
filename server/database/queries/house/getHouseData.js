const connection = require('../../config/connection');

const getNewestHousesdata = (houseId) => {
  const sql = {
    text:
      'SELECT h.*, users.username, users.email, users.mobile  FROM (SELECT * FROM houses WHERE id = $1) AS h INNER JOIN users ON users.id = h.user_id;',
    values: [houseId],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesdata;
