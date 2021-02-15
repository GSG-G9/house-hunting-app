const connection = require('../../config/connection');

const getUserHouses = ({ userId }) => {
  const sql = {
    text: 'SELECT * FROM houses WHERE user_id = $1',
    values: [userId],
  };
  return connection.query(sql);
};
module.exports = getUserHouses;
