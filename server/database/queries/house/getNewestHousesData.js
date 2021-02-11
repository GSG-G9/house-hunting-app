const connection = require('../../config/connection');

const getNewestHousesdata = (limit = 10, skip = 0) => {
  const sql = {
    text:
      'SELECT * FROM (SELECT * FROM houses ORDER BY id DESC LIMIT $1 OFFSET $2) newest ORDER BY id ASC;',
    values: [limit, skip],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesdata;
