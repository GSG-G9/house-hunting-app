const connection = require('../../config/connection');

const getNewestHousesdata = (limit = 10) => {
  const sql = {
    text:
      'SELECT * FROM (SELECT * FROM houses ORDER BY id DESC LIMIT $1) newest ORDER BY id ASC;',
    values: [limit],
  };

  return connection.query(sql);
};

module.exports = getNewestHousesdata;
