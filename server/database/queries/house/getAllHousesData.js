const connection = require('../../config/connection');

const getAllHousesData = (limit = 10, skip = 0) => {
  const sql = {
    text: 'SELECT * FROM houses LIMIT $1 OFFSET $2;',
    values: [limit, skip],
  };
  return connection.query(sql);
};

module.exports = getAllHousesData;
