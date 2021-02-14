const connection = require('../../config/connection');

const getNewestHousesData = (limit = 10, skip = 0) => {
  const sql = {
    text: 'SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2 ',
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesData;
